import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import ProjectCard from '@/components/ProjectCard';
import { getPosts, getProjects } from '@/lib/content';

export const metadata: Metadata = pageMeta('/proyectos/', { title: 'Proyectos', description: 'Proyectos personales de Gustavo Rodríguez: lo que construyo por mi cuenta para aprender, con la bitácora de cada versión.' });

export default function Proyectos() {
  const posts = getPosts();
  return (
    <section style={{ paddingTop: 'clamp(40px,5vw,72px)' }}><div className="wrap">
      <div className="sec-head"><span className="eyebrow">Proyectos personales</span><h1 className="h2">Lo que construyo por mi cuenta.</h1>
        <p className="lede">Proyectos propios, separados de las empresas. Cada uno tiene su página, su estado y los artículos del blog que cuentan cómo avanza.</p></div>
      <div className="post-grid">{getProjects().map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
    </div></section>
  );
}
