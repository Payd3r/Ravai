import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Corsi Test Bocconi',
    subtitle: 'Piattaforma E-learning',
    description: 'Piattaforma per la preparazione al test d\'ingresso Bocconi, con video lezioni, esercizi interattivi, simulazioni e pannello admin per la gestione utenti e contenuti.',
    image: '/cardCover/nicola.jpg',
    year: 2026,
    client: 'Nicola Calcabrini',
    url: 'https://www.nicolacalcabrini.com/',
    category: 'E-learning'
  },
  {
    id: 'project-2',
    title: 'Betta47',
    subtitle: 'Bed & Breakfast',
    description: 'Landing page per un B&B di Cantù con design moderno, responsive e ottimizzata per le prenotazioni.',
    image: '/cardCover/betta47.jpg',
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
    image: '/cardCover/le_chic.jpg',
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
    id: 'project-6',
    title: 'Ilaria UGC Portfolio',
    subtitle: 'UGC Creator & Strategist',
    description: 'Portfolio professionale bilingue dedicato a una UGC Creator. Include una vetrina dinamica per i contenuti video, un sistema Linktree personalizzato e un pannello admin per la gestione completa di prodotti e affiliazioni.',
    image: '/cardCover/ilariaugc.jpg',
    year: 2026,
    client: 'Ilaria Gatti',
    url: 'https://ilariaugc.net/',
    github: 'https://github.com/Payd3r/linktree',
    category: 'UGC Portfolio'
  },

  {
    id: 'project-7',
    title: 'I Gladiatori',
    subtitle: 'Pizzeria & Ristorante',
    description: 'Una landing page moderna e responsive per un ristorante pizzeria con design accattivante e focus sulla conversione.',
    image: '/cardCover/i_gladiatori.jpg',
    year: 2025,
    client: 'I Gladiatori',
    url: 'https://gladiatori.andrea-mauri.duckdns.org/',
    github: 'https://github.com/Payd3r/I-Gladiatori',
    category: 'Pizzeria & Ristorante'
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
    id: 'UGC Portfolio',
    name: 'UGC Portfolio',
    description: 'UGC Portfolio'
  },
  {
    id: 'E-learning',
    name: 'E-learning',
    description: 'E-learning'
  }
];