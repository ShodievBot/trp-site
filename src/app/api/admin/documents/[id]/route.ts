import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import {
  deleteDocument,
  getDocumentById,
  updateDocument,
} from "@/lib/documentsAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: Params) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const document = await getDocumentById(id);

  if (!document) {
    return NextResponse.json(
      {
        ok: false,
        error: "Document not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ok: true,
    document,
  });
}

export async function PUT(request: Request, { params }: Params) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const payload = await request.json();
    const document = await updateDocument(id, payload);

    if (!document) {
      return NextResponse.json(
        {
          ok: false,
          error: "Document not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      document,
    });
  } catch (error) {
    console.error("Update document error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to update document",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const deleted = await deleteDocument(id);

    if (!deleted) {
      return NextResponse.json(
        {
          ok: false,
          error: "Document not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error("Delete document error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to delete document",
      },
      { status: 500 }
    );
  }
}
