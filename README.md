# gustavguez.com

La web de mi marca personal. Hecha con [Next.js](https://nextjs.org) (App Router + React): el blog y los proyectos son archivos Markdown, y el sitio se exporta como HTML estático (rápido, gratis de hospedar, sin base de datos ni servidor).

---

## 1. Ponerlo en marcha en tu compu

Necesitás **Node.js 20 o superior** (`node -v` para ver la versión). Si no lo tenés: https://nodejs.org (versión LTS).

```bash
cd gustavguez-web
npm install        # instala Next.js y lo demás (una sola vez)
npm run dev        # abre la web en http://localhost:3000 y se recarga al guardar
```

Otros comandos:

| Comando           | Qué hace                                                      |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Servidor local para trabajar. Muestra también los artículos de ejemplo. |
| `npm run build`   | Genera la web final (estática) en la carpeta `out/`.          |
| `npm run start`   | Sirve `out/` para ver exactamente lo que se va a publicar.    |

---

## 2. Crear el repositorio en GitHub

1. Entrá a https://github.com/new, nombre `gustavguez-web` (público o privado, da igual). **No** marques "Add a README" ni ".gitignore": ya vienen en el zip.
2. En la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primera versión de la web"
git branch -M main
git remote add origin https://github.com/gustavguez/gustavguez-web.git
git push -u origin main
```

(Cambiá `gustavguez` en la URL por tu usuario de GitHub si es otro.)

---

## 3. Publicarla (gratis)

Cualquiera de estos sirve. Se conectan al repo y **cada `git push` publica solo**.

**Opción recomendada: Cloudflare Pages**
1. https://dash.cloudflare.com → Workers & Pages → Create → Pages → *Connect to Git*.
2. Elegí el repo `gustavguez-web`.
3. Framework preset: **Next.js (Static HTML Export)**. Build command: `npm run build`. Output directory: `out`.
4. Deploy. Te da una URL `*.pages.dev` para probar.

**Alternativas equivalentes:** Netlify (https://app.netlify.com → *Add new site* → *Import from Git*) o Vercel (https://vercel.com/new, el hosting de los creadores de Next.js). En Netlify poné build `npm run build` y carpeta `out`; Vercel lo detecta solo.

**Dominio propio:** en el panel del hosting, sección *Custom domains*, agregá `gustavguez.com` y seguí los pasos de DNS que te indique. El dominio ya está cargado en `url` de `lib/site.ts` (se usa para el RSS y los links al compartir).

---

## 4. Escribir un artículo

Cada artículo es un archivo en `content/blog/`. El nombre del archivo es la URL:
`content/blog/mi-articulo.md` → `/blog/mi-articulo/`.

```markdown
---
title: El título del artículo
description: Una o dos líneas que aparecen en el listado y al compartir.
date: 2026-12-01
tag: Básicos de programación
readingTime: 5 min
project: ciudadela-3d     # opcional: lo vincula a un proyecto
---

Acá va el texto, en Markdown normal.

## Un subtítulo

Texto con **negrita**, *cursiva*, `código` y [links](https://ejemplo.com).
```

Campos útiles:
- `draft: true` → no se publica (borrador).
- Sin `date` → aparece como "Borrador".
- `example: true` → solo se ve con `npm run dev`, no en la web publicada.

**La chuleta de formato está en `docs/muestra-de-formato.md`** (fuera de `content/`, así no se publica). Tiene cada elemento listo para copiar. Si querés verla renderizada, copiala a `content/blog/` y abrí `/blog/muestra-de-formato/` con `npm run dev` (tiene `example: true`, así que no sale en la web publicada).

### Elementos disponibles

**Código** (con colores y botón "Copiar" automáticos):

````markdown
<div class="code-title">agente.py</div>

```python
print("hola")
```
````

La línea `code-title` es opcional. Para la salida de una terminal usá ` ```console `.

**Recuadros:**

```html
<div class="callout note"><b>Nota</b><p>Texto.</p></div>
<div class="callout tip"><b>Tip</b><p>Texto.</p></div>
<div class="callout warn"><b>Ojo</b><p>Texto.</p></div>
```

**Imágenes:** guardalas en `public/img/blog/` y usalas así:

```markdown
![Texto que describe la imagen](/img/blog/captura.png)
```

Con epígrafe:

```html
<figure class="fig">
  <img src="/img/blog/captura.png" alt="Qué se ve">
  <figcaption>Figura 1. El epígrafe.</figcaption>
</figure>
```

**Pasos numerados**, **antes y después**, **tablas** y **diagramas SVG**: copiá los bloques de la muestra de formato.

**Video de YouTube:** en YouTube → Compartir → Insertar, copiá el código del video (el `src`) y pegá:

```html
<iframe class="yt" src="https://www.youtube.com/embed/ID_DEL_VIDEO" title="Título del video" allowfullscreen loading="lazy"></iframe>
```

---

## 5. Agregar o editar un proyecto

Cada proyecto es un archivo en `content/projects/`. Abrí `ciudadela-3d.md`: arriba están los datos (estado, stack, links, bitácora) y abajo la historia completa del proyecto en Markdown, con imágenes y tablas, igual que un artículo.

Las imágenes de cada proyecto van en su propia carpeta: `public/img/projects/<nombre-del-proyecto>/` (por ejemplo `public/img/projects/ciudadela-3d/`), y se usan como `/img/projects/ciudadela-3d/archivo.jpg`. Nombres de archivo en inglés, en minúscula y con guiones.

**Proyectos y blog son cosas distintas:** la página del proyecto cuenta qué es y cómo lo fuiste construyendo. El blog es para documentar lo que aprendés en general.

Para uno nuevo, copiá ese archivo con otro nombre (`mi-proyecto.md` → `/projects/mi-proyecto/`). El campo `order` define el orden (el más bajo va primero).

Si un artículo del blog nace de un proyecto, ponele `project: ciudadela-3d` y aparece al pie de esa página, en «Lo que aprendí en el camino».

---

## 6. Configuración general: `lib/site.ts`

Casi todo lo que no es un artículo o un proyecto está ahí:

- **`LAUNCH: true`**: la web sale solo con blog y proyectos. Recorridos, el canal y YouTube se ven en gris como "Próximamente" en la home (en el footer directamente no aparecen), y `/paths` y `/channel` muestran una página "Próximamente". Cuando tengas el canal, cambialo a `false` (y avisame para armar las páginas de recorridos y canal).
- **`COMPANIES`**: Solcre, Dendra y Bloque, con tu rol y una descripción.
- **`SOCIAL`**: LinkedIn y X del footer. Un link con la URL vacía no se muestra.
- **`TALKS`**: charlas anteriores. Cada una se despliega con su descripción, el link para descargar las diapositivas y, si hay, el video de YouTube (con su miniatura).
- **`NOW`**: la sección "Lo que estoy armando ahora".
- **`newsletterAction`**: ver abajo.
- **SEO**: cada página arma sus metadatos con `pageMeta()` de `lib/seo.ts` (título, descripción, canonical, Open Graph y tarjeta de X). La imagen que se ve al compartir es `public/img/og-default.jpg` (1200×630); un proyecto usa su `cover`. `/sitemap.xml` y `/robots.txt` se generan solos. En un proyecto, el campo `description` es el texto para Google (máx. ~160 caracteres).
- **`gtmId`**: el ID de Google Tag Manager (`GTM-WFPJXGV7`). El código se carga en el `<head>` de todas las páginas desde `app/layout.tsx`. Vacío = sin analítica.

Textos de la home: `app/page.tsx` y `components/Hero.tsx`.
Colores y estilos: `app/globals.css` (los colores de marca están al principio, en `:root`).

**Tema:** la web es **oscura por defecto**. Si algún día querés la versión clara, en `app/layout.tsx` cambiá `<html lang="es">` por `<html lang="es" data-look="light">` (los colores del tema claro están en `:root[data-look="light"]`).

### Newsletter

El formulario no tiene servidor propio. Mientras `newsletterAction` esté vacío, se muestra deshabilitado con "Muy pronto". Para activarlo, creá una cuenta en un servicio de newsletter (por ejemplo Buttondown, Kit/ConvertKit o MailerLite), copiá la URL del formulario que te dan ("form action") y pegala en `newsletterAction`. El campo del email se llama `email`; si el servicio pide otro nombre, cambialo en `components/Newsletter.tsx`.

---

## 7. Antes de publicar: lo que falta completar

Todo lo pendiente está entre **corchetes**. Buscá `[` en estos archivos:

- [ ] `lib/site.ts`: una descripción de cada empresa (el rol «Socio» ya está cargado) (LinkedIn y X ya están cargados).
- [ ] `content/projects/ciudadela-3d.md`: si querés, el link al repositorio.
- [ ] `public/img/gus.jpg`: reemplazala por la foto original en alta resolución (vertical, mismo encuadre).
- [ ] Blog: arranca vacío (la página muestra «Pronto el primer artículo» y la home oculta la sección «Del blog»). Para el primero, creá un `.md` en `content/blog/`.

---

## Estructura

```
lib/site.ts               ← configuración general (empezá por acá)
content/
  blog/*.md               ← un archivo por artículo
  projects/*.md           ← un archivo por proyecto
app/                      ← una carpeta por ruta (/, /blog, /projects, /about…)
  layout.tsx              ← <head>, menú, newsletter y footer comunes
  globals.css             ← todos los estilos
components/               ← piezas reutilizables (hero, footer, tarjetas…)
lib/content.ts            ← lee los .md y los convierte a HTML (con colores en el código)
docs/muestra-de-formato.md ← chuleta de formato para los artículos (no se publica)
public/                   ← imágenes y archivos que se sirven tal cual
```

**Nota:** el sitio se exporta estático (`output: 'export'` en `next.config.ts`). Si algún día necesitás algo de servidor (formularios propios, API routes, login), sacá esa línea y publicalo en Vercel.
