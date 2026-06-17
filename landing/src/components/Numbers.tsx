const stats = [
  {
    value: null,
    label: "Eventi realizzati",
    note: "dato da inserire",
  },
  {
    value: null,
    label: "Aziende supportate",
    note: "dato da inserire",
  },
  {
    value: null,
    label: "Clienti soddisfatti",
    note: "dato da inserire",
  },
  {
    value: "24h",
    label: "Tempo di risposta",
    note: "verificato",
  },
];

export default function Numbers() {
  return (
    <section
      id="numeri"
      aria-labelledby="numeri-heading"
      style={{ background: "#47090F" }}
    >
      <h2 id="numeri-heading" className="sr-only">I nostri numeri</h2>

      <div className="max-w-7xl mx-auto">
        <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ivory/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center py-14 lg:py-16 px-6"
              data-reveal
              data-delay={String(i + 1)}
            >
              <dd
                className="text-ivory font-display leading-none mb-3"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                aria-label={s.value ? s.value : `Dato non disponibile – ${s.note}`}
              >
                {s.value ? (
                  s.value
                ) : (
                  <span className="text-ivory/20 text-3xl tracking-widest" aria-hidden>—</span>
                )}
              </dd>
              <dt className="text-ivory/50 font-ui text-[0.65rem] tracking-[0.22em] uppercase">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
