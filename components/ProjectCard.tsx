import Link from 'next/link';
import { toneClass } from '@/lib/format';
import type { Project } from '@/lib/content';

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link className="proj-card" href={`/proyectos/${p.slug}/`}>
      <span className="pc-meta">
        <span className={`badge ${toneClass(p.statusTone)}`}>{p.status}</span>
      </span>
      <h3>{p.name}</h3><p>{p.summary}</p>
      <span className="chips">{p.stack.map((t) => <span key={t}>{t}</span>)}</span>
      <span className="go">VER PROYECTO →</span>
    </Link>
  );
}
