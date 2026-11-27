import type { Metadata } from 'next';
import { SITE, SOCIAL, COMPANIES } from '@/lib/site';

// Imagen para compartir (1200×630, la que muestran LinkedIn, WhatsApp y X).
const DEFAULT_IMAGE = { url: '/img/og-default.jpg', width: 1200, height: 630, alt: 'Gustavo Rodríguez, desarrollador de software en Montevideo' };
export const HOME_TITLE = 'Gustavo Rodríguez · Desarrollador de software en Montevideo';

type Opts = {
  title?: string;            // sin el sufijo "· gustavguez" (se agrega solo)
  description?: string;      // ideal: entre 70 y 160 caracteres
  image?: string;            // ruta en /public; por defecto, la foto de Gus
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;         // true = que Google no la indexe (páginas "Próximamente")
};

// Metadatos completos de una página: título, descripción, canonical,
// Open Graph (LinkedIn, WhatsApp, Facebook) y la tarjeta de X.
export function pageMeta(path: string, o: Opts = {}): Metadata {
  const description = o.description ?? SITE.description;
  const fullTitle = o.title ? `${o.title} · ${SITE.name}` : HOME_TITLE;
  const images = [o.image ? { url: o.image } : DEFAULT_IMAGE];
  return {
    ...(o.title ? { title: o.title } : {}),
    description,
    alternates: { canonical: path, types: { 'application/rss+xml': '/rss.xml' } },
    openGraph: { type: o.type ?? 'website', url: path, siteName: SITE.name, locale: 'es_UY', title: fullTitle, description, images },
    twitter: { card: 'summary_large_image', site: '@gustavguez', creator: '@gustavguez', title: fullTitle, description, images: images.map((i) => i.url) },
    ...(o.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

// Datos estructurados (schema.org) para que Google entienda quién es Gus.
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.author,
    alternateName: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/img/gus.jpg`,
    jobTitle: SITE.role,
    address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: 'UY' },
    sameAs: SOCIAL.filter((s) => s.url).map((s) => s.url),
    worksFor: COMPANIES.map((c) => ({ '@type': 'Organization', name: c.name, url: c.url })),
  };
}
