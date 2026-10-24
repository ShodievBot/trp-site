import { withRevalidate } from "@/lib/revalidate";
import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { createDocument, getAdminDocuments } from "@/lib/documentsAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const documents = await getAdminDocuments();

  return NextResponse.json({
    ok: true,
    documents,
  });
}

async function POSTHandler(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const document = await createDocument(payload);

    return NextResponse.json({
      ok: true,
      document,
    });
  } catch (error) {
    console.error("Create document error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to create document",
      },
      { status: 500 }
    );
  }
}

export const POST = withRevalidate(POSTHandler);
