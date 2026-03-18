import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "13ª IPR Cidade Nova | Governador Valadares",
    template: "%s | 13ª IPR Cidade Nova",
  },
  description:
    "Décima Terceira Igreja Presbiteriana Renovada, bairro Cidade Nova, Governador Valadares – MG. Uma igreja da família e da Palavra.",
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
    siteName: "13ª IPR Cidade Nova",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
