"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import AdminUploadField from "@/components/AdminUploadField";
import type { LegalSettings } from "@/lib/legalAdmin";

const locales = [
  { key: "uz", label: "Uzbek" },
  { key: "ru", label: "Russian" },
  { key: "en", label: "English" },
] as const;

export default function AdminLegalForm({ settings }: { settings: LegalSettings }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setError("");

    const form = new FormData(event.currentTarget);
    const get = (name: string) => String(form.get(name) || "");

    const response = await fetch("/api/admin/legal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        licenseImage: get("licenseImage"),
        offerFileUrl: get("offerFileUrl"),
        offerText: { uz: get("offerText.uz"), ru: get("offerText.ru"), en: get("offerText.en") },
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Failed to save settings");
      return;
    }

    setStatus("saved");
    router.refresh();
  }

  return (
    <form className="adminPaymentForm" onSubmit={handleSubmit}>
      <section className="adminPaymentBlock">
        <div>
          <p className="adminEyebrow">License</p>
          <h3>Publishing license image</h3>
          <p>
            Upload the certificate image. If empty, the site uses public/images/license.webp
            (or .jpg) when that file exists, otherwise a placeholder.
          </p>
        </div>

        <AdminUploadField
          name="licenseImage"
          label="License image"
          defaultValue={settings.licenseImage}
          folder="legal/license"
          accept="image/jpeg,image/png,image/webp"
        />
      </section>

      <section className="adminPaymentBlock">
        <div>
          <p className="adminEyebrow">Public offer</p>
          <h3>Offer PDF and text</h3>
          <p>Both are optional: the page shows the text, a PDF button, or a placeholder.</p>
        </div>

        <AdminUploadField
          name="offerFileUrl"
          label="Offer PDF"
          defaultValue={settings.offerFileUrl}
          folder="legal/offer"
          accept="application/pdf"
        />

        <div className="adminPaymentGrid">
          {locales.map(({ key, label }) => (
            <label className="adminPaymentField full" key={key}>
              <span>Offer text — {label}</span>
              <textarea
                name={`offerText.${key}`}
                defaultValue={settings.offerText[key]}
                rows={10}
              />
              <small>Each paragraph on a new line.</small>
            </label>
          ))}
        </div>
      </section>

      <div className="adminPaymentActions">
        <button type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Saving..." : "Save"}
        </button>

        {status === "saved" ? <span className="adminPaymentSuccess">Saved successfully.</span> : null}
        {status === "error" ? <span className="adminPaymentError">{error}</span> : null}
      </div>
    </form>
  );
}
