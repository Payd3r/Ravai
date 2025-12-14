import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Prodotti', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contatti', href: '/contact' },
  ];

  // Preload intelligente delle pagine al hover
  const handleLinkHover = (href: string) => {
    if (href !== location.pathname) {
      // Preload dinamico del chunk della pagina
      const routeMap: Record<string, () => Promise<any>> = {
        '/': () => import('../pages/Projects'),
        '/products': () => import('../pages/Products'),
        '/about': () => import('../pages/About'),
        '/contact': () => import('../pages/Contact')
      };
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/1.png"
              alt="Ravai"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-md font-semibold transition-colors ${location.pathname === item.href
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
                onMouseEnter={() => handleLinkHover(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${location.pathname === item.href
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;