import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "doi",
  date: "2026-11-10",
  title: {
    tr: "DOI nedir ve bir makale DOI'yi nasıl alır",
    kk: "DOI: бұл не және мақала оны қалай алады",
    uz: "DOI nima va maqola uni qanday oladi",
    ru: "DOI: что это и как его получает статья",
    en: "DOI: what it is and how an article gets one",
  },
  description: {
    tr: "DOI'nin ne olduğu, nasıl yapılandırıldığı, kimin atadığı, bir makalenin DOI'sinin nasıl kontrol edileceği ve kaynakçada nasıl gösterileceği.",
    kk: "DOI дегеніміз не, ол қалай құрылады, кім береді, мақаланың DOI-ін қалай тексеруге және әдебиеттер тізімінде қалай көрсетуге болады.",
    uz: "DOI raqamli identifikatori nima, u qanday tuzilgan, kim beradi, maqolaning DOI raqamini qanday tekshirish va adabiyotlar ro‘yxatida qanday ko‘rsatish kerak.",
    ru: "Что такое цифровой идентификатор DOI, как он устроен, кто его присваивает, как проверить DOI статьи и как указывать его в списке литературы.",
    en: "What a DOI is, how it is built, who assigns it, how to check an article's DOI and how to cite it in a reference list.",
  },
  body: {
    tr: `
## DOI nedir

DOI (Dijital Nesne Tanımlayıcısı), bir makalenin, kitabın veya veri setinin kalıcı dijital adresidir. Derginin sitesi değişse ya da yayıncı başka bir platforma geçse bile DOI bağlantısı çalışmaya devam eder ve okuru doğru sayfaya götürür.

## Nasıl yapılandırılmıştır

DOI iki bölümden oluşur ve her zaman 10 ile başlar, örneğin 10.1234/journal.2026.015. Eğik çizgiden önceki kısım yayıncının önekidir; sonrasındaki kısım yayıncının o makaleye verdiği sonektir. Tam bağlantı şöyle yazılır: https://doi.org/10.1234/journal.2026.015

## Kim atar

DOI'yi yazar değil, yayıncı veya dergi atar. Bunun için yayıncı bir kayıt ajansına üye olur (akademik yayınlar için en bilineni Crossref'tir), bir önek alır ve her makalenin üst verisini kaydeder: başlık, yazarlar, dergi, yıl ve sayfa adresi. Bu yüzden yazar olarak ayrıca DOI "satın alamazsınız": onu makalenizi yayımlayan dergi verir.

## Neden önemli

- Atıf veri tabanları makaleyi DOI ile kesin olarak tanır, bağlantılar kaybolmaz.
- Birçok dergi kaynakçada DOI gösterilmesini ister.
- ORCID veya Google Scholar profiline makale, DOI ile saniyeler içinde eklenebilir.
- DOI ciddi bir derginin göstergelerinden biridir ama kalite garantisi değildir: yırtıcı dergiler de alabilir.

## DOI nasıl kontrol edilir

- Numarayı doi.org sitesine girin: tam olarak sizin makalenizin sayfası açılmalı.
- search.crossref.org üzerinden başlık veya yazarla aratın ve bilgileri karşılaştırın.
- Bağlantı çalışmıyorsa ya da başka bir makale açıyorsa dergi editöryalına başvurun.

## Nasıl gösterilir

Kaynakçada DOI'yi tam bağlantı biçiminde, sonunda nokta olmadan yazın: https://doi.org/10.xxxx/xxxxx. Dergi seçerken önceden sorun: makalelere DOI veriliyor mu ve hangi ajans üzerinden.
  `,
    kk: `
## DOI дегеніміз не

DOI (Digital Object Identifier) — мақаланың, кітаптың немесе деректер жиынтығының тұрақты цифрлық мекенжайы. Журнал сайты өзгеріп, баспагер басқа платформаға көшсе де, DOI сілтемесі жұмыс істеуді жалғастырады және оқырманды дұрыс бетке жеткізеді.

## Ол қалай құрылады

DOI екі бөліктен тұрады және әрқашан 10 санмен басталады, мысалы: 10.1234/journal.2026.015. Қиғаш сызыққа дейінгі бөлік — баспагердің префиксі, одан кейінгісі — баспагердің дәл осы мақалаға берген суффиксі. Толық сілтеме былай жазылады: https://doi.org/10.1234/journal.2026.015

## Оны кім береді

DOI-ді автор емес, баспагер немесе журнал береді. Ол үшін баспагер тіркеу агенттігіне мүше болады (ғылыми жарияланымдар үшін ең танымалы — Crossref), префикс алады және әр мақаланың деректерін: атауын, авторларын, журналды, жылды және бет мекенжайын тіркейді. Сондықтан автор ретінде сіз DOI-ді бөлек «сатып ала алмайсыз»: оны мақалаңызды жариялаған журнал береді.

## Бұл неге маңызды

- Дәйексөз базалары мақаланы DOI арқылы дәл таниды, сілтемелер жоғалмайды.
- Көптеген журналдар әдебиеттер тізімінде DOI көрсетуді талап етеді.
- ORCID және Google Scholar профильдеріне мақаланы DOI арқылы бірнеше секундта қосуға болады.
- DOI — журналдың жайдылығының белгілерінің бірі, бірақ сапа кепілі емес: оны жыртқыш журналдар да ала алады.

## DOI-ді қалай тексеру керек

- Нөмірді doi.org сайтына енгізіңіз: дәл сіздің мақалаңыздың беті ашылуы керек.
- search.crossref.org арқылы атау немесе автор бойынша іздеп, деректерді салыстырыңыз.
- Сілтеме жұмыс істемесе немесе басқа мақаланы ашса, журнал редакциясына жүгініңіз.

## Қалай көрсету керек

Әдебиеттер тізімінде DOI-ді толық сілтеме түрінде, соңында нүктесіз жазыңыз: https://doi.org/10.xxxx/xxxxx. Журнал таңдағанда алдын ала сұраңыз: мақалаларға DOI беріле ме және қай агенттік арқылы.
  `,
    uz: `
## DOI nima

DOI (Digital Object Identifier) — maqola, kitob yoki ma’lumotlar to‘plamining doimiy raqamli manzili. Jurnal sayti o‘zgarsa yoki nashriyot boshqa platformaga ko‘chsa ham, DOI havolasi ishlashda davom etadi va o‘quvchini to‘g‘ri sahifaga olib boradi.

## Qanday tuzilgan

DOI ikki qismdan iborat va har doim 10 raqami bilan boshlanadi, masalan: 10.1234/jurnal.2026.015. Qiya chiziqdan oldingi qism — nashriyot prefiksi, keyingisi — nashriyot aynan shu maqolaga bergan suffiks. To‘liq havola shunday yoziladi: https://doi.org/10.1234/jurnal.2026.015

## Kim beradi

DOI ni muallif emas, balki nashriyot yoki jurnal beradi. Buning uchun nashriyot ro‘yxatga olish agentligiga a’zo bo‘ladi (ilmiy nashrlar uchun eng mashhuri — Crossref), prefiks oladi va har bir maqola ma’lumotlarini: sarlavha, mualliflar, jurnal, yil va sahifa manzilini ro‘yxatdan o‘tkazadi. Shuning uchun muallif sifatida siz DOI ni alohida “sotib ololmaysiz”: uni maqolangizni chop etgan jurnal taqdim etadi.

## Nega muhim

- Iqtibos bazalari maqolani DOI orqali aniq taniydi, havolalar yo‘qolmaydi.
- Ko‘plab jurnallar adabiyotlar ro‘yxatida DOI ko‘rsatishni talab qiladi.
- ORCID va Google Scholar profillariga maqolani DOI orqali bir necha soniyada qo‘shish mumkin.
- DOI jurnalning jiddiyligi belgilaridan biri, lekin sifat kafolati emas: uni yirtqich jurnallar ham olishi mumkin.

## DOI ni qanday tekshirish kerak

- doi.org saytiga raqamni kiriting: u aynan sizning maqolangiz sahifasini ochishi kerak.
- search.crossref.org orqali sarlavha yoki muallif bo‘yicha qidiring va ma’lumotlar to‘g‘riligini solishtiring.
- Havola ishlamasa yoki boshqa maqolani ochsa, jurnal tahririyatiga murojaat qiling.

## Qanday ko‘rsatish kerak

Adabiyotlar ro‘yxatida DOI ni to‘liq havola ko‘rinishida, oxirida nuqtasiz yozing: https://doi.org/10.xxxx/xxxxx. Jurnal tanlashda oldindan so‘rang: maqolalarga DOI beriladimi va qaysi agentlik orqali.
`,
    ru: `
## Что такое DOI

DOI (Digital Object Identifier) — постоянный цифровой адрес статьи, книги или набора данных. Даже если сайт журнала изменится или издательство переедет на другую платформу, ссылка DOI продолжит работать и приведёт читателя на нужную страницу.

## Как он устроен

DOI состоит из двух частей и всегда начинается с 10, например: 10.1234/journal.2026.015. Часть до косой черты — префикс издателя, после — суффикс, который издатель дал именно этой статье. Полная ссылка выглядит так: https://doi.org/10.1234/journal.2026.015

## Кто его присваивает

DOI присваивает не автор, а издательство или журнал. Для этого издатель вступает в регистрационное агентство (для научных публикаций самое известное — Crossref), получает префикс и регистрирует данные каждой статьи: название, авторов, журнал, год и адрес страницы. Поэтому автор не может «купить» DOI отдельно: его даёт журнал, опубликовавший статью.

## Почему это важно

- Базы цитирования точно распознают статью по DOI, ссылки не теряются.
- Многие журналы требуют указывать DOI в списке литературы.
- В профили ORCID и Google Scholar статья добавляется по DOI за несколько секунд.
- DOI — один из признаков серьёзного журнала, но не гарантия качества: получить его могут и хищные издания.

## Как проверить DOI

- Введите номер на doi.org: должна открыться страница именно вашей статьи.
- Найдите статью по названию или автору на search.crossref.org и сверьте данные.
- Если ссылка не работает или ведёт на другую статью, обратитесь в редакцию журнала.

## Как указывать

В списке литературы пишите DOI полной ссылкой, без точки в конце: https://doi.org/10.xxxx/xxxxx. При выборе журнала заранее спросите, присваивается ли статьям DOI и через какое агентство.
`,
    en: `
## What a DOI is

A DOI (Digital Object Identifier) is a permanent digital address for an article, book or dataset. Even if the journal's site changes or the publisher moves to another platform, the DOI link keeps working and takes the reader to the right page.

## How it is built

A DOI has two parts and always starts with 10, for example 10.1234/journal.2026.015. The part before the slash is the publisher's prefix; the part after it is the suffix the publisher gave to that article. The full link is written as https://doi.org/10.1234/journal.2026.015

## Who assigns it

The publisher or journal assigns the DOI, not the author. The publisher joins a registration agency (Crossref is the best known for scholarly publications), receives a prefix and registers each article's metadata: title, authors, journal, year and page address. As an author you cannot "buy" a DOI separately: it comes from the journal that publishes your paper.

## Why it matters

- Citation databases identify a paper precisely by its DOI, so references are not lost.
- Many journals require DOIs in the reference list.
- You can add a paper to ORCID or Google Scholar by DOI in seconds.
- A DOI is one sign of a serious journal, but not a guarantee of quality: predatory journals can obtain them too.

## How to check a DOI

- Enter the number at doi.org: it should open the page of your own article.
- Search by title or author at search.crossref.org and compare the details.
- If the link fails or opens a different paper, contact the journal's editorial office.

## How to cite it

In a reference list, write the DOI as a full link with no full stop at the end: https://doi.org/10.xxxx/xxxxx. When choosing a journal, ask in advance whether articles receive DOIs and through which agency.
`,
  },
};
