import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Piè di pagina Dama24 Banqueting"
      style={{ background: "#0a0a0a" }}
    >
      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-8 border-b border-ivory/8 pb-12 mb-8">

          {/* Col 1: Brand */}
          <div>
            <Image
              src="/loghi/logo_banqueting bianco.svg"
              alt="Dama24 Banqueting"
              width={160}
              height={52}
              className="w-32 mb-6"
            />
            <p className="text-ivory/45 text-sm leading-relaxed font-body max-w-[240px]">
              Catering aziendale, banqueting ed eventi corporate a Milano.
            </p>
            <span className="dama-line block mt-6 mb-6" aria-hidden />
            <ul className="space-y-1.5" aria-label="Impegni Dama24">
              {[
                "Preventivo gratuito",
                "Risposta entro 24 ore",
                "Servizio personalizzato",
                "Un unico referente per il tuo evento",
              ].map((t) => (
                <li key={t} className="text-xs text-ivory/35 flex items-center gap-2 font-body">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#8C1822" }} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Servizi */}
          <div>
            <h3 className="text-ivory/35 text-[0.62rem] tracking-[0.22em] uppercase font-ui mb-5">Servizi</h3>
            <ul className="space-y-2.5">
              {[
                "Catering Aziendale Milano",
                "Banqueting su misura",
                "Coffee Break Aziendali",
                "Catering Convention",
                "Catering Fiere",
                "Catering Inaugurazioni",
                "Bar Catering & Mixology",
                "Allestimenti & Intrattenimento",
              ].map((s) => (
                <li key={s}>
                  <span className="text-ivory/45 text-sm font-body">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contatti */}
          <div>
            <h3 className="text-ivory/35 text-[0.62rem] tracking-[0.22em] uppercase font-ui mb-5">Contatti</h3>
            <address className="not-italic space-y-4">
              <div>
                <p className="text-ivory/25 text-[0.6rem] uppercase tracking-wider font-ui mb-1">Telefono</p>
                <a href="tel:PLACEHOLDER" className="text-ivory/45 text-sm font-body hover:text-ivory transition-colors"
                  aria-label="Telefono – placeholder da aggiornare">
                  [PLACEHOLDER]
                </a>
              </div>
              <div>
                <p className="text-ivory/25 text-[0.6rem] uppercase tracking-wider font-ui mb-1">Email</p>
                <a href="mailto:PLACEHOLDER" className="text-ivory/45 text-sm font-body hover:text-ivory transition-colors"
                  aria-label="Email – placeholder da aggiornare">
                  [PLACEHOLDER]
                </a>
              </div>
              <div>
                <p className="text-ivory/25 text-[0.6rem] uppercase tracking-wider font-ui mb-1">Sede</p>
                <p className="text-ivory/45 text-sm font-body">[PLACEHOLDER]</p>
              </div>
            </address>
          </div>

          {/* Col 4: CTA + links */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-ivory/35 text-[0.62rem] tracking-[0.22em] uppercase font-ui mb-5">Preventivo</h3>
              <p className="text-ivory/40 text-sm font-body leading-relaxed mb-5">
                Raccontaci il tuo evento. Ricevi una proposta personalizzata entro 24 ore.
              </p>
              <Link href="#contatto" className="btn-primary inline-flex text-[0.65rem] py-3 px-5">
                Richiedi preventivo
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ivory/25 text-xs font-body">
            © {year} Dama24 Banqueting. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-ivory/25 text-xs font-body hover:text-ivory/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-ivory/25 text-xs font-body hover:text-ivory/50 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
