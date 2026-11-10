import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "plagiarism-originality",
  date: "2026-11-10",
  title: {
    uz: "Antiplagiat: originallik foizi va uni halol oshirish yo‘llari",
    ru: "Антиплагиат: процент оригинальности и как повысить его честно",
    en: "Plagiarism checks: similarity scores and how to improve originality honestly",
  },
  description: {
    uz: "Antiplagiat tizimlari qanday ishlaydi, o‘xshashlik foizi nimani anglatadi, o‘z-o‘zidan plagiat nima va matn originalligini to‘g‘ri oshirish usullari.",
    ru: "Как работают системы антиплагиата, что означает процент совпадений, что такое самоплагиат и как правильно повысить оригинальность текста.",
    en: "How plagiarism detection works, what a similarity score means, what self-plagiarism is and how to raise originality the right way.",
  },
  body: {
    uz: `
## Tizimlar qanday ishlaydi

Antiplagiat tizimlari matningizni internetdagi sahifalar, jurnal maqolalari va dissertatsiyalar bazasi bilan solishtiradi va mos kelgan parchalarni belgilaydi. Xalqaro jurnallar ko‘pincha iThenticate (Crossref Similarity Check) dan, universitetlar esa Turnitin, Antiplagiat va shunga o‘xshash tizimlardan foydalanadi. Turli tizimlar turli bazalarga ega, shuning uchun bitta matn bo‘yicha natija farq qiladi.

## Foiz nimani anglatadi

Hisobotdagi raqam — bu plagiat emas, balki o‘xshashlik ulushi. Unga to‘g‘ri rasmiylashtirilgan iqtiboslar, adabiyotlar ro‘yxati, umumiy atamalar va standart iboralar ham kiradi. Shuning uchun muharrir faqat umumiy foizga emas, balki bitta manbadan qancha matn olinganiga va qaysi bo‘limda ekaniga qaraydi.

## Qancha foiz ruxsat etiladi

Yagona me’yor yo‘q. Har bir jurnal, universitet va ilmiy kengash o‘z chegarasini belgilaydi, bu talablar vaqt o‘tishi bilan o‘zgaradi. Aniq raqamni jurnalning mualliflar uchun qo‘llanmasidan yoki tashkilotingizning amaldagi nizomidan oling.

## O‘z-o‘zidan plagiat

Avval chop etilgan o‘z matningizni havolasiz qayta ishlatish ham qoidabuzarlik hisoblanadi. Bitta maqolani ikki jurnalga topshirish yoki eski maqoladan katta parchalarni ko‘chirish mumkin emas. O‘z ishingizga ham boshqa manbalar kabi havola bering.

## Originallikni qanday oshirish kerak

- Manbani o‘qing, yoping va fikrni o‘z so‘zlaringiz bilan yozing, so‘ng havola qo‘ying.
- So‘zma-so‘z olingan jumlalarni qo‘shtirnoqqa oling va manbasini ko‘rsating.
- Adabiyotlar sharhida matnlarni qayta hikoya qilmang, ularni solishtiring va tahlil qiling.
- O‘z ma’lumotlaringiz, jadvallaringiz va xulosalaringiz ulushini ko‘paytiring.
- Topshirishdan oldin matnni tekshirib, belgilangan parchalarni qayta ishlang.

## Nima qilmaslik kerak

Harflarni almashtirish, ko‘rinmas belgilar qo‘shish yoki matnni avtomatik “sinonimlashtirish” kabi usullar zamonaviy tizimlar tomonidan aniqlanadi va maqolaning rad etilishiga, ba’zan esa muallifning qora ro‘yxatga tushishiga olib keladi. Sun’iy intellekt yordamida yozilgan matnlar bo‘yicha ham jurnallar o‘z qoidalarini joriy qilmoqda: ularni oldindan o‘qing.
`,
    ru: `
## Как работают системы

Системы антиплагиата сравнивают ваш текст с базой интернет-страниц, журнальных статей и диссертаций и отмечают совпавшие фрагменты. Международные журналы чаще используют iThenticate (Crossref Similarity Check), университеты — Turnitin, «Антиплагиат» и похожие системы. Базы у систем разные, поэтому результат по одному тексту отличается.

## Что означает процент

Цифра в отчёте — это не плагиат, а доля совпадений. В неё попадают и правильно оформленные цитаты, и список литературы, и общие термины, и стандартные обороты. Поэтому редактор смотрит не только на общий процент, а на то, сколько текста взято из одного источника и в каком разделе.

## Какой процент допустим

Единой нормы нет. Каждый журнал, университет и учёный совет устанавливает свой порог, и эти требования со временем меняются. Точную цифру берите из руководства для авторов журнала или из действующего положения вашей организации.

## Самоплагиат

Повторное использование своего опубликованного текста без ссылки тоже считается нарушением. Нельзя подавать одну статью в два журнала или переносить большие куски из прежней работы. На свои публикации ссылайтесь так же, как на чужие.

## Как повысить оригинальность

- Прочитайте источник, закройте его и изложите мысль своими словами, затем поставьте ссылку.
- Дословные фразы берите в кавычки и указывайте источник.
- В обзоре литературы не пересказывайте тексты, а сравнивайте и анализируйте их.
- Увеличивайте долю собственных данных, таблиц и выводов.
- Проверьте текст до подачи и переработайте отмеченные фрагменты.

## Чего делать нельзя

Замена букв, невидимые символы и автоматическая «синонимизация» распознаются современными системами и ведут к отказу, а иногда и к попаданию автора в чёрный список. Для текстов, написанных с помощью ИИ, журналы тоже вводят свои правила: прочитайте их заранее.
`,
    en: `
## How the systems work

Plagiarism detection tools compare your text with a database of web pages, journal articles and theses, and mark the matching passages. International journals mostly use iThenticate (Crossref Similarity Check); universities use Turnitin and similar systems. Their databases differ, so the same text gets different scores.

## What the percentage means

The number in the report is a similarity score, not a verdict of plagiarism. It includes properly quoted passages, the reference list, common terms and standard phrases. Editors therefore look beyond the total at how much text comes from a single source and in which section.

## What score is acceptable

There is no single standard. Each journal, university and academic council sets its own threshold, and these rules change over time. Take the exact figure from the journal's author guidelines or your institution's current regulations.

## Self-plagiarism

Reusing your own published text without citation is also misconduct. You cannot submit one paper to two journals or copy large passages from an earlier article. Cite your own work the way you cite anyone else's.

## How to improve originality

- Read the source, close it, write the idea in your own words and then cite it.
- Put verbatim sentences in quotation marks with a reference.
- In a literature review, compare and analyse sources instead of retelling them.
- Increase the share of your own data, tables and conclusions.
- Check the text before submission and rework the flagged passages.

## What not to do

Swapping letters, inserting invisible characters or running text through automatic paraphrasers is detected by modern systems and leads to rejection, sometimes to blacklisting. Journals are also introducing rules on AI-generated text: read them in advance.
`,
  },
};
