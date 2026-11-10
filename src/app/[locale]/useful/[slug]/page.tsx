import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServicesPromo from "@/components/ServicesPromo";
import { isLocale, locales, pick, type LocaleMap } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { parseBody, usefulArticles, usefulCover } from "@/lib/useful";

type Props = { params: Promise<{ locale: string; slug: string }> };

const labels = {
  uz: { kicker: "Foydali", back: "Barcha qo‘llanmalar" },
  ru: { kicker: "Полезное", back: "Все материалы" },
  en: { kicker: "Useful", back: "All guides" },
} satisfies LocaleMap<Record<string, string>>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => usefulArticles.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const a = usefulArticles.find((x) => x.slug === slug);
  if (!isLocale(locale) || !a) return {};
  return pageMetadata({
    locale,
    path: `/useful/${a.slug}`,
    title: pick(a.title, locale),
    description: pick(a.description, locale),
    image: usefulCover(a.slug),
  });
}

export default async function UsefulArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const a = usefulArticles.find((x) => x.slug === slug);
  if (!isLocale(locale) || !a) notFound();
  const t = pick(labels, locale);
  const title = pick(a.title, locale);

  return (
    <main>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{t.kicker}</p>
          <h1>{title}</h1>
          <p>{pick(a.description, locale)}</p>
        </div>
      </section>

      <section className="usefulSection usefulArticleSection">
        <article className="usefulArticle">
          <Image src={usefulCover(a.slug)} alt={title} width={1200} height={630} sizes="(max-width: 940px) 100vw, 900px" priority />
          <div className="usefulArticleBody">
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
          </div>
        </article>

        <ServicesPromo locale={locale} />

        <div className="legalActions">
          <Link href={`/${locale}/useful`} className="premiumButton premiumButtonSecondary">
            ← {t.back}
          </Link>
        </div>
      </section>
    </main>
  );
}
