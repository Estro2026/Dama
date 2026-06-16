import Image from "next/image";

const services = [
  {
    slug: "catering-aziendale",
    title: "Catering Aziendale",
    category: "Convention · Inaugurazioni · Meeting",
    description:
      "Coffee break, lunch aziendali, inaugurazioni ed eventi corporate. Ogni dettaglio curato per rappresentare al meglio la tua azienda.",
    image: "/immagini/catering.webp",
    imageAlt: "Allestimento catering aziendale Dama24",
  },
  {
    slug: "banqueting",
    title: "Banqueting",
    category: "Buffet · Placée · A passaggio",
    description:
      "Buffet, servizio placée, servizio a passaggio e formule completamente personalizzate. Il rituale del cibo come esperienza sensoriale.",
    image: "/immagini/catering2.webp",
    imageAlt: "Banqueting su misura Dama24",
  },
  {
    slug: "bar-catering",
    title: "Bar Catering",
    category: "Open Bar · Cocktail · Mixology",
    description:
      "Open bar, cocktail personalizzati e bartender professionisti. L'arte della mixology al servizio del tuo evento.",
    image: "/immagini/catering3.webp",
    imageAlt: "Bar catering e mixology eventi Dama24",
  },
  {
    slug: "allestimenti",
    title: "Allestimenti & Intrattenimento",
    category: "Arredi · Musica · Foto & Video",
    description:
      "Arredi, decorazioni, musica live, DJ set, foto e video per eventi aziendali. Un'unica regia per ogni aspetto del tuo evento.",
    image: "/immagini/catering.webp",
    imageAlt: "Allestimenti eventi aziendali Dama24",
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
    <section
      id="servizi"
      aria-labelledby="servizi-heading"
      className="py-20 lg:py-28 bg-ivory"
      style={{ background: "#F5F3EC" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-bordeaux text-xs tracking-[0.25em] uppercase font-ui mb-4"
            style={{ color: "#8C1822" }}>
            Servizi
          </p>
          <h2
            id="servizi-heading"
            className="font-display"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Servizi di catering aziendale per ogni tipo di evento
          </h2>
          <span className="dama-rule mt-6 mb-6 block" aria-hidden />

          {/* Event types tags */}
          <div className="flex flex-wrap gap-2 mt-4" role="list" aria-label="Tipologie di eventi">
            {eventTypes.map((et) => (
              <span
                key={et}
                role="listitem"
                className="text-xs tracking-wide border border-taupe/60 px-3 py-1 text-ink/60 font-ui"
                style={{ borderColor: "#AFA899" }}
              >
                {et}
              </span>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className="group"
            >
              <div className="overflow-hidden aspect-[4/3] mb-5">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <p className="text-bordeaux text-xs tracking-[0.2em] uppercase font-ui mb-2"
                style={{ color: "#8C1822" }}>
                {service.category}
              </p>
              <h3
                className="font-display text-xl mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-ink/65 text-sm leading-relaxed font-body">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contatto"
            className="inline-block px-10 py-4 border border-ink/30 text-sm tracking-widest uppercase font-ui transition-all duration-300 hover:bg-ink hover:text-ivory hover:border-ink"
          >
            Parla con un nostro consulente
          </a>
        </div>
      </div>
    </section>
  );
}
