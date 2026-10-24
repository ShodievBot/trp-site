import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import {
  getPublicDocuments,
  formatDocumentDate,
  type Locale,
} from "@/lib/documentsAdmin";
import { pageMetadata } from "@/lib/seo";

const content = {
  uz: {
    badge: "Hujjatlar",
    title: "Rasmiy hujjatlar",
    subtitle:
      "The Most Reliable Publication bo‘yicha rasmiy hujjatlar, shablonlar va fayllar.",
    empty:
      "Hujjatlar keyinroq qo‘shiladi. Hozircha kerakli ma’lumot uchun biz bilan bog‘laning.",
    open: "Batafsil",
    contact: "Bog‘lanish",
  },
  ru: {
    badge: "Документы",
    title: "Официальные документы",
    subtitle:
      "Официальные документы, шаблоны и файлы The Most Reliable Publication.",
    empty:
      "Документы будут добавлены позже. Пока вы можете связаться с нами для получения нужной информации.",
    open: "Подробнее",
    contact: "Связаться",
  },
  en: {
    badge: "Documents",
    title: "Official documents",
    subtitle:
      "Official documents, templates and files of The Most Reliable Publication.",
    empty:
      "Documents will be added later. For now, please contact us for the required information.",
    open: "Details",
    contact: "Contact us",
  },
};

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

function isLocale(value: string): value is Locale {
  return value === "uz" || value === "ru" || value === "en";
}

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
  minHeight: "190px",
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

const textStyle: CSSProperties = {
  margin: 0,
  color: "#566174",
  fontSize: "14px",
  lineHeight: 1.68,
  flexGrow: 1,
};

const actionStyle: CSSProperties = {
  display: "inline-flex",
  width: "fit-content",
  minHeight: "38px",
  marginTop: "20px",
  padding: "0 16px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "rgba(214, 168, 79, 0.12)",
  color: "#a97822",
  border: "1px solid rgba(214, 168, 79, 0.2)",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 950,
};

const emptyStyle: CSSProperties = {
  padding: "28px",
  borderRadius: "26px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.09)",
  boxShadow: "0 20px 54px rgba(15, 23, 42, 0.07)",
  color: "#667085",
  fontSize: "15px",
  lineHeight: 1.7,
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = content[locale];
  return pageMetadata({ locale, path: "/documents", title: t.title, description: t.subtitle });
}

export default async function DocumentsPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const t = content[locale];
  const documents = await getPublicDocuments();

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
        {documents.length === 0 ? (
          <div style={emptyStyle}>
            <p style={{ margin: 0 }}>{t.empty}</p>

            <Link href={`/${locale}/contact`} style={actionStyle}>
              {t.contact}
            </Link>
          </div>
        ) : (
          <div style={gridStyle}>
            {documents.map((item) => {
              const title =
                item.title[locale] || item.title.ru || item.title.en || item.title.uz;
              const description =
                item.description[locale] ||
                item.description.ru ||
                item.description.en ||
                item.description.uz;

              return (
                <Link
                  href={`/${locale}/documents/${item.slug}`}
                  style={cardStyle}
                  key={item.id}
                >
                  {item.imageUrl ? (
                    <div
                      style={{
                        ...coverStyle,
                        backgroundImage: `linear-gradient(180deg, rgba(5,24,58,0.03), rgba(5,24,58,0.08)), url(${item.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      aria-label={title}
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
                        {formatDocumentDate(item.publishedAt, locale)}
                      </time>
                    </div>

                    <h2 style={titleStyle}>{title}</h2>
                    <p style={textStyle}>{description}</p>

                    <strong style={actionStyle}>{t.open}</strong>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
