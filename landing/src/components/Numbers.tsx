const items = [
  { value: null,  label: "Eventi realizzati",    note: "dato da inserire" },
  { value: null,  label: "Aziende supportate",   note: "dato da inserire" },
  { value: null,  label: "Clienti soddisfatti",  note: "dato da inserire" },
  { value: "24h", label: "Tempo di risposta",    note: "verificato" },
];

export default function Numbers() {
  return (
    <section aria-labelledby="numbers-title" style={{ background: "#47090F" }}>
      <h2 id="numbers-title" className="sr-only">I nostri numeri</h2>
      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderTop: "1px solid rgba(245,243,236,0.08)",
        }}
        className="lg:grid-cols-4"
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            data-reveal
            data-delay={`${i * 100}`}
            style={{
              padding: "clamp(2.5rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem)",
              textAlign: "center",
              borderRight: i < items.length - 1 ? "1px solid rgba(245,243,236,0.08)" : undefined,
              borderBottom: "1px solid rgba(245,243,236,0.08)",
            }}
          >
            <dd
              className="t-display"
              style={{
                color: item.value ? "#F5F3EC" : "rgba(245,243,236,0.2)",
                marginBottom: "0.5rem",
                fontFamily: "var(--font-display)",
              }}
              aria-label={item.value ?? `Dato non disponibile – ${item.note}`}
            >
              {item.value ?? "—"}
            </dd>
            <dt className="t-label" style={{ color: "rgba(245,243,236,0.5)" }}>
              {item.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
