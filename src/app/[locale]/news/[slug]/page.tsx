import { pick } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import {
  getPublicNewsBySlug,
  formatNewsDate,
  type Locale,
} from "@/lib/publicNews";
import { pageMetadata } from "@/lib/seo";

const content = {
  uz: {
    back: "Yangiliklarga qaytish",
    contact: "Ariza qoldirish",
    published: "E’lon qilingan sana",
  },
  ru: {
    back: "Вернуться к новостям",
    contact: "Оставить заявку",
    published: "Дата публикации",
  },
  en: {
    back: "Back to news",
    contact: "Submit request",
    published: "Published date",
  },
};

const pageStyle: CSSProperties = {
  background:
    "radial-gradient(circle at top left, rgba(214, 168, 79, 0.055), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%)",
};

const sectionStyle: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "24px 20px 46px",
};

const metaStyle: CSSProperties = {
  marginBottom: "14px",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  color: "#667085",
  fontSize: "13px",
};

const metaStrongStyle: CSSProperties = {
  color: "#a97822",
};

const cardStyle: CSSProperties = {
  overflow: "hidden",
  borderRadius: "26px",
  background: "rgba(255,255,255,0.96)",
  border: "1px solid rgba(15, 23, 42, 0.08)",
  boxShadow: "0 22px 58px rgba(15, 23, 42, 0.08)",
};

const coverStyle: CSSProperties = {
  minHeight: "260px",
  display: "grid",
  placeItems: "center",
  background:
    "linear-gradient(135deg, rgba(5, 24, 58, 0.98), rgba(18, 52, 118, 0.93)), radial-gradient(circle at 72% 22%, rgba(214, 168, 79, 0.24), transparent 36%)",
  color: "#ffffff",
};

const coverTextStyle: CSSProperties = {
  color: "rgba(255,255,255,0.92)",
  fontSize: "34px",
  fontWeight: 950,
  letterSpacing: "0.16em",
};

const contentStyle: CSSProperties = {
  padding: "28px",
};

const paragraphStyle: CSSProperties = {
  margin: "0 0 16px",
  color: "#273244",
  fontSize: "16px",
  lineHeight: 1.85,
};

const linkStyle: CSSProperties = {
  color: "#a97822",
  fontWeight: 700,
  wordBreak: "break-all",
};

const actionsStyle: CSSProperties = {
  marginTop: "18px",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
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

export const revalidate = 300;

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = await getPublicNewsBySlug(slug);
  if (!item) return {};
  return pageMetadata({
    locale,
    path: `/news/${item.slug}`,
    title: pick(item.title, locale) || item.title.en,
    description: pick(item.excerpt, locale) || item.excerpt.en,
    image: item.imageUrl || undefined,
  });
}

// Renders bare http(s) URLs inside plain-text news paragraphs as links.
function linkify(text: string) {
  return text.split(/(https?:\/\/\S+)/g).map((part, index) =>
    /^https?:\/\//.test(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default async function NewsDetailPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const t = pick(content, locale);
  const item = await getPublicNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main style={pageStyle}>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{item.category}</p>
          <h1>{pick(item.title, locale)}</h1>
          <p>{pick(item.excerpt, locale)}</p>
        </div>
      </section>

      <article style={sectionStyle}>
        <div style={metaStyle}>
          <span>{t.published}</span>
          <strong style={metaStrongStyle}>
            {formatNewsDate(item.publishedAt, locale)}
          </strong>
        </div>

        <div style={cardStyle}>
          {item.imageUrl ? (
            <div
              style={{
                ...coverStyle,
                backgroundImage: `linear-gradient(180deg, rgba(5,24,58,0.04), rgba(5,24,58,0.08)), url(${item.imageUrl})`,
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

          <div style={contentStyle}>
            {pick(item.content, locale)
              .split("\n")
              .filter(Boolean)
              .map((paragraph) => (
                <p style={paragraphStyle} key={paragraph}>
                  {linkify(paragraph)}
                </p>
              ))}
          </div>

          {item.gallery && item.gallery.length > 0 ? (
            <div className="legacyGalleryGrid" style={{ padding: "0 28px 28px" }}>
              {item.gallery.map((src) => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="legacyGalleryItem">
                  <Image src={src} alt={pick(item.title, locale)} fill sizes="(max-width: 720px) 50vw, 280px" />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div style={actionsStyle}>
          <Link href={`/${locale}/news`} className="premiumButton premiumButtonSecondary">
            ← {t.back}
          </Link>

          <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
            {t.contact}
          </Link>
        </div>
      </article>
    </main>
  );
}
