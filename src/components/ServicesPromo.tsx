import Link from "next/link";
import { pick, type Locale, type LocaleMap } from "@/lib/i18n";
import { site } from "@/lib/siteConfig";

const t = {
  uz: {
    kicker: "Xizmatlarimiz",
    title: "Maqola, kitob yoki konferensiya bo‘yicha yordam kerakmi?",
    text: "The Most Reliable Publication nashriyoti tadqiqotchilarga boshidan oxirigacha hamrohlik qiladi.",
    items: ["Scopus jurnallarida nashr", "OAK jurnallarida maqola", "Monografiya va darslik nashri", "Xalqaro konferensiyalar", "DGU va patent"],
    services: "Barcha xizmatlar",
    contact: "Ariza qoldirish",
  },
  ru: {
    kicker: "Наши услуги",
    title: "Нужна помощь со статьёй, книгой или конференцией?",
    text: "Издательство The Most Reliable Publication сопровождает исследователей от рукописи до публикации.",
    items: ["Публикации в журналах Scopus", "Статьи в журналах ОАК", "Издание монографий и учебников", "Международные конференции", "ДГУ и патенты"],
    services: "Все услуги",
    contact: "Оставить заявку",
  },
  en: {
    kicker: "Our services",
    title: "Need help with an article, a book or a conference?",
    text: "The Most Reliable Publication supports researchers from manuscript to publication.",
    items: ["Scopus journal publications", "OAK journal articles", "Monographs and textbooks", "International conferences", "Software certificates and patents"],
    services: "All services",
    contact: "Submit a request",
  },
} satisfies LocaleMap<unknown>;

// Mini services advert shown on every news and «Полезное» page.
export default function ServicesPromo({ locale }: { locale: Locale }) {
  const c = pick(t, locale);

  return (
    <aside className="servicesPromo">
      <p className="sectionKicker">{c.kicker}</p>
      <h2>{c.title}</h2>
      <p>{c.text}</p>
      <ul>
        {c.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="servicesPromoActions">
        <Link href={`/${locale}/services`} className="premiumButton premiumButtonSecondary">
          {c.services}
        </Link>
        <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
          {c.contact}
        </Link>
        <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer" className="premiumButton premiumButtonSecondary">
          Telegram
        </a>
      </div>
    </aside>
  );
}
