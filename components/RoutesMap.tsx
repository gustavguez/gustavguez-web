// Adelanto de los recorridos. Con SITE.LAUNCH = true se ven todos bloqueados.
import { RECORRIDOS } from '@/lib/site';
import LockIcon from './LockIcon';

const Cap = () => <span className="lockcap"><LockIcon /><span>Próximamente</span></span>;

export default function RoutesMap() {
  return (
    <section id="mapa"><div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Recorridos de aprendizaje</span>
        <h2>Los recorridos se vienen.</h2>
        <p className="lede">Estoy preparando recorridos ordenados, de cómo piensa el código a construir agentes. Mientras tanto, lo que voy aprendiendo está en el blog y en los proyectos.</p>
      </div>
      <div className="map">
        <div className="rail">
          {RECORRIDOS.map((r) => (
            <div className="station locked" key={r.n} aria-label={`${r.title}: próximamente`}><span className="node"></span>
              <span className="card veil"><span className="sil">
                <span className="lvl"><span className="mono" style={{ color: 'var(--dim)' }}>{r.level}</span><span className="badge b-lock">Próximamente</span></span>
                <h3>{r.title}</h3><p>{r.short}</p>
                <span className="mono" style={{ color: 'var(--dim)', fontSize: 11 }}>Requisito: {r.req}</span>
                <span className="go">VER RECORRIDO →</span>
              </span><Cap /></span>
            </div>
          ))}
        </div>
        <div className="veil branch-box">
          <div className="branch sil"><span className="node"></span>
            <span style={{ display: 'grid', gap: 4 }}>
              <span className="mono" style={{ color: 'var(--dim)' }}>Ramal · transversal <span className="badge b-lock">Próximamente</span></span>
              <h3>Proyectos reales, uno por mes</h3><p>Lo que se aprende en la línea, aplicado a casos con repo, versiones y cifras.</p>
            </span>
            <span className="go mono" style={{ color: 'var(--accent)' }}>VER PROYECTOS →</span>
          </div>
          <Cap />
        </div>
      </div>
    </div></section>
  );
}
