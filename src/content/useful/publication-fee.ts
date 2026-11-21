import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "publication-fee",
  date: "2026-11-21",
  title: {
    uz: "Nashr to‘lovi (APC): narx nimaga bog‘liq va nimani o‘z ichiga oladi",
    ru: "Публикационный взнос (APC): от чего зависит цена и что она включает",
    en: "Publication fees (APC): what the price depends on and what it includes",
  },
  description: {
    uz: "Ilmiy jurnalda nashr to‘lovi nima, narx nimalarga bog‘liq, xizmat hamrohligi nimani o‘z ichiga oladi va shaffof bo‘lmagan to‘lovlardan qanday saqlanish.",
    ru: "Что такое публикационный взнос в научный журнал, от чего зависит цена, что включает сопровождение и как защититься от непрозрачных платежей.",
    en: "What a journal publication fee is, what drives the price, what our support includes and how to avoid opaque payments.",
  },
  body: {
    uz: `
## Nashr to‘lovi nima

Ko‘pgina ilmiy jurnallar «author pays» modelida ishlaydi: maqola qabul qilingach, muallif nashr, tahrir, DOI va onlayn tarqatish xarajatlarini qoplaydigan to‘lov (APC — Article Processing Charge) to‘laydi. Bu model ochiq kirish (Open Access) jurnallarida keng tarqalgan. Ayrim jurnallar esa mutlaqo bepul nashr etadi — odatda obuna modelidagi nashrlar.

## Narx nimaga bog‘liq

- Jurnal va uning kvartili: Q1 jurnallarida APC Q3–Q4 ga qaraganda ancha yuqori.
- Maqola hajmi: sahifa yoki so‘z limitidan oshsa, qo‘shimcha to‘lov chiqishi mumkin.
- Nashriyot siyosati: chegirmalar, mamlakat yoki yo‘nalish bo‘yicha tariflar farq qiladi.
- Qo‘shimcha xizmatlar: akademik tarjima, tahrir, formatlash — alohida hisoblanadi.

Aniq raqam mavzuingiz va tanlangan jurnalga qarab chiqadi: biz muallifga bir nechta variantni narxlari bilan ko‘rsatamiz.

## Bizning hamrohlik nimani o‘z ichiga oladi

- Mavzuga mos jurnallarni tanlash va ularning bazadagi holatini tekshirish.
- Maqolani jurnal talablariga moslashtirish bo‘yicha ko‘rsatma.
- Nashr jarayonini kuzatish va muharririyat bilan aloqa.
- Nashrdan so‘ng maqolaning DOI va indeksatsiyasini tekshirish.

## Shaffoflik qoidalari

To‘lovdan oldin aniq jadval so‘rang: qanday xizmat, qancha, qaysi bosqichda. Raqamlashtirilgan shartnoma yoki oferta asosida ishlaymiz; rekvizitlar /payment sahifasida ochiq berilgan. «Kafolatlangan Scopus nashr 3 kunda» degan da’volar va rasmiysiz shaxsiy karta to‘lovlari — xyunchchilik belgilaridir.
`,
    ru: `
## Что такое публикационный взнос

Большинство научных журналов работают по модели «автор платит»: после принятия статьи автор оплачивает взнос (APC — Article Processing Charge), покрывающий публикацию, редактирование, DOI и онлайн-распространение. Эта модель распространена в журналах открытого доступа (Open Access). Часть журналов публикует совершенно бесплатно — обычно это издания по подписке.

## От чего зависит цена

- Журнал и его квартиль: APC в журналах Q1 заметно выше, чем в Q3–Q4.
- Объём статьи: при превышении лимита страниц или слов возможна доплата.
- Политика издательства: скидки и тарифы различаются по странам и направлениям.
- Дополнительные услуги: академический перевод, редактура, вёрстка — считаются отдельно.

Точная сумма зависит от вашей темы и выбранного журнала: мы показываем автору несколько вариантов с ценами.

## Что включает наше сопровождение

- Подбор журналов под тему и проверка их статуса в базах.
- Рекомендации по приведению статьи к требованиям журнала.
- Отслеживание процесса публикации и коммуникация с редакцией.
- После публикации — проверка DOI и индексации статьи.

## Правила прозрачности

До оплаты запросите точную смету: какая услуга, сколько, на каком этапе. Мы работаем по договору или публичной оферте; реквизиты открыто опубликованы на странице /payment. Обещания «гарантированная публикация в Scopus за 3 дня» и оплата на личную карту без документов — признаки хищнических изданий.
`,
    en: `
## What a publication fee is

Most scholarly journals run on an \"author pays\" model: once a paper is accepted, the author pays an Article Processing Charge (APC) covering publication, editing, the DOI and online distribution. This model is common in Open Access journals. Some journals publish entirely for free — usually subscription-based titles.

## What drives the price

- The journal and its quartile: APC in Q1 journals is considerably higher than in Q3–Q4.
- Article length: exceeding page or word limits may incur extra charges.
- Publisher policy: discounts and rates vary by country and field.
- Additional services: academic translation, editing, formatting are priced separately.

The exact figure depends on your topic and the chosen journal: we show the author several options with prices.

## What our support includes

- Selecting journals matching your topic and checking their status in the databases.
- Recommendations on bringing the article up to the journal's requirements.
- Tracking the publication process and communicating with the editorial office.
- After publication — verifying the paper's DOI and indexing.

## Rules of transparency

Before paying, ask for an exact quote: which service, how much, at which stage. We work under a contract or a public offer; bank details are openly published on the /payment page. Promises of \"guaranteed Scopus publication in 3 days\" and payments to a personal card without documents are signs of predatory publishing.
`,
  },
};
