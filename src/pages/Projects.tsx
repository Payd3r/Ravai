import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types/Project';
import { Code, Users, Clock, Award, Layout, PenTool, Zap, MapPin, Search, Send } from 'lucide-react';
import FAQ from '../components/FAQ';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg pt-20 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Siti Web che Portano Clienti. Non Solo Visitatori.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Creiamo siti web strategici per attività locali come parrucchieri, ristoranti, pizzerie e professionisti, progettati per aumentare prenotazioni, chiamate e fatturato.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">{projects.length}</strong> Progetti completati</span>
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
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Calcola il tuo pacchetto
          </Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            I Nostri progetti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Contenuto aggiuntivo per SEO */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-center">
            Perché Scegliere Ravai per il Tuo Sito Web
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto text-center">
            Creiamo siti web professionali, veloci e perfetti su smartphone, tablet e computer.
            La maggior parte dei tuoi clienti ti cerca da telefono: il tuo sito deve essere semplice, chiaro e pronto a trasformare le visite in contatti.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 text-slate-50 opacity-50 z-0">
                <Layout className="w-32 h-32" />
              </div>
              <div className="relative z-10 text-slate-900 bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Design Moderno e Responsive</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Ogni sito web che creiamo è ottimizzato per tutti i dispositivi: smartphone, tablet e desktop. Il design responsive garantisce un'esperienza utente perfetta su qualsiasi schermo, aumentando le conversioni e riducendo il tasso di abbandono.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 text-slate-50 opacity-50 z-0">
                <Search className="w-32 h-32" />
              </div>
              <div className="relative z-10 text-slate-900 bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">SEO per Farti Trovare su Google</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Non basta avere un sito bello, deve essere trovato.
                Ottimizziamo ogni sito per Google così quando qualcuno cerca “parrucchiere a [città]” o “B&B vicino a me”, hai molte più possibilità di comparire nei risultati.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 text-slate-50 opacity-50 z-0">
                <Zap className="w-32 h-32" />
              </div>
              <div className="relative z-10 text-slate-900 bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Sito Veloce = Più Prenotazioni</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Se un sito è lento, le persone lo chiudono.
                Realizziamo siti leggeri e veloci che si caricano in pochi secondi.
                Questo migliora l’esperienza dei clienti e aiuta il posizionamento su Google.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 text-slate-50 opacity-50 z-0">
                <MapPin className="w-32 h-32" />
              </div>
              <div className="relative z-10 text-slate-900 bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Specializzati in Attività Locali</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Conosciamo le esigenze specifiche di ristoranti, pizzerie, B&B, parrucchieri ed estetisti. Creiamo soluzioni personalizzate che mettono in risalto i tuoi servizi, facilitano le prenotazioni e aumentano il contatto diretto con i clienti.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 text-slate-50 opacity-50 z-0">
                <Clock className="w-32 h-32" />
              </div>
              <div className="relative z-10 text-slate-900 bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Delivery Rapido</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Il tuo sito web sarà online in soli 7 giorni. Grazie al nostro processo di sviluppo ottimizzato e alla nostra esperienza, garantiamo tempi di consegna rapidi senza compromettere la qualità del risultato finale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 text-slate-50 opacity-50 z-0">
                <Users className="w-32 h-32" />
              </div>
              <div className="relative z-10 text-slate-900 bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Supporto Continuo</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Offriamo assistenza, aggiornamenti e supporto per far crescere la tua presenza online nel tempo.
                Il nostro obiettivo è aiutarti ad avere più clienti, non solo consegnarti un sito.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Il Nostro Processo di Lavoro
              </h3>
              <p className="text-slate-600 text-lg">
                Dall'idea iniziale fino alla pubblicazione, ti accompagniamo in ogni passo.
              </p>
            </div>

            <div className="relative">
              {/* Linea orizzontale di collegamento - solo desktop */}
              <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                <div className="flex flex-col items-center text-center relative">
                  {/* Linea verticale di collegamento - solo mobile */}
                  <div className="md:hidden absolute top-[80px] bottom-[-40px] left-1/2 w-0.5 bg-slate-200 z-0 -translate-x-1/2"></div>

                  <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-md rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Search className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border border-slate-100 shadow-sm relative z-10">Fase 1</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10 bg-slate-50/50">Analisi</h4>
                  <p className="text-sm text-slate-600 relative z-10">Studiamo la tua attività e i tuoi obiettivi di mercato.</p>
                </div>

                <div className="flex flex-col items-center text-center relative">
                  {/* Linea verticale di collegamento - solo mobile */}
                  <div className="md:hidden absolute top-[80px] bottom-[-40px] left-1/2 w-0.5 bg-slate-200 z-0 -translate-x-1/2"></div>

                  <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-md rounded-full flex items-center justify-center mb-4 relative z-10">
                    <PenTool className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border border-slate-100 shadow-sm relative z-10">Fase 2</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10 bg-slate-50/50">Design</h4>
                  <p className="text-sm text-slate-600 relative z-10">Creiamo un'interfaccia su misura per la tua immagine.</p>
                </div>

                <div className="flex flex-col items-center text-center relative">
                  {/* Linea verticale di collegamento - solo mobile */}
                  <div className="md:hidden absolute top-[80px] bottom-[-40px] left-1/2 w-0.5 bg-slate-200 z-0 -translate-x-1/2"></div>

                  <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-md rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Code className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border border-slate-100 shadow-sm relative z-10">Fase 3</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10 bg-slate-50/50">Sviluppo</h4>
                  <p className="text-sm text-slate-600 relative z-10">Realizziamo il sito con tecnologie moderne e veloci.</p>
                </div>

                <div className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-md rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Send className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border border-slate-100 shadow-sm relative z-10">Fase 4</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10 bg-slate-50/50">Lancio</h4>
                  <p className="text-sm text-slate-600 relative z-10">Pubblichiamo la piattaforma e monitoriamo i risultati.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

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
    </main>
  );
};

export default Projects;