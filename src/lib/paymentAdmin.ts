import { getSetting, readJsonFile, saveSetting } from "@/lib/jsonStore";

export type Locale = "uz" | "ru" | "en";

export type PaymentLocaleContent = {
  badge: string;
  title: string;
  subtitle: string;
  qrLabel: string;
  qrTitle: string;
  qrComing: string;
  qrText: string;
  stepsTitle: string;
  steps: string[];
  videoTitle: string;
  videoText: string;
  videoComing: string;
  telegram: string;
  contact: string;
  back: string;
};

export type PaymentSettings = {
  telegramUrl: string;
  qrImage: string;
  youtubeUrl: string;
  uz: PaymentLocaleContent;
  ru: PaymentLocaleContent;
  en: PaymentLocaleContent;
};

const SETTING_KEY = "payment";
const PAYMENT_FILE = "payment.json";

export const defaultPaymentSettings: PaymentSettings = {
  telegramUrl: "https://t.me/Zubayda_Sherzodovna",
  qrImage: "",
  youtubeUrl: "",
  uz: {
    badge: "To‘lov",
    title: "Xizmatlar uchun to‘lov",
    subtitle:
      "Nashriyot xizmatlari, konferensiya ishtiroki va boshqa xizmatlar bo‘yicha to‘lov ma’lumotlari.",
    qrLabel: "QR",
    qrTitle: "Yagona QR-kod orqali to‘lov",
    qrComing: "QR-kod tez orada qo‘shiladi",
    qrText:
      "Yagona QR-kod keyinchalik shu yerga joylashtiriladi. Hozircha to‘lov bo‘yicha ma’lumot olish uchun Telegram orqali murojaat qilishingiz mumkin.",
    stepsTitle: "To‘lov tartibi",
    steps: [
      "Kerakli xizmat turini tanlang.",
      "Ariza formasini to‘ldiring yoki Telegram orqali murojaat qiling.",
      "Mutaxassislarimiz sizga to‘lov bo‘yicha aniq ma’lumot beradi.",
      "To‘lovdan so‘ng chekni Telegram orqali yuboring.",
    ],
    videoTitle: "Video ko‘rsatma",
    videoText:
      "Bu blokka keyinchalik rasmiy YouTube video joylashtiriladi.",
    videoComing: "Video tez orada qo‘shiladi",
    telegram: "Telegram orqali bog‘lanish",
    contact: "Ariza qoldirish",
    back: "Bosh sahifaga qaytish",
  },
  ru: {
    badge: "Оплата",
    title: "Оплата услуг",
    subtitle:
      "Информация об оплате издательских услуг, участия в конференциях и других академических сервисов.",
    qrLabel: "QR",
    qrTitle: "Оплата через единый QR-код",
    qrComing: "QR-код будет добавлен позже",
    qrText:
      "Единый QR-код будет размещён в этом блоке позже. Пока вы можете получить реквизиты и точную сумму через Telegram.",
    stepsTitle: "Порядок оплаты",
    steps: [
      "Выберите необходимый вид услуги.",
      "Оставьте заявку на сайте или напишите в Telegram.",
      "Наши специалисты сообщат точную сумму и реквизиты.",
      "После оплаты отправьте чек через Telegram.",
    ],
    videoTitle: "Видеоинструкция",
    videoText:
      "В этот блок позже будет добавлено официальное YouTube-видео.",
    videoComing: "Видео будет добавлено позже",
    telegram: "Связаться в Telegram",
    contact: "Оставить заявку",
    back: "Вернуться на главную",
  },
  en: {
    badge: "Payment",
    title: "Service payment",
    subtitle:
      "Payment information for publishing services, conference participation and other academic services.",
    qrLabel: "QR",
    qrTitle: "Payment via single QR code",
    qrComing: "QR code will be added later",
    qrText:
      "A single QR code will be placed in this block later. For now, you can request payment details and the exact amount via Telegram.",
    stepsTitle: "Payment process",
    steps: [
      "Choose the required service.",
      "Submit an application on the website or contact us via Telegram.",
      "Our specialists will provide the exact amount and payment details.",
      "After payment, send the receipt via Telegram.",
    ],
    videoTitle: "Instruction video",
    videoText:
      "An official YouTube video will be added to this block later.",
    videoComing: "Video will be added later",
    telegram: "Contact via Telegram",
    contact: "Submit application",
    back: "Back to homepage",
  },
};

function asString(value: unknown, fallback: string): string {
  return typeof value === "string" ? value : fallback;
}

function asStringArray(value: unknown, fallback: string[]): string[] {
  if (!Array.isArray(value)) return fallback;

  const items = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);

  return items.length > 0 ? items : fallback;
}

function normalizeLocaleContent(
  value: unknown,
  fallback: PaymentLocaleContent
): PaymentLocaleContent {
  const source =
    value && typeof value === "object"
      ? (value as Partial<PaymentLocaleContent>)
      : {};

  return {
    badge: asString(source.badge, fallback.badge),
    title: asString(source.title, fallback.title),
    subtitle: asString(source.subtitle, fallback.subtitle),
    qrLabel: asString(source.qrLabel, fallback.qrLabel),
    qrTitle: asString(source.qrTitle, fallback.qrTitle),
    qrComing: asString(source.qrComing, fallback.qrComing),
    qrText: asString(source.qrText, fallback.qrText),
    stepsTitle: asString(source.stepsTitle, fallback.stepsTitle),
    steps: asStringArray(source.steps, fallback.steps),
    videoTitle: asString(source.videoTitle, fallback.videoTitle),
    videoText: asString(source.videoText, fallback.videoText),
    videoComing: asString(source.videoComing, fallback.videoComing),
    telegram: asString(source.telegram, fallback.telegram),
    contact: asString(source.contact, fallback.contact),
    back: asString(source.back, fallback.back),
  };
}

export function normalizePaymentSettings(value: unknown): PaymentSettings {
  const source =
    value && typeof value === "object"
      ? (value as Partial<PaymentSettings>)
      : {};

  return {
    telegramUrl: asString(source.telegramUrl, defaultPaymentSettings.telegramUrl),
    qrImage: asString(source.qrImage, defaultPaymentSettings.qrImage),
    youtubeUrl: asString(source.youtubeUrl, defaultPaymentSettings.youtubeUrl),
    uz: normalizeLocaleContent(source.uz, defaultPaymentSettings.uz),
    ru: normalizeLocaleContent(source.ru, defaultPaymentSettings.ru),
    en: normalizeLocaleContent(source.en, defaultPaymentSettings.en),
  };
}

export async function getPaymentSettings(): Promise<PaymentSettings> {
  const stored =
    (await getSetting<unknown>(SETTING_KEY)) ??
    (await readJsonFile<unknown>(PAYMENT_FILE, null));

  return normalizePaymentSettings(stored);
}

export async function savePaymentSettings(
  value: unknown
): Promise<PaymentSettings> {
  const settings = normalizePaymentSettings(value);

  await saveSetting(SETTING_KEY, settings, PAYMENT_FILE);

  return settings;
}

export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url.trim()) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname.split("/").filter(Boolean)[1];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }

    return null;
  } catch {
    return null;
  }
}
