// Link que se bloquea mientras SITE.LAUNCH sea true (recorridos, canal, YouTube).
import { SITE } from '@/lib/site';

type Props = { href: string; className?: string; external?: boolean; children: React.ReactNode };

export default function Lock({ href, className = '', external = false, children }: Props) {
  if (SITE.LAUNCH)
    return <a className={`${className} is-locked`.trim()} aria-disabled="true" title="Próximamente">{children}</a>;
  return (
    <a className={className || undefined} href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      {children}
    </a>
  );
}
