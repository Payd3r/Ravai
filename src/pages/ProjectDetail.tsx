import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, User, Globe } from 'lucide-react';
import { projects } from '../data/projects';
import { projectDetails } from '../data/projectDetails';
import MockupCarousel from '../components/MockupCarousel';
// import BeforeAfterCarousel from '../components/BeforeAfterCarousel';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const projectDetail = projectDetails[id as string];

  if (!project || !projectDetail) {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Progetto non trovato</h1>
            <p className="text-slate-600 mb-8">Il progetto che stai cercando non esiste.</p>
            <Link to="/projects" className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna ai progetti
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // const beforeAfterItems = projectDetail.beforeAfter || [];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="gradient-bg py-16 relative overflow-hidden">
        {/* Immagine di sfondo con opacità e proporzioni mantenute */}
        <div className="absolute inset-0">
          <img 
            src={projectDetail.heroImage}
            alt={`${project.title} background`}
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        
        {/* Overlay per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70" />
        
        <div className="container-custom relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center text-slate-900 hover:text-slate-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna ai progetti
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="flex items-center text-slate-700 text-sm bg-slate-200 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-1" />
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visita il sito
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Codice sorgente
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Mockups Gallery */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Mockups del progetto</h2>
                <MockupCarousel projectTitle={project.title} projectId={project.id} />
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Caratteristiche principali</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before/After Comparison (solo per Betta47) - COMMENTATO */}
              {/* {project.id === 'project-2' && beforeAfterItems.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Confronto Prima/Dopo</h2>
                  <BeforeAfterCarousel items={beforeAfterItems} />
                </div>
              )} */}

              {/* Business Goals */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Obiettivi di business</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.businessGoals.map((goal: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Risultati ottenuti</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.results.map((result: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Processo di lavoro</h2>
                <div className="space-y-6">
                  {projectDetail.process.map((step: { title: string; description: string }, index: number) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Informazioni progetto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-sm text-slate-500">Anno</p>
                      <p className="font-medium text-slate-900">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-sm text-slate-500">Categoria</p>
                      <p className="font-medium text-slate-900 capitalize">{project.category.replace('-', ' ')}</p>
                    </div>
                  </div>

                  {project.client && (
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="text-sm text-slate-500">Cliente</p>
                        <p className="font-medium text-slate-900">{project.client}</p>
                      </div>
                    </div>
                  )}

                  {project.url && (
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="text-sm text-slate-500">Sito web</p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-900 hover:text-slate-700 transition-colors"
                        >
                          Visita il sito
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="card p-6 accent-gradient text-white hidden">
                <h3 className="text-lg font-semibold mb-4">Testimonianza cliente</h3>
                <p className="text-slate-200 mb-4 italic">"{projectDetail.testimonial.text}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold">{projectDetail.testimonial.author}</p>
                  <p className="text-sm text-slate-300">{projectDetail.testimonial.role}</p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Vuoi un progetto simile?</h3>
                <p className="text-slate-600 mb-6">
                  Contattaci per discutere di come possiamo aiutarti a realizzare la tua visione.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Inizia una conversazione
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione prima/dopo legacy rimossa in favore del nuovo slider con thumbs */}
    </div>
  );
};

export default ProjectDetail;