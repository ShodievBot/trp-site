"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "uz" | "ru" | "en";

const locales: Locale[] = ["uz", "ru", "en"];

const nav = {
  uz: {
    services: "Xizmatlar",
    conferences: "Konferensiyalar",
    news: "Yangiliklar",
    documents: "Hujjatlar",
    payment: "To‘lov",
    contact: "Bog‘lanish",
  },
  ru: {
    services: "Услуги",
    conferences: "Конференции",
    news: "Новости",
    documents: "Документы",
    payment: "Оплата",
    contact: "Контакты",
  },
  en: {
    services: "Services",
    conferences: "Conferences",
    news: "News",
    documents: "Documents",
    payment: "Payment",
    contact: "Contact",
  },
};

type Props = {
  locale: Locale;
};

function getLanguageHref(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length > 0 && locales.includes(parts[0] as Locale)) {
    parts[0] = nextLocale;
    return `/${parts.join("/")}`;
  }

  return `/${nextLocale}`;
}

export default function SiteHeader({ locale }: Props) {
  const pathname = usePathname();
  const t = nav[locale] || nav.uz;

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link href={`/${locale}`} className="siteLogo" aria-label="The Most Reliable Publication">
          <span>TRP</span>
        </Link>

        <nav className="siteNav" aria-label="Main navigation">
          <Link href={`/${locale}/services`}>{t.services}</Link>
          <Link href={`/${locale}/conferences`}>{t.conferences}</Link>
          <Link href={`/${locale}/news`}>{t.news}</Link>
          <Link href={`/${locale}/documents`}>{t.documents}</Link>
          <Link href={`/${locale}/payment`}>{t.payment}</Link>
          <Link href={`/${locale}/contact`}>{t.contact}</Link>
        </nav>

        <div className="siteLangs" aria-label="Language switcher">
          <Link href={getLanguageHref(pathname, "uz")}>UZ</Link>
          <Link href={getLanguageHref(pathname, "ru")}>RU</Link>
          <Link href={getLanguageHref(pathname, "en")}>EN</Link>
        </div>
      </div>
    </header>
  );
}
