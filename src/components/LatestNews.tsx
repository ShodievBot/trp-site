import Link from "next/link";
import type { CSSProperties } from "react";
import {
  getLatestPublicNews,
  formatNewsDate,
  type Locale,
} from "@/lib/publicNews";

const content = {
  uz: {
    kicker: "Yangiliklar",
    title: "So‘nggi yangiliklar",
    text: "Nashriyot, konferensiyalar va xalqaro ilmiy hamkorlik bo‘yicha oxirgi e’lonlar.",
    read: "Batafsil",
    all: "Barcha yangiliklar",
    empty: "Hozircha yangiliklar mavjud emas.",
  },
  ru: {
    kicker: "Новости",
    title: "Последние новости",
    text: "Актуальные объявления о публикациях, конференциях и международном академическом сотрудничестве.",
    read: "Подробнее",
    all: "Все новости",
    empty: "Пока новостей нет.",
  },
  en: {
    kicker: "News",
    title: "Latest news",
    text: "Latest updates about publishing, conferences and international academic cooperation.",
    read: "Read more",
    all: "All news",
    empty: "No news yet.",
  },
};

const sectionStyle: CSSProperties = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "28px 20px 48px",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px",
  marginTop: "22px",
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
  minHeight: "166px",
  display: "grid",
  placeItems: "center",
  background:
    "linear-gradient(135deg, rgba(5, 24, 58, 0.98), rgba(18, 52, 118, 0.94)), radial-gradient(circle at 74% 24%, rgba(214, 168, 79, 0.28), transparent 36%)",
  color: "#ffffff",
};

const coverTextStyle: CSSProperties = {
  color: "rgba(255,255,255,0.94)",
  fontSize: "28px",
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

export async function LatestNews({ locale }: { locale: Locale }) {
  const t = content[locale] || content.uz;
  const news = await getLatestPublicNews(3);

  return (
    <section style={sectionStyle}>
      <div className="premiumSectionHeader">
        <div>
          <p className="sectionKicker">{t.kicker}</p>
          <h2>{t.title}</h2>
        </div>

        <p>{t.text}</p>
      </div>

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
              <div style={coverStyle}>
                <span style={coverTextStyle}>TRP</span>
              </div>

              <div style={bodyStyle}>
                <div style={metaStyle}>
                  <span style={categoryStyle}>{item.category}</span>
                  <time style={dateStyle}>
                    {formatNewsDate(item.publishedAt, locale)}
                  </time>
                </div>

                <h3 style={titleStyle}>
                  {item.title[locale] || item.title.ru || item.title.en || item.title.uz}
                </h3>

                <p style={excerptStyle}>
                  {item.excerpt[locale] || item.excerpt.ru || item.excerpt.en || item.excerpt.uz}
                </p>

                <strong style={readStyle}>{t.read}</strong>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <Link href={`/${locale}/news`} className="premiumButton premiumButtonSecondary">
          {t.all}
        </Link>
      </div>
    </section>
  );
}
