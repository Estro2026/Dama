import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    "Catering Aziendale Milano",
    "Banqueting su misura",
    "Coffee Break Aziendali",
    "Catering Convention",
    "Catering Fiere",
    "Catering Inaugurazioni",
    "Bar Catering & Mixology",
    "Allestimenti & Intrattenimento",
  ];

  return (
    <footer aria-label="Piè di pagina Dama24 Banqueting" style={{ background: "#000000" }}>
      <div className="container">

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gap: "3rem",
            paddingTop: "clamp(3rem, 6vw, 5rem)",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(245,243,236,0.07)",
          }}
          className="lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <Image
              src="/loghi/logo_banqueting bianco.svg"
              alt="Dama24 Banqueting"
              width={140}
              height={46}
              style={{ marginBottom: "1.5rem", width: "auto", height: "auto", maxWidth: "140px" }}
            />
            <p className="t-small" style={{ color: "rgba(245,243,236,0.45)", maxWidth: "16rem", marginBottom: "1.5rem" }}>
              Catering aziendale, banqueting ed eventi corporate a Milano.
            </p>
            <span className="dama-rule" style={{ display: "block", marginBottom: "1.25rem" }} aria-hidden />
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {["Preventivo gratuito", "Risposta entro 24 ore", "Servizio personalizzato", "Un unico referente"].map((t) => (
                <li key={t} className="t-small" style={{ color: "rgba(245,243,236,0.35)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "0.25rem", height: "0.25rem", background: "#8C1822", borderRadius: "50%", flexShrink: 0 }} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h3 className="t-label" style={{ color: "rgba(245,243,236,0.3)", marginBottom: "1.25rem" }}>
              Servizi
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {services.map((s) => (
                <li key={s}>
                  <span className="t-small" style={{ color: "rgba(245,243,236,0.45)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="t-label" style={{ color: "rgba(245,243,236,0.3)", marginBottom: "1.25rem" }}>
              Contatti
            </h3>
            <address
              style={{
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {[
                { label: "Telefono", value: "[PLACEHOLDER]", href: "tel:PLACEHOLDER" },
                { label: "Email", value: "[PLACEHOLDER]", href: "mailto:PLACEHOLDER" },
                { label: "Sede", value: "[PLACEHOLDER]", href: undefined },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="t-label" style={{ color: "rgba(245,243,236,0.2)", marginBottom: "0.25rem", fontSize: "0.55rem" }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="t-small" style={{ color: "rgba(245,243,236,0.45)", transition: "color 0.2s" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="t-small" style={{ color: "rgba(245,243,236,0.45)" }}>{value}</p>
                  )}
                </div>
              ))}
            </address>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 className="t-label" style={{ color: "rgba(245,243,236,0.3)", marginBottom: "0.25rem" }}>
              Preventivo
            </h3>
            <p className="t-small" style={{ color: "rgba(245,243,236,0.4)", maxWidth: "14rem" }}>
              Raccontaci il tuo evento. Risposta entro 24 ore.
            </p>
            <Link href="#contatto" className="btn btn-fill" style={{ alignSelf: "flex-start", marginTop: "0.25rem" }}>
              Richiedi preventivo
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1.25rem 0",
          }}
        >
          <p className="t-small" style={{ color: "rgba(245,243,236,0.2)" }}>
            © {year} Dama24 Banqueting. Tutti i diritti riservati.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy-policy" className="t-small" style={{ color: "rgba(245,243,236,0.2)", transition: "color 0.2s" }}
            >
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="t-small" style={{ color: "rgba(245,243,236,0.2)", transition: "color 0.2s" }}
            >
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
