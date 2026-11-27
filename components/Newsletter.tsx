'use client';

import { useState, type FormEvent } from 'react';
import { SITE } from '@/lib/site';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function Newsletter() {
  const on = SITE.newsletterNetlify || !!SITE.newsletterAction;
  const [status, setStatus] = useState<Status>('idle');

  // Netlify Forms: el formulario se registra con public/__forms.html y acá se envía por fetch.
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (!SITE.newsletterNetlify) return; // con newsletterAction, el navegador lo envía normal
    e.preventDefault();
    setStatus('sending');
    try {
      const data = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="cta" id="aviso"><div className="wrap">
      <div style={{ display: 'grid', gap: 14 }}>
        <span className="eyebrow">Un correo cuando hay algo nuevo</span>
        <h2>Te aviso cuando haya algo nuevo para leer.</h2>
        <p className="lede">Un artículo nuevo o un avance de un proyecto. Sin relleno.</p>
      </div>
      <div>
        {status === 'ok' ? (
          <p className="lede" role="status">¡Listo! Te anoté. Te escribo cuando haya algo nuevo.</p>
        ) : (
          <form
            className="sub"
            name="newsletter"
            method="post"
            action={SITE.newsletterNetlify ? undefined : SITE.newsletterAction || undefined}
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p hidden><label>No completes esto: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
            <label htmlFor="email" className="sr-only">Tu email</label>
            <input id="email" name="email" type="email" required placeholder="tu@email.com" autoComplete="email" disabled={!on || status === 'sending'} />
            <button className="btn btn-primary" type="submit" disabled={!on || status === 'sending'}>
              {!on ? 'Muy pronto' : status === 'sending' ? 'Enviando…' : 'Avisame'}
            </button>
          </form>
        )}
        {status === 'error' && <p role="alert" style={{ marginTop: 10, color: 'var(--muted, inherit)' }}>No se pudo enviar. Probá de nuevo en un rato.</p>}
      </div>
    </div></section>
  );
}
