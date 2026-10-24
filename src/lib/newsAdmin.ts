import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { readJsonFile, selectRows, writeJsonFile } from "@/lib/jsonStore";

export type NewsLocale = "uz" | "ru" | "en";
export type NewsStatus = "draft" | "published";

export type NewsItem = {
  id: string;
  slug: string;
  status: NewsStatus;
  category: string;
  publishedAt: string;
  imageUrl: string;
  gallery?: string[];
  title: Record<NewsLocale, string>;
  excerpt: Record<NewsLocale, string>;
  content: Record<NewsLocale, string>;
};

type NewsRow = {
  id: string;
  slug: string;
  status: NewsStatus;
  category: string;
  published_at: string;
  image_url: string;
  gallery: string[] | null;
  title: Record<NewsLocale, string>;
  excerpt: Record<NewsLocale, string>;
  content: Record<NewsLocale, string>;
};

const TABLE = "site_news";
const NEWS_FILE = "news.json";

function fromRow(row: NewsRow): NewsItem {
  return {
    id: row.id,
    slug: row.slug,
    status: row.status,
    category: row.category,
    publishedAt: row.published_at,
    imageUrl: row.image_url,
    gallery: row.gallery ?? [],
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
  };
}

export function toNewsRow(item: NewsItem): Partial<NewsRow> {
  return {
    id: item.id,
    slug: item.slug,
    status: item.status,
    category: item.category,
    published_at: item.publishedAt,
    image_url: item.imageUrl,
    // the admin form does not edit the gallery; leave it untouched on update
    ...(item.gallery ? { gallery: item.gallery } : {}),
    title: item.title,
    excerpt: item.excerpt,
    content: item.content,
  };
}

function byDateDesc(a: NewsItem, b: NewsItem) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

export async function getAdminNews(): Promise<NewsItem[]> {
  const rows = await selectRows<NewsRow>(TABLE, "published_at");

  if (rows) {
    return rows.map(fromRow);
  }

  const items = await readJsonFile<NewsItem[]>(NEWS_FILE, []);
  return Array.isArray(items) ? items.sort(byDateDesc) : [];
}

export async function getAdminNewsById(id: string) {
  const items = await getAdminNews();
  return items.find((item) => item.id === id) || null;
}

export async function createAdminNews(input: Omit<NewsItem, "id">) {
  const item: NewsItem = {
    id: `news-${Date.now()}`,
    ...input,
  };

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase.from(TABLE).insert(toNewsRow(item));
    if (error) throw new Error(error.message);
    return item;
  }

  const items = await getAdminNews();
  items.unshift(item);
  await writeJsonFile(NEWS_FILE, items);

  return item;
}

export async function updateAdminNews(id: string, input: Omit<NewsItem, "id">) {
  const updated: NewsItem = {
    id,
    ...input,
  };

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .update({ ...toNewsRow(updated), updated_at: new Date().toISOString() })
      .eq("id", id)
      .select("id");

    if (error) throw new Error(error.message);
    return data.length > 0 ? updated : null;
  }

  const items = await getAdminNews();
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  items[index] = { gallery: items[index].gallery, ...updated };
  await writeJsonFile(NEWS_FILE, items);

  return items[index];
}

export async function deleteAdminNews(id: string) {
  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { data, error } = await supabase.from(TABLE).delete().eq("id", id).select("id");
    if (error) throw new Error(error.message);
    return data.length > 0;
  }

  const items = await getAdminNews();
  const filtered = items.filter((item) => item.id !== id);

  if (filtered.length === items.length) {
    return false;
  }

  await writeJsonFile(NEWS_FILE, filtered);
  return true;
}
