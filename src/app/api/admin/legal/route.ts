import { withRevalidate } from "@/lib/revalidate";
import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { saveLegalSettings } from "@/lib/legalAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function POSTHandler(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const settings = await saveLegalSettings(await request.json());
    return NextResponse.json({ ok: true, settings });
  } catch (error) {
    console.error("Legal settings save error:", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Failed to save" },
      { status: 500 }
    );
  }
}

export const POST = withRevalidate(POSTHandler);
