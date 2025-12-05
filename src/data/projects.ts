import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'I Gladiatori',
    subtitle: 'Pizzeria & Ristorante',
    description: 'Una landing page moderna e responsive per un ristorante pizzeria con design accattivante e focus sulla conversione.',
    image: '/mockups/ecommerce-thumb.jpg',
    year: 2025,
    client: 'I Gladiatori',
    url: 'https://gladiatori.andrea-mauri.duckdns.org/',
    github: 'https://github.com/Payd3r/I-Gladiatori',
    category: 'Pizzeria & Ristorante'
  },
  {
    id: 'project-2',
    title: 'Betta47',
    subtitle: 'Bed & Breakfast',
    description: 'Landing page per un B&B di Cantù con design moderno, responsive e ottimizzata per le prenotazioni.',
    image: '/mockups/saas-thumb.jpg',
    year: 2025,
    client: 'Betta47 B&B',
    url: 'https://betta47.andrea-mauri.duckdns.org/',
    github: 'https://github.com/Payd3r/Betta47',
    category: 'Bed & Breakfast'
  },
  {
    id: 'project-3',
    title: 'Le Chic di Cinzia',
    subtitle: 'Centro Estetico',
    description: 'Sito web completo per un centro estetico con sistema di prenotazioni online e galleria servizi.',
    image: '/mockups/beauty-thumb.jpg',
    year: 2025,
    client: 'Le Chic di Cinzia',
    url: 'https://lechic.andrea-mauri.duckdns.org/',
    github: 'https://github.com/Payd3r/LeChic',
    category: 'Centro Estetico'
  },
  {
    id: 'project-4',
    title: 'La Lariana',
    subtitle: 'Pizzeria d\'Asporto',
    description: 'Sito web per pizzeria d\'asporto con posti a sedere, specializzata in pizze con impasto integrale e senza glutine.',
    image: '/cardCover/la_lariana.jpg',
    year: 2025,
    client: 'La Lariana',
    url: 'https://lariana.andrea-mauri.duckdns.org/',
    github: 'https://github.com/Payd3r/Lariana',
    category: 'Pizzeria & Ristorante'
  },
  {
    id: 'project-5',
    title: 'Farao Studio',
    subtitle: 'Fotografia',
    description: 'Portfolio fotografico per un fotografo professionale con gallerie e dettagliato descrizione dei servizi.',
    image: '/cardCover/faraostudio.jpg',
    year: 2025,
    client: 'Farao Studio',
    url: 'https://faraostudio.andrea-mauri.duckdns.org/',
    github: 'https://github.com/Payd3r/rafa',
    category: 'Fotografia'
  },
  {
    id: 'ilaria-Linktree',
    title: 'Ilaria UGC Linktree',
    subtitle: 'Linktree',
    description: 'Landing linktree con vetrina prodotti, affiliazioni e portfolio per creator UGC, gestita da pannello admin.',
    image: '/assets/cardCover/linktree.jpg',
    year: 2025,
    client: 'Ilaria',
    url: 'https://ila.ravai.it/',
    github: 'https://github.com/Payd3r/linktree',
    category: 'Linktree'
  }
];

export const categories = [
  {
    id: 'all',
    name: 'Tutti i Progetti',
    description: 'Visualizza tutti i progetti'
  },
  {
    id: 'Pizzeria & Ristorante',
    name: 'Pizzeria & Ristorante',
    description: 'Pizzeria & Ristorante'
  },
  {
    id: 'Bed & Breakfast',
    name: 'Bed & Breakfast',
    description: 'Bed & Breakfast'
  },
  {
    id: 'Centro Estetico',
    name: 'Centro Estetico',
    description: 'Centro Estetico'
  },
  {
    id: 'Fotografia',
    name: 'Fotografia',
    description: 'Fotografia'
  },
  {
    id: 'Linktree',
    name: 'Linktree',
    description: 'Linktree'
  }
];