import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale, type LocaleMap } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page: LocaleMap<{
  kicker: string;
  title: string;
  description: string;
  intro: string;
  partnersTitle: string;
  partners: [string, string][];
  countriesTitle: string;
  countries: string;
  cta: string;
  ctaButton: string;
}> = {
  uz: {
    kicker: "Hamkorliklar",
    title: "Universitetlar va xalqaro hamkorlar bilan ishlaymiz",
    description:
      "The Most Reliable Publication hamkorlari: Samarqand davlat pedagogika instituti, SamDAQU, turkiyalik nashriyotlar va universitetlar. Xalqaro konferensiyalar O‘zbekiston va Turkiyada o‘tkaziladi.",
    intro:
      "Biz universitetlar, ilmiy markazlar va nashriyotlar bilan hamkorlikda xalqaro ilmiy tadbirlar tashkil etamiz: dastur, xorijiy ishtirokchilar, materiallarni nashrga tayyorlash va sertifikatlar.",
    partnersTitle: "Hamkorlar",
    partners: [
      [
        "Samarqand davlat pedagogika instituti",
        "“Musiqa pedagogikasida innovatsiyalar va madaniyatlararo yondashuvlar: Yevrosiyo tajribalari” xalqaro konferensiyasi (2026-yil 27–28-mart).",
      ],
      [
        "Mirzo Ulug‘bek nomidagi Samarqand davlat arxitektura-qurilish universiteti (SamDAQU)",
        "“Zamonaviy arxitektura, dizayn va shaharsozlikni barqaror rivojlantirish” xalqaro konferensiyasi (2025-yil 26-sentyabr).",
      ],
      [
        "Baygenç Yayıncılık (Turkiya)",
        "Istanbuldagi Turk–O‘zbek ilm sammiti (2026) va Alan'yadagi “Avrasya’da Stratejik Ortaklık” ilmiy konferensiyasi (2025).",
      ],
      [
        "“Global Ta’lim” markazi",
        "Istanbuldagi ilm sammitini tashkil etishdagi hamkorlik (2026).",
      ],
      [
        "O‘zbekiston–Turkiya akademik hamkorlik sammiti (Trabzon, 2026)",
        "40 nafar o‘zbekistonlik olim ishtirok etgan xalqaro sammit: ma’ruzalar, sertifikatlar va to‘plam.",
      ],
    ],
    countriesTitle: "Geografiya",
    countries:
      "Konferensiyalarimizda Turkiya, Rossiya, Qozog‘iston va Koreyadan kelgan ishtirokchilar qatnashdi. Bosh mamlakatlar: O‘zbekiston va Turkiya.",
    cta: "Universitetingiz yoki tashkilotingiz bilan hamkorlik qilmoqchimisiz?",
    ctaButton: "Hamkorlik taklifi yuborish",
  },
  ru: {
    kicker: "Партнёрство",
    title: "Работаем с университетами и международными партнёрами",
    description:
      "Партнёры The Most Reliable Publication: Самаркандский государственный педагогический институт, СамДАКУ, турецкие издательства и университеты. Международные конференции проходят в Узбекистане и Турции.",
    intro:
      "Мы организуем международные научные мероприятия в партнёрстве с университетами, научными центрами и издательствами: программа, иностранные участники, подготовка материалов к изданию и сертификаты.",
    partnersTitle: "Партнёры",
    partners: [
      [
        "Самаркандский государственный педагогический институт",
        "Международная конференция «Инновации и межкультурные подходы в музыкальной педагогике: евразийский опыт» (27–28 марта 2026 года).",
      ],
      [
        "Самаркандский государственный архитектурно-строительный университет им. Мирзо Улугбека (СамДАКУ)",
        "Международная конференция «Актуальные проблемы и инновационные решения устойчивого развития архитектуры, дизайна и градостроительства» (26 сентября 2025 года).",
      ],
      [
        "Baygenç Yayıncılık (Турция)",
        "Турецко-узбекский научный саммит в Стамбуле (2026) и конференция «Avrasya’da Stratejik Ortaklık» в Аланье (2025).",
      ],
      [
        "Центр «Global Ta’lim»",
        "Партнёрство в организации научного саммита в Стамбуле (2026).",
      ],
      [
        "Саммит академического сотрудничества Узбекистан–Турция (Трабзон, 2026)",
        "Международный саммит с участием 40 узбекистанских учёных: доклады, сертификаты и сборник.",
      ],
    ],
    countriesTitle: "География",
    countries:
      "В наших конференциях участвовали гости из Турции, России, Казахстана и Кореи. Основные страны: Узбекистан и Турция.",
    cta: "Хотите сотрудничать с вашим университетом или организацией?",
    ctaButton: "Отправить предложение о партнёрстве",
  },
  en: {
    kicker: "Partnerships",
    title: "We work with universities and international partners",
    description:
      "Partners of The Most Reliable Publication: Samarkand State Pedagogical Institute, SamDAQU, Turkish publishers and universities. International conferences are held in Uzbekistan and Türkiye.",
    intro:
      "We organise international academic events together with universities, research centres and publishers: the programme, foreign participants, preparing materials for publication and certificates.",
    partnersTitle: "Partners",
    partners: [
      [
        "Samarkand State Pedagogical Institute",
        "The international conference \"Innovations and Intercultural Approaches in Music Pedagogy: Eurasian Experience\" (27–28 March 2026).",
      ],
      [
        "Mirzo Ulugbek Samarkand State University of Architecture and Construction (SamDAQU)",
        "The international conference \"Current Problems and Innovative Solutions for the Sustainable Development of Architecture, Design and Urban Planning\" (26 September 2025).",
      ],
      [
        "Baygenç Yayıncılık (Türkiye)",
        "The Turkish–Uzbek science summit in Istanbul (2026) and the \"Avrasya'da Stratejik Ortaklık\" conference in Alanya (2025).",
      ],
      [
        "Global Ta'lim centre",
        "Partnership in organising the science summit in Istanbul (2026).",
      ],
      [
        "Uzbekistan–Türkiye Academic Cooperation Summit (Trabzon, 2026)",
        "An international summit with 40 Uzbek scholars: talks, certificates and proceedings.",
      ],
    ],
    countriesTitle: "Geography",
    countries:
      "Our conferences have hosted participants from Türkiye, Russia, Kazakhstan and Korea. Home countries: Uzbekistan and Türkiye.",
    cta: "Would like to cooperate with your university or organisation?",
    ctaButton: "Send a partnership proposal",
  },
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = page[locale] ?? page.uz;
  return pageMetadata({ locale, path: "/partners", title: c.kicker, description: c.description });
}

export default async function PartnersPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const c = page[locale] ?? page.uz;

  return (
    <main>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section className="premiumSection">
        <div className="premiumSectionHeader">
          <p>{c.intro}</p>
        </div>

        <h2>{c.partnersTitle}</h2>
        <div className="directionsGrid">
          {c.partners.map(([title, text]) => (
            <article className="directionCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <h2 style={{ marginTop: 40 }}>{c.countriesTitle}</h2>
        <p>{c.countries}</p>
      </section>

      <section className="serviceCta">
        <div>
          <p className="sectionKicker">{c.kicker}</p>
          <h2>{c.cta}</h2>
        </div>

        <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
          {c.ctaButton}
        </Link>
      </section>
    </main>
  );
}
