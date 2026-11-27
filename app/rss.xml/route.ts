import { Feed } from 'feed';
import { SITE } from '@/lib/site';
import { getPosts } from '@/lib/content';

export const dynamic = 'force-static';

export function GET() {
  const feed = new Feed({
    title: `Blog de ${SITE.name}`,
    description: SITE.description,
    id: SITE.url,
    link: SITE.url,
    language: 'es',
    copyright: `© ${new Date().getFullYear()} ${SITE.author}`,
  });
  for (const p of getPosts()) {
    const url = `${SITE.url}/blog/${p.slug}/`;
    feed.addItem({ title: p.title, id: url, link: url, description: p.description, date: p.date ? new Date(p.date) : new Date() });
  }
  return new Response(feed.rss2(), { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
