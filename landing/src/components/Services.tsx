import Image from "next/image";

const services = [
  {
    title: "Catering Aziendale",
    category: "Convention · Meeting · Inaugurazioni",
    description:
      "Coffee break, lunch aziendali e inaugurazioni corporate. Ogni dettaglio progettato per rappresentare al meglio la tua azienda.",
    image: "/immagini/catering.webp",
    imageAlt: "Allestimento catering aziendale Dama24 – mise en place per evento corporate Milano",
  },
  {
    title: "Banqueting",
    category: "Buffet · Placée · A passaggio",
    description:
      "Buffet, servizio placée e formule completamente personalizzate. Il rituale del cibo come esperienza sensoriale.",
    image: "/immagini/catering2.webp",
    imageAlt: "Banqueting su misura Dama24 – servizio elegante per eventi di alta gamma",
  },
  {
    title: "Bar Catering & Mixology",
    category: "Open Bar · Cocktail · Bartender",
    description:
      "Open bar, cocktail personalizzati e bartender professionisti. L'arte della mixology al servizio del tuo evento.",
    image: "/immagini/catering3.webp",
    imageAlt: "Bar catering e mixology per eventi aziendali Dama24 Milano",
  },
  {
    title: "Allestimenti & Intrattenimento",
    category: "Arredi · Musica live · Foto & Video",
    description:
      "Arredi, decorazioni, musica live, DJ set, foto e video. Un'unica regia estetica per ogni aspetto del tuo evento.",
    image: "/immagini/catering.webp",
    imageAlt: "Allestimenti eventi aziendali Dama24 – arredi e decorazioni su misura",
  },
];

const eventTypes = [
  "Convention e Congressi",
  "Fiere",
  "Inaugurazioni Aziendali",
  "Meeting Aziendali",
  "Coffee Break Aziendali",
];

export default function Services() {
  return (
    <section id="servizi" aria-labelledby="services-title" style={{ background: "#F5F3EC" }}>
      <div className="container section-pad">

        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginBottom: "clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          <div data-reveal style={{ maxWidth: "36rem" }}>
            <p className="t-label" style={{ color: "#8C1822", marginBottom: "1rem" }}>
              Servizi
            </p>
            <h2 id="services-title" className="t-h2">
              Servizi di catering aziendale per ogni tipo di evento
            </h2>
            <span className="dama-rule" style={{ marginTop: "1.5rem", display: "block" }} aria-hidden />
          </div>

          {/* Event type tags */}
          <ul
            data-reveal
            data-delay="200"
            aria-label="Tipologie di eventi"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none" }}
          >
            {eventTypes.map((et) => (
              <li key={et}>
                <span
                  className="t-label"
                  style={{
                    display: "inline-block",
                    padding: "0.4rem 0.875rem",
                    border: "1px solid rgba(175,168,153,0.4)",
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "0.6rem",
                  }}
                >
                  {et}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1.5rem, 2.5vw, 2rem)",
          }}
          className="lg:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-delay={`${i * 100}`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="img-cover" style={{ aspectRatio: "4/3", marginBottom: "1.25rem" }}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <p className="t-label" style={{ color: "#8C1822", marginBottom: "0.5rem", fontSize: "0.58rem" }}>
                {s.category}
              </p>
              <h3 className="t-h4" style={{ marginBottom: "0.625rem" }}>
                {s.title}
              </h3>
              <p className="t-small" style={{ color: "rgba(0,0,0,0.6)", flex: 1 }}>
                {s.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal style={{ marginTop: "clamp(2.5rem, 4vw, 3.5rem)", textAlign: "center" }}>
          <a href="#contatto" className="btn btn-ghost-dark">
            Parla con un nostro consulente
          </a>
        </div>
      </div>
    </section>
  );
}
