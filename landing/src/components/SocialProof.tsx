/* Client logos – placeholder grid to be replaced with real logo files */
const placeholders = Array.from({ length: 8 }, (_, i) => `Cliente ${String(i + 1).padStart(2, "0")}`);

export default function SocialProof() {
  return (
    <section
      id="clienti"
      aria-labelledby="clienti-heading"
      className="py-16 lg:py-20"
      style={{
        background: "#F5F3EC",
        borderTop: "1px solid rgba(175,168,153,0.2)",
        borderBottom: "1px solid rgba(175,168,153,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Label */}
          <div className="flex-shrink-0" data-reveal>
            <p className="overline mb-2">Fiducia consolidata</p>
            <h3
              id="clienti-heading"
              className="font-display text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Le aziende che ci hanno scelto
            </h3>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px self-stretch" style={{ background: "rgba(175,168,153,0.3)" }} aria-hidden />

          {/* Logo grid */}
          <div
            className="grid grid-cols-4 lg:grid-cols-8 gap-3 flex-1"
            role="list"
            aria-label="Loghi clienti – da sostituire con loghi reali"
            data-reveal data-delay="2"
          >
            {placeholders.map((name, i) => (
              <div
                key={i}
                role="listitem"
                className="aspect-[2/1] flex items-center justify-center border"
                style={{ borderColor: "rgba(175,168,153,0.25)", background: "rgba(255,255,255,0.4)" }}
                title={`Placeholder logo – ${name}`}
                aria-label={`Placeholder logo cliente ${i + 1} – da sostituire`}
              >
                <span className="text-taupe/40 text-[0.55rem] font-ui uppercase tracking-wide text-center px-1">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[0.65rem] text-taupe/60 font-body italic" style={{ color: "#AFA899" }}>
          * Placeholder — sostituire con i loghi clienti reali una volta forniti
        </p>
      </div>
    </section>
  );
}
