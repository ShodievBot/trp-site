import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import {
  deleteAdminNews,
  getAdminNewsById,
  updateAdminNews,
} from "@/lib/newsAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function GET(_request: Request, { params }: Props) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const item = await getAdminNewsById(id);

  if (!item) {
    return NextResponse.json({ ok: false, error: "News not found" }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    item,
  });
}

export async function PUT(request: Request, { params }: Props) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();

    const titleUz = String(body.titleUz || "").trim();
    const titleRu = String(body.titleRu || "").trim();
    const titleEn = String(body.titleEn || "").trim();

    if (!titleUz || !titleRu || !titleEn) {
      return NextResponse.json(
        { ok: false, error: "Titles in all languages are required" },
        { status: 400 }
      );
    }

    const slug = slugify(String(body.slug || titleEn || titleRu || titleUz));

    if (!slug) {
      return NextResponse.json(
        { ok: false, error: "Invalid slug" },
        { status: 400 }
      );
    }

    const updated = await updateAdminNews(id, {
      slug,
      status: body.status === "draft" ? "draft" : "published",
      category: String(body.category || "News").trim(),
      publishedAt: String(body.publishedAt || new Date().toISOString().slice(0, 10)),
      imageUrl: String(body.imageUrl || "").trim(),
      title: {
        uz: titleUz,
        ru: titleRu,
        en: titleEn,
      },
      excerpt: {
        uz: String(body.excerptUz || "").trim(),
        ru: String(body.excerptRu || "").trim(),
        en: String(body.excerptEn || "").trim(),
      },
      content: {
        uz: String(body.contentUz || "").trim(),
        ru: String(body.contentRu || "").trim(),
        en: String(body.contentEn || "").trim(),
      },
    });

    if (!updated) {
      return NextResponse.json({ ok: false, error: "News not found" }, { status: 404 });
    }

    return NextResponse.json({
      ok: true,
      item: updated,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Props) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const deleted = await deleteAdminNews(id);

  if (!deleted) {
    return NextResponse.json({ ok: false, error: "News not found" }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
  });
}
