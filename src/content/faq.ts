// Popular questions, in the words people actually search for
// («scopus maqola chop etish narxi», «OAK jurnallari», «nashr qancha vaqt oladi»...).
// Rendered by FaqSection (services page) with FAQPage JSON-LD.
import type { LocaleMap } from "@/lib/i18n";

export type FaqItem = { q: LocaleMap<string>; a: LocaleMap<string> };

export const faqItems: FaqItem[] = [
  {
    q: {
      uz: "Scopus nima va nima uchun muhim?",
      ru: "Что такое Scopus и почему он важен?",
      en: "What is Scopus and why does it matter?",
    },
    a: {
      uz: "Scopus — Elsevier kompaniyasi yuritadigan yirik xalqaro ilmiy nashrlar bazasi. O‘zbekistonda PhD va DSc dissertatsiyasi himoyasi uchun Scopus yoki Web of Science bazasidagi jurnallarda chop etilgan maqola talab qilinadi, shuning uchun bu bazadagi nashr ilmiy martabada asosiy qadam hisoblanadi.",
      ru: "Scopus — крупнейшая международная база научных публикаций, которую ведёт компания Elsevier. В Узбекистане для защиты диссертаций PhD и DSc требуется статья в журнале из баз Scopus или Web of Science, поэтому публикация там — ключевой шаг научной карьеры.",
      en: "Scopus is the largest international bibliographic database maintained by Elsevier. In Uzbekistan, PhD and DSc dissertations require a paper published in a Scopus or Web of Science journal, which makes such a publication a key step in an academic career.",
    },
  },
  {
    q: {
      uz: "Scopus jurnalida maqola chop etish qancha turadi?",
      ru: "Сколько стоит публикация статьи в журнале Scopus?",
      en: "How much does it cost to publish a paper in a Scopus journal?",
    },
    a: {
      uz: "Yagona narx yo‘q: to‘lov jurnal, uning kvartili (Q1–Q4), maqola hajmi va nashriyotning APC siyosatiga bog‘liq. Mutaxassislarimiz mavzuingizni o‘rgab, mos jurnallar tanlaydi va aniq narxni shundan keyin aytadi. Boshlang‘ich konsultatsiya bepul — Telegram orqali yozing.",
      ru: "Единой цены нет: стоимость зависит от выбранного журнала, его квартиля (Q1–Q4), объёма статьи и APC-политики издательства. Наши специалисты подбирают подходящие журналы под вашу тему и только после этого называют точную цену. Первичная консультация бесплатна — напишите в Telegram.",
      en: "There is no single price: the fee depends on the journal, its quartile (Q1–Q4), the article length and the publisher's APC policy. Our specialists match journals to your topic and quote the exact cost afterwards. The initial consultation is free — message us on Telegram.",
    },
  },
  {
    q: {
      uz: "Nashr qancha vaqt oladi?",
      ru: "Сколько времени занимает публикация?",
      en: "How long does publication take?",
    },
    a: {
      uz: "O‘rtacha bir necha oydagi jarayon: jurnal tanlash, maqolani talablarga moslash, navbat va ko‘rib chiqish (peer review). Tezkor jurnallarda maqola 1–2 oyda, ko‘p sonli kvartilli jurnallarda 6 oy va undan ko‘p vaqt olishi mumkin. Konferensiya materiallari odatda tezroq chop etiladi.",
      ru: "В среднем это процесс на несколько месяцев: подбор журнала, подготовка статьи к требованиям, очередь и рецензирование (peer review). В быстрых журналах статья выходит за 1–2 месяца, в квартильных — может занять 6 месяцев и больше. Материалы конференций публикуются обычно быстрее.",
      en: "On average, this is a process of several months: journal selection, preparing the manuscript to meet requirements, queue and peer review. Fast journals publish within 1–2 months, quartile journals can take 6 months or more. Conference proceedings are usually published faster.",
    },
  },
  {
    q: {
      uz: "OAK jurnali ekanini qanday tekshiraman?",
      ru: "Как проверить, что журнал входит в перечень ОАК?",
      en: "How do I verify a journal is in the OAK list?",
    },
    a: {
      uz: "OAK (Oliy attestatsiya komissiyasi) nashrdagi jurnallarning rasmiy ro‘yxatini yuritadi. Jurnalni shu ro‘yxat bo‘yicha va bosilgan son (jild, №, sahifalar) ma’lumotlari bilan tekshirish kerak. Biz izlanayotgan jurnalning OAK ro‘yxatida mavjudligini ham tekshirib beramiz.",
      ru: "ОАК (Высшая аттестационная комиссия) ведёт официальный перечень журналов. Журнал нужно проверять по этому перечню и по выходным данным напечатанного номера (том, №, страницы). Мы также проверяем, есть ли выбранный журнал в перечне ОАК.",
      en: "The OAK (Higher Attestation Commission of Uzbekistan) maintains an official list of journals. A journal should be checked against this list and against the printed issue details (volume, issue number, pages). We also verify whether the chosen journal is on the OAK list.",
    },
  },
  {
    q: {
      uz: "Jurnal haqiqatan ham Scopus bazasidami — qanday tekshiriladi?",
      ru: "Как проверить, что журнал действительно индексируется в Scopus?",
      en: "How can I check that a journal is really indexed in Scopus?",
    },
    a: {
      uz: "Jurnalni faqat rasmiy scopus.com saytidagi «Sources» bo‘limida yoki Scopus Preview orqali tekshiring: jurnal nomini yoki ISSN ni kiriting va bazadagi holatini ko‘ring. Soxta «Scopus saytlari» va norasmiy ro‘yxatlarga ishonmang — batafsil qo‘llanmamizda bosqichlari keltirilgan.",
      ru: "Проверяйте журнал только на официальном сайте scopus.com — в разделе «Sources» или через Scopus Preview: введите название или ISSN и посмотрите статус в базе. Не доверяйте поддельным «сайтам Scopus» и неофициальным спискам — пошаговая инструкция есть в нашем руководстве.",
      en: "Check the journal only on the official scopus.com site — via the \"Sources\" section or Scopus Preview: enter the journal title or ISSN and see its status in the database. Do not trust fake \"Scopus sites\" or unofficial lists — our guide walks through the steps.",
    },
  },
  {
    q: {
      uz: "Q1–Q4 kvartillari nima degani?",
      ru: "Что означают квартили Q1–Q4?",
      en: "What do quartiles Q1–Q4 mean?",
    },
    a: {
      uz: "Kvartil — jurnalning o‘z sohasidagi reytingi: Q1 eng yuqori 25% jurnallar, Q4 pastki 25%. Reyting SJR va CiteScore ko‘rsatkichlari asosida yillik yangilanadi. PhD va DSc talablarida odatda ma’lum kvartildagi yoki har qanday Scopus jurnalidagi nashr qabul qilinadi — talabni OAK hujjatlaridan tekshiring.",
      ru: "Квартиль — рейтинг журнала внутри его научной дисциплины: Q1 — топ-25% журналов, Q4 — последние 25%. Рейтинг ежегодно обновляется по показателям SJR и CiteScore. В требованиях к PhD и DSc обычно указано, нужен ли журнал определённого квартиля или достаточно любого из Scopus — проверьте по документам ОАК.",
      en: "A quartile is a journal's rank within its field: Q1 is the top 25% of journals, Q4 the bottom 25%. Rankings are updated annually based on SJR and CiteScore. PhD and DSc requirements usually state whether a journal of a certain quartile is needed or any Scopus journal suffices — check the OAK documents.",
    },
  },
  {
    q: {
      uz: "Xyunchchilik jurnaldan qanday saqlanaman?",
      ru: "Как отличить хищнический журнал?",
      en: "How do I spot a predatory journal?",
    },
    a: {
      uz: "Ogoh bo‘ling, agar: maqola bir necha kunda «qabul qilinsa», jurnal Scopus rasmiy bazasida ko‘rinmasa, aloqa faqat messenjerlar orqali bo‘lsa va to‘lov tushuntirilsiz talab qilinsa. Biz ishlatadigan jurnallarning bazadagi holati va nashriyot tarixini tekshirib boramiz.",
      ru: "Насторожитесь, если: статью «принимают» за несколько дней, журнал отсутствует в официальной базе Scopus, связь ведётся только через мессенджеры, а оплата требуется без пояснений. Мы проверяем статус в базе и историю издательства каждого журнала, с которым работаем.",
      en: "Be cautious if: a paper is \"accepted\" within days, the journal is absent from the official Scopus database, communication happens only via messengers, and payment is demanded without explanation. We verify the database status and publishing history of every journal we work with.",
    },
  },
  {
    q: {
      uz: "DOI nima va nima uchun kerak?",
      ru: "Что такое DOI и зачем он нужен?",
      en: "What is a DOI and why is it needed?",
    },
    a: {
      uz: "DOI (Digital Object Identifier) — maqolaning doimiy raqamli identifikatori. Unda maqola turgan manzil hech qachon o‘zgarmaydi, iqtiboslar va indeksatsiya (aynan Scopus bazasiga kirishi) DOI orqali kuzatiladi. Nashrdan so‘ng maqolangiz DOI olganini tekshiring.",
      ru: "DOI (Digital Object Identifier) — постоянный цифровой идентификатор статьи. Адрес статьи с DOI никогда не меняется, а цитирования и индексация (включая попадание в базу Scopus) отслеживаются именно через него. После публикации проверьте, что ваша статья получила DOI.",
      en: "A DOI (Digital Object Identifier) is a permanent identifier of a paper. The address behind a DOI never changes, and citations and indexing (including entering the Scopus database) are tracked through it. After publication, check that your paper has received a DOI.",
    },
  },
  {
    q: {
      uz: "Konferensiyada qatnashish uchun nima kerak?",
      ru: "Что нужно для участия в конференции?",
      en: "What is needed to take part in a conference?",
    },
    a: {
      uz: "Ariza qoldirasiz, keyin konferensiya mavzusiga mos ma’ruza (tezis yoki to‘liq maqola IMRAD formatida, ingliz tilida) tayyorlaysiz. Ishtirokchilar odatda ishtirok sertifikati, bosma to‘plam va ma’ruza bayonnomasini oladi. Aniq shartlar har bir konferensiya sahifasida keltirilgan.",
      ru: "Вы оставляете заявку, затем готовите доклад по теме конференции (тезисы или полную статью в формате IMRAD на английском). Участники обычно получают сертификат участника, печатный сборник и протокол о выступлении. Точные условия указаны на странице каждой конференции.",
      en: "You submit a request and then prepare a talk matching the conference topic (abstracts or a full IMRAD paper in English). Participants usually receive a certificate of participation, printed proceedings and a protocol confirming the talk. Exact terms are given on each conference page.",
    },
  },
  {
    q: {
      uz: "To‘lov va hujjatlar qanday rasmiylashtiriladi?",
      ru: "Как оформляются оплата и документы?",
      en: "How are payment and documents handled?",
    },
    a: {
      uz: "Xizmatlar rasmiy ommaviy oferta asosida ko‘rsatiladi; «Ipak yo‘li» bankidagi joriy hisobga to‘lov qilinadi va hujjatlashtiriladi. Rekvizitlar /payment sahifasida, kompaniyaning guvohnomalari va ruxsatnomalari esa /license sahifasida ochiq joylashgan.",
      ru: "Услуги оказываются на основе официальной публичной оферты; оплата производится и документально оформляется на расчётный счёт в банке « Ipak yo‘li ». Реквизиты — на странице /payment, свидетельства и разрешения компании — открыто на странице /license.",
      en: "Services are provided under an official public offer; payment is made and documented to the current account at Ipak Yuli bank. Bank details are on the /payment page, and the company's registration certificates and permits are openly listed on the /license page.",
    },
  },
  {
    q: {
      uz: "Maqolam antiplagiat tekshiruvidan o‘tadimi?",
      ru: "Пройдёт ли моя статья проверку на антиплагиат?",
      en: "Will my article pass the plagiarism check?",
    },
    a: {
      uz: "Maqola original bo‘lishi shart: iqtiboslar to‘g‘ri rasmiylashtirilgan, o‘zlashtirilgan matn va sun’iy takrorlar bo‘lmasligi kerak. Nashrga topshirishdan oldin matnni originallik tizimlarida tekshirib, kerakli joylarini qayta ishlash yo‘nalishida ko‘rsatma beramiz.",
      ru: "Статья должна быть оригинальной: цитаты оформлены корректно, а заимствованного текста и искусственных повторов быть не должно. Перед подачей в журнал мы проверяем текст системами оригинальности и объясняем, какие фрагменты стоит переработать.",
      en: "An article must be original: quotations must be properly referenced, with no borrowed text or artificial padding. Before submission we run the text through originality systems and explain which passages need reworking.",
    },
  },
  {
    q: {
      uz: "Monografiya yoki darslikni qanday nashr ettiraman?",
      ru: "Как издать монографию или учебник?",
      en: "How do I publish a monograph or textbook?",
    },
    a: {
      uz: "Qo‘lyozmani tahrirlash, SARLAVHA, ISBN olish, bosmaga tayyorlash va chop etish bosqichlarini birga o‘taymiz. Nashr amalga oshirilgach, kitob berilgan ISBN bilan rasman hisobga tushadi. Batafsil jarayon /services/book-publishing sahifasida.",
      ru: "Мы вместе проходим этапы: редактирование рукописи, присвоение ISBN, подготовка макета и печать. После издания книга официально учтена под присвоенным ISBN. Подробный процесс — на странице /services/book-publishing.",
      en: "We go through the stages together: manuscript editing, ISBN assignment, layout preparation and printing. Once published, the book is officially registered under its ISBN. The detailed process is on the /services/book-publishing page.",
    },
  },
  {
    q: {
      uz: "Dissertatsiya va stajirovka bo‘yicha yordam berasizmi?",
      ru: "Оказываете ли вы помощь с диссертацией и стажировкой?",
      en: "Do you help with dissertations and internships?",
    },
    a: {
      uz: "Ha: dissertatsiya ishini tayyorlashda metodik maslahat, ilmiy maqolalar nashri, xorijiy stajirovkalarni tashkil etish va akademik hujjatlar bo‘yicha yordam ko‘rsatamiz. Har bir holat individual muhokama qilinadi — murojaat uchun Telegram orqali yozing.",
      ru: "Да: мы консультируем по методологии подготовки диссертации, публикуем научные статьи, организуем зарубежные стажировки и помогаем с академическими документами. Каждый случай обсуждается индивидуально — напишите в Telegram для консультации.",
      en: "Yes: we advise on dissertation methodology, publish research articles, arrange international internships and help with academic documents. Every case is discussed individually — message us on Telegram for a consultation.",
    },
  },
];
