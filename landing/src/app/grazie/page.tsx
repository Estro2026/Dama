import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richiesta ricevuta | Dama24 Banqueting",
  description:
    "Grazie per aver contattato Dama24 Banqueting. Ti risponderemo entro 24 ore con una proposta personalizzata.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    number: "01",
    title: "Analizziamo la tua richiesta",
    desc: "Il nostro team legge ogni richiesta con attenzione, per comprendere esattamente cosa stai cercando.",
  },
  {
    number: "02",
    title: "Prepariamo una proposta personalizzata",
    desc: "Costruiamo una proposta su misura per il tuo evento, senza format standard.",
  },
  {
    number: "03",
    title: "Ti contattiamo per approfondire il progetto",
    desc: "Un nostro consulente ti contatterà direttamente per discutere ogni dettaglio.",
  },
];

export default function GraziePage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "#0a0a0a" }}
    >
      {/* Header */}
      <header className="px-8 py-6">
        <Link href="/" aria-label="Torna alla home Dama24">
          <Image
            src="/loghi/logo_banqueting bianco.svg"
            alt="Dama24 Banqueting"
            width={160}
            height={54}
            className="w-32"
            priority
          />
        </Link>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Decorative rule */}
          <span
            className="block w-10 h-px mx-auto mb-8"
            style={{ background: "#8C1822" }}
            aria-hidden
          />

          <p className="text-ivory/50 text-xs tracking-[0.25em] uppercase font-ui mb-4">
            Grazie
          </p>

          <h1
            className="text-ivory font-display mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Richiesta ricevuta correttamente
          </h1>

          <p className="text-ivory/65 text-lg font-body mb-12">
            Ti contatteremo entro 24 ore.
          </p>

          {/* Next steps */}
          <div className="text-left border-t border-ivory/10 pt-10 mb-12">
            <p className="text-ivory/40 text-xs tracking-[0.2em] uppercase font-ui text-center mb-8">
              Cosa succede ora
            </p>
            <ol className="space-y-8">
              {nextSteps.map((step) => (
                <li key={step.number} className="flex gap-6">
                  <span
                    className="flex-shrink-0 font-display text-3xl leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#8C1822",
                    }}
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <div>
                    <h2 className="text-ivory font-ui font-semibold text-base mb-1">
                      {step.title}
                    </h2>
                    <p className="text-ivory/50 text-sm leading-relaxed font-body">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Social CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/dama24banqueting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-ivory/20 text-ivory/70 text-xs tracking-widest uppercase font-ui hover:bg-ivory/10 transition-all duration-300"
              aria-label="Seguici su Instagram (apre in nuova finestra)"
            >
              Seguici sui social
            </a>
            <Link
              href="/"
              className="text-ivory/40 text-xs tracking-widest uppercase font-ui hover:text-ivory transition-colors"
            >
              Torna alla home →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
