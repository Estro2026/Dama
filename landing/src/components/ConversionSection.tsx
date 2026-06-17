"use client";

import { useState, FormEvent } from "react";

const FORMSPREE = "https://formspree.io/f/FORMSPREE_ID";

const steps = [
  {
    n: "01",
    title: "Raccontaci il tuo evento",
    desc: "Condividi la tua visione: tipologia, ospiti, location, data e aspettative.",
  },
  {
    n: "02",
    title: "Ricevi una proposta personalizzata",
    desc: "Entro 24 ore prepariamo una proposta su misura, senza schemi prefissati.",
  },
  {
    n: "03",
    title: "Definiamo menù, servizio e allestimenti",
    desc: "Costruiamo insieme ogni dettaglio: menù, mise en place, brigata, arredi.",
  },
  {
    n: "04",
    title: "Realizziamo il tuo evento",
    desc: "Siamo presenti in ogni momento. Il tuo evento diventa un'esperienza memorabile.",
  },
];

export default function ConversionSection() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(e.currentTarget);
    data.append("_source", "conversion");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      window.location.href = window.location.origin + "/Dama/grazie/";
    } catch {
      setError("Si è verificato un errore. Riprova o contattaci direttamente.");
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contatto"
      aria-labelledby="conversion-heading"
      className="py-24 lg:py-32"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left: process ── */}
          <div>
            <p className="overline text-ivory/40 mb-5">Come funziona</p>
            <h2
              id="conversion-heading"
              className="text-ivory font-display mb-3"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Dall'idea all'evento. Senza interruzioni.
            </h2>
            <span className="dama-line block mb-10" aria-hidden />

            <ol className="space-y-8" aria-label="Processo di lavoro Dama24">
              {steps.map((s, i) => (
                <li key={s.n} className="flex gap-6" data-reveal data-delay={String(i + 1)}>
                  <span
                    className="flex-shrink-0 font-display text-3xl leading-none mt-0.5"
                    style={{ fontFamily: "var(--font-display)", color: "rgba(140,24,34,0.6)" }}
                    aria-hidden
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-ivory font-ui font-semibold text-sm mb-1">
                      {s.title}
                    </h3>
                    <p className="text-ivory/45 text-sm leading-relaxed font-body">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-ivory/10 grid grid-cols-2 gap-3">
              {["Preventivo gratuito", "Risposta entro 24 ore", "Nessun impegno", "Consulenza dedicata"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#8C1822" }} aria-hidden />
                  <span className="text-ivory/50 text-xs font-body">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div data-reveal="right">
            <p className="overline text-ivory/40 mb-3">Richiedi il tuo preventivo</p>
            <h3
              className="text-ivory font-display text-xl lg:text-2xl mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Inizia con una conversazione
            </h3>
            <span className="dama-line block mb-8" aria-hidden />

            <form onSubmit={handleSubmit} noValidate aria-label="Modulo preventivo" className="space-y-5 dark-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: "conv-nome", name: "nome", label: "Nome", type: "text", auto: "given-name", ph: "Il tuo nome" },
                  { id: "conv-azienda", name: "azienda", label: "Azienda", type: "text", auto: "organization", ph: "Nome azienda" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                      {f.label} <span aria-hidden>*</span>
                    </label>
                    <input id={f.id} name={f.name} type={f.type} required autoComplete={f.auto}
                      placeholder={f.ph} className="field-input" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: "conv-email", name: "email", label: "Email", type: "email", auto: "email", ph: "email@azienda.it" },
                  { id: "conv-tel", name: "telefono", label: "Telefono", type: "tel", auto: "tel", ph: "+39 000 000 0000" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                      {f.label} <span aria-hidden>*</span>
                    </label>
                    <input id={f.id} name={f.name} type={f.type} required autoComplete={f.auto}
                      placeholder={f.ph} className="field-input" />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="conv-tipo" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                  Tipo di evento
                </label>
                <select id="conv-tipo" name="tipoEvento" className="field-input">
                  <option value="">Seleziona tipologia</option>
                  <option value="convention">Convention / Congresso</option>
                  <option value="fiera">Fiera</option>
                  <option value="inaugurazione">Inaugurazione aziendale</option>
                  <option value="meeting">Meeting aziendale</option>
                  <option value="coffee-break">Coffee Break</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="conv-msg" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                  Messaggio
                </label>
                <textarea id="conv-msg" name="messaggio" rows={3}
                  placeholder="Raccontaci il tuo evento…" className="field-input resize-none" />
              </div>

              <div className="flex items-start gap-3">
                <input id="conv-privacy" name="privacy" type="checkbox" required
                  className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 accent-bordeaux" />
                <label htmlFor="conv-privacy" className="text-[0.7rem] text-ivory/35 leading-relaxed font-body">
                  Acconsento al trattamento dei dati personali (GDPR – Reg. UE 679/2016).{" "}
                  <a href="/privacy-policy" className="underline text-ivory/55">Privacy Policy</a>
                </label>
              </div>

              {error && <p role="alert" className="text-xs text-red-400">{error}</p>}

              <button type="submit" disabled={submitting} className="btn-primary w-full">
                {submitting ? "Invio in corso…" : "Richiedi il tuo preventivo"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
