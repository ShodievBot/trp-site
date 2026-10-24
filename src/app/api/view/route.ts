import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { isLocale } from '@/lib/i18n';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const locale = String(body.locale || '');
    const path = String(body.path || '');
    const title = String(body.title || '');

    if (!isLocale(locale)) {
      return NextResponse.json({ ok: false, error: 'Invalid locale' }, { status: 400 });
    }

    if (!path || path.length > 500) {
      return NextResponse.json({ ok: false, error: 'Invalid path' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const { error } = await supabase.rpc('increment_page_view', {
      p_locale: locale,
      p_path: path,
      p_title: title || null,
    });

    if (error) {
      console.error('increment_page_view error:', error.message);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
