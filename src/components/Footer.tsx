import { Link } from 'react-router-dom';
import { Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Termini e Condizioni', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Email', href: 'mailto:info@ravai.it', icon: Mail },    
    { name: 'GitHub', href: 'https://github.com/Payd3r', icon: Github },
  ];

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ravai. Tutti i diritti riservati.
            </p>
            <span className="hidden sm:inline text-slate-600" aria-hidden>|</span>
            <nav className="flex items-center gap-3" aria-label="Link legali">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center gap-3">
                  {index > 0 && <span className="text-slate-600 text-sm" aria-hidden>·</span>}
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;