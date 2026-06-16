"use client";

import { useState } from "react";

const faqs = [
  {
    question: "In quali aree operate per il catering aziendale?",
    answer:
      "[PLACEHOLDER – inserire le aree di copertura reali da fonte cliente]",
  },
  {
    question: "Qual è il numero minimo di ospiti per un evento?",
    answer:
      "[PLACEHOLDER – inserire le informazioni sui minimi di copertura reali]",
  },
  {
    question: "Come viene strutturata la proposta personalizzata?",
    answer:
      "[PLACEHOLDER – inserire dettagli sul processo di proposta commerciale]",
  },
  {
    question: "Gestite sia il catering sia gli allestimenti?",
    answer:
      "[PLACEHOLDER – confermare o descrivere l'offerta integrata food + setup]",
  },
  {
    question: "Con quanto anticipo è necessario prenotare?",
    answer:
      "[PLACEHOLDER – inserire i tempi minimi di prenotazione suggeriti]",
  },
  {
    question: "Offrite servizi di mixology e open bar per eventi corporate?",
    answer:
      "[PLACEHOLDER – inserire dettagli sul servizio bar catering e mixology]",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-ivory"
      style={{ background: "#F5F3EC" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-bordeaux text-xs tracking-[0.25em] uppercase font-ui mb-3"
            style={{ color: "#8C1822" }}>
            Domande frequenti
          </p>
          <h2
            id="faq-heading"
            className="font-display"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Domande & risposte
          </h2>
        </div>

        {/* Accordion */}
        <dl className="space-y-px">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-taupe/30"
                style={{ borderColor: "rgba(175,168,153,0.3)" }}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                  >
                    <span className="font-ui font-semibold text-sm lg:text-base text-ink group-hover:text-bordeaux transition-colors"
                      style={{ color: isOpen ? "#8C1822" : undefined }}>
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-6 h-6 border border-taupe/50 flex items-center justify-center text-taupe transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  hidden={!isOpen}
                  className="pb-5"
                >
                  <p className="text-sm text-ink/60 leading-relaxed font-body italic">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
