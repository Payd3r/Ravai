import type { Project } from '../types/Project';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  // Mappa per le immagini delle card (fallback)
  const getCardImage = (projectId: string) => {
    const imageMap: Record<string, string> = {
      'project-1': '/cardCover/i_gladiatori.jpg',
      'project-2': '/cardCover/betta47.jpg',
      'project-3': '/cardCover/le_chic.jpg',
      'project-4': '/cardCover/la_lariana.jpg',
      'project-5': '/cardCover/faraostudio.jpg',
      'project-6': '/cardCover/linktree.jpg',
    };
    return imageMap[projectId] || null;
  };

  const cardImage = project.image || getCardImage(project.id);

  return (
    <div
      className="bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-slate-100 hover:border-[rgb(15,23,42)] overflow-hidden cursor-pointer group transition-all duration-500 flex flex-col h-full"
      onClick={onClick}
    >
      {/* Container Immagine */}
      <div className="relative overflow-hidden w-full aspect-[16/10] sm:aspect-[4/3]">
        {cardImage ? (
          <OptimizedImage
            src={cardImage}
            alt={`${project.title} - ${project.subtitle}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            priority={false} // Lazy load
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 flex items-center justify-center transition-transform duration-700">
            <div className="text-center">
              <div className="text-slate-900 text-6xl font-black opacity-20 mb-2">
                {project.title.charAt(0)}
              </div>
              <p className="text-slate-500 font-medium">Anteprima</p>
            </div>
          </div>
        )}

        {/* Overlay Scuro al passaggio del mouse */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Pulsanti Fluttuanti (Links) */}
        <div className="absolute top-4 right-4 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-md p-2.5 rounded-xl hover:bg-white text-slate-700 hover:text-[rgb(15,23,42)] shadow-lg transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              title="Visita il sito"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-md p-2.5 rounded-xl hover:bg-white text-slate-700 hover:text-[rgb(15,23,42)] shadow-lg transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              title="Vedi su GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Contenuto Testuale */}
      <div className="p-5 sm:p-8 flex flex-col flex-1 bg-white relative z-10 transition-colors duration-500">

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center text-slate-600 text-xs font-semibold bg-slate-100 px-3 py-1.5 rounded-full ring-1 ring-slate-900/5 group-hover:bg-slate-200 group-hover:text-[rgb(15,23,42)] transition-colors">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {project.year}
          </span>
          <span className="inline-flex items-center text-white text-xs font-bold bg-slate-800 px-3 py-1.5 rounded-full shadow-sm group-hover:bg-[rgb(15,23,42)] transition-colors">
            {project.subtitle}
          </span>
        </div>

        {/* Titolo e Descrizione */}
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-[rgb(15,23,42)] transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-slate-600 text-base leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        {/* CTA visibile solo all'hover su desktop, o statica su mobile (indicatore) */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-slate-900 opacity-70 group-hover:opacity-100 group-hover:text-[rgb(15,23,42)] transition-all">
          <span>Scopri i dettagli</span>
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;