import { pick } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { getPublicNews, formatNewsDate, type Locale } from "@/lib/publicNews";
import { pageMetadata } from "@/lib/seo";

const content = {
  uz: {
    badge: "Yangiliklar",
    title: "So‘nggi yangiliklar va e’lonlar",
    subtitle:
      "The Most Reliable Publication faoliyati, konferensiyalar, ilmiy nashrlar va xalqaro hamkorlik bo‘yicha yangiliklar.",
    empty: "Hozircha yangiliklar mavjud emas.",
    read: "Batafsil",
  },
  ru: {
    badge: "Новости",
    title: "Последние новости и объявления",
    subtitle:
      "Новости The Most Reliable Publication о конференциях, научных публикациях, журналах, Scopus и международном сотрудничестве.",
    empty: "Пока новостей нет.",
    read: "Подробнее",
  },
  en: {
    badge: "News",
    title: "Latest news and announcements",
    subtitle:
      "News from The Most Reliable Publication about conferences, academic publications, Scopus, journals and international cooperation.",
    empty: "No news yet.",
    read: "Read more",
  },
};

const pageStyle: CSSProperties = {
  background:
    "radial-gradient(circle at top left, rgba(214, 168, 79, 0.055), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%)",
};

const sectionStyle: CSSProperties = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "28px 20px 52px",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px",
  alignItems: "stretch",
};

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  borderRadius: "26px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.09)",
  boxShadow: "0 20px 54px rgba(15, 23, 42, 0.085)",
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
};

const coverStyle: CSSProperties = {
  minHeight: "176px",
  display: "grid",
  placeItems: "center",
  background:
    "linear-gradient(135deg, rgba(5, 24, 58, 0.98), rgba(18, 52, 118, 0.94)), radial-gradient(circle at 74% 24%, rgba(214, 168, 79, 0.28), transparent 36%)",
  color: "#ffffff",
};

const coverTextStyle: CSSProperties = {
  color: "rgba(255,255,255,0.94)",
  fontSize: "30px",
  fontWeight: 950,
  letterSpacing: "0.16em",
};

const bodyStyle: CSSProperties = {
  padding: "22px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
};

const metaStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
  marginBottom: "14px",
};

const categoryStyle: CSSProperties = {
  color: "#a97822",
  fontSize: "10px",
  fontWeight: 950,
  textTransform: "uppercase",
  letterSpacing: "0.13em",
};

const dateStyle: CSSProperties = {
  color: "#667085",
  fontSize: "11px",
  fontWeight: 750,
  whiteSpace: "nowrap",
};

const titleStyle: CSSProperties = {
  margin: "0 0 11px",
  color: "#111827",
  fontSize: "23px",
  lineHeight: 1.12,
  letterSpacing: "-0.04em",
  fontWeight: 900,
};

const excerptStyle: CSSProperties = {
  margin: 0,
  color: "#566174",
  fontSize: "14px",
  lineHeight: 1.68,
  flexGrow: 1,
};

const readStyle: CSSProperties = {
  display: "inline-flex",
  width: "fit-content",
  marginTop: "20px",
  minHeight: "38px",
  padding: "0 16px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "rgba(214, 168, 79, 0.12)",
  color: "#a97822",
  border: "1px solid rgba(214, 168, 79, 0.2)",
  fontSize: "13px",
  fontWeight: 950,
};

const emptyStyle: CSSProperties = {
  padding: "24px",
  borderRadius: "22px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.09)",
  color: "#667085",
  fontWeight: 750,
  boxShadow: "0 14px 34px rgba(15, 23, 42, 0.045)",
};

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

function isLocale(value: string): value is Locale {
  return value === "uz" || value === "ru" || value === "en";
}

export const revalidate = 300;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = pick(content, locale);
  return pageMetadata({ locale, path: "/news", title: t.title, description: t.subtitle });
}

export default async function NewsPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const t = pick(content, locale);
  const news = await getPublicNews();

  return (
    <main style={pageStyle}>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{t.badge}</p>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <section style={sectionStyle}>
        {news.length === 0 ? (
          <div style={emptyStyle}>{t.empty}</div>
        ) : (
          <div style={gridStyle}>
            {news.map((item) => (
              <Link
                href={`/${locale}/news/${item.slug}`}
                style={cardStyle}
                key={item.id}
              >
                {item.imageUrl ? (
                  <div
                    style={{
                      ...coverStyle,
                      backgroundImage: `linear-gradient(180deg, rgba(5,24,58,0.05), rgba(5,24,58,0.08)), url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-label={pick(item.title, locale) || item.title.ru || item.title.en || item.title.uz}
                  />
                ) : (
                  <div style={coverStyle}>
                    <span style={coverTextStyle}>TRP</span>
                  </div>
                )}

                <div style={bodyStyle}>
                  <div style={metaStyle}>
                    <span style={categoryStyle}>{item.category}</span>
                    <time style={dateStyle}>
                      {formatNewsDate(item.publishedAt, locale)}
                    </time>
                  </div>

                  <h2 style={titleStyle}>
                    {pick(item.title, locale) || item.title.ru || item.title.en || item.title.uz}
                  </h2>

                  <p style={excerptStyle}>
                    {pick(item.excerpt, locale) || item.excerpt.ru || item.excerpt.en || item.excerpt.uz}
                  </p>

                  <strong style={readStyle}>{t.read}</strong>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
