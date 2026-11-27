// Mientras SITE.LAUNCH sea true, esta página muestra "Próximamente".
import type { Metadata } from 'next';
import Soon from '@/components/Soon';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('/paths/', { title: 'Próximamente', noindex: true });

export default function Page() {
  return <Soon />;
}
