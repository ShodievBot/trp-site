import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "ilmiy-maqola-yozish",
  date: "2026-11-22",
  title: {
    uz: "Ilmiy maqola qanday yoziladi: noldan nashrgacha bosqichma-bosqich",
    ru: "Как написать научную статью: пошагово от идеи до публикации",
    en: "How to write a research article: step by step from idea to publication",
    tr: "Bilimsel makale nasıl yazılır: fikirden yayına adım adım",
  },
  description: {
    uz: "Ilmiy maqolani bosqichma-bosqich yozish: mavzu va jurnalni tanlashdan, IMRAD tuzilishi va til tahririgacha, so‘ngra nashrga topshirishgacha — amaliy qo‘llanma.",
    ru: "Написание научной статьи по шагам: от выбора темы и журнала до структуры IMRAD, языковой правки и подачи в журнал — практическое руководство.",
    en: "Writing a research article step by step: from choosing a topic and journal to the IMRAD structure, language editing and submission — a practical guide.",
    tr: "Bilimsel makale yazımı adım adım: konu ve dergi seçiminden IMRAD yapısına, dil düzenlemesine ve dergiye göndermeye kadar pratik bir rehber.",
  },
  body: {
    uz: `
## 1-bosqich: mavzu va jurnalni birga tanlang

Ko‘p mualliflar avval maqola yozadi, so‘ngra jurnal qidiradi — bu to‘g‘ri emas. Teskari tartib samaraliroq: mavzu taqiq qilmaydigan darajada aniq bo‘lsin, so‘ngra shu mavzuga mos jurnallarni tanlab, aynan ularning talablariga qarab yozishni boshlang. Jurnal tanlashda [UzAkademiya.uz katalogi](https://uzakademiya.uz/ru) va [Scopus tekshiruvi qo‘llanmasi](/uz/useful/check-journal-scopus) yordam beradi.

## 2-bosqich: tuzilish — IMRAD

Xalqaro jurnallar maqolani IMRAD tuzilishida kutadi: kirish, metodlar, natijalar, muhokama. Har bir bo‘limda nima yozilishini va tipik xatolarni [IMRAD haqidagi qo‘llanmamizda](/uz/useful/imrad-structure) batafsil yozganmiz.

## 3-bosqich: sarlavha, annotatsiya, kalit so‘zlar

- Sarlavha aniq bo‘lsin: nima o‘rganildi va qayerda. Ikkitalik savol-belgilar va ortiqcha so‘zlardan saqlaning.
- Annotatsiya mustaqil o‘qiladigan qisqa matn: maqsad, metod, asosiy natija, xulosa.
- Kalit so‘zlar — sizning sohangizdagi odamlar qidiradigan atamalar.

Bular haqida [alohida qo‘llanma](/uz/useful/abstract-keywords) mavjud.

## 4-bosqich: yozish tartibi

Tajriba: maqolani ketma-ket yozmang. Avval jadval va rasmlar shakllantiring (ular «suyak» bo‘ladi), so‘ngra natijalar, metodlar, muhokama va kirishni yozing. Kirish oxirida tayyor bo‘ladi — unda maqsad va mavzuning ahamiyati aniq bo‘lishi kerak.

## 5-bosqich: til va originallik

- Akademik ingliz tili qo‘shimcha tahrir talab qilishi mumkin — bu me’yor, lekin tayyorlangan matn muharririyatga ko‘proq ishonch beradi.
- Iqtiboslar APA yoki jurnal talab qilgan formatda, [to‘g‘ri rasmiylashtirilishi shart](/uz/useful/references-apa-gost).
- Topshirishdan oldin [originallik tekshiruvidan](/uz/useful/plagiarism-originality) o‘tkazing.

## 6-bosqich: topshirish va ko‘rib chiqish

Maqolani jurnalning mualliflar uchun qo‘llanmasiga moslab topshiring. Retsenziya odatda bir necha oy davom etadi: rad etilgan holatda muharrirlarning izohlarini diqqat bilan o‘qib, maqolani yangi jurnalga moslashtiring; «katta qayta ishlash» olingan bo‘lsa — izohlarga batafsil javob yozing.

## Vaqt va yordam

Butun yo‘l — [nashr muddatlari qo‘llanmamizda](/uz/useful/publication-timeline) keltirilgan. Agar jarayonni tezlashtirmoqchi bo‘lsangiz — [bizga yozing](/uz/contact): jurnal tanlash, til tahriri va nashrga qadar hamrohlik qilamiz.
`,
    ru: `
## Шаг 1: тему и журнал выбирайте вместе

Многие авторы сначала пишут статью, а потом ищут журнал — это неэффективно. Правильнее наоборот: сформулируйте узкую тему, подберите под неё журналы и пишите, ориентируясь на их требования. В подборе помогут [каталог UzAkademiya.uz](https://uzakademiya.uz/ru) и [руководство по проверке Scopus](/ru/useful/check-journal-scopus).

## Шаг 2: структура — IMRAD

Международные журналы ждут статью в структуре IMRAD: введение, методы, результаты, обсуждение. Что писать в каждом разделе и каких ошибок избегать — в [нашем руководстве по IMRAD](/ru/useful/imrad-structure).

## Шаг 3: заглавие, аннотация, ключевые слова

- Заглавие должно быть конкретным: что и где исследовано. Без лишних слов и сплошных аббревиатур.
- Аннотация — самостоятельный короткий текст: цель, метод, главный результат, вывод.
- Ключевые слова — термины, по которым коллеги действительно ищут работы в вашей области.

Подробнее — в [отдельном руководстве](/ru/useful/abstract-keywords).

## Шаг 4: порядок написания

Практика: не пишите статью подряд. Сначала оформите таблицы и рисунки (это «скелет»), затем результаты, методы, обсуждение и введение. Введение окончательно дозреет в конце — в нём должны быть ясно видны цель и значимость темы.

## Шаг 5: язык и оригинальность

- Академический английский почти всегда требует редактуры — это нормально, но вычитанный текст вызывает у редакции больше доверия.
- Ссылки оформите в формате APA или того, что требует журнал — [как правильно](/ru/useful/references-apa-gost).
- Перед подачей прогоните текст через [проверку на оригинальность](/ru/useful/plagiarism-originality).

## Шаг 6: подача и рецензирование

Подайте статью по «Руководству для авторов» журнала. Рецензирование обычно занимает месяцы: при отклонении внимательно читайте комментарии редакции и адаптируйте рукопись под новый журнал; при «major revision» — подготовьте подробные ответы на каждое замечание.

## Сроки и помощь

Весь путь со сроками описан в [руководстве по срокам публикации](/ru/useful/publication-timeline). Если хотите ускорить процесс — [напишите нам](/ru/contact): подберём журнал, поможем с языком и доведём статью до публикации.
`,
    en: `
## Step 1: choose the topic and the journal together

Many authors write the article first and only then look for a journal — this is inefficient. Do it the other way round: narrow the topic, find journals that match it and write to their requirements. The [UzAkademiya.uz catalogue](https://uzakademiya.uz/ru) and our [Scopus verification guide](/en/useful/check-journal-scopus) help with the selection.

## Step 2: the structure — IMRAD

International journals expect the IMRAD structure: introduction, methods, results, discussion. What belongs in each section and which mistakes to avoid are covered in our [IMRAD guide](/en/useful/imrad-structure).

## Step 3: title, abstract, keywords

- The title should be specific: what was studied and where. Avoid filler words and stacked abbreviations.
- The abstract is a short standalone text: aim, method, main result, conclusion.
- Keywords are the terms colleagues actually search for in your field.

More on this in our [separate guide](/en/useful/abstract-keywords).

## Step 4: the writing order

Practice tip: do not write the article from beginning to end. First build the tables and figures (they are the skeleton), then write the results, methods, discussion and introduction. The introduction matures last — it must state the aim and the significance of the topic clearly.

## Step 5: language and originality

- Academic English almost always needs editing — that is normal, but an edited manuscript earns the editorial office's trust.
- Format the references in APA or whatever the journal requires — [how to do it right](/en/useful/references-apa-gost).
- Before submission, run the text through an [originality check](/en/useful/plagiarism-originality).

## Step 6: submission and peer review

Submit according to the journal's author guidelines. Peer review usually takes months: if rejected, read the editors' comments carefully and adapt the manuscript to a new journal; on "major revision", prepare detailed responses to every point.

## Timing and support

The whole journey with its timelines is in our [publication timeline guide](/en/useful/publication-timeline). If you want to speed things up — [write to us](/en/contact): we select the journal, help with the language and take the article through to publication.
`,
    tr: `
## Adım 1: konuyu ve dergiyi birlikte seçin

Çok yazar önce makaleyi yazar, sonra dergi arar — bu verimsizdir. Tersini yapmak daha doğru: konuyu daraltın, ona uygun dergileri bulun ve onların gereksinimlerine göre yazın. Seçimde [UzAkademiya.uz kataloğu](https://uzakademiya.uz/ru) ve [Scopus kontrol rehberimiz](/tr/useful/check-journal-scopus) yardımcı olur.

## Adım 2: yapı — IMRAD

Uluslararası dergiler makaleyi IMRAD yapısında bekler: giriş, yöntemler, sonuçlar, tartışma. Her bölümde ne yazılacağını ve tipik hataları [IMRAD rehberimizde](/tr/useful/imrad-structure) ayrıntılı anlattık.

## Adım 3: başlık, özet, anahtar kelimeler

- Başlık spesifik olmalı: neyin, nerede araştırıldığı. Gereksiz kelimelerden ve yığılmış kısaltmalardan kaçının.
- Özet, bağımsız okunabilen kısa bir metin olmalı: amaç, yöntem, ana sonuç, çıkarım.
- Anahtar kelimeler, alanınızda gerçekten aranan terimler olmalıdır.

Ayrıntılar için [ayrı rehberimize](/tr/useful/abstract-keywords) bakın.

## Adım 4: yazma sırası

Pratik öneri: makaleyi baştan sona art arda yazmayın. Önce tablo ve şekilleri hazırlayın (onlar "iskelet"tir), sonra sonuçları, yöntemleri, tartışmayı ve girişi yazın. Giriş en son olgunlaşır — amacı ve konunun önemini net ortaya koymalıdır.

## Adım 5: dil ve özgünlük

- Akademik İngilizce neredeyse her zaman düzenleme ister — bu normaldir; ama düzeltilmiş metin editöryal güveni artırır.
- Kaynakları APA'da veya derginin istediği biçimde [doğru şekilde](/tr/useful/references-apa-gost) verin.
- Göndermeden önce metni [özgünlük kontrolünden](/tr/useful/plagiarism-originality) geçirin.

## Adım 6: gönderme ve hakemlik

Makaleyi derginin "Yazarlar için kılavuz"una uygun şekilde gönderin. Hakem değerlendirmesi genellikle aylar sürer: reddedilirse editör yorumlarını dikkatle okuyun ve metni yeni bir dergiye uyarlayın; "major revision" alırsanız her yoruma ayrıntılı yanıt hazırlayın.

## Süreç ve destek

Tüm yol ve süreleri [yayın zaman çizelgesi rehberimizde](/tr/useful/publication-timeline) bulabilirsiniz. Süreci hızlandırmak isterseniz [bize yazın](/tr/contact): dergi seçimi, dil düzenlemesi ve yayına kadar birlikte ilerleriz.
`,
  },
};
