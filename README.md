# 🚀 RAVAI — Digital Web Agency & Interactive Project Configurator

<p align="center">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge&logo=git" alt="Status" />
  <img src="https://img.shields.io/badge/Frontend-React_18_+_Vite-61DAFB?style=for-the-badge&logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Feature-Interactive_Configurator-FF9900?style=for-the-badge" alt="Configurator" />
  <img src="https://img.shields.io/badge/DevOps-Docker_+_Nginx-2496ED?style=for-the-badge&logo=docker" alt="Docker" />
</p>

---

## 📖 Panoramica

**RAVAI** è la landing page e piattaforma ufficiale per la web agency RAVAI (sviluppo soluzioni digitali, e-commerce, PWA e landing page ad alte conversioni).

Il sito offre una panoramica accattivante dei servizi e delle realizzazioni dell'agenzia, combinata con un sofisticato **Configuratore Interattivo di Progetti** a step. Attraverso il configuratore, i potenziali clienti possono personalizzare la tipologia di sito, funzionalità desiderate, tempistiche e budget, ricevendo una stima in tempo reale e inviando la richiesta direttamente tramite integrazione EmailJS.

---

## ✨ Funzionalità Chiave

### 🎛️ Configuratore di Progetti a Step
- **Wizard Interattivo (Step 1-4):** Selezione guidata tra Landing Page, Sito Vetrina, E-Commerce o Web App / PWA su misura.
- **Logica di Esclusione Dinamica:** Hook proprietario `useCardExclusion` che adatta le opzioni selezionabili in base ai vincoli tecnici e di budget.
- **Calcolo Preventivo in Tempo Reale:** Stima trasparente dell'investimento e della timeline stimata.
- **Dispatch Richieste EmailJS:** Inoltro istantaneo dei dettagli configurati alla casella dell'agenzia con feedback visivo.

### 🖼️ Showcase & Confronti Interattivi
- **Slider Prima / Dopo:** Componenti dedicati (`BeforeAfterSlider.tsx`, `BeforeAfterCarousel.tsx`) per visualizzare il restyling grafico e prestazionale dei progetti dei clienti.
- **Mockup Carousel:** Galleria responsive di preview desktop, tablet e mobile per ogni progetto in portfolio.
- **Pagine di Dettaglio Progetto:** Approfondimenti su stack tecnologico, sfide risolte e risultati raggiunti.

### ⚡ Ottimizzazioni Tecniche & SEO
- **Script di Route Pre-rendering:** Generatore automatico di file HTML statici per ciascuna rotta (`scripts/generate-route-html.js`) a supporto dell'indicizzazione motori di ricerca.
- **Smooth Scroll & Micro-Animazioni:** Scorrimento inerziale (`SmoothScroll.tsx`) e componenti animati Tailwind.
- **Asset Pipeline:** Script per l'ottimizzazione e compressione delle immagini WebP.

---

## 🛠️ Stack Tecnologico

| Layer | Tecnologie | Note |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/), [Vite](https://vitejs.dev/) | Client SPA moderno e compilazione ultrarapida |
| **Linguaggio** | [TypeScript](https://www.typescriptlang.org/) | Type safety completa su dataset e stati del configuratore |
| **Styling** | [TailwindCSS](https://tailwindcss.com/) | Design personalizzato, dark aesthetic e layout responsivo |
| **Routing** | [React Router v6](https://reactrouter.com/) | Gestione URL client-side e schede progetto |
| **Email Service** | [EmailJS](https://www.emailjs.com/) | Dispatcher email serverless per le richieste di preventivo |
| **Icone** | [Lucide React](https://lucide.dev/) | Set iconografico coerente e leggero |
| **DevOps** | [Docker Compose](https://docs.docker.com/compose/), [Nginx](https://nginx.org/) | Nginx Alpine multi-stage con caching e compressione gzip |

---

## 📂 Struttura del Progetto

```bash
RAVAI/
├── nginx.conf                 # Configurazione server Nginx (SPA fallback, gzip)
├── public/
│   ├── carouselMockup/        # Asset per slider Before/After
│   ├── robots.txt             # Direttive crawler
│   └── sitemap.xml            # Mappa del sito
├── scripts/
│   ├── generate-route-html.js # Generazione statica HTML per SEO
│   ├── optimize-images.js     # Script batch compressione immagini
│   └── performance-analysis.js # Audit bundle e tempi di caricamento
├── src/
│   ├── components/            # Header, Footer, FAQ, MockupCarousel, BeforeAfterSlider
│   │   └── Configurator/      # Step 1, 2, 3 e 4 del preventivatore
│   ├── pages/                 # Projects, ProjectDetail, Products, Contact
│   ├── data/                  # Dataset configuratore e progetti
│   ├── hooks/                 # Custom hook (useCardExclusion)
│   ├── config/emailjs.ts      # Configurazione credenziali EmailJS
│   └── types/                 # Interfacce TypeScript
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yml         # Compose stack per deploy
└── README.md
```

---

## 🚀 Guida all'Installazione Locale

### Prerequisiti
- **Node.js** >= 18
- **npm** o **pnpm**

### 1. Clonazione del Repository
```bash
git clone git@github.com:Payd3r/Landingpage.git
cd RAVAI

npm install
```

### 2. Configurazione Ambiente
Crea un file `.env` per EmailJS:
```env
VITE_EMAILJS_SERVICE_ID=il_tuo_service_id
VITE_EMAILJS_TEMPLATE_ID=il_tuo_template_id
VITE_EMAILJS_PUBLIC_KEY=la_tua_public_key
```

### 3. Avvio in Sviluppo
```bash
npm run dev
```
Il sito sarà attivo su `http://localhost:5173`.

### 4. Build di Produzione con Pre-rendering SEO
```bash
npm run build
node scripts/generate-route-html.js
```

---

## 🐳 Avvio con Docker

```bash
# Avvio del container collegato alla rete proxy
docker compose up -d --build
```

---

## 👤 Autore & Team

**Andrea Mauri** (RAVAI Digital Solutions)
- Website: [ravai.it](https://www.ravai.it/)
- GitHub: [@Payd3r](https://github.com/Payd3r)
