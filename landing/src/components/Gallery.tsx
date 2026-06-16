import Image from "next/image";

const images = [
  {
    src: "/immagini/catering.webp",
    alt: "Allestimento catering aziendale Dama24 – mise en place",
    span: "lg:col-span-2",
  },
  {
    src: "/immagini/catering2.webp",
    alt: "Banqueting su misura – dettaglio servizio Dama24",
    span: "",
  },
  {
    src: "/immagini/catering3.webp",
    alt: "Composizione gastronomica – evento corporate Dama24",
    span: "",
  },
  {
    src: "/immagini/catering2.webp",
    alt: "Atmosfera raffinata – catering aziendale Milano",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-20 lg:py-28 bg-ivory"
      style={{ background: "#F5F3EC" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-bordeaux text-xs tracking-[0.25em] uppercase font-ui mb-3"
              style={{ color: "#8C1822" }}>
              Gallery
            </p>
            <h3
              id="gallery-heading"
              className="font-display text-2xl lg:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gli eventi organizzati da Dama24
            </h3>
          </div>
          <span
            className="hidden lg:block w-12 h-px flex-shrink-0 mb-2"
            style={{ background: "#8C1822" }}
            aria-hidden
          />
        </div>

        {/* Masonry-style grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          role="list"
          aria-label="Gallery eventi Dama24"
        >
          {images.map((img, i) => (
            <div
              key={i}
              role="listitem"
              className={`overflow-hidden ${img.span} ${
                i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={900}
                height={i === 0 ? 506 : 675}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
