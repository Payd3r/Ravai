export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: number;
  client: string;
  url: string;
  category: 'Pizzeria & Ristorante' | 'Bed & Breakfast' | 'Centro Estetico' | 'Fotografia' | 'Linktree';
  
  // Informazioni business-oriented
  businessGoals: string[];
  features: string[];
  results: string[];
  
  // Processo di lavoro
  process: {
    title: string;
    description: string;
  }[];
  
  // Mockups
  mockups: string[];
  
  // Immagine di sfondo per la hero section
  heroImage: string;
  
  // Confronto prima/dopo (opzionale)
  beforeAfter?: Array<{
    before: string;
    after: string;
    title?: string;
  }>;

  // Testimonianza cliente
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
} 