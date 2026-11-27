// Hero de la home: titular, foto y los dibujos animados alrededor (nunca sobre la cara).
import Link from 'next/link';
import { SITE } from '@/lib/site';

const len = (n: number) => ({ '--len': n } as React.CSSProperties);
const TICKER = ['Pseudocódigo', 'HTTP', 'APIs', 'Git', 'Tokens', 'Contexto', 'Validación', 'Agentes', 'MCP', 'Python', 'TypeScript', 'Angular', 'React', 'Node', 'Costos y latencia'];

export default function Hero() {
  return (
    <>
      <section className="hero"><div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{SITE.author} / {SITE.role} / {SITE.city}</span>
          <h1><span>Aprender.</span><span>Entender.</span><span className="c">Construir<span className="dot">.</span></span></h1>
          <p className="intro">Soy Gustavo Rodríguez. Hace más de <strong>17 años</strong> que desarrollo software y sigo disfrutando de explorar tecnologías nuevas, entender cómo funcionan y <strong>compartir lo que aprendo</strong>.</p>
          <div className="hero-cta">
            {SITE.LAUNCH
              ? <><Link className="btn btn-primary" href="/proyectos/">Ver mis proyectos</Link><Link className="btn btn-ghost" href="/sobre-mi/">Sobre mí</Link></>
              : <Link className="btn btn-primary" href="/recorridos/">Elegí tu recorrido</Link>}
            <Link className="btn btn-ghost" href="/sobre-mi/">Conocé quién soy</Link>
          </div>
        </div>
        <div className="portrait">
          <img src="/img/gus.jpg" alt="Gustavo Rodríguez sonriendo, retrato sobre fondo oscuro" width={640} height={960} fetchPriority="high" />
          <div className="doodles" aria-hidden="true">
            <span className="hand hola">¡hola!</span>
            <svg className="d1" style={{ top: '13%', left: '13%', width: '22%', height: '16%' }} viewBox="0 0 100 80"><path style={len(160)} d="M6 6 C 20 40, 50 62, 88 58 M74 46 L90 58 L74 70" /></svg>
            <span className="rec"><i></i>REC · canal</span>
            <span className="term-mini"><span className="tl t1">$ python agente.py</span><span className="tl t2">construyendo<b>_</b></span></span>
            <span className="hand dcode">&lt;/&gt;</span>
            <span className="hand note">siempre<br />probando cosas</span>
            <svg className="d3" style={{ bottom: '15%', right: '7%', width: '42%', height: '7%' }} viewBox="0 0 180 30"><path style={len(220)} d="M4 18 C 40 6, 80 28, 120 14 S 170 10, 176 16" /></svg>
          </div>
          <span className="tag">Gus<b><span className="circ">{SITE.years}<svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true"><path d="M58 6 C30 2 6 12 5 30 C4 48 30 57 55 55 C80 53 96 42 95 27 C94 12 74 4 48 8" /></svg></span> años construyendo software</b></span>
        </div>
      </div></section>
      <div className="ticker" aria-hidden="true"><div>
        {[...TICKER, ...TICKER].map((t, i) => <span key={i}>{t}</span>)}
      </div></div>
    </>
  );
}
