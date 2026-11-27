import type { Metadata } from 'next';
import TagFilter from '@/components/TagFilter';
import { getPosts } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('/blog/', { title: 'Blog', description: 'El blog de Gustavo Rodríguez: notas de lo que aprendo y construyo como desarrollador de software, con el código, los errores y los números.' });

export default function Blog() {
  const posts = getPosts().map(({ body, ...p }) => p);
  return (
    <section style={{ paddingTop: 'clamp(40px,5vw,72px)' }}><div className="wrap">
      <div className="sec-head"><span className="eyebrow">Blog</span><h1 className="h2">Notas de lo que aprendo y construyo.</h1>
        <p className="lede">Artículos cortos: el código, los errores y los números que no entran en un video.</p></div>
      <TagFilter posts={posts} />
    </div></section>
  );
}
