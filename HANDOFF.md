# HANDOFF — проект trp-site

> Если чат оборвался — отправь этот файл ассистенту целиком.
> Ассистент может читать код сам: https://github.com/ShodievBot/trp-site (raw.githubusercontent.com)
> ⚠️ Репо публичный: НЕ писать сюда пароли, токены, ключи. Не присылать в чат содержимое .env.local.

---

## 1. О проекте
- Сайт: https://trp-site.vercel.app
- Компания: The Most Reliable Publication (TRP) — научные публикации, Scopus, ОАК, конференции, издательство
- GitHub: https://github.com/ShodievBot/trp-site (временно public → потом сделать private)
- Локально: ~/trp-site (macOS, пользователь zavohirsodiev)
- Хостинг: Vercel | БД и хранилище: Supabase
- Контакты на сайте: +998 50 107 65 56, +90 530 647 68 09, t.me/Scopus_xalqaro_respublika_Oak,
  themostreliablepublication@gmail.com

## 2. Как работаем
- Ассистент даёт команды → пользователь выполняет в терминале → присылает вывод.
- Новая задача = новая ветка feature/... → проверка → merge в main → push.
- Перед коммитом: `npx tsc --noEmit` и `npm run build` без ошибок.
- Бэкапы папками больше не делаем — история в git (backups/ и *.backup в .gitignore).
- После каждого этапа обновляем разделы 6, 7, 8 этого файла.

## 3. Стек
- Next.js 16.3.6 (App Router), React 19.2.8, TypeScript 5, Tailwind 4 (@tailwindcss/postcss)
- @supabase/supabase-js 2.x, sharp
- В Next 16 middleware называется src/proxy.ts (функция proxy), а не middleware.ts
- Шрифт: IBM Plex Sans (src/lib/fonts.ts)
- Анимации: src/components/MotionReveal.tsx + стили в globals.css

## 4. Карта кода
### Публичные страницы — src/app/[locale]/
| Путь | Файл | Примечание |
|---|---|---|
| / | page.tsx | главная: hero, о центре, саммит, галерея, LatestNews, PopularPages |
| /services | services/page.tsx | тексты внутри файла (объект page {uz,ru,en}) |
| /conferences | conferences/page.tsx | тексты внутри файла |
| /news, /news/[slug] | news/... | данные из БД (site_news) |
| /documents, /documents/[slug] | documents/... | данные из БД (site_documents) |
| /payment | payment/page.tsx | реквизиты из site_settings['payment'] |
| /contact | contact/page.tsx + components/ContactForm.tsx | форма → /api/contact → Telegram |
| /license, /offer | license/, offer/ | юр. страницы, ссылки в футере; данные site_settings['legal'] |
| /partners | — | НЕ СОЗДАНА (Hamkorliklar) |
- layout.tsx — html lang, SiteHeader, SiteFooter, MotionReveal; generateStaticParams по locales
- src/app/global-not-found.tsx — 404; robots.ts, sitemap.ts — SEO

### Админка — src/app/admin/ (без языкового префикса)
- /admin/login, /admin (дашборд), /admin/news, /admin/documents, /admin/payment,
  /admin/legal, /admin/applications, /admin/settings (смена пароля)
- Формы: components/Admin*Form.tsx, загрузка файлов: AdminUploadField.tsx → /api/admin/upload
- Защита: lib/requireAdmin.ts → lib/adminAuth.ts (cookie, подписана ADMIN_SECRET)
- Пароль: lib/adminPassword.ts — сначала хэш scrypt из Supabase admin_settings['admin_password_hash'],
  если его нет — env ADMIN_PASSWORD
- /uz/admin/... автоматически редиректит на /admin/... (proxy.ts)

### API — src/app/api/
- admin/login, logout, news, news/[id], documents, documents/[id], payment, legal, upload, settings/password
- contact — отправка заявки в Telegram (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
- view — счётчик просмотров (RPC increment_page_view), вызывается из components/ViewTracker.tsx

### Библиотеки — src/lib/
- i18n.ts — ЕДИНСТВЕННЫЙ источник языков (locales, localeLabels, localeNames, pick с fallback)
- navigation.ts — ЕДИНСТВЕННЫЙ источник меню (порядок, enabled, подписи на 5 языках)
- dictionary.ts — общие строки (hero, кнопки, «новости»)
- seo.ts — pageMetadata(): canonical, hreflang, OpenGraph (ogLocale)
- jsonStore.ts — чтение из Supabase, запасной вариант data/*.json
- newsAdmin.ts, publicNews.ts, documentsAdmin.ts, paymentAdmin.ts, legalAdmin.ts — CRUD
- content.ts — getPopularPages (page_stats)
- legacyMedia.ts + components/LegacyGallery.tsx, ImageLightbox.tsx — фото со старого сайта
  (public/images/legacy/*.webp), видео в public/videos/
- supabase/admin.ts — серверный клиент (service role), null если env не задан

## 5. Данные и Supabase
- Основное хранилище — Supabase. data/*.json — запасной вариант только для чтения
  (на Vercel файловая система read-only → без Supabase админка ничего не сохранит).
- Таблицы:
  - site_news — 1 строка на новость, title/excerpt/content = jsonb {uz,ru,en} ← легко добавить tr/kk
  - site_documents — то же, title/description jsonb
  - site_settings — key/value jsonb ('payment', 'legal')
  - admin_settings — хэш пароля админа
  - page_stats — просмотры, ⚠️ CHECK locale in ('uz','ru','en') → нужна миграция для tr/kk
  - news — СТАРАЯ таблица (по строке на язык), сайт её больше не использует
- SQL: supabase/schema.sql (старое), supabase/migrations/20261019_site_content.sql (актуальное)
- scripts/migrate-json-to-supabase.mjs — разовый перенос JSON → Supabase (уже выполнен)
- RLS включён; новые таблицы читает/пишет только сервер (service role)

### Переменные окружения (только НАЗВАНИЯ; значения в .env.local и Vercel → Settings → Environment Variables)
NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID,
ADMIN_PASSWORD, ADMIN_SECRET, NEXT_PUBLIC_SITE_URL (необязательно, по умолчанию trp-site.vercel.app)

## 6. Требования заказчика
### Языки (5): uz (основной), en, ru, tr, kk
- Кнопки в шапке: UZ · EN · RU · TR · KZ
- Fallback, если перевода нет: tr → en, kk → ru, иначе uz (функция pick() в i18n.ts)
- Корень сайта «/»: язык браузера, иначе uz (раньше proxy.ts отправлял на ru)

### Меню (порядок)
Логотип (= Bosh sahifa) → Xizmatlar → Konferensiyalar → Hamkorliklar → Yangiliklar →
Hujjatlar → To‘lov → Murojaat uchun
- Hamkorliklar: enabled:false в navigation.ts, пока не создана страница /partners
- Футер: те же пункты + Nashriyot guvohnomasi (/license) + Ommaviy oferta (/offer)

## 7. Текущий статус
- [x] Репо на GitHub, секретов в коде и истории нет (.env* в .gitignore)
- [x] Код изучен, HANDOFF заполнен
- [~] Ветка feature/i18n-menu (локально, ЕЩЁ НЕ ЗАКОММИЧЕНА):
  - [x] i18n.ts — 5 языков + pick()
  - [x] navigation.ts — новый порядок меню
  - [x] SiteHeader.tsx, SiteFooter.tsx — берут меню из navigation.ts, 5 языков
  - [x] proxy.ts — локали из i18n.ts, язык по Accept-Language, иначе uz
  - [x] seo.ts — ogLocale tr_TR, kk_KZ
  - [x] dictionary.ts — добавлены tr, kk
  - [x] Страницы переведены на pick(); тип LocaleMap<T> в i18n.ts (uz/ru/en обязательны, tr/kk опциональны)
  - [ ] Миграция Supabase: page_stats CHECK для tr/kk
  - [x] tsc + build OK → preview → production → merge в main (2026-10-24)

## 8a. Аудит 2026-10-24
СКОРОСТЬ: force-dynamic на всех страницах (→ ISR revalidate=300 + revalidatePath из админ-API через lib/revalidate.ts);
регион функций Vercel ≠ регион Supabase (→ vercel.json regions); globals.css раздут (дубли override-блоков); много backdrop-filter.
ТИПОГРАФИКА: H1 до 104px vs подписи 11px, letter-spacing -0.065em, weight 800 → шкала H1 40–64 / H2 28–40 / H3 20 / body 17 / min 13.
ШИРИНА: 1280 (секции, шапка) / 1080 (LatestNews inline) / 1040 (premiumIntro) / 980 (stats) → единый --container: 1200px.
Ветка: feature/perf.

## 8. План (бэклог)
1. [в работе] 5 языков + новый порядок меню
2. Страница /partners (Hamkorliklar) + enabled:true
3. Перевести контент страниц на tr и kk (services, conferences, главная, payment, contact, legal)
4. Админка: поля tr/kk в формах новостей и документов (jsonb — без изменения таблиц)
5. ContactForm и сообщение в Telegram — учесть tr/kk
6. Мобильное меню: 7 пунктов + 5 языков не поместятся → бургер-меню
7. sitemap.ts / robots.ts — проверить, что tr/kk попадают в sitemap
8. Удалить старую таблицу news и schema.sql (после проверки)
9. Безопасность: сменить пароль админки (через /admin/settings), сделать /revoke токена бота
   в @BotFather, перевыпустить secret key в Supabase → обновить в Vercel и .env.local
10. Сделать репо private

## 9. Журнал
| Дата | Что сделано | Коммит |
|---|---|---|
| 2026-10-24 | HANDOFF создан, .gitignore (backups), первый push на GitHub | 192935d |
| 2026-10-24 | feature/i18n-menu: i18n, navigation, header, footer, proxy, seo, dictionary | 267135e |
| 2026-10-24 | Все страницы → pick()/LocaleMap, publicNews/legalAdmin/legacyMedia под 5 языков | (см. git log) |
| 2026-10-24 | Новости и главная → pick(); build OK; деплой на прод через vercel --prod | (см. git log) |

## 10. Следующий шаг
0. ✅ 5 языков + меню на проде
1. Миграция Supabase page_stats (supabase/migrations/20261024_locales_tr_kk.sql) — выполнить в SQL Editor
2. npm run dev → проверить /tr и /kk локально
3. Затем: страница /partners, переводы tr/kk контента, бургер-меню
- Заметка: на главной в stats написано «3 til / 3 языка» → заменить на 5 при переводе контента

## 11. Открытые вопросы
- Деплой: Vercel CLI из терминала. Порядок: tsc + npm run build → `vercel` (preview, проверить) → `vercel --prod`.
  Откат: `vercel rollback`. После прода ветку мержим в main (main = то, что на сайте).
- Русский или узбекский язык по умолчанию для «/»? (сейчас: язык браузера, иначе uz)

### 2026-10-24 — Supabase недоступен
Проект Supabase `btraayhkjoxahnphddri` отвечает 521 (вероятно, на паузе, free tier).
Сайт работает на JSON-fallback → медленно и, возможно, со старыми данными.
TODO: найти аккаунт (почта: поиск "supabase"/"paused"), Restore project, проверить Region → vercel.json.

### 2026-10-24 — Supabase восстановлен, кэширование
Supabase: проект btraayhkjoxahnphddri, регион ap-southeast-2 (Sydney), аккаунт через GitHub ShodievBot, Free plan.
Был на паузе (Free tier засыпает после ~7 дней без активности), восстановлен, curl → 401 = работает.
vercel.json: regions ["syd1"] (рядом с базой).
Страницы /[locale]/* теперь ISR (● 5m), кэш сбрасывается при сохранении в админке (src/lib/revalidate.ts).
Ещё динамические (ƒ): /news/[slug], /documents/[slug], оптимизировать позже.
Идея на будущее: перенести базу в eu-central-1 (Франкфурт), ближе к пользователям в UZ/TR.
