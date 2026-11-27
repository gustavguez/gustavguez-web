import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPosts, getProjects, formatDate, renderMarkdown } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  const posts = getPosts();
  // Con `output: export` hace falta al menos una ruta: si no hay artículos se genera una vacía.
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: '_' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  return post ? pageMeta(`/blog/${post.slug}/`, { title: post.title, description: post.description, type: 'article' }) : { robots: { index: false } };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const posts = getPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const post = posts[i];
  const next = posts[(i + 1) % posts.length];
  const project = post.project ? getProjects().find((p) => p.slug === post.project) : undefined;
  const html = await renderMarkdown(post.body);

  return (
    <article className="post"><div className="wrap">
      <div className="crumbs"><Link href="/">Inicio</Link><span>/</span><Link href="/blog/">Blog</Link><span>/</span><span style={{ color: 'var(--fg)' }}>{post.title}</span></div>
      <header className="post-head">
        <span className="pc-meta">{post.example && <span className="badge b-soon">Artículo de ejemplo</span>}<span>{post.tag}</span></span>
        <h1>{post.title}</h1>
        <p className="post-dek">{post.description}</p>
        <div className="byline"><img src="/img/gus.jpg" alt="" /><span><b>Gustavo Rodríguez</b><span>{formatDate(post.date)}{post.readingTime && ` · ${post.readingTime} de lectura`}</span></span></div>
      </header>
      <div className="post-grid-2">
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        <aside className="side">
          {project && <div className="box"><h4>Proyecto</h4><Link className="rel" href={`/projects/${project.slug}/`}><span className="rel-thumb">◆</span><span><b>{project.name}</b><span>{project.status}</span></span></Link></div>}
          <div className="box"><h4>¿Te sirvió?</h4><p style={{ color: 'var(--muted)', fontSize: 15 }}>Un correo cuando publico algo nuevo, sin relleno.</p><a className="btn btn-primary" href="#aviso" style={{ justifyContent: 'center' }}>Avisame</a></div>
        </aside>
      </div>
      {next.slug !== post.slug && (
        <Link className="next" href={`/blog/${next.slug}/`} style={{ marginBlock: 'clamp(48px,6vw,80px)' }}>
          <span style={{ display: 'grid', gap: 6 }}><span className="eyebrow">Siguiente artículo</span><h3>{next.title}</h3><span style={{ color: 'var(--muted)' }}>{next.description}</span></span>
          <span className="arrow">→</span>
        </Link>
      )}
    </div></article>
  );
}
