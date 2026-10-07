import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const indexPath = join(distDir, 'index.html');
const baseHtml = readFileSync(indexPath, 'utf8');

const routes = [
  {
    path: '/',
    title: 'Ravai - Siti Web per Ristoranti, B&B, Imprese Edili e Attivita Locali',
    description:
      'Crea siti web per ristoranti, B&B, imprese edili, artigiani e attivita locali. Portfolio, recensioni e preventivo personalizzato.',
    h1: 'Siti Web Professionali per Attivita Locali - Ravai',
  },
  {
    path: '/projects',
    title: 'Portfolio Ravai - Progetti Web per Attivita Locali',
    description:
      'Scopri i progetti web realizzati da Ravai per ristoranti, B&B, professionisti e attivita locali.',
    h1: 'Portfolio Progetti Web Ravai',
  },
  {
    path: '/products',
    title: 'Calcola Prezzo Sito Web - Configuratore Ravai',
    description:
      'Configura il tuo sito web professionale e calcola un preventivo personalizzato per la tua attivita.',
    h1: 'Configuratore Prezzo Sito Web Ravai',
  },
  {
    path: '/about',
    title: 'Chi Siamo - Ravai',
    description:
      'Conosci Ravai, il team che crea siti web strategici per attivita locali con design, SEO e attenzione alle conversioni.',
    h1: 'Chi Siamo - Ravai',
  },
  {
    path: '/contact',
    title: 'Contatti - Ravai',
    description:
      'Contatta Ravai per raccontarci il tuo progetto web. Scrivici via email, telefono o WhatsApp.',
    h1: 'Contatti Ravai',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy - Ravai',
    description:
      'Leggi la Privacy Policy di Ravai e scopri come vengono trattati i dati personali raccolti dal sito.',
    h1: 'Privacy Policy Ravai',
  },
  {
    path: '/terms',
    title: 'Termini e Condizioni - Ravai',
    description:
      'Consulta i Termini e Condizioni che regolano l uso del sito e dei servizi offerti da Ravai.',
    h1: 'Termini e Condizioni Ravai',
  },
];

const escapeAttribute = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const getCanonical = (path) => `https://www.ravai.it${path === '/' ? '/' : path}`;

const replaceOrInsertMeta = (html, selector, replacement) => {
  const pattern = new RegExp(selector);
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</head>', `  ${replacement}\n</head>`);
};

const buildRouteHtml = (route) => {
  const canonical = getCanonical(route.path);
  const escapedTitle = escapeAttribute(route.title);
  const escapedDescription = escapeAttribute(route.description);
  const escapedCanonical = escapeAttribute(canonical);
  const escapedH1 = escapeAttribute(route.h1);

  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(
      /<meta name="description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="description" content="${escapedDescription}" />`,
    )
    .replace(
      /<link rel="canonical"\s+href="[\s\S]*?"\s*\/>/,
      `<link rel="canonical" href="${escapedCanonical}" />`,
    )
    .replace(
      /<meta property="og:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta property="og:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:description" content="${escapedDescription}" />`,
    )
    .replace(
      /<meta property="og:url"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:url" content="${escapedCanonical}" />`,
    )
    .replace(
      /<meta name="twitter:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:description" content="${escapedDescription}" />`,
    )
    .replace(
      /<h1 style="position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden;">[\s\S]*?<\/h1>/,
      `<h1 style="position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden;">${escapedH1}</h1>`,
    );

  html = replaceOrInsertMeta(
    html,
    '<meta name="robots"\\s+content="[\\s\\S]*?"\\s*/>',
    '<meta name="robots" content="index, follow" />',
  );

  return html;
};

routes.forEach((route) => {
  const routeHtml = buildRouteHtml(route);

  if (route.path === '/') {
    writeFileSync(indexPath, routeHtml);
    return;
  }

  const routeDir = join(distDir, route.path.replace(/^\//, ''));
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), routeHtml);
});

console.log(`Generated SEO HTML for ${routes.length} routes.`);
