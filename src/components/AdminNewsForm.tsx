"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";
import type { NewsItem } from "@/lib/newsAdmin";
import AdminUploadField from "@/components/AdminUploadField";

type Mode = "create" | "edit";

type Props = {
  mode?: Mode;
  item?: NewsItem;
};

const formStyle: CSSProperties = {
  width: "100%",
  display: "grid",
  gap: "22px",
  marginTop: "26px",
};

const metaGridStyle: CSSProperties = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
  gap: "14px",
};

const fieldStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle: CSSProperties = {
  display: "block",
  color: "#344054",
  fontSize: "12px",
  lineHeight: "1.2",
  fontWeight: 800,
};

const inputStyle: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  minHeight: "46px",
  padding: "11px 13px",
  borderRadius: "14px",
  border: "1px solid rgba(15, 23, 42, 0.12)",
  background: "#f7f8fb",
  color: "#111827",
  fontSize: "14px",
  fontFamily: "inherit",
  outline: "none",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "110px",
  resize: "vertical",
};

const contentTextareaStyle: CSSProperties = {
  ...textareaStyle,
  minHeight: "150px",
};

const langBlockStyle: CSSProperties = {
  width: "100%",
  display: "grid",
  gap: "16px",
  padding: "20px",
  borderRadius: "22px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.08)",
  boxShadow: "0 14px 34px rgba(15, 23, 42, 0.04)",
  boxSizing: "border-box",
};

const langTitleStyle: CSSProperties = {
  margin: 0,
  color: "#111827",
  fontSize: "24px",
  lineHeight: "1.1",
  letterSpacing: "-0.04em",
};

const langGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "14px",
  alignItems: "start",
};

const submitRowStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginTop: "2px",
  flexWrap: "wrap",
};

const buttonStyle: CSSProperties = {
  minHeight: "48px",
  padding: "0 22px",
  borderRadius: "999px",
  border: 0,
  background: "linear-gradient(135deg, #f6dda0, #d8ad58)",
  color: "#111827",
  fontSize: "14px",
  fontWeight: 900,
  cursor: "pointer",
  boxShadow: "0 14px 30px rgba(214, 168, 79, 0.24)",
};

const deleteButtonStyle: CSSProperties = {
  ...buttonStyle,
  background: "#fee2e2",
  color: "#991b1b",
  boxShadow: "none",
};

export default function AdminNewsForm({ mode = "create", item }: Props) {
  const router = useRouter();

  const [status, setStatus] = useState<"idle" | "loading" | "deleting" | "error">("idle");
  const [error, setError] = useState("");

  const isEdit = mode === "edit" && item;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setError("");

    const form = new FormData(event.currentTarget);

    const payload = {
      status: form.get("status"),
      publishedAt: form.get("publishedAt"),
      category: form.get("category"),
      slug: form.get("slug"),
      imageUrl: form.get("imageUrl"),
      titleUz: form.get("titleUz"),
      titleRu: form.get("titleRu"),
      titleEn: form.get("titleEn"),
      excerptUz: form.get("excerptUz"),
      excerptRu: form.get("excerptRu"),
      excerptEn: form.get("excerptEn"),
      contentUz: form.get("contentUz"),
      contentRu: form.get("contentRu"),
      contentEn: form.get("contentEn"),
    };

    const url = isEdit ? `/api/admin/news/${item.id}` : "/api/admin/news";
    const method = isEdit ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Failed to save news");
      return;
    }

    router.push("/admin/news");
    router.refresh();
  }

  async function handleDelete() {
    if (!isEdit) return;

    const confirmed = window.confirm("Delete this news item? This action cannot be undone.");

    if (!confirmed) return;

    setStatus("deleting");
    setError("");

    const response = await fetch(`/api/admin/news/${item.id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Failed to delete news");
      return;
    }

    router.push("/admin/news");
    router.refresh();
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={metaGridStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="status">Status</label>
          <select
            style={inputStyle}
            id="status"
            name="status"
            defaultValue={item?.status || "published"}
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="publishedAt">Published date</label>
          <input
            style={inputStyle}
            id="publishedAt"
            type="date"
            name="publishedAt"
            defaultValue={item?.publishedAt || new Date().toISOString().slice(0, 10)}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="category">Category</label>
          <input
            style={inputStyle}
            id="category"
            name="category"
            defaultValue={item?.category || "News"}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="slug">Slug</label>
          <input
            style={inputStyle}
            id="slug"
            name="slug"
            placeholder="news-slug"
            defaultValue={item?.slug || ""}
          />
        </div>

        <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
          <AdminUploadField
            name="imageUrl"
            label="News image"
            defaultValue={item?.imageUrl || ""}
            folder="news"
            accept="image/png,image/jpeg,image/webp"
            helper="Upload JPG, PNG or WebP. The image will be converted to optimized WebP."
          />
        </div>
      </div>

      <LanguageBlock
        title="Uzbek"
        titleName="titleUz"
        excerptName="excerptUz"
        contentName="contentUz"
        titleLabel="Title UZ *"
        excerptLabel="Excerpt UZ"
        contentLabel="Content UZ"
        titleValue={item?.title.uz || ""}
        excerptValue={item?.excerpt.uz || ""}
        contentValue={item?.content.uz || ""}
      />

      <LanguageBlock
        title="Russian"
        titleName="titleRu"
        excerptName="excerptRu"
        contentName="contentRu"
        titleLabel="Title RU *"
        excerptLabel="Excerpt RU"
        contentLabel="Content RU"
        titleValue={item?.title.ru || ""}
        excerptValue={item?.excerpt.ru || ""}
        contentValue={item?.content.ru || ""}
      />

      <LanguageBlock
        title="English"
        titleName="titleEn"
        excerptName="excerptEn"
        contentName="contentEn"
        titleLabel="Title EN *"
        excerptLabel="Excerpt EN"
        contentLabel="Content EN"
        titleValue={item?.title.en || ""}
        excerptValue={item?.excerpt.en || ""}
        contentValue={item?.content.en || ""}
      />

      <div style={submitRowStyle}>
        <button
          style={{
            ...buttonStyle,
            opacity: status === "loading" ? 0.65 : 1,
            cursor: status === "loading" ? "wait" : "pointer",
          }}
          type="submit"
          disabled={status === "loading" || status === "deleting"}
        >
          {status === "loading"
            ? "Saving..."
            : isEdit
            ? "Save changes"
            : "Create news"}
        </button>

        {isEdit ? (
          <button
            type="button"
            style={{
              ...deleteButtonStyle,
              opacity: status === "deleting" ? 0.65 : 1,
              cursor: status === "deleting" ? "wait" : "pointer",
            }}
            onClick={handleDelete}
            disabled={status === "loading" || status === "deleting"}
          >
            {status === "deleting" ? "Deleting..." : "Delete news"}
          </button>
        ) : null}

        {status === "error" ? (
          <p
            style={{
              margin: 0,
              color: "#991b1b",
              fontSize: "13px",
              fontWeight: 800,
            }}
          >
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function LanguageBlock({
  title,
  titleName,
  excerptName,
  contentName,
  titleLabel,
  excerptLabel,
  contentLabel,
  titleValue,
  excerptValue,
  contentValue,
}: {
  title: string;
  titleName: string;
  excerptName: string;
  contentName: string;
  titleLabel: string;
  excerptLabel: string;
  contentLabel: string;
  titleValue: string;
  excerptValue: string;
  contentValue: string;
}) {
  return (
    <section style={langBlockStyle}>
      <h3 style={langTitleStyle}>{title}</h3>

      <div style={langGridStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor={titleName}>{titleLabel}</label>
          <input
            style={inputStyle}
            id={titleName}
            name={titleName}
            required
            defaultValue={titleValue}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor={excerptName}>{excerptLabel}</label>
          <textarea
            style={textareaStyle}
            id={excerptName}
            name={excerptName}
            rows={4}
            defaultValue={excerptValue}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor={contentName}>{contentLabel}</label>
          <textarea
            style={contentTextareaStyle}
            id={contentName}
            name={contentName}
            rows={6}
            defaultValue={contentValue}
          />
        </div>
      </div>
    </section>
  );
}
