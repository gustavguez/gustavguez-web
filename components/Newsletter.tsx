import { SITE } from '@/lib/site';

export default function Newsletter() {
  const on = !!SITE.newsletterAction;
  return (
    <section className="cta" id="aviso"><div className="wrap">
      <div style={{ display: 'grid', gap: 14 }}>
        <span className="eyebrow">Un correo cuando hay algo nuevo</span>
        <h2>Te aviso cuando haya algo nuevo para leer.</h2>
        <p className="lede">Un artículo nuevo o un avance de un proyecto. Sin relleno.</p>
      </div>
      <div>
        <form className="sub" method="post" action={on ? SITE.newsletterAction : undefined}>
          <label htmlFor="email" className="sr-only">Tu email</label>
          <input id="email" name="email" type="email" required placeholder="tu@email.com" autoComplete="email" disabled={!on} />
          <button className="btn btn-primary" type="submit" disabled={!on}>{on ? 'Avisame' : 'Muy pronto'}</button>
        </form>
      </div>
    </div></section>
  );
}
