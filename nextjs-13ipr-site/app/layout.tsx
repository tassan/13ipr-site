import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-bg">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
