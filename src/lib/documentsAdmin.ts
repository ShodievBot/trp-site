import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { readJsonFile, selectRows, writeJsonFile } from "@/lib/jsonStore";

export type Locale = "uz" | "ru" | "en";
export type DocumentStatus = "published" | "draft";

export type DocumentItem = {
  id: string;
  slug: string;
  status: DocumentStatus;
  category: string;
  imageUrl: string;
  fileUrl: string;
  publishedAt: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

type DocumentRow = {
  id: string;
  slug: string;
  status: DocumentStatus;
  category: string;
  image_url: string;
  file_url: string;
  published_at: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

const TABLE = "site_documents";
const DOCUMENTS_FILE = "documents.json";

export function toDocumentRow(item: DocumentItem): DocumentRow {
  return {
    id: item.id,
    slug: item.slug,
    status: item.status,
    category: item.category,
    image_url: item.imageUrl,
    file_url: item.fileUrl,
    published_at: item.publishedAt,
    title: item.title,
    description: item.description,
  };
}

function fromDocumentRow(row: DocumentRow): Partial<DocumentItem> {
  return {
    id: row.id,
    slug: row.slug,
    status: row.status,
    category: row.category,
    imageUrl: row.image_url,
    fileUrl: row.file_url,
    publishedAt: row.published_at,
    title: row.title,
    description: row.description,
  };
}

function createId() {
  return `doc_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"‘’“”]/g, "")
    .replace(/[^a-z0-9а-яёқғҳўӣäöüß]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function asStatus(value: unknown): DocumentStatus {
  return value === "draft" ? "draft" : "published";
}

function normalizeDocument(value: unknown): DocumentItem | null {
  if (!value || typeof value !== "object") return null;

  const source = value as Partial<DocumentItem>;

  const title = {
    uz: asString(source.title?.uz),
    ru: asString(source.title?.ru),
    en: asString(source.title?.en),
  };

  const description = {
    uz: asString(source.description?.uz),
    ru: asString(source.description?.ru),
    en: asString(source.description?.en),
  };

  const fallbackTitle = title.ru || title.en || title.uz || "document";
  const slug = asString(source.slug, slugify(fallbackTitle));

  return {
    id: asString(source.id, createId()),
    slug: slug || slugify(fallbackTitle),
    status: asStatus(source.status),
    category: asString(source.category, "Document"),
    imageUrl: asString(source.imageUrl),
    fileUrl: asString(source.fileUrl),
    publishedAt: asString(
      source.publishedAt,
      new Date().toISOString().slice(0, 10)
    ),
    title,
    description,
  };
}

async function readDocuments(): Promise<DocumentItem[]> {
  const rows = await selectRows<DocumentRow>(TABLE, "published_at");
  const parsed: unknown = rows
    ? rows.map(fromDocumentRow)
    : await readJsonFile<unknown>(DOCUMENTS_FILE, []);

  if (!Array.isArray(parsed)) return [];

  return parsed
    .map(normalizeDocument)
    .filter((item): item is DocumentItem => Boolean(item))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

async function saveDocument(item: DocumentItem) {
  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase
      .from(TABLE)
      .upsert({ ...toDocumentRow(item), updated_at: new Date().toISOString() });
    if (error) throw new Error(error.message);
    return;
  }

  const items = (await readDocuments()).filter((current) => current.id !== item.id);
  await writeJsonFile(DOCUMENTS_FILE, [item, ...items]);
}

export async function getAdminDocuments() {
  return readDocuments();
}

export async function getPublicDocuments() {
  const items = await readDocuments();
  return items.filter((item) => item.status === "published");
}

export async function getDocumentById(id: string) {
  const items = await readDocuments();
  return items.find((item) => item.id === id) || null;
}

export async function createDocument(payload: unknown) {
  const source = payload && typeof payload === "object" ? payload as Record<string, unknown> : {};

  const title = {
    uz: asString(source.titleUz),
    ru: asString(source.titleRu),
    en: asString(source.titleEn),
  };

  const description = {
    uz: asString(source.descriptionUz),
    ru: asString(source.descriptionRu),
    en: asString(source.descriptionEn),
  };

  const fallbackTitle = title.ru || title.en || title.uz || "document";

  const item: DocumentItem = {
    id: createId(),
    status: asStatus(source.status),
    publishedAt: asString(
      source.publishedAt,
      new Date().toISOString().slice(0, 10)
    ),
    category: asString(source.category, "Document"),
    imageUrl: asString(source.imageUrl),
    fileUrl: asString(source.fileUrl),
    slug: asString(source.slug, slugify(fallbackTitle)) || slugify(fallbackTitle),
    title,
    description,
  };

  await saveDocument(item);

  return item;
}

export async function updateDocument(id: string, payload: unknown) {
  const items = await readDocuments();
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  const source = payload && typeof payload === "object" ? payload as Record<string, unknown> : {};
  const current = items[index];

  const title = {
    uz: asString(source.titleUz, current.title.uz),
    ru: asString(source.titleRu, current.title.ru),
    en: asString(source.titleEn, current.title.en),
  };

  const description = {
    uz: asString(source.descriptionUz, current.description.uz),
    ru: asString(source.descriptionRu, current.description.ru),
    en: asString(source.descriptionEn, current.description.en),
  };

  const fallbackTitle = title.ru || title.en || title.uz || "document";

  const updated: DocumentItem = {
    ...current,
    status: asStatus(source.status),
    publishedAt: asString(source.publishedAt, current.publishedAt),
    category: asString(source.category, current.category),
    imageUrl: asString(source.imageUrl, current.imageUrl),
    fileUrl: asString(source.fileUrl, current.fileUrl),
    slug: asString(source.slug, current.slug) || slugify(fallbackTitle),
    title,
    description,
  };

  await saveDocument(updated);

  return updated;
}

export async function deleteDocument(id: string) {
  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { data, error } = await supabase.from(TABLE).delete().eq("id", id).select("id");
    if (error) throw new Error(error.message);
    return data.length > 0;
  }

  const items = await readDocuments();
  const next = items.filter((item) => item.id !== id);

  if (next.length === items.length) {
    return false;
  }

  await writeJsonFile(DOCUMENTS_FILE, next);
  return true;
}


export async function getPublicDocumentBySlug(slug: string) {
  const items = await getPublicDocuments();
  return items.find((item) => item.slug === slug) || null;
}

export function formatDocumentDate(date: string, locale: Locale) {
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
