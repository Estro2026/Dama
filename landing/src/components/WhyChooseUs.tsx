import Image from "next/image";

const pillars = [
  {
    n: "01",
    title: "Su misura",
    desc: "Ogni evento viene progettato sulle reali esigenze dell'azienda. Nessun format standard.",
  },
  {
    n: "02",
    title: "Presenza Costante",
    desc: "Un referente dedicato prima, durante e dopo l'evento.",
  },
  {
    n: "03",
    title: "Team Selezionato",
    desc: "Una brigata scelta con cura, formata sull'eccellenza del banqueting corporate.",
  },
  {
    n: "04",
    title: "Un Solo Partner",
    desc: "Food, beverage, allestimenti e coordinamento gestiti da un unico interlocutore.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="perche-sceglierci"
      aria-labelledby="why-title"
      style={{ background: "#000000" }}
    >
      <div className="container section-pad">

        {/* Top row: label + headline + intro */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            marginBottom: "clamp(3rem, 5vw, 4.5rem)",
          }}
          className="lg:grid-cols-2 lg:items-end"
        >
          <div data-reveal>
            <p className="t-label" style={{ color: "rgba(245,243,236,0.4)", marginBottom: "1rem" }}>
              La differenza Dama24
            </p>
            <h2 id="why-title" className="t-h2" style={{ color: "#F5F3EC" }}>
              Perché le aziende scelgono Dama24
            </h2>
            <span className="dama-rule" style={{ display: "block", marginTop: "1.5rem" }} aria-hidden />
          </div>
          <div data-reveal data-delay="200">
            <p className="t-body" style={{ color: "rgba(245,243,236,0.5)", maxWidth: "28rem" }}>
              Eccellenza senza ostentazione. Approccio sartoriale. Filiera etica
              e locale. Un modo diverso di vivere il banqueting di alta gamma.
            </p>
          </div>
        </div>

        {/* Content: image + pillars */}
        <div
          style={{ display: "grid", gap: "1.5rem", alignItems: "stretch" }}
          className="lg:grid-cols-2"
        >
          {/* Immagine */}
          <div
            data-reveal
            className="img-cover"
            style={{ aspectRatio: "3/4", minHeight: "340px" }}
          >
            <Image
              src="/immagini/catering2.webp"
              alt="Servizio Dama24 Banqueting – cura del dettaglio e presenza costante in ogni evento"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Pillars 2×2 */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(245,243,236,0.06)" }}
          >
            {pillars.map((p, i) => (
              <article
                key={p.title}
                data-reveal
                data-delay={`${i * 100}`}
                style={{
                  background: "#000000",
                  padding: "clamp(1.5rem, 3vw, 2.25rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    lineHeight: 1,
                    color: "rgba(140,24,34,0.55)",
                    fontWeight: 400,
                  }}
                  aria-hidden
                >
                  {p.n}
                </span>
                <h3 className="t-h4" style={{ color: "#F5F3EC" }}>
                  {p.title}
                </h3>
                <p className="t-small" style={{ color: "rgba(245,243,236,0.45)", flex: 1 }}>
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-reveal style={{ marginTop: "clamp(2.5rem, 4vw, 3.5rem)", textAlign: "center" }}>
          <a href="#contatto" className="btn btn-fill">
            Richiedi una consulenza gratuita
          </a>
        </div>

      </div>
    </section>
  );
}
