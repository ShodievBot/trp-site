import type { LocaleMap } from "@/lib/i18n";
import { articles } from "@/content/useful";

// One «Полезное» article. `body` is light markdown: "## " heading, "- " list item, blank line between paragraphs.
export type UsefulArticle = {
  slug: string; // also the cover file: public/images/useful/<slug>.webp (scripts/make-covers.mjs)
  date: string;
  title: LocaleMap<string>;
  description: LocaleMap<string>;
  body: LocaleMap<string>;
};

export const usefulArticles: UsefulArticle[] = articles;

export const usefulCover = (slug: string) => `/images/useful/${slug}.webp`;

export type Block = { type: "h2" | "p"; text: string } | { type: "ul"; items: string[] };

export function parseBody(body: string): Block[] {
  const blocks: Block[] = [];
  for (const chunk of body.trim().split(/\n\s*\n/)) {
    const lines = chunk.trim().split("\n").map((l) => l.trim());
    if (lines[0].startsWith("## ")) {
      blocks.push({ type: "h2", text: lines[0].slice(3) });
      lines.shift();
      if (lines.length === 0) continue;
    }
    if (lines.every((l) => l.startsWith("- "))) blocks.push({ type: "ul", items: lines.map((l) => l.slice(2)) });
    else blocks.push({ type: "p", text: lines.join(" ") });
  }
  return blocks;
}
