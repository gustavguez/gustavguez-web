import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getPosts, getProjects } from '@/lib/content';

export const dynamic = 'force-static';

// Se genera solo en /sitemap.xml con todas las páginas públicas.
export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${SITE.url}${p}`;
  return [
    { url: u('/'), priority: 1 },
    { url: u('/projects/'), priority: 0.8 },
    { url: u('/blog/'), priority: 0.8 },
    { url: u('/about/'), priority: 0.7 },
    ...getProjects().map((p) => ({ url: u(`/projects/${p.slug}/`), priority: 0.8 })),
    ...getPosts().map((p) => ({ url: u(`/blog/${p.slug}/`), lastModified: p.date, priority: 0.6 })),
  ];
}
