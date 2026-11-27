import Link from 'next/link';
import { TALKS } from '@/lib/site';

export default function About({ short = false, page = false }: { short?: boolean; page?: boolean }) {
  return (
    <section id="sobre" style={short ? { borderTop: '1px solid var(--line)' } : undefined}><div className="wrap about">
      <div style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
        <span className="eyebrow">Sobre mí</span>
        {page ? <h1 className="h2">Hola, soy Gus.</h1> : <h2>Hola, soy Gus.</h2>}
        <div className="txt">
          <p>Soy desarrollador de software en Montevideo, con <strong>más de 17 años</strong> construyendo productos. Trabajo con Angular desde 2015 y, más recientemente, con React. También armo APIs con PHP y Node.</p>
          <p>Siempre me gustó enseñar. Di charlas técnicas durante años y ahora quiero llevar esa costumbre más lejos: <strong>explicar con claridad, sin perder rigor</strong>, para quien empieza y para quien ya programa.</p>
          {!short && <p>No sé todo, y lo digo. Lo que comparto lo probé antes: si algo falló, también lo vas a ver.</p>}
        </div>
        {short && <div><Link className="btn btn-ghost" href="/about/">Más sobre mí</Link></div>}
      </div>
      <div style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
        <span className="mono" style={{ color: 'var(--dim)' }}>Charlas anteriores</span>
        <div className="talks">
          {TALKS.map((t) => (
            <details className="talk" key={t.title}>
              <summary><span className="t-title">{t.title}</span><span className="t-when">{t.when}</span></summary>
              <div className="talk-body">
                {t.video && <a className="talk-yt" href={`https://www.youtube.com/watch?v=${t.video}`} target="_blank" rel="noopener">Ver en YouTube ↗</a>}
                {t.video && (
                  <a className="talk-thumb" href={`https://www.youtube.com/watch?v=${t.video}`} target="_blank" rel="noopener" aria-label={`Ver el video de ${t.title}`}>
                    <img src={'thumb' in t && t.thumb ? t.thumb : `https://i.ytimg.com/vi/${t.video}/hqdefault.jpg`} alt="" loading="lazy" />
                    <span className="play" aria-hidden="true">▶</span>
                  </a>
                )}
                <span className="t-meta">{t.date} · <a href={t.orgUrl} target="_blank" rel="noopener">{t.org}</a></span>
                <p>{t.desc}</p>
                <div className="talk-links">
                  <a href={t.slides} target="_blank" rel="noopener">↓ Descargar diapositivas</a>
                  {t.video && <a href={`https://www.youtube.com/watch?v=${t.video}`} target="_blank" rel="noopener">▶ Ver en YouTube</a>}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div></section>
  );
}
