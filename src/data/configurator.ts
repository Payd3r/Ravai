import { Home, UtensilsCrossed, Scissors, Wrench, Star, Sparkles, Package } from 'lucide-react';
import type { BusinessType, Extra } from '../types/configurator';

export const businessTypes: BusinessType[] = [
    {
        id: 'airbnb',
        title: 'Airbnb / Casa Vacanze',
        emoji: '🏡',
        icon: Home,
        description: 'Soluzioni per strutture ricettive e case vacanze',
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 'restaurant',
        title: 'Ristoranti / Pizzerie / Bar',
        emoji: '🍕',
        icon: UtensilsCrossed,
        description: 'Siti web per ristoranti, pizzerie e food business',
        color: 'from-orange-500 to-orange-600'
    },
    {
        id: 'beauty',
        title: 'Estetiste / Parrucchieri',
        emoji: '💇‍♀️',
        icon: Scissors,
        description: 'Presenza online per centri estetici e parrucchieri',
        color: 'from-pink-500 to-pink-600'
    },
    {
        id: 'workshop',
        title: 'Officina / Libero Professionista',
        emoji: '🔧',
        icon: Wrench,
        description: 'Siti web per officine, artigiani e professionisti',
        color: 'from-slate-500 to-slate-600'
    }
];

export const getPackagesForType = (type: string) => {
    const prices = {
        airbnb: { base: 297, pro: 397, premium: 597 },
        restaurant: { base: 297, pro: 397, premium: 420 },
        beauty: { base: 297, pro: 397, premium: 420 },
        workshop: { base: 297, pro: 397, premium: 420 }
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
                '1 revisione inclusa',
                'Hosting e dominio (50€/anno)',
                'Primi 6 mesi di hosting GRATIS!'
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
                'Mini strategia contenuti 30 giorni',
                'Hosting e dominio (50€/anno)',
                'Primi 6 mesi di hosting GRATIS!'
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
                '1 mese gestione social incluso',
                'Hosting e dominio (50€/anno)',
                'Primi 6 mesi di hosting GRATIS!'
            ]
        }
    ];
};

export const extras: Extra[] = [
    { id: 'extra-pages', name: 'Pagine aggiuntive', price: 30, category: 'web', description: 'Aggiunta di una pagina personalizzata con struttura strategica e ottimizzazione mobile. (Chi siamo, FAQ, Policies, Termini)' },
    { id: 'translations', name: 'Traduzioni professionali', price: 50, category: 'web', description: 'Traduzione professionale dei contenuti del sito con adattamento linguistico per il mercato locale.' },
    { id: 'ecommerce', name: 'Sistema e-commerce', price: 200, category: 'web', description: 'Integrazione completa per vendita online con carrello, pagamenti sicuri e gestione prodotti.' },
    { id: 'marketing-kit', name: 'Kit Marketing Completo', price: 120, category: 'marketing', description: 'Setup strategico di strumenti base per promozione online: bio ottimizzata, link strategico, CTA e struttura promozionale.' },
    { id: 'social-kit', name: 'Social Media Kit', price: 150, category: 'marketing', description: 'Template grafici personalizzati per post e storie, palette colori e linee guida visive coerenti con il brand.' },
    { id: 'newsletter', name: 'Sistema Newsletter Pro', price: 90, category: 'marketing', description: 'Setup piattaforma email, creazione lista contatti, automazioni base e prima campagna promozionale.' },
    { id: 'logo', name: 'Logo professionale', price: 40, category: 'branding', description: 'Creazione logo personalizzato con studio del settore e 2 revisioni incluse.' },
    { id: 'business-cards', name: 'Biglietti da visita', price: 90, category: 'branding', description: 'Design coordinato con il brand, pronto per stampa professionale.' },
    { id: 'brand-kit', name: 'Brand Identity Kit', price: 190, category: 'branding', description: 'Palette colori, font, linee guida visive, elementi grafici e mini brand book.' },
    { id: 'video-testimonials', name: 'Gestione Social', price: 0, category: 'content', description: 'Produzione e montaggio video, creazione di post e gestione della community.' },
    { id: 'video-promo', name: 'Content Creation (Pacchetto)', price: 450, category: 'content', description: 'Produzione di 3 contenuti video ottimizzati per social media, con struttura strategica e CTA.' }
];
