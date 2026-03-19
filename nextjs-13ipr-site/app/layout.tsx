import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SpeedInsightsDeferred from "@/components/SpeedInsightsDeferred";

// Footer: chunk separado (abaixo da dobra) — reduz bundle inicial
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

// Pesos reduzidos (300,400,500,600) — 700 não usado no site; menos arquivos = cadeia menor
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IPR Cidade Nova | Governador Valadares",
    template: "%s | IPR Cidade Nova",
  },
  description:
    "Igreja Presbiteriana Renovada, bairro Cidade Nova, Governador Valadares – MG. Uma igreja da família e da Palavra.",
  keywords: [
    "Igreja Presbiteriana Renovada",
    "Governador Valadares",
    "Cidade Nova",
    "IPR",
    "Evangélica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "IPR Cidade Nova",
    title: "IPR Cidade Nova | Governador Valadares",
    description:
      "Igreja Presbiteriana Renovada, bairro Cidade Nova, Governador Valadares – MG. Uma igreja da família e da Palavra.",
    url: siteUrl,
    images: [
      {
        url: siteUrl + "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPR Cidade Nova em Governador Valadares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPR Cidade Nova | Governador Valadares",
    description:
      "Igreja Presbiteriana Renovada, bairro Cidade Nova, Governador Valadares – MG. Uma igreja da família e da Palavra.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "IPR Cidade Nova",
    description:
      "Igreja Presbiteriana Renovada no bairro Cidade Nova em Governador Valadares – MG.",
    url: siteUrl,
    telephone: "+55-33-99916-8996",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Dr. Paulo de Sousa Lima, 1010",
      addressLocality: "Governador Valadares",
      addressRegion: "MG",
      postalCode: "35063-007",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.8300203,
      longitude: -41.9691839,
    },
    sameAs: [
      "https://instagram.com/13iprcidadenova",
      "https://youtube.com/@13iprcidadenova",
    ],
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
      </head>
      <body className="flex flex-col min-h-screen bg-bg font-sans antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsightsDeferred />
      </body>
    </html>
  );
}
