import { Home, UtensilsCrossed, Scissors, Wrench, Star, Sparkles, Package, ShoppingCart, Dumbbell, Briefcase, Stethoscope, Hammer, Building, GraduationCap, Camera } from 'lucide-react';
import type { BusinessType, Extra, Recurring } from '../types/configurator';

export const businessTypes: BusinessType[] = [
    {
        id: 'airbnb',
        title: 'Airbnb / Casa Vacanze',
        icon: Home,
        description: 'Soluzioni per strutture ricettive e case vacanze',
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 'restaurant',
        title: 'Ristoranti / Pizzerie / Bar',
        icon: UtensilsCrossed,
        description: 'Siti web per ristoranti, pizzerie e food business',
        color: 'from-orange-500 to-orange-600'
    },
    {
        id: 'beauty',
        title: 'Estetiste / Parrucchieri',
        icon: Scissors,
        description: 'Presenza online per centri estetici e parrucchieri',
        color: 'from-pink-500 to-pink-600'
    },
    {
        id: 'workshop',
        title: 'Officina / Libero Professionista',
        icon: Wrench,
        description: 'Siti web per officine, artigiani e professionisti',
        color: 'from-slate-500 to-slate-600'
    },
    {
        id: 'ecommerce',
        title: 'E-commerce / Vendita al dettaglio',
        icon: ShoppingCart,
        description: 'Negozi online e vendita di prodotti',
        color: 'from-purple-500 to-purple-600'
    },
    {
        id: 'fitness',
        title: 'Palestre / Personal Trainer',
        icon: Dumbbell,
        description: 'Siti web per fitness, palestre e allenatori',
        color: 'from-red-500 to-red-600'
    },
    {
        id: 'consulting',
        title: 'Consulenti / Agenzie',
        icon: Briefcase,
        description: 'Presenza online per consulenti e agenzie',
        color: 'from-indigo-500 to-indigo-600'
    },
    {
        id: 'medical',
        title: 'Medici / Cliniche',
        icon: Stethoscope,
        description: 'Soluzioni per studi medici e cliniche private',
        color: 'from-teal-500 to-teal-600'
    },
    {
        id: 'construction',
        title: 'Impresa Edile / Artigiani',
        icon: Hammer,
        description: 'Siti web per imprese edili, idraulici, elettricisti e artigiani',
        color: 'from-amber-600 to-amber-700'
    },
    {
        id: 'real-estate',
        title: 'Agenzie Immobiliari',
        icon: Building,
        description: 'Siti web per agenzie immobiliari e property manager',
        color: 'from-emerald-500 to-emerald-600'
    },
    {
        id: 'education',
        title: 'Scuole / Corsi',
        icon: GraduationCap,
        description: 'Siti web per scuole, tutor e corsi di formazione',
        color: 'from-blue-600 to-blue-700'
    },
    {
        id: 'photography',
        title: 'Fotografi / Videomaker',
        icon: Camera,
        description: 'Portfolio professionali per fotografi e videomaker',
        color: 'from-fuchsia-500 to-fuchsia-600'
    }
];

export const getPackagesForType = (type: string) => {
    const prices = {
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

    const typeKey = type as keyof typeof prices;
    const typePrices = prices[typeKey] || prices.airbnb;

    return [
        {
            id: 'base' as const,
            name: 'Pacchetto Start',
            price: typePrices.base,
            icon: Star,
            color: 'from-green-500 to-green-600',
            features: [
                'Sito vetrina fino a 3 pagine',
                'Design personalizzato',
                'Mobile responsive',
                'SEO base',
                'Integrazione Google Maps',
                'Form contatto',
                'WhatsApp button',
                '1 revisione inclusa'
            ]
        },
        {
            id: 'pro' as const,
            name: 'Pro',
            price: typePrices.pro,
            icon: Sparkles,
            color: 'from-slate-600 to-slate-800',
            isPopular: true,
            features: [
                'Tutto dello START',
                'SEO locale avanzata',
                'Copywriting strategico',
                'Sistema prenotazioni',
                'Integrazione recensioni Google',
                'Setup base Instagram professionale',
                'Mini strategia contenuti 30 giorni'
            ]
        },
        {
            id: 'premium' as const,
            name: 'Premium',
            price: typePrices.premium,
            icon: Package,
            color: 'from-amber-500 to-amber-600',
            features: [
                'Tutto del PRO',
                'Funnel email base',
                'SEO incentrata per AI',
                'Report performance 60 giorni',
                '1 mese gestione social incluso'
            ]
        }
    ];
};

export const extras: Extra[] = [
    { id: 'extra-pages', name: 'Pagine aggiuntive', price: 70, category: 'web', description: 'Aggiunta di una pagina personalizzata con struttura strategica e ottimizzazione mobile. (Chi siamo, FAQ, Policies, Termini)' },
    { id: 'translations', name: 'Traduzioni professionali', price: 50, category: 'web', description: 'Traduzione professionale dei contenuti del sito con adattamento linguistico per il mercato locale.' },
    { id: 'ecommerce', name: 'Sistema e-commerce', price: 200, category: 'web', description: 'Integrazione completa per vendita online con carrello, pagamenti sicuri e gestione prodotti.' },
    { id: 'marketing-kit', name: 'Kit Marketing Completo', price: 120, category: 'marketing', description: 'Setup strategico di strumenti base per promozione online: bio ottimizzata, link strategico, CTA e struttura promozionale.' },
    { id: 'social-kit', name: 'Social Media Kit', price: 150, category: 'marketing', description: 'Template grafici personalizzati per post e storie, palette colori e linee guida visive coerenti con il brand.' },
    { id: 'newsletter', name: 'Sistema Newsletter Pro', price: 90, category: 'marketing', description: 'Setup piattaforma email, creazione lista contatti, automazioni base e prima campagna promozionale.' },
    { id: 'logo', name: 'Logo professionale', price: 40, category: 'branding', description: 'Creazione logo personalizzato con studio del settore e 2 revisioni incluse.' },
    { id: 'business-cards', name: 'Biglietti da visita', price: 90, category: 'branding', description: 'Design coordinato con il brand, pronto per stampa professionale.' },
    { id: 'brand-kit', name: 'Brand Identity Kit', price: 190, category: 'branding', description: 'Palette colori, font, linee guida visive, elementi grafici e mini brand book.' },
    { id: 'social-management', name: 'Gestione Social', price: 0, category: 'content', description: 'Produzione e montaggio video, creazione di post e gestione della community.' },
    { id: 'video-promo', name: 'Content Creation (Pacchetto)', price: 450, category: 'content', description: 'Produzione di 3 contenuti video ottimizzati per social media, con struttura strategica e CTA.' }
];

export const recurrings: Recurring[] = [
    { id: 'hosting', name: 'Hosting e Dominio', price: 12, description: 'Primi 6 mesi gratis, necessario per mantenere il sito online e sicuro.', isRequired: true },
    { id: 'maintenance', name: 'Manutenzione mensile', price: 19, description: 'Aggiornamenti, backup, piccole modifiche per mantenere il sito sempre perfetto.' },
    { id: 'gmb-management', name: 'Gestione Google My Business', price: 19, description: 'Molto richiesta dalle attività locali. Ottimizzazione mensile della scheda per la SEO locale.' },
    { id: 'seo-report', name: 'Report SEO mensile', price: 5, description: 'Per chi vuole monitorare costantemente i risultati di ricerca.' }
];
