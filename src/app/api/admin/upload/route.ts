import { NextResponse } from "next/server";
import sharp from "sharp";
import { randomUUID } from "crypto";
import { isAdminRequest } from "@/lib/adminAuth";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BUCKET = "trp-uploads";

function sanitizeFolder(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9/_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "uploads";
}

function getFileExtension(name: string) {
  const parts = name.split(".");
  return parts.length > 1 ? parts.pop()?.toLowerCase() || "" : "";
}

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  try {
    await supabase.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 10 * 1024 * 1024,
    });
  } catch {
    // bucket may already exist
  }

  try {
    const formData = await request.formData();
    const fileEntry = formData.get("file");
    const folder = sanitizeFolder(String(formData.get("folder") || "uploads"));

    if (!(fileEntry instanceof File)) {
      return NextResponse.json(
        { ok: false, error: "File is required." },
        { status: 400 }
      );
    }

    const originalName = fileEntry.name || "file";
    const mime = fileEntry.type || "application/octet-stream";
    const buffer = Buffer.from(await fileEntry.arrayBuffer());

    if (buffer.length > 10 * 1024 * 1024) {
      return NextResponse.json(
        { ok: false, error: "File is too large. Max size is 10MB." },
        { status: 400 }
      );
    }

    const isImage =
      mime === "image/jpeg" ||
      mime === "image/png" ||
      mime === "image/webp";

    let uploadBuffer = buffer;
    let outputMime = mime;
    let extension = getFileExtension(originalName) || "bin";

    if (isImage) {
      uploadBuffer = await sharp(buffer)
        .rotate()
        .resize({
          width: 1600,
          withoutEnlargement: true,
        })
        .webp({
          quality: 78,
          effort: 5,
        })
        .toBuffer();

      outputMime = "image/webp";
      extension = "webp";
    }

    const filePath = `${folder}/${Date.now()}-${randomUUID()}.${extension}`;

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(filePath, uploadBuffer, {
        contentType: outputMime,
        upsert: false,
      });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);

    return NextResponse.json({
      ok: true,
      url: data.publicUrl,
      path: filePath,
      mime: outputMime,
      optimized: isImage,
    });
  } catch (error) {
    console.error("Upload error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to upload file." },
      { status: 500 }
    );
  }
}
