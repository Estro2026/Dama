"use client";
import { useState } from "react";

const faqs = [
  { q: "In quali aree operate per il catering aziendale?", a: "[PLACEHOLDER – da completare con le aree di copertura reali]" },
  { q: "Qual è il numero minimo di ospiti per richiedere un servizio?", a: "[PLACEHOLDER – da completare con i minimi di copertura]" },
  { q: "Come viene strutturata la proposta personalizzata?", a: "[PLACEHOLDER – descrivere il processo di proposta commerciale]" },
  { q: "Gestite sia il catering sia gli allestimenti?", a: "[PLACEHOLDER – confermare l'offerta integrata food + setup]" },
  { q: "Con quanto anticipo è necessario prenotare?", a: "[PLACEHOLDER – inserire i tempi minimi di prenotazione]" },
  { q: "Offrite servizi di mixology e open bar per eventi corporate?", a: "[PLACEHOLDER – descrivere il servizio bar catering]" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-title" style={{ background: "#F5F3EC" }}>
      <div className="container section-pad">
        <div style={{ maxWidth: "52rem", marginInline: "auto" }}>

          {/* Header */}
          <div data-reveal style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 4vw, 3.5rem)" }}>
            <p className="t-label" style={{ color: "#8C1822", marginBottom: "0.75rem" }}>
              Domande frequenti
            </p>
            <h2 id="faq-title" className="t-h2">
              Domande & risposte
            </h2>
            <span className="dama-rule" style={{ display: "block", marginInline: "auto", marginTop: "1.25rem" }} aria-hidden />
          </div>

          {/* Accordion */}
          <dl>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  data-reveal
                  data-delay={`${Math.min(i, 4) * 100}`}
                  style={{ borderBottom: "1px solid rgba(175,168,153,0.3)" }}
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1.5rem",
                        padding: "1.375rem 0",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        className="t-h4"
                        style={{ color: isOpen ? "#8C1822" : "#000000", transition: "color 0.2s" }}
                      >
                        {faq.q}
                      </span>
                      <span
                        aria-hidden
                        style={{
                          flexShrink: 0,
                          width: "1.75rem",
                          height: "1.75rem",
                          border: `1px solid ${isOpen ? "#8C1822" : "rgba(175,168,153,0.5)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.25s",
                          transform: isOpen ? "rotate(45deg)" : "none",
                          color: isOpen ? "#8C1822" : "#AFA899",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                          <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd id={`faq-${i}`} hidden={!isOpen} style={{ paddingBottom: "1.375rem" }}>
                    <p className="t-body" style={{ color: "rgba(0,0,0,0.55)", fontStyle: "italic" }}>{faq.a}</p>
                  </dd>
                </div>
              );
            })}
          </dl>

          {/* CTA */}
          <div data-reveal style={{ marginTop: "clamp(2.5rem, 4vw, 3.5rem)", textAlign: "center" }}>
            <p className="t-small" style={{ color: "rgba(0,0,0,0.5)", marginBottom: "1.25rem" }}>
              Non hai trovato risposta alla tua domanda?
            </p>
            <a href="#contatto" className="btn btn-ghost-dark">
              Contattaci direttamente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
