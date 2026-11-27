---
title: "Bucles: repetir sin repetirte (muestra de formato)"
description: "Un artículo de muestra con todos los elementos disponibles: diagramas, código con copiar, terminal, pasos, antes y después, tablas, imágenes y video."
tag: Básicos de programación
readingTime: 6 min
example: true   # este archivo es la chuleta de formato: copialo para empezar uno nuevo
---

Este artículo es una **muestra de formato**: usa cada elemento que puede llevar una nota del blog. Abrí este archivo `.md` al lado de la página para ver cómo se escribe cada cosa.

<div class="callout note"><b>Nota</b><p>Un recuadro para aclarar algo sin cortar el hilo.</p></div>

## 1. El problema, en un diagrama

Un bucle repite pasos hasta que se cumple una condición. Antes de ver código, mirá el recorrido:

<figure class="fig">
  <svg viewBox="0 0 640 170" role="img" aria-label="Diagrama: empezar, revisar condición, hacer el paso, volver a revisar, terminar">
    <g font-family="JetBrains Mono, monospace" font-size="13" text-anchor="middle">
      <rect x="10" y="60" width="110" height="50" rx="8" class="d-box"/><text x="65" y="90" class="d-txt">empezar</text>
      <rect x="180" y="55" width="140" height="60" rx="30" class="d-box d-acc"/><text x="250" y="83" class="d-txt">¿quedan</text><text x="250" y="100" class="d-txt">elementos?</text>
      <rect x="390" y="10" width="130" height="50" rx="8" class="d-box"/><text x="455" y="40" class="d-txt">hacer el paso</text>
      <rect x="390" y="110" width="130" height="50" rx="8" class="d-box"/><text x="455" y="140" class="d-txt">terminar</text>
      <path d="M120 85 H180" class="d-line"/><path d="M320 75 C350 60 360 40 390 35" class="d-line"/><path d="M320 95 C350 110 360 130 390 135" class="d-line"/>
      <path d="M455 10 C455 -5 250 -5 250 55" class="d-line d-dash"/>
      <text x="360" y="45" class="d-small">sí</text><text x="360" y="130" class="d-small">no</text>
    </g>
  </svg>
  <figcaption>Figura 1. Un diagrama hecho en SVG. También puede ser una imagen PNG.</figcaption>
</figure>

## 2. Código con nombre de archivo

Los bloques de código llevan colores automáticos y un botón para copiar. El nombre del archivo es opcional:

<div class="code-title">contar_frutas.py</div>

```python
frutas = ["manzana", "pera", "uva"]

for fruta in frutas:          # el bucle
    print("Tengo", fruta)

print("Listo")
```

Y la salida en la terminal, para que veas exactamente qué pasa:

<div class="code-title">terminal</div>

```console
$ python contar_frutas.py
Tengo manzana
Tengo pera
Tengo uva
Listo
```

<div class="callout tip"><b>Tip</b><p>Probá cambiar la lista y volvé a correrlo. Tocar el código es la forma más rápida de entenderlo.</p></div>

## 3. Paso a paso

<ol class="steps">
  <li><b>Creá el archivo</b><span>Abrí tu editor y guardalo como <code>contar_frutas.py</code>.</span></li>
  <li><b>Pegá el código</b><span>Usá el botón <kbd>Copiar</kbd> del bloque de arriba.</span></li>
  <li><b>Corrélo</b><span>En la terminal: <code>python contar_frutas.py</code>.</span></li>
</ol>

## 4. Antes y después

<div class="compare">
<div><span class="cmp-tag bad">Antes · repetido</span>

```python
print("Tengo manzana")
print("Tengo pera")
print("Tengo uva")
```

</div>
<div><span class="cmp-tag good">Después · con bucle</span>

```python
for fruta in frutas:
    print("Tengo", fruta)
```

</div>
</div>

<div class="callout warn"><b>Ojo</b><p>Un bucle <code>while</code> sin condición de salida no termina nunca. Es el error más común, y lo vas a cometer.</p></div>

## 5. Una tabla para comparar

<div class="table-wrap">

| Bucle   | Cuándo usarlo                         | Riesgo               |
| ------- | ------------------------------------- | -------------------- |
| `for`   | Sabés sobre qué cosas vas a recorrer  | Bajo                 |
| `while` | Repetís hasta que algo cambie         | Que no termine nunca |

</div>

## 6. Una imagen con epígrafe

<figure class="fig">
  <img src="/img/gus.jpg" alt="Ejemplo de imagen: retrato de Gus" width="640" height="960" style="max-width:280px;width:100%;height:auto">
  <figcaption>Figura 2. Guardá las imágenes en <code>public/img/blog/</code> y usalas con <code>/img/blog/archivo.jpg</code>. Sin epígrafe alcanza con <code>![texto alternativo](/img/blog/archivo.jpg)</code>.</figcaption>
</figure>

## 7. Un video de YouTube

<div class="video-embed"><span class="play" aria-hidden="true">▶</span><span>Cuando tengas el video, reemplazá este bloque por el iframe de YouTube (ver README, sección «Video»).</span></div>

> Lo que sale mal enseña más que lo que sale bien.
