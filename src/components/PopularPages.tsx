import { pick, type LocaleMap } from "@/lib/i18n";
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { dictionary } from '@/lib/dictionary';
import { getPopularPages } from '@/lib/content';

type Props = {
  locale: Locale;
};

export async function PopularPages({ locale }: Props) {
  const t = dictionary[locale];
  const pages = await getPopularPages(locale, 8);

  if (pages.length === 0) {
    return null;
  }

  return (
    <section className="premiumSection">
      <div className="premiumSectionHeader">
        <div>
          <p className="sectionKicker">{pick(kicker, locale)}</p>
          <h2>{t.popularPages}</h2>
        </div>
        <p>
          {locale === 'ru'
            ? 'Страницы автоматически сортируются по количеству просмотров.'
            : locale === 'uz'
              ? 'Sahifalar ko‘rishlar soniga qarab avtomatik saralanadi.'
              : 'Pages are automatically sorted by view count.'}
        </p>
      </div>

      <div className="popularGrid">
        {pages.map((page, index) => (
          <Link key={page.path} href={page.path} className="popularCard">
            <div className="popularTop">
              <span className="popularIndex">{String(index + 1).padStart(2, '0')}</span>
              <span className="popularArrow">→</span>
            </div>
            <span className="popularTitle">
              {cleanTitle(page.title) || page.path}
            </span>
            <span className="popularViews">
              {page.views} {pick(views, locale)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

const kicker = { uz: 'Statistika', ru: 'Статистика', en: 'Analytics' } satisfies LocaleMap<string>;
const views = { uz: 'ko‘rish', ru: 'просмотров', en: 'views' } satisfies LocaleMap<string>;

function cleanTitle(title: string | null) {
  if (!title) return '';
  return title.replace(' | The Most Reliable Publication', '').trim();
}
