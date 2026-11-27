import Link from 'next/link';
import LockIcon from './LockIcon';

export default function Soon() {
  return (
    <section style={{ paddingBlock: 'clamp(64px,10vw,120px)' }}>
      <div className="wrap" style={{ display: 'grid', gap: 22, justifyItems: 'start', maxWidth: 760 }}>
        <LockIcon /><span className="eyebrow">Próximamente</span><h1 className="h2">Esto todavía no está abierto.</h1>
        <p className="lede">Los recorridos y el canal se vienen. Por ahora podés ver en qué estoy trabajando.</p>
        <div className="hero-cta"><Link className="btn btn-primary" href="/projects/">Ver proyectos</Link><Link className="btn btn-ghost" href="/">Volver al inicio</Link></div>
      </div>
    </section>
  );
}
