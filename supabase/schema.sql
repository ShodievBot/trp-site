create extension if not exists pgcrypto;

create table if not exists public.page_stats (
  id uuid primary key default gen_random_uuid(),
  locale text not null check (locale in ('uz', 'ru', 'en')),
  path text not null,
  title text,
  views integer not null default 0,
  last_viewed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique(locale, path)
);

create index if not exists page_stats_locale_views_idx
on public.page_stats(locale, views desc);

create or replace function public.increment_page_view(
  p_locale text,
  p_path text,
  p_title text default null
)
returns void
language plpgsql
security definer
as $$
begin
  insert into public.page_stats(locale, path, title, views, last_viewed_at)
  values (
    p_locale,
    p_path,
    nullif(p_title, ''),
    1,
    now()
  )
  on conflict(locale, path)
  do update set
    views = public.page_stats.views + 1,
    title = coalesce(nullif(p_title, ''), public.page_stats.title),
    last_viewed_at = now();
end;

$$;

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  locale text not null check (locale in ('uz', 'ru', 'en')),
  slug text not null,
  title text not null,
  excerpt text,
  content text,
  cover_url text,
  category text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(locale, slug)
);

create index if not exists news_locale_status_date_idx
on public.news(locale, status, published_at desc);

alter table public.page_stats enable row level security;
alter table public.news enable row level security;

drop policy if exists "Public can read page stats" on public.page_stats;
create policy "Public can read page stats"
on public.page_stats
for select
using (true);

drop policy if exists "Public can read published news" on public.news;
create policy "Public can read published news"
on public.news
for select
using (status = 'published');

grant execute on function public.increment_page_view(text, text, text)
to anon, authenticated, service_role;

insert into public.news (
  locale,
  slug,
  title,
  excerpt,
  content,
  category,
  status,
  published_at
)
values
(
  'uz',
  'uzbekistan-turkiye-academic-summit',
  'Uzbekistan–Türkiye International Academic Cooperation Summit Trabzonda bo‘lib o‘tadi',
  'The Most Reliable Publication xalqaro akademik hamkorlik sammitiga taklif qiladi.',
  'Uzbekistan–Türkiye International Academic Cooperation Summit Turkiyaning Trabzon shahrida bo‘lib o‘tadi. Tadbir ilm-fan, madaniyat va xalqaro hamkorlikni rivojlantirishga qaratilgan.',
  'Konferensiyalar',
  'published',
  now() - interval '2 days'
),
(
  'ru',
  'uzbekistan-turkiye-academic-summit',
  'Uzbekistan–Türkiye International Academic Cooperation Summit пройдёт в Трабзоне',
  'The Most Reliable Publication приглашает участников на международный академический саммит.',
  'Uzbekistan–Türkiye International Academic Cooperation Summit пройдёт в городе Трабзон, Турция. Мероприятие направлено на развитие науки, культуры и международного академического сотрудничества.',
  'Конференции',
  'published',
  now() - interval '2 days'
),
(
  'en',
  'uzbekistan-turkiye-academic-summit',
  'Uzbekistan–Türkiye International Academic Cooperation Summit will be held in Trabzon',
  'The Most Reliable Publication invites participants to the international academic summit.',
  'Uzbekistan–Türkiye International Academic Cooperation Summit will be held in Trabzon, Türkiye. The event focuses on science, culture and international academic cooperation.',
  'Conferences',
  'published',
  now() - interval '2 days'
),
(
  'uz',
  'scientific-article-submission-is-open',
  'Xalqaro konferensiya uchun ilmiy maqolalar qabuli boshlandi',
  'Maqolalar IMRAD talablari asosida ingliz tilida qabul qilinadi.',
  'Xalqaro konferensiya uchun ilmiy maqolalar qabuli boshlandi. Maqolalar belgilangan muddatgacha qabul qilinadi.',
  'Yangiliklar',
  'published',
  now() - interval '1 day'
),
(
  'ru',
  'scientific-article-submission-is-open',
  'Открыт приём научных статей для международной конференции',
  'Статьи принимаются на английском языке по требованиям IMRAD.',
  'Открыт приём научных статей для международной конференции. Материалы принимаются до установленного срока.',
  'Новости',
  'published',
  now() - interval '1 day'
),
(
  'en',
  'scientific-article-submission-is-open',
  'Submission of scientific articles for the international conference is now open',
  'Articles are accepted in English according to IMRAD requirements.',
  'Submission of scientific articles for the international conference is now open. Materials are accepted until the announced deadline.',
  'News',
  'published',
  now() - interval '1 day'
)
on conflict(locale, slug) do nothing;
