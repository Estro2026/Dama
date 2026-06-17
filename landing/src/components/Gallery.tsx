import Image from "next/image";

const items = [
  {
    src: "/immagini/catering.webp",
    alt: "Allestimento catering aziendale Dama24 – mise en place premium per evento corporate a Milano",
    className: "col-span-2 row-span-2",
    width: 1200, height: 900,
    aspect: "aspect-[4/3]",
  },
  {
    src: "/immagini/catering2.webp",
    alt: "Banqueting su misura Dama24 – dettaglio servizio a tavola per eventi di alta gamma",
    className: "col-span-1 row-span-1",
    width: 600, height: 600,
    aspect: "aspect-square",
  },
  {
    src: "/immagini/catering3.webp",
    alt: "Bar catering e mixology Dama24 – cocktail personalizzati per eventi aziendali",
    className: "col-span-1 row-span-1",
    width: 600, height: 600,
    aspect: "aspect-square",
  },
  {
    src: "/immagini/catering3.webp",
    alt: "Composizione gastronomica Dama24 – catering aziendale Milano per convention",
    className: "col-span-1 row-span-1",
    width: 600, height: 450,
    aspect: "aspect-[4/3]",
  },
  {
    src: "/immagini/catering2.webp",
    alt: "Evento aziendale Dama24 – atmosfera raffinata per inaugurazione e meeting",
    className: "col-span-1 row-span-1",
    width: 600, height: 450,
    aspect: "aspect-[4/3]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-24 lg:py-32"
      style={{ background: "#F5F3EC" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12" data-reveal>
          <div>
            <p className="overline mb-4">Gallery</p>
            <h3
              id="gallery-heading"
              className="font-display"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Gli eventi organizzati da Dama24
            </h3>
          </div>
          <p className="text-ink/50 text-sm max-w-xs font-body leading-relaxed lg:text-right">
            Ogni immagine racconta un gesto. Ogni evento, un'esperienza irripetibile.
          </p>
        </div>

        {/* ── Editorial grid (desktop) ── */}
        <div
          className="hidden lg:grid grid-cols-4 grid-rows-2 gap-3"
          role="list"
          aria-label="Gallery eventi Dama24"
          style={{ height: "70vh", minHeight: "500px", maxHeight: "720px" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              role="listitem"
              className={`img-zoom overflow-hidden ${item.className}`}
              data-reveal
              data-delay={String(Math.min(i + 1, 5))}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* ── Mobile grid ── */}
        <div
          className="lg:hidden grid grid-cols-2 gap-3"
          role="list"
          aria-label="Gallery eventi Dama24 – versione mobile"
        >
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              role="listitem"
              className={`img-zoom overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
              data-reveal
              data-delay={String(i + 1)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
