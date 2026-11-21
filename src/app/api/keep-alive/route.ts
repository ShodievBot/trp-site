// Vercel Cron hits this daily so the Supabase free-tier project never pauses
// (it suspends after ~7 days of inactivity; a paused DB took the site down twice).
// Schedule lives in vercel.json. If CRON_SECRET is set, the request must carry
// "Authorization: Bearer <CRON_SECRET>" (Vercel sends it automatically).
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;

  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "supabase env not configured" }, { status: 500 });
  }

  // Cheapest possible read: one cell of one row.
  const { error } = await supabase.from("site_settings").select("key").limit(1);

  return NextResponse.json({ ok: !error, error: error?.message ?? null }, { status: error ? 502 : 200 });
}
