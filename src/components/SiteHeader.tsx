"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeLabels, localeNames, isLocale, type Locale } from "@/lib/i18n";
import { getNav } from "@/lib/navigation";

type Props = { locale: Locale };

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
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link href={`/${locale}`} className="siteLogo" aria-label="The Most Reliable Publication">
          <span>TRP</span>
        </Link>

        <nav className="siteNav" aria-label="Main navigation">
          {nav.map((item) => {
            const href = `/${locale}${item.path}`;
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link key={item.key} href={href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="langSwitch" ref={boxRef}>
          <button
            type="button"
            className="langSwitchButton"
            aria-haspopup="listbox"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {localeLabels[locale]}
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>

          {open && (
            <ul className="langMenu" role="listbox" aria-label="Language">
              {locales.map((l) => (
                <li key={l}>
                  <Link
                    href={getLanguageHref(pathname, l)}
                    hrefLang={l}
                    aria-current={l === locale ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>{localeNames[l]}</span>
                    <small>{localeLabels[l]}</small>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
