import type { MetadataRoute } from "next";
import { getPublicNews } from "@/lib/publicNews";
import { getPublicDocuments } from "@/lib/documentsAdmin";
import { SITE_URL } from "@/lib/seo";
import { usefulArticles } from "@/lib/useful";
import { services } from "@/content/services";
import { conferences } from "@/content/conferences";
import { licenses } from "@/content/licenses";

// Locales with real translated content only — tr/kk currently render fallback text.
// Add them here together with seo.ts once the translations ship.
const locales = ["uz", "ru", "en"] as const;

const staticPages = [
  "",
  "/services",
  "/conferences",
  "/partners",
  "/director",
  "/news",
  "/useful",
  "/documents",
  "/payment",
  "/contact",
  "/license",
  "/offer",
  "/privacy",
] as const;

// Real date of the last content update for static pages. A constantly-refreshing
// "now" makes crawlers stop trusting lastmod, so this is bumped by hand.
const CONTENT_UPDATED = new Date("2026-11-21");

function safeDate(value?: string) {
  if (!value) return CONTENT_UPDATED;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return CONTENT_UPDATED;
  }

  return date;
}

function encodeSlug(slug: string) {
  return encodeURIComponent(slug);
}

// Regenerate hourly so news and documents added in the admin appear without a redeploy.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      urls.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: CONTENT_UPDATED,
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

  const sections = { useful: usefulArticles, services, conferences, license: licenses };

  for (const [section, items] of Object.entries(sections)) {
    for (const item of items) {
      for (const locale of locales) {
        urls.push({
          url: `${SITE_URL}/${locale}/${section}/${item.slug}`,
          lastModified: safeDate(item.date),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
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
