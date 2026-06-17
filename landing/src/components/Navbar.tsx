"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,243,236,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Dama24 Banqueting – Home">
          <Image
            src="/loghi/logo_banqueting bianco.svg"
            alt="Dama24 Banqueting"
            width={140}
            height={46}
            priority
            className="w-28 lg:w-36"
          />
        </Link>

        {/* Nav links – desktop only */}
        <nav aria-label="Menu principale" className="hidden lg:flex items-center gap-8">
          {[
            { href: "#servizi", label: "Servizi" },
            { href: "#gallery", label: "Gallery" },
            { href: "#faq", label: "FAQ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-ivory/60 hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contatto"
          className="btn-primary py-3 px-6 text-[0.65rem]"
          aria-label="Richiedi un preventivo gratuito"
        >
          Richiedi preventivo
        </a>
      </div>
    </header>
  );
}
