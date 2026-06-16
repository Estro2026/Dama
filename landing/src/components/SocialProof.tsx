/* Placeholder client logos — to be replaced with real logo files when provided */
const placeholderClients = [
  "Logo Cliente 01",
  "Logo Cliente 02",
  "Logo Cliente 03",
  "Logo Cliente 04",
  "Logo Cliente 05",
  "Logo Cliente 06",
];

export default function SocialProof() {
  return (
    <section
      id="clienti"
      aria-labelledby="clienti-heading"
      className="py-16 lg:py-20 bg-ivory border-t border-taupe/20"
      style={{ background: "#F5F3EC", borderColor: "rgba(175,168,153,0.2)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-bordeaux text-xs tracking-[0.25em] uppercase font-ui mb-3"
            style={{ color: "#8C1822" }}>
            Fiducia consolidata
          </p>
          <h3
            id="clienti-heading"
            className="font-display text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Le aziende che ci hanno scelto
          </h3>
        </div>

        {/* Logo grid placeholder */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          role="list"
          aria-label="Loghi clienti – placeholder da sostituire con loghi reali"
        >
          {placeholderClients.map((client, i) => (
            <div
              key={i}
              role="listitem"
              className="aspect-[3/1.5] flex items-center justify-center border border-taupe/30 bg-white/40"
              title={`Placeholder: ${client}`}
              style={{ borderColor: "rgba(175,168,153,0.3)" }}
              aria-label={`Placeholder logo cliente ${i + 1} – da sostituire`}
            >
              <span className="text-taupe/50 text-xs font-ui tracking-wide text-center px-2">
                {client}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-taupe font-body italic"
          style={{ color: "#AFA899" }}>
          * Placeholder — Inserire i loghi clienti reali una volta forniti
        </p>
      </div>
    </section>
  );
}
