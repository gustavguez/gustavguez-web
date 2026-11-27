import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ paddingBlock: 'clamp(64px,10vw,120px)' }}>
      <div className="wrap" style={{ display: 'grid', gap: 22, justifyItems: 'start', maxWidth: 760 }}>
        <span className="eyebrow">Error 404</span><h1 className="h2">Esta página no existe.</h1>
        <p className="lede">Puede que el link esté viejo o mal escrito.</p>
        <div className="hero-cta"><Link className="btn btn-primary" href="/">Volver al inicio</Link><Link className="btn btn-ghost" href="/proyectos/">Ver proyectos</Link></div>
      </div>
    </section>
  );
}
