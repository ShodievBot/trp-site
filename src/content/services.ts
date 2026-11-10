import type { UsefulArticle } from "@/lib/useful";

const cover = (slug: string) => `/images/services/${slug}.webp`;
const date = "2026-11-11";

// Order matches the service cards on /services and on the home page.
export const services: UsefulArticle[] = [
  {
    slug: "scopus-publication",
    date,
    cover: cover("scopus-publication"),
    title: {
      uz: "Scopus jurnallarida maqola nashr etish",
      ru: "Публикация статей в журналах Scopus",
      en: "Publishing articles in Scopus journals",
    },
    description: {
      uz: "Scopus bazasida indekslanadigan xalqaro jurnallarda ilmiy maqola nashr etish: jurnal tanlash, maqolani IMRAD bo‘yicha tayyorlash, tarjima, tahrir va taqriz jarayonida hamrohlik.",
      ru: "Публикация научных статей в международных журналах, индексируемых в Scopus: подбор журнала, подготовка по IMRAD, перевод, редактура и сопровождение на рецензировании.",
      en: "Publishing research articles in international Scopus-indexed journals: journal selection, IMRAD preparation, translation, editing and support through peer review.",
    },
    body: {
      uz: `
## Xizmat kimlar uchun

Doktorantlar, mustaqil izlanuvchilar, o‘qituvchilar va ilmiy xodimlar uchun: PhD yoki DSc himoyasi, ilmiy unvon, hisobot yoki grant uchun Scopus bazasidagi jurnalda maqola kerak bo‘lganda.

## Nima qilamiz

- Mavzu va talablaringizga mos, hozir Scopus’da faol indekslanayotgan jurnalni tanlaymiz: kvartil, yo‘nalish va ko‘rib chiqish muddati bo‘yicha.
- Maqolani jurnal talablari va IMRAD tuzilishiga moslashtiramiz.
- Ingliz tiliga ilmiy tarjima va tahrir qilamiz.
- Annotatsiya, kalit so‘zlar va adabiyotlar ro‘yxatini rasmiylashtiramiz.
- Maqolani topshirish, taqrizchilar izohlariga javob tayyorlash va qayta ishlashda hamrohlik qilamiz.

## Qanday ishlaymiz

Ariza qoldirasiz, biz maqola va talablarni o‘rganamiz, mos jurnallarni taklif qilamiz va shartnoma tuzamiz. Shundan so‘ng tayyorlash, topshirish va nashr chiqqunga qadar kuzatuv boshlanadi.

## Muhim

Maqolani qabul qilish qarorini jurnal tahririyati va taqrizchilar chiqaradi. Biz yirtqich jurnallar bilan ishlamaymiz va “bir haftada nashr” va’da qilmaymiz: halol jarayon odatda bir necha oy davom etadi.
`,
      ru: `
## Для кого услуга

Для докторантов, соискателей, преподавателей и научных сотрудников, которым нужна статья в журнале Scopus для защиты PhD или DSc, учёного звания, отчёта или гранта.

## Что мы делаем

- Подбираем журнал, который подходит по теме и требованиям и сейчас активно индексируется в Scopus: по квартилю, направлению и срокам рассмотрения.
- Приводим статью к требованиям журнала и структуре IMRAD.
- Делаем научный перевод на английский и редактуру.
- Оформляем аннотацию, ключевые слова и список литературы.
- Сопровождаем подачу, подготовку ответов рецензентам и доработку.

## Как мы работаем

Вы оставляете заявку, мы изучаем статью и требования, предлагаем подходящие журналы и заключаем договор. Затем идут подготовка, подача и сопровождение до выхода публикации.

## Важно

Решение о принятии статьи принимают редакция и рецензенты журнала. Мы не работаем с хищными журналами и не обещаем «публикацию за неделю»: честный процесс обычно занимает несколько месяцев.
`,
      en: `
## Who it is for

Doctoral students, independent researchers, lecturers and research staff who need a paper in a Scopus journal for a PhD or DSc defence, an academic title, a report or a grant.

## What we do

- Select a journal that fits your topic and requirements and is actively indexed in Scopus today: by quartile, subject area and review time.
- Bring the paper in line with the journal's guidelines and the IMRAD structure.
- Provide academic translation into English and editing.
- Format the abstract, keywords and reference list.
- Support submission, responses to reviewers and revision.

## How we work

You send a request, we study the paper and your requirements, suggest suitable journals and sign a contract. Preparation, submission and follow-up until publication come next.

## Important

The decision to accept a paper belongs to the journal's editors and reviewers. We do not work with predatory journals and do not promise "publication in a week": an honest process usually takes several months.
`,
    },
  },
  {
    slug: "conference-organization",
    date,
    cover: cover("conference-organization"),
    title: {
      uz: "Xalqaro konferensiyalarni tashkil etish",
      ru: "Организация международных конференций",
      en: "Organising international conferences",
    },
    description: {
      uz: "Universitetlar va ilmiy markazlar uchun xalqaro ilmiy-amaliy konferensiyalarni O‘zbekiston va Turkiyada tashkil etish: dastur, xorijiy ishtirokchilar, materiallar to‘plami va sertifikatlar.",
      ru: "Организация международных научно-практических конференций для университетов и научных центров в Узбекистане и Турции: программа, зарубежные участники, сборник материалов и сертификаты.",
      en: "Organising international research conferences for universities and research centres in Uzbekistan and Türkiye: programme, foreign participants, proceedings and certificates.",
    },
    body: {
      uz: `
## Xizmat kimlar uchun

Universitetlar, institutlar, kafedralar va ilmiy markazlar uchun: xalqaro ilmiy-amaliy konferensiya o‘tkazish, xorijiy hamkorlar bilan aloqalarni mustahkamlash va natijalarni to‘plamda chop etish kerak bo‘lganda.

## Nima qilamiz

- Konferensiya mavzusi, formati va dasturini muassasa bilan birga ishlab chiqamiz.
- Xorijiy olimlar va hamkor tashkilotlarni taklif qilamiz. Hamkor davlatlar orasida Turkiya, Rossiya, Qozog‘iston va Koreya bor.
- Maqola va tezislarni qabul qilamiz, tahrir qilamiz va materiallar to‘plamini nashr etamiz.
- Ishtirokchilar uchun sertifikatlar, beyjlar va dastur tayyorlaymiz.
- Xorijdagi konferensiyalar uchun safar, mehmonxona va transferni tashkil qilamiz.
- Tadbirni foto va videoda yoritamiz.

## Tajribamiz

Biz Samarqand davlat arxitektura-qurilish universiteti va Samarqand davlat pedagogika instituti bilan hamkorlikda xalqaro konferensiyalar, shuningdek Turkiyaning Alanya, Istanbul va Trabzon shaharlarida ilmiy anjumanlar o‘tkazdik. Ularning barchasi “Konferensiyalar” bo‘limida.

## Rasmiy asos

Nashriyot ommaviy tadbirlarni o‘tkazish uchun ruxsatnomaga ega. Hujjatlar “Litsenziya” sahifasida joylashtirilgan.
`,
      ru: `
## Для кого услуга

Для университетов, институтов, кафедр и научных центров, которым нужно провести международную научно-практическую конференцию, укрепить связи с зарубежными партнёрами и издать результаты в сборнике.

## Что мы делаем

- Вместе с организацией разрабатываем тему, формат и программу конференции.
- Приглашаем зарубежных учёных и партнёрские организации. Среди стран-партнёров Турция, Россия, Казахстан и Корея.
- Принимаем и редактируем статьи и тезисы, издаём сборник материалов.
- Готовим сертификаты, бейджи и программу для участников.
- Для конференций за рубежом организуем поездку, отель и трансфер.
- Обеспечиваем фото- и видеосъёмку мероприятия.

## Наш опыт

Мы провели международные конференции совместно с Самаркандским государственным архитектурно-строительным университетом и Самаркандским государственным педагогическим институтом, а также научные встречи в турецких городах Аланья, Стамбул и Трабзон. Все они представлены в разделе «Конференции».

## Официальное основание

У издательства есть разрешение на проведение массовых мероприятий. Документы размещены на странице «Лицензия».
`,
      en: `
## Who it is for

Universities, institutes, departments and research centres that want to hold an international research conference, strengthen ties with foreign partners and publish the results in proceedings.

## What we do

- Develop the topic, format and programme together with the institution.
- Invite foreign scholars and partner organisations. Partner countries include Türkiye, Russia, Kazakhstan and Korea.
- Collect and edit papers and abstracts and publish the proceedings.
- Prepare certificates, badges and the programme for participants.
- For conferences abroad, arrange travel, accommodation and transfers.
- Provide photo and video coverage of the event.

## Our experience

We have held international conferences with Samarkand State University of Architecture and Construction and Samarkand State Pedagogical Institute, and academic meetings in Alanya, Istanbul and Trabzon in Türkiye. All of them are shown in the Conferences section.

## Official basis

The publishing house holds a permit to hold public events. The documents are on the License page.
`,
    },
  },
  {
    slug: "book-publishing",
    date,
    cover: cover("book-publishing"),
    title: {
      uz: "Kitob, monografiya va darslik nashr etish",
      ru: "Издание книг, монографий и учебников",
      en: "Publishing books, monographs and textbooks",
    },
    description: {
      uz: "Monografiya, darslik, o‘quv qo‘llanma va boshqa kitoblarni nashr etish: tahrir, sahifalash, muqova dizayni, ISBN, UDK va BBK, bosma va elektron nashr.",
      ru: "Издание монографий, учебников, учебных пособий и других книг: редактура, вёрстка, дизайн обложки, ISBN, УДК и ББК, печатное и электронное издание.",
      en: "Publishing monographs, textbooks, study guides and other books: editing, typesetting, cover design, ISBN, UDC and LBC codes, print and electronic editions.",
    },
    body: {
      uz: `
## Xizmat kimlar uchun

Olimlar, o‘qituvchilar va mualliflar uchun: monografiya, darslik, o‘quv qo‘llanma, ilmiy to‘plam yoki badiiy kitobni rasmiy nashriyotda chiqarish kerak bo‘lganda.

## Nima qilamiz

- Qo‘lyozmani qabul qilamiz va nashrga tayyorlik darajasini baholaymiz.
- Adabiy va ilmiy tahrir, korrektura qilamiz.
- Kitobni sahifalaymiz va muqova dizaynini tayyorlaymiz.
- ISBN, UDK va BBK kodlarini rasmiylashtiramiz, chiqish ma’lumotlarini tuzamiz.
- Kelishilgan tirajda chop etamiz, elektron versiyasini tayyorlaymiz.
- Qonunchilikda belgilangan majburiy nusxalarni yuboramiz.

## Qaysi nashrlarni chiqaramiz

Nashriyot ilmiy, o‘quv, ilmiy-ommabop, adabiy-badiiy, ma’naviy-ma’rifiy, rasmiy, ensiklopedik va boshqa turdagi nashrlarni tayyorlaydi. To‘liq ro‘yxat noshirlik faoliyati to‘g‘risidagi tasdiqnomada ko‘rsatilgan.

## Rasmiy asos

Nashriyot O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi reyestriga kiritilgan (tasdiqnoma № 1090203). Hujjat “Litsenziya” sahifasida.

## Muallifdan nima kerak

Tugallangan matn, taqrizlar va muassasangiz talab qilsa, kengash tavsiyasi. Muddat, tiraj va narx shartnomada belgilanadi.
`,
      ru: `
## Для кого услуга

Для учёных, преподавателей и авторов, которым нужно выпустить монографию, учебник, учебное пособие, научный сборник или художественную книгу в официальном издательстве.

## Что мы делаем

- Принимаем рукопись и оцениваем готовность к изданию.
- Делаем литературную и научную редактуру, корректуру.
- Верстаем книгу и готовим дизайн обложки.
- Оформляем ISBN, УДК и ББК, составляем выходные данные.
- Печатаем согласованный тираж и готовим электронную версию.
- Рассылаем обязательные экземпляры, предусмотренные законодательством.

## Какие издания выпускаем

Издательство готовит научные, учебные, научно-популярные, литературно-художественные, духовно-просветительские, официальные, энциклопедические и другие виды изданий. Полный перечень указан в подтверждении об издательской деятельности.

## Официальное основание

Издательство внесено в реестр Агентства информации и массовых коммуникаций при Администрации Президента Республики Узбекистан (подтверждение № 1090203). Документ размещён на странице «Лицензия».

## Что нужно от автора

Законченный текст, рецензии и, если требует ваша организация, рекомендация совета. Сроки, тираж и стоимость фиксируются в договоре.
`,
      en: `
## Who it is for

Scholars, lecturers and authors who want to release a monograph, textbook, study guide, collected volume or literary work through an official publisher.

## What we do

- Accept the manuscript and assess its readiness for publication.
- Provide literary and academic editing and proofreading.
- Typeset the book and design the cover.
- Arrange the ISBN, UDC and LBC codes and prepare the imprint page.
- Print the agreed run and prepare an electronic edition.
- Send the legal deposit copies required by law.

## What we publish

The publishing house produces scientific, educational, popular-science, literary, cultural, official, encyclopaedic and other types of publications. The full list is given in the confirmation of publishing activity.

## Official basis

The publishing house is entered in the register of the Agency of Information and Mass Communications under the Administration of the President of the Republic of Uzbekistan (confirmation No. 1090203). The document is on the License page.

## What the author provides

A finished text, reviews and, if your institution requires it, a council recommendation. Deadlines, print run and price are fixed in the contract.
`,
    },
  },
  {
    slug: "oak-journals",
    date,
    cover: cover("oak-journals"),
    title: {
      uz: "OAK jurnallarida maqola chop etish",
      ru: "Публикация статей в журналах ОАК",
      en: "Publishing articles in OAK-listed journals",
    },
    description: {
      uz: "OAK tavsiya etgan ilmiy jurnallarda maqola chop etish: ixtisoslikka mos jurnal tanlash, maqolani talablar bo‘yicha rasmiylashtirish va nashrgacha kuzatib borish.",
      ru: "Публикация статей в научных журналах, рекомендованных ОАК: подбор журнала по специальности, оформление по требованиям и сопровождение до выхода.",
      en: "Publishing articles in journals recommended by OAK, the Higher Attestation Commission of Uzbekistan: choosing a journal for your speciality, formatting and support until publication.",
    },
    body: {
      uz: `
## Xizmat kimlar uchun

PhD va DSc dissertatsiyasi ustida ishlayotgan doktorantlar va mustaqil izlanuvchilar, shuningdek ilmiy unvon olishga tayyorlanayotgan o‘qituvchilar uchun.

## Nima qilamiz

- Ixtisosligingizga mos, OAK ro‘yxatining amaldagi tahririga kiritilgan mahalliy va xorijiy jurnallarni tanlaymiz.
- Maqolani jurnal talablari bo‘yicha rasmiylashtiramiz: tuzilish, annotatsiya, kalit so‘zlar va adabiyotlar ro‘yxati.
- Matnni tahrir qilamiz va originalligini tekshirishga yordam beramiz.
- Maqolani tahririyatga topshiramiz va nashr chiqqunga qadar kuzatib boramiz.
- Nashrni tasdiqlovchi hujjatlarni: jurnal muqovasi, mundarija va maqola matnini taqdim etamiz.

## Nega bu muhim

OAK ro‘yxati yangilanib turadi, jurnal esa aynan sizning ixtisosligingiz bo‘yicha tavsiya etilgan bo‘lishi kerak. Noto‘g‘ri tanlangan jurnaldagi maqola himoyada hisobga olinmasligi mumkin.

## Muhim

Nashrlar soni va turiga oid talablarni OAK belgilaydi va ular o‘zgarib turadi. Ishni boshlashdan oldin amaldagi talablarni ilmiy kengash kotibi bilan aniqlang, biz esa shu talablarga mos reja tuzishga yordam beramiz.
`,
      ru: `
## Для кого услуга

Для докторантов и соискателей, работающих над диссертацией PhD или DSc, и для преподавателей, которые готовятся к получению учёного звания.

## Что мы делаем

- Подбираем отечественные и зарубежные журналы, которые подходят по вашей специальности и входят в действующую редакцию перечня ОАК.
- Оформляем статью по требованиям журнала: структура, аннотация, ключевые слова и список литературы.
- Редактируем текст и помогаем проверить оригинальность.
- Подаём статью в редакцию и сопровождаем до выхода.
- Передаём подтверждающие документы: обложку журнала, содержание и текст статьи.

## Почему это важно

Перечень ОАК обновляется, а журнал должен быть рекомендован именно по вашей специальности. Статью в неправильно выбранном журнале могут не засчитать на защите.

## Важно

Требования к числу и видам публикаций устанавливает ОАК, и они меняются. Перед началом работы уточните действующие требования у секретаря учёного совета, а мы поможем составить план под эти требования.
`,
      en: `
## Who it is for

Doctoral students and independent researchers working on a PhD or DSc dissertation, and lecturers preparing for an academic title.

## What we do

- Select national and foreign journals that match your speciality and are on the current edition of the OAK list.
- Format the paper to the journal's requirements: structure, abstract, keywords and references.
- Edit the text and help check originality.
- Submit the paper to the editorial office and follow it through to publication.
- Provide supporting documents: the journal cover, table of contents and the article itself.

## Why it matters

The OAK list is updated regularly, and a journal must be recommended for your particular speciality. A paper in the wrong journal may not be counted at the defence.

## Important

The requirements for the number and types of publications are set by OAK and change over time. Before starting, confirm the current rules with the secretary of your academic council; we will help build a plan to match them.
`,
    },
  },
  {
    slug: "dgu-patent",
    date,
    cover: cover("dgu-patent"),
    title: {
      uz: "DGU guvohnomasi, patent va foydali model",
      ru: "Свидетельство ДГУ, патенты и полезные модели",
      en: "Software certificates (DGU), patents and utility models",
    },
    description: {
      uz: "EHM dasturi va ma’lumotlar bazasi uchun DGU guvohnomasi, ixtiro va foydali model patenti olishda yordam: hujjatlarni tayyorlash, ariza topshirish va ekspertizada hamrohlik.",
      ru: "Помощь в получении свидетельства ДГУ на программу для ЭВМ и базу данных, патента на изобретение и полезную модель: подготовка документов, подача заявки и сопровождение экспертизы.",
      en: "Help with obtaining a DGU certificate for software and databases and patents for inventions and utility models: preparing documents, filing and support during examination.",
    },
    body: {
      uz: `
## Xizmat kimlar uchun

Dasturiy mahsulot, ma’lumotlar bazasi, qurilma yoki usul yaratgan olimlar, o‘qituvchilar, doktorantlar va ishlab chiquvchilar uchun.

## Nima qilamiz

- Ishlanmangizga qaysi himoya turi mos kelishini aniqlaymiz: DGU guvohnomasi, ixtiro patenti yoki foydali model.
- Ixtiro va foydali model uchun dastlabki patent izlanishida yordam beramiz.
- Hujjatlar to‘plamini tayyorlaymiz: ariza, referat, tavsif, formula va boshqa materiallar.
- Arizani vakolatli organga topshirishda va ekspertiza so‘rovlariga javob berishda hamrohlik qilamiz.
- Guvohnoma yoki patent olinguncha jarayonni kuzatib boramiz.

## Nega kerak

DGU guvohnomasi va patentlar mualliflikni rasman tasdiqlaydi, ilmiy hisobotlar, attestatsiya va grant arizalarida hisobga olinadi, ishlanmani tijoratlashtirishda huquqlaringizni himoya qiladi.

## Muhim

Patent uchun ariza topshirilguncha yechim mohiyatini maqola yoki ma’ruzada ochiq e’lon qilmang: bu yangilikni yo‘qotishga olib kelishi mumkin. Ro‘yxatdan o‘tkazish to‘g‘risidagi qarorni vakolatli davlat organi qabul qiladi.
`,
      ru: `
## Для кого услуга

Для учёных, преподавателей, докторантов и разработчиков, которые создали программный продукт, базу данных, устройство или способ.

## Что мы делаем

- Определяем, какой вид охраны подходит вашей разработке: свидетельство ДГУ, патент на изобретение или полезная модель.
- Помогаем с предварительным патентным поиском для изобретений и полезных моделей.
- Готовим комплект документов: заявление, реферат, описание, формулу и другие материалы.
- Сопровождаем подачу заявки в уполномоченный орган и ответы на запросы экспертизы.
- Ведём процесс до получения свидетельства или патента.

## Зачем это нужно

Свидетельства ДГУ и патенты официально подтверждают авторство, учитываются в научных отчётах, при аттестации и в заявках на гранты и защищают ваши права при коммерциализации разработки.

## Важно

До подачи заявки на патент не раскрывайте суть решения в статье или докладе: это может лишить его новизны. Решение о регистрации принимает уполномоченный государственный орган.
`,
      en: `
## Who it is for

Scholars, lecturers, doctoral students and developers who have created software, a database, a device or a method.

## What we do

- Determine which form of protection suits your work: a DGU certificate, an invention patent or a utility model.
- Help with a preliminary patent search for inventions and utility models.
- Prepare the document set: application, abstract, description, claims and other materials.
- Support filing with the authorised body and replies to examination requests.
- Follow the process until the certificate or patent is issued.

## Why it matters

DGU certificates and patents officially confirm authorship, count in research reports, assessments and grant applications, and protect your rights when the work is commercialised.

## Important

Do not disclose the essence of the solution in a paper or talk before filing a patent application: this can destroy novelty. The decision on registration is made by the authorised state body.
`,
    },
  },
  {
    slug: "dissertation-support",
    date,
    cover: cover("dissertation-support"),
    title: {
      uz: "Dissertatsiya va xorijiy stajirovka bo‘yicha yordam",
      ru: "Помощь с диссертацией и зарубежной стажировкой",
      en: "Dissertation and international internship support",
    },
    description: {
      uz: "PhD va DSc dissertatsiyasi bo‘yicha maslahat: nashrlar rejasi, matnni tahrirlash va rasmiylashtirish, shuningdek xorijiy ilmiy stajirovkani tashkil etishda yordam.",
      ru: "Консультации по диссертациям PhD и DSc: план публикаций, редактура и оформление текста, а также помощь в организации зарубежной научной стажировки.",
      en: "Advice on PhD and DSc dissertations: publication planning, editing and formatting, and help arranging research internships abroad.",
    },
    body: {
      uz: `
## Xizmat kimlar uchun

PhD va DSc dissertatsiyasi ustida ishlayotgan doktorantlar va mustaqil izlanuvchilar, shuningdek xorijda ilmiy stajirovka o‘tashni rejalashtirayotgan tadqiqotchilar uchun.

## Dissertatsiya bo‘yicha

- Dissertatsiya boblari bo‘yicha nashrlar rejasini tuzishda yordam beramiz: qaysi natija qaysi jurnalda chiqadi.
- Matn tuzilishi va rasmiylashtirilishi bo‘yicha maslahat beramiz.
- Matnni tahrir qilamiz, adabiyotlar ro‘yxatini rasmiylashtiramiz.
- Originallikni oshirish bo‘yicha halol usullarni tavsiya qilamiz.
- Avtoreferat va annotatsiyalarni ingliz hamda rus tillariga tarjima qilamiz.

## Stajirovka bo‘yicha

- Yo‘nalishingizga mos xorijiy universitet yoki ilmiy markazni tanlashda yordam beramiz.
- Taklifnoma va kerakli hujjatlarni tayyorlashda hamrohlik qilamiz.
- Safar davomida konferensiyada ma’ruza qilish va hamkorlar bilan uchrashuvlarni tashkil etamiz.
- Yakunda stajirovkani tasdiqlovchi hujjatlarni olishga yordam beramiz.

## Muhim

Biz dissertatsiyani muallif o‘rniga yozmaymiz. Tadqiqot va uning natijalari muallifga tegishli bo‘lishi kerak, bizning vazifamiz — maslahat, tahrir, rasmiylashtirish va tashkiliy yordam.
`,
      ru: `
## Для кого услуга

Для докторантов и соискателей, работающих над диссертацией PhD или DSc, и для исследователей, которые планируют научную стажировку за рубежом.

## По диссертации

- Помогаем составить план публикаций по главам: какой результат в каком журнале выйдет.
- Консультируем по структуре и оформлению текста.
- Редактируем текст и оформляем список литературы.
- Подсказываем честные способы повысить оригинальность.
- Переводим автореферат и аннотации на английский и русский языки.

## По стажировке

- Помогаем выбрать зарубежный университет или научный центр по вашему направлению.
- Сопровождаем подготовку приглашения и необходимых документов.
- Организуем выступление на конференции и встречи с партнёрами во время поездки.
- Помогаем получить документы, подтверждающие стажировку.

## Важно

Мы не пишем диссертацию за автора. Исследование и его результаты должны принадлежать автору, а наша задача — консультации, редактура, оформление и организационная помощь.
`,
      en: `
## Who it is for

Doctoral students and independent researchers working on a PhD or DSc dissertation, and researchers planning a research internship abroad.

## Dissertation support

- Help build a publication plan by chapter: which result goes to which journal.
- Advise on the structure and formatting of the text.
- Edit the text and format the reference list.
- Suggest honest ways to improve originality.
- Translate the author's summary and abstracts into English and Russian.

## Internship support

- Help choose a foreign university or research centre in your field.
- Support the invitation letter and the required documents.
- Arrange a conference talk and meetings with partners during the trip.
- Help obtain documents confirming the internship.

## Important

We do not write dissertations for authors. The research and its results must be the author's own; our role is advice, editing, formatting and organisational support.
`,
    },
  },
];
