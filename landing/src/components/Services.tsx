import Image from "next/image";

const services = [
  {
    title: "Catering Aziendale",
    category: "Convention · Inaugurazioni · Meeting",
    description:
      "Coffee break, lunch aziendali, inaugurazioni ed eventi corporate. Ogni dettaglio progettato per rappresentare al meglio la tua azienda: dalla mise en place all'allestimento.",
    image: "/immagini/catering.webp",
    imageAlt: "Allestimento catering aziendale Dama24 – mise en place per evento corporate",
    wide: true,
  },
  {
    title: "Banqueting",
    category: "Buffet · Placée · A passaggio",
    description:
      "Buffet, servizio placée, servizio a passaggio e formule completamente personalizzate. Il rituale del cibo come esperienza sensoriale e culturale.",
    image: "/immagini/catering2.webp",
    imageAlt: "Banqueting su misura Dama24 – servizio elegante per eventi di alta gamma",
    wide: false,
  },
  {
    title: "Bar Catering & Mixology",
    category: "Open Bar · Cocktail · Bartender",
    description:
      "Open bar, cocktail personalizzati e bartender professionisti. L'arte della mixology al servizio di ogni evento aziendale, dalla convention alla cena di gala.",
    image: "/immagini/catering3.webp",
    imageAlt: "Bar catering e mixology per eventi aziendali Dama24 Milano",
    wide: false,
  },
  {
    title: "Allestimenti & Intrattenimento",
    category: "Arredi · Musica live · Foto & Video",
    description:
      "Arredi, decorazioni, musica live, DJ set, foto e video per eventi aziendali. Un'unica regia estetica che orchestra ogni componente del tuo evento.",
    image: "/immagini/catering.webp",
    imageAlt: "Allestimenti per eventi aziendali Dama24 – arredi e decorazioni su misura",
    wide: true,
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
      className="py-24 lg:py-32"
      style={{ background: "#F5F3EC" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div data-reveal>
            <p className="overline mb-5">Servizi</p>
            <h2
              id="servizi-heading"
              className="font-display max-w-xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Servizi di catering aziendale per ogni tipo di evento
            </h2>
            <span className="dama-line mt-7 block" aria-hidden />
          </div>

          <div data-reveal="right" className="max-w-xs">
            <p className="text-ink/55 text-sm leading-relaxed font-body mb-5">
              Cinque tipologie di eventi, un unico interlocutore. Ogni progetto
              nasce su misura.
            </p>
            <ul className="flex flex-wrap gap-2" role="list" aria-label="Tipologie di eventi gestite">
              {eventTypes.map((et) => (
                <li key={et}>
                  <span
                    className="text-[0.62rem] tracking-wide border border-taupe/50 px-3 py-1 text-ink/55 font-ui inline-block"
                    style={{ borderColor: "rgba(175,168,153,0.5)" }}
                  >
                    {et}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Services grid ── */}
        {/* Row 1: wide left + narrow right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 mb-4">
          {services.slice(0, 2).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        {/* Row 2: narrow left + wide right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4">
          {services.slice(2, 4).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 2} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center" data-reveal>
          <a href="#contatto" className="btn-outline-dark">
            Parla con un nostro consulente
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <article
      className="group"
      data-reveal
      data-delay={String((index % 2) + 1)}
    >
      <div className="img-zoom aspect-[4/3] lg:aspect-[3/2] mb-5">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={800}
          height={533}
          className="w-full h-full object-cover"
          loading={index < 2 ? "eager" : "lazy"}
        />
      </div>
      <p className="overline mb-2 text-[0.6rem]">{service.category}</p>
      <h3
        className="font-display mb-3"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
      >
        {service.title}
      </h3>
      <p className="text-ink/60 text-sm leading-relaxed font-body max-w-md">
        {service.description}
      </p>
    </article>
  );
}
