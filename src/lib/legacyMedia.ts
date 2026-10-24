import type { Locale } from "@/lib/i18n";

// Photos and videos carried over from the old site (themostreliablepublication.uz).
// Large videos (>20 MB) are not re-hosted: they are linked to the old site with a local poster.
const OLD_SITE = "https://themostreliablepublication.uz/images/0";

export type GalleryVideo = { src: string; poster: string; external?: boolean };

export type GalleryBlock = {
  id: string;
  title: Record<Locale, string>;
  text: Record<Locale, string>;
  images: string[];
  video?: GalleryVideo;
};

const img = (name: string) => `/images/legacy/${name}.webp`;
const series = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => img(`${prefix}-${i + 1}`));

export const galleryBlocks: GalleryBlock[] = [
  {
    id: "samdpi-2026",
    title: {
      uz: "27–28-mart 2026: Samarqand davlat pedagogika instituti bilan xalqaro konferensiya",
      ru: "27–28 марта 2026: международная конференция с СамГПИ",
      en: "27–28 March 2026: international conference with Samarkand State Pedagogical Institute",
    },
    text: {
      uz: "Samarqand davlat pedagogika instituti va The Most Reliable Publication hamkorligida “Musiqa pedagogikasida innovatsiyalar va madaniyatlararo yondashuvlar: Yevrosiyo tajribalari” xalqaro ilmiy-amaliy anjumani o‘tkazildi.",
      ru: "Самаркандский государственный педагогический институт и The Most Reliable Publication провели международную научно-практическую конференцию «Инновации и межкультурные подходы в музыкальной педагогике: евразийский опыт».",
      en: "Samarkand State Pedagogical Institute and The Most Reliable Publication held the international conference “Innovations and Intercultural Approaches in Music Pedagogy: Eurasian Experience”.",
    },
    images: [],
    video: {
      src: `${OLD_SITE}/24528863/IMG_0676-Q93tgOvhMbKb2qXKAxa2pA.MP4`,
      poster: img("samdpi-2026-poster"),
      external: true,
    },
  },
  {
    id: "turkiye-2026",
    title: {
      uz: "“Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026”",
      ru: "«Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026»",
      en: "“Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026”",
    },
    text: {
      uz: "Turkiyada o‘tkazilgan xalqaro konferensiya: ishtirokchilar, taqdirlash marosimi va ilmiy muloqot.",
      ru: "Международная конференция в Турции: участники, церемония награждения и научный диалог.",
      en: "An international conference in Türkiye: participants, the award ceremony and academic dialogue.",
    },
    images: series("turkiye-2026", 5),
    video: { src: "/videos/turkiye-2026.mp4", poster: img("turkiye-2026-poster") },
  },
  {
    id: "events-2025",
    title: {
      uz: "Konferensiyalar va hamkorlik uchrashuvlari",
      ru: "Конференции и встречи с партнёрами",
      en: "Conferences and partner meetings",
    },
    text: {
      uz: "Universitetlar va xorijiy hamkorlar bilan o‘tkazilgan tadbirlardan lavhalar.",
      ru: "Кадры с мероприятий, проведённых совместно с университетами и зарубежными партнёрами.",
      en: "Moments from events held with universities and international partners.",
    },
    images: series("events-2025", 8),
    video: {
      src: `${OLD_SITE}/22427579/376886401-xqdnO-17u5LQxl8A0Q8s-g.mp4`,
      poster: img("highlights-1"),
      external: true,
    },
  },
  {
    id: "awards",
    title: {
      uz: "Sertifikatlar va taqdirlash",
      ru: "Сертификаты и награждение",
      en: "Certificates and awards",
    },
    text: {
      uz: "Ishtirokchilar sertifikatlar va esdalik sovg‘alari bilan taqdirlandi.",
      ru: "Участники получили сертификаты и памятные награды.",
      en: "Participants received certificates and commemorative awards.",
    },
    images: [...series("awards", 4), img("highlights-2"), img("highlights-3"), img("highlights-4")],
    video: {
      src: `${OLD_SITE}/22447495/P4c9ChbXQ25EIwfSKdPXV8dKWQ7rw4g-JHE03Y0AtCt7rODvEtXeNw.mp4`,
      poster: img("highlights-4"),
      external: true,
    },
  },
];

// Low-resolution scans from the old site's license page.
export const legacyLicenseScans = series("license", 4);
