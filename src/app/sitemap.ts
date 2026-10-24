import type { MetadataRoute } from "next";
import { getPublicNews } from "@/lib/publicNews";
import { getPublicDocuments } from "@/lib/documentsAdmin";
import { SITE_URL } from "@/lib/seo";

const locales = ["uz", "ru", "en"] as const;

const staticPages = [
  "",
  "/services",
  "/conferences",
  "/news",
  "/documents",
  "/payment",
  "/contact",
  "/license",
  "/offer",
] as const;

function safeDate(value?: string) {
  if (!value) return new Date();

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return new Date();
  }

  return date;
}

function encodeSlug(slug: string) {
  return encodeURIComponent(slug);
}

// Regenerate hourly so news and documents added in the admin appear without a redeploy.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      urls.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: now,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 0.95 : 0.8,
      });
    }
  }

  const news = await getPublicNews();

  for (const item of news) {
    for (const locale of locales) {
      urls.push({
        url: `${SITE_URL}/${locale}/news/${encodeSlug(item.slug)}`,
        lastModified: safeDate(item.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  const documents = await getPublicDocuments();

  for (const item of documents) {
    for (const locale of locales) {
      urls.push({
        url: `${SITE_URL}/${locale}/documents/${encodeSlug(item.slug)}`,
        lastModified: safeDate(item.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return urls;
}
