import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "dgu-patent",
  date: "2026-11-10",
  title: {
    tr: "Yazılım tescil belgesi (DGU) ve patent: bir programı veya icadı nasıl tescil ettirirsiniz",
    kk: "ДГУ куәлігі және патент: бағдарламаны немесе өнертабысты қалай тіркеу керек",
    uz: "DGU guvohnomasi va patent: dastur yoki ixtironi qanday ro‘yxatdan o‘tkazish kerak",
    ru: "Свидетельство ДГУ и патент: как зарегистрировать программу или изобретение",
    en: "Software certificate (DGU) and patent: how to register a program or an invention",
  },
  description: {
    tr: "Bilgisayar programı tescil belgesinin (DGU) icat ve faydalı model patentinden farkı, gereken belgeler ve tescil aşamaları.",
    kk: "ЭЕМ-ге арналған бағдарламаға берілген ДГУ куәлігі мен өнертабыс және пайдалы модель патентінің айырмашылығы, қажетті құжаттар мен тіркеу кезеңдері.",
    uz: "EHM dasturi uchun DGU guvohnomasi, ixtiro va foydali model patenti o‘rtasidagi farq, kerakli hujjatlar va ro‘yxatdan o‘tkazish bosqichlari.",
    ru: "Чем свидетельство ДГУ на программу для ЭВМ отличается от патента на изобретение и полезную модель, какие нужны документы и этапы регистрации.",
    en: "How a software registration certificate (DGU) differs from an invention or utility model patent, which documents are needed and how registration works.",
  },
  body: {
    tr: `
## Hangi belge neyi korur

- DGU belgesi, bir bilgisayar programının veya veri tabanının resmî tescilini doğrular. Yazılım, doğduğu andan itibaren telif hakkıyla korunur; tescil ise yazarlığın kanıtlanmasını kolaylaştırır.
- İcat patenti, teknik bir çözümü korur: aygıt, yöntem veya madde. Çözümün yeni olması, icat basamağı taşıması ve sanayide uygulanabilir olması gerekir.
- Faydalı model patenti, aygıtlarla ilgili teknik çözümler içindir; koşullar daha hafif, inceleme genellikle daha hızlıdır.
- Endüstriyel tasarım, ürünün görünüşünü korur.

## Nereye başvurulur

Özbekistan'da fikri mülkiyet nesnelerinin tescilini Adalet Bakanlığı bünyesindeki yetkili organ yürütür. Başvuru formları, harç tutarları ve süreler değişir; bunları resmî siteden veya patent vekilinden öğrenin.

## Yazılımı tescil ettirmek (DGU)

- Yazarları ve hak sahibini belirleyin: program bir iş görevi kapsamında geliştirildiyse hak sahibi işveren olabilir.
- Başvuruyu, program özetini ve programı tanımlayıcı materyalleri (genellikle kaynak kodun bir bölümünü) hazırlayın.
- Harcı ödeyin ve belgeleri teslim edin.
- İncelemeden sonra program sicile yazılır ve belge verilir.

## İcat patenti almak

- Patent araştırması yapın: aynı çözüm daha önce tescil edilmiş mi.
- İcat açıklamasını, taleplerini (claims), çizimlerini ve özetini hazırlayın. Talepler koruma kapsamını belirler; bu yüzden dikkatle yazılmaları çok önemli.
- Başvuruyu yapın. Önce şekli inceleme, sonra esaslı inceleme yapılır.
- Olumlu karardan sonra patent verilir; geçerliliğini korumak için yıllık harçlar ödenir.

## En temel kural

Başvuru yapılıncaya kadar çözümün özünü açıkça açıklamayın. Bir makalede, konferans sunumunda veya tezde ayrıntılı anlatım yeniliği yok edebilir. Önce başvuru, sonra yayın.

## Bilim insanına ne kazandırır

DGU belgeleri ve patentler bilimsel raporlarda, değerlendirmelerde ve hibe başvurularında dikkate alınır; geliştirme ticarileştirildiğinde de haklarınızı korur. Karmaşık durumlarda patent vekilinden yararlanın.
  `,
    kk: `
## Қай құжат нені қорғайды

- ДГУ куәлігі — ЭЕМ-ге арналған бағдарламаның немесе деректер қорының ресми тіркелгенін растайды. Бағдарлама авторлық құқықпен қорғалады және қорғау бағдарлама жасалған сәттен басталады; тіркеу болса авторлықты дәлелдеуді жеңілдетеді.
- Өнертабыс патенті — техникалық шешімді: құрылғыны, әдісті немесе затты қорғайды. Ол үшін шешім жаңа, ойлап табушылық деңгейге ие және өнеркәсіпте қолданылатын болуы керек.
- Пайдалы модель патенті — құрылғыларға қатысты техникалық шешімдерге арналған, талаптары жеңілдеу және қарау әдеттегіден жылдамырақ.
- Өнеркәсіптік үлгі — бұйымның сыртқы көрінісін қорғайды.

## Қайда жүгіну керек

Өзбекстанда зияткерлік меншік нысандарын тіркеумен Әділет министрлігі жүйесіндегі уәкілетті орган айналысады. Өтініш бланкілері, баж мөлшері мен мерзімдер өзгеріп отырады, сондықтан оларды ресми сайттан немесе патенттік өкілден анықтаңыз.

## Бағдарламаны тіркеу (ДГУ)

- Авторлар мен құқық иесін анықтаңыз: бағдарлама еңбек міндеті аясында жасалған болса, құқық иесі жұмыс беруші болуы мүмкін.
- Өтінішті, бағдарлама рефератын және идентификациялайтын материалдарды (әдетте бағдарлама кодының бір бөлігін) дайындаңыз.
- Мемлекеттік бажды төлеп, құжаттарды тапсырыңыз.
- Сараптамадан кейін бағдарлама реестрге енгізіліп, куәлік беріледі.

## Өнертабысқа патент алу

- Патенттік іздеуден өткізіңіз: ұқсас шешім бұрын тіркелген бе.
- Өнертабыс сипаттамасын, формуласын, сызбалары мен рефератын дайындаңыз. Формула қорғау ауқымын анықтайды, сондықтан оны мұқият жазу аса маңызды.
- Өтінішті тапсырыңыз. Алдымен ресми сараптама, содан кейін мазмұны бойынша сараптама жүргізіледі.
- Оң қаулыдан кейін патент беріледі; оның күшінде сақтау үшін жыл сайынғы баждар төленеді.

## Ең басты ереже

Өтініш тапсырылғанға дейін шешімнің мәнін жария айтпаңыз. Мақалада, конференция баяндамасында немесе диссертацияда толық баяндау жаңалықты жоғалтуға әкелуі мүмкін. Алдымен өтініш, сосын жарияланым.

## Ғалымға не береді

ДГУ куәлігі мен патенттер ғылыми есептерде, аттестацияда және грант өтініштерінде есепке алынады, ал жасалманы коммерцияландырғанда құқықтарыңызды қорғайды. Күрделі жағдайларда патенттік өкілдің көмегін пайдаланыңыз.
  `,
    uz: `
## Qaysi hujjat nimani himoya qiladi

- DGU guvohnomasi — EHM uchun dastur yoki ma’lumotlar bazasini rasmiy ro‘yxatdan o‘tkazilganini tasdiqlaydi. Dastur mualliflik huquqi bilan himoyalanadi va himoya dastur yaratilgan paytdan boshlanadi; ro‘yxatdan o‘tkazish esa mualliflikni isbotlashni osonlashtiradi.
- Ixtiro patenti — texnik yechimni: qurilma, usul yoki moddani himoya qiladi. Buning uchun yechim yangi, ixtirochilik darajasiga ega va sanoatda qo‘llaniladigan bo‘lishi kerak.
- Foydali model patenti — qurilmaga oid texnik yechimlar uchun, talablari yengilroq va ko‘rib chiqish odatda tezroq.
- Sanoat namunasi — buyumning tashqi ko‘rinishini himoya qiladi.

## Qayerga murojaat qilinadi

O‘zbekistonda intellektual mulk obyektlarini ro‘yxatdan o‘tkazish bilan Adliya vazirligi tizimidagi vakolatli organ shug‘ullanadi. Ariza shakllari, boj miqdorlari va muddatlar o‘zgarib turadi, shuning uchun ularni rasmiy saytdan yoki patent vakilidan aniqlang.

## Dasturni ro‘yxatdan o‘tkazish (DGU)

- Mualliflar va huquq egasini aniqlang: dastur ish vazifasi doirasida yaratilgan bo‘lsa, huquq egasi ish beruvchi bo‘lishi mumkin.
- Ariza, dastur referati va identifikatsiya qiluvchi materiallarni (odatda dastur kodining bir qismi) tayyorlang.
- Davlat bojini to‘lang va hujjatlarni topshiring.
- Ekspertizadan so‘ng dastur reyestrga kiritiladi va guvohnoma beriladi.

## Ixtiroga patent olish

- Patent izlanishini o‘tkazing: xuddi shunday yechim avval ro‘yxatdan o‘tmaganmi.
- Ixtiro tavsifi, formulasi, chizmalar va referatni tayyorlang. Formula himoya hajmini belgilaydi, shuning uchun uni puxta yozish juda muhim.
- Ariza topshiring. Avval rasmiy ekspertiza, so‘ng mazmun bo‘yicha ekspertiza o‘tkaziladi.
- Ijobiy qarordan so‘ng patent beriladi; uni kuchda saqlash uchun yillik bojlar to‘lanadi.

## Eng muhim qoida

Patent topshirilguncha yechim mohiyatini ochiq e’lon qilmang. Maqola, konferensiya ma’ruzasi yoki dissertatsiyada batafsil bayon qilish yangilikni yo‘qotishga olib kelishi mumkin. Avval ariza, keyin nashr.

## Olimga nima beradi

DGU guvohnomasi va patentlar ilmiy hisobotlarda, attestatsiyada va grant arizalarida hisobga olinadi, ishlanmani tijoratlashtirishda esa huquqlaringizni himoya qiladi. Murakkab holatlarda patent vakili yordamidan foydalaning.
`,
    ru: `
## Какой документ что защищает

- Свидетельство ДГУ подтверждает официальную регистрацию программы для ЭВМ или базы данных. Программа охраняется авторским правом с момента создания, а регистрация упрощает доказательство авторства.
- Патент на изобретение защищает техническое решение: устройство, способ или вещество. Решение должно быть новым, иметь изобретательский уровень и быть промышленно применимым.
- Патент на полезную модель выдают на технические решения, относящиеся к устройствам; требования мягче, рассмотрение обычно быстрее.
- Промышленный образец защищает внешний вид изделия.

## Куда обращаться

В Узбекистане регистрацией объектов интеллектуальной собственности занимается уполномоченный орган в системе Министерства юстиции. Формы заявок, размеры пошлин и сроки меняются, поэтому уточняйте их на официальном сайте или у патентного поверенного.

## Регистрация программы (ДГУ)

- Определите авторов и правообладателя: если программа создана в рамках служебных обязанностей, правообладателем может быть работодатель.
- Подготовьте заявление, реферат программы и идентифицирующие материалы (обычно часть исходного кода).
- Оплатите пошлину и подайте документы.
- После экспертизы программу вносят в реестр и выдают свидетельство.

## Патент на изобретение

- Проведите патентный поиск: не зарегистрировано ли такое решение раньше.
- Подготовьте описание, формулу изобретения, чертежи и реферат. Формула определяет объём охраны, поэтому её важно написать тщательно.
- Подайте заявку. Сначала проходит формальная экспертиза, затем экспертиза по существу.
- После положительного решения выдают патент; для поддержания его в силе платят ежегодные пошлины.

## Главное правило

Не раскрывайте суть решения до подачи заявки. Подробное изложение в статье, докладе на конференции или диссертации может лишить решение новизны. Сначала заявка, потом публикация.

## Что это даёт учёному

Свидетельства ДГУ и патенты учитываются в научных отчётах, при аттестации и в заявках на гранты, а при коммерциализации разработки защищают ваши права. В сложных случаях обращайтесь к патентному поверенному.
`,
    en: `
## Which document protects what

- A DGU certificate confirms official registration of a computer program or database in Uzbekistan. Software is protected by copyright from the moment it is created; registration makes authorship easier to prove.
- An invention patent protects a technical solution: a device, a method or a substance. The solution must be new, involve an inventive step and be industrially applicable.
- A utility model patent covers technical solutions relating to devices, with lighter requirements and usually a faster examination.
- An industrial design protects the appearance of a product.

## Where to apply

In Uzbekistan intellectual property is registered by the authorised body within the Ministry of Justice. Application forms, fees and time limits change, so check them on the official site or with a patent attorney.

## Registering software (DGU)

- Identify the authors and the rights holder: if the program was created as part of a job, the employer may hold the rights.
- Prepare the application, an abstract of the program and identifying materials (usually part of the source code).
- Pay the fee and file the documents.
- After examination the program is entered in the register and a certificate is issued.

## Patenting an invention

- Run a patent search to see whether the same solution has been registered before.
- Prepare the description, claims, drawings and abstract. The claims define the scope of protection, so they need careful drafting.
- File the application. A formal examination comes first, then a substantive one.
- After a positive decision the patent is granted; annual fees keep it in force.

## The key rule

Do not disclose the essence of the solution before filing. A detailed account in a paper, conference talk or dissertation can destroy novelty. File first, publish afterwards.

## What it gives a researcher

DGU certificates and patents count in research reports, assessments and grant applications, and they protect your rights when the work is commercialised. For complex cases, use a patent attorney.
`,
  },
};
