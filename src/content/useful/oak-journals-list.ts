import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "oak-journals-list",
  date: "2026-11-21",
  title: {
    uz: "OAK jurnallari ro‘yxati: jurnalni qanday topish va tekshirish",
    ru: "Список журналов ОАК: как найти и проверить журнал",
    en: "OAK journal list: how to find and verify a journal",
  },
  description: {
    uz: "OAK (Oliy attestatsiya komissiyasi) jurnallari ro‘yxati qanday yuritiladi, jurnalni ro‘yxatda qanday tekshirish va PhD/DSc talablariga mosligini qanday aniqlash.",
    ru: "Как ведётся перечень журналов ОАК (Высшей аттестационной комиссии), как проверить журнал по списку и убедиться, что он подходит под требования PhD/DSc.",
    en: "How the OAK (Higher Attestation Commission) journal list is maintained, how to verify a journal against it and match PhD/DSc requirements.",
  },
  body: {
    uz: `
## OAK nima va ro‘yxat kim uchun kerak

OAK — O‘zbekiston Respublikasi Oliy attestatsiya komissiyasi. U ilmiy daraja va unvonlar berish tartibini yuritadi va shu maqsadda ilmiy jurnallarning rasmiy ro‘yxatini tuzadi: ushbu ro‘yxatdagi jurnallarda chop etilgan maqolalar dissertatsiya himoyasi uchun hisobga qabul qilinadi.

## Ro‘yxat qanday yuritiladi

Ro‘yxat o‘zgarmas emas: OAK uni muntazam yangilaydi — yangi jurnallar kiritiladi, ayrimlari chiqarib tashlanadi. Shu sababli «qachondur ko‘rilgan» eski ro‘yxatga emas, bugungi holatga qarang. Ro‘yxatni OAK rasmiy resurslarida va vazirlik saytlarida topish mumkin.

## Jurnalni tekshirish bosqichlari

- Jurnal nomini rasmiy ro‘yxatda bo‘yicha toping — nom aynan bir xil yozilishi kerak.
- Jurnalning sohasi (fan tarmog‘i) sizning tadqiqot yo‘nalishingizga mosligini tekshiring.
- Nashr etilgach, maqolaning to‘liq ma’lumotlarini saqlang: jurnal nomi, yil, jild, son va sahifalar.
- Ro‘yxatda yo‘q yoki so‘nggi paytlar chiqarilgan jurnalga ishonib qolmang — doktorantura uchun bunday nashr hisobga shmaydi.

## Talablarni oldindan aniqlang

PhD va DSc talablarida nechta maqola, qaysi tizimlarda (OAK, Scopus, Web of Science) va qanday shartlarda chop etilishi kerakligi aniq yozilgan. Ushbu talablarni himoyadan oldin, maqolalar tayyorlana boshlanganda tekshirib boring — keyin qo‘shimcha nashr talab qilinishi mumkin.

## Bizning yordam

Biz OAK ro‘yxati va Scopus bazasidagi jurnallarni tanlashda hamrohlik qilamiz: mavzuga mos jurnallar topamiz, talablarga moslashga yordam beramiz va nashr jarayonini kuzatamiz. Konsultatsiya olish uchun ariza qoldiring.
`,
    ru: `
## Что такое ОАК и кому нужен список

ОАК — Высшая аттестационная комиссия Республики Узбекистан. Она ведёт порядок присвоения учёных степеней и званий и для этой цели формирует официальный перечень научных журналов: статьи в журналах из перечня принимаются в счёт результатов диссертации при защите.

## Как ведётся перечень

Список не постоянный: ОАК регулярно его обновляет — включаются новые журналы, часть исключается. Поэтому ориентируйтесь на актуальное состояние, а не на «когда-то скачанный» старый список. Перечень можно найти на официальных ресурсах ОАК и сайтах ведомств.

## Шаги проверки журнала

- Найдите название журнала в официальном перечне — наименование должно совпадать точно.
- Проверьте, что специальность (отрасль науки) журнала соответствует направлению вашего исследования.
- После публикации сохраните полные выходные данные статьи: название журнала, год, том, номер и страницы.
- Не доверяйте журналу, которого нет в перечне или который из него недавно исключён — для аспирантуры такая публикация не засчитывается.

## Заранее уточните требования

В требованиях к PhD и DSc точно указано, сколько статей, в каких системах (ОАК, Scopus, Web of Science) и на каких условиях нужно опубликовать. Сверяйтесь с ними ещё на этапе подготовки статей — до защиты могут понадобиться дополнительные публикации.

## Наша помощь

Мы сопровождаем подбор журналов из перечня ОАК и баз Scopus: находим журналы под тему, помогаем адаптировать статью и отслеживаем публикацию. Оставьте заявку на консультацию.
`,
    en: `
## What the OAK is and who needs the list

The OAK is the Higher Attestation Commission of the Republic of Uzbekistan. It regulates the awarding of academic degrees and titles and, for this purpose, maintains an official list of scholarly journals: papers published in journals from this list count towards dissertation results at the defence.

## How the list is maintained

The list is not static: the OAK updates it regularly — new journals are added and some are removed. So rely on the current state, not on an old list "saved long ago". The list can be found on the official OAK resources and ministry websites.

## Steps to verify a journal

- Find the journal title in the official list — the name must match exactly.
- Check that the journal's field (branch of science) matches your research direction.
- After publication, keep the full issue details of the paper: journal title, year, volume, issue and pages.
- Do not trust a journal that is missing from the list or was recently removed — such a publication does not count for doctoral study.

## Clarify the requirements in advance

The PhD and DSc requirements state exactly how many papers, in which systems (OAK, Scopus, Web of Science) and under what conditions must be published. Check them when you start preparing your articles — additional publications may be needed before the defence.

## How we help

We support the selection of journals from the OAK list and the Scopus database: we find journals matching your topic, help adapt the article and track the publication. Submit a request for a consultation.
`,
  },
};
