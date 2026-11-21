import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "journal-selection-guide",
  date: "2026-11-22",
  title: {
    uz: "Ilmiy maqola uchun jurnalni tanlash: qadam-baqadam yo‘l xaritasi",
    ru: "Как выбрать журнал для научной статьи: пошаговая дорожная карта",
    en: "How to choose a journal for a research paper: a step-by-step roadmap",
    tr: "Bilimsel makale için dergi seçimi: adım adım yol haritası",
  },
  description: {
    uz: "Ilmiy maqola uchun jurnalni tanlash algoritmi: soha va kvartil bo‘yicha filtr, OAK ro‘yxati, Scopus tekshiruvi, APC va muddatlar — UzAkademiya.uz bazasi bilan birga.",
    ru: "Алгоритм выбора журнала для научной статьи: фильтры по отрасли и квартилю, перечень ОАК, проверка Scopus, APC и сроки — вместе с базой UzAkademiya.uz.",
    en: "An algorithm for choosing a journal: filters by field and quartile, the OAK list, a Scopus check, APCs and timelines — together with the UzAkademiya.uz database.",
    tr: "Makale için dergi seçimi algoritması: alan ve kuartil filtreleri, OAK listesi, Scopus kontrolü, APC ve süreler — UzAkademiya.uz veri tabanıyla birlikte.",
  },
  body: {
    uz: `
## Nega jurnalni tanlash — birinchi qadam

Maqola tayyor bo‘lgach jurnal qidirish — eng ko‘p uchraydigan va qimmat xato: talablar mos kelmasa, maqolani qayta yozish talab qilinadi. To‘g‘ri tartib: mavzu → jurnal → yozish.

## 1-qadam: talabni aniqlang

PhD yoki DSc uchun nashr kerakmi? U holda OAK talablarini oching: [qancha ish va qancha maqola kerakligi](/uz/useful/oak-requirements-phd-dsc), qaysi bazalar qabul qilinadi ([Scopus yoki WoS — farqi](/uz/useful/scopus-vs-web-of-science)), ma’lum kvartil talab qilinadimi.

## 2-qadam: soha bo‘yicha katalogdan boshlang

[UzAkademiya.uz](https://uzakademiya.uz/ru) bazasida 800 dan ortiq VAK (OAK) jurnali va 60 dan ortiq Scopus jurnali fan tarmoqlari bo‘yicha jamlangan. Misollar:

- [Texnika fanlari (05.00.00) — 286 jurnal](https://uzakademiya.uz/ru/oak/05-00-00)
- [Pedagogika fanlari (13.00.00) — 34 jurnal](https://uzakademiya.uz/ru/oak/13-00-00)
- [Tibbiyot fanlari (14.00.00)](https://uzakademiya.uz/ru/oak/14-00-00)

Har bir jurnal sahifasida ISSN, indeksatsiya, nashriyot va metrikalar bor — [katalog asosiy sahifasidan](https://uzakademiya.uz/ru) qidiring.

## 3-qadam: ro‘yxatni 3–5 jurnalgacha qisqartiring

- Jurnalning ilmiy doirasi sizning mavzuingizga to‘g‘ri keladimi? (Ushbu jurnalda shu mavzuda maqolalar chop etilganmi?)
- Indeksatsiya va kvartil [talabingizga mosmi](/uz/useful/quartiles-citescore-sjr)?
- OAK ro‘yxatida bormi ([qanday tekshirish](/uz/useful/oak-journals-list))?
- Jurnal Scopus zamonaviy holatida bormi ([tekshirish bosqichlari](/uz/useful/check-journal-scopus))?

## 4-qadam: muddat va xarajatni solishtiring

Har bir jurnal sahifasida yoki «Mualliflar uchun qo‘llanma»da ko‘rib chiqish muddati va APC siyosati turadi. Nashr [to‘lovi nimaga bog‘liqligini](/uz/useful/publication-fee) va [butun jarayon qancha vaqt olishini](/uz/useful/publication-timeline) avval o‘qing. 3–5 jurnalni «birlamchi» va «zaxira» guruhlariga bo‘ling.

## 5-qadam: topshirishdan oldin yakuniy tekshiruv

- Jurnal xyunchchilik belgilarini bermayaptimi ([qanday ajratish](/uz/useful/predatory-journals))?
- Maqolangiz [IMRAD](/uz/useful/imrad-structure) tuzilishida va jurnal talablariga moslab tayyorlandimi?

## Yordam kerakmi?

Biz mavzuingizga mos jurnallarni [UzAkademiya.uz](https://uzakademiya.uz/ru) va Scopus bo‘yicha tanlaymiz, tekshiramiz va nashrgacha hamroh bo‘lamiz. [Ariza qoldiring](/uz/contact) — konsultatsiya bepul.
`,
    ru: `
## Почему выбор журнала — первый шаг

Искать журнал, когда статья уже готова, — самая частая и самая дорогая ошибка: при несовпадении требований статью приходится переписывать. Правильный порядок: тема → журнал → написание.

## Шаг 1: определите требование

Публикация нужна для PhD или DSc? Тогда откройте требования ОАК: [сколько работ и статей нужно](/ru/useful/oak-requirements-phd-dsc), какие базы принимаются ([разница Scopus и WoS](/ru/useful/scopus-vs-web-of-science)), требуется ли определённый квартиль.

## Шаг 2: начните с каталога по отрасли

В базе [UzAkademiya.uz](https://uzakademiya.uz/ru) собраны более 800 журналов ВАК (ОАК) и 60+ журналов Scopus, сгруппированные по отраслям. Примеры:

- [Технические науки (05.00.00) — 286 журналов](https://uzakademiya.uz/ru/oak/05-00-00)
- [Педагогические науки (13.00.00) — 34 журнала](https://uzakademiya.uz/ru/oak/13-00-00)
- [Медицинские науки (14.00.00)](https://uzakademiya.uz/ru/oak/14-00-00)

У каждого журнала — ISSN, индексация, издатель и метрики; поиск — с [главной страницы каталога](https://uzakademiya.uz/ru).

## Шаг 3: сократите список до 3–5 журналов

- Совпадает ли научная направленность журнала с вашей темой? (Публикуются ли там похожие работы?)
- Соответствуют ли индексация и квартиль [вашим требованиям](/ru/useful/quartiles-citescore-sjr)?
- Есть ли журнал в перечне ОАК ([как проверить](/ru/useful/oak-journals-list))?
- Есть ли журнал в актуальном состоянии Scopus ([шаги проверки](/ru/useful/check-journal-scopus))?

## Шаг 4: сравните сроки и стоимость

У каждого журнала на странице или в «Руководстве для авторов» указаны сроки рецензирования и APC-политика. Заранее изучите, [от чего зависит публикационный взнос](/ru/useful/publication-fee) и [сколько занимает весь процесс](/ru/useful/publication-timeline). Разделите 3–5 журналов на «основные» и «запасные».

## Шаг 5: финальная проверка перед подачей

- Не подаёт ли журнал хищнических признаков ([как отличить](/ru/useful/predatory-journals))?
- Приведена ли статья к [структуре IMRAD](/ru/useful/imrad-structure) и требованиям журнала?

## Нужна помощь?

Мы подбираем журналы под вашу тему по [UzAkademiya.uz](https://uzakademiya.uz/ru) и Scopus, проверяем их и сопровождаем до публикации. [Оставьте заявку](/ru/contact) — консультация бесплатна.
`,
    en: `
## Why journal selection comes first

Searching for a journal after the paper is written is the most common and most expensive mistake: if the requirements do not match, the paper has to be rewritten. The right order is: topic → journal → writing.

## Step 1: establish the requirement

Is the publication needed for a PhD or DSc? Then open the OAK requirements: [how many works and articles are needed](/en/useful/oak-requirements-phd-dsc), which databases are accepted ([Scopus vs WoS](/en/useful/scopus-vs-web-of-science)), and whether a specific quartile is required.

## Step 2: start with a field catalogue

The [UzAkademiya.uz](https://uzakademiya.uz/ru) database brings together 800+ VAK (OAK) journals and 60+ Scopus titles grouped by field. Examples:

- [Engineering (05.00.00) — 286 journals](https://uzakademiya.uz/ru/oak/05-00-00)
- [Pedagogy (13.00.00) — 34 journals](https://uzakademiya.uz/ru/oak/13-00-00)
- [Medical sciences (14.00.00)](https://uzakademiya.uz/ru/oak/14-00-00)

Every journal page shows ISSN, indexing, publisher and metrics; search starts from the [catalogue home page](https://uzakademiya.uz/ru).

## Step 3: narrow the list to 3–5 journals

- Does the journal's scope match your topic? (Do they publish similar papers?)
- Do the indexing and quartile meet [your requirements](/en/useful/quartiles-citescore-sjr)?
- Is it on the OAK list ([how to verify](/en/useful/oak-journals-list))?
- Is it in good standing in Scopus ([verification steps](/en/useful/check-journal-scopus))?

## Step 4: compare timelines and costs

Each journal's page or author guidelines state the review times and APC policy. Read in advance [what drives the publication fee](/en/useful/publication-fee) and [how long the whole process takes](/en/useful/publication-timeline). Split your 3–5 journals into "primary" and "backup" groups.

## Step 5: a final check before submission

- Does the journal show predatory signs ([how to tell](/en/useful/predatory-journals))?
- Is your paper aligned with the [IMRAD structure](/en/useful/imrad-structure) and the journal's requirements?

## Need help?

We match journals to your topic via [UzAkademiya.uz](https://uzakademiya.uz/ru) and Scopus, verify them and accompany you through publication. [Submit a request](/en/contact) — the consultation is free.
`,
    tr: `
## Neden dergi seçimi ilk adım

Makale hazırlandıktan sonra dergi aramak, en sık yapılan ve en pahalı hatadır: gereksinimler uyuşmazsa makaleyi yeniden yazmak gerekir. Doğru sıra: konu → dergi → yazım.

## Adım 1: gereksinimi belirleyin

Yayın PhD veya DSc için mi gerekli? O zaman OAK gereksinimlerini açın: [kaç çalışma ve makale gerektiği](/tr/useful/oak-requirements-phd-dsc), hangi veri tabanlarının kabul edildiği ([Scopus ve WoS farkı](/tr/useful/scopus-vs-web-of-science)), belirli bir kuartil istenip istenmediği.

## Adım 2: alan kataloğundan başlayın

[UzAkademiya.uz](https://uzakademiya.uz/ru) veri tabanında 800'den fazla VAK (OAK) dergisi ve 60'tan fazla Scopus dergisi alanlara göre toplanmıştır. Örnekler:

- [Mühendislik bilimleri (05.00.00) — 286 dergi](https://uzakademiya.uz/ru/oak/05-00-00)
- [Pedagoji bilimleri (13.00.00) — 34 dergi](https://uzakademiya.uz/ru/oak/13-00-00)
- [Tıp bilimleri (14.00.00)](https://uzakademiya.uz/ru/oak/14-00-00)

Her dergi sayfasında ISSN, indeksleme, yayıncı ve metrikler bulunur; arama [katalog ana sayfasından](https://uzakademiya.uz/ru) başlar.

## Adım 3: listeyi 3–5 dergiye indirin

- Derginin bilimsel kapsamı konunuza uyuyor mu? (Benzer makaleler yayınlıyor mu?)
- İndeksleme ve kuartil [gereksinimlerinize](/tr/useful/quartiles-citescore-sjr) uygun mu?
- OAK listesinde mi ([nasıl kontrol edilir](/tr/useful/oak-journals-list))?
- Scopus'ta güncel durumda mı ([kontrol adımları](/tr/useful/check-journal-scopus))?

## Adım 4: süreleri ve maliyetleri karşılaştırın

Her derginin sayfasında veya "Yazarlar için kılavuz"unda değerlendirme süreleri ve APC politikası yazar. Önceden [yayın ücretinin neye bağlı olduğunu](/tr/useful/publication-fee) ve [tüm sürecin ne kadar sürdüğünü](/tr/useful/publication-timeline) okuyun. 3–5 dergiyi "birincil" ve "yedek" gruplarına ayırın.

## Adım 5: göndermeden önce son kontrol

- Dergi predatory işaretleri taşıyor mu ([nasıl anlaşılır](/tr/useful/predatory-journals))?
- Makaleniz [IMRAD yapısına](/tr/useful/imrad-structure) ve dergi gereksinimlerine uygun hale getirildi mi?

## Destek ister misiniz?

Konunuza uygun dergileri [UzAkademiya.uz](https://uzakademiya.uz/ru) ve Scopus üzerinden seçiyor, kontrol ediyor ve yayına kadar birlikte ilerliyoruz. [Talep bırakın](/tr/contact) — danışmanlık ücretsizdir.
`,
  },
};
