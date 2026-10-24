'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
};

export function ViewTracker({ locale }: Props) {
  const pathname = usePathname();
  const sentRef = useRef(false);

  useEffect(() => {
    if (!pathname || sentRef.current) return;

    sentRef.current = true;

    const payload = {
      locale,
      path: pathname,
      title: document.title || pathname,
    };

    const json = JSON.stringify(payload);

    if (navigator.sendBeacon) {
      const blob = new Blob([json], { type: 'application/json' });
      navigator.sendBeacon('/api/view', blob);
      return;
    }

    fetch('/api/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
      keepalive: true,
    }).catch(() => {});
  }, [locale, pathname]);

  return null;
}
