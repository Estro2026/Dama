import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richiesta ricevuta | Dama24 Banqueting",
  description: "Grazie per aver contattato Dama24 Banqueting. Ti risponderemo entro 24 ore.",
  robots: { index: false, follow: false },
};

export default function GraziePage() {
  return (
    <div style={{ minHeight: "100svh", display: "flex", flexDirection: "column", background: "#000000" }}>

      {/* Header */}
      <header
        style={{
          padding: "1.25rem clamp(1.25rem, 4vw, 3.75rem)",
          borderBottom: "1px solid rgba(245,243,236,0.07)",
        }}
      >
        <Link href="/" aria-label="Torna alla home Dama24">
          <Image
            src="/loghi/logo_banqueting bianco.svg"
            alt="Dama24 Banqueting"
            width={140}
            height={46}
            priority
            style={{ width: "auto", height: "auto", maxWidth: "140px" }}
          />
        </Link>
      </header>

      {/* Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(3rem, 8vw, 6rem) clamp(1.25rem, 4vw, 3.75rem)",
        }}
      >
        <div style={{ maxWidth: "36rem", width: "100%" }}>
          <span className="dama-rule" style={{ display: "block", marginBottom: "2rem" }} aria-hidden />

          <p className="t-label" style={{ color: "rgba(245,243,236,0.4)", marginBottom: "0.75rem" }}>
            Grazie
          </p>

          <h1 className="t-display" style={{ color: "#F5F3EC", marginBottom: "1.25rem" }}>
            Richiesta ricevuta correttamente
          </h1>

          <p className="t-body" style={{ color: "rgba(245,243,236,0.6)", marginBottom: "3rem" }}>
            Ti contatteremo entro 24 ore con una proposta pensata per il tuo
            evento.
          </p>

          {/* Steps */}
          <div
            style={{
              borderTop: "1px solid rgba(245,243,236,0.08)",
              paddingTop: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            <p className="t-label" style={{ color: "rgba(245,243,236,0.25)", marginBottom: "1.5rem" }}>
              Cosa succede ora
            </p>
            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { n: "01", t: "Analizziamo la tua richiesta", d: "Il nostro team legge ogni richiesta con cura." },
                { n: "02", t: "Prepariamo una proposta personalizzata", d: "Su misura per il tuo evento, senza format standard." },
                { n: "03", t: "Ti contattiamo per approfondire il progetto", d: "Un consulente ti contatterà per discutere ogni dettaglio." },
              ].map((s) => (
                <li key={s.n} style={{ display: "flex", gap: "1.25rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      lineHeight: 1,
                      color: "rgba(140,24,34,0.45)",
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    {s.n}
                  </span>
                  <div>
                    <p className="t-h4" style={{ color: "#F5F3EC", marginBottom: "0.25rem" }}>{s.t}</p>
                    <p className="t-small" style={{ color: "rgba(245,243,236,0.4)" }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/dama24banqueting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
              aria-label="Seguici su Instagram (apre in nuova finestra)"
            >
              Seguici sui social
            </a>
            <Link
              href="/"
              className="t-label"
              style={{ color: "rgba(245,243,236,0.3)", transition: "color 0.2s" }}
            >
              ← Torna alla home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
