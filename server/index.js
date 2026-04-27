import express from 'express';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

// Fix per Node.js 17+: forza la risoluzione IPv4 per evitare timeout IPv6 (EAI_AGAIN) su DuckDNS in Docker
dns.setDefaultResultOrder('ipv4first');

import { generateQuotePdf } from './generatePdf.js';
import { businessTypeLabels, packagePrices, packageNames, packageFeatures, extras, recurrings } from './data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

// CORS - permetti richieste dal frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['POST', 'OPTIONS']
}));
app.use(express.json({ limit: '1mb' }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Invio preventivo con PDF
app.post('/api/send-quote', async (req, res) => {
  try {
    const { config, email } = req.body;

    if (!config?.customerName || !config?.businessType || !config?.package || !email) {
      return res.status(400).json({
        success: false,
        error: 'Dati mancanti: nome, tipo attività, pacchetto e email sono obbligatori.'
      });
    }

    const categoryLabel = businessTypeLabels[config.businessType] || config.businessType;
    const prices = packagePrices[config.businessType] || packagePrices.airbnb;
    const packagePrice = prices[config.package] || 0;
    const packageName = packageNames[config.package] || config.package;

    const selectedExtras = (config.extras || [])
      .map(id => extras.find(e => e.id === id))
      .filter(Boolean);
    const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
    const total = packagePrice + extrasTotal;

    const selectedRecurrings = (config.recurring || [])
      .map(id => recurrings.find(r => r.id === id))
      .filter(Boolean);

    const recurringItems = selectedRecurrings.map(r => ({
      name: `${r.name} (Mensile)`,
      priceText: `€${r.price}/mese`,
      description: r.description
    }));

    const extrasList = {
      packagePrice,
      items: [
        ...selectedExtras.map(e => ({ name: e.name, price: e.price, description: e.description })),
        ...recurringItems
      ]
    };

    const features = packageFeatures[config.package] || [];

    const pdfBuffer = await generateQuotePdf(
      config,
      packageName,
      categoryLabel,
      extrasList,
      total,
      features,
      email
    );

    const subject = `Il tuo preventivo per ${config.customerName}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <p>Ciao <strong>${config.customerName}</strong>,</p>
        <p>come anticipato, ti inviamo il preventivo per ${config.customerName}. Troverai tutti i dettagli nel PDF allegato.</p>
        <p>Siamo a disposizione per qualsiasi domanda o chiarimento e, se vuoi, possiamo anche fissare una breve call per spiegarti tutte le voci del preventivo.</p>
        <p>Restiamo in attesa di un tuo riscontro!</p>
        <p>Un caro saluto,</p>
        <p><strong>Il team RAVAI</strong></p>
      </div>
    `;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', config.customerName);
    formData.append('subject', subject);
    formData.append('body', htmlBody);

    const fileBlob = new Blob([pdfBuffer], { type: 'application/pdf' });
    formData.append('file', fileBlob, `preventivo-${config.customerName.replace(/\s+/g, '-')}.pdf`);

    const apiUrl = process.env.SCRAPER_API_URL || 'https://scraperback.andrea-mauri.duckdns.org/api/quotes/send';

    const scraperResponse = await fetch(apiUrl, {
      method: 'POST',
      body: formData
    });

    const result = await scraperResponse.json();

    if (!scraperResponse.ok || result.status !== 'success') {
      throw new Error(result?.message || "Errore durante l'invio tramite l'API dello scraper");
    }

    res.json({ success: true, message: 'Preventivo inviato con successo!' });
  } catch (err) {
    console.error('Errore invio preventivo:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Errore durante l\'invio del preventivo.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend RAVAI in ascolto su porta ${PORT}`);
});
