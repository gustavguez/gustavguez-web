import { CERTS } from '@/lib/site';

// variant "band": franja destacada (antes de las empresas). variant "grid": tarjetas (después de las empresas).
export default function Certifications({ variant = 'band' }: { variant?: 'band' | 'grid' }) {
  if (!CERTS.length) return null;
  if (variant === 'band') {
    return (
      <section className="certs-band"><div className="wrap certs-band-in">
        <div className="certs-band-txt">
          <span className="eyebrow">Certificaciones</span>
          <h2>Aprendo, construyo y lo certifico.</h2>
          <p className="lede">La experiencia se demuestra construyendo. Las certificaciones lo validan, y siempre hay una próxima.</p>
        </div>
        <div className="certs-badges">
          {CERTS.map((c) => ('locked' in c && c.locked) ? (
            <div key={c.name} className="cert-badge is-locked" title={`${c.name}: próximamente`}>
              <img src={c.badge} alt={`${c.name}, por desbloquear`} width={132} height={132} />
              <span><b>{c.issuer}</b>{c.year}</span>
            </div>
          ) : (
            <a key={c.name} className="cert-badge" href={c.url} target="_blank" rel="noopener noreferrer" title={c.name}>
              <img src={c.badge} alt={c.name} width={132} height={132} />
              <span>{c.year}</span>
            </a>
          ))}
        </div>
      </div></section>
    );
  }
  return (
    <section style={{ borderTop: '1px solid var(--line)' }}><div className="wrap">
      <div className="sec-head"><span className="eyebrow">Certificaciones</span><h2>Lo que respalda la experiencia.</h2>
        <p className="lede">Certificaciones oficiales, verificables en Credly.</p></div>
      <div className="certs-grid">{CERTS.map((c) => (
        <a key={c.name} className="cert-card" href={c.url} target="_blank" rel="noopener noreferrer">
          <img src={c.badge} alt="" width={88} height={88} />
          <div><span className="mono" style={{ color: 'var(--dim)', display: 'block' }}>{c.level} · {c.year}</span><h3>{c.name}</h3><span className="co-link">Verificar ↗</span></div>
        </a>
      ))}</div>
    </div></section>
  );
}
