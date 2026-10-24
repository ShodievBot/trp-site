// One-off: copy data/*.json into the Supabase tables from supabase/migrations/20261019_site_content.sql.
// Run after applying that SQL:  node --env-file=.env.local scripts/migrate-json-to-supabase.mjs
// Inserts only rows that are missing (by id/key), so re-running never overwrites admin edits.
// Test records are skipped.
import { readFile } from "fs/promises";
import { createClient } from "@supabase/supabase-js";

const SKIP_NEWS_SLUGS = new Set(["test"]);
const SKIP_DOCUMENT_SLUGS = new Set(["тест"]);

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });
const readData = async (name) => JSON.parse(await readFile(new URL(`../data/${name}`, import.meta.url), "utf8"));

const news = (await readData("news.json"))
  .filter((item) => !SKIP_NEWS_SLUGS.has(item.slug))
  .map((item) => ({
    id: item.id,
    slug: item.slug,
    status: item.status,
    category: item.category,
    published_at: item.publishedAt,
    image_url: item.imageUrl || "",
    gallery: item.gallery || [],
    title: item.title,
    excerpt: item.excerpt,
    content: item.content,
  }));

const documents = (await readData("documents.json"))
  .filter((item) => !SKIP_DOCUMENT_SLUGS.has(item.slug))
  .map((item) => ({
    id: item.id,
    slug: item.slug,
    status: item.status,
    category: item.category,
    image_url: item.imageUrl || "",
    file_url: item.fileUrl || "",
    published_at: item.publishedAt,
    title: item.title,
    description: item.description,
  }));

const settings = [{ key: "payment", value: await readData("payment.json") }];

for (const [table, rows, onConflict] of [
  ["site_news", news, "id"],
  ["site_documents", documents, "id"],
  ["site_settings", settings, "key"],
]) {
  if (rows.length === 0) {
    console.log(`${table}: nothing to copy`);
    continue;
  }

  const { error } = await supabase.from(table).upsert(rows, { onConflict, ignoreDuplicates: true });

  if (error) {
    console.error(`${table}: ${error.message}`);
    process.exitCode = 1;
  } else {
    console.log(`${table}: inserted missing rows out of ${rows.length}`);
  }
}
