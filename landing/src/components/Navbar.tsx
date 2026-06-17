"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      aria-label="Navigazione principale"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: solid ? "#F5F3EC" : "transparent",
        backdropFilter: solid ? "none" : "none",
        borderBottom: solid ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          height: "4.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" aria-label="Dama24 Banqueting – torna alla home">
          <Image
            src={solid ? "/loghi/logo_banqueting nero.svg" : "/loghi/logo_banqueting bianco.svg"}
            alt="Dama24 Banqueting"
            width={148}
            height={48}
            priority
            style={{ width: "clamp(110px, 12vw, 148px)", height: "auto" }}
          />
        </a>

        <nav aria-label="Menu" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <div
            style={{ display: "flex", gap: "2rem" }}
            className="hidden lg:flex"
          >
            {[
              { href: "#servizi", label: "Servizi" },
              { href: "#gallery", label: "Gallery" },
              { href: "#faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="t-label"
                style={{ color: solid ? "rgba(0,0,0,0.55)" : "rgba(245,243,236,0.6)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = solid ? "#000000" : "#F5F3EC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = solid ? "rgba(0,0,0,0.55)" : "rgba(245,243,236,0.6)")}
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#contatto" className={solid ? "btn btn-ghost-dark" : "btn btn-fill"} style={{ padding: "0.625rem 1.375rem" }}>
            Preventivo
          </a>
        </nav>
      </div>
    </header>
  );
}
