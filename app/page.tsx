import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMeta, personJsonLd } from '@/lib/seo';
import Hero from '@/components/Hero';
import RoutesMap from '@/components/RoutesMap';
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Lock from '@/components/Lock';
import { NOW } from '@/lib/site';
import { getPosts, getProjects, toneClass } from '@/lib/content';

const ECO = [
  { t: 'Recorridos', p: 'Rutas ordenadas, de cómo piensa el código a construir agentes. Sabés qué ver primero y qué después.', go: 'VER LOS RECORRIDOS', href: '/recorridos/', lock: true },
  { t: 'El canal', p: 'Las clases en video, gratis en YouTube, con el repositorio de cada episodio.', go: 'VER EL CANAL', href: '/canal/', lock: true },
  { t: 'Newsletter', p: 'Un correo cuando hay algo nuevo, con su repositorio. Sin relleno.', go: 'RECIBIR EL AVISO', href: '#aviso' },
  { t: 'Charlas', p: 'Charlas técnicas sobre Angular entre 2020 y 2022, y lo que viene.', go: 'VER LAS CHARLAS', href: '/sobre-mi/' },
];
export const metadata: Metadata = pageMeta('/');

const line = { borderTop: '1px solid var(--line)' };

export default function Home() {
  const posts = getPosts();
  const projects = getProjects();
  const postsOf = (slug: string) => posts.filter((p) => p.project === slug).length;

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <Hero />

      <section id="ecosistema"><div className="wrap">
        <div className="sec-head"><span className="eyebrow">Ecosistema</span><h2>Todo parte de una buena guía.</h2><p className="lede">Cuatro piezas, todas gratis, pensadas para recorrerse en orden o de a una.</p></div>
        <div className="eco">{ECO.map((x, i) => {
          const inner = <><span className="mono" style={{ color: 'var(--dim)' }}>0{i + 1}</span><h3>{x.t}</h3><p>{x.p}</p><span className="go">{x.lock ? 'PRÓXIMAMENTE' : `${x.go} →`}</span></>;
          return x.lock ? <Lock key={x.t} href={x.href}>{inner}</Lock> : <a key={x.t} href={x.href}>{inner}</a>;
        })}</div>
      </div></section>

      <RoutesMap />

      <section style={line}><div className="wrap principles">
        <div style={{ display: 'grid', gap: 18 }}><span className="eyebrow">Lo que vas a ver en cada clase</span><p className="quote">Te muestro lo que <em>hago</em>, no lo que digo que sé.</p></div>
        <dl className="plist">
          <div><dt>Código que corre</dt><dd>Cada clase trae su repositorio y la versión de cada herramienta que usé.</dd></div>
          <div><dt>Las fallas a la vista</dt><dd>Lo que sale mal enseña más que lo que sale bien, así que también lo muestro.</dd></div>
          <div><dt>Números, no adjetivos</dt><dd>Costo, tiempo y errores medidos. Si no se puede medir, no se promete.</dd></div>
          <div><dt>Con criterio</dt><dd>Si no sé algo, lo digo y lo investigo. Explicaciones claras sin perder rigor técnico.</dd></div>
        </dl>
      </div></section>

      <section style={line}><div className="wrap">
        <div className="sec-head"><span className="eyebrow">Para quién es</span><h2>Un lugar con público definido, a propósito.</h2></div>
        <div className="fit">
          <div className="box"><h4>Es para vos si…</h4><ul><li>Empezás de cero y querés entender cómo piensa el código.</li><li>Ya programás y querés profundizar con fundamentos y criterio.</li><li>Usás IA y querés entender qué pasa por debajo, o poder validar lo que hace por vos.</li></ul></div>
          <div className="box no"><h4>No es para vos si…</h4><ul><li>Buscás atajos para automatizarlo todo sin entenderlo.</li><li>Querés promesas de dinero fácil o empleo garantizado.</li><li>Te interesan trucos sin fundamentos.</li></ul></div>
        </div>
      </div></section>

      <section style={{ ...line, paddingTop: 'clamp(56px,7vw,90px)' }}><div className="wrap">
        <div className="sec-head"><span className="eyebrow">En construcción, a la vista</span><h2>Lo que estoy armando ahora.</h2></div>
        <div className="build">{NOW.map((n) => (
          <div className="build-row" key={n.title}><span className={`badge ${toneClass(n.tone)}`}>{n.label}</span><h3>{n.title}</h3><p>{n.text}</p></div>
        ))}</div>
      </div></section>

      <section style={line}><div className="wrap">
        <div className="sec-head"><span className="eyebrow">Proyectos personales</span><h2>Cosas que construyo para aprender.</h2>
          <p className="lede">Proyectos propios, separados de las empresas. Cada uno tiene su página, su estado y los artículos del blog que cuentan cómo avanza.</p></div>
        <div className="post-grid">{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      </div></section>

      {posts.length > 0 && (
        <section style={line}><div className="wrap">
          <div className="sec-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 20, flexWrap: 'wrap', maxWidth: 'none' }}>
            <div style={{ display: 'grid', gap: 14 }}><span className="eyebrow">Del blog</span><h2>Lo que voy escribiendo.</h2></div>
            <Link className="btn btn-ghost" href="/blog/">Ver todos los artículos</Link></div>
          <div className="post-grid">{posts.slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}</div>
        </div></section>
      )}

      <About short />
      <Experience />
    </>
  );
}
