import { Code, Heart, Zap, ExternalLink, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const About = () => {
  // Helper per i link social
  const renderSocialLinks = (member: any, className = "") => (
    <div className={`flex gap-4 ${className}`}>
      {member.portfolio && (
        <a
          href={member.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-900 transition-colors"
          title="Portfolio"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      )}
      {member.github && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-900 transition-colors"
          title="GitHub"
        >
          <Code className="w-5 h-5" />
        </a>
      )}
      {member.instagram && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-900 transition-colors"
          title="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
      )}
    </div>
  );

  // Utilità: usa {{parola}} nel testo per evidenziare in azzurro
  const renderWithHighlights = (text: string) => {
    const parts = text.split(/(\{\{[^}]+\}\})/g);
    return parts.map((part, i) =>
      part.startsWith('{{') ? (
        <span key={i} className="bg-blue-100 px-0.5 rounded-sm">{part.slice(2, -2)}</span>
      ) : (
        part
      )
    );
  };

  const teamMembers = [
    {
      name: 'Andrea Mauri',
      role: 'Tech & Development',
      image: '/team/andrea.jpeg',
      description: 'Laureato in Informatica presso l\'Università dell\'Insubria. Ha lavorato come professore di informatica e oggi studio in Magistrale presso l\'Università Bicocca. Nel tempo libero testa nuovi strumenti, studia le evoluzioni digitali e sperimenta soluzioni per rendere i siti sempre più {{performanti}}. \n{{Struttura}}. {{Precisione}}. {{Logica}}.',
      skills: ['React', 'TypeScript', 'Node.js', 'UI/UX'],
      portfolio: 'https://portfolio.andrea-mauri.duckdns.org/',
      github: 'https://github.com/Payd3r'
    },
    {
      name: 'Ilaria Gatti',
      role: 'Marketing & Strategy',
      image: '/team/ilaria.jpeg',
      description: 'Laurea 110 e Lode in Economics & Management alla Bocconi. Due anni in agenzia marketing lavorando con oltre {{400+ brand}} nella creazione di contenuti. Oggi crea contenuti di viaggio per una community di oltre {{16.000 persone}}. \n{{Strategia}}, comunicazione e posizionamento sono ciò che trasformano un sito in uno strumento che {{porta clienti}}.',
      skills: ['Fotografia', 'Copywriting', 'Social Media', 'Branding'],
      portfolio: 'https://ilariaugc.net/',
      instagram: 'https://www.instagram.com/ilariaugc/'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - allineato a Projects e Contact */}
      <section className="gradient-bg pt-20 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Chi siamo
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Due professionisti con competenze complementari: marketing e contenuti da una parte, tecnologia e sviluppo dall&apos;altra. Creiamo siti web che non sono solo belli — {renderWithHighlights('{{funzionano}}')}.
          </p>

          {/* Stats - stesso stile di Projects */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-600 mt-10 mb-8">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">Sviluppo</strong> personalizzato</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">Strategia</strong> su misura</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-slate-900" />
              <span><strong className="text-slate-900">Supporto</strong> continuo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - layout card compatto */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Il nostro team</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Due personalità, una visione comune: esperienze digitali che fanno la differenza
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300"
              >
                {/* Immagine responsive */}
                <div className="relative w-full sm:w-48 md:w-64 h-64 sm:h-auto overflow-hidden bg-slate-100 flex-shrink-0">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                  {/* Link social solo per MOBILE - posizionati sull'immagine */}
                  <div className="absolute top-4 right-4 sm:hidden bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/20">
                    {renderSocialLinks(member, "gap-3")}
                  </div>
                </div>

                {/* Contenuto */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col">
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                      <span className="hidden sm:inline text-slate-400">|</span>
                      <p className="text-slate-600 font-semibold text-sm uppercase tracking-wider">{member.role}</p>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed whitespace-pre-line">
                      {renderWithHighlights(member.description)}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Link social solo per DESKTOP - nel footer della card */}
                    {renderSocialLinks(member, "hidden sm:flex")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - accent-gradient come Projects */}
      <section className="accent-gradient text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Vuoi lavorare con noi?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg">
            Siamo qui per costruire strumenti digitali che aiutino la tua attività a crescere. Contattaci per una consulenza gratuita.
          </p>
          <Link
            to="/contact"
            className="btn-secondary bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
