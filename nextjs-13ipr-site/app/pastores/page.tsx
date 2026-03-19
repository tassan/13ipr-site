import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { getPastores } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Pastores",
  description:
    "Conheça o Pr. Wilson Brito e o Pr. Uziel Pacheco, a liderança pastoral da IPR Cidade Nova.",
  alternates: {
    canonical: "/pastores",
  },
};

export const revalidate = 60; // ISR: revalida a cada 60s

// Fallback estático enquanto o Sanity não está populado
const PASTORES_FALLBACK = [
  {
    _id: "wilson",
    nome: "Pr. Wilson Brito",
    titulo: "Pastor Titular",
    foto: null,
    biografia:
      "Nosso pastor titular, Pr. Wilson Brito, serve à Igreja Presbiteriana Renovada com dedicação e fidelidade ao Evangelho. Sua pregação é centrada na Palavra de Deus e no cuidado pastoral com cada família da congregação.",
    versiculo: "Apascenta o rebanho de Deus que está entre vós, cuidando dele, não por obrigação, mas de boa vontade.",
    versiculoReferencia: "1 Pedro 5:2",
    ordemExibicao: 1,
  },
  {
    _id: "uziel",
    nome: "Pr. Uziel Pacheco",
    titulo: "Pastor Auxiliar",
    foto: null,
    biografia:
      "O Pr. Uziel Pacheco atua como pastor auxiliar, trabalhando ao lado do pastor titular no cuidado espiritual da congregação. Seu ministério é marcado pelo fervor na oração e pelo amor pela família.",
    versiculo: "Que o Deus da esperança os encha de toda alegria e paz na fé.",
    versiculoReferencia: "Romanos 15:13",
    ordemExibicao: 2,
  },
];

export default async function PastoresPage() {
  const pastoresDB = await getPastores();
  const pastores = pastoresDB.length > 0 ? pastoresDB : PASTORES_FALLBACK;

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
          <span className="section-label text-gold">Liderança Pastoral</span>
          <div className="gold-divider gold-divider--center" />
          <h1 className="font-serif text-white text-5xl md:text-6xl font-semibold mt-2">
            Nossos Pastores
          </h1>
        </div>
      </div>

      {/* Pastores */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-16">
            {pastores.map((pastor, i) => (
              <article
                key={pastor._id}
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-10 items-start`}
              >
                {/* Foto */}
                <div className="w-full md:w-72 shrink-0">
                  <div className="aspect-[3/4] bg-surface border border-stone relative overflow-hidden">
                    {pastor.foto ? (
                      <Image
                        src={urlFor(pastor.foto).width(400).height(533).url()}
                        alt={pastor.nome}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface">
                        {/* Silhouette placeholder */}
                        <div className="w-20 h-20 rounded-full bg-stone mb-3" />
                        <div className="w-32 h-2 bg-stone rounded" />
                        <p className="text-xs text-stone-400 font-sans mt-4 px-4 text-center">
                          Foto a ser adicionada no Sanity
                        </p>
                      </div>
                    )}
                    {/* Gold accent corner */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />
                  </div>
                </div>

                {/* Texto */}
                <div className="flex-1 pt-2">
                  <span className="section-label">{pastor.titulo}</span>
                  <h2 className="font-serif text-navy text-4xl md:text-5xl font-semibold mt-2 mb-1 leading-tight">
                    {pastor.nome}
                  </h2>
                  <div className="gold-divider" />

                  {pastor.biografia && (
                    <p className="font-sans font-light text-stone-700 text-base leading-relaxed mt-4">
                      {pastor.biografia}
                    </p>
                  )}

                  {pastor.versiculo && (
                    <blockquote className="mt-6 pl-5 border-l-2 border-gold">
                      <p className="font-serif italic text-navy text-lg leading-snug">
                        "{pastor.versiculo}"
                      </p>
                      {pastor.versiculoReferencia && (
                        <cite className="block mt-2 font-sans text-sm text-gold not-italic">
                          — {pastor.versiculoReferencia}
                        </cite>
                      )}
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nota de fé */}
      <section className="py-16 bg-surface border-t border-stone">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeader
            label="Nossa liderança"
            title="Servindo com fidelidade"
            subtitle="Nossa liderança pastoral é comprometida com a Palavra de Deus, com o cuidado das famílias e com o crescimento da comunidade no amor a Cristo."
            centered
          />
        </div>
      </section>
    </>
  );
}
