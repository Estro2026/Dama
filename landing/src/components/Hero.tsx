"use client";
import { useState, FormEvent, useRef, useEffect } from "react";
import Image from "next/image";

const FORMSPREE = "https://formspree.io/f/FORMSPREE_ID";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
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
      setError("Errore nell'invio. Riprova o contattaci direttamente.");
      setSubmitting(false);
    }
  }

  return (
    <section
      id="hero"
      aria-label="Dama24 Banqueting – Catering aziendale Milano"
      style={{ display: "flex", minHeight: "100svh" }}
    >
      {/* ── VIDEO (sinistra) ── */}
      <div
        style={{
          position: "relative",
          flex: "0 0 58%",
          minHeight: "100svh",
          overflow: "hidden",
        }}
        className="hidden lg:block"
      >
        {/* Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/immagini/video_banqueting e catering eventi.mp4" type="video/mp4" />
        </video>

        {/* Overlay sfumato */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)",
          }}
        />

        {/* Contenuto sopra video */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            paddingTop: "5.5rem",
          }}
        >
          {/* Logo */}
          <Image
            src="/loghi/logo_banqueting bianco.svg"
            alt="Dama24 Banqueting"
            width={160}
            height={52}
            priority
            style={{ width: "clamp(120px, 13vw, 160px)", height: "auto" }}
          />

          {/* Headline */}
          <div style={{ maxWidth: "30rem", paddingBottom: "2rem" }}>
            <p
              className="t-label"
              style={{ color: "rgba(245,243,236,0.6)", marginBottom: "1.25rem" }}
            >
              Banqueting · Catering Aziendale · Milano
            </p>
            <h1 className="t-display" style={{ color: "#F5F3EC" }}>
              Catering aziendale a Milano per eventi
            </h1>
            <p
              className="t-body"
              style={{
                color: "rgba(245,243,236,0.7)",
                marginTop: "1.25rem",
                maxWidth: "26rem",
              }}
            >
              Coffee break, convention, inaugurazioni, meeting aziendali e
              banqueting su misura.
            </p>
          </div>
        </div>
      </div>

      {/* ── MOBILE: immagine fallback ── */}
      <div
        className="lg:hidden"
        style={{ position: "relative", width: "100%", height: "50svh" }}
      >
        <Image
          src="/immagini/catering.webp"
          alt="Catering aziendale Dama24 Milano"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "1.5rem",
            paddingTop: "5rem",
          }}
        >
          <Image
            src="/loghi/logo_banqueting bianco.svg"
            alt="Dama24 Banqueting"
            width={130}
            height={42}
            style={{ marginBottom: "1rem" }}
          />
          <h1
            className="t-h3"
            style={{ color: "#F5F3EC" }}
          >
            Catering aziendale a Milano per eventi
          </h1>
        </div>
      </div>

      {/* ── FORM (destra) ── */}
      <div
        style={{
          flex: "0 0 42%",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(2rem, 4vw, 3.5rem)",
        }}
        className="w-full lg:w-auto"
      >
        <div style={{ width: "100%", maxWidth: "22rem" }}>
          <p className="t-label" style={{ color: "rgba(245,243,236,0.4)", marginBottom: "0.625rem" }}>
            Richiedi un preventivo
          </p>
          <h2
            className="t-h3"
            style={{ color: "#F5F3EC", marginBottom: "0.5rem" }}
          >
            Parliamo del tuo evento
          </h2>
          <span className="dama-rule" style={{ display: "block", marginBottom: "2rem" }} aria-hidden />

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Modulo richiesta preventivo"
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <FormField id="h-nome" name="nome" label="Nome *" placeholder="Il tuo nome" type="text" autoComplete="given-name" />
              <FormField id="h-azienda" name="azienda" label="Azienda *" placeholder="Nome azienda" type="text" autoComplete="organization" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <FormField id="h-email" name="email" label="Email *" placeholder="name@azienda.it" type="email" autoComplete="email" />
              <FormField id="h-tel" name="telefono" label="Telefono *" placeholder="+39 000 000 0000" type="tel" autoComplete="tel" />
            </div>
            <div className="form-field">
              <label htmlFor="h-tipo" className="form-label">Tipo di evento</label>
              <select id="h-tipo" name="tipoEvento" className="form-input">
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
              <label htmlFor="h-msg" className="form-label">Messaggio</label>
              <textarea
                id="h-msg"
                name="messaggio"
                rows={2}
                placeholder="Raccontaci il tuo evento…"
                className="form-input"
                style={{ resize: "none" }}
              />
            </div>

            <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
              <input
                id="h-privacy"
                name="privacy"
                type="checkbox"
                required
                style={{ marginTop: "0.1rem", flexShrink: 0, accentColor: "#8C1822", width: "0.875rem", height: "0.875rem" }}
              />
              <label htmlFor="h-privacy" className="t-small" style={{ color: "rgba(245,243,236,0.35)" }}>
                Acconsento al trattamento dei dati personali (GDPR – Reg. UE 679/2016).{" "}
                <a href="/privacy-policy" style={{ textDecoration: "underline", color: "rgba(245,243,236,0.55)" }}>
                  Privacy Policy
                </a>
              </label>
            </div>

            {error && <p role="alert" className="t-small" style={{ color: "#f87171" }}>{error}</p>}

            <button type="submit" disabled={submitting} className="btn btn-fill" style={{ width: "100%", marginTop: "0.25rem" }}>
              {submitting ? "Invio in corso…" : "Ricevi una proposta personalizzata"}
            </button>

            {/* Trust strip */}
            <ul
              aria-label="Garanzie"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.375rem 1rem",
                listStyle: "none",
                paddingTop: "0.25rem",
              }}
            >
              {["Preventivo gratuito", "Risposta in 24 ore", "Progetto su misura", "Un unico referente"].map((t) => (
                <li key={t} className="t-small" style={{ color: "rgba(245,243,236,0.35)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <span style={{ width: "0.25rem", height: "0.25rem", borderRadius: "50%", background: "#8C1822", flexShrink: 0 }} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  id, name, label, placeholder, type, autoComplete,
}: {
  id: string; name: string; label: string; placeholder: string; type: string; autoComplete?: string;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={label.endsWith("*")}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
}
