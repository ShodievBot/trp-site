import { getAdminNews, type NewsItem } from "@/lib/newsAdmin";

export type Locale = "uz" | "ru" | "en";
export type PublicNewsItem = NewsItem;

export async function getPublicNews() {
  const items = await getAdminNews();
  return items.filter((item) => item.status === "published");
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
      locale === "uz" ? "uz-UZ" : locale === "ru" ? "ru-RU" : "en-US",
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
