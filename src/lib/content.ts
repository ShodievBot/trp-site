import { getSupabaseAdmin, hasSupabaseEnv } from './supabase/admin';
import type { Locale } from './i18n';

export type PopularPage = {
  path: string;
  title: string | null;
  views: number;
};

export async function getPopularPages(locale: Locale, limit = 8): Promise<PopularPage[]> {
  if (!hasSupabaseEnv) {
    return [];
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('page_stats')
    .select('path,title,views')
    .eq('locale', locale)
    .order('views', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('getPopularPages error:', error.message);
    return [];
  }

  return data ?? [];
}
