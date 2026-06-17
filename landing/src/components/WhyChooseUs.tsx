import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Su misura",
    description:
      "Ogni evento viene progettato sulle reali esigenze dell'azienda. Nessun format standard, nessuna soluzione ripetuta. Solo progetti unici.",
    pillar: "Composizione",
  },
  {
    number: "02",
    title: "Presenza Costante",
    description:
      "Un referente dedicato prima, durante e dopo l'evento. Un interlocutore che conosce ogni dettaglio del progetto e non abbandona il cliente.",
    pillar: "Presenza",
  },
  {
    number: "03",
    title: "Team Selezionato",
    description:
      "Una brigata scelta con cura, formata sull'eccellenza. Professionisti qualificati per eventi aziendali e corporate di qualsiasi scala.",
    pillar: "Brigata",
  },
  {
    number: "04",
    title: "Un Solo Partner",
    description:
      "Food, beverage, allestimenti e coordinamento gestiti da un unico interlocutore. Semplicità operativa, controllo totale sull'esperienza.",
    pillar: "Rituale",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="perche-sceglierci"
      aria-labelledby="why-heading"
      className="py-24 lg:py-32"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Split header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">
          <div data-reveal>
            <p className="overline text-ivory/40 mb-5">La differenza Dama24</p>
            <h2
              id="why-heading"
              className="text-ivory font-display"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Perché le aziende scelgono Dama24
            </h2>
            <span className="dama-line mt-7 block" aria-hidden />
          </div>

          <div className="flex flex-col justify-end" data-reveal data-delay="2">
            <p className="text-ivory/50 text-sm leading-relaxed font-body mb-6 max-w-sm">
              Eccellenza senza ostentazione. Approccio sartoriale. Filiera
              etica e locale. Un modo diverso di interpretare il banqueting di
              alta gamma.
            </p>
            <a href="#contatto" className="btn-primary self-start">
              Richiedi una consulenza gratuita
            </a>
          </div>
        </div>

        {/* ── Image + pillars ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 lg:gap-6">

          {/* Image */}
          <div className="img-zoom aspect-[3/4] lg:aspect-auto" data-reveal="left">
            <Image
              src="/immagini/catering2.webp"
              alt="Servizio Dama24 Banqueting – cura del dettaglio in ogni evento"
              width={700}
              height={933}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ivory/8">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className="flex flex-col gap-4 p-8 lg:p-10"
                style={{ background: "#0a0a0a" }}
                data-reveal
                data-delay={String(i + 1)}
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-display text-4xl leading-none"
                    style={{ fontFamily: "var(--font-display)", color: "#8C1822", opacity: 0.7 }}
                    aria-hidden
                  >
                    {p.number}
                  </span>
                  <span className="text-ivory/20 text-[0.6rem] tracking-[0.18em] uppercase font-ui">
                    {p.pillar}
                  </span>
                </div>
                <h3
                  className="text-ivory font-ui font-semibold text-base"
                >
                  {p.title}
                </h3>
                <p className="text-ivory/45 text-sm leading-relaxed font-body flex-1">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
