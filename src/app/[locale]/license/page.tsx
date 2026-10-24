import { pick, type LocaleMap } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageLightbox from "@/components/ImageLightbox";
import { isLocale, type Locale } from "@/lib/i18n";
import { getLegalSettings, getLicenseImage } from "@/lib/legalAdmin";
import { legacyLicenseScans } from "@/lib/legacyMedia";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 300;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page = {
  uz: {
    kicker: "Litsenziya",
    title: "Nashriyot guvohnomasi va litsenziyalar",
    description:
      "The Most Reliable Publication nashriyot faoliyatini olib borish va Turkiyada xalqaro konferensiyalar o‘tkazish bo‘yicha rasmiy hujjatlari.",
    mainTitle: "Nashriyot guvohnomasi",
    placeholder: "Guvohnoma tasviri tez orada joylashtiriladi",
    open: "Kattalashtirish",
    close: "Yopish",
    scansTitle: "Tasdiqnomalar va ruxsatnomalar",
    scansText: "Turkiyada xalqaro konferensiya o‘tkazish bo‘yicha litsenziya va tasdiqnomalar.",
    contact: "Savollar bo‘yicha bog‘lanish",
  },
  ru: {
    kicker: "Лицензия",
    title: "Свидетельство и лицензии издательства",
    description:
      "Официальные документы The Most Reliable Publication на издательскую деятельность и проведение международных конференций в Турции.",
    mainTitle: "Свидетельство издательства",
    placeholder: "Изображение свидетельства будет добавлено в ближайшее время",
    open: "Открыть крупно",
    close: "Закрыть",
    scansTitle: "Подтверждения и разрешения",
    scansText: "Лицензия и подтверждения на проведение международных конференций в Турции.",
    contact: "Связаться по вопросам",
  },
  en: {
    kicker: "License",
    title: "Publishing certificate and licenses",
    description:
      "Official documents of The Most Reliable Publication for publishing activities and organizing international conferences in Türkiye.",
    mainTitle: "Publishing certificate",
    placeholder: "The certificate image will be added soon",
    open: "Open full size",
    close: "Close",
    scansTitle: "Confirmations and permits",
    scansText: "License and confirmations for organizing international conferences in Türkiye.",
    contact: "Contact us",
  },
} satisfies LocaleMap<Record<string, string>>;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = pick(page, locale);
  return pageMetadata({ locale, path: "/license", title: c.title, description: c.description });
}

export default async function LicensePage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const c = pick(page, locale);
  const image = getLicenseImage(await getLegalSettings());

  return (
    <main>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section className="legalSection">
        <article className="legalCard">
          <h2>{c.mainTitle}</h2>

          {image ? (
            <ImageLightbox src={image} alt={c.mainTitle} openLabel={c.open} closeLabel={c.close} />
          ) : (
            <div className="legalPlaceholder">
              <strong>TRP</strong>
              <span>{c.placeholder}</span>
            </div>
          )}
        </article>

        <article className="legalCard">
          <h2>{c.scansTitle}</h2>
          <p>{c.scansText}</p>

          <div className="legalScans">
            {legacyLicenseScans.map((src, index) => (
              <ImageLightbox
                key={src}
                src={src}
                alt={`${c.scansTitle} ${index + 1}`}
                openLabel={c.open}
                closeLabel={c.close}
              />
            ))}
          </div>
        </article>

        <div className="legalActions">
          <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
            {c.contact}
          </Link>
        </div>
      </section>
    </main>
  );
}
