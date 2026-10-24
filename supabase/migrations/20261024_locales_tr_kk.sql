-- Allow tr and kk in page view statistics
alter table public.page_stats drop constraint if exists page_stats_locale_check;
alter table public.page_stats
  add constraint page_stats_locale_check
  check (locale in ('uz', 'en', 'ru', 'tr', 'kk'));
