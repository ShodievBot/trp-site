import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServicesPromo from "@/components/ServicesPromo";
import { isLocale, pick, type LocaleMap } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { articleCover, usefulArticles } from "@/lib/useful";

type Props = { params: Promise<{ locale: string }> };

const page = {
  uz: {
    kicker: "Foydali",
    title: "Tadqiqotchilar uchun foydali qo‘llanmalar",
    description: "Scopus va OAK jurnallari, maqola yozish, iqtiboslar, monografiya nashri va xalqaro konferensiyalar bo‘yicha amaliy qo‘llanmalar.",
    read: "O‘qish",
  },
  ru: {
    kicker: "Полезное",
    title: "Полезные материалы для исследователей",
    description: "Практические руководства о журналах Scopus и ОАК, написании статей, цитировании, издании монографий и международных конференциях.",
    read: "Читать",
  },
  en: {
    kicker: "Useful",
    title: "Practical guides for researchers",
    description: "Hands-on guides to Scopus and OAK journals, academic writing, citations, publishing monographs and international conferences.",
    read: "Read",
  },
} satisfies LocaleMap<Record<string, string>>;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = pick(page, locale);
  return pageMetadata({ locale, path: "/useful", title: c.title, description: c.description, image: "/images/covers/news.webp" });
}

export default async function UsefulPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = pick(page, locale);

  return (
    <main>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section className="usefulSection">
        <div className="usefulGrid">
          {usefulArticles.map((a) => (
            <Link href={`/${locale}/useful/${a.slug}`} className="usefulCard" key={a.slug}>
              <Image src={articleCover(a)} alt={pick(a.title, locale)} width={1200} height={630} sizes="(max-width: 720px) 100vw, 380px" />
              <div>
                <h2>{pick(a.title, locale)}</h2>
                <p>{pick(a.description, locale)}</p>
                <strong>{c.read} →</strong>
              </div>
            </Link>
          ))}
        </div>

        <ServicesPromo locale={locale} />
      </section>
    </main>
  );
}
