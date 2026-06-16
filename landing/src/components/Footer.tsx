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
      {/* Top: logo + payoff + contacts */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-ivory/10">

        {/* Logo + payoff */}
        <div className="md:col-span-1">
          <Image
            src="/loghi/logo_banqueting bianco.svg"
            alt="Dama24 Banqueting"
            width={160}
            height={54}
            className="mb-5 w-32"
          />
          <p className="text-ivory/50 text-sm leading-relaxed font-body max-w-xs">
            Catering aziendale, banqueting ed eventi corporate a Milano.
          </p>

          {/* Trust strip */}
          <ul className="mt-6 space-y-2" aria-label="Impegni Dama24">
            {[
              "Preventivo gratuito",
              "Risposta entro 24 ore",
              "Servizio personalizzato",
              "Un unico referente per il tuo evento",
            ].map((t) => (
              <li key={t} className="text-xs text-ivory/40 flex items-center gap-2 font-body">
                <span className="w-1 h-1 rounded-full bg-bordeaux flex-shrink-0"
                  style={{ background: "#8C1822" }} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-ivory/40 text-xs tracking-[0.2em] uppercase font-ui mb-5">
            Servizi
          </h3>
          <ul className="space-y-2" role="list">
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
                <span className="text-ivory/55 text-sm font-body hover:text-ivory transition-colors">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-ivory/40 text-xs tracking-[0.2em] uppercase font-ui mb-5">
            Contatti
          </h3>
          <address className="not-italic space-y-3">
            <p className="text-ivory/55 text-sm font-body">
              <span className="block text-ivory/30 text-xs uppercase tracking-wider mb-1">
                Telefono
              </span>
              <a
                href="tel:[PLACEHOLDER]"
                className="hover:text-ivory transition-colors"
                aria-label="Numero di telefono – da aggiornare"
              >
                [PLACEHOLDER]
              </a>
            </p>
            <p className="text-ivory/55 text-sm font-body">
              <span className="block text-ivory/30 text-xs uppercase tracking-wider mb-1">
                Email
              </span>
              <a
                href="mailto:[PLACEHOLDER]"
                className="hover:text-ivory transition-colors"
                aria-label="Indirizzo email – da aggiornare"
              >
                [PLACEHOLDER]
              </a>
            </p>
            <p className="text-ivory/55 text-sm font-body">
              <span className="block text-ivory/30 text-xs uppercase tracking-wider mb-1">
                Indirizzo
              </span>
              [PLACEHOLDER]
            </p>
          </address>

          <div className="mt-6">
            <Link
              href="#contatto"
              className="inline-block text-xs tracking-widest uppercase font-ui px-6 py-3 border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-ivory transition-all duration-300"
              style={{ borderColor: "#8C1822", color: "#8C1822" }}
            >
              Richiedi preventivo
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom: legal */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-ivory/30 text-xs font-body">
          © {year} Dama24 Banqueting. Tutti i diritti riservati.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-ivory/30 text-xs font-body hover:text-ivory/60 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookie-policy"
            className="text-ivory/30 text-xs font-body hover:text-ivory/60 transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
