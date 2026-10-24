import Link from "next/link";

type Locale = "uz" | "ru" | "en";

const footer = {
  uz: {
    pages: "Sahifalar",
    tagline: "Ilmiy nashrlar va akademik hamkorlik",
    services: "Xizmatlar",
    conferences: "Konferensiyalar",
    news: "Yangiliklar",
    documents: "Hujjatlar",
    payment: "To‘lov",
    contact: "Kontaktlar",
    license: "Nashriyot guvohnomasi",
    offer: "Ommaviy oferta",
    telegramGroup: "Telegram guruh",
    rights: "Barcha huquqlar himoyalangan.",
  },
  ru: {
    pages: "Страницы",
    tagline: "Научные публикации и академическое сотрудничество",
    services: "Услуги",
    conferences: "Конференции",
    news: "Новости",
    documents: "Документы",
    payment: "Оплата",
    contact: "Контакты",
    license: "Лицензия издательства",
    offer: "Публичная оферта",
    telegramGroup: "Telegram-группа",
    rights: "Все права защищены.",
  },
  en: {
    pages: "Pages",
    tagline: "Scientific publications & academic cooperation",
    services: "Services",
    conferences: "Conferences",
    news: "News",
    documents: "Documents",
    payment: "Payment",
    contact: "Contact",
    license: "Publishing license",
    offer: "Public offer",
    telegramGroup: "Telegram group",
    rights: "All rights reserved.",
  },
};

type Props = {
  locale: Locale;
};

export default function SiteFooter({ locale }: Props) {
  const t = footer[locale] || footer.uz;

  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="footerBrandCompact">
          <Link href={`/${locale}`} className="footerLogoCompact">
            TRP
          </Link>

          <div>
            <strong>The Most Reliable Publication</strong>
            <span>{t.tagline}</span>
          </div>
        </div>

        <nav className="footerLinks" aria-label={t.pages}>
          <Link href={`/${locale}/services`}>{t.services}</Link>
          <Link href={`/${locale}/conferences`}>{t.conferences}</Link>
          <Link href={`/${locale}/news`}>{t.news}</Link>
          <Link href={`/${locale}/documents`}>{t.documents}</Link>
          <Link href={`/${locale}/payment`}>{t.payment}</Link>
          <Link href={`/${locale}/contact`}>{t.contact}</Link>
          <Link href={`/${locale}/license`}>{t.license}</Link>
          <Link href={`/${locale}/offer`}>{t.offer}</Link>
        </nav>

        <div className="footerContacts">
          <a href="tel:+998501076556">+998 50 107 65 56</a>
          <a href="tel:+905306476809">+90 530 647 68 09</a>
          <a
            href="https://t.me/Scopus_xalqaro_respublika_Oak"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.telegramGroup}: @Scopus_xalqaro_respublika_Oak
          </a>
          <a href="mailto:themostreliablepublication@gmail.com">
            themostreliablepublication@gmail.com
          </a>
        </div>
      </div>

      <div className="siteFooterBottom">
        <span>© {new Date().getFullYear()} The Most Reliable Publication</span>
        <span>{t.rights}</span>
      </div>
    </footer>
  );
}
