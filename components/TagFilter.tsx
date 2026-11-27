'use client';
import { useState } from 'react';
import PostRow from './PostRow';
import type { Post } from '@/lib/content';

type Lite = Omit<Post, 'body'>;

export default function TagFilter({ posts }: { posts: Lite[] }) {
  const [tag, setTag] = useState('');
  const tags = [...new Set(posts.map((p) => p.tag))];
  return (
    <>
      {tags.length > 1 && (
        <div className="tagbar" role="group" aria-label="Filtrar por tema">
          {['', ...tags].map((t) => (
            <button key={t || 'all'} className="chip" type="button" aria-pressed={tag === t} onClick={() => setTag(t)}>{t || 'Todos'}</button>
          ))}
        </div>
      )}
      <div className="post-list">
        {posts.length
          ? posts.filter((p) => !tag || p.tag === tag).map((p) => <PostRow key={p.slug} post={p} />)
          : <div className="box"><p style={{ color: 'var(--muted)' }}>Pronto el primer artículo.</p></div>}
      </div>
    </>
  );
}
