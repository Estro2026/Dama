import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" style={{ background: "#F5F3EC" }}>
      <div className="container section-pad">

        {/* Header */}
        <div
          data-reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "clamp(2rem, 3vw, 3rem)",
          }}
        >
          <div>
            <p className="t-label" style={{ color: "#8C1822", marginBottom: "0.75rem" }}>
              Gallery
            </p>
            <h3 id="gallery-title" className="t-h3">
              Gli eventi organizzati da Dama24
            </h3>
          </div>
          <p className="t-small" style={{ color: "rgba(0,0,0,0.45)", maxWidth: "18rem" }}>
            Ogni immagine racconta un gesto. Ogni evento, un'esperienza
            irripetibile.
          </p>
        </div>

        {/* Editorial grid – desktop */}
        <div
          className="hidden lg:grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "0.75rem",
            height: "72vh",
            maxHeight: "640px",
            minHeight: "480px",
          }}
          role="list"
          aria-label="Gallery eventi Dama24"
        >
          {/* Large left (span 2 rows) */}
          <div
            role="listitem"
            data-reveal
            className="img-cover"
            style={{ gridRow: "span 2" }}
          >
            <Image
              src="/immagini/catering.webp"
              alt="Allestimento catering aziendale Dama24 – mise en place premium per evento corporate a Milano"
              fill
              style={{ objectFit: "cover" }}
              sizes="40vw"
              loading="lazy"
            />
          </div>

          {/* Top right 1 */}
          <div
            role="listitem"
            data-reveal
            data-delay="100"
            className="img-cover"
          >
            <Image
              src="/immagini/catering2.webp"
              alt="Banqueting su misura Dama24 – dettaglio servizio per evento aziendale"
              fill
              style={{ objectFit: "cover" }}
              sizes="30vw"
              loading="lazy"
            />
          </div>

          {/* Top right 2 */}
          <div
            role="listitem"
            data-reveal
            data-delay="200"
            className="img-cover"
          >
            <Image
              src="/immagini/catering3.webp"
              alt="Bar catering e mixology Dama24 – cocktail personalizzati per eventi aziendali Milano"
              fill
              style={{ objectFit: "cover" }}
              sizes="30vw"
              loading="lazy"
            />
          </div>

          {/* Bottom right spanning 2 cols */}
          <div
            role="listitem"
            data-reveal
            data-delay="300"
            className="img-cover"
            style={{ gridColumn: "span 2" }}
          >
            <Image
              src="/immagini/catering2.webp"
              alt="Evento aziendale Dama24 – catering e banqueting di alta gamma a Milano"
              fill
              style={{ objectFit: "cover" }}
              sizes="60vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile grid */}
        <div
          className="lg:hidden"
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          role="list"
          aria-label="Gallery eventi Dama24"
        >
          <div role="listitem" className="img-cover" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/immagini/catering.webp"
              alt="Allestimento catering aziendale Dama24"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
              loading="lazy"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div role="listitem" className="img-cover" style={{ aspectRatio: "1" }}>
              <Image
                src="/immagini/catering2.webp"
                alt="Banqueting su misura Dama24"
                fill
                style={{ objectFit: "cover" }}
                sizes="50vw"
                loading="lazy"
              />
            </div>
            <div role="listitem" className="img-cover" style={{ aspectRatio: "1" }}>
              <Image
                src="/immagini/catering3.webp"
                alt="Bar catering e mixology Dama24"
                fill
                style={{ objectFit: "cover" }}
                sizes="50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
