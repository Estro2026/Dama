import type { Metadata } from "next";
import { Bodoni_Moda, Quicksand, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dama24banqueting.it"),
  title: "Catering Aziendale Milano | Banqueting per Eventi Corporate – Dama24",
  description:
    "Dama24 Banqueting: catering aziendale a Milano per convention, fiere, inaugurazioni e meeting. Coffee break, banqueting e allestimenti su misura. Preventivo gratuito entro 24 ore.",
  keywords:
    "catering aziendale Milano, catering eventi aziendali, banqueting Milano, coffee break aziendali, catering convention, catering fiere, catering inaugurazioni, catering per aziende",
  authors: [{ name: "Dama24 Banqueting" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.dama24banqueting.it",
    siteName: "Dama24 Banqueting",
    title: "Catering Aziendale Milano | Banqueting per Eventi Corporate – Dama24",
    description:
      "Catering aziendale a Milano per convention, fiere, inaugurazioni e meeting corporate. Preventivo gratuito entro 24 ore.",
    images: [
      {
        url: "/immagini/catering.webp",
        width: 1200,
        height: 630,
        alt: "Dama24 Banqueting – Catering Aziendale Milano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering Aziendale Milano | Dama24 Banqueting",
    description:
      "Catering aziendale e banqueting su misura a Milano. Convention, fiere, inaugurazioni. Preventivo gratuito entro 24 ore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Dama24 Banqueting",
    description:
      "Catering aziendale e banqueting di alta gamma a Milano. Servizi per convention, fiere, inaugurazioni, meeting e coffee break aziendali.",
    url: "https://www.dama24banqueting.it",
    logo: "/loghi/logo_banqueting nero.svg",
    image: "/immagini/catering.webp",
    areaServed: {
      "@type": "City",
      name: "Milano",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi Catering Aziendale",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catering Aziendale" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banqueting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coffee Break Aziendali" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catering Convention e Congressi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catering Fiere" } },
      ],
    },
  };

  return (
    <html
      lang="it"
      className={`${bodoni.variable} ${quicksand.variable} ${jost.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
