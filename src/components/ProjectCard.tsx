import type { Project } from '../types/Project';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  // Mappa per le immagini delle card (fallback per progetti vecchi)
  const getCardImage = (projectId: string) => {
    const imageMap: Record<string, string> = {
      'project-1': '/cardCover/i_gladiatori.jpg', // Placeholder per ora
      'project-2': '/cardCover/betta47.jpg',
      'project-3': '/cardCover/le_chic.jpg', // Placeholder per ora
      'project-4': '/cardCover/la_lariana.jpg',
      'project-5': '/cardCover/faraostudio.jpg',
      'project-6': '/cardCover/linktree.jpg',
    };
    return imageMap[projectId] || null;
  };

  // Usa l'immagine del progetto se disponibile, altrimenti usa la mappa
  const cardImage = project.image || getCardImage(project.id);

  return (
    <div
      className="card overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {cardImage ? (
          <div className="aspect-[4/3] relative">
            <OptimizedImage
              src={cardImage}
              alt={`${project.title} - ${project.subtitle}`}
              className="absolute inset-0"
              priority={false} // Lazy load per le card
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
        ) : (
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-slate-900 text-6xl font-bold mb-2">
                {project.title.charAt(0)}
              </div>
              <p className="text-slate-700 font-medium">Mockup Preview</p>
            </div>
          </div>
        )}
        
        {/* Links positioned in top-right */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-slate-700" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-slate-700" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center text-slate-700 text-sm bg-slate-200 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 mr-1" />
              {project.year}
            </span>
            <span className="text-white text-sm bg-slate-700 px-3 py-1 rounded-full font-medium">
              {project.subtitle}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>

        <p className="text-slate-600 text-md leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;