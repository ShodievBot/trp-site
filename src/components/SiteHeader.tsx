"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, localeNames, isLocale, type Locale } from "@/lib/i18n";
import { getNav } from "@/lib/navigation";

type Props = {
  locale: Locale;
};

function getLanguageHref(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length > 0 && isLocale(parts[0])) {
    parts[0] = nextLocale;
    return `/${parts.join("/")}`;
  }

  return `/${nextLocale}`;
}

export default function SiteHeader({ locale }: Props) {
  const pathname = usePathname() || "/";
  const nav = getNav(locale);

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link href={`/${locale}`} className="siteLogo" aria-label="The Most Reliable Publication">
          <span>TRP</span>
        </Link>

        <nav className="siteNav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.key} href={`/${locale}${item.path}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="siteLangs" aria-label="Language switcher">
          {locales.map((l) => (
            <Link
              key={l}
              href={getLanguageHref(pathname, l)}
              hrefLang={l}
              title={localeNames[l]}
              aria-current={l === locale ? "true" : undefined}
            >
              {localeLabels[l]}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
