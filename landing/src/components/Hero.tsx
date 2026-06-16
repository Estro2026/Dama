import Image from "next/image";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Dama24 – Catering aziendale a Milano"
      className="relative min-h-screen flex flex-col lg:flex-row"
    >
      {/* ── Left column: video ── */}
      <div className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/immagini/video_banqueting e catering eventi.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(71,9,15,0.55) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Logo + headline overlay */}
        <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12">
          {/* Logo */}
          <div>
            <Image
              src="/loghi/logo_banqueting bianco.svg"
              alt="Dama24 Banqueting"
              width={180}
              height={60}
              priority
              className="w-36 lg:w-44"
            />
          </div>

          {/* Headline */}
          <div className="max-w-lg pb-4 lg:pb-0">
            <p
              className="text-ivory/80 text-xs tracking-[0.25em] uppercase font-ui mb-4"
              aria-hidden="true"
            >
              Banqueting · Catering Aziendale · Milano
            </p>
            <h1 className="text-ivory leading-tight">
              Catering aziendale a Milano per eventi
            </h1>
            <p className="mt-4 text-ivory/80 text-base lg:text-lg leading-relaxed font-body">
              Coffee break, convention, inaugurazioni, meeting aziendali e
              banqueting su misura. Ricevi una proposta personalizzata entro 24
              ore.
            </p>
          </div>
        </div>
      </div>

      {/* ── Right column: form ── */}
      <div
        className="w-full lg:w-[45%] bg-ink flex items-center justify-center px-6 py-14 lg:py-0"
        style={{ background: "#0a0a0a" }}
      >
        <div className="w-full max-w-md on-dark">
          <p className="text-ivory/50 text-xs tracking-[0.2em] uppercase font-ui mb-2">
            Richiedi un preventivo
          </p>
          <h2
            className="text-ivory font-display text-2xl lg:text-3xl mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Parliamo del tuo prossimo evento
          </h2>

          <LeadForm dark ctaLabel="Ricevi una proposta personalizzata" source="hero" />
        </div>
      </div>
    </section>
  );
}
