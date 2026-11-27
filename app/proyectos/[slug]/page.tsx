import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PostRow from '@/components/PostRow';
import { getPosts, getProjects, renderMarkdown, toneClass } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjects().find((x) => x.slug === slug);
  return p ? pageMeta(`/proyectos/${p.slug}/`, { title: p.name, description: p.description ?? p.summary, image: p.cover, type: 'article' }) : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProjects().find((x) => x.slug === slug);
  if (!p) notFound();
  const posts = getPosts().filter((x) => x.project === p.slug);
  const html = await renderMarkdown(p.body);

  return (
    <>
      <div className="r-hero"><div className="wrap">
        <div className="crumbs"><Link href="/">Inicio</Link><span>/</span><Link href="/proyectos/">Proyectos</Link><span>/</span><span style={{ color: 'var(--fg)' }}>{p.name}</span></div>
        <span className="eyebrow">Proyecto personal</span>
        <h1 style={{ marginTop: 12 }}>{p.name}</h1>
        <p className="sub">{p.summary}</p>
        <dl className="meta">
          <div><dt>Estado</dt><dd><span className={`badge ${toneClass(p.statusTone)}`}>{p.status}</span></dd></div>
          <div><dt>Desde</dt><dd>{p.started}</dd></div>
          <div><dt>Stack</dt><dd>{p.stack.join(' · ')}</dd></div>
        </dl>
      </div></div>
      <div className="wrap r-body">
        <div style={{ minWidth: 0, display: 'grid', gap: 40, alignContent: 'start' }}>
          {p.log.length > 0 && (
            <div><span className="eyebrow">Bitácora</span>
              <ol className="stops" style={{ marginTop: 22 }}>{p.log.map((l, i) => (
                <li key={i} className={`stop${l.done ? ' done' : ''}`}><span className="node"></span><div className="k">{l.when}</div><p style={{ color: 'var(--fg)' }}>{l.text}</p></li>
              ))}</ol></div>
          )}
          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
          {posts.length > 0 && (
            <div><span className="eyebrow">Lo que aprendí en el camino</span>
              <div className="post-list" style={{ marginTop: 18 }}>
                {posts.map((x) => <PostRow key={x.slug} post={x} showTag={false} />)}
              </div>
            </div>
          )}
        </div>
        <aside className="side">
          {p.links.length > 0 && <div className="box"><h4>Enlaces</h4><ul>{p.links.map((l) => (
            <li key={l.label}>{l.url.startsWith('http')
              ? <a href={l.url} target="_blank" rel="noopener"><b>{l.label}</b> ↗</a>
              : <><b style={{ color: 'var(--fg)' }}>{l.label}</b>&nbsp;<span style={{ color: 'var(--dim)' }}>{l.url}</span></>}</li>
          ))}</ul></div>}
          <div className="box"><h4>Stack</h4><span className="chips">{p.stack.map((t) => <span key={t}>{t}</span>)}</span></div>
          <div className="box"><h4>Seguir el proyecto</h4><p style={{ color: 'var(--muted)', fontSize: 15 }}>Un correo cuando hay avances, sin relleno.</p><a className="btn btn-primary" href="#aviso" style={{ justifyContent: 'center' }}>Avisame</a></div>
        </aside>
      </div>
    </>
  );
}
