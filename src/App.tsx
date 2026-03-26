import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loading dei componenti per migliorare le prestazioni
const Projects = lazy(() => import('./pages/Projects'));
const Products = lazy(() => import('./pages/Products'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Componente di loading
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700 mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Caricamento...</p>
    </div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === '/products';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Route speciali per URL con parametri di esclusione */}
            <Route path="/asnd1acnk" element={<Projects />} /> {/* Esclude I Gladiatori */}
            <Route path="/bnt2xcvb" element={<Projects />} /> {/* Esclude Betta47 */}
            <Route path="/clm3qwer" element={<Projects />} /> {/* Esclude Le Chic */}
            <Route path="/dlr4tyui" element={<Projects />} /> {/* Esclude La Lariana */}
          </Routes>
        </Suspense>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
