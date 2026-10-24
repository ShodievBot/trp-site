-- Additive migration: storage for admin-managed content that used to live in data/*.json.
-- Safe to re-run. Does not touch existing tables (news, page_stats, admin_settings).
-- The legacy per-locale public.news table is left as is; the site now reads public.site_news,
-- which keeps all three locales in one row (same shape as the admin form / data/news.json).

create table if not exists public.site_news (
  id text primary key,
  slug text not null unique,
  status text not null default 'published' check (status in ('draft', 'published')),
  category text not null default 'News',
  published_at date not null default current_date,
  image_url text not null default '',
  gallery jsonb not null default '[]'::jsonb,
  title jsonb not null default '{}'::jsonb,
  excerpt jsonb not null default '{}'::jsonb,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists site_news_status_date_idx
on public.site_news(status, published_at desc);

create table if not exists public.site_documents (
  id text primary key,
  slug text not null unique,
  status text not null default 'published' check (status in ('draft', 'published')),
  category text not null default 'Document',
  image_url text not null default '',
  file_url text not null default '',
  published_at date not null default current_date,
  title jsonb not null default '{}'::jsonb,
  description jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- key/value settings edited from the admin panel: 'payment', 'legal' (license image + public offer)
create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- Only the server (service role) reads and writes these tables; no public policies.
alter table public.site_news enable row level security;
alter table public.site_documents enable row level security;
alter table public.site_settings enable row level security;
