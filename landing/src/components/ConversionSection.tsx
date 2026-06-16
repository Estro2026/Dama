import LeadForm from "./LeadForm";

const steps = [
  {
    number: "01",
    title: "Raccontaci il tuo evento",
    desc: "Condividi con noi la tua visione: tipologia di evento, numero di ospiti, location e aspettative.",
  },
  {
    number: "02",
    title: "Ricevi una proposta personalizzata",
    desc: "Entro 24 ore prepariamo una proposta su misura che risponde alle tue esigenze reali.",
  },
  {
    number: "03",
    title: "Definiamo menù, servizio e allestimenti",
    desc: "Insieme progettiamo ogni dettaglio: composizione del menù, mise en place, brigata, allestimenti.",
  },
  {
    number: "04",
    title: "Realizziamo il tuo evento",
    desc: "Il giorno dell'evento siamo presenti in ogni momento. Un'esperienza di cui ricordare ogni dettaglio.",
  },
];

export default function ConversionSection() {
  return (
    <section
      id="contatto"
      aria-labelledby="conversion-heading"
      className="py-20 lg:py-28"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left: steps */}
          <div>
            <p className="text-ivory/50 text-xs tracking-[0.25em] uppercase font-ui mb-4">
              Come funziona
            </p>
            <h2
              id="conversion-heading"
              className="text-ivory font-display text-2xl lg:text-3xl mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dall'idea all'evento. Con un unico interlocutore.
            </h2>

            <ol className="space-y-8" aria-label="Processo di lavoro">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-6">
                  <span
                    className="flex-shrink-0 text-bordeaux font-display text-3xl leading-none"
                    style={{ fontFamily: "var(--font-display)", color: "#8C1822" }}
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-ivory font-ui font-semibold text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-ivory/50 text-sm leading-relaxed font-body">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Trust badge row */}
            <div className="mt-10 pt-8 border-t border-ivory/10 grid grid-cols-2 gap-3">
              {[
                "Preventivo gratuito",
                "Risposta entro 24 ore",
                "Nessun impegno",
                "Consulenza dedicata",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#8C1822" }}
                    aria-hidden
                  />
                  <span className="text-ivory/60 text-xs font-body">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="on-dark">
            <p className="text-ivory/50 text-xs tracking-[0.2em] uppercase font-ui mb-3">
              Richiedi il tuo preventivo
            </p>
            <h3
              className="text-ivory font-display text-xl mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Inizia con una conversazione
            </h3>
            <LeadForm dark ctaLabel="Richiedi il tuo preventivo" source="conversion" />
          </div>

        </div>
      </div>
    </section>
  );
}
