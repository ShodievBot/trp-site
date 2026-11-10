import { pick, type LocaleMap } from "@/lib/i18n";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export const revalidate = 300;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page = {
  uz: {
    kicker: 'Konferensiyalar',
    title: 'Xalqaro akademik konferensiyalar va ilmiy hamkorlik',
    description:
      'The Most Reliable Publication xalqaro konferensiyalar, akademik sammitlar va ilmiy hamkorlik loyihalarini tashkil etishda ishtirok etadi.',
    featured: 'O‘tgan tadbir · 20–25-iyun 2026',
    summitTitle: 'Uzbekistan–Türkiye International Academic Cooperation Summit',
    summitText:
      'Ilm-fan, madaniyat va akademik hamkorlik sari umumiy kelajak. Sammit 2026-yil 20–25-iyun kunlari Turkiyaning Trabzon shahrida bo‘lib o‘tdi. Keyingi konferensiyalar haqida ma’lumot olish uchun ariza qoldiring.',
    date: '20–25-iyun 2026',
    location: 'Trabzon, Turkiya',
    deadline: '10-iyun 2026',
    participants: '40 nafar',
    price: '800$',
    conditionsTitle: 'Ishtirok etish shartlari',
    includedTitle: 'Narx ichiga kiradi',
    rewardsTitle: 'Ishtirokchilar taqdirlanadi',
    advantagesTitle: 'Konferensiya afzalliklari',
    contactButton: 'Keyingi konferensiyaga ariza',
    facts: [
      ['Sana', '20–25-iyun 2026'],
      ['Manzil', 'Trabzon, Turkiya'],
      ['Maqola muddati', '10-iyun 2026'],
      ['Ishtirokchilar', '40 nafar'],
      ['Narx', '800$'],
    ],
    conditions: [
      'Maqolalar ingliz tilida IMRAD talablari asosida qabul qilinadi',
      'Ishtirokchilar 3x4 rasm yuborishi kerak',
      'Chipta uchun xorijiy pasport ma’lumotlari kerak bo‘ladi',
    ],
    included: [
      'Toshkent — Trabzon — Toshkent samolyot bileti',
      'Aeroportdan servis',
      '5 kunlik mehmonxona',
      'Ertalabki nonushta',
      'Sayohatlar',
      'Konferensiyada ishtirok',
    ],
    rewards: [
      '“Xalqaro tadqiqotchi” statuetkasi',
      'Xalqaro konferensiyada ishtirok sertifikati',
      'Konferensiya bosma nashr kitobi',
    ],
    advantages: [
      'Xalqaro ilmiy maydonga chiqish',
      'Televideniyada intervyu olish imkoniyati',
      'Xalqaro konferensiyada nutq qilganlik haqida bayonnoma',
      'Trabzon gazetasida xabarlar',
      'Akademik hamkorlik va xalqaro networking',
    ],
  },
  ru: {
    kicker: 'Конференции',
    title: 'Международные академические конференции и научное сотрудничество',
    description:
      'The Most Reliable Publication участвует в организации международных конференций, академических саммитов и проектов научного сотрудничества.',
    featured: 'Прошедшее событие · 20–25 июня 2026',
    summitTitle: 'Uzbekistan–Türkiye International Academic Cooperation Summit',
    summitText:
      'Общее будущее через науку, культуру и академическое сотрудничество. Саммит прошёл 20–25 июня 2026 года в Трабзоне (Турция). Оставьте заявку, чтобы узнать о следующих конференциях.',
    date: '20–25 июня 2026',
    location: 'Трабзон, Турция',
    deadline: '10 июня 2026',
    participants: '40 участников',
    price: '800$',
    conditionsTitle: 'Условия участия',
    includedTitle: 'Что входит в стоимость',
    rewardsTitle: 'Что получает участник',
    advantagesTitle: 'Преимущества конференции',
    contactButton: 'Заявка на следующую конференцию',
    facts: [
      ['Даты', '20–25 июня 2026'],
      ['Место', 'Трабзон, Турция'],
      ['Дедлайн статьи', '10 июня 2026'],
      ['Участники', '40 человек'],
      ['Стоимость', '800$'],
    ],
    conditions: [
      'Статьи принимаются на английском языке по требованиям IMRAD',
      'Участникам необходимо отправить фото 3x4 для бейджа',
      'Для авиабилета потребуются данные заграничного паспорта',
    ],
    included: [
      'Авиабилет Ташкент — Трабзон — Ташкент',
      'Трансфер из аэропорта',
      'Отель на 5 дней',
      'Завтрак',
      'Экскурсии',
      'Участие в конференции',
    ],
    rewards: [
      'Статуэтка “Международный исследователь”',
      'Сертификат участия в международной конференции',
      'Печатная книга конференции',
    ],
    advantages: [
      'Выход на международную научную площадку',
      'Возможность интервью на телевидении',
      'Протокол о выступлении на международной конференции',
      'Публикации в газете Trabzon',
      'Академическое сотрудничество и международный networking',
    ],
  },
  en: {
    kicker: 'Conferences',
    title: 'International academic conferences and scientific cooperation',
    description:
      'The Most Reliable Publication participates in organizing international conferences, academic summits and scientific cooperation projects.',
    featured: 'Past event · 20–25 June 2026',
    summitTitle: 'Uzbekistan–Türkiye International Academic Cooperation Summit',
    summitText:
      'A shared future through science, culture and academic cooperation. The summit took place in Trabzon, Türkiye, on 20–25 June 2026. Submit a request to hear about upcoming conferences.',
    date: '20–25 June 2026',
    location: 'Trabzon, Türkiye',
    deadline: 'June 10, 2026',
    participants: '40 participants',
    price: '800$',
    conditionsTitle: 'Participation requirements',
    includedTitle: 'Included in the price',
    rewardsTitle: 'Participants receive',
    advantagesTitle: 'Conference benefits',
    contactButton: 'Apply for the next conference',
    facts: [
      ['Dates', '20–25 June 2026'],
      ['Location', 'Trabzon, Türkiye'],
      ['Article deadline', 'June 10, 2026'],
      ['Participants', '40 people'],
      ['Price', '800$'],
    ],
    conditions: [
      'Articles are accepted in English according to IMRAD requirements',
      'Participants should submit a 3x4 photo for the badge',
      'Passport details are required for the flight ticket',
    ],
    included: [
      'Tashkent — Trabzon — Tashkent flight ticket',
      'Airport transfer',
      '5-day hotel accommodation',
      'Breakfast',
      'Tours',
      'Conference participation',
    ],
    rewards: [
      '“International Researcher” statuette',
      'International conference participation certificate',
      'Printed conference proceedings book',
    ],
    advantages: [
      'Access to an international academic platform',
      'Opportunity for a TV interview',
      'Protocol confirming conference speech',
      'Coverage in Trabzon newspaper',
      'Academic cooperation and international networking',
    ],
  },
} satisfies LocaleMap<unknown>;

// Held conferences, newest first. `source` is press coverage, when there is one.
const past: { title: string; source?: string; meta: LocaleMap<string>; text: LocaleMap<string> }[] = [
  {
    title: 'Uzbekistan–Türkiye International Academic Cooperation Summit',
    meta: { uz: '20–25-iyun 2026 · Trabzon, Turkiya', ru: '20–25 июня 2026 · Трабзон, Турция', en: '20–25 June 2026 · Trabzon, Türkiye' },
    text: {
      uz: 'Xalqaro akademik hamkorlik sammiti, 40 nafar ishtirokchi.',
      ru: 'Международный саммит академического сотрудничества, 40 участников.',
      en: 'International academic cooperation summit with 40 participants.',
    },
  },
  {
    title: '“Musiqa pedagogikasida innovatsiyalar va madaniyatlararo yondashuvlar: Yevrosiyo tajribalari”',
    meta: { uz: '27–28-mart 2026 · Samarqand, O‘zbekiston', ru: '27–28 марта 2026 · Самарканд, Узбекистан', en: '27–28 March 2026 · Samarkand, Uzbekistan' },
    text: {
      uz: 'Samarqand davlat pedagogika instituti bilan hamkorlikda o‘tkazilgan xalqaro ilmiy-amaliy anjuman.',
      ru: 'Международная научно-практическая конференция совместно с Самаркандским государственным педагогическим институтом.',
      en: 'International research and practice conference held with Samarkand State Pedagogical Institute.',
    },
  },
  {
    title: 'Türk–Özbek Bilim Zirvesi: “Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026”',
    source: 'https://www.yenialanya.com/istanbulda-turk-ozbek-bilim-zirvesi',
    meta: { uz: '27-yanvar 2026 · Istanbul, Turkiya', ru: '27 января 2026 · Стамбул, Турция', en: '27 January 2026 · Istanbul, Türkiye' },
    text: {
      uz: 'Kadıköy, Moda, İDEA zalida Baygenç Yayıncılık bilan hamkorlikda o‘tkazildi. O‘zbekistondan 24 nafar professor va olim qatnashdi; dasturda Scopus bo‘yicha mahorat darsi va sertifikatlar topshirish marosimi bo‘ldi.',
      ru: 'Прошла в зале İDEA (Мода, Кадыкёй) совместно с издательством Baygenç Yayıncılık. Участвовали 24 профессора и учёных из Узбекистана; в программе были мастер-класс по Scopus и вручение сертификатов.',
      en: 'Held at the İDEA hall (Moda, Kadıköy) together with Baygenç Yayıncılık. 24 professors and scholars from Uzbekistan took part; the programme included a Scopus masterclass and a certificate ceremony.',
    },
  },
  {
    title: '“Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı”',
    source: 'https://www.yenialanya.com/foto/26659355/alanya-kultur-merkezinde-turkiye-ozbekistan-arasinda-is-birligi-konferansi-yapildi',
    meta: { uz: 'Oktabr 2025 · Alanya, Turkiya', ru: 'Октябрь 2025 · Аланья, Турция', en: 'October 2025 · Alanya, Türkiye' },
    text: {
      uz: 'Alanya madaniyat markazida Baygenç Yayıncılık bilan hamkorlikda o‘tkazildi. Ishtirokchilarning ilmiy maqolalari 302 betlik shu nomdagi to‘plamda nashr etildi.',
      ru: 'Прошла в Культурном центре Аланьи совместно с издательством Baygenç Yayıncılık. Научные статьи участников вышли в одноимённом сборнике объёмом 302 страницы.',
      en: 'Held at the Alanya Culture Centre together with Baygenç Yayıncılık. Participants’ papers were published in a 302-page volume of the same name.',
    },
  },
];

const pastLabels = {
  uz: { title: 'O‘tkazilgan konferensiyalar', source: 'Matbuotda' },
  ru: { title: 'Проведённые конференции', source: 'Публикация в прессе' },
  en: { title: 'Past conferences', source: 'Press coverage' },
} satisfies LocaleMap<unknown>;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = pick(page, locale);
  return pageMetadata({ locale, path: '/conferences', title: c.kicker, description: c.description });
}

export default async function ConferencesPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const c = pick(page, locale);

  return (
    <main>
      <section className="innerHero">

        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section className="conferencePageSection">
        <div className="conferenceFeature">
          <div className="conferenceFeatureContent">
            <p className="sectionKicker">{c.featured}</p>
            <h2>{c.summitTitle}</h2>
            <p>{c.summitText}</p>

            <div className="conferencePageFacts">
              {c.facts.map((fact: string[]) => (
                <div key={fact[0]}>
                  <span>{fact[0]}</span>
                  <strong>{fact[1]}</strong>
                </div>
              ))}
            </div>

            <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
              {c.contactButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="conferenceDetails" style={{ gridTemplateColumns: '1fr' }}>
        <article className="conferenceInfoCard">
          <h2>{pick(pastLabels, locale).title}</h2>
          <ul>
            {past.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <br />
                {pick(item.meta, locale)}. {pick(item.text, locale)}
                {item.source && (
                  <>
                    {' '}
                    <a href={item.source} target="_blank" rel="noopener noreferrer">
                      {pick(pastLabels, locale).source} ↗
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="conferenceDetails">
        <InfoBlock title={c.conditionsTitle} items={c.conditions} />
        <InfoBlock title={c.includedTitle} items={c.included} />
        <InfoBlock title={c.rewardsTitle} items={c.rewards} />
        <InfoBlock title={c.advantagesTitle} items={c.advantages} />
      </section>
    </main>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="conferenceInfoCard">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
