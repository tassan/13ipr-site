import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "A Igreja",
  description:
    "Conheça a história, visão e missão da 13ª Igreja Presbiteriana Renovada – Cidade Nova, GV.",
};

const valores = [
  {
    titulo: "Fidelidade à Palavra",
    texto:
      "Cremos que a Bíblia é a Palavra inspirada e infalível de Deus, nossa regra de fé e prática.",
  },
  {
    titulo: "Família",
    texto:
      "Somos uma comunidade que acolhe famílias, cuida das crianças e nutre relacionamentos duradouros.",
  },
  {
    titulo: "Oração",
    texto:
      "A oração é o centro da nossa vida espiritual, individual e coletiva.",
  },
  {
    titulo: "Comunidade",
    texto:
      "Nos importamos uns com os outros. Servimos juntos, crescemos juntos e celebramos juntos.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Page Header */}
      <div
        className="pt-32 pb-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #111C30 0%, #1B2A4A 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C9913A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10">
          <span className="section-label text-gold">Quem Somos</span>
          <div className="gold-divider gold-divider--center" />
          <h1 className="font-serif text-white text-5xl md:text-6xl font-semibold mt-2">
            A Igreja
          </h1>
        </div>
      </div>

      {/* Sobre */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Nossa história" title="Quem Somos" />

          <div className="font-sans text-stone-700 font-light text-base leading-relaxed space-y-5 prose-church">
            <p>
              A Décima Terceira Igreja Presbiteriana Renovada está localizada no
              bairro Cidade Nova, em Governador Valadares, Minas Gerais. Somos
              uma congregação que crê no Evangelho de Jesus Cristo e se dedica
              ao crescimento espiritual das famílias da nossa comunidade.
            </p>
            <p>
              Nosso lema —{" "}
              <em className="text-navy font-normal">
                "Uma igreja da família e da Palavra"
              </em>{" "}
              — resume o que somos e o que nos move. Entendemos que a família é
              o núcleo da sociedade, e a Palavra de Deus é o fundamento sobre o
              qual toda família deve ser edificada.
            </p>
            <p>
              Somos parte da tradição presbiteriana renovada, que alia o rigor
              teológico reformado à vivência dos dons do Espírito Santo, com
              ênfase na pregação bíblica, nos sacramentos e na comunhão fraterna.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Nosso fundamento"
            title="O que nos move"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {valores.map((valor, i) => (
              <div key={i} className="bg-white border border-stone p-6">
                <span className="block font-sans text-gold text-xs font-semibold tracking-widest uppercase mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-navy text-xl font-semibold mb-3">
                  {valor.titulo}
                </h3>
                <p className="text-sm font-sans font-light text-stone-600 leading-relaxed">
                  {valor.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lema */}
      <section
        className="py-20 text-center"
        style={{ background: "#1B2A4A" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-serif italic text-white/40 text-sm mb-2">
            Nosso lema
          </p>
          <blockquote className="font-serif text-white text-3xl md:text-4xl font-semibold leading-snug">
            "Uma igreja da família e da Palavra"
          </blockquote>
          <div className="gold-divider gold-divider--center mt-6" />
        </div>
      </section>

      {/* CTA Pastores */}
      <section className="py-16 bg-bg text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="font-sans text-stone-500 text-sm mb-4">
            Conheça nossa liderança
          </p>
          <Link
            href="/pastores"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-sans font-medium text-sm px-8 py-3.5 transition-colors"
          >
            Nossos Pastores <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
