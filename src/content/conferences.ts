import type { UsefulArticle } from "@/lib/useful";

const img = (name: string) => `/images/legacy/${name}.webp`;

// Held conferences, newest first. `gallery` pulls photos and video from legacyMedia.galleryBlocks.
export const conferences: UsefulArticle[] = [
  {
    slug: "trabzon-2026",
    date: "2026-06-25",
    cover: "/images/conferences/trabzon-2026.webp",
    title: {
      uz: "Uzbekistan–Türkiye International Academic Cooperation Summit — Trabzon, 2026",
      ru: "Uzbekistan–Türkiye International Academic Cooperation Summit — Трабзон, 2026",
      en: "Uzbekistan–Türkiye International Academic Cooperation Summit — Trabzon, 2026",
    },
    meta: {
      uz: "20–25-iyun 2026 · Trabzon, Turkiya",
      ru: "20–25 июня 2026 · Трабзон, Турция",
      en: "20–25 June 2026 · Trabzon, Türkiye",
    },
    description: {
      uz: "2026-yil 20–25-iyun kunlari Turkiyaning Trabzon shahrida o‘tgan O‘zbekiston–Turkiya xalqaro akademik hamkorlik sammiti: 40 nafar ishtirokchi, ma’ruzalar, sertifikatlar va konferensiya to‘plami.",
      ru: "Международный саммит академического сотрудничества Узбекистан–Турция, прошедший 20–25 июня 2026 года в Трабзоне: 40 участников, доклады, сертификаты и сборник конференции.",
      en: "The Uzbekistan–Türkiye international academic cooperation summit held in Trabzon on 20–25 June 2026: 40 participants, talks, certificates and conference proceedings.",
    },
    body: {
      uz: `
## Sammit haqida

“Ilm-fan, madaniyat va akademik hamkorlik sari umumiy kelajak” shiori ostidagi xalqaro sammit 2026-yil 20–25-iyun kunlari Turkiyaning Trabzon shahrida bo‘lib o‘tdi. Unda O‘zbekistondan 40 nafar olim va tadqiqotchi qatnashdi.

## Dastur

Ishtirokchilar xalqaro ilmiy maydonda ma’ruza qildilar, turkiyalik hamkasblar bilan tajriba almashdilar va akademik hamkorlik yo‘nalishlarini muhokama qildilar. Maqolalar ingliz tilida, IMRAD tuzilishi asosida qabul qilindi.

## Ishtirokchilar nimalarga ega bo‘ldi

- Xalqaro konferensiyada ishtirok sertifikati.
- “Xalqaro tadqiqotchi” statuetkasi.
- Konferensiyaning bosma to‘plami.
- Xalqaro konferensiyada ma’ruza qilganlik haqida bayonnoma.

## Tashkiliy paket

Ishtirok paketiga Toshkent — Trabzon — Toshkent aviachiptasi, aeroportdan transfer, besh kunlik mehmonxona, nonushta va sayohatlar kirdi.

Keyingi xalqaro konferensiyalarda qatnashish uchun ariza qoldiring.
`,
      ru: `
## О саммите

Международный саммит под девизом «Общее будущее через науку, культуру и академическое сотрудничество» прошёл 20–25 июня 2026 года в Трабзоне (Турция). В нём участвовали 40 учёных и исследователей из Узбекистана.

## Программа

Участники выступили с докладами на международной научной площадке, обменялись опытом с турецкими коллегами и обсудили направления академического сотрудничества. Статьи принимались на английском языке по структуре IMRAD.

## Что получили участники

- Сертификат участия в международной конференции.
- Статуэтку «Международный исследователь».
- Печатный сборник конференции.
- Протокол о выступлении на международной конференции.

## Организационный пакет

В пакет участия входили авиабилет Ташкент — Трабзон — Ташкент, трансфер из аэропорта, отель на пять дней, завтраки и экскурсии.

Чтобы участвовать в следующих международных конференциях, оставьте заявку.
`,
      en: `
## About the summit

The international summit under the motto "A shared future through science, culture and academic cooperation" took place in Trabzon, Türkiye, on 20–25 June 2026. Forty scholars and researchers from Uzbekistan took part.

## Programme

Participants gave talks at an international venue, exchanged experience with Turkish colleagues and discussed areas of academic cooperation. Papers were accepted in English in the IMRAD structure.

## What participants received

- A certificate of participation in an international conference.
- The "International Researcher" statuette.
- The printed conference proceedings.
- A protocol confirming their talk at an international conference.

## Travel package

The participation package covered the Tashkent — Trabzon — Tashkent flight, airport transfer, five days of hotel accommodation, breakfast and excursions.

Submit a request to take part in our next international conferences.
`,
    },
  },
  {
    slug: "samdpi-2026",
    date: "2026-03-28",
    cover: img("samdpi-2026-poster"),
    gallery: "samdpi-2026",
    title: {
      uz: "Samarqand davlat pedagogika instituti bilan xalqaro konferensiya — 2026",
      ru: "Международная конференция с Самаркандским государственным педагогическим институтом — 2026",
      en: "International conference with Samarkand State Pedagogical Institute — 2026",
    },
    meta: {
      uz: "27–28-mart 2026 · Samarqand, O‘zbekiston",
      ru: "27–28 марта 2026 · Самарканд, Узбекистан",
      en: "27–28 March 2026 · Samarkand, Uzbekistan",
    },
    description: {
      uz: "“Musiqa pedagogikasida innovatsiyalar va madaniyatlararo yondashuvlar: Yevrosiyo tajribalari” xalqaro ilmiy-amaliy konferensiyasi, Samarqand, 2026-yil 27–28-mart.",
      ru: "Международная научно-практическая конференция «Инновации и межкультурные подходы в музыкальной педагогике: евразийский опыт», Самарканд, 27–28 марта 2026 года.",
      en: "The international conference “Innovations and Intercultural Approaches in Music Pedagogy: Eurasian Experience”, Samarkand, 27–28 March 2026.",
    },
    body: {
      uz: `
## Konferensiya haqida

2026-yil 27–28-mart kunlari Samarqand davlat pedagogika instituti va The Most Reliable Publication nashriyoti hamkorligida “Musiqa pedagogikasida innovatsiyalar va madaniyatlararo yondashuvlar: Yevrosiyo tajribalari” mavzusida xalqaro ilmiy-amaliy konferensiya o‘tkazildi.

## Mavzular

Anjumanda musiqa ta’limida zamonaviy pedagogik texnologiyalar, madaniyatlararo muloqot va Yevrosiyo mamlakatlarining tajribasi muhokama qilindi. Ma’ruzalar bilan mahalliy va xorijiy olimlar, o‘qituvchilar va yosh tadqiqotchilar ishtirok etdi.

## Nashriyotning roli

The Most Reliable Publication konferensiyaning tashkiliy qismi, xorijiy ishtirokchilar bilan aloqa va materiallarni nashrga tayyorlashda hamkorlik qildi.

Universitetingizda shunday xalqaro konferensiya o‘tkazmoqchi bo‘lsangiz, ariza qoldiring.
`,
      ru: `
## О конференции

27–28 марта 2026 года Самаркандский государственный педагогический институт и издательство The Most Reliable Publication провели международную научно-практическую конференцию «Инновации и межкультурные подходы в музыкальной педагогике: евразийский опыт».

## Темы

На конференции обсуждали современные педагогические технологии в музыкальном образовании, межкультурный диалог и опыт стран Евразии. С докладами выступили местные и зарубежные учёные, преподаватели и молодые исследователи.

## Роль издательства

The Most Reliable Publication участвовало в организации конференции, работе с зарубежными участниками и подготовке материалов к изданию.

Если вы хотите провести такую международную конференцию в своём университете, оставьте заявку.
`,
      en: `
## About the conference

On 27–28 March 2026 Samarkand State Pedagogical Institute and The Most Reliable Publication held the international research and practice conference "Innovations and Intercultural Approaches in Music Pedagogy: Eurasian Experience".

## Topics

The conference discussed modern teaching technologies in music education, intercultural dialogue and the experience of Eurasian countries. Talks were given by local and foreign scholars, lecturers and early-career researchers.

## The publisher's role

The Most Reliable Publication took part in organising the conference, working with foreign participants and preparing the materials for publication.

If you would like to hold a similar international conference at your university, submit a request.
`,
    },
  },
  {
    slug: "turkiye-2026",
    date: "2026-01-27",
    cover: img("turkiye-2026-1"),
    gallery: "turkiye-2026",
    source: "https://www.yenialanya.com/istanbulda-turk-ozbek-bilim-zirvesi",
    title: {
      uz: "Turk–O‘zbek ilm sammiti — Istanbul, 2026",
      ru: "Турецко-узбекский научный саммит — Стамбул, 2026",
      en: "Turkish–Uzbek Science Summit — Istanbul, 2026",
    },
    meta: {
      uz: "27-yanvar 2026 · Istanbul, Turkiya",
      ru: "27 января 2026 · Стамбул, Турция",
      en: "27 January 2026 · Istanbul, Türkiye",
    },
    description: {
      uz: "“Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026”: Istanbulda o‘tgan Turk–O‘zbek ilm sammiti, 24 nafar o‘zbekistonlik olim, Scopus bo‘yicha mahorat darsi va sertifikatlar.",
      ru: "«Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026»: турецко-узбекский научный саммит в Стамбуле, 24 учёных из Узбекистана, мастер-класс по Scopus и сертификаты.",
      en: "“Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026”: the Turkish–Uzbek science summit in Istanbul with 24 scholars from Uzbekistan, a Scopus masterclass and certificates.",
    },
    body: {
      uz: `
## Sammit haqida

2026-yil 27-yanvar kuni Istanbulning Kadıköy tumanidagi Moda mavzesida joylashgan İDEA zalida Turk–O‘zbek ilm sammiti — “Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026” bo‘lib o‘tdi.

## Tashkilotchilar

Tadbir Turkiyaning Baygenç Yayıncılık nashriyoti, O‘zbekistonning The Most Reliable Publication ilmiy tadqiqotlar markazi va “Global Ta’lim” ta’limni qo‘llab-quvvatlash markazi hamkorligida tashkil etildi.

## Dastur

- O‘zbekistondan 24 nafar professor va mutaxassis olim ishtirok etdi.
- Turkiya va O‘zbekiston o‘rtasidagi akademik hamkorlikni mustahkamlash, ilmiy maqolalar almashinuvi va innovatsion tadqiqotlarni qo‘llab-quvvatlash muhokama qilindi.
- Scopus jurnallarida nashr, akademik yozuv va jurnal tanlash bo‘yicha bir soatlik mahorat darsi o‘tkazildi.
- Ishtirokchilarga sertifikatlar topshirildi.

## Natija

Tomonlar bunday uchrashuvlarni muntazam o‘tkazishga kelishib oldilar. Quyida sammitdan foto va video lavhalar.
`,
      ru: `
## О саммите

27 января 2026 года в зале İDEA в районе Мода (Кадыкёй, Стамбул) прошёл турецко-узбекский научный саммит — «Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026».

## Организаторы

Мероприятие организовали турецкое издательство Baygenç Yayıncılık, центр научных исследований The Most Reliable Publication (Узбекистан) и центр поддержки образования «Global Ta’lim».

## Программа

- В саммите участвовали 24 профессора и учёных-специалиста из Узбекистана.
- Обсуждали укрепление академического сотрудничества между Турцией и Узбекистаном, обмен научными статьями и поддержку инновационных исследований.
- Прошёл часовой мастер-класс о публикациях в журналах Scopus, академическом письме и выборе журнала.
- Участникам вручили сертификаты.

## Итог

Стороны договорились проводить такие встречи регулярно. Ниже фото и видео с саммита.
`,
      en: `
## About the summit

On 27 January 2026 the Turkish–Uzbek Science Summit, "Uluslararası Bilim Liderleri ve Yenilikçi Araştırmalar Konferansı — Türkiye 2026", took place at the İDEA hall in Moda, Kadıköy, Istanbul.

## Organisers

The event was organised by the Turkish publisher Baygenç Yayıncılık, The Most Reliable Publication research centre (Uzbekistan) and the Global Ta'lim education support centre.

## Programme

- 24 professors and specialist scholars from Uzbekistan took part.
- Discussions covered stronger academic cooperation between Türkiye and Uzbekistan, exchange of research papers and support for innovative research.
- A one-hour masterclass covered publishing in Scopus journals, academic writing and journal selection.
- Participants received certificates.

## Outcome

The parties agreed to hold such meetings regularly. Photos and video from the summit are below.
`,
    },
  },
  {
    slug: "samdaqu-2025",
    date: "2025-09-26",
    cover: img("samdaqu-2025-1"),
    gallery: "samdaqu-2025",
    title: {
      uz: "SamDAQU bilan xalqaro ilmiy-amaliy konferensiya — 2025",
      ru: "Международная научно-практическая конференция с СамГАСУ — 2025",
      en: "International conference with Samarkand State University of Architecture and Construction — 2025",
    },
    meta: {
      uz: "26-sentyabr 2025 · Samarqand, O‘zbekiston",
      ru: "26 сентября 2025 · Самарканд, Узбекистан",
      en: "26 September 2025 · Samarkand, Uzbekistan",
    },
    description: {
      uz: "“Zamonaviy arxitektura, dizayn va shaharsozlikni barqaror rivojlantirishning dolzarb muammolari va innovatsion yechimlari” xalqaro ilmiy-amaliy konferensiyasi, SamDAQU, 2025-yil 26-sentyabr.",
      ru: "Международная научно-практическая конференция «Актуальные проблемы и инновационные решения устойчивого развития современной архитектуры, дизайна и градостроительства», СамГАСУ, 26 сентября 2025 года.",
      en: "The international conference “Current Problems and Innovative Solutions for the Sustainable Development of Modern Architecture, Design and Urban Planning”, Samarkand, 26 September 2025.",
    },
    body: {
      uz: `
## Konferensiya haqida

2025-yil 26-sentyabr kuni Mirzo Ulug‘bek nomidagi Samarqand davlat arxitektura-qurilish universitetining katta faollar zalida “Zamonaviy arxitektura, dizayn va shaharsozlikni barqaror rivojlantirishning dolzarb muammolari va innovatsion yechimlari” mavzusidagi xalqaro ilmiy-amaliy konferensiya bo‘lib o‘tdi. Anjuman universitet va The Most Reliable Publication nashriyoti hamkorligida tashkil etildi.

## Ishtirokchilar

Konferensiyada mahalliy va xorijiy olimlar, soha mutaxassislari hamda iqtidorli talabalar o‘z ilmiy ishlari bilan qatnashdilar. Hamkor davlatlar: Turkiya, Rossiya, Qozog‘iston va Koreya.

## Ahamiyati

Bildirilgan ilmiy g‘oya va takliflar arxitektura, dizayn va shaharsozlikni rivojlantirishga oid dolzarb masalalarga yechim topishga xizmat qiladi. Ishtirokchilarga sertifikatlar va esdalik mukofotlari topshirildi.

## Universitetlar uchun

Biz universitetlar bilan hamkorlikda xalqaro konferensiyalar o‘tkazamiz: dastur, xorijiy ishtirokchilar, materiallar va sertifikatlar. Quyida konferensiyadan foto va video lavhalar.
`,
      ru: `
## О конференции

26 сентября 2025 года в большом актовом зале Самаркандского государственного архитектурно-строительного университета имени Мирзо Улугбека прошла международная научно-практическая конференция «Актуальные проблемы и инновационные решения устойчивого развития современной архитектуры, дизайна и градостроительства». Её организовали университет и издательство The Most Reliable Publication.

## Участники

В конференции со своими научными работами участвовали местные и зарубежные учёные, специалисты отрасли и талантливые студенты. Страны-партнёры: Турция, Россия, Казахстан и Корея.

## Значение

Высказанные научные идеи и предложения помогают искать решения актуальных задач развития архитектуры, дизайна и градостроительства. Участникам вручили сертификаты и памятные награды.

## Для университетов

Мы проводим международные конференции совместно с университетами: программа, зарубежные участники, материалы и сертификаты. Ниже фото и видео с конференции.
`,
      en: `
## About the conference

On 26 September 2025 the international research and practice conference "Current Problems and Innovative Solutions for the Sustainable Development of Modern Architecture, Design and Urban Planning" was held in the main assembly hall of Mirzo Ulugbek Samarkand State University of Architecture and Construction. It was organised by the university and The Most Reliable Publication.

## Participants

Local and foreign scholars, industry specialists and talented students presented their research. Partner countries: Türkiye, Russia, Kazakhstan and Korea.

## Significance

The ideas and proposals put forward help address current issues in architecture, design and urban planning. Participants received certificates and commemorative awards.

## For universities

We hold international conferences together with universities: programme, foreign participants, proceedings and certificates. Photos and video from the conference are below.
`,
    },
  },
  {
    slug: "alanya-2025",
    date: "2025-10-24",
    cover: "/images/conferences/alanya-2025.webp",
    source: "https://www.yenialanya.com/foto/26659355/alanya-kultur-merkezinde-turkiye-ozbekistan-arasinda-is-birligi-konferansi-yapildi",
    title: {
      uz: "Turkiya–O‘zbekiston ilmiy konferensiyasi — Alanya, 2025",
      ru: "Турецко-узбекская научная конференция — Аланья, 2025",
      en: "Türkiye–Uzbekistan Scientific Conference — Alanya, 2025",
    },
    meta: {
      uz: "Oktabr 2025 · Alanya, Turkiya",
      ru: "Октябрь 2025 · Аланья, Турция",
      en: "October 2025 · Alanya, Türkiye",
    },
    description: {
      uz: "“Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı”: Alanya madaniyat markazida o‘tgan ilmiy konferensiya va 302 betlik ilmiy maqolalar to‘plami.",
      ru: "«Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı»: научная конференция в Культурном центре Аланьи и сборник научных статей объёмом 302 страницы.",
      en: "“Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı”: a scientific conference at the Alanya Culture Centre and a 302-page volume of research papers.",
    },
    body: {
      uz: `
## Konferensiya haqida

2025-yil oktabr oyida Turkiyaning Antalya viloyatidagi Alanya madaniyat markazida “Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı” (“Yevrosiyoda strategik sheriklik va Turkiya–O‘zbekiston ilmiy konferensiyasi”) bo‘lib o‘tdi.

## Tashkilotchilar

Konferensiya Turkiyaning Baygenç Yayıncılık nashriyoti bilan hamkorlikda tashkil etildi.

## Ilmiy to‘plam

Konferensiya shu nomdagi ilmiy to‘plamga bag‘ishlandi. 302 betlik kitobda ishtirokchi olimlarning ilmiy maqolalari chop etildi.

## Mavzular

Anjumanda Turkiya va O‘zbekiston o‘rtasidagi akademik hamkorlik, O‘zbekistonni Turkiya va xorijda tanitish hamda ikki mamlakat olimlari o‘rtasidagi bilim almashinuvi muhokama qilindi.

Turkiyadagi keyingi konferensiyalarda qatnashish uchun ariza qoldiring.
`,
      ru: `
## О конференции

В октябре 2025 года в Культурном центре Аланьи (провинция Анталья, Турция) прошла конференция «Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı» («Стратегическое партнёрство в Евразии и турецко-узбекская научная конференция»).

## Организаторы

Конференция организована совместно с турецким издательством Baygenç Yayıncılık.

## Научный сборник

Конференция была посвящена одноимённому научному сборнику. В книге объёмом 302 страницы опубликованы научные статьи учёных-участников.

## Темы

На встрече обсуждали академическое сотрудничество Турции и Узбекистана, продвижение Узбекистана в Турции и за рубежом и обмен знаниями между учёными двух стран.

Чтобы участвовать в следующих конференциях в Турции, оставьте заявку.
`,
      en: `
## About the conference

In October 2025 the conference "Avrasya’da Stratejik Ortaklık ve Türkiye–Özbekistan Bilimsel Konferansı" (Strategic Partnership in Eurasia and the Türkiye–Uzbekistan Scientific Conference) was held at the Alanya Culture Centre in Antalya province, Türkiye.

## Organisers

The conference was organised together with the Turkish publisher Baygenç Yayıncılık.

## The volume

The conference was devoted to a scholarly volume of the same name. The 302-page book contains research papers by the participating scholars.

## Topics

The meeting discussed academic cooperation between Türkiye and Uzbekistan, promoting Uzbekistan in Türkiye and abroad, and knowledge exchange between scholars of the two countries.

Submit a request to take part in our next conferences in Türkiye.
`,
    },
  },
];
