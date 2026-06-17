"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import Image from "next/image";

const FORMSPREE = "https://formspree.io/f/FORMSPREE_ID";

export default function Hero() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play video after mount for better LCP
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(e.currentTarget);
    data.append("_source", "hero");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
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
      id="hero"
      aria-label="Dama24 – Catering aziendale Milano"
      className="relative min-h-screen flex flex-col lg:flex-row"
    >
      {/* ── VIDEO column (left) ── */}
      <div className="relative w-full lg:w-[58%] min-h-[56vh] lg:min-h-screen overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/immagini/video_banqueting e catering eventi.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(71,9,15,0.72) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.12) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
          }}
          aria-hidden
        />

        {/* Content over video */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-14 pt-24 lg:pt-28">
          {/* Top: logo */}
          <div>
            <Image
              src="/loghi/logo_banqueting bianco.svg"
              alt="Dama24 Banqueting"
              width={180}
              height={58}
              priority
              className="w-36 lg:w-48"
            />
          </div>

          {/* Bottom: headline */}
          <div className="max-w-xl pb-6 lg:pb-10">
            <p className="overline text-ivory/70 mb-5">
              Banqueting · Catering Aziendale · Milano
            </p>
            <h1 className="text-ivory leading-[1.05]">
              Catering aziendale a Milano per eventi
            </h1>
            <p className="mt-6 text-ivory/75 text-base lg:text-lg leading-relaxed font-body max-w-md">
              Coffee break, convention, inaugurazioni, meeting aziendali e
              banqueting su misura.
            </p>
            <p className="mt-2 text-ivory/60 text-sm font-body">
              Ricevi una proposta personalizzata entro 24 ore.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 mt-8">
              {["Preventivo gratuito", "Risposta in 24h", "Su misura"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-ivory/60 text-xs font-ui">
                  <span className="w-1 h-1 rounded-full bg-bordeaux flex-shrink-0" aria-hidden />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FORM column (right) ── */}
      <div
        className="w-full lg:w-[42%] flex items-center justify-center px-6 py-14 lg:py-0"
        style={{ background: "#0a0a0a" }}
      >
        <div className="w-full max-w-sm dark-form">
          <p className="overline text-ivory/40 mb-2">Richiedi un preventivo</p>
          <h2
            className="text-ivory font-display text-2xl lg:text-[1.9rem] mb-2 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Parliamo del tuo prossimo evento
          </h2>
          <span className="dama-line block mb-8" aria-hidden />

          <form onSubmit={handleSubmit} noValidate aria-label="Modulo preventivo" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="field">
                <label htmlFor="hero-nome" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                  Nome <span aria-hidden>*</span>
                </label>
                <input id="hero-nome" name="nome" type="text" required autoComplete="given-name"
                  placeholder="Il tuo nome" className="field-input" />
              </div>
              <div className="field">
                <label htmlFor="hero-azienda" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                  Azienda <span aria-hidden>*</span>
                </label>
                <input id="hero-azienda" name="azienda" type="text" required autoComplete="organization"
                  placeholder="Nome azienda" className="field-input" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="field">
                <label htmlFor="hero-email" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                  Email <span aria-hidden>*</span>
                </label>
                <input id="hero-email" name="email" type="email" required autoComplete="email"
                  placeholder="email@azienda.it" className="field-input" />
              </div>
              <div className="field">
                <label htmlFor="hero-telefono" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                  Telefono <span aria-hidden>*</span>
                </label>
                <input id="hero-telefono" name="telefono" type="tel" required autoComplete="tel"
                  placeholder="+39 000 000 0000" className="field-input" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="hero-tipo" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                Tipo di evento
              </label>
              <select id="hero-tipo" name="tipoEvento" className="field-input">
                <option value="">Seleziona tipologia</option>
                <option value="convention">Convention / Congresso</option>
                <option value="fiera">Fiera</option>
                <option value="inaugurazione">Inaugurazione aziendale</option>
                <option value="meeting">Meeting aziendale</option>
                <option value="coffee-break">Coffee Break</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="hero-msg" className="block text-[0.65rem] tracking-widest uppercase text-ivory/40 mb-1 font-ui">
                Messaggio
              </label>
              <textarea id="hero-msg" name="messaggio" rows={2}
                placeholder="Raccontaci il tuo evento…" className="field-input resize-none" />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input id="hero-privacy" name="privacy" type="checkbox" required
                className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 accent-bordeaux" />
              <label htmlFor="hero-privacy" className="text-[0.7rem] text-ivory/35 leading-relaxed font-body">
                Acconsento al trattamento dei dati personali (GDPR – Reg. UE 679/2016).{" "}
                <a href="/privacy-policy" className="underline text-ivory/55">Privacy Policy</a>
              </label>
            </div>

            {error && <p role="alert" className="text-xs text-red-400">{error}</p>}

            <button type="submit" disabled={submitting} className="btn-primary w-full mt-2">
              {submitting ? "Invio in corso…" : "Ricevi una proposta personalizzata"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
