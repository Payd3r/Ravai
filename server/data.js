// Dati pacchetti e add-on (sincronizzato con Products.tsx)
export const businessTypeLabels = {
  airbnb: 'Airbnb / Casa Vacanze',
  restaurant: 'Ristoranti / Pizzerie / Bar',
  beauty: 'Estetiste / Parrucchieri',
  workshop: 'Officina / Libero Professionista'
};

export const packagePrices = {
  airbnb: { base: 297, pro: 397, premium: 597 },
  restaurant: { base: 297, pro: 397, premium: 420 },
  beauty: { base: 297, pro: 397, premium: 420 },
  workshop: { base: 297, pro: 397, premium: 420 }
};

export const packageNames = {
  base: 'Pacchetto Start',
  pro: 'Pro',
  premium: 'Premium'
};

// Features per ogni pacchetto (per il PDF)
export const packageFeatures = {
  base: [
    'Sito vetrina fino a 3 pagine',
    'Design personalizzato',
    'Mobile responsive',
    'SEO base',
    'Integrazione Google Maps',
    'Form contatto',
    'WhatsApp button',
    '1 revisione inclusa',
    'Hosting e dominio (15€/anno)',
    'Primi 6 mesi di hosting GRATIS!'
  ],
  pro: [
    'Tutto dello START',
    'SEO locale avanzata',
    'Copywriting strategico',
    'Sistema prenotazioni',
    'Integrazione recensioni Google',
    'Setup base Instagram professionale',
    'Mini strategia contenuti 30 giorni',
    'Hosting e dominio (15€/anno)',
    'Primi 6 mesi di hosting GRATIS!'
  ],
  premium: [
    'Tutto del PRO',
    'Funnel email base',
    'SEO incentrata per AI',
    'Report performance 60 giorni',
    '1 mese gestione social incluso',
    'Hosting e dominio (15€/anno)',
    'Primi 6 mesi di hosting GRATIS!'
  ]
};

export const extras = [
  { id: 'extra-pages', name: 'Pagine aggiuntive', price: 30, description: 'Aggiunta di una pagina personalizzata con struttura strategica e ottimizzazione mobile.' },
  { id: 'translations', name: 'Traduzioni professionali', price: 50, description: 'Traduzione professionale dei contenuti con adattamento linguistico per il mercato locale.' },
  { id: 'ecommerce', name: 'Sistema e-commerce', price: 200, description: 'Integrazione completa per vendita online con carrello, pagamenti sicuri e gestione prodotti.' },
  { id: 'marketing-kit', name: 'Kit Marketing Completo', price: 120, description: 'Setup strategico: bio ottimizzata, link strategico, CTA e struttura promozionale.' },
  { id: 'social-kit', name: 'Social Media Kit', price: 150, description: 'Template grafici personalizzati per post e storie, palette colori e linee guida visive.' },
  { id: 'newsletter', name: 'Sistema Newsletter Pro', price: 90, description: 'Setup piattaforma email, lista contatti, automazioni base e prima campagna promozionale.' },
  { id: 'logo', name: 'Logo professionale', price: 40, description: 'Creazione logo personalizzato con studio del settore e 2 revisioni incluse.' },
  { id: 'business-cards', name: 'Biglietti da visita', price: 90, description: 'Design coordinato con il brand, pronto per stampa professionale.' },
  { id: 'brand-kit', name: 'Brand Identity Kit', price: 190, description: 'Palette colori, font, linee guida visive, elementi grafici e mini brand book.' },
  { id: 'video-testimonials', name: 'Gestione Social', price: 0, description: 'Produzione e montaggio video, creazione di post e gestione della community.' },
  { id: 'video-promo', name: 'Content Creation (Pacchetto)', price: 450, description: 'Produzione di 3 contenuti video ottimizzati per social media con CTA.' }
];

// Info di contatto per il PDF
export const companyInfo = {
  name: 'RAVAI',
  tagline: 'Siti web che portano clienti',
  email: 'info@ravai.it',
  phone: '+39 334 758 3173',
  location: 'Como, Italia',
  website: 'https://ravai.it'
};
