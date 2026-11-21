import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "uzakademiya-journal-database",
  date: "2026-11-21",
  title: {
    uz: "UzAkademiya.uz bazasi: jurnalni tekshirish va VAK (OAK) jurnalini tanlash qo‘llanmasi",
    ru: "База UzAkademiya.uz: как проверить журнал и подобрать журнал ВАК (ОАК)",
    en: "The UzAkademiya.uz database: how to check a journal and pick a VAK (OAK) journal",
  },
  description: {
    uz: "UzAkademiya.uz ilmiy jurnallar bazasidan qanday foydalanish: 800 dan ortiq VAK jurnali va Scopus jurnallari katalogi, kvartil va tarmoq bo‘yicha tanlash, qonunchilik bo‘limi.",
    ru: "Как пользоваться научной базой UzAkademiya.uz: каталог из 800+ журналов ВАК и журналов Scopus, подбор по квартилю и отрасли, раздел законодательства.",
    en: "How to use the UzAkademiya.uz research database: a catalogue of 800+ VAK journals and Scopus titles, filtering by quartile and field, and a legislation section.",
  },
  body: {
    uz: `
## Bu nima

[UzAkademiya.uz](https://uzakademiya.uz/ru) — O‘zbekiston ilmiy jurnallarining raqamli bazasi. Unda 800 dan ortiq VAK (OAK) jurnali va 60 dan ortiq Scopus jurnali birlashtirilgan: har bir jurnal uchun ISSN, indeksatsiya, nashriyot, metrikalar va rasmiy sayt ko‘rsatilgan. Biz bilan hamkorlikda yuritiladi va nashr qidirayotgan har bir izlanuvchiga foydali.

## Jurnalni tekshirish (jurnal haqiqiymi, soxtami)

- Baza bo‘ylab jurnal nomi yoki ISSN bo‘yicha qidiring.
- Jurnal sahifasida uning indeksatsiyasi (Scopus, OAK ro‘yxati), kvartili va nashriyoti ko‘rinadi.
- Soxta jurnallarni chalg‘itishining oldini olish uchun jurnalni baza bilan solishtiring — [tekshirishning to‘liq bosqichlari](/uz/useful/check-journal-scopus) alohida qo‘llanmamizda.

## VAK (OAK) jurnalini tanlash

- [Katalogda](https://uzakademiya.uz/ru) fan tarmog‘i bo‘yicha tanlang: masalan, [texnika fanlari (05.00.00)](https://uzakademiya.uz/ru/oak/05-00-00) yoki [pedagogika fanlari (13.00.00)](https://uzakademiya.uz/ru/oak/13-00-00).
- Har bir yo‘nalishda jurnallar ISSN, indeksatsiya va nashriyot bilan keltiriladi — sizga mos soha va shartlarni tez solishtirasiz.
- OAK ro‘yxatining o‘zi qanday yuritilishini va nimalarni tekshirish kerakligini [alohida qo‘llanmada](/uz/useful/oak-journals-list) yozganmiz.

## Qonunchilik va nashr talablari

Bazada OAK va ilmiy darajalar bo‘yicha [nashr talablari](https://uzakademiya.uz/ru/publication-requirements) va qonunchilik bo‘limi bor: PhD va DSc uchun qancha nashr kerakligi, hozirgi qoidalar va yangi tartiblar havolalari bilan keltirilgan. 2027-yildagi o‘zgarishlar haqidagi [qo‘llanmamizni](/uz/useful/phd-dsc-new-rules-2027) ham ko‘ring.

## Qulayliklari

- Kvartil, indeksatsiya, tarmoq va nashriyot bo‘yicha tezkor filtr.
- Mashhur jurnallar tanlanmasi — tez start uchun.
- Har bir jurnalning metrikalari va nashr variantlari haqidagi sahifasi.
- Savollaringiz bo‘lsa — Telegram orqali yordam: [@uzakademiyasupport](https://t.me/uzakademiyasupport).

## Bizning yordam

Agar jurnal tanlash yoki nashr jarayonida yordam kerak bo‘lsa — [bizga yozing](/uz/contact): mavzuingizga mos jurnallar tanlaymiz va nashrni boshidan oxirigacha kuzatamiz.
`,
    ru: `
## Что это

[UzAkademiya.uz](https://uzakademiya.uz/ru) — цифровая база научных журналов Узбекистана. В ней собраны более 800 журналов ВАК (ОАК) и более 60 журналов Scopus: для каждого журнала указаны ISSN, индексация, издатель, метрики и официальный сайт. База ведётся в партнёрстве с нами и полезна каждому соискателю, который ищет журнал для публикации.

## Проверка журнала (настоящий или поддельный)

- Найдите журнал в базе по названию или ISSN.
- На странице журнала будут его индексация (Scopus, перечень ОАК), квартиль и издатель.
- Чтобы не попасть на поддельные журналы, сверяйтесь с базой — [полные шаги проверки](/ru/useful/check-journal-scopus) описаны в отдельном руководстве.

## Подбор журнала ВАК (ОАК)

- Выберите отрасль в [каталоге](https://uzakademiya.uz/ru): например, [технические науки (05.00.00)](https://uzakademiya.uz/ru/oak/05-00-00) или [педагогические науки (13.00.00)](https://uzakademiya.uz/ru/oak/13-00-00).
- По каждому направлению приведены журналы с ISSN, индексацией и издателем — быстро сравните подходящие вам области и условия.
- Как ведётся сам перечень ОАК и что именно проверять, мы описали в [отдельном руководстве](/ru/useful/oak-journals-list).

## Законодательство и требования к публикациям

В базе есть раздел [требований к публикациям](https://uzakademiya.uz/ru/publication-requirements) и законодательство по ОАК: сколько публикаций нужно для PhD и DSc, действующие правила и ссылки на документы. Нововведения 2027 года мы разобрали в [отдельной статье](/ru/useful/phd-dsc-new-rules-2027).

## Удобства

- Быстрые фильтры по квартилю, индексации, отрасли и издателю.
- Подборка популярных журналов для быстрого старта.
- У каждого журнала — страница с метриками и вариантами публикации.
- Если остались вопросы — поддержка в Telegram: [@uzakademiyasupport](https://t.me/uzakademiyasupport).

## Наша помощь

Если нужна помощь с подбором журнала или самим процессом публикации — [напишите нам](/ru/contact): подберём журналы под вашу тему и сопроводим публикацию от заявки до выхода статьи.
`,
    en: `
## What it is

[UzAkademiya.uz](https://uzakademiya.uz/ru) is a digital database of Uzbekistan's scholarly journals. It brings together more than 800 VAK (OAK) journals and over 60 Scopus titles: each journal is listed with its ISSN, indexing, publisher, metrics and official website. The database is maintained in partnership with us and is useful for every researcher looking where to publish.

## Checking a journal (real or fake)

- Search the database by journal title or ISSN.
- The journal page shows its indexing (Scopus, the OAK list), quartile and publisher.
- To avoid falling for fake journals, cross-check with the database — the [full verification steps](/en/useful/check-journal-scopus) are in our separate guide.

## Choosing a VAK (OAK) journal

- Pick your field in the [catalogue](https://uzakademiya.uz/ru): for example, [Engineering (05.00.00)](https://uzakademiya.uz/ru/oak/05-00-00) or [Pedagogy (13.00.00)](https://uzakademiya.uz/ru/oak/13-00-00).
- Each field lists journals with ISSN, indexing and publisher — so you can quickly compare the areas and terms that fit you.
- How the OAK list itself is maintained and what exactly to verify is covered in our [separate guide](/en/useful/oak-journals-list).

## Legislation and publication requirements

The database has a section with [publication requirements](https://uzakademiya.uz/ru/publication-requirements) and OAK-related legislation: how many publications PhD and DSc need, current rules and links to documents. We break down the 2027 changes in a [separate article](/en/useful/phd-dsc-new-rules-2027).

## Practical features

- Fast filters by quartile, indexing, field and publisher.
- A selection of popular journals for a quick start.
- A page with metrics and publication options for every journal.
- If questions remain — support on Telegram: [@uzakademiyasupport](https://t.me/uzakademiyasupport).

## Our support

If you need help choosing a journal or with the publication process itself — [write to us](/en/contact): we match journals to your topic and accompany the publication from submission to print.
`,
  },
};
