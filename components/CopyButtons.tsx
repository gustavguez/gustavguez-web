'use client';
// Agrega un botón "Copiar" a cada bloque de código de los artículos.
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CopyButtons() {
  const path = usePathname();
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.prose pre').forEach((pre) => {
      if (pre.querySelector('.copy')) return;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'copy'; b.textContent = 'Copiar';
      b.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(pre.querySelector('code')?.innerText ?? ''); b.textContent = 'Copiado'; }
        catch { b.textContent = 'Seleccioná y copiá'; }
        setTimeout(() => (b.textContent = 'Copiar'), 1500);
      });
      pre.appendChild(b);
    });
  }, [path]);
  return null;
}
