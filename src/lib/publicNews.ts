import { getAdminNews, type NewsItem } from "@/lib/newsAdmin";

import type { Locale } from "@/lib/i18n";
export type { Locale };

const dateLocale: Record<Locale, string> = {
  uz: "uz-UZ",
  en: "en-US",
  ru: "ru-RU",
  tr: "tr-TR",
  kk: "kk-KZ",
};
export type PublicNewsItem = NewsItem;

export async function getPublicNews() {
  const items = await getAdminNews();
  // Every news page must have a picture: fall back to the branded cover.
  return items
    .filter((item) => item.status === "published")
    .map((item) => ({ ...item, imageUrl: item.imageUrl || "/images/covers/news.webp" }));
}

export async function getLatestPublicNews(limit = 3) {
  const items = await getPublicNews();
  return items.slice(0, limit);
}

export async function getPublicNewsBySlug(slug: string) {
  const items = await getPublicNews();
  return items.find((item) => item.slug === slug) || null;
}

export function formatNewsDate(date: string, locale: Locale) {
  try {
    return new Intl.DateTimeFormat(
      dateLocale[locale] || "uz-UZ",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    ).format(new Date(date));
  } catch {
    return date;
  }
}
