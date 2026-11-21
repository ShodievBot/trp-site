import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "quartiles-citescore-sjr",
  date: "2026-11-10",
  title: {
    tr: "Q1–Q4 kuartilleri, CiteScore ve SJR: ne anlama gelir ve dergi nasıl seçilir",
    kk: "Q1–Q4 квартильдері, CiteScore және SJR: бұл не және журналды қалай таңдау керек",
    uz: "Q1–Q4 kvartillari, CiteScore va SJR: bu nima va jurnalni qanday tanlash kerak",
    ru: "Квартили Q1–Q4, CiteScore и SJR: что это и как выбрать журнал",
    en: "Quartiles Q1–Q4, CiteScore and SJR: what they mean and how to choose a journal",
  },
  description: {
    tr: "Scopus dergi kuartilleri, CiteScore ve SJR göstergelerinin sade dille anlatımı: nasıl hesaplanır, nereden bakılır ve dergi seçiminde nasıl kullanılır.",
    kk: "Scopus журналдарының квартильдері, CiteScore және SJR көрсеткіштері қарапайым тілде: қалай есептеледі, қайдан қарайды және журнал таңдауда қалай қолданылады.",
    uz: "Scopus jurnallarining kvartili, CiteScore va SJR ko‘rsatkichlari oddiy tilda: qanday hisoblanadi, qayerdan ko‘riladi va jurnal tanlashda qanday foydalaniladi.",
    ru: "Квартили журналов Scopus, показатели CiteScore и SJR простыми словами: как считаются, где смотреть и как использовать при выборе журнала.",
    en: "Scopus journal quartiles, CiteScore and SJR in plain language: how they are calculated, where to find them and how to use them when choosing a journal.",
  },
  body: {
    tr: `
## Kuartil nedir

Kuartil, bir derginin kendi alanındaki yerini gösterir. Alandaki tüm dergiler bir göstergeye göre sıralanır ve dört eşit gruba ayrılır. Q1 en üst %25, Q4 en alt %25'tir. Bir dergi birden fazla alana girebilir ve her birinde farklı kuartile sahip olabilir.

## CiteScore

CiteScore, Scopus'un kendi göstergesidir. Dört yıllık bir dönem için hesaplanır: o yıllarda dergi makalelerine yapılan atıfların sayısı, aynı yıllarda yayımlanan belge sayısına bölünür. CiteScore değeri ve derginin yüzdelik dilimi scopus.com/sources sayfasında ücretsiz görülebilir.

## SJR

SJR (SCImago Journal Rank) da Scopus verilerine dayanır ama atıfların "ağırlığını" hesaba katar: saygın bir dergiden gelen atıf daha çok puan alır. SJR ve ona dayalı kuartiller scimagojr.com sitesinde görülebilir.

## Kuartiller neden farklı olabilir

Scopus sayfasındaki yüzdelik dilim CiteScore'a, SCImago'daki kuartil ise SJR'ye göre hesaplanır. Bu yüzden aynı dergi bir kaynakta Q2, diğerinde Q3 olabilir. Kurumunuz veya bilim kurulunuz hangi kaynağı kabul ediyor, önceden öğrenin.

## Dergi nasıl seçilir

- Önce konu uyumunu kontrol edin: dergi sizin alanınızda makale yayımlıyor mu?
- Derginin şu anda Scopus'ta aktif olduğunu ve çıkarılmadığını doğrulayın.
- Gerekli kuartili gereksinimlerinizle karşılaştırın. Q1 ve Q2 dergileri daha talepkârdır, daha çok makaleyi geri çevirir ve daha uzun değerlendirir.
- Değerlendirme süresi, yayın dili ve ücret koşullarını dergi sitesinden okuyun.

## Sonuç

Kuartil, dergi kalitesinin tek ölçüsü değildir ama gereksinimlere uygun yayın seçiminde kullanışlı bir göstergedir. En önemlisi, makale konusunun derginin kapsamıyla uyuşmasıdır.
`,
    kk: `
## Квартиль деген не

Квартиль журналдың өз саласындағы орнын көрсетеді. Бір саладағы барлық журналдар көрсеткіш бойынша реттеліп, төрт тең бөлікке бөлінеді. Q1 — жоғарғы 25%, Q4 — төменгі 25%. Бір журнал бірнеше салага кіріп, оларда түрлі квартильге ие болуы мүмкін.

## CiteScore

CiteScore — Scopus-тың өз көрсеткіші. Ол төрт жылдық кезең үшін есептеледі: сол жылдары журнал мақалаларына жасалған дәйексөздер саны сол жылдары жарияланған құжаттар санына бөлінеді. CiteScore мәні мен журналдың пайыздық орнын scopus.com/sources бетінде тегін көруге болады.

## SJR

SJR (SCImago Journal Rank) да Scopus деректеріне негізделеді, бірақ дәйексөздердің «салмағын» ескереді: беделді журналдан келген дәйексөз көбірек бағаланады. SJR және оған негізделген квартильдер scimagojr.com сайтында қаралуы мүмкін.

## Квартильдер неге ықпалдаспауы мүмкін

Scopus бетіндегі пайыздық орын CiteScore бойынша, ал SCImago сайтындағы квартиль SJR бойынша есептеледі. Сондықтан бір журнал бір дереккөзде Q2, екіншісінде Q3 болуы мүмкін. Ұйымыңыз немесе ғылыми кеңесіңіз қай дереккөзді қабылдайтынын алдын ала анықтаңыз.

## Журналды қалай таңдау керек

- Алдымен тақырып сәйкестігін тексеріңіз: журнал сіздің бағытыңыздағы мақалаларды жариялай ма.
- Журналдың қазір Scopus базасында белсенді екенін және шығарылмағанын көріңіз.
- Қажетті квартильді талаптарыңызбен салыстырыңыз. Q1 мен Q2 журналдарында талап пен қайтарылулар үлесі жоғары, қарау мерзімі ұзағырақ.
- Қарау мерзімін, жарияланым тілін және ақы шарттарын журнал сайтынан оқыңыз.

## Қорытынды

Квартиль — журнал сапасының жалғыз өлшемі емес, бірақ талаптарға сай басылым таңдауда ыңғайлы бағдар. Ең бастысы — мақала тақырыбының журнал бағытына сәйкес келуі.
`,
    uz: `
## Kvartil nima

Kvartil jurnalning o‘z fan yo‘nalishidagi o‘rnini ko‘rsatadi. Bir yo‘nalishdagi barcha jurnallar ko‘rsatkich bo‘yicha tartiblanadi va to‘rt teng qismga bo‘linadi. Q1 — eng yuqori 25 foiz, Q4 — eng quyi 25 foiz. Bitta jurnal bir nechta yo‘nalishga kirishi va ularda turli kvartilga ega bo‘lishi mumkin.

## CiteScore

CiteScore Scopus bazasining o‘z ko‘rsatkichi. U to‘rt yillik davr uchun hisoblanadi: shu yillarda jurnal maqolalariga qilingan iqtiboslar soni shu yillarda chop etilgan hujjatlar soniga bo‘linadi. CiteScore qiymatini va jurnalning foizli o‘rnini (percentile) scopus.com/sources sahifasida bepul ko‘rish mumkin.

## SJR

SJR (SCImago Journal Rank) ham Scopus ma’lumotlariga asoslanadi, lekin iqtiboslarning “vazni”ni hisobga oladi: nufuzli jurnaldan kelgan iqtibos ko‘proq baholanadi. SJR va unga asoslangan kvartillarni scimagojr.com saytida ko‘rish mumkin.

## Nega kvartillar farq qilishi mumkin

Scopus sahifasidagi foizli o‘rin CiteScore bo‘yicha, SCImago saytidagi kvartil esa SJR bo‘yicha hisoblanadi. Shu sababli bitta jurnal bir manbada Q2, boshqasida Q3 bo‘lishi mumkin. Tashkilotingiz yoki ilmiy kengash qaysi manbani talab qilishini oldindan aniqlang.

## Jurnalni qanday tanlash kerak

- Avval mavzu mosligini tekshiring: jurnal sizning yo‘nalishingizdagi maqolalarni chop etadimi.
- Jurnal hozir Scopus bazasida faol ekanini va chiqarib yuborilmaganini ko‘ring.
- Kerakli kvartilni talablaringiz bilan solishtiring. Q1 va Q2 jurnallarda talab va rad etish darajasi yuqoriroq, ko‘rib chiqish muddati uzoqroq bo‘ladi.
- Ko‘rib chiqish muddati, nashr tili va to‘lov shartlarini jurnal saytidan o‘qing.

## Xulosa

Kvartil — jurnal sifatining yagona o‘lchovi emas, lekin talablarga mos nashrni tanlashda qulay mo‘ljal. Eng muhimi — maqola mavzusi jurnal yo‘nalishiga mos kelishi.
`,
    ru: `
## Что такое квартиль

Квартиль показывает место журнала в своей предметной области. Все журналы одной области ранжируют по показателю и делят на четыре равные части. Q1 — верхние 25 %, Q4 — нижние 25 %. Один журнал может входить в несколько областей и иметь в них разные квартили.

## CiteScore

CiteScore — собственный показатель Scopus. Он считается за четырёхлетний период: число цитирований документов журнала за эти годы делится на число документов, опубликованных за те же годы. Значение CiteScore и процентиль журнала можно бесплатно посмотреть на scopus.com/sources.

## SJR

SJR (SCImago Journal Rank) тоже строится на данных Scopus, но учитывает «вес» цитирований: ссылка из авторитетного журнала ценится выше. SJR и квартили на его основе смотрят на сайте scimagojr.com.

## Почему квартили могут расходиться

Процентиль на странице Scopus считается по CiteScore, а квартиль на SCImago — по SJR. Поэтому один и тот же журнал может быть Q2 в одном источнике и Q3 в другом. Заранее уточните, какой источник принимает ваша организация или учёный совет.

## Как выбрать журнал

- Сначала проверьте тематику: публикует ли журнал статьи по вашему направлению.
- Убедитесь, что журнал сейчас активен в Scopus и не исключён.
- Сопоставьте нужный квартиль со своими требованиями. В журналах Q1 и Q2 выше требования и доля отказов, дольше рассмотрение.
- Сроки рассмотрения, язык публикации и условия оплаты читайте на сайте журнала.

## Вывод

Квартиль не единственная мера качества журнала, но удобный ориентир при выборе издания под требования. Главное, чтобы тема статьи соответствовала профилю журнала.
`,
    en: `
## What a quartile is

A quartile shows where a journal stands within its subject area. All journals in the area are ranked by a metric and split into four equal groups. Q1 is the top 25%, Q4 the bottom 25%. A journal can belong to several subject areas and hold a different quartile in each.

## CiteScore

CiteScore is Scopus's own metric. It covers a four-year window: citations received in those years by the journal's documents are divided by the number of documents published in the same years. CiteScore and the journal's percentile are free to view at scopus.com/sources.

## SJR

SJR (SCImago Journal Rank) also uses Scopus data but weights citations: a citation from a prestigious journal counts for more. SJR and the quartiles based on it are available at scimagojr.com.

## Why quartiles can differ

The percentile on the Scopus page is based on CiteScore, while the SCImago quartile is based on SJR. The same journal can therefore be Q2 in one source and Q3 in the other. Find out in advance which source your institution or academic council accepts.

## How to choose a journal

- Check the scope first: does the journal publish papers in your field?
- Make sure the journal is currently active in Scopus and has not been discontinued.
- Match the quartile to your requirements. Q1 and Q2 journals are more demanding, reject more papers and take longer to review.
- Read the review time, language and fee policy on the journal's own site.

## Takeaway

A quartile is not the only measure of quality, but it is a handy guide when you need a journal that meets formal requirements. Above all, your topic must fit the journal's scope.
`,
  },
};
