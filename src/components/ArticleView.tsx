import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageLightbox from "@/components/ImageLightbox";
import ServicesPromo from "@/components/ServicesPromo";
import { isLocale, locales, pick, type LocaleMap } from "@/lib/i18n";
import { galleryBlocks } from "@/lib/legacyMedia";
import { pageMetadata } from "@/lib/seo";
import { articleCover, parseBody, type UsefulArticle } from "@/lib/useful";

type Labels = LocaleMap<{ kicker: string; back: string }>;
type Props = { params: Promise<{ locale: string; slug: string }> };

const ui = {
  uz: { open: "Kattalashtirish", close: "Yopish", source: "Matbuotda", contact: "Ariza qoldirish" },
  ru: { open: "Открыть крупно", close: "Закрыть", source: "Публикация в прессе", contact: "Оставить заявку" },
  en: { open: "Open full size", close: "Close", source: "Press coverage", contact: "Submit a request" },
} satisfies LocaleMap<Record<string, string>>;

// Detail-page route (static params, metadata, page) for one section: /<section>/<slug>.
export function articleRoute(section: string, items: UsefulArticle[], labels: Labels) {
  const find = (slug: string) => items.find((x) => x.slug === slug);

  return {
    generateStaticParams: () => locales.flatMap((locale) => items.map((a) => ({ locale, slug: a.slug }))),

    generateMetadata: async ({ params }: Props) => {
      const { locale, slug } = await params;
      const a = find(slug);
      if (!isLocale(locale) || !a) return {};
      return pageMetadata({
        locale,
        path: `/${section}/${a.slug}`,
        title: pick(a.title, locale),
        description: pick(a.description, locale),
        image: articleCover(a),
      });
    },

    Page: async ({ params }: Props) => {
      const { locale, slug } = await params;
      const a = find(slug);
      if (!isLocale(locale) || !a) notFound();
      const t = pick(labels, locale);
      const u = pick(ui, locale);
      const title = pick(a.title, locale);
      const media = galleryBlocks.find((b) => b.id === a.gallery);

      return (
        <main>
          <section className="innerHero">
            <div className="innerHeroContent">
              <p className="innerKicker">{t.kicker}</p>
              <h1>{title}</h1>
              <p>{a.meta ? pick(a.meta, locale) : pick(a.description, locale)}</p>
            </div>
          </section>

          <section className="usefulSection usefulArticleSection">
            <article className="usefulArticle">
              {!a.pages && (
                <Image src={articleCover(a)} alt={title} width={1200} height={630} sizes="(max-width: 940px) 100vw, 900px" priority />
              )}

              <div className="usefulArticleBody">
                {a.pages && (
                  <div className="legalScans legalDocPages" style={{ marginBottom: 24 }}>
                    {a.pages.map((src, i) => (
                      <ImageLightbox key={src} src={src} alt={`${title}, ${i + 1}`} openLabel={u.open} closeLabel={u.close} />
                    ))}
                  </div>
                )}

                {parseBody(pick(a.body, locale)).map((block, i) =>
                  block.type === "h2" ? (
                    <h2 key={i}>{block.text}</h2>
                  ) : block.type === "ul" ? (
                    <ul key={i}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{block.text}</p>
                  )
                )}

                {a.source && (
                  <p>
                    <a href={a.source} target="_blank" rel="noopener noreferrer">
                      {u.source} ↗
                    </a>
                  </p>
                )}

                {media && (
                  <div className="legacyGalleryGrid">
                    {media.video && (
                      <video className="legacyGalleryVideo" controls preload="none" playsInline poster={media.video.poster} src={media.video.src} />
                    )}
                    {media.images.map((src) => (
                      <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="legacyGalleryItem" aria-label={u.open}>
                        <Image src={src} alt={title} fill sizes="(max-width: 720px) 50vw, 280px" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>

            <ServicesPromo locale={locale} />

            <div className="legalActions">
              <Link href={`/${locale}/${section}`} className="premiumButton premiumButtonSecondary">
                ← {t.back}
              </Link>
              <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
                {u.contact}
              </Link>
            </div>
          </section>
        </main>
      );
    },
  };
}
