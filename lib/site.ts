// Configuración general del sitio. Casi todo lo que vas a querer cambiar está acá.

export const SITE = {
  name: 'gustavguez',
  // Tu dominio final (se usa para el RSS y al compartir links).
  url: 'https://gustavguez.com',
  author: 'Gustavo Rodríguez',
  role: 'Desarrollador de software',
  city: 'Montevideo',
  description:
    'Gustavo Rodríguez, desarrollador de software en Montevideo. Aprendo, construyo y comparto lo que descubro.',
  years: '17+',
  // LAUNCH = true: la web sale solo con blog y proyectos.
  // Recorridos y canal se muestran bloqueados ("Próximamente").
  LAUNCH: true,
  // Newsletter con Netlify Forms (los emails quedan en el panel de Netlify → Forms).
  newsletterNetlify: true,
  // Alternativa: URL del formulario de otro servicio (Buttondown, Kit...). Solo se usa si newsletterNetlify es false.
  // Las dos apagadas = el formulario se muestra deshabilitado con "Muy pronto".
  newsletterAction: '',
  // ID del contenedor de Google Tag Manager. Vacío = no se carga.
  gtmId: 'GTM-WFPJXGV7',
};

// logo: archivo en public/img/companies/. logoH/logoW: tamaño en px para que los tres se vean parejos. logoMono: true = logo de un solo color, se pinta con el color del texto (sirve en tema claro y oscuro).
export const COMPANIES = [
  { name: 'Solcre', url: 'https://www.solcre.com/', role: 'Socio', logo: '/img/companies/solcre.svg', logoMono: false, logoH: 34, logoW: 123, desc: 'Desarrollamos software e inteligencia artificial que llega a producción. Desde 2007, más de 500 proyectos en 18 países: producto digital, IA, equipos dedicados y consultoría.' },
  { name: 'Dendra', url: 'https://www.dendra.agency/', role: 'Socio', logo: '/img/companies/dendra.svg', logoMono: true, logoH: 26, logoW: 114, desc: 'Agencia creativa. Hacemos estrategia, ideas, contenido, redes y marketing de performance para marcas que quieren hacerse oír.' },
  { name: 'Bloque', url: 'https://www.bloque.com.uy/', role: 'Socio', logo: '/img/companies/bloque.svg', logoMono: true, logoH: 36, logoW: 36, desc: 'Estudio boutique de diseño y desarrollo web. Hacemos sitios, apps, SEO y e-commerce para empresas que no pueden verse improvisadas en internet.' },
];

// Redes del footer. Mientras la URL esté vacía se muestran en gris como «pronto».
export const SOCIAL = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gustavguez' },
  { label: 'X (Twitter)', url: 'https://x.com/gustavguez' },
];

// Charlas anteriores. Se despliegan al hacer clic.
// slides: link de descarga de las diapositivas. video: el ID de YouTube (lo que va después de v=), vacío si no hay.
// thumb: imagen de portada del video (en public/). Sin thumb se usa la miniatura de YouTube.
export const TALKS = [
  {
    title: "Scully, un aliado para las SPA en Angular",
    when: "Abr 2022",
    date: "2 de abril de 2022",
    org: "MacaoTech",
    orgUrl: "https://www.youtube.com/c/MacaoTech",
    desc: "Charla para MacaoTech sobre Scully, un aliado para las SPA en Angular.",
    slides: "https://drive.google.com/file/d/1i5RaMigdEVIfeHwjuF00DGXV_jFTCFc7/view?usp=sharing",
    video: "K08qSDpOXRY",
    thumb: "/img/talks/scully.jpg",
  },
  {
    title: "Standalone components, directives and pipes",
    when: "Nov 2021",
    date: "17 de noviembre de 2021",
    org: "Angular Montevideo",
    orgUrl: "https://www.meetup.com/Angular-MVD",
    desc: "Charla para Angular Montevideo sobre llevar Angular hacia un lugar donde los componentes, las directivas y los pipes tienen un papel más central. No se grabó, así que no hay video.",
    slides: "https://drive.google.com/file/d/1jQDk7MP_9UsCxdn02kDNezP3Kp_ywY8L/view?usp=sharing",
    video: "",
  },
  {
    title: "Proyección de contenido usando ng-content",
    when: "Jul 2021",
    date: "29 de julio de 2021",
    org: "Angular Montevideo",
    orgUrl: "https://www.meetup.com/Angular-MVD",
    desc: "Charla para Angular Montevideo sobre proyección de contenido con ng-content, un mecanismo muy parecido al que usábamos en AngularJS.",
    slides: "https://drive.google.com/file/d/1kEBFV8NXjlONpbYcZXgjuObGGu1VUhYR/view?usp=sharing",
    video: "Hst2V4ZMxlU",
    thumb: "/img/talks/angular.jpg",
  },
  {
    title: "Introducción a Dynamic Component Loader",
    when: "Sep 2020",
    date: "19 de septiembre de 2020",
    org: "Angular Montevideo",
    orgUrl: "https://www.meetup.com/Angular-MVD",
    desc: "Charla para Angular Montevideo sobre Dynamic Component Loader (DCL): crear instancias de componentes, cargarles información y renderizarlos en tiempo de ejecución.",
    slides: "https://drive.google.com/file/d/1oUeXKUxtWr9B6WhxEd0_bT_t7N_1JQHG/view?usp=sharing",
    video: "nWLu7-USOxk",
    thumb: "/img/talks/angular.jpg",
  },
];

// Recorridos: por ahora solo se muestran como adelanto bloqueado.
export const RECORRIDOS = [
  { n: '0', level: 'Nivel 0', title: 'Básicos de programación', short: 'Datos, decisiones, repeticiones y funciones con diagramas y pseudocódigo.', req: 'Ninguno' },
  { n: '1', level: 'Nivel 1', title: 'Fundamentos del software', short: 'La web, las APIs, los datos y el camino del código hasta producción.', req: 'Básicos de programación' },
  { n: '2', level: 'Nivel 2', title: 'Bases de IA', short: 'Tokens, contexto y probabilidad, y cómo validar lo que la IA hace por vos.', req: 'Ninguno de código' },
  { n: '3', level: 'Nivel 3', title: 'Agentes y MCP', short: 'El agente como bucle, las tools como funciones y lo que lo vuelve confiable.', req: 'Fundamentos + Bases de IA' },
];

export const NOW = [
  { tone: 'prod', label: 'En curso', title: 'Armando el canal de YouTube', text: 'Grabando los primeros videos de Básicos de programación: cómo piensa el código, antes de la sintaxis.' },
  { tone: 'soon', label: 'Después', title: 'Un agente desde cero con Python', text: 'Sin frameworks: el bucle, las tools y la memoria escritos a mano para entender cada pieza.' },
  { tone: 'soon', label: 'Más adelante', title: 'Sumarle MCPs al agente', text: 'Conectarle herramientas por MCP y contar qué cambia, qué se rompe y cuánto cuesta.' },
];
