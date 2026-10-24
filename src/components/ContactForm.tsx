'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
  labels: {
    name: string;
    phone: string;
    service: string;
    message: string;
    button: string;
    success: string;
    error: string;
    required: string;
  };
  services: string[];
};

export function ContactForm({ locale, labels, services }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusText, setStatusText] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !phone) {
      setStatus('error');
      setStatusText(labels.required);
      return;
    }

    setStatus('loading');
    setStatusText('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locale,
          name,
          phone,
          service,
          message,
          page: window.location.pathname,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Request failed');
      }

      setStatus('success');
      setStatusText(labels.success);
      form.reset();
    } catch {
      setStatus('error');
      setStatusText(labels.error);
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder={labels.name} autoComplete="name" />
      <input type="tel" name="phone" placeholder={labels.phone} autoComplete="tel" />

      <select name="service" defaultValue="">
        <option value="" disabled>
          {labels.service}
        </option>
        {services.map((service) => (
          <option value={service} key={service}>
            {service}
          </option>
        ))}
      </select>

      <textarea name="message" placeholder={labels.message} rows={5} />

      <button
        type="submit"
        className="premiumButton premiumButtonPrimary contactSubmit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '...' : labels.button}
      </button>

      {statusText ? (
        <div className={`formStatus ${status === 'success' ? 'formStatusSuccess' : 'formStatusError'}`}>
          {statusText}
        </div>
      ) : null}
    </form>
  );
}
