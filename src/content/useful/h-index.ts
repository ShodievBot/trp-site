import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "h-index",
  date: "2026-11-10",
  title: {
    uz: "Xirsh indeksi (h-indeks): bu nima, qanday hisoblanadi va qanday oshiriladi",
    ru: "Индекс Хирша: что это, как посчитать и как повысить",
    en: "The h-index: what it is, how to calculate it and how to raise it",
  },
  description: {
    uz: "Xirsh indeksi oddiy misolda: qanday hisoblanadi, Scopus va Google Scholar’da nega farq qiladi va uni halol yo‘l bilan qanday oshirish mumkin.",
    ru: "Индекс Хирша на простом примере: как считается, почему отличается в Scopus и Google Scholar и как повысить его честными способами.",
    en: "The h-index with a simple example: how it is calculated, why it differs between Scopus and Google Scholar and how to raise it honestly.",
  },
  body: {
    uz: `
## Ta’rifi

Xirsh indeksi (h-indeks) olimning nashr faolligi va iqtiboslanishini bitta raqamda ko‘rsatadi. Olimning h-indeksi h ga teng, agar uning h ta maqolasining har biriga kamida h martadan iqtibos keltirilgan bo‘lsa.

## Oddiy misol

Aytaylik, sizda 6 ta maqola bor va ularga 15, 9, 5, 4, 2 va 0 marta iqtibos keltirilgan. Maqolalarni iqtiboslar soni bo‘yicha kamayish tartibida joylashtiramiz. To‘rtinchi maqolada 4 ta iqtibos bor, beshinchisida esa atigi 2 ta. Demak, h-indeks 4 ga teng: kamida 4 marta iqtibos olingan 4 ta maqola mavjud.

## Qayerdan ko‘rish mumkin

- Scopus: muallif profilida, faqat Scopus’da indekslangan nashrlar bo‘yicha.
- Web of Science: o‘z bazasidagi nashrlar bo‘yicha.
- Google Scholar: eng keng qamrov, shu jumladan kitoblar, tezislar va mahalliy jurnallar.

Shu sababli Google Scholar’dagi ko‘rsatkich odatda Scopus’dagidan yuqori bo‘ladi. Hisobot yoki hujjatda har doim manbani ko‘rsating: “Scopus bo‘yicha h-indeks”.

## Cheklovlari

H-indeks ilmiy staj bilan birga o‘sadi, shuning uchun yosh olimlarda past bo‘ladi. Turli fanlarda iqtibos keltirish odatlari farq qiladi, demak fizik va filologni bu raqam bo‘yicha solishtirish noto‘g‘ri. Bitta juda mashhur maqola ham indeksni keskin oshirmaydi.

## Halol oshirish yo‘llari

- O‘z sohangizdagi olimlar o‘qiydigan, indekslanadigan jurnallarda chop eting.
- Aniq sarlavha, mazmunli annotatsiya va to‘g‘ri kalit so‘zlar yozing: maqolani topish oson bo‘lsin.
- Imkon bo‘lsa, ochiq kirishda nashr eting yoki ruxsat etilgan nusxani repozitoriyga joylang.
- Xalqaro hammualliflar bilan ishlang va konferensiyalarda ma’ruza qiling.
- ORCID, Scopus va Google Scholar profillarini tartibda saqlang, barcha maqolalar sizga bog‘langan bo‘lsin.
- Sharh maqolalar yozing: ularga ko‘proq havola qilinadi.

## Nimalardan qochish kerak

O‘zaro iqtibos keltirish bo‘yicha kelishuvlar, sun’iy ravishda o‘z ishlariga ko‘p havola berish va “iqtibos sotib olish” — qoidabuzarlik. Scopus bunday holatlarni aniqlaydi, jurnallar bazadan chiqariladi va muallif obro‘siga putur yetadi.
`,
    ru: `
## Определение

Индекс Хирша (h-индекс) одним числом показывает публикационную активность и цитируемость учёного. Индекс равен h, если у учёного есть h статей, каждая из которых процитирована не менее h раз.

## Простой пример

Допустим, у вас 6 статей, и их цитировали 15, 9, 5, 4, 2 и 0 раз. Расположим статьи по убыванию числа цитирований. У четвёртой статьи 4 цитирования, а у пятой только 2. Значит, индекс Хирша равен 4: есть 4 статьи, каждую из которых процитировали минимум 4 раза.

## Где посмотреть

- Scopus: в профиле автора, только по публикациям, проиндексированным в Scopus.
- Web of Science: по публикациям своей базы.
- Google Scholar: самый широкий охват, включая книги, тезисы и местные журналы.

Поэтому показатель в Google Scholar обычно выше, чем в Scopus. В отчётах и документах всегда указывайте источник: «индекс Хирша по Scopus».

## Ограничения

Индекс растёт вместе с научным стажем, поэтому у молодых учёных он низкий. В разных науках разные традиции цитирования, и сравнивать физика с филологом по этому числу некорректно. Одна очень известная статья тоже не поднимает индекс резко.

## Как повысить честно

- Публикуйтесь в индексируемых журналах, которые читают учёные вашей области.
- Пишите точный заголовок, содержательную аннотацию и правильные ключевые слова, чтобы статью было легко найти.
- По возможности публикуйте в открытом доступе или размещайте разрешённую версию в репозитории.
- Работайте с зарубежными соавторами и выступайте на конференциях.
- Держите в порядке профили ORCID, Scopus и Google Scholar, чтобы все статьи были привязаны к вам.
- Пишите обзорные статьи: на них ссылаются чаще.

## Чего избегать

Договорённости о взаимном цитировании, искусственное самоцитирование и «покупка цитирований» — нарушения. Scopus выявляет такие случаи, журналы исключают из базы, а репутация автора страдает.
`,
    en: `
## Definition

The h-index sums up a researcher's output and citation impact in one number. A researcher has an index of h if h of their papers have each been cited at least h times.

## A simple example

Suppose you have 6 papers cited 15, 9, 5, 4, 2 and 0 times. Rank them by citations in descending order. The fourth paper has 4 citations, the fifth only 2. Your h-index is therefore 4: you have 4 papers with at least 4 citations each.

## Where to find it

- Scopus: on the author profile, counting only Scopus-indexed publications.
- Web of Science: counting publications in its own database.
- Google Scholar: the widest coverage, including books, conference abstracts and local journals.

This is why the Google Scholar figure is usually higher than the Scopus one. In reports and documents always name the source: "h-index in Scopus".

## Limitations

The h-index grows with career length, so early-career researchers have low values. Citation habits differ between disciplines, so comparing a physicist with a philologist on this number is misleading. One very famous paper does not raise the index sharply either.

## Honest ways to raise it

- Publish in indexed journals that researchers in your field actually read.
- Write a precise title, an informative abstract and the right keywords so the paper is easy to find.
- Where possible, publish open access or deposit a permitted version in a repository.
- Work with international co-authors and present at conferences.
- Keep your ORCID, Scopus and Google Scholar profiles tidy so every paper is linked to you.
- Write review articles: they attract more citations.

## What to avoid

Citation-exchange agreements, artificial self-citation and "buying citations" are misconduct. Scopus detects such patterns, journals get removed from the database and the author's reputation suffers.
`,
  },
};
