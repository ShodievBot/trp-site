import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "check-journal-scopus",
  date: "2026-11-21",
  title: {
    tr: "Bir dergiyi Scopus veri tabanında kontrol etme: adım adım kılavuz",
    kk: "Журналды Scopus базасында тексеру: қадамдық нұсқаулық",
    uz: "Jurnalni Scopus bazasida tekshirish: bosqichma-bosqich qo‘llanma",
    ru: "Как проверить журнал в Scopus: пошаговая инструкция",
    en: "How to check a journal in Scopus: a step-by-step guide",
  },
  description: {
    tr: "Bir derginin gerçekten Scopus veri tabanında olup olmadığını resmî scopus.com sitesinde dakikalar içinde kontrol etme yöntemleri ve sahte sitelerden korunma kuralları.",
    kk: "Журналдың Scopus базасында бар-жоғын ресми scopus.com сайтында бірнеше минутта тексеру жолдары және жалған сайттардан сақтану ережелері.",
    uz: "Jurnal haqiqatan Scopus bazasidami — buni rasmiy scopus.com saytida bir necha daqiqada tekshirish usullari va soxta saytlardan saqlanish qoidalari.",
    ru: "Проверка журнала на индексацию в Scopus на официальном сайте scopus.com за несколько минут, а также правила защиты от поддельных сайтов.",
    en: "Verifying a journal's Scopus indexing on the official scopus.com site in minutes, plus how to avoid fake websites.",
  },
  body: {
    tr: `
## Yalnızca resmî kaynak: scopus.com

Bir derginin Scopus'ta olup olmadığını kontrol etmenin tek güvenilir yolu resmî sitedir. Scopus'a tam erişim ücretlidir, ancak derginin veri tabanında bulunup bulunmadığını ücretsiz kontrol edebilirsiniz: "Sources" bölümü (scopus.com/sources) veya Scopus Preview aracılığıyla.

## Kontrol adımları

- scopus.com/sources sayfasını açın ve "Search for a source title" alanını bulun.
- Dergi adını veya ISSN'sini girin ve arama sonucunu açın.
- Dergi bulunursa alanını, yayıncısını ve kapsam yıllarını ("Coverage") görürsünüz — yani veri tabanına ne zaman alındığını.
- Dergi bulunmuyorsa veya "Inactive" / "Discontinued" durumundaysa, bu derginin yeni makaleleri artık veri tabanında dizinlenmiyor demektir. Böyle bir dergiye makale göndermeyin.

## Sahtekârlık ve sahte listeler konusunda dikkatli olun

- "Scopus dergi listesi" olarak dağıtılan pdf dosyaları ve siteler resmî değildir — güncel olmayan veya sahte olabilirler.
- Bir dergi sitesinde Scopus logosu kullanılması dizinlendiğini kanıtlamaz: logoyu koyanın kim olduğunu kimse kontrol etmez.
- Makaleyi birkaç günde kabul edeceklerini vaat eden "dergi ajanlıkları" genellikle yırtıcı yayıncılık belirtileri taşır.
- Kontrol sonucunun ekran görüntüsünü saklayın: yazar için kanıt olur.

## Yayıncıyı da kontrol edin

Dergi Scopus'ta olsa bile yayıncı hakkında kısa bir araştırma yapın: kuruluş ne kadar süredir faaliyette, editör kurulu ve yayın ilkeleri açıkça listeleniyor mu, makaleler DOI alıyor mu. Güvenilir bir dergi kendisi hakkında açık bilgi verir.

## Size nasıl yardımcı oluruz

Çalıştığımız her derginin veri tabanındaki durumunu, kuartilini ve yayıncı geçmişini kontrol ederiz. Dergi seçimi danışmanlığı için talep bırakın.
`,
    kk: `
## Тек ресми дереккөз: scopus.com

Журналдың Scopus-қа кіретінін тексерудің жалғыз сенімді жолы — ресми сайт. Scopus-қа толық қолжетімділік ақылы, бірақ журналдың базада бар-жоғын тегін тексеруге болады: «Sources» бөлімі (scopus.com/sources) немесе Scopus Preview арқылы.

## Тексеру қадамдары

- scopus.com/sources бетін ашып, «Search for a source title» өрісін табыңыз.
- Журнал атауын немесе ISSN-ін енгізіп, іздеу нәтижесін ашыңыз.
- Журнал табылса, оның саласы, баспасы және қамтудың («Coverage») жылдары көрінеді — яғни базаға қашан енгізілгені.
- Журнал табылмаса немесе «Inactive» / «Discontinued» күйінде болса — бұл журналға жаңа мақалалар енді базада индекстелмейді деген сөз. Мұндай журналға мақала берген дұрыс емес.

## Жалған сайттардан және «тізімдерден» сақ болыңыз

- «Scopus журналдар тізімі» деп таратылатын pdf файлдары мен сайттар ресми емес — олар ескірген немесе жалған болуы мүмкін.
- Журнал сайтындағы Scopus логотипі оның базада бар екенін дәлелдемейді: логотипті кім қойғанын ешкім тексермейді.
- Мақаланы бірнеше күнде қабылдайтынын уағдайлаған «журналдық агенттіктер» әдетте жыртқыш басылым белгілерін көрсетеді.
- Тексеру нәтижесінің скриншотын сақтап қойыңыз: ол автор үшін дәлел болады.

## Баспаны да тексеріңіз

Журнал Scopus-та болса да, баспа туралы қысқаша мәлімет жинаңыз: ұйым қашаннан жұмыс істейді, редакция мен саясат ашық көрсетілген бе, мақалаларға DOI беріле ме. Сенімді журнал өзі туралы ашық айтады.

## Біз көмектесеміз

Бізбен жұмыс істейтін әр журналдың базадағы күйін, квартилін және баспа тарихын тексеріп отырамыз. Журнал таңдау бойынша кеңес алу үшін өтініш қалдырыңыз.
`,
    uz: `
## Faqat rasmiy manba: scopus.com

Jurnal Scopus bazasida ekanini tekshirishning yagona ishonchli usuli — rasmiy sayt. Scopusga to‘liq kirish pullik, lekin jurnalning bazada borligini bepul tekshirish mumkin: «Sources» bo‘limi (scopus.com/sources) yoki Scopus Preview orqali.

## Tekshirish bosqichlari

- scopus.com/sources sahifasiga o‘ting va «Search for a source title» maydonini toping.
- Jurnal nomini yoki ISSN ni kiriting va qidiruv natijasini oching.
- Jurnal haqiqatan topilsa, uning sohasi, nashriyoti va «Coverage» (qamrov) yillari ko‘rinadi — bu bazaga qachon kiritilganini ko‘rsatadi.
- Jurnalni topilmasa yoki «Inactive» / «Discontinued» statusida bo‘lsa — bu jurnal endi bazada yangi maqolalar indekslanmaydi degani. Bunday jurnalga maqola bermang.

## Sovunlar va soxta saytlardan ogoh bo‘ling

- «Scopus jurnal ro‘yxati» deb tarqatilgan pdf va saytlar rasmiy emas — ular eskirgan yoki soxta bo‘lishi mumkin.
- Jurnalning o‘z sayti Scopus logotipini ishlatishi bazada borligini isbotlamaydi: logotipni kim qo‘yganini tekshirmaydi.
- Maqola qabulini bir necha kunda va’da qilgan «jurnal agentliklari» odatda xyunchchilik belgilaridir.
- Tekshiruv natijasi skrinshotini saqlab qo‘ying: u muallif uchun dalil bo‘ladi.

## Nashriyotni ham tekshiring

Jurnal Scopusda bo‘lsa ham, nashriyot haqida qisqa ma’lumot yig‘ing: tashkilot qachondan beri faoliyat yuritadi, jurnalda muharririyat va redaksiya siyosati ochiq ko‘rinadimi, maqolalar DOI bilan chiqadimi. Ishonchli jurnal o‘zi haqida ochiq ma’lumot beradi.

## Sizga yordam beramiz

Biz ishlatadigan har bir jurnalning bazadagi holati, kvartili va nashriyot tarixini tekshirib boramiz. Jurnal tanlash bo‘yicha konsultatsiya olish uchun ariza qoldiring.
`,
    ru: `
## Только официальный источник: scopus.com

Единственный надёжный способ проверить, входит ли журнал в Scopus, — официальный сайт. Полный доступ к Scopus платный, но наличие журнала в базе проверяется бесплатно: через раздел «Sources» (scopus.com/sources) или Scopus Preview.

## Шаги проверки

- Откройте страницу scopus.com/sources и найдите поле «Search for a source title».
- Введите название журнала или его ISSN и откройте результат поиска.
- Если журнал найден, вы увидите его область, издательство и годы покрытия («Coverage») — то есть, когда журнал был включён в базу.
- Если журнал не найден или имеет статус «Inactive» / «Discontinued», новые статьи этого журнала в базе больше не индексируются. Статью в такой журнал подавать не стоит.

## Осторожно: поддельные сайты и «списки»

- Распространяемые под видом «списка журналов Scopus» pdf-файлы и сайты не являются официальными — они могут быть устаревшими или поддельными.
- Использование логотипа Scopus на сайте журнала не доказывает индексацию: никто не проверяет, кто разместил логотип.
- «Журнальные агентства», обещающие принятие статьи за несколько дней, обычно имеют признаки хищнических изданий.
- Сохраняйте скриншот результата проверки: он послужит доказательством для автора.

## Проверьте и издательство

Даже если журнал в Scopus, соберите короткую справку об издательстве: как давно работает организация, открыто ли представлены редакция и политика, выходит ли DOI для статей. Надёжный журнал открыто рассказывает о себе.

## Мы поможем

Мы проверяем статус в базе, квартиль и историю издательства каждого журнала, с которым работаем. Оставьте заявку, чтобы получить консультацию по выбору журнала.
`,
    en: `
## Only the official source: scopus.com

The only reliable way to check whether a journal is indexed in Scopus is the official website. Full access to Scopus is paid, but checking a journal's presence in the database is free: via the \"Sources\" section (scopus.com/sources) or Scopus Preview.

## Steps

- Open scopus.com/sources and find the \"Search for a source title\" field.
- Enter the journal title or its ISSN and open the search result.
- If the journal is found, you will see its subject area, publisher and coverage years — that is, when it entered the database.
- If the journal is missing or marked \"Inactive\" / \"Discontinued\", its new articles are no longer indexed in the database. Do not submit your paper to such a journal.

## Watch out for fakes and fake lists

- PDFs and websites circulated as \"the list of Scopus journals\" are not official — they may be outdated or fake.
- A journal's own website displaying the Scopus logo proves nothing: nobody verifies who placed the logo.
- \"Journal agencies\" promising acceptance within days usually show the signs of predatory publishers.
- Save a screenshot of the check result: it serves as evidence for the author.

## Check the publisher too

Even if the journal is in Scopus, gather a short background on the publisher: how long the organisation has operated, whether the editorial board and policies are openly listed, whether articles get DOIs. A trustworthy journal is transparent about itself.

## We can help

We verify the database status, quartile and publisher history of every journal we work with. Submit a request for a journal-selection consultation.
`,
  },
};
