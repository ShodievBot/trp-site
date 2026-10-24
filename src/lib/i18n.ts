export const locales = ["uz", "en", "ru", "tr", "kk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export const localeLabels: Record<Locale, string> = {
  uz: "UZ",
  en: "EN",
  ru: "RU",
  tr: "TR",
  kk: "KZ",
};

export const localeNames: Record<Locale, string> = {
  uz: "O‘zbekcha",
  en: "English",
  ru: "Русский",
  tr: "Türkçe",
  kk: "Қазақша",
};

// If a translation is missing: tr -> en, kk -> ru, then uz
const fallbackLocale: Record<Locale, Locale> = {
  uz: "uz",
  en: "en",
  ru: "ru",
  tr: "en",
  kk: "ru",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function pick<T>(map: Partial<Record<Locale, T>> & { uz: T }, locale: Locale): T {
  return map[locale] ?? map[fallbackLocale[locale]] ?? map.uz;
}
