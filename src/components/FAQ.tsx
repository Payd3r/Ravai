import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
    {
        question: "Quali sono i tempi di realizzazione del sito web?",
        answer: "Il tuo sito sarà online in soli 7 giorni lavorativi. Grazie al nostro processo collaudato, assicuriamo consegne rapide mantenendo un livello di qualità e design impeccabile."
    },
    {
        question: "I vostri siti sono ottimizzati per i cellulari?",
        answer: "Assolutamente sì. Sappiamo che la maggior parte delle visite avviene da smartphone. Tutti i nostri progetti hanno un design 'mobile-first', assicurando una navigazione veloce e intuitiva su telefono, tablet e computer."
    },
    {
        question: "Come fate a farmi trovare su Google (SEO)?",
        answer: "Ogni sito nasce già strutturato con le migliori pratiche SEO. Ottimizziamo la velocità di caricamento, i testi e l'architettura delle pagine per posizionarti al meglio per le ricerche locali (es. 'ristorante in centro' o 'parrucchiere vicino a me')."
    },
    {
        question: "Quanto costa realizzare un sito con Ravai?",
        answer: "I prezzi variano in base alle funzionalità richieste (sito vetrina, sistema di prenotazioni, menù digitale). Sul nostro sito trovi un comodo configuratore ('Calcola il tuo pacchetto') per ottenere subito un'idea dell'investimento necessario in totale trasparenza."
    },
    {
        question: "Offrite assistenza dopo la pubblicazione?",
        answer: "Certamente. Non ti lasciamo solo! Offriamo supporto continuo per aggiornamenti, modifiche, inserimento di nuovi contenuti e manutenzione tecnica. Vogliamo essere il tuo vero e proprio partner digitale."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <MessageCircleQuestion className="w-8 h-8 text-slate-900" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                            Domande Frequenti
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Hai ancora dei dubbi? Abbiamo raccolto le risposte alle domande che ci vengono poste più spesso dai nostri clienti per aiutarti a scegliere la soluzione migliore.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`
                  border rounded-2xl overflow-hidden transition-all duration-300
                  ${isOpen
                                        ? 'border-slate-300 bg-slate-50 shadow-md ring-1 ring-slate-200'
                                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                                    }
                `}
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-semibold text-slate-900 pr-8">
                                        {faq.question}
                                    </span>
                                    <div className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                    ${isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                  `}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <div
                                    className={`
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                  `}
                                >
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200 pt-4 mt-1">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
