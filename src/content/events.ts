// Event structured data for each held conference (see src/content/conferences.ts).
// Dates and locations mirror the conference pages — update both together.
import type { LocaleMap } from "@/lib/i18n";

export type EventData = {
  slug: string;
  start: string;
  end?: string;
  city: string;
  country: string;
  title: LocaleMap<string>;
  description: LocaleMap<string>;
};

export const events: EventData[] = [
  {
    slug: "trabzon-2026",
    start: "2026-06-20",
    end: "2026-06-25",
    city: "Trabzon",
    country: "TR",
    title: {
      uz: "Uzbekistan–Türkiye International Academic Cooperation Summit — Trabzon, 2026",
      ru: "Uzbekistan–Türkiye International Academic Cooperation Summit — Трабзон, 2026",
      en: "Uzbekistan–Türkiye International Academic Cooperation Summit — Trabzon, 2026",
    },
    description: {
      uz: "O‘zbekiston–Turkiya xalqaro akademik hamkorlik sammiti, Trabzon, 2026-yil 20–25-iyun. 40 nafar ishtirokchi, ma’ruzalar va sertifikatlar.",
      ru: "Международный саммит академического сотрудничества Узбекистан–Турция, Трабзон, 20–25 июня 2026 года. 40 участников, доклады и сертификаты.",
      en: "The Uzbekistan–Türkiye international academic cooperation summit, Trabzon, 20–25 June 2026. Forty participants, talks and certificates.",
    },
  },
  {
    slug: "samdpi-2026",
    start: "2026-03-27",
    end: "2026-03-28",
    city: "Samarkand",
    country: "UZ",
    title: {
      uz: "“Musiqa pedagogikasida innovatsiyalar va madaniyatlararo yondashuvlar: Yevrosiyo tajribalari” — Samarqand, 2026",
      ru: "«Инновации и межкультурные подходы в музыкальной педагогике: евразийский опыт» — Самарканд, 2026",
      en: "\"Innovations and Intercultural Approaches in Music Pedagogy: Eurasian Experience\" — Samarkand, 2026",
    },
    description: {
      uz: "Samarqand davlat pedagogika instituti bilan xalqaro ilmiy-amaliy konferensiya, 2026-yil 27–28-mart.",
      ru: "Международная научно-практическая конференция с Самаркандским государственным педагогическим институтом, 27–28 марта 2026 года.",
      en: "International research and practice conference with Samarkand State Pedagogical Institute, 27–28 March 2026.",
    },
  },
  {
    slug: "turkiye-2026",
    start: "2026-01-27",
    city: "Istanbul",
    country: "TR",
    title: {
      uz: "Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026",
      ru: "Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Турция 2026",
      en: "Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026",
    },
    description: {
      uz: "Turk–O‘zbek ilm sammiti, Istanbul, 2026-yil 27-yanvar. 24 nafar o‘zbekistonlik olim va Scopus bo‘yicha mahorat darsi.",
      ru: "Турецко-узбекский научный саммит, Стамбул, 27 января 2026 года. 24 учёных из Узбекистана и мастер-класс по Scopus.",
      en: "The Turkish–Uzbek science summit, Istanbul, 27 January 2026. Twenty-four scholars from Uzbekistan and a Scopus masterclass.",
    },
  },
  {
    slug: "alanya-2025",
    start: "2025-10",
    city: "Alanya",
    country: "TR",
    title: {
      uz: "Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı — Alanya, 2025",
      ru: "Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı — Аланья, 2025",
      en: "Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı — Alanya, 2025",
    },
    description: {
      uz: "Alanya madaniyat markazidagi ilmiy konferensiya va 302 betlik ilmiy to‘plam, 2025-yil oktabr.",
      ru: "Научная конференция в Культурном центре Аланьи и 302-страничный сборник статей, октябрь 2025 года.",
      en: "Scientific conference at the Alanya Culture Centre and a 302-page proceedings volume, October 2025.",
    },
  },
  {
    slug: "samdaqu-2025",
    start: "2025-09-26",
    city: "Samarkand",
    country: "UZ",
    title: {
      uz: "“Zamonaviy arxitektura, dizayn va shaharsozlikni barqaror rivojlantirishning dolzarb muammolari va innovatsion yechimlari” — Samarqand, 2025",
      ru: "«Актуальные проблемы и инновационные решения устойчивого развития современной архитектуры, дизайна и градостроительства» — Самарканд, 2025",
      en: "\"Current Problems and Innovative Solutions for the Sustainable Development of Modern Architecture, Design and Urban Planning\" — Samarkand, 2025",
    },
    description: {
      uz: "SamDAQU bilan xalqaro ilmiy-amaliy konferensiya, 2025-yil 26-sentyabr. Hamkor davlatlar: Turkiya, Rossiya, Qozog‘iston, Koreya.",
      ru: "Международная конференция с СамДАКУ, 26 сентября 2025 года. Страны-партнёры: Турция, Россия, Казахстан, Корея.",
      en: "International conference with SamDAQU, 26 September 2025. Partner countries: Türkiye, Russia, Kazakhstan and Korea.",
    },
  },
];

export const eventFor = (slug: string) => events.find((e) => e.slug === slug);
