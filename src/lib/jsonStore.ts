import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

const dataDir = path.join(process.cwd(), "data");

// Local JSON files are a read-only fallback for when Supabase is unreachable
// (and the only store in local dev without Supabase env).
export async function readJsonFile<T>(name: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(path.join(dataDir, name), "utf8")) as T;
  } catch {
    return fallback;
  }
}

export async function writeJsonFile(name: string, value: unknown) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(path.join(dataDir, name), JSON.stringify(value, null, 2), "utf8");
}

/** Rows from a Supabase table, or null when Supabase is not configured or the query fails. */
export async function selectRows<T>(table: string, orderBy: string): Promise<T[] | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order(orderBy, { ascending: false });

  if (error) {
    console.error(`Supabase ${table} read failed, using JSON fallback:`, error.message);
    return null;
  }

  return data as T[];
}

/** A site_settings value, or null when it is missing or Supabase is unavailable. */
export async function getSetting<T>(key: string): Promise<T | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", key)
    .maybeSingle();

  if (error) {
    console.error(`Supabase setting ${key} read failed, using JSON fallback:`, error.message);
    return null;
  }

  return (data?.value as T) ?? null;
}

export async function saveSetting(key: string, value: unknown, jsonFile: string) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    await writeJsonFile(jsonFile, value);
    return;
  }

  const { error } = await supabase
    .from("site_settings")
    .upsert({ key, value, updated_at: new Date().toISOString() });

  if (error) throw new Error(error.message);
}
