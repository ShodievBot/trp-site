import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "predatory-journals",
  date: "2026-11-10",
  title: {
    uz: "Yirtqich jurnallar: qanday aniqlash va pulni yo‘qotmaslik",
    ru: "Хищные журналы: как распознать и не потерять деньги",
    en: "Predatory journals: how to spot them and not lose money",
  },
  description: {
    uz: "Soxta va yirtqich jurnallarning belgilari, jurnalni tekshirish tartibi va maqolani xavfsiz nashr etish bo‘yicha amaliy maslahatlar.",
    ru: "Признаки хищных и поддельных журналов, порядок проверки издания и практические советы, как безопасно опубликовать статью.",
    en: "Warning signs of predatory and hijacked journals, a step-by-step check and practical advice on publishing safely.",
  },
  body: {
    uz: `
## Yirtqich jurnal nima

Yirtqich jurnal — bu muallifdan to‘lov olib, haqiqiy taqrizsiz istalgan matnni chop etadigan nashr. Bunday jurnalda chiqqan maqola ilmiy daraja uchun hisobga olinmasligi, Scopus yoki Web of Science bazasiga tushmasligi mumkin. Natijada tadqiqotchi ham pulini, ham maqolasini yo‘qotadi, chunki bir marta chop etilgan ishni boshqa jurnalga topshirib bo‘lmaydi.

## Asosiy belgilar

- “3–5 kunda nashr” va’dasi. Haqiqiy taqriz odatda haftalar yoki oylar davom etadi.
- Elektron pochtaga keladigan taklifnomalar: “Hurmatli professor, maqolangizni kutamiz”.
- Jurnal mavzusi juda keng: tibbiyot, iqtisodiyot va filologiya bitta sonda.
- Tahririyat a’zolari haqida ma’lumot yo‘q yoki olimlar o‘zlari bu jurnal haqida bilmaydi.
- Sayt manzili taniqli jurnal nomiga juda o‘xshash, lekin bir harf bilan farq qiladi. Bu “o‘g‘irlangan jurnal” (hijacked journal) belgisi.
- To‘lov shaxsiy kartaga yoki noaniq hisob raqamiga so‘raladi, shartnoma berilmaydi.

## Jurnalni qanday tekshirish kerak

- Scopus manbalar ro‘yxatida (scopus.com/sources) jurnal nomi va ISSN bo‘yicha qidiring. Jurnal “discontinued” bo‘lmaganiga e’tibor bering.
- ISSN portalida (portal.issn.org) jurnalning rasmiy nomi va nashriyotini solishtiring.
- Jurnalning rasmiy saytini aynan Scopus yoki nashriyot sahifasidagi havola orqali oching, qidiruv tizimidagi reklama orqali emas.
- So‘nggi sonlardagi maqolalarni ko‘ring: ular mavzuga mosmi, sifati qanday.
- Ochiq kirishdagi jurnallar uchun DOAJ katalogini tekshiring.

## To‘lov har doim ham yomon belgi emas

Ko‘plab nufuzli ochiq kirish jurnallari maqolani qayta ishlash to‘lovini (APC) oladi. Farqi shundaki, halol jurnal to‘lovni maqola taqrizdan o‘tib, qabul qilinganidan keyin so‘raydi va narxlar saytda ochiq ko‘rsatilgan bo‘ladi.

## Xulosa

Maqolani topshirishdan oldin jurnalni tekshirishga 20 daqiqa sarflash oylar davomidagi mehnatni saqlab qoladi. Shubha bo‘lsa, jurnal tanlashda mutaxassis bilan maslahatlashing va har doim rasmiy shartnoma talab qiling.
`,
    ru: `
## Что такое хищный журнал

Хищный журнал берёт с автора деньги и публикует любой текст без настоящего рецензирования. Статья в таком издании может не засчитаться для учёной степени и не попасть в Scopus или Web of Science. В итоге исследователь теряет и деньги, и саму статью: уже опубликованную работу нельзя подать в другой журнал.

## Главные признаки

- Обещание «публикация за 3–5 дней». Настоящее рецензирование занимает недели или месяцы.
- Навязчивые письма на почту: «Уважаемый профессор, ждём вашу статью».
- Слишком широкая тематика: медицина, экономика и филология в одном номере.
- Нет сведений о редколлегии, или учёные из списка сами не знают об этом журнале.
- Адрес сайта очень похож на известный журнал, но отличается одной буквой. Это признак журнала-клона (hijacked journal).
- Оплату просят на личную карту или непонятный счёт, договор не дают.

## Как проверить журнал

- Найдите журнал по названию и ISSN в списке источников Scopus (scopus.com/sources). Убедитесь, что он не помечен как discontinued, то есть исключённый.
- Сверьте официальное название и издателя на портале ISSN (portal.issn.org).
- Открывайте сайт журнала по ссылке со страницы Scopus или издательства, а не из рекламы в поиске.
- Посмотрите статьи последних номеров: соответствуют ли они тематике и какого они качества.
- Для журналов открытого доступа проверьте каталог DOAJ.

## Плата за публикацию не всегда плохой знак

Многие авторитетные журналы открытого доступа берут плату за обработку статьи (APC). Разница в том, что добросовестный журнал просит оплату после рецензирования и принятия статьи, а цены открыто указаны на сайте.

## Вывод

Двадцать минут на проверку журнала до подачи экономят месяцы работы. Если есть сомнения, посоветуйтесь со специалистом по подбору журнала и всегда требуйте официальный договор.
`,
    en: `
## What a predatory journal is

A predatory journal charges authors and publishes almost anything without genuine peer review. A paper in such a journal may not count towards a degree and may never appear in Scopus or Web of Science. The researcher loses both the money and the paper, because published work cannot be submitted elsewhere.

## Main warning signs

- A promise of publication in 3–5 days. Real peer review takes weeks or months.
- Unsolicited emails: "Dear Professor, we are waiting for your manuscript".
- An extremely broad scope: medicine, economics and philology in one issue.
- No information about the editorial board, or the listed scholars have never heard of the journal.
- A web address that looks like a well-known journal but differs by one letter. That is the mark of a hijacked journal.
- Payment requested to a personal card or an unclear account, with no contract.

## How to check a journal

- Search by title and ISSN in the Scopus source list (scopus.com/sources) and make sure the journal is not marked as discontinued.
- Compare the official title and publisher on the ISSN portal (portal.issn.org).
- Open the journal site through the link on the Scopus or publisher page, not through a search advert.
- Read papers from recent issues: do they match the scope, and how good are they?
- For open access journals, check the DOAJ directory.

## A fee is not always a bad sign

Many respected open access journals charge an article processing charge (APC). The difference is that an honest journal asks for payment after the paper has been reviewed and accepted, and its prices are published openly.

## Takeaway

Twenty minutes spent checking a journal before submission can save months of work. If in doubt, ask a specialist to help with journal selection and always insist on a formal contract.
`,
  },
};
