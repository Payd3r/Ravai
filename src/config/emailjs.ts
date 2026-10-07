// Configurazione EmailJS per Aruba Mail
// IMPORTANTE: Segui la guida in ARUBA_EMAILJS_SETUP.md per la configurazione completa
// 
// Parametri SMTP Aruba da usare in EmailJS:
// Server: smtps.aruba.it
// Porta: 465 (SSL) o 587 (TLS)
// Username: info@ravai.it (email completa)
// Password: password della tua email Aruba

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_qakchoh', // Service ID ottenuto dopo aver configurato Aruba in EmailJS
  TEMPLATE_ID: 'template_8ewk31c', // Template ID del template creato
  PUBLIC_KEY: 'Jwzo6pwpqJocIjbAW' // Public Key del tuo account EmailJS
};

// Template suggerito per EmailJS:
// Subject: Nuovo messaggio da {{from_name}} - {{subject}}
// Body:
// Nome: {{from_name}}
// Email: {{from_email}}
// Oggetto: {{subject}}
// 
// Messaggio:
// {{message}}
// 
// --
// Questo messaggio è stato inviato dal form di contatto di ravai.it
