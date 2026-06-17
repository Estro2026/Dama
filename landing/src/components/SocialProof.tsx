export default function SocialProof() {
  const placeholders = Array.from({ length: 6 }, (_, i) => `Cliente ${String(i + 1).padStart(2, "0")}`);

  return (
    <section
      aria-labelledby="clients-title"
      style={{
        background: "#F5F3EC",
        borderTop: "1px solid rgba(175,168,153,0.2)",
        borderBottom: "1px solid rgba(175,168,153,0.2)",
        padding: "clamp(2.5rem, 4vw, 3.5rem) 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div data-reveal style={{ textAlign: "center" }}>
            <p className="t-label" style={{ color: "#8C1822", marginBottom: "0.5rem" }}>
              Fiducia consolidata
            </p>
            <h3 id="clients-title" className="t-h3">
              Le aziende che ci hanno scelto
            </h3>
          </div>

          <ul
            data-reveal
            data-delay="200"
            aria-label="Loghi clienti – placeholder da sostituire con loghi reali"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              listStyle: "none",
              width: "100%",
              maxWidth: "44rem",
            }}
            className="sm:grid-cols-6"
          >
            {placeholders.map((name, i) => (
              <li
                key={i}
                title={`Placeholder – da sostituire con logo reale: ${name}`}
                aria-label={`Logo cliente ${i + 1} – placeholder`}
                style={{
                  aspectRatio: "2/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(175,168,153,0.3)",
                  background: "rgba(255,255,255,0.5)",
                }}
              >
                <span className="t-label" style={{ fontSize: "0.55rem", color: "rgba(175,168,153,0.6)", textAlign: "center" }}>
                  {name}
                </span>
              </li>
            ))}
          </ul>

          <p className="t-small" style={{ color: "#AFA899", fontStyle: "italic", textAlign: "center" }}>
            Placeholder – sostituire con i loghi clienti reali
          </p>
        </div>
      </div>
    </section>
  );
}
