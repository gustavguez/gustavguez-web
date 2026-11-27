import Link from 'next/link';
import type { Post } from '@/lib/content';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link className="post-card" href={`/blog/${post.slug}/`}>
      <span className="pc-meta">
        {post.example && <span className="badge b-soon">Ejemplo</span>}
        <span>{post.tag}</span>{post.readingTime && <span>{post.readingTime}</span>}
      </span>
      <h3>{post.title}</h3><p>{post.description}</p><span className="go">LEER →</span>
    </Link>
  );
}
