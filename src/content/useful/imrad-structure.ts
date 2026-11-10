import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "imrad-structure",
  date: "2026-11-10",
  title: {
    uz: "IMRAD: ilmiy maqola tuzilishi misollar bilan",
    ru: "Структура научной статьи IMRAD с примерами",
    en: "IMRAD: the structure of a research article, with examples",
  },
  description: {
    uz: "IMRAD formati bo‘yicha ilmiy maqola yozish: kirish, metodlar, natijalar va muhokama bo‘limlarida nima yoziladi va qanday xatolardan qochish kerak.",
    ru: "Как написать научную статью в формате IMRAD: что писать во введении, методах, результатах и обсуждении и каких ошибок избегать.",
    en: "How to write a research article in the IMRAD format: what goes into the introduction, methods, results and discussion, and which mistakes to avoid.",
  },
  body: {
    uz: `
## IMRAD nima

IMRAD — xalqaro jurnallarda qabul qilingan maqola tuzilishi: Introduction (kirish), Methods (metodlar), Results (natijalar) and Discussion (muhokama). Scopus jurnallarining aksariyati aynan shu tuzilishni talab qiladi, chunki u o‘quvchiga kerakli ma’lumotni tez topishga yordam beradi.

## Kirish: nima uchun

Kirish uchta savolga javob beradi: mavzu nega muhim, hozirgacha nima ma’lum va nima o‘rganilmagan. Oxirgi xatboshida tadqiqot maqsadi aniq aytiladi. Misol: “Ushbu tadqiqotning maqsadi — aralash ta’lim modelining talabalar o‘zlashtirishiga ta’sirini baholash”.

## Metodlar: qanday qilindi

Bu bo‘limda tadqiqotni boshqa olim takrorlay oladigan darajada tasvirlang: ishtirokchilar yoki materiallar, tanlanma hajmi, asboblar, tajriba tartibi va statistik tahlil usullari. Misol: “Tadqiqotda 120 nafar ikkinchi kurs talabasi qatnashdi, ma’lumotlar t-mezon yordamida tahlil qilindi”.

## Natijalar: nima topildi

Faqat olingan ma’lumotlarni bering: raqamlar, jadvallar va rasmlar. Bu yerda izoh va taxminlar yozilmaydi. Har bir jadval va rasm matnda eslatilishi kerak, lekin jadvaldagi barcha raqamlarni matnda takrorlash shart emas.

## Muhokama: bu nimani anglatadi

Natijalarni sharhlang, ularni boshqa mualliflar ishlari bilan solishtiring, tadqiqotning cheklovlarini halol ko‘rsating va amaliy ahamiyatini tushuntiring. Xulosa odatda muhokama oxirida yoki alohida qisqa bo‘limda beriladi.

## Qo‘shimcha qismlar

Sarlavha, annotatsiya va kalit so‘zlar maqola boshida, adabiyotlar ro‘yxati oxirida joylashadi. Ko‘p jurnallar minnatdorchilik, moliyalashtirish manbai va manfaatlar to‘qnashuvi haqidagi bayonotni ham so‘raydi.

## Ko‘p uchraydigan xatolar

- Natijalar bo‘limida sharh berish, muhokamada esa yangi raqamlar keltirish.
- Metodlarni juda qisqa yozish.
- Kirishda maqsadni aniq aytmaslik.
- Xulosada ma’lumotlar bilan tasdiqlanmagan da’volar.

Yozishni boshlashdan oldin tanlagan jurnalingizning “Mualliflar uchun qo‘llanma”sini o‘qing: bo‘limlar nomi va hajmi bo‘yicha talablar farq qilishi mumkin.
`,
    ru: `
## Что такое IMRAD

IMRAD — принятая в международных журналах структура статьи: Introduction (введение), Methods (методы), Results (результаты) and Discussion (обсуждение). Большинство журналов Scopus требуют именно её, потому что читатель быстро находит нужную информацию.

## Введение: зачем

Введение отвечает на три вопроса: почему тема важна, что уже известно и что остаётся неизученным. В последнем абзаце прямо формулируют цель. Пример: «Цель исследования — оценить влияние смешанного обучения на успеваемость студентов».

## Методы: как это сделано

Опишите исследование так, чтобы другой учёный мог его повторить: участники или материалы, объём выборки, инструменты, порядок эксперимента и методы статистического анализа. Пример: «В исследовании участвовали 120 студентов второго курса, данные анализировались с помощью t-критерия».

## Результаты: что получено

Только полученные данные: цифры, таблицы и рисунки. Интерпретации и предположений здесь нет. На каждую таблицу и рисунок должна быть ссылка в тексте, но пересказывать в тексте все цифры из таблицы не нужно.

## Обсуждение: что это значит

Объясните результаты, сравните их с работами других авторов, честно укажите ограничения исследования и практическое значение. Вывод обычно дают в конце обсуждения или в отдельном коротком разделе.

## Дополнительные части

Заголовок, аннотация и ключевые слова стоят в начале статьи, список литературы — в конце. Многие журналы также просят благодарности, источник финансирования и заявление о конфликте интересов.

## Частые ошибки

- Комментарии в разделе результатов и новые цифры в обсуждении.
- Слишком краткое описание методов.
- Нечётко сформулированная цель во введении.
- Выводы, которые не подтверждены данными.

Перед началом работы прочитайте «Руководство для авторов» выбранного журнала: требования к названиям разделов и объёму могут отличаться.
`,
    en: `
## What IMRAD is

IMRAD is the article structure used by international journals: Introduction, Methods, Results and Discussion. Most Scopus journals require it because it lets readers find what they need quickly.

## Introduction: why

The introduction answers three questions: why the topic matters, what is already known and what is still missing. The last paragraph states the aim directly. Example: "This study aims to assess the effect of blended learning on student achievement".

## Methods: how it was done

Describe the study in enough detail for another researcher to repeat it: participants or materials, sample size, instruments, procedure and statistical analysis. Example: "The study involved 120 second-year students; data were analysed using a t-test".

## Results: what was found

Report only the data: numbers, tables and figures. Interpretation does not belong here. Every table and figure must be mentioned in the text, but there is no need to repeat every number from a table.

## Discussion: what it means

Explain the results, compare them with other authors' work, state the limitations honestly and describe the practical value. The conclusion usually closes the discussion or forms a short separate section.

## Other parts

The title, abstract and keywords come first, the reference list last. Many journals also ask for acknowledgements, funding information and a conflict of interest statement.

## Common mistakes

- Commenting in the results section and introducing new numbers in the discussion.
- Describing the methods too briefly.
- Not stating the aim clearly in the introduction.
- Conclusions that the data do not support.

Before you start writing, read the author guidelines of your target journal: section names and length limits vary.
`,
  },
};
