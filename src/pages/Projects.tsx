import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types/Project';
import { Code, Users, Clock, Award } from 'lucide-react';
import { useCardExclusion } from '../hooks/useCardExclusion';

const Projects = () => {
  const navigate = useNavigate();
  const { filterExcludedProjects } = useCardExclusion();

  // Filtra i progetti escludendo quelli specificati nell'URL
  const filteredProjects = filterExcludedProjects(projects);

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg pt-20 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Trasformiamo le tue idee in realtà digitali
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Creiamo siti web moderni e performanti per piccole e medie imprese come ristoranti, B&B e altro ancora. 
            Ogni progetto è studiato su misura per far crescere il tuo business online.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">{filteredProjects.length}</strong> Progetti completati</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">100%</strong> Clienti soddisfatti</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">7 giorni</strong> Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">2 anni</strong> Esperienza</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="accent-gradient text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Hai un progetto in mente?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg">
            Siamo sempre interessati a nuovi progetti stimolanti. Contattaci per discutere di come possiamo aiutarti a realizzare la tua visione.
          </p>
          <a href="/contact" className="btn-secondary bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4">
            Inizia una conversazione
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;