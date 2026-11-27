'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { SITE } from '@/lib/site';

const ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/paths/', label: 'Recorridos', prelaunch: true },
  { href: '/channel/', label: 'El canal', prelaunch: true },
  { href: '/projects/', label: 'Proyectos' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'Sobre mí' },
].filter((i) => !(SITE.LAUNCH && i.prelaunch));

export default function Header() {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const isOn = (href: string) => (href === '/' ? path === '/' : path.startsWith(href.replace(/\/$/, '')));
  return (
    <header className="site"><div className="wrap">
      <Link className="brand" href="/" aria-label="gustavguez, inicio"><Logo />gustavguez</Link>
      <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>Menú</button>
      <nav className={`main${open ? ' open' : ''}`} id="nav" onClick={() => setOpen(false)}>
        {ITEMS.map((i) => (
          <Link key={i.href} href={i.href} aria-current={isOn(i.href) ? 'page' : undefined}>{i.label}</Link>
        ))}
        <Link className="btn btn-primary" href="/projects/">Ver proyectos</Link>
      </nav>
    </div></header>
  );
}
