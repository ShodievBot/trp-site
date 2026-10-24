"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { DocumentItem } from "@/lib/documentsAdmin";
import AdminUploadField from "@/components/AdminUploadField";

type Props = {
  mode?: "create" | "edit";
  item?: DocumentItem;
};

export default function AdminDocumentForm({ mode = "create", item }: Props) {
  const router = useRouter();
  const isEdit = mode === "edit" && item;

  const [status, setStatus] = useState<"idle" | "saving" | "deleting" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("saving");
    setError("");

    const form = new FormData(event.currentTarget);

    const payload = {
      status: form.get("status"),
      publishedAt: form.get("publishedAt"),
      category: form.get("category"),
      slug: form.get("slug"),
      imageUrl: form.get("imageUrl"),
      fileUrl: form.get("fileUrl"),
      titleUz: form.get("titleUz"),
      titleRu: form.get("titleRu"),
      titleEn: form.get("titleEn"),
      descriptionUz: form.get("descriptionUz"),
      descriptionRu: form.get("descriptionRu"),
      descriptionEn: form.get("descriptionEn"),
    };

    const response = await fetch(
      isEdit ? `/api/admin/documents/${item.id}` : "/api/admin/documents",
      {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Failed to save document");
      return;
    }

    router.push("/admin/documents");
    router.refresh();
  }

  async function handleDelete() {
    if (!isEdit) return;

    const confirmed = window.confirm("Delete this document?");
    if (!confirmed) return;

    setStatus("deleting");
    setError("");

    const response = await fetch(`/api/admin/documents/${item.id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Failed to delete document");
      return;
    }

    router.push("/admin/documents");
    router.refresh();
  }

  return (
    <form className="adminDocumentForm" onSubmit={handleSubmit}>
      <section className="adminDocumentBlock">
        <p className="adminEyebrow">Document settings</p>

        <div className="adminDocumentGrid">
          <label className="adminDocumentField">
            <span>Status</span>
            <select name="status" defaultValue={item?.status || "published"}>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </label>

          <label className="adminDocumentField">
            <span>Published date</span>
            <input
              type="date"
              name="publishedAt"
              defaultValue={item?.publishedAt || new Date().toISOString().slice(0, 10)}
            />
          </label>

          <label className="adminDocumentField">
            <span>Category</span>
            <input name="category" defaultValue={item?.category || "Document"} />
          </label>

          <label className="adminDocumentField">
            <span>Slug</span>
            <input
              name="slug"
              placeholder="license-document"
              defaultValue={item?.slug || ""}
            />
          </label>

          <div className="adminDocumentField full">
            <AdminUploadField
              name="imageUrl"
              label="Document image / cover"
              defaultValue={item?.imageUrl || ""}
              folder="documents/images"
              accept="image/jpeg,image/png,image/webp"
              helper="Upload document photo or cover. Images are optimized to WebP automatically."
            />
          </div>

          <div className="adminDocumentField full">
            <AdminUploadField
              name="fileUrl"
              label="Document file"
              defaultValue={item?.fileUrl || ""}
              folder="documents/files"
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              helper="Upload PDF or Word document. The public URL will be saved automatically."
            />
          </div>
        </div>
      </section>

      <LanguageBlock
        title="Uzbek"
        titleName="titleUz"
        descriptionName="descriptionUz"
        titleValue={item?.title.uz || ""}
        descriptionValue={item?.description.uz || ""}
      />

      <LanguageBlock
        title="Russian"
        titleName="titleRu"
        descriptionName="descriptionRu"
        titleValue={item?.title.ru || ""}
        descriptionValue={item?.description.ru || ""}
      />

      <LanguageBlock
        title="English"
        titleName="titleEn"
        descriptionName="descriptionEn"
        titleValue={item?.title.en || ""}
        descriptionValue={item?.description.en || ""}
      />

      <div className="adminDocumentActions">
        <button type="submit" disabled={status === "saving" || status === "deleting"}>
          {status === "saving"
            ? "Saving..."
            : isEdit
            ? "Save changes"
            : "Create document"}
        </button>

        {isEdit ? (
          <button
            type="button"
            className="danger"
            disabled={status === "saving" || status === "deleting"}
            onClick={handleDelete}
          >
            {status === "deleting" ? "Deleting..." : "Delete"}
          </button>
        ) : null}

        {status === "error" ? (
          <span className="adminDocumentError">{error}</span>
        ) : null}
      </div>
    </form>
  );
}

function LanguageBlock({
  title,
  titleName,
  descriptionName,
  titleValue,
  descriptionValue,
}: {
  title: string;
  titleName: string;
  descriptionName: string;
  titleValue: string;
  descriptionValue: string;
}) {
  return (
    <section className="adminDocumentBlock">
      <p className="adminEyebrow">{title}</p>
      <h3>{title} content</h3>

      <div className="adminDocumentGrid">
        <label className="adminDocumentField full">
          <span>Title</span>
          <input name={titleName} defaultValue={titleValue} />
        </label>

        <label className="adminDocumentField full">
          <span>Description</span>
          <textarea name={descriptionName} defaultValue={descriptionValue} />
        </label>
      </div>
    </section>
  );
}
