import { existsSync } from "fs";
import path from "path";
import { getSetting, readJsonFile, saveSetting } from "@/lib/jsonStore";
import type { Locale } from "@/lib/i18n";

export type LegalSettings = {
  licenseImage: string;
  offerFileUrl: string;
  offerText: Record<Locale, string>;
  offerUpdatedAt: string;
};

const SETTING_KEY = "legal";
const LEGAL_FILE = "legal.json";

const emptySettings: LegalSettings = {
  licenseImage: "",
  offerFileUrl: "",
  offerText: { uz: "", ru: "", en: "" },
  offerUpdatedAt: "",
};

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export function normalizeLegalSettings(value: unknown): LegalSettings {
  const source = (value && typeof value === "object" ? value : {}) as Partial<LegalSettings>;
  const text = (source.offerText ?? {}) as Partial<Record<Locale, unknown>>;

  return {
    licenseImage: asString(source.licenseImage),
    offerFileUrl: asString(source.offerFileUrl),
    offerText: { uz: asString(text.uz), ru: asString(text.ru), en: asString(text.en) },
    offerUpdatedAt: asString(source.offerUpdatedAt),
  };
}

export async function getLegalSettings(): Promise<LegalSettings> {
  const stored =
    (await getSetting<unknown>(SETTING_KEY)) ?? (await readJsonFile<unknown>(LEGAL_FILE, emptySettings));
  return normalizeLegalSettings(stored);
}

export async function saveLegalSettings(value: unknown) {
  const settings = {
    ...normalizeLegalSettings(value),
    offerUpdatedAt: new Date().toISOString().slice(0, 10),
  };
  await saveSetting(SETTING_KEY, settings, LEGAL_FILE);
  return settings;
}

// A file dropped into public/images/license.(webp|jpg) is used when no image was uploaded in the admin.
// next.config.ts traces public/images/license.* into this route so the check also works on Vercel.
export function getLicenseImage(settings: LegalSettings) {
  if (settings.licenseImage) return settings.licenseImage;

  for (const name of ["license.webp", "license.jpg", "license.jpeg", "license.png"]) {
    if (existsSync(path.join(process.cwd(), "public", "images", name))) {
      return `/images/${name}`;
    }
  }

  return "";
}
