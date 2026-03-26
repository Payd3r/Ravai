
const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            La tua privacy è importante per noi. Scopri come gestiamo i tuoi dati.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 pt-10 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 mb-8 italic">Ultimo aggiornamento: 12 Febbraio 2026</p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Titolari del trattamento</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Il trattamento dei dati personali è effettuato congiuntamente da:
            </p>
            <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-1">
              <li><strong>Ilaria Gatti</strong> - Sede: Como, Italia</li>
              <li><strong>Andrea Mauri</strong> - Sede: Como, Italia</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Email di contatto: <a href="mailto:info@ravai.it" className="text-slate-900 font-medium hover:underline">info@ravai.it</a>
            </p>
            <p className="text-slate-600 mb-8">
              I Titolari determinano congiuntamente le finalità e le modalità del trattamento dei dati personali raccolti tramite il sito.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Tipologia di dati raccolti</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Attraverso il sito vengono raccolti esclusivamente i dati personali forniti volontariamente dagli utenti tramite il modulo di contatto, quali:
            </p>
            <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-1">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Nome dell&apos;attività</li>
              <li>Eventuali informazioni inserite nel messaggio</li>
            </ul>
            <p className="text-slate-600 mb-8">
              Non vengono effettuate attività di profilazione né utilizzati strumenti di tracciamento o analytics.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalità del trattamento</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-1">
              <li>Rispondere alle richieste inviate tramite il modulo di contatto</li>
              <li>Elaborare e inviare preventivi relativi ai servizi offerti</li>
              <li>Gestire eventuali comunicazioni precontrattuali</li>
            </ul>
            <p className="text-slate-600 mb-8">
              I dati non vengono utilizzati per finalità di marketing o newsletter.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base giuridica del trattamento</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Il trattamento si basa su:
            </p>
            <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-1">
              <li>Esecuzione di misure precontrattuali adottate su richiesta dell&apos;interessato (art. 6, par. 1, lett. b GDPR)</li>
              <li>Legittimo interesse dei Titolari a rispondere alle richieste ricevute</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Modalità del trattamento</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Il trattamento avviene mediante strumenti informatici e telematici, con modalità strettamente correlate alle finalità indicate e nel rispetto delle misure di sicurezza previste dalla normativa vigente.
              I dati sono conservati presso la casella email dei Titolari e/o presso fornitori di servizi tecnologici (es. hosting provider), nominati responsabili del trattamento ai sensi dell&apos;art. 28 GDPR.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Conservazione dei dati</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              I dati personali sono conservati per il tempo necessario a gestire la richiesta e comunque non oltre 12 mesi dalla ricezione, salvo l&apos;instaurazione di un rapporto contrattuale o obblighi di legge che ne richiedano un&apos;ulteriore conservazione.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Comunicazione dei dati</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              I dati personali non vengono diffusi. Possono essere trattati da fornitori tecnici coinvolti nella gestione del sito e del servizio email, limitatamente alle finalità sopra indicate.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Diritti dell&apos;interessato</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              L&apos;interessato può esercitare i diritti previsti dagli articoli 15-22 del Regolamento (UE) 2016/679 (GDPR), tra cui: accesso ai dati, rettifica, cancellazione, limitazione del trattamento, opposizione, portabilità dei dati.
            </p>
            <p className="text-slate-600 mb-8">
              Le richieste possono essere inviate a: <a href="mailto:info@ravai.it" className="text-slate-900 font-medium hover:underline">info@ravai.it</a>
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Modifiche alla presente informativa</h2>
            <p className="text-slate-600 leading-relaxed">
              I Titolari si riservano il diritto di modificare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Privacy;
