import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "references-apa-gost",
  date: "2026-11-10",
  title: {
    uz: "Adabiyotlar ro‘yxatini rasmiylashtirish: APA, GOST va jurnal talablari",
    ru: "Оформление списка литературы: APA, ГОСТ и требования журналов",
    en: "Formatting a reference list: APA, GOST and journal requirements",
  },
  description: {
    uz: "Adabiyotlar ro‘yxatini APA va GOST uslubida rasmiylashtirish, matn ichidagi havolalar, DOI ko‘rsatish va Mendeley, Zotero kabi dasturlardan foydalanish.",
    ru: "Как оформить список литературы по APA и ГОСТ, ссылки в тексте, указание DOI и работа с менеджерами ссылок Mendeley и Zotero.",
    en: "How to format references in APA and GOST style, in-text citations, DOIs and reference managers such as Mendeley and Zotero.",
  },
  body: {
    uz: `
## Nega bu muhim

Noto‘g‘ri rasmiylashtirilgan adabiyotlar ro‘yxati — maqolani texnik sabab bilan qaytarishning eng ko‘p uchraydigan sabablaridan biri. Bundan tashqari, Scopus iqtiboslarni aynan ro‘yxatdagi yozuvlar bo‘yicha hisoblaydi: xato yozilgan manba iqtibos sifatida tan olinmasligi mumkin.

## APA uslubi

APA xalqaro jurnallarda eng keng tarqalgan uslublardan biri. Matnda muallif va yil ko‘rsatiladi: (Karimov, 2024). Ro‘yxat alifbo tartibida tuziladi. Jurnal maqolasi namunasi:

Karimov, A. B., & Aliyeva, N. S. (2024). Maqola sarlavhasi. Jurnal nomi, 12(3), 45–58. https://doi.org/10.xxxx/xxxxx

## GOST

MDH mamlakatlari jurnallari va dissertatsiyalarda ko‘pincha GOST standartlari qo‘llanadi. Ularda manbalar odatda matnda kvadrat qavsdagi raqam bilan ko‘rsatiladi: [5, 12-b.], ro‘yxatda esa muallif, sarlavha, nashr joyi, nashriyot, yil va betlar beriladi. GOSTning bir nechta tahriri mavjud, shuning uchun tashkilotingiz qaysi birini talab qilishini aniqlang.

## Jurnal talabi hamma narsadan ustun

Har bir jurnal o‘z uslubini belgilaydi: APA, Vancouver, Harvard, IEEE yoki o‘z varianti. Mualliflar uchun qo‘llanmani oching va so‘nggi sondagi maqoladan namuna oling.

## Amaliy maslahatlar

- Har bir manbaga DOI mavjud bo‘lsa, uni ko‘rsating.
- Kirill yozuvidagi manbalar uchun ko‘p xalqaro jurnallar transliteratsiya va inglizcha tarjimani so‘raydi.
- Matndagi har bir havola ro‘yxatda bo‘lishi va aksincha, ro‘yxatdagi har bir manba matnda eslatilishi kerak.
- So‘nggi 5 yildagi manbalar va nufuzli jurnallar ulushiga e’tibor bering.
- O‘z ishlaringizga haddan tashqari ko‘p havola bermang.

## Dasturlar

Mendeley, Zotero va EndNote manbalarni saqlaydi va ro‘yxatni kerakli uslubda avtomatik shakllantiradi. Uslubni bir tugma bilan almashtirish mumkin, bu maqolani boshqa jurnalga qayta topshirganda ko‘p vaqtni tejaydi.
`,
    ru: `
## Почему это важно

Неправильно оформленный список литературы — одна из самых частых причин технического возврата статьи. Кроме того, Scopus считает цитирования именно по записям списка: источник с ошибкой может не засчитаться.

## Стиль APA

APA — один из самых распространённых стилей в международных журналах. В тексте указывают автора и год: (Karimov, 2024). Список строится по алфавиту. Пример статьи из журнала:

Karimov, A. B., & Aliyeva, N. S. (2024). Название статьи. Название журнала, 12(3), 45–58. https://doi.org/10.xxxx/xxxxx

## ГОСТ

В журналах стран СНГ и в диссертациях чаще применяют стандарты ГОСТ. В них источники обычно обозначают в тексте номером в квадратных скобках: [5, с. 12], а в списке указывают автора, заглавие, место издания, издательство, год и страницы. У ГОСТа несколько редакций, поэтому уточните, какую требует ваша организация.

## Требование журнала важнее всего

Каждый журнал задаёт свой стиль: APA, Vancouver, Harvard, IEEE или собственный вариант. Откройте руководство для авторов и возьмите образец из статьи последнего номера.

## Практические советы

- Указывайте DOI у каждого источника, у которого он есть.
- Для источников на кириллице многие международные журналы просят транслитерацию и перевод на английский.
- Каждая ссылка в тексте должна быть в списке, и каждый источник из списка должен упоминаться в тексте.
- Следите за долей источников за последние 5 лет и статей из авторитетных журналов.
- Не злоупотребляйте ссылками на собственные работы.

## Программы

Mendeley, Zotero и EndNote хранят источники и автоматически формируют список в нужном стиле. Стиль меняется одной кнопкой, и это экономит много времени при повторной подаче в другой журнал.
`,
    en: `
## Why it matters

A badly formatted reference list is one of the most common reasons for a technical return. Scopus also counts citations from the entries in that list, so a reference with errors may not be matched.

## APA style

APA is one of the most widely used styles in international journals. In the text you give author and year: (Karimov, 2024). The list is alphabetical. A journal article looks like this:

Karimov, A. B., & Aliyeva, N. S. (2024). Article title. Journal Title, 12(3), 45–58. https://doi.org/10.xxxx/xxxxx

## GOST

Journals in CIS countries and dissertations often follow GOST standards. Sources are usually cited in the text by a number in square brackets, such as [5, p. 12], and the list gives author, title, place, publisher, year and pages. GOST exists in several editions, so check which one your institution requires.

## The journal's rules come first

Each journal sets its own style: APA, Vancouver, Harvard, IEEE or a house variant. Open the author guidelines and copy the pattern from a paper in the latest issue.

## Practical tips

- Give a DOI for every source that has one.
- For sources in Cyrillic, many international journals ask for transliteration and an English translation.
- Every citation in the text must appear in the list, and every listed source must be cited.
- Watch the share of sources from the last five years and from reputable journals.
- Do not overuse self-citation.

## Tools

Mendeley, Zotero and EndNote store your sources and build the list in the required style automatically. Switching styles takes one click, which saves a lot of time when you resubmit to another journal.
`,
  },
};
