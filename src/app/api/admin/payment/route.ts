import { withRevalidate } from "@/lib/revalidate";
import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { getPaymentSettings, savePaymentSettings } from "@/lib/paymentAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const settings = await getPaymentSettings();

  return NextResponse.json({
    ok: true,
    settings,
  });
}

async function POSTHandler(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const settings = await savePaymentSettings(payload);

    return NextResponse.json({
      ok: true,
      settings,
    });
  } catch (error) {
    console.error("Payment settings save error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to save payment settings",
      },
      { status: 500 }
    );
  }
}

export const POST = withRevalidate(POSTHandler);
