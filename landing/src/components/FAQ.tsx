"use client";

import { useState } from "react";

const faqs = [
  {
    q: "In quali aree operate per il catering aziendale?",
    a: "[PLACEHOLDER – da completare con le aree di copertura reali. Fonte: cliente.]",
  },
  {
    q: "Qual è il numero minimo di ospiti per richiedere un servizio?",
    a: "[PLACEHOLDER – da completare con le informazioni sui minimi. Fonte: cliente.]",
  },
  {
    q: "Come viene strutturata la proposta personalizzata?",
    a: "[PLACEHOLDER – descrivere il processo di proposta commerciale. Fonte: cliente.]",
  },
  {
    q: "Gestite sia il catering sia gli allestimenti dell'evento?",
    a: "[PLACEHOLDER – confermare e descrivere l'offerta integrata food + setup. Fonte: cliente.]",
  },
  {
    q: "Con quanto anticipo è necessario prenotare?",
    a: "[PLACEHOLDER – inserire i tempi minimi di prenotazione consigliati. Fonte: cliente.]",
  },
  {
    q: "Offrite servizi di mixology e open bar per eventi corporate?",
    a: "[PLACEHOLDER – descrivere il servizio bar catering e le opzioni disponibili. Fonte: cliente.]",
  },
  {
    q: "È possibile richiedere un sopralluogo prima dell'evento?",
    a: "[PLACEHOLDER – confermare la disponibilità al sopralluogo e le modalità. Fonte: cliente.]",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 lg:py-32"
      style={{ background: "#F5F3EC" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <p className="overline mb-4">Domande frequenti</p>
          <h2
            id="faq-heading"
            className="font-display"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Domande & risposte
          </h2>
          <span className="dama-line mx-auto block mt-6" aria-hidden />
        </div>

        {/* Accordion */}
        <dl>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b"
                style={{ borderColor: "rgba(175,168,153,0.3)" }}
                data-reveal
                data-delay={String(Math.min(i + 1, 6))}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between py-6 text-left gap-6 group"
                  >
                    <span
                      className="font-ui font-semibold text-sm lg:text-base leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? "#8C1822" : "#0a0a0a" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-7 h-7 border flex items-center justify-center text-taupe transition-all duration-300"
                      style={{
                        borderColor: isOpen ? "#8C1822" : "rgba(175,168,153,0.5)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        color: isOpen ? "#8C1822" : "#AFA899",
                      }}
                      aria-hidden
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  hidden={!isOpen}
                  className="pb-6"
                >
                  <p className="text-sm text-ink/55 leading-relaxed font-body italic">
                    {faq.a}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>

        {/* CTA under FAQ */}
        <div className="mt-14 text-center" data-reveal>
          <p className="text-ink/55 text-sm font-body mb-5">
            Non hai trovato risposta alla tua domanda?
          </p>
          <a href="#contatto" className="btn-outline-dark">
            Contattaci direttamente
          </a>
        </div>
      </div>
    </section>
  );
}
