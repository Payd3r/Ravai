// Dati pacchetti e add-on (sincronizzato con Products.tsx)
export const businessTypeLabels = {
  airbnb: 'Airbnb / Casa Vacanze',
  restaurant: 'Ristoranti / Pizzerie / Bar',
  beauty: 'Estetiste / Parrucchieri',
  workshop: 'Officina / Libero Professionista',
  ecommerce: 'E-commerce / Vendita al dettaglio',
  fitness: 'Palestre / Personal Trainer',
  consulting: 'Consulenti / Agenzie',
  medical: 'Medici / Cliniche',
  construction: 'Impresa Edile / Artigiani',
  'real-estate': 'Agenzie Immobiliari',
  education: 'Scuole / Corsi',
  photography: 'Fotografi / Videomaker'
};

export const packagePrices = {
  airbnb: { base: 297, pro: 447, premium: 647 },
  restaurant: { base: 297, pro: 447, premium: 470 },
  beauty: { base: 297, pro: 447, premium: 470 },
  workshop: { base: 297, pro: 447, premium: 470 },
  ecommerce: { base: 297, pro: 447, premium: 470 },
  fitness: { base: 297, pro: 447, premium: 470 },
  consulting: { base: 297, pro: 447, premium: 470 },
  medical: { base: 297, pro: 447, premium: 470 },
  construction: { base: 297, pro: 447, premium: 470 },
  'real-estate': { base: 297, pro: 447, premium: 470 },
  education: { base: 297, pro: 447, premium: 470 },
  photography: { base: 297, pro: 447, premium: 470 }
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
    '1 revisione inclusa'
  ],
  pro: [
    'Tutto dello START',
    'SEO locale avanzata',
    'Copywriting strategico',
    'Sistema prenotazioni',
    'Integrazione recensioni Google',
    'Setup base Instagram professionale',
    'Mini strategia contenuti 30 giorni'
  ],
  premium: [
    'Tutto del PRO',
    'Funnel email base',
    'SEO incentrata per AI',
    'Report performance 60 giorni',
    '1 mese gestione social incluso'
  ]
};

export const extras = [
  { id: 'extra-pages', name: 'Pagine aggiuntive', price: 70, description: 'Aggiunta di una pagina personalizzata con struttura strategica e ottimizzazione mobile.' },
  { id: 'translations', name: 'Traduzioni professionali', price: 50, description: 'Traduzione professionale dei contenuti con adattamento linguistico per il mercato locale.' },
  { id: 'ecommerce', name: 'Sistema e-commerce', price: 200, description: 'Integrazione completa per vendita online con carrello, pagamenti sicuri e gestione prodotti.' },
  { id: 'marketing-kit', name: 'Kit Marketing Completo', price: 120, description: 'Setup strategico: bio ottimizzata, link strategico, CTA e struttura promozionale.' },
  { id: 'social-kit', name: 'Social Media Kit', price: 150, description: 'Template grafici personalizzati per post e storie, palette colori e linee guida visive.' },
  { id: 'newsletter', name: 'Sistema Newsletter Pro', price: 90, description: 'Setup piattaforma email, lista contatti, automazioni base e prima campagna promozionale.' },
  { id: 'logo', name: 'Logo professionale', price: 40, description: 'Creazione logo personalizzato con studio del settore e 2 revisioni incluse.' },
  { id: 'business-cards', name: 'Biglietti da visita', price: 90, description: 'Design coordinato con il brand, pronto per stampa professionale.' },
  { id: 'brand-kit', name: 'Brand Identity Kit', price: 190, description: 'Palette colori, font, linee guida visive, elementi grafici e mini brand book.' },
  { id: 'social-management', name: 'Gestione Social', price: 0, description: 'Produzione e montaggio video, creazione di post e gestione della community.' },
  { id: 'video-promo', name: 'Content Creation (Pacchetto)', price: 450, description: 'Produzione di 3 contenuti video ottimizzati per social media con CTA.' }
];

export const recurrings = [
  { id: 'hosting', name: 'Hosting e Dominio', price: 12, description: 'Primi 6 mesi gratis, necessario per mantenere il sito online e sicuro.' },
  { id: 'maintenance', name: 'Manutenzione mensile', price: 19, description: 'Aggiornamenti, backup, piccole modifiche per mantenere il sito sempre perfetto.' },
  { id: 'gmb-management', name: 'Gestione Google My Business', price: 19, description: 'Molto richiesta dalle attività locali. Ottimizzazione mensile della scheda per la SEO locale.' },
  { id: 'seo-report', name: 'Report SEO mensile', price: 5, description: 'Per chi vuole monitorare costantemente i risultati di ricerca.' }
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
