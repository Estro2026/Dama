const pillars = [
  {
    icon: "✦",
    title: "Su misura",
    description:
      "Ogni evento viene progettato sulle reali esigenze dell'azienda. Nessun format standard, nessuna formula ripetuta.",
    pillar: "Composizione",
  },
  {
    icon: "◈",
    title: "Presenza Costante",
    description:
      "Un referente dedicato prima, durante e dopo l'evento. Un interlocutore unico che conosce ogni dettaglio del progetto.",
    pillar: "Presenza",
  },
  {
    icon: "◇",
    title: "Team Selezionato",
    description:
      "Professionisti qualificati per eventi aziendali e corporate. Una brigata scelta con cura, formata sull'eccellenza.",
    pillar: "Brigata",
  },
  {
    icon: "◉",
    title: "Un Solo Partner",
    description:
      "Food, beverage, allestimenti e coordinamento gestiti da un unico interlocutore. Semplicità e controllo totale.",
    pillar: "Rituale",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="perche-sceglierci"
      aria-labelledby="why-heading"
      className="py-20 lg:py-28 bg-ink"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-ivory/50 text-xs tracking-[0.25em] uppercase font-ui mb-4">
              La differenza Dama24
            </p>
            <h2
              id="why-heading"
              className="text-ivory font-display"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Perché le aziende scelgono Dama24
            </h2>
            <span
              className="block mt-5 w-12 h-px"
              style={{ background: "#8C1822" }}
              aria-hidden
            />
          </div>
          <p className="text-ivory/50 text-sm max-w-xs lg:text-right leading-relaxed font-body">
            Eccellenza senza ostentazione. Approccio sartoriale. Filiera etica e
            locale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/8">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="bg-ink px-8 py-10 flex flex-col gap-5 group"
              style={{ background: "#0a0a0a" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-bordeaux text-xl" style={{ color: "#8C1822" }} aria-hidden>
                  {p.icon}
                </span>
                <span className="text-ivory/20 text-xs tracking-[0.2em] uppercase font-ui">
                  {p.pillar}
                </span>
              </div>
              <h3
                className="text-ivory font-display text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h3>
              <p className="text-ivory/55 text-sm leading-relaxed font-body flex-1">
                {p.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contatto"
            className="inline-block px-10 py-4 bg-bordeaux text-ivory text-sm tracking-widest uppercase font-ui transition-all duration-300 hover:bg-bordeaux-dark"
            style={{ backgroundColor: "#8C1822" }}
          >
            Richiedi una consulenza gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
