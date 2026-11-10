import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const disallow = ["/admin", "/admin/", "/api", "/api/"];

// Named explicitly as an invitation: AI assistants and their search crawlers may read and cite the site.
const aiBots = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended",
  "CCBot", "Amazonbot", "Bytespider", "meta-externalagent", "YandexAdditional",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: aiBots, allow: "/", disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
