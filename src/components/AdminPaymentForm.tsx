"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type {
  Locale,
  PaymentLocaleContent,
  PaymentSettings,
} from "@/lib/paymentAdmin";

type Props = {
  settings: PaymentSettings;
};

const locales: {
  key: Locale;
  label: string;
}[] = [
  { key: "uz", label: "Uzbek" },
  { key: "ru", label: "Russian" },
  { key: "en", label: "English" },
];

function buildLocalePayload(form: FormData, locale: Locale): PaymentLocaleContent {
  const get = (name: string) => String(form.get(`${locale}.${name}`) || "");
  const steps = get("steps")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    badge: get("badge"),
    title: get("title"),
    subtitle: get("subtitle"),
    qrLabel: get("qrLabel"),
    qrTitle: get("qrTitle"),
    qrComing: get("qrComing"),
    qrText: get("qrText"),
    stepsTitle: get("stepsTitle"),
    steps,
    videoTitle: get("videoTitle"),
    videoText: get("videoText"),
    videoComing: get("videoComing"),
    telegram: get("telegram"),
    contact: get("contact"),
    back: get("back"),
  };
}

export default function AdminPaymentForm({ settings }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("saving");
    setError("");

    const form = new FormData(event.currentTarget);

    const payload: PaymentSettings = {
      telegramUrl: String(form.get("telegramUrl") || ""),
      qrImage: String(form.get("qrImage") || ""),
      youtubeUrl: String(form.get("youtubeUrl") || ""),
      uz: buildLocalePayload(form, "uz"),
      ru: buildLocalePayload(form, "ru"),
      en: buildLocalePayload(form, "en"),
    };

    const response = await fetch("/api/admin/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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
          <p className="adminEyebrow">Global settings</p>
          <h3>Main payment configuration</h3>
          <p>
            These settings are shared across all language versions of the payment page.
          </p>
        </div>

        <div className="adminPaymentGrid">
          <label className="adminPaymentField">
            <span>Telegram URL</span>
            <input
              name="telegramUrl"
              defaultValue={settings.telegramUrl}
              placeholder="https://t.me/username"
            />
          </label>

          <label className="adminPaymentField">
            <span>QR image path</span>
            <input
              name="qrImage"
              defaultValue={settings.qrImage}
              placeholder="/images/payment-qr.png"
            />
            <small>
              Пока можно оставить пустым. Потом добавим QR в public/images.
            </small>
          </label>

          <label className="adminPaymentField">
            <span>YouTube URL</span>
            <input
              name="youtubeUrl"
              defaultValue={settings.youtubeUrl}
              placeholder="https://www.youtube.com/watch?v=..."
            />
            <small>
              Можно оставить пустым — тогда будет красивый placeholder.
            </small>
          </label>
        </div>
      </section>

      {locales.map(({ key, label }) => {
        const item = settings[key];

        return (
          <section className="adminPaymentBlock" key={key}>
            <div>
              <p className="adminEyebrow">{label}</p>
              <h3>{label} payment content</h3>
              <p>Text content for the public payment page.</p>
            </div>

            <div className="adminPaymentGrid">
              <label className="adminPaymentField">
                <span>Badge</span>
                <input name={`${key}.badge`} defaultValue={item.badge} />
              </label>

              <label className="adminPaymentField wide">
                <span>Page title</span>
                <input name={`${key}.title`} defaultValue={item.title} />
              </label>

              <label className="adminPaymentField full">
                <span>Subtitle</span>
                <textarea name={`${key}.subtitle`} defaultValue={item.subtitle} />
              </label>

              <label className="adminPaymentField">
                <span>QR label</span>
                <input name={`${key}.qrLabel`} defaultValue={item.qrLabel} />
              </label>

              <label className="adminPaymentField wide">
                <span>QR title</span>
                <input name={`${key}.qrTitle`} defaultValue={item.qrTitle} />
              </label>

              <label className="adminPaymentField wide">
                <span>QR placeholder text</span>
                <input name={`${key}.qrComing`} defaultValue={item.qrComing} />
              </label>

              <label className="adminPaymentField full">
                <span>QR description</span>
                <textarea name={`${key}.qrText`} defaultValue={item.qrText} />
              </label>

              <label className="adminPaymentField wide">
                <span>Steps title</span>
                <input name={`${key}.stepsTitle`} defaultValue={item.stepsTitle} />
              </label>

              <label className="adminPaymentField full">
                <span>Steps</span>
                <textarea
                  name={`${key}.steps`}
                  defaultValue={item.steps.join("\n")}
                />
                <small>Каждый шаг — с новой строки.</small>
              </label>

              <label className="adminPaymentField wide">
                <span>Video title</span>
                <input name={`${key}.videoTitle`} defaultValue={item.videoTitle} />
              </label>

              <label className="adminPaymentField full">
                <span>Video text</span>
                <textarea name={`${key}.videoText`} defaultValue={item.videoText} />
              </label>

              <label className="adminPaymentField wide">
                <span>Video placeholder text</span>
                <input
                  name={`${key}.videoComing`}
                  defaultValue={item.videoComing}
                />
              </label>

              <label className="adminPaymentField">
                <span>Telegram button</span>
                <input name={`${key}.telegram`} defaultValue={item.telegram} />
              </label>

              <label className="adminPaymentField">
                <span>Contact button</span>
                <input name={`${key}.contact`} defaultValue={item.contact} />
              </label>

              <label className="adminPaymentField">
                <span>Back button</span>
                <input name={`${key}.back`} defaultValue={item.back} />
              </label>
            </div>
          </section>
        );
      })}

      <div className="adminPaymentActions">
        <button type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Saving..." : "Save payment settings"}
        </button>

        {status === "saved" ? (
          <span className="adminPaymentSuccess">Saved successfully.</span>
        ) : null}

        {status === "error" ? (
          <span className="adminPaymentError">{error}</span>
        ) : null}
      </div>
    </form>
  );
}
