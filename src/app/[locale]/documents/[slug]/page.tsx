import { pick } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import {
  getPublicDocumentBySlug,
  formatDocumentDate,
  type Locale,
} from "@/lib/documentsAdmin";
import { pageMetadata } from "@/lib/seo";

const content = {
  uz: {
    back: "Hujjatlarga qaytish",
    openFile: "Hujjatni ochish",
    openImage: "Rasmni to‘liq ochish",
    contact: "Bog‘lanish",
    published: "E’lon qilingan sana",
    fileUnavailable: "Fayl hali yuklanmagan.",
  },
  ru: {
    back: "Вернуться к документам",
    openFile: "Открыть документ",
    openImage: "Открыть фото полностью",
    contact: "Связаться",
    published: "Дата публикации",
    fileUnavailable: "Файл пока не загружен.",
  },
  en: {
    back: "Back to documents",
    openFile: "Open document",
    openImage: "Open full image",
    contact: "Contact us",
    published: "Published date",
    fileUnavailable: "File is not uploaded yet.",
  },
};

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
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

const metaTopStyle: CSSProperties = {
  marginBottom: "16px",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  color: "#667085",
  fontSize: "13px",
};

const metaStrongStyle: CSSProperties = {
  color: "#a97822",
};

const detailGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.08fr) minmax(320px, 0.92fr)",
  gap: "24px",
  alignItems: "stretch",
};

const imageCardStyle: CSSProperties = {
  minHeight: "520px",
  borderRadius: "30px",
  overflow: "hidden",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.08)",
  boxShadow: "0 22px 58px rgba(15, 23, 42, 0.08)",
};

const imageViewStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: "520px",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#f8fafc",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
};

const placeholderStyle: CSSProperties = {
  ...imageViewStyle,
  background:
    "linear-gradient(135deg, rgba(5, 24, 58, 0.98), rgba(18, 52, 118, 0.93)), radial-gradient(circle at 72% 22%, rgba(214, 168, 79, 0.24), transparent 36%)",
  color: "rgba(255,255,255,0.92)",
  fontSize: "36px",
  fontWeight: 950,
  letterSpacing: "0.16em",
};

const infoCardStyle: CSSProperties = {
  padding: "30px",
  borderRadius: "30px",
  background: "rgba(255,255,255,0.96)",
  border: "1px solid rgba(15, 23, 42, 0.08)",
  boxShadow: "0 22px 58px rgba(15, 23, 42, 0.08)",
};

const categoryStyle: CSSProperties = {
  display: "inline-flex",
  width: "fit-content",
  minHeight: "28px",
  alignItems: "center",
  padding: "0 12px",
  borderRadius: "999px",
  background: "rgba(214, 168, 79, 0.12)",
  color: "#a97822",
  border: "1px solid rgba(214, 168, 79, 0.22)",
  fontSize: "10px",
  fontWeight: 950,
  textTransform: "uppercase",
  letterSpacing: "0.13em",
};

const titleStyle: CSSProperties = {
  margin: "18px 0 14px",
  color: "#111827",
  fontSize: "34px",
  lineHeight: 1.05,
  letterSpacing: "-0.055em",
};

const descriptionStyle: CSSProperties = {
  margin: "0 0 22px",
  color: "#344054",
  fontSize: "15px",
  lineHeight: 1.85,
};

const infoListStyle: CSSProperties = {
  display: "grid",
  gap: "12px",
  margin: "22px 0",
  padding: "18px",
  borderRadius: "22px",
  background: "#f8fafc",
  border: "1px solid rgba(15, 23, 42, 0.07)",
};

const infoRowStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  color: "#667085",
  fontSize: "13px",
  lineHeight: 1.5,
};

const actionGroupStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "22px",
};

const primaryButtonStyle: CSSProperties = {
  minHeight: "44px",
  padding: "0 18px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #f6dda0, #d8ad58)",
  color: "#111827",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 950,
  boxShadow: "0 14px 30px rgba(214, 168, 79, 0.24)",
};

const secondaryButtonStyle: CSSProperties = {
  ...primaryButtonStyle,
  background: "#ffffff",
  color: "#344054",
  border: "1px solid rgba(15, 23, 42, 0.12)",
  boxShadow: "0 10px 22px rgba(15, 23, 42, 0.045)",
};

export const revalidate = 300;

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = await getPublicDocumentBySlug(decodeURIComponent(slug));
  if (!item) return {};
  return pageMetadata({
    locale,
    path: `/documents/${encodeURIComponent(item.slug)}`,
    title: pick(item.title, locale) || item.title.en,
    description: pick(item.description, locale) || item.description.en || pick(item.title, locale),
    image: item.imageUrl || undefined,
  });
}

export default async function DocumentDetailPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const t = pick(content, locale);
  const decodedSlug = decodeURIComponent(slug);
  const item = await getPublicDocumentBySlug(decodedSlug);

  if (!item) {
    notFound();
  }

  const title = pick(item.title, locale) || item.title.ru || item.title.en || item.title.uz;
  const description =
    pick(item.description, locale) ||
    item.description.ru ||
    item.description.en ||
    item.description.uz;

  return (
    <main style={pageStyle}>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{item.category}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={metaTopStyle}>
          <span>{t.published}</span>
          <strong style={metaStrongStyle}>
            {formatDocumentDate(item.publishedAt, locale)}
          </strong>
        </div>

        <div className="documentDetailGrid" style={detailGridStyle}>
          <div style={imageCardStyle}>
            {item.imageUrl ? (
              <a
                href={item.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...imageViewStyle,
                  backgroundImage: `url(${item.imageUrl})`,
                }}
                aria-label={t.openImage}
              />
            ) : (
              <div style={placeholderStyle}>TRP</div>
            )}
          </div>

          <aside style={infoCardStyle}>
            <span style={categoryStyle}>{item.category}</span>
            <h2 style={titleStyle}>{title}</h2>

            <p style={descriptionStyle}>{description}</p>

            <div style={infoListStyle}>
              <div style={infoRowStyle}>
                <span>{t.published}</span>
                <strong style={{ color: "#111827" }}>
                  {formatDocumentDate(item.publishedAt, locale)}
                </strong>
              </div>

              <div style={infoRowStyle}>
                <span>Slug</span>
                <strong style={{ color: "#111827" }}>{item.slug}</strong>
              </div>
            </div>

            <div style={actionGroupStyle}>
              {item.fileUrl ? (
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={primaryButtonStyle}
                >
                  {t.openFile}
                </a>
              ) : (
                <span style={{ color: "#667085", fontSize: "14px" }}>
                  {t.fileUnavailable}
                </span>
              )}

              {item.imageUrl ? (
                <a
                  href={item.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={secondaryButtonStyle}
                >
                  {t.openImage}
                </a>
              ) : null}

              <Link href={`/${locale}/documents`} style={secondaryButtonStyle}>
                ← {t.back}
              </Link>

              <Link href={`/${locale}/contact`} style={secondaryButtonStyle}>
                {t.contact}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
