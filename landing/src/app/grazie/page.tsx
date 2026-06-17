import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richiesta ricevuta | Dama24 Banqueting",
  description: "Grazie per aver contattato Dama24 Banqueting. Ti risponderemo entro 24 ore.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    n: "01",
    title: "Analizziamo la tua richiesta",
    desc: "Il nostro team legge ogni richiesta con cura, per comprendere esattamente cosa stai cercando.",
  },
  {
    n: "02",
    title: "Prepariamo una proposta personalizzata",
    desc: "Costruiamo una proposta su misura per il tuo evento, senza format standard o soluzioni preconfezionate.",
  },
  {
    n: "03",
    title: "Ti contattiamo per approfondire il progetto",
    desc: "Un nostro consulente ti contatterà direttamente per discutere ogni dettaglio insieme.",
  },
];

export default function GraziePage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#0a0a0a" }}
    >
      {/* Header */}
      <header className="px-8 lg:px-12 py-6 border-b" style={{ borderColor: "rgba(245,243,236,0.08)" }}>
        <Link href="/" aria-label="Torna alla home Dama24">
          <Image
            src="/loghi/logo_banqueting bianco.svg"
            alt="Dama24 Banqueting"
            width={160}
            height={52}
            className="w-32"
            priority
          />
        </Link>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full">
          {/* Ornament */}
          <span className="dama-line block mb-8" aria-hidden />

          <p className="overline text-ivory/40 mb-4">Grazie</p>

          <h1
            className="text-ivory font-display mb-5"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Richiesta ricevuta correttamente
          </h1>

          <p className="text-ivory/60 text-lg font-body leading-relaxed mb-14">
            Ti contatteremo entro 24 ore con una proposta pensata per il tuo
            evento.
          </p>

          {/* Steps */}
          <div className="border-t border-ivory/10 pt-10 mb-14">
            <p className="text-ivory/30 text-[0.62rem] tracking-[0.22em] uppercase font-ui mb-8">
              Cosa succede ora
            </p>
            <ol className="space-y-7">
              {nextSteps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span
                    className="flex-shrink-0 font-display text-2xl leading-none mt-0.5"
                    style={{ fontFamily: "var(--font-display)", color: "rgba(140,24,34,0.55)" }}
                    aria-hidden
                  >
                    {s.n}
                  </span>
                  <div>
                    <h2 className="text-ivory font-ui font-semibold text-sm mb-1">{s.title}</h2>
                    <p className="text-ivory/40 text-sm leading-relaxed font-body">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="https://www.instagram.com/dama24banqueting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-[0.65rem]"
              aria-label="Seguici su Instagram (apre in nuova finestra)"
            >
              Seguici sui social
            </a>
            <Link
              href="/"
              className="text-ivory/35 text-[0.65rem] tracking-widest uppercase font-ui hover:text-ivory/65 transition-colors"
            >
              ← Torna alla home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
