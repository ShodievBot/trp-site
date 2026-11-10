import type { UsefulArticle } from "@/lib/useful";

export const article: UsefulArticle = {
  slug: "orcid-scopus-id-scholar",
  date: "2026-11-10",
  title: {
    uz: "ORCID, Scopus Author ID va Google Scholar: olim profillarini qanday ochish kerak",
    ru: "ORCID, Scopus Author ID и Google Scholar: как завести профили учёного",
    en: "ORCID, Scopus Author ID and Google Scholar: how to set up your researcher profiles",
  },
  description: {
    uz: "ORCID identifikatorini olish, Scopus Author ID profilini tekshirish va tuzatish, Google Scholar profilini yaratish bo‘yicha bosqichma-bosqich qo‘llanma.",
    ru: "Пошагово: как получить ORCID, проверить и исправить профиль Scopus Author ID и создать профиль в Google Scholar.",
    en: "Step by step: getting an ORCID iD, checking and correcting your Scopus Author ID profile and creating a Google Scholar profile.",
  },
  body: {
    uz: `
## Profillar nima uchun kerak

Bir xil familiyali olimlar ko‘p, ism-familiya esa turli tillarda turlicha yoziladi. Shaxsiy identifikatorlar barcha maqolalaringizni aynan sizga bog‘laydi, iqtiboslar to‘g‘ri hisoblanadi, jurnallar va grant tashkilotlari esa sizni tez topadi.

## ORCID

ORCID — bepul, 16 raqamli xalqaro identifikator. Ko‘p jurnallar maqola topshirishda uni majburiy so‘raydi.

- orcid.org saytida ro‘yxatdan o‘ting, ismingizni pasportdagi lotin yozuvi bilan kiriting.
- Ish joyi, ta’lim va ismingizning boshqa yozilish variantlarini qo‘shing.
- Maqolalarni DOI orqali yoki Scopus, Crossref bilan bog‘lash orqali import qiling.
- Profil ko‘rinishini “hamma uchun ochiq” qilib qo‘ying.

## Scopus Author ID

Bu profilni o‘zingiz yaratmaysiz: Scopus uni birinchi indekslangan maqolangizdan so‘ng avtomatik ochadi. Sizning vazifangiz — uni tekshirish.

- scopus.com saytida bepul “Author search” orqali o‘zingizni toping.
- Maqolalaringiz ikki yoki undan ortiq profilga bo‘linib ketgan bo‘lsa, “Request to merge authors” orqali birlashtirishni so‘rang.
- Begona maqola qo‘shilgan yoki tashkilot noto‘g‘ri bo‘lsa, Author Feedback Wizard orqali tuzatish yuboring.
- Scopus profilini ORCID bilan bog‘lang.

## Google Scholar

- scholar.google.com saytida Google hisobingiz bilan kiring va “Mening profilim”ni oching.
- Tashkilotingiz va imkon bo‘lsa, ish (korporativ) elektron pochtangizni ko‘rsating: tasdiqlangan profil qidiruvda ko‘rinadi.
- Tizim taklif qilgan maqolalardan faqat o‘zingiznikini tanlang.
- Profilni ochiq qiling va yangi maqolalarni qo‘lda tasdiqlash rejimini tanlang, shunda begona ishlar qo‘shilib qolmaydi.

## Maslahatlar

- Barcha maqolalarda ism-familiyangizni bir xil yozing.
- Har doim tashkilotning rasmiy inglizcha nomini ko‘rsating.
- Profillarni yiliga kamida bir-ikki marta yangilab turing.
`,
    ru: `
## Зачем нужны профили

Учёных с одинаковыми фамилиями много, а имя на разных языках пишется по-разному. Личные идентификаторы привязывают все статьи именно к вам: цитирования считаются правильно, а журналы и грантовые организации быстро вас находят.

## ORCID

ORCID — бесплатный международный идентификатор из 16 цифр. Многие журналы требуют его при подаче статьи.

- Зарегистрируйтесь на orcid.org, имя укажите латиницей, как в паспорте.
- Добавьте место работы, образование и другие варианты написания имени.
- Импортируйте статьи по DOI или через связь со Scopus и Crossref.
- Сделайте профиль видимым для всех.

## Scopus Author ID

Этот профиль вы не создаёте: Scopus открывает его автоматически после первой проиндексированной статьи. Ваша задача — проверить его.

- Найдите себя через бесплатный поиск авторов (Author search) на scopus.com.
- Если статьи разошлись по двум и более профилям, запросите объединение через Request to merge authors.
- Если добавлена чужая статья или неверно указана организация, отправьте исправление через Author Feedback Wizard.
- Свяжите профиль Scopus с ORCID.

## Google Scholar

- Войдите на scholar.google.com под аккаунтом Google и откройте «Мой профиль».
- Укажите организацию и, если есть, рабочую почту: подтверждённый профиль виден в поиске.
- Из предложенных системой статей отметьте только свои.
- Сделайте профиль общедоступным и выберите ручное подтверждение новых статей, чтобы не добавлялись чужие работы.

## Советы

- Пишите имя и фамилию одинаково во всех статьях.
- Всегда указывайте официальное английское название организации.
- Обновляйте профили хотя бы раз-два в год.
`,
    en: `
## Why profiles matter

Many researchers share a surname, and names are spelled differently across languages. Personal identifiers link every paper to you: citations are counted correctly, and journals and funders can find you quickly.

## ORCID

ORCID is a free international 16-digit identifier. Many journals require it at submission.

- Register at orcid.org and enter your name in Latin script as in your passport.
- Add your employment, education and other spellings of your name.
- Import papers by DOI or by linking Scopus and Crossref.
- Set the profile visibility to everyone.

## Scopus Author ID

You do not create this profile: Scopus opens it automatically after your first indexed paper. Your job is to check it.

- Find yourself with the free Author search at scopus.com.
- If your papers are split across two or more profiles, use Request to merge authors.
- If someone else's paper was added or the affiliation is wrong, submit a correction through the Author Feedback Wizard.
- Link your Scopus profile to ORCID.

## Google Scholar

- Sign in at scholar.google.com with a Google account and open My profile.
- Add your institution and, if you have one, your institutional email: a verified profile appears in search.
- From the suggested papers, select only your own.
- Make the profile public and choose manual confirmation of new papers so that other people's work is not added.

## Tips

- Spell your name the same way in every paper.
- Always use the official English name of your institution.
- Update your profiles at least once or twice a year.
`,
  },
};
