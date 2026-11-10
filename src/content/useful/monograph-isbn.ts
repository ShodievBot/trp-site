import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "monograph-isbn",
  date: "2026-11-10",
  title: {
    uz: "Monografiya yoki darslikni qanday nashr etish kerak: ISBN, UDK, BBK va taqrizchilar",
    ru: "Как издать монографию или учебник: ISBN, УДК, ББК и рецензенты",
    en: "How to publish a monograph or textbook: ISBN, UDC, LBC and reviewers",
  },
  description: {
    uz: "Monografiya va darslik nashr etish bosqichlari: qo‘lyozma tayyorlash, taqrizlar, ISBN, UDK va BBK kodlari, sahifalash, tiraj va majburiy nusxalar.",
    ru: "Этапы издания монографии и учебника: подготовка рукописи, рецензии, ISBN, коды УДК и ББК, вёрстка, тираж и обязательные экземпляры.",
    en: "The stages of publishing a monograph or textbook: preparing the manuscript, reviews, ISBN, UDC and LBC codes, typesetting, print run and legal deposit.",
  },
  body: {
    uz: `
## Monografiya va darslik farqi

Monografiya — bitta muammoni chuqur o‘rgangan ilmiy asar, uning o‘quvchisi mutaxassislar. Darslik va o‘quv qo‘llanma esa fan dasturiga mos ravishda talabalar uchun yoziladi. Nashr turi kitobning tuzilishi, taqriz tartibi va rasmiylashtirish talablarini belgilaydi.

## 1-bosqich: qo‘lyozma

Matnni tugallangan holda topshiring: kirish, boblar, xulosa, adabiyotlar ro‘yxati, jadval va rasmlar raqamlangan. Matn originalligini oldindan tekshiring va begona rasm hamda jadvallardan foydalanish huquqiga ega ekaningizga ishonch hosil qiling.

## 2-bosqich: taqrizlar va tavsiya

Ilmiy nashr uchun odatda shu soha bo‘yicha ilmiy darajaga ega mutaxassislarning taqrizlari kerak. Ko‘pincha muassasa ilmiy yoki o‘quv-uslubiy kengashining nashrga tavsiyasi ham talab qilinadi. Taqrizchilar va tavsiya haqidagi ma’lumot kitobning chiqish ma’lumotlari sahifasida ko‘rsatiladi. Darsliklar uchun grif olish tartibi alohida bo‘lishi mumkin: uni o‘z muassasangizdan aniqlang.

## 3-bosqich: ISBN, UDK va BBK

- ISBN — kitobning 13 raqamli xalqaro standart raqami. Uni muallif emas, nashriyot milliy ISBN agentligi orqali oladi. Har bir nashr va har bir format (bosma, elektron) alohida ISBN oladi.
- UDK — Universal o‘nlik tasnifi kodi, kitob mavzusini ko‘rsatadi.
- BBK — kutubxona-bibliografik tasnif kodi, kutubxonalarda joylashtirish uchun.
- Mualliflik belgisi va annotatsiya ham chiqish ma’lumotlariga kiradi.

## 4-bosqich: tahrir va sahifalash

Nashriyot matnni tahrir qiladi, korrekturadan o‘tkazadi, sahifalaydi va muqova tayyorlaydi. Muallif tayyor maketni o‘qib chiqib, imzo bilan tasdiqlaydi. Aynan shu bosqichda xatolarni tuzatish eng arzon.

## 5-bosqich: chop etish va tarqatish

Tiraj, qog‘oz va muqova turini oldindan kelishing. Nashrdan so‘ng nashriyot qonunchilikda belgilangan majburiy nusxalarni tegishli tashkilotlar va kutubxonalarga yuboradi. Elektron versiya va DOI masalasini ham muhokama qiling.

## Nashriyot tanlashda nimaga e’tibor berish kerak

- Nashriyot faoliyatini tasdiqlovchi rasmiy hujjat bormi.
- ISBN aynan shu nashriyot nomiga berilganmi.
- Shartnomada muddat, tiraj, narx va mualliflik huquqi aniq yozilganmi.
`,
    ru: `
## Монография и учебник: в чём разница

Монография — научный труд, глубоко раскрывающий одну проблему; её читатели — специалисты. Учебник и учебное пособие пишут для студентов по программе дисциплины. Вид издания определяет структуру книги, порядок рецензирования и требования к оформлению.

## Этап 1: рукопись

Сдавайте текст в законченном виде: введение, главы, заключение, список литературы, пронумерованные таблицы и рисунки. Заранее проверьте оригинальность и убедитесь, что у вас есть право использовать чужие рисунки и таблицы.

## Этап 2: рецензии и рекомендация

Для научного издания обычно нужны рецензии специалистов с учёной степенью по этой области. Часто требуется и рекомендация к печати от учёного или учебно-методического совета организации. Сведения о рецензентах и рекомендации указывают на странице выходных данных. Для учебников порядок получения грифа может быть отдельным: уточните его в своей организации.

## Этап 3: ISBN, УДК и ББК

- ISBN — международный стандартный номер книги из 13 цифр. Его получает не автор, а издательство через национальное агентство ISBN. Каждое издание и каждый формат (печатный, электронный) получают отдельный номер.
- УДК — код Универсальной десятичной классификации, обозначает тематику книги.
- ББК — библиотечно-библиографическая классификация, нужна для размещения в библиотеках.
- В выходные данные также входят авторский знак и аннотация.

## Этап 4: редактура и вёрстка

Издательство редактирует текст, делает корректуру, верстает книгу и готовит обложку. Автор вычитывает готовый макет и подтверждает его подписью. Именно на этом этапе исправлять ошибки дешевле всего.

## Этап 5: печать и распространение

Заранее согласуйте тираж, бумагу и тип переплёта. После выхода издательство направляет обязательные экземпляры, предусмотренные законодательством, в соответствующие организации и библиотеки. Обсудите также электронную версию и DOI.

## На что смотреть при выборе издательства

- Есть ли официальный документ, подтверждающий издательскую деятельность.
- Оформлен ли ISBN именно на это издательство.
- Прописаны ли в договоре сроки, тираж, стоимость и авторские права.
`,
    en: `
## Monograph versus textbook

A monograph is a scholarly work that explores one problem in depth for specialist readers. A textbook or study guide is written for students and follows a course syllabus. The type of publication determines the book's structure, review process and formatting requirements.

## Stage 1: the manuscript

Submit a finished text: introduction, chapters, conclusion, reference list, numbered tables and figures. Check originality in advance and make sure you have the right to use other people's figures and tables.

## Stage 2: reviews and recommendation

A scholarly book normally needs reviews from specialists holding an academic degree in the field. A recommendation for publication from the institution's academic or methodological council is often required as well. Reviewers and the recommendation are named on the imprint page. Textbooks may follow a separate approval procedure: check with your institution.

## Stage 3: ISBN, UDC and LBC

- ISBN is the 13-digit International Standard Book Number. The publisher, not the author, obtains it through the national ISBN agency. Each edition and each format (print, electronic) gets its own number.
- UDC is the Universal Decimal Classification code that indicates the subject.
- LBC (BBK) is the library classification code used in CIS countries for shelving.
- The imprint page also carries the author mark and a short annotation.

## Stage 4: editing and typesetting

The publisher edits and proofreads the text, typesets the book and designs the cover. The author reads the final proof and signs it off. This is the cheapest moment to fix mistakes.

## Stage 5: printing and distribution

Agree the print run, paper and binding in advance. After release the publisher sends the legal deposit copies required by law to the relevant organisations and libraries. Discuss an electronic version and a DOI as well.

## What to check when choosing a publisher

- Does it hold an official document confirming its publishing activity?
- Is the ISBN registered to that publisher?
- Does the contract state the deadline, print run, price and copyright terms?
`,
  },
};
