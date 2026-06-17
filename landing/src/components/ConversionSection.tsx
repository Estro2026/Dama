"use client";
import { useState, FormEvent } from "react";

const FORMSPREE = "https://formspree.io/f/FORMSPREE_ID";

const steps = [
  { n: "01", title: "Raccontaci il tuo evento", desc: "Condividi la tua visione: tipologia, ospiti, location e data." },
  { n: "02", title: "Ricevi una proposta personalizzata", desc: "Entro 24 ore una proposta su misura, senza format standard." },
  { n: "03", title: "Definiamo menù, servizio e allestimenti", desc: "Costruiamo ogni dettaglio insieme: menù, mise en place, brigata." },
  { n: "04", title: "Realizziamo il tuo evento", desc: "Presenti in ogni momento. Un'esperienza memorabile." },
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
      const res = await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      window.location.href = window.location.origin + "/Dama/grazie/";
    } catch {
      setError("Errore nell'invio. Riprova o contattaci direttamente.");
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contatto"
      aria-labelledby="conversion-title"
      style={{ background: "#000000" }}
    >
      <div className="container section-pad">
        <div
          style={{ display: "grid", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}
          className="lg:grid-cols-2"
        >

          {/* Sinistra: steps */}
          <div>
            <p className="t-label" style={{ color: "rgba(245,243,236,0.4)", marginBottom: "0.75rem" }}>
              Come funziona
            </p>
            <h2
              id="conversion-title"
              className="t-h2"
              style={{ color: "#F5F3EC", marginBottom: "0.75rem" }}
            >
              Dall'idea all'evento.
            </h2>
            <span className="dama-rule" style={{ display: "block", marginBottom: "2.5rem" }} aria-hidden />

            <ol style={{ display: "flex", flexDirection: "column", gap: "2rem", listStyle: "none" }}>
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  data-reveal
                  data-delay={`${i * 100}`}
                  style={{ display: "flex", gap: "1.25rem" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      lineHeight: 1,
                      color: "rgba(140,24,34,0.5)",
                      flexShrink: 0,
                      paddingTop: "0.1rem",
                    }}
                    aria-hidden
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="t-h4" style={{ color: "#F5F3EC", marginBottom: "0.375rem" }}>{s.title}</h3>
                    <p className="t-small" style={{ color: "rgba(245,243,236,0.45)" }}>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Trust badges */}
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem 1.5rem",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(245,243,236,0.08)",
                listStyle: "none",
              }}
            >
              {["Preventivo gratuito", "Risposta entro 24 ore", "Nessun impegno", "Consulenza dedicata"].map((t) => (
                <li key={t} className="t-small" style={{ color: "rgba(245,243,236,0.4)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "0.25rem", height: "0.25rem", background: "#8C1822", borderRadius: "50%", flexShrink: 0 }} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Destra: form */}
          <div data-reveal style={{ position: "sticky", top: "6rem" }}>
            <p className="t-label" style={{ color: "rgba(245,243,236,0.4)", marginBottom: "0.75rem" }}>
              Richiedi il tuo preventivo
            </p>
            <h3 className="t-h3" style={{ color: "#F5F3EC", marginBottom: "0.5rem" }}>
              Inizia con una conversazione
            </h3>
            <span className="dama-rule" style={{ display: "block", marginBottom: "2rem" }} aria-hidden />

            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Modulo richiesta preventivo"
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { id: "c-nome", name: "nome", label: "Nome *", ph: "Il tuo nome", type: "text", ac: "given-name" },
                  { id: "c-az", name: "azienda", label: "Azienda *", ph: "Nome azienda", type: "text", ac: "organization" },
                ].map((f) => (
                  <div key={f.id} className="form-field">
                    <label htmlFor={f.id} className="form-label">{f.label}</label>
                    <input id={f.id} name={f.name} type={f.type} required autoComplete={f.ac} placeholder={f.ph} className="form-input" />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { id: "c-email", name: "email", label: "Email *", ph: "name@azienda.it", type: "email", ac: "email" },
                  { id: "c-tel", name: "telefono", label: "Telefono *", ph: "+39 000 000 0000", type: "tel", ac: "tel" },
                ].map((f) => (
                  <div key={f.id} className="form-field">
                    <label htmlFor={f.id} className="form-label">{f.label}</label>
                    <input id={f.id} name={f.name} type={f.type} required autoComplete={f.ac} placeholder={f.ph} className="form-input" />
                  </div>
                ))}
              </div>
              <div className="form-field">
                <label htmlFor="c-tipo" className="form-label">Tipo di evento</label>
                <select id="c-tipo" name="tipoEvento" className="form-input">
                  <option value="">Seleziona…</option>
                  <option value="convention">Convention / Congresso</option>
                  <option value="fiera">Fiera</option>
                  <option value="inaugurazione">Inaugurazione</option>
                  <option value="meeting">Meeting aziendale</option>
                  <option value="coffee-break">Coffee Break</option>
                  <option value="altro">Altro</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="c-msg" className="form-label">Messaggio</label>
                <textarea id="c-msg" name="messaggio" rows={3} placeholder="Raccontaci il tuo evento…" className="form-input" style={{ resize: "none" }} />
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <input id="c-privacy" name="privacy" type="checkbox" required
                  style={{ marginTop: "0.1rem", flexShrink: 0, accentColor: "#8C1822", width: "0.875rem", height: "0.875rem" }} />
                <label htmlFor="c-privacy" className="t-small" style={{ color: "rgba(245,243,236,0.35)" }}>
                  Acconsento al trattamento dei dati (GDPR – Reg. UE 679/2016).{" "}
                  <a href="/privacy-policy" style={{ textDecoration: "underline", color: "rgba(245,243,236,0.5)" }}>Privacy Policy</a>
                </label>
              </div>
              {error && <p role="alert" className="t-small" style={{ color: "#f87171" }}>{error}</p>}
              <button type="submit" disabled={submitting} className="btn btn-fill" style={{ width: "100%" }}>
                {submitting ? "Invio in corso…" : "Richiedi il tuo preventivo"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
