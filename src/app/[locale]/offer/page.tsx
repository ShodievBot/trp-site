import { pick, type LocaleMap } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getLegalSettings } from "@/lib/legalAdmin";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 300;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page = {
  uz: {
    kicker: "Oferta",
    title: "Ommaviy oferta",
    description:
      "The Most Reliable Publication xizmatlaridan foydalanish shartlari: nashriyot xizmatlari, ilmiy nashrlar va xalqaro konferensiyalarda ishtirok.",
    placeholder:
      "Ommaviy oferta matni tez orada joylashtiriladi. Shartnoma shartlari bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘laning.",
    file: "Ofertani PDF formatida ochish",
    updated: "Oxirgi yangilanish",
    contracts: "Shartnomalar namunalari",
    payment: "To‘lov sahifasi",
  },
  ru: {
    kicker: "Оферта",
    title: "Публичная оферта",
    description:
      "Условия использования услуг The Most Reliable Publication: издательские услуги, научные публикации и участие в международных конференциях.",
    placeholder:
      "Текст публичной оферты будет размещён в ближайшее время. Если у вас есть вопросы об условиях договора, свяжитесь с нами.",
    file: "Открыть оферту в PDF",
    updated: "Последнее обновление",
    contracts: "Образцы договоров",
    payment: "Страница оплаты",
  },
  en: {
    kicker: "Offer",
    title: "Public offer",
    description:
      "Terms of use for The Most Reliable Publication services: publishing, scientific publications and participation in international conferences.",
    placeholder:
      "The public offer text will be published soon. If you have questions about the contract terms, please contact us.",
    file: "Open the offer as PDF",
    updated: "Last updated",
    contracts: "Contract templates",
    payment: "Payment page",
  },
} satisfies LocaleMap<Record<string, string>>;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = pick(page, locale);
  return pageMetadata({ locale, path: "/offer", title: c.title, description: c.description });
}

export default async function OfferPage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const c = pick(page, locale);
  const settings = await getLegalSettings();
  const text = settings.offerText[locale] || settings.offerText.ru || settings.offerText.uz;

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
        <article className="legalCard legalText">
          {text ? (
            text
              .split("\n")
              .filter((line) => line.trim())
              .map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <div className="legalPlaceholder">
              <strong>TRP</strong>
              <span>{c.placeholder}</span>
            </div>
          )}

          {settings.offerUpdatedAt && (text || settings.offerFileUrl) ? (
            <small>
              {c.updated}: {settings.offerUpdatedAt}
            </small>
          ) : null}
        </article>

        <div className="legalActions">
          {settings.offerFileUrl ? (
            <a
              href={settings.offerFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premiumButton premiumButtonPrimary"
            >
              {c.file}
            </a>
          ) : null}
          <Link href={`/${locale}/documents`} className="premiumButton premiumButtonSecondary">
            {c.contracts}
          </Link>
          <Link href={`/${locale}/payment`} className="premiumButton premiumButtonSecondary">
            {c.payment}
          </Link>
        </div>
      </section>
    </main>
  );
}
