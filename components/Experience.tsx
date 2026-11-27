import { COMPANIES } from '@/lib/site';
import { host } from './Footer';

export default function Experience() {
  return (
    <section style={{ borderTop: '1px solid var(--line)' }}><div className="wrap">
      <div className="sec-head"><span className="eyebrow">Experiencia</span><h2>Empresas donde construyo.</h2>
        <p className="lede">Las empresas respaldan la experiencia. Los proyectos personales muestran la curiosidad.</p></div>
      <div className="xp">{COMPANIES.map((c) => (
        <div key={c.name}><span className="mono" style={{ color: 'var(--dim)' }}>{c.role}</span><h3>{c.name}</h3><p>{c.desc}</p>
          <a className="co-link" href={c.url} target="_blank" rel="noopener">{host(c.url)}</a></div>
      ))}</div>
    </div></section>
  );
}
