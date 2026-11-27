import Link from 'next/link';
import Logo from './Logo';
import { SITE, COMPANIES, SOCIAL, RECORRIDOS } from '@/lib/site';

export const host = (u: string) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export default function Footer() {
  return (
    <footer className="site"><div className="wrap">
      <div className="f-top">
        <div>
          <Link className="brand" href="/"><Logo />gustavguez</Link>
          <p>{SITE.description}</p>
        </div>
        <div className="companies">
          <span className="eyebrow" style={{ color: 'var(--dim)' }}>Trayectoria empresarial</span>
          <div className="co-grid">
            {COMPANIES.map((c) => (
              <div className="co" key={c.name}>
                <span className="wm">{c.name}</span><span className="co-role">{c.role}</span>
                <a className="co-link" href={c.url} target="_blank" rel="noopener">{host(c.url)}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="f-cols">
        {/* Mientras SITE.LAUNCH sea true, el footer muestra sólo lo que ya está abierto. */}
        {!SITE.LAUNCH && <div><h4>Recorridos</h4>{RECORRIDOS.map((r) => <Link key={r.n} href="/paths/">{r.title}</Link>)}</div>}
        <div><h4>gustavguez</h4>
          <Link href="/about/">Sobre mí</Link>{!SITE.LAUNCH && <Link href="/channel/">El canal</Link>}<Link href="/projects/">Proyectos</Link>
          <Link href="/blog/">Blog</Link><a href="#aviso">Newsletter</a><a href="/rss.xml">RSS</a>
        </div>
        <div><h4>En otros lados</h4>
          {SOCIAL.filter((s) => s.url).map((s) => <a key={s.label} href={s.url} target="_blank" rel="noopener">{s.label}</a>)}
        </div>
      </div>
      <div className="f-bottom"><span>© {new Date().getFullYear()} {SITE.author} · {SITE.city}, Uruguay</span><span>Aprender. Entender. Construir.</span></div>
    </div></footer>
  );
}
