import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/siteConfig";

export type LegalDoc = "offer" | "privacy";
type SourceLang = "uz" | "ru" | "en";
// Юридические тексты есть на uz/ru/en; tr -> en, kk -> ru
const source: Record<Locale, SourceLang> = { uz: "uz", ru: "ru", en: "en", tr: "en", kk: "ru" };

export async function getLegalHtml(doc: LegalDoc, locale: Locale) {
  const lang = source[locale];
  const raw = await readFile(path.join(process.cwd(), "content", "legal", `${doc}.${lang}.html`), "utf8");
  const html = raw
    .replaceAll("{{SITE_DOMAIN}}", site.domain)
    .replaceAll("{{TELEGRAM}}", site.telegram)
    .replaceAll("{{PHONE}}", site.phone)
    .replaceAll("{{EMAIL}}", site.email);
  return { html, isFallback: lang !== locale };
}
