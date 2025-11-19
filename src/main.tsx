import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Registrazione del Service Worker per caching avanzato
// TEMPORANEAMENTE DISABILITATO per debug
if (false && 'serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      // Verifica che il service worker sia accessibile prima di registrarlo
      const swUrl = '/sw.js';
      const response = await fetch(swUrl, { method: 'HEAD' });
      
      if (!response.ok) {
        console.warn('Service Worker non disponibile, skip registrazione');
        return;
      }
      
      const registration = await navigator.serviceWorker.register(swUrl, {
        scope: '/',
        updateViaCache: 'none' // Forza l'aggiornamento del service worker
      });
      
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
      
      // Gestisce gli errori del service worker
      registration.addEventListener('error', (error) => {
        console.error('Errore nel Service Worker:', error);
      });
    } catch (error) {
      console.error('Errore nella registrazione del Service Worker:', error);
      // In caso di errore, prova a deregistrare eventuali service worker vecchi
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
          await registration.unregister();
        }
      } catch (unregisterError) {
        console.error('Errore nella deregistrazione:', unregisterError);
      }
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
