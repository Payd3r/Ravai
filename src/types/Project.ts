export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  year: number;
  client?: string;
  url?: string;
  github?: string;
  category: 'Pizzeria & Ristorante' | 'Bed & Breakfast' | 'Centro Estetico' | 'Fotografia';
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}