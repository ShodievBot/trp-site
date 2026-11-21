import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "abstract-keywords",
  date: "2026-11-10",
  title: {
    tr: "Özet nasıl yazılır ve anahtar kelimeler nasıl seçilir",
    kk: "Аннотацияны қалай жазу және кілт сөздерді қалай таңдау",
    uz: "Annotatsiya qanday yoziladi va kalit so‘zlar qanday tanlanadi",
    ru: "Как написать аннотацию и подобрать ключевые слова",
    en: "How to write an abstract and choose keywords",
  },
  description: {
    tr: "Bilimsel makale özetinin yapısı, uzunluğu ve bir örneği, anahtar kelime seçimi kuralları ve en sık yapılan hatalar.",
    kk: "Ғылыми мақала аннотациясының құрылымы, көлемі және үлгісі, кілт сөздерді таңдау ережелері мен ең жиі қателер.",
    uz: "Ilmiy maqola annotatsiyasining tuzilishi, hajmi va namunasi, kalit so‘zlarni tanlash qoidalari hamda eng ko‘p uchraydigan xatolar.",
    ru: "Структура, объём и пример аннотации научной статьи, правила подбора ключевых слов и самые частые ошибки.",
    en: "Structure, length and an example of a research abstract, rules for choosing keywords and the most common mistakes.",
  },
  body: {
    tr: `
## Özet neden önemlidir

Özet, makalenin en çok okunan bölümüdür. Editör ve hakemler değerlendirmeye tam olarak özetle başlar; Scopus ve Google Scholar kullanıcıları da tam metni açıp açmayacağına buradan karar verir.

## Yapı

İyi bir özet, dört bölümden oluşan makalenin küçük bir kopyasıdır:

- Amaç: çalışmanın hangi sorunu ele aldığı.
- Yöntemler: kimin veya neyin, hangi yöntemlerle incelendiği.
- Sonuçlar: ana bulgular, mümkünse sayılarla.
- Sonuç: bulguların ne anlama geldiği ve nerede uygulanabileceği.

## Uzunluk ve üslup

Çoğu dergi 150–250 kelimelik özet ister, ancak kesin sınırı derginin yazar kılavuzundan alın. Özette kaynakça atfı, açıklanmamış kısaltmalar ve makalede olmayan bilgiler bulunmamalıdır. Genel ifadeler yerine somut olgular yazın: "sonuçlar tartışıldı" değil, "başarı %18 arttı".

## Anahtar kelimeler

Anahtar kelimeler makalenin aramada bulunmasına yardım eder. Genellikle 4–6 kelime veya ifade verilir.

- Alanınızda yerleşmiş terimleri seçin: meslektaşlarınız arama kutusuna ne yazıyor?
- Çok genel sözcüklerden ("eğitim", "analiz") kaçının, daha kesin ifadeler seçin.
- Başlıktaki kelimeleri aynen tekrarlamayın; onları tamamlayın.
- Her terimin İngilizce yazımını kontrol edin.

## Sık yapılan hatalar

- Özet, girişten kopyalanıyor ve sonuç vermiyor.
- Fazla uzun veya tek cümleden oluşuyor.
- Kelimesi kelimesine çevrilmiş ve İngilizcede anlaşılmıyor.

Özeti en son, makale tamamen bittikten sonra yazın.
`,
    kk: `
## Аннотация неге маңызды

Аннотация — мақаланың ең көп оқылатын бөлігі. Редактор мен рецензент бағалауды дәл аннотациядан бастайды, ал Scopus пен Google Scholar қолданушылары толық мәтінді ашу-ашпауды осы бойынша шешеді.

## Құрылымы

Жақсы аннотация — мақаланың кішігірім көшірмесі, төрт бөліктен тұрады:

- Мақсат: зерттеу қандай мәселені шешеді.
- Әдістер: кім немесе не зерттелді, қандай тәсілдермен.
- Нәтижелер: негізгі табыстар, мүмкін болса сандармен.
- Қорытынды: нәтижелер нені білдіреді және қай жерде қолданылады.

## Көлем және стиль

Көптеген журналдар 150–250 сөздік аннотация сұрайды, бірақ нақты талапты журналдың авторларға арналған нұсқаулығынан алыңыз. Аннотацияда әдебиетке сілтемелер, түсіндірілмеген аббревиатуралар мен мақалада жоқ ақпарат болмауы керек. Жалпы тіркестердің орнына нақты фактілерді жазыңыз: «нәтижелер талқыланды» емес, «үлгерім 18 пайызға өсті».

## Кілт сөздер

Кілт сөздер мақаланы іздеуде табуға көмектеседі. Әдетте 4–6 сөз немесе тіркес беріледі.

- Саладаңызда қабылданған терминдерді таңдаңыз: әріптестеріңіз іздеуге нені жазады.
- Тым жалпы сөздерден («білім», «талдау») сақ болып, нақты тіркестер алыңыз.
- Атаудағы сөздерді толық қайталамай, толықтырыңыз.
- Терминнің ағылшынша дұрыс жазылуын тексеріңіз.

## Жиі кездесетін қателер

- Аннотация кіріспеден көшірілген және нәтижелерді хабарламайды.
- Тым ұзақ немесе бір сөйлемнен тұрады.
- Сөзбе-сөз аударылған және ағылшын тілінде түсініксіз.

Аннотацияны мақала толық дайын болғаннан кейін, ең соңында жазыңыз.
`,
    uz: `
## Annotatsiya nega muhim

Annotatsiya — maqolaning eng ko‘p o‘qiladigan qismi. Muharrir va taqrizchi maqolani aynan annotatsiya bo‘yicha baholay boshlaydi, Scopus va Google Scholar foydalanuvchilari esa to‘liq matnni ochish-ochmaslikni shu yerda hal qiladi.

## Tuzilishi

Yaxshi annotatsiya maqolaning kichik nusxasi bo‘lib, to‘rt qismdan iborat:

- Maqsad: tadqiqot qaysi muammoni hal qiladi.
- Metodlar: kim yoki nima o‘rganildi, qanday usullar bilan.
- Natijalar: asosiy topilmalar, imkon bo‘lsa raqamlar bilan.
- Xulosa: natijalar nimani anglatadi va qayerda qo‘llanadi.

## Hajm va uslub

Ko‘p jurnallar 150–250 so‘zli annotatsiya so‘raydi, lekin aniq talabni jurnalning mualliflar uchun qo‘llanmasidan oling. Annotatsiyada adabiyotlarga havolalar, tushuntirilmagan qisqartmalar va maqolada yo‘q ma’lumotlar bo‘lmasligi kerak. Umumiy iboralar o‘rniga aniq faktlarni yozing: “natijalar muhokama qilindi” emas, balki “o‘zlashtirish 18 foizga oshdi”.

## Kalit so‘zlar

Kalit so‘zlar maqolani qidiruvda topishga yordam beradi. Odatda 4–6 ta so‘z yoki ibora beriladi.

- O‘z sohangizda qabul qilingan atamalarni tanlang: hamkasblaringiz qidiruvga nima deb yozadi.
- Juda umumiy so‘zlardan (“ta’lim”, “tahlil”) qoching, aniqroq iboralar oling.
- Sarlavhadagi so‘zlarni to‘liq takrorlamang, ularni to‘ldiring.
- Ingliz tilidagi atamaning to‘g‘ri yozilishini tekshiring.

## Ko‘p uchraydigan xatolar

- Annotatsiya kirish qismidan ko‘chirib olingan va natijalarni aytmaydi.
- Juda uzun yoki bitta jumladan iborat.
- Tarjima so‘zma-so‘z qilingan va ingliz tilida tushunarsiz.

Annotatsiyani maqola to‘liq tayyor bo‘lgandan keyin, eng oxirida yozing.
`,
    ru: `
## Почему аннотация важна

Аннотация — самая читаемая часть статьи. Редактор и рецензент начинают оценку именно с неё, а пользователи Scopus и Google Scholar по ней решают, открывать ли полный текст.

## Структура

Хорошая аннотация — уменьшенная копия статьи из четырёх частей:

- Цель: какую проблему решает исследование.
- Методы: кого или что изучали и какими способами.
- Результаты: главные находки, по возможности с цифрами.
- Вывод: что означают результаты и где применимы.

## Объём и стиль

Большинство журналов просят аннотацию на 150–250 слов, но точное требование берите из руководства для авторов. В аннотации не должно быть ссылок на литературу, нерасшифрованных сокращений и сведений, которых нет в статье. Вместо общих фраз пишите факты: не «результаты обсуждены», а «успеваемость выросла на 18 %».

## Ключевые слова

Ключевые слова помогают найти статью в поиске. Обычно указывают 4–6 слов или словосочетаний.

- Берите термины, принятые в вашей области: то, что коллеги вводят в поиск.
- Избегайте слишком общих слов («образование», «анализ»), выбирайте точные сочетания.
- Не повторяйте заголовок дословно, а дополняйте его.
- Проверьте правильное написание термина на английском.

## Частые ошибки

- Аннотация скопирована из введения и не сообщает результатов.
- Слишком длинная или состоит из одного предложения.
- Перевод сделан дословно и на английском непонятен.

Пишите аннотацию в самом конце, когда статья полностью готова.
`,
    en: `
## Why the abstract matters

The abstract is the most widely read part of a paper. Editors and reviewers start their assessment there, and Scopus or Google Scholar users decide from it whether to open the full text.

## Structure

A good abstract is a miniature of the paper in four parts:

- Aim: the problem the study addresses.
- Methods: who or what was studied, and how.
- Results: the main findings, with numbers where possible.
- Conclusion: what the results mean and where they apply.

## Length and style

Most journals ask for 150–250 words, but take the exact limit from the author guidelines. An abstract should contain no citations, no unexplained abbreviations and nothing that is absent from the paper. Replace general phrases with facts: not "the results are discussed" but "achievement rose by 18%".

## Keywords

Keywords help readers find the paper. Journals usually ask for 4–6 words or phrases.

- Use the established terms of your field: what colleagues actually type into a search box.
- Avoid very general words ("education", "analysis") and prefer precise phrases.
- Do not simply repeat the title; add to it.
- Check the correct English spelling of each term.

## Common mistakes

- The abstract is copied from the introduction and gives no results.
- It is far too long, or a single sentence.
- It is translated word for word and reads poorly in English.

Write the abstract last, once the paper is finished.
`,
  },
};
