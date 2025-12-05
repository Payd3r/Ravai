import type { ProjectDetail } from '../types/ProjectDetail';

export const projectDetails: Record<string, ProjectDetail> = {
  'project-1': {
    id: 'project-1',
    title: 'I Gladiatori',
    subtitle: 'Pizzeria & Ristorante',
    description: 'Una landing page moderna e responsive per un ristorante pizzeria con design accattivante e focus sulla conversione.',
    year: 2025,
    client: 'I Gladiatori',
    url: 'https://gladiatori.andrea-mauri.duckdns.org/',
    category: 'Pizzeria & Ristorante',
    
    // Informazioni business
    businessGoals: [
      'Migliorare la visibilità del ristorante',
      'Facilitare la visualizzazione del menu tramite smartphone',
      'Creare un\'esperienza digitale coinvolgente'
    ],
    
    // Caratteristiche principali (focus business)
    features: [
      'Menu digitale per ogni tipo (pizzeria, pizzeria asporto, ristorante)',
      'Filtri per tipi di ingredienti e allergeni',
      'Galleria foto per ogni articolo',
      'Design responsive ottimizzato per mobile',
      'Presentazione online del ristorante/pizzeria',
      'Sito statico per visualizzazione menu'
    ],
    
    // Risultati ottenuti
    results: [
      'Sito completamente rinnovato e moderno',
      'Miglioramento significativo dell\'usabilità',
      'Design responsive per tutti i dispositivi'
    ],
    
    // Processo di lavoro
    process: [
      {
        title: 'Analisi del Sito Esistente',
        description: 'Valutazione del sito vecchio e identificazione dei problemi principali'
      },
      {
        title: 'Design e Prototipazione',
        description: 'Creazione di mockup moderni e responsive per sostituire il design datato'
      },
      {
        title: 'Sviluppo Frontend',
        description: 'Implementazione del nuovo sito con focus su usabilità e design moderno'
      },
      {
        title: 'Ottimizzazione e Test',
        description: 'Test su diversi dispositivi e ottimizzazione delle performance'
      }
    ],
    
    // Mockups (percorsi delle immagini)
    mockups: [
      '/carouselMockup/I_Gladiatori/1.png',
      '/carouselMockup/I_Gladiatori/2.png',
      '/carouselMockup/I_Gladiatori/3.png',
    ],
    
    // Immagine di sfondo per la hero section
    heroImage: '/carouselMockup/I_Gladiatori/0.png',
    
    // Testimonianza cliente
    testimonial: {
      text: 'Il nuovo sito ha completamente trasformato la nostra presenza online. Ora i clienti possono facilmente visualizzare il menu anche da smartphone e l\'esperienza è molto più professionale.',
      author: 'Marco Rossi',
      role: 'Proprietario I Gladiatori'
    }
  },
  
  'project-2': {
    id: 'project-2',
    title: 'Betta47',
    subtitle: 'Bed & Breakfast',
    description: 'Landing page per un B&B di Cantù con design moderno, responsive e ottimizzata per le prenotazioni.',
    year: 2025,
    client: 'Betta47 B&B',
    url: 'https://betta47.andrea-mauri.duckdns.org/',
    category: 'Bed & Breakfast',
    
    businessGoals: [
      'Modernizzare il sito esistente datato',
      'Migliorare la navigazione e l\'esperienza utente',
      'Creare una presenza online più professionale'
    ],
    
    features: [
      'Design moderno e responsive',
      'Varie gallerie e caroselli',
      'Spiegazione dettagliata dei servizi',
      'Form di contatto integrato',
      'Homepage per spiegare la struttura e la zona',
      'Correzione problemi di traduzione'
    ],
    
    results: [
      'Sito completamente rinnovato e moderno',
      'Miglioramento significativo della navigazione',
      'Presenza online più professionale'
    ],
    
    process: [
      {
        title: 'Analisi del Sito Esistente',
        description: 'Valutazione del sito vecchio e identificazione dei problemi di design e traduzione'
      },
      {
        title: 'Redesign Completo',
        description: 'Creazione di un nuovo design moderno e responsive'
      },
      {
        title: 'Sviluppo Frontend',
        description: 'Implementazione delle nuove funzionalità e correzione dei problemi'
      },
      {
        title: 'Ottimizzazione Contenuti',
        description: 'Miglioramento dei contenuti e correzione delle traduzioni'
      }
    ],
    
    mockups: [
      '/carouselMockup/Betta47/1.png',
      '/carouselMockup/Betta47/2.png',
      '/carouselMockup/Betta47/3.png',
    ],
    
    // Immagine di sfondo per la hero section
    heroImage: '/carouselMockup/Betta47/0.png',
    
    // Confronto prima/dopo
    beforeAfter: [
      { before: '/carouselMockup/Betta47/before-1.svg', after: '/carouselMockup/Betta47/after-1.svg', title: 'Homepage' },
      { before: '/carouselMockup/Betta47/before-2.svg', after: '/carouselMockup/Betta47/after-2.svg', title: 'Camere' },
      { before: '/carouselMockup/Betta47/before-3.svg', after: '/carouselMockup/Betta47/after-3.svg', title: 'Servizi' },
      { before: '/carouselMockup/Betta47/before-4.svg', after: '/carouselMockup/Betta47/after-4.svg', title: 'Contatti' },
    ],

    testimonial: {
      text: 'Il nuovo sito ha completamente rivoluzionato la nostra presenza online. Ora abbiamo un sito moderno e professionale che riflette la qualità del nostro B&B.',
      author: 'Anna Bianchi',
      role: 'Proprietaria Betta47 B&B'
    }
  },
  
  'project-3': {
    id: 'project-3',
    title: 'Le Chic di Cinzia',
    subtitle: 'Centro Estetico',
    description: 'Sito web completo per un centro estetico con sistema di prenotazioni online e galleria servizi.',
    year: 2025,
    client: 'Le Chic di Cinzia',
    url: 'https://lechic.andrea-mauri.duckdns.org/',
    category: 'Centro Estetico',
    
    businessGoals: [
      'Aumentare la visibilità del centro estetico',
      'Ampliare il mercato di riferimento',
      'Digitalizzare la presenza online'
    ],
    
    features: [
      'Galleria servizi e trattamenti',
      'Catalogo prodotti',
      'Form per prenotazioni online',
      'Design moderno e professionale',
      'Presenza online completa',
      'Integrazione con social media'
    ],
    
    results: [
      'Riduzione significativa delle chiamate telefoniche',
      'Aumento dei nuovi clienti',
      'Presenza online professionale creata da zero'
    ],
    
    process: [
      {
        title: 'Analisi dei Bisogni',
        description: 'Studio delle esigenze del cliente e definizione degli obiettivi di business'
      },
      {
        title: 'Design dell\'Interfaccia',
        description: 'Creazione di un design moderno e professionale per il settore beauty'
      },
      {
        title: 'Sviluppo Frontend',
        description: 'Implementazione della galleria, catalogo prodotti e form prenotazioni'
      },
      {
        title: 'Lancio e Supporto',
        description: 'Deploy del sito e formazione del cliente'
      }
    ],
    
    mockups: [
      '/carouselMockup/Le_chic/1.png',
      '/carouselMockup/Le_chic/2.png',
      '/carouselMockup/Le_chic/3.png',
    ],
    
    // Immagine di sfondo per la hero section
    heroImage: '/carouselMockup/Le_chic/0.png',
    
    testimonial: {
      text: 'Il nuovo sito ha completamente trasformato la nostra presenza online. Ora abbiamo una galleria professionale dei nostri servizi e i clienti possono prenotare facilmente online.',
      author: 'Cinzia Verdi',
      role: 'Proprietaria Le Chic di Cinzia'
    }
  },

  'project-4': {
    id: 'project-4',
    title: 'La Lariana',
    subtitle: 'Pizzeria d\'Asporto',
    description: 'Sito web per pizzeria d\'asporto con posti a sedere, specializzata in pizze con impasto integrale e senza glutine.',
    year: 2025,
    client: 'La Lariana',
    url: 'https://lariana.andrea-mauri.duckdns.org/',
    category: 'Pizzeria & Ristorante',
    
    businessGoals: [
      'Creare una presenza online professionale per la pizzeria',
      'Presentare l\'offerta di pizze speciali (integrale e senza glutine)',
      'Facilitare l\'ordinazione e il contatto con i clienti',
      'Valorizzare la location di Erba e i servizi offerti'
    ],
    
    features: [
      'Menu digitale completo con pizze tradizionali e speciali',
      'Sezione dedicata alle pizze con impasto integrale',
      'Sezione per pizze senza glutine per celiaci',
      'Informazioni sulla pizzeria e sulla location di Erba',
      'Form di contatto per ordinazioni',
      'Design responsive ottimizzato per mobile',
      'Galleria fotografica dei prodotti',
      'Informazioni sui posti a sedere disponibili'
    ],
    
    results: [
      'Sito web moderno e professionale creato da zero',
      'Miglioramento della visibilità online della pizzeria',
      'Esperienza utente ottimizzata per l\'ordinazione',
      'Cliente completamente soddisfatto del risultato'
    ],
    
    process: [
      {
        title: 'Analisi dei Requisiti',
        description: 'Studio delle esigenze specifiche della pizzeria e del target di clientela'
      },
      {
        title: 'Design dell\'Interfaccia',
        description: 'Creazione di un design accogliente e appetitoso per valorizzare i prodotti'
      },
      {
        title: 'Sviluppo del Sito',
        description: 'Implementazione delle funzionalità per menu digitale e sistema di contatti'
      },
      {
        title: 'Ottimizzazione e Lancio',
        description: 'Test finali, ottimizzazione per dispositivi mobili e messa online'
      }
    ],
    
    mockups: [
      '/carouselMockup/La_Lariana/1.png',
      '/carouselMockup/La_Lariana/2.png',
      '/carouselMockup/La_Lariana/3.png',
    ],
    
    heroImage: '/carouselMockup/La_Lariana/0.png',
    
    testimonial: {
      text: 'Sono completamente soddisfatto del nuovo sito web! Ora i nostri clienti possono vedere facilmente tutte le nostre specialità, dalle pizze tradizionali a quelle integrali e senza glutine. Il sito rappresenta perfettamente la nostra pizzeria.',
      author: 'Marco Colombo',
      role: 'Proprietario La Lariana'
    }
  },
  'project-5': {
    id: 'project-5',
    title: 'InsideFaraoStudio',
    subtitle: 'Fotografo Professionista',
    description: 'Sito web su misura per fotografo con gestione progetti, galleria e pannello admin per upload e gestione contenuti.',
    year: 2025,
    client: 'Farao Studio',
    url: 'https://faraostudio.andrea-mauri.duckdns.org/',
    category: 'Fotografia',
    
    businessGoals: [
      'Presentare il portfolio in modo elegante e professionale',
      'Gestire autonomamente contenuti e progetti fotografici',
      'Offrire un\'esperienza visiva di alta qualità mantenendo performance eccellenti'
    ],
    
    features: [
      'Gestione personalizzata dei progetti con video, foto e descrizioni',
      'Pagina Admin su misura per upload e gestione contenuti',
      'Ottimizzazione immagini con diversi formati e thumbnail',
      'Download gratuito delle foto originali in alta qualità',
      'Galleria con foto in evidenza per Home e sezione dedicata',
      'Interfaccia veloce e responsive'
    ],
    
    results: [
      'Portfolio online professionale con alta qualità visiva',
      'Gestione autonoma dei contenuti tramite pannello admin intuitivo',
      'Navigazione fluida grazie all\'ottimizzazione intelligente delle immagini'
    ],
    
    process: [
      {
        title: 'Progettazione UI/UX',
        description: 'Creazione di un design elegante che valorizza le fotografie mantenendo focus sull\'esperienza visiva'
      },
      {
        title: 'Sviluppo Backend',
        description: 'Implementazione del sistema di gestione contenuti e ottimizzazione delle immagini con Sharp e imagemin'
      },
      {
        title: 'Implementazione Frontend',
        description: 'Sviluppo delle pagine Home, Galleria, Progetti e interfaccia Admin personalizzata'
      },
      {
        title: 'Ottimizzazione Media',
        description: 'Configurazione di conversioni multiple delle immagini preservando gli originali ad alta qualità'
      },
      {
        title: 'Testing e Deploy',
        description: 'Test delle performance, deploy con Docker e NGINX per garantire velocità e affidabilità'
      }
    ],
    
    mockups: [
      '/carouselMockup/rafa/3.png',
      '/carouselMockup/rafa/2.png',
      '/carouselMockup/rafa/1.png'
    ],
    
    // Immagine di sfondo per la hero section
    heroImage: '/carouselMockup/rafa/0.png',
    
    testimonial: {
      text: 'Il sito rispecchia perfettamente la mia visione artistica. Posso gestire autonomamente tutti i miei progetti e le foto vengono mostrate con una qualità eccezionale senza rallentare la navigazione.',
      author: 'Raffaele',
      role: 'Fotografo Professionista'
    }
  },

  'ilaria-Linktree': {
    id: 'ilaria-Linktree',
    title: 'Ilaria UGC Linktree',
    subtitle: 'Linktree',
    description: 'Landing linktree con vetrina prodotti, affiliazioni e portfolio per creator UGC, gestita da pannello admin.',
    year: 2025,
    client: 'Ilaria',
    url: 'https://ila.ravai.it/',
    category: 'Linktree',
    
    businessGoals: [
      'Centralizzare vendita guide, coaching, affiliazioni e portfolio in un unico Linktree',
      'Gestione autonoma dei contenuti tramite pannello admin',
      'Creare una presenza online professionale per creator UGC'
    ],
    
    features: [
      'Tab Best Selling, Free Guides, Blog, Portfolio con filtraggio lato frontend',
      'Card prodotti con CTA, prezzi range, layout immagine sinistra/destra',
      'Pannello admin per creazione/modifica/eliminazione prodotti',
      'Upload immagini con Multer e salvataggio in /public/uploads',
      'Validazione payload lato backend e gestione file JSON robusta',
      'UI responsive con animazioni leggere (fade/scale) e SEO-friendly markup',
      'Preset Docker + Nginx + supervisord per serve frontend e API'
    ],
    
    results: [
      'Web app full-stack completa e funzionante',
      'Gestione autonoma dei contenuti tramite pannello admin',
      'Deploy containerizzato con Docker e Nginx per alta disponibilità'
    ],
    
    process: [
      {
        title: 'Raccolta Requisiti',
        description: 'Analisi delle esigenze della creator UGC per centralizzare tutti i link in un\'unica landing page'
      },
      {
        title: 'UI/UX Design',
        description: 'Progettazione dell\'interfaccia con tab dinamiche e card prodotti personalizzabili'
      },
      {
        title: 'API Express + Storage JSON',
        description: 'Sviluppo del backend con Express, validazione payload e gestione file JSON per persistenza dati'
      },
      {
        title: 'Frontend Vite/Tailwind',
        description: 'Implementazione frontend React/TypeScript con Vite e Tailwind CSS per UI responsive'
      },
      {
        title: 'Upload & Admin Panel',
        description: 'Sviluppo del pannello admin per CRUD prodotti con upload immagini tramite Multer'
      },
      {
        title: 'Docker/Nginx Deploy',
        description: 'Configurazione Docker con Nginx e supervisord per deploy containerizzato'
      }
    ],
    
    mockups: [
      '/carouselMockup/linktree/1.png',
      '/carouselMockup/linktree/2.png',
      '/carouselMockup/linktree/3.png',

    ],
    
    heroImage: '/carouselMockup/linktree/0.png',
    
    testimonial: {
      text: 'La landing page linktree ha completamente trasformato il modo in cui gestisco i miei contenuti. Ora posso aggiungere e modificare prodotti autonomamente attraverso il pannello admin, e tutti i miei link sono centralizzati in un unico posto professionale.',
      author: 'Ilaria',
      role: 'Creator UGC'
    }
  }

}; 