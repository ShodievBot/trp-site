import type { Locale } from "./i18n";

export type NavKey =
  | "services"
  | "conferences"
  | "partners"
  | "news"
  | "documents"
  | "payment"
  | "contact";

// Menu order. enabled: false = page not ready yet
export const navItems: { key: NavKey; path: string; enabled: boolean }[] = [
  { key: "services", path: "/services", enabled: true },
  { key: "conferences", path: "/conferences", enabled: true },
  { key: "partners", path: "/partners", enabled: false },
  { key: "news", path: "/news", enabled: true },
  { key: "documents", path: "/documents", enabled: true },
  { key: "payment", path: "/payment", enabled: true },
  { key: "contact", path: "/contact", enabled: true },
];

export const navLabels: Record<Locale, Record<NavKey, string>> = {
  uz: {
    services: "Xizmatlar",
    conferences: "Konferensiyalar",
    partners: "Hamkorliklar",
    news: "Yangiliklar",
    documents: "Hujjatlar",
    payment: "To‘lov",
    contact: "Murojaat uchun",
  },
  en: {
    services: "Services",
    conferences: "Conferences",
    partners: "Partnerships",
    news: "News",
    documents: "Documents",
    payment: "Payment",
    contact: "Contact",
  },
  ru: {
    services: "Услуги",
    conferences: "Конференции",
    partners: "Партнёрство",
    news: "Новости",
    documents: "Документы",
    payment: "Оплата",
    contact: "Контакты",
  },
  tr: {
    services: "Hizmetler",
    conferences: "Konferanslar",
    partners: "İş birlikleri",
    news: "Haberler",
    documents: "Belgeler",
    payment: "Ödeme",
    contact: "İletişim",
  },
  kk: {
    services: "Қызметтер",
    conferences: "Конференциялар",
    partners: "Серіктестік",
    news: "Жаңалықтар",
    documents: "Құжаттар",
    payment: "Төлем",
    contact: "Байланыс",
  },
};

export function getNav(locale: Locale) {
  return navItems
    .filter((item) => item.enabled)
    .map((item) => ({ ...item, label: navLabels[locale][item.key] }));
}
