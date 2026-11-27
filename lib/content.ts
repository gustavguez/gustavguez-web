// Lee los artículos y proyectos desde /content (archivos Markdown con frontmatter).
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';

const ROOT = path.join(process.cwd(), 'content');

// Los links externos (http/https) de los .md se abren en otra pestaña.
type HNode = { type: string; tagName?: string; properties?: Record<string, unknown>; children?: HNode[] };
function rehypeExternalLinks() {
  return (tree: HNode) => {
    const walk = (n: HNode) => {
      if (n.type === 'element' && n.tagName === 'a' && /^https?:\/\//.test(String(n.properties?.href ?? ''))) {
        n.properties = { ...n.properties, target: '_blank', rel: ['noopener', 'noreferrer'] };
      }
      n.children?.forEach(walk);
    };
    walk(tree);
  };
}
const IS_DEV = process.env.NODE_ENV === 'development';

export type Post = {
  slug: string;
  title: string;
  description: string;
  date?: string;          // AAAA-MM-DD. Sin fecha = "Borrador"
  tag: string;
  readingTime?: string;
  project?: string;       // slug de un proyecto para vincularlo
  draft?: boolean;        // true = no se publica
  example?: boolean;      // true = solo se ve con `npm run dev`
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description?: string;   // meta description para Google (máx. ~160 caracteres); si falta se usa summary
  status: string;
  statusTone: 'ok' | 'prod' | 'soon';
  stack: string[];
  started: string;
  order: number;
  cover?: string;
  links: { label: string; url: string }[];
  cta?: { label: string; url: string }; // botón flotante "Abrir" en la página del proyecto
  log: { when: string; text: string; done?: boolean }[];
  body: string;
};

function readDir(dir: string) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, f), 'utf8'));
      return { slug: f.replace(/\.md$/, ''), data, body: content, file: `${dir}/${f}` };
    });
}

function need(data: Record<string, unknown>, keys: string[], file: string) {
  for (const k of keys) if (data[k] === undefined || data[k] === '') throw new Error(`Falta "${k}" en content/${file}`);
}

const toDate = (d: unknown) => (d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : undefined);

export function getPosts(): Post[] {
  return readDir('blog')
    .map(({ slug, data, body, file }) => {
      need(data, ['title', 'description', 'tag'], file);
      return { ...(data as Omit<Post, 'slug' | 'body'>), date: toDate(data.date), slug, body };
    })
    .filter((p) => !p.draft && (IS_DEV || !p.example))
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}

export function getProjects(): Project[] {
  return readDir('projects')
    .map(({ slug, data, body, file }) => {
      need(data, ['name', 'summary', 'status', 'started'], file);
      return { statusTone: 'prod', stack: [], order: 0, links: [], log: [], ...data, slug, body } as unknown as Project;
    })
    .sort((a, b) => a.order - b.order);
}

export async function renderMarkdown(md: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeExternalLinks)
    .use(rehypeShiki, {
      theme: 'github-dark',
      langs: ['python', 'javascript', 'typescript', 'tsx', 'bash', 'console', 'json', 'html', 'css', 'php', 'sql', 'yaml'],
      defaultLanguage: 'text',
      fallbackLanguage: 'text',
    })
    .use(rehypeStringify)
    .process(md);
  return String(file);
}

export { formatDate, toneClass } from './format';
