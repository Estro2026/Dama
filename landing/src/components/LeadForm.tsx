"use client";

import { useState, FormEvent } from "react";

interface LeadFormProps {
  dark?: boolean;
  ctaLabel?: string;
  source?: string;
}

// TODO: sostituire FORMSPREE_ID con l'ID reale da https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORMSPREE_ID";

export default function LeadForm({
  dark = false,
  ctaLabel = "Ricevi una proposta personalizzata",
  source = "hero",
}: LeadFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_source", source);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      window.location.href = `${window.location.origin}/dama/grazie/`;
    } catch {
      setError("Si è verificato un errore. Riprova o contattaci direttamente.");
      setSubmitting(false);
    }
  }

  const inputClass = `field-input ${dark ? "on-dark" : ""}`;
  const labelClass = `block text-xs tracking-widest uppercase mb-2 font-ui ${
    dark ? "text-ivory/70" : "text-ink/50"
  }`;

  const trustItems = [
    "Preventivo gratuito",
    "Risposta entro 24 ore",
    "Progetto su misura",
    "Servizio completo",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Modulo richiesta preventivo"
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`nome-${source}`} className={labelClass}>
            Nome <span aria-hidden>*</span>
          </label>
          <input
            id={`nome-${source}`}
            name="nome"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Il tuo nome"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`azienda-${source}`} className={labelClass}>
            Azienda <span aria-hidden>*</span>
          </label>
          <input
            id={`azienda-${source}`}
            name="azienda"
            type="text"
            required
            autoComplete="organization"
            placeholder="Nome azienda"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`email-${source}`} className={labelClass}>
            Email <span aria-hidden>*</span>
          </label>
          <input
            id={`email-${source}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email@azienda.it"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`telefono-${source}`} className={labelClass}>
            Telefono <span aria-hidden>*</span>
          </label>
          <input
            id={`telefono-${source}`}
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+39 000 000 0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`tipoEvento-${source}`} className={labelClass}>
          Tipo di evento
        </label>
        <select
          id={`tipoEvento-${source}`}
          name="tipoEvento"
          className={inputClass}
        >
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
        <label htmlFor={`messaggio-${source}`} className={labelClass}>
          Messaggio
        </label>
        <textarea
          id={`messaggio-${source}`}
          name="messaggio"
          rows={3}
          placeholder="Raccontaci il tuo evento..."
          className={inputClass}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={`privacy-${source}`}
          name="privacy"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-bordeaux flex-shrink-0"
        />
        <label
          htmlFor={`privacy-${source}`}
          className={`text-xs leading-relaxed ${dark ? "text-ivory/60" : "text-ink/50"}`}
        >
          Acconsento al trattamento dei dati personali ai sensi del Regolamento
          UE 679/2016 (GDPR).{" "}
          <a
            href="/privacy-policy"
            className={`underline underline-offset-2 ${dark ? "text-ivory/80" : "text-bordeaux"}`}
          >
            Privacy Policy
          </a>
        </label>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 px-6 bg-bordeaux text-ivory text-sm tracking-widest uppercase font-ui font-semibold transition-all duration-300 hover:bg-bordeaux-dark disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#8C1822" }}
      >
        {submitting ? "Invio in corso…" : ctaLabel}
      </button>

      <ul
        aria-label="Garanzie"
        className={`grid grid-cols-2 gap-x-4 gap-y-1 pt-2 ${
          dark ? "text-ivory/60" : "text-ink/45"
        }`}
      >
        {trustItems.map((t) => (
          <li key={t} className="text-xs flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-bordeaux flex-shrink-0" aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    </form>
  );
}
