
const Terms = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Termini e Condizioni
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leggi le condizioni d&apos;uso dei nostri servizi.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 pt-10 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 mb-8 italic">Ultimo aggiornamento: 12 Febbraio 2026</p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Titolari del sito</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Il sito Ravai è gestito da:
            </p>
            <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-1">
              <li><strong>Ilaria Gatti</strong> - Sede: Como, Italia</li>
              <li><strong>Andrea Mauri</strong> - Sede: Como, Italia</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Email di contatto: <a href="mailto:info@ravai.it" className="text-slate-900 font-medium hover:underline">info@ravai.it</a>
            </p>
            <p className="text-slate-600 mb-8">
              I professionisti operano in qualità di freelance e collaborano nella realizzazione dei servizi offerti tramite il sito.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Oggetto del sito</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Il sito ha finalità informativa e di presentazione dei servizi offerti, nonché di raccolta di richieste di preventivo da parte di attività locali interessate alla realizzazione di landing page o siti web.
              L&apos;invio di una richiesta tramite il modulo di contatto non comporta la conclusione di alcun contratto.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Richiesta di preventivo</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              L&apos;utente può richiedere un preventivo compilando il modulo presente sul sito. L&apos;invio del modulo:
            </p>
            <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-1">
              <li>non costituisce accettazione di un&apos;offerta contrattuale</li>
              <li>non genera alcun obbligo per i Titolari</li>
              <li>non comporta l&apos;automatica conclusione di un contratto</li>
            </ul>
            <p className="text-slate-600 mb-8">
              Il contratto si considera eventualmente concluso solo a seguito di accettazione formale del preventivo da parte del cliente.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Modalità di erogazione dei servizi</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Le modalità, i tempi e i costi dei servizi vengono definiti nel preventivo inviato via email e concordati direttamente con il cliente.
              Eventuali condizioni specifiche saranno disciplinate nel singolo accordo tra le parti.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Proprietà intellettuale</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Tutti i contenuti presenti sul sito, inclusi testi, grafiche, loghi, immagini e materiali informativi, sono di proprietà dei Titolari o concessi in licenza e sono protetti dalla normativa vigente in materia di diritto d&apos;autore.
              È vietata la riproduzione, distribuzione, modifica o utilizzo non autorizzato dei contenuti.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitazione di responsabilità</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              I Titolari si impegnano a fornire informazioni accurate e aggiornate, ma non garantiscono l&apos;assenza di errori o omissioni.
              Non sono responsabili per eventuali danni derivanti dall&apos;utilizzo del sito o dall&apos;impossibilità di accedervi.
              Non viene garantito il raggiungimento di specifici risultati economici o commerciali a seguito dell&apos;utilizzo dei servizi offerti.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Link esterni</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Il sito può contenere collegamenti a siti esterni di terze parti. I Titolari non sono responsabili per contenuti, politiche o pratiche di tali siti.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Trattamento dei dati personali</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Il trattamento dei dati personali è disciplinato dalla Privacy Policy consultabile nell&apos;apposita sezione del sito.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Legge applicabile e foro competente</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              I presenti Termini e Condizioni sono regolati dalla legge italiana.
              Per qualsiasi controversia sarà competente il Foro del luogo di residenza o domicilio del consumatore, se previsto dalla normativa vigente, o in alternativa il Foro competente secondo legge.
            </p>
          </div>


        </div>
      </section>
    </div>
  );
};

export default Terms;
