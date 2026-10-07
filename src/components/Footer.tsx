import { Link } from 'react-router-dom';
import { Mail, Github } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/393395375902?text=Buongiorno%20Ravai%20vorrei%20contattarvi%20per%20';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .4 5.2.4 11.7c0 2.1.6 4.1 1.6 5.9L.3 24l6.6-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.5 0 11.7-5.2 11.7-11.7 0-3.1-1.3-6.1-3.8-8.5ZM12.6 21.7h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.7 4.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.2-.2-.5-.4Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Termini e Condizioni', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'WhatsApp', href: WHATSAPP_LINK, icon: WhatsAppIcon },
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
                aria-label={link.name === 'WhatsApp' ? 'Chat with us on WhatsApp' : link.name}
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
