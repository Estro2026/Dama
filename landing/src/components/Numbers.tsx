const stats = [
  {
    value: "[NUMERO]",
    label: "Eventi realizzati",
    desc: "placeholder",
  },
  {
    value: "[NUMERO]",
    label: "Aziende supportate",
    desc: "placeholder",
  },
  {
    value: "[NUMERO]",
    label: "Clienti soddisfatti",
    desc: "placeholder",
  },
  {
    value: "24h",
    label: "Risposta entro 24 ore",
    desc: "verified",
  },
];

export default function Numbers() {
  return (
    <section
      id="numeri"
      aria-labelledby="numeri-heading"
      className="bg-bordeaux-dark py-16 lg:py-20"
      style={{ background: "#47090F" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="numeri-heading" className="sr-only">
          I nostri numeri
        </h2>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-bordeaux-dark px-8 py-10 text-center"
              style={{ background: "#47090F" }}
            >
              <dt
                className="text-ivory/60 text-xs tracking-[0.2em] uppercase font-ui mt-2"
              >
                {stat.label}
              </dt>
              <dd
                className="text-ivory font-display text-4xl lg:text-5xl mt-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value === "[NUMERO]" ? (
                  <span
                    className="text-ivory/30 text-2xl"
                    aria-label="Dato non disponibile – da aggiornare"
                    title="Placeholder: inserire il dato reale"
                  >
                    —
                  </span>
                ) : (
                  stat.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
