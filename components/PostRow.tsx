import Link from 'next/link';
import { formatDate } from '@/lib/format';
import type { Post } from '@/lib/content';

export default function PostRow({ post, showTag = true }: { post: Omit<Post, 'body'>; showTag?: boolean }) {
  return (
    <Link className="post-row" href={`/blog/${post.slug}/`}>
      <span className="pr-date">{formatDate(post.date)}</span>
      <span style={{ display: 'grid', gap: 6, minWidth: 0 }}>
        <span className="pc-meta">
          {post.example && <span className="badge b-soon">Ejemplo</span>}
          {showTag && <span>{post.tag}</span>}
          {post.readingTime && <span>{post.readingTime}</span>}
        </span>
        <h3>{post.title}</h3><p>{post.description}</p>
      </span>
      <span className="go">→</span>
    </Link>
  );
}
