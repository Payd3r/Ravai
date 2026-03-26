import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import self-hosted Inter font
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './index.css'
import App from './App.tsx'

// Registrazione del Service Worker per caching avanzato
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registrato con successo:', registration.scope);

      // Gestisce gli aggiornamenti del service worker
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Nuovo service worker disponibile
              console.log('Nuovo contenuto disponibile, aggiorna la pagina');
            }
          });
        }
      });
    } catch (error) {
      console.error('Errore nella registrazione del Service Worker:', error);
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
