import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean; // Per immagini critiche above-the-fold
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style, 
  priority = false 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Se priority è true, carica subito
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Non usare intersection observer per immagini prioritarie

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px' // Inizia a caricare 50px prima che l'immagine entri nel viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Loader minimale */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Immagine principale */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-500 ease-out transform ${
            isLoaded 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      
      {/* Fallback per errori */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <span className="text-slate-500 text-sm">Immagine non disponibile</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
