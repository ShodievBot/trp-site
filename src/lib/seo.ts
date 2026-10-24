import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://trp-site.vercel.app";

const SITE_NAME = "The Most Reliable Publication";

const ogLocale: Record<Locale, string> = { uz: "uz_UZ", en: "en_US", ru: "ru_RU", tr: "tr_TR", kk: "kk_KZ" };

/**
 * Metadata for a public page. `path` is the part after the locale, e.g. "/news" or "".
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
        "x-default": `${SITE_URL}/uz${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
    },
  };
}
