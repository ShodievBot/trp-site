import { pick, type LocaleMap } from "@/lib/i18n";
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import { ContactForm } from '@/components/ContactForm';
import { pageMetadata } from '@/lib/seo';

export const revalidate = 300;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page = {
  uz: {
    kicker: 'Bog‘lanish',
    title: 'Ilmiy nashrlar va xizmatlar bo‘yicha murojaat qiling',
    description:
      'Savollaringizni yuboring, mutaxassislarimiz Telegram yoki telefon orqali siz bilan bog‘lanadi.',
    formTitle: 'Ariza qoldiring',
    formText: 'Kerakli maydonlarni to‘ldiring va murojaatingizni yuboring.',
    name: 'Ismingiz',
    phone: 'Telefon raqamingiz',
    service: 'Xizmat turi',
    message: 'Savolingiz yoki izohingiz',
    button: 'Yuborish',
    success: 'Arizangiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.',
    error: 'Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.',
    required: 'Ism va telefon raqamini kiriting.',
    contactsTitle: 'Kontakt ma’lumotlari',
    telegram: 'Telegram',
    telegramGroup: 'Telegram guruhi',
    email: 'Email',
    phoneUz: 'Telefon Uzbekistan',
    phoneTr: 'Telefon Türkiye',
    services: [
      'Scopus nashri',
      'Xalqaro konferensiya',
      'OAK jurnali',
      'Kitob yoki monografiya',
      'Patent / DGU',
      'Boshqa xizmat',
    ],
  },
  ru: {
    kicker: 'Контакты',
    title: 'Свяжитесь с нами по вопросам научных публикаций и услуг',
    description:
      'Отправьте обращение, и наши специалисты свяжутся с вами через Telegram или по телефону.',
    formTitle: 'Оставьте заявку',
    formText: 'Заполните необходимые поля и отправьте ваше обращение.',
    name: 'Ваше имя',
    phone: 'Ваш телефон',
    service: 'Тип услуги',
    message: 'Ваш вопрос или комментарий',
    button: 'Отправить',
    success: 'Ваша заявка принята. Мы скоро свяжемся с вами.',
    error: 'Произошла ошибка. Пожалуйста, попробуйте позже.',
    required: 'Введите имя и номер телефона.',
    contactsTitle: 'Контактная информация',
    telegram: 'Telegram',
    telegramGroup: 'Telegram-группа',
    email: 'Email',
    phoneUz: 'Телефон Узбекистан',
    phoneTr: 'Телефон Турция',
    services: [
      'Публикация Scopus',
      'Международная конференция',
      'Журнал ОАК',
      'Книга или монография',
      'Патент / ДГУ',
      'Другая услуга',
    ],
  },
  en: {
    kicker: 'Contact',
    title: 'Contact us regarding scientific publications and services',
    description:
      'Send your request, and our specialists will contact you via Telegram or phone.',
    formTitle: 'Submit a request',
    formText: 'Fill in the required fields and send your inquiry.',
    name: 'Your name',
    phone: 'Your phone',
    service: 'Service type',
    message: 'Your question or comment',
    button: 'Send',
    success: 'Your request has been accepted. We will contact you soon.',
    error: 'An error occurred. Please try again later.',
    required: 'Please enter your name and phone number.',
    contactsTitle: 'Contact information',
    telegram: 'Telegram',
    telegramGroup: 'Telegram group',
    email: 'Email',
    phoneUz: 'Phone Uzbekistan',
    phoneTr: 'Phone Türkiye',
    services: [
      'Scopus publication',
      'International conference',
      'Academic journal',
      'Book or monograph',
      'Patent / software certificate',
      'Other service',
    ],
  },
} satisfies LocaleMap<unknown>;

const contacts = {
  email: 'themostreliablepublication@gmail.com',
  telegram: 'https://t.me/Zubayda_Sherzodovna',
  telegramLabel: '@Zubayda_Sherzodovna',
  telegramGroup: 'https://t.me/Scopus_xalqaro_respublika_Oak',
  telegramGroupLabel: 'Scopus_xalqaro_respublika_Oak',
  phoneUz: '+998501076556',
  phoneUzLabel: '+998 50 107 65 56',
  phoneTr: '+905306476809',
  phoneTrLabel: '+90 530 647 68 09',
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = pick(page, locale);
  return pageMetadata({ locale, path: '/contact', title: c.kicker, description: c.description });
}

export default async function ContactPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const c = pick(page, locale);

  return (
    <main>
      <section className="innerHero">

        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section className="contactSection">
        <div className="contactInfoCard">
          <p className="sectionKicker">{c.contactsTitle}</p>
          <h2>{c.contactsTitle}</h2>

          <div className="contactList">
            <a href={`tel:${contacts.phoneUz}`} className="contactItem">
              <span>{c.phoneUz}</span>
              <strong>{contacts.phoneUzLabel}</strong>
            </a>

            <a href={`tel:${contacts.phoneTr}`} className="contactItem">
              <span>{c.phoneTr}</span>
              <strong>{contacts.phoneTrLabel}</strong>
            </a>

            <a href={`mailto:${contacts.email}`} className="contactItem">
              <span>{c.email}</span>
              <strong>{contacts.email}</strong>
            </a>

            <a href={contacts.telegram} className="contactItem" target="_blank" rel="noopener noreferrer">
              <span>{c.telegram}</span>
              <strong>{contacts.telegramLabel}</strong>
            </a>

            <a href={contacts.telegramGroup} className="contactItem" target="_blank" rel="noopener noreferrer">
              <span>{c.telegramGroup}</span>
              <strong>{contacts.telegramGroupLabel}</strong>
            </a>
          </div>
        </div>

        <div className="contactFormCard">
          <p className="sectionKicker">{c.formTitle}</p>
          <h2>{c.formTitle}</h2>
          <p>{c.formText}</p>

          <ContactForm
            locale={locale}
            services={c.services}
            labels={{
              name: c.name,
              phone: c.phone,
              service: c.service,
              message: c.message,
              button: c.button,
              success: c.success,
              error: c.error,
              required: c.required,
            }}
          />
        </div>
      </section>
    </main>
  );
}
