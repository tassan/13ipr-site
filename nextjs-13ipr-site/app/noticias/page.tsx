import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { getAvisos } from "@/lib/queries";
import { Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Notícias e Avisos",
  description: "Avisos, comunicados e notícias da IPR Cidade Nova.",
  alternates: {
    canonical: "/noticias",
  },
};

export const revalidate = 60; // ISR: revalida a cada 60s

export default async function NoticiasPage() {
  const avisos = await getAvisos(20);

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
          <span className="section-label text-gold">Comunicados</span>
          <div className="gold-divider gold-divider--center" />
          <h1 className="font-serif text-white text-5xl md:text-6xl font-semibold mt-2">
            Notícias e Avisos
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          {avisos.length === 0 ? (
            <div className="text-center py-20">
              <Bell size={32} className="text-stone mx-auto mb-4" />
              <p className="font-sans text-stone-400 text-sm">
                Nenhum aviso publicado ainda.
              </p>
              <p className="font-sans text-stone-300 text-xs mt-2">
                Os avisos serão adicionados pelo Sanity CMS.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Destaques */}
              {avisos.some((a) => a.destaque) && (
                <div className="mb-4">
                  <SectionHeader label="Em destaque" title="Avisos Importantes" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {avisos
                      .filter((a) => a.destaque)
                      .map((aviso) => (
                        <div
                          key={aviso._id}
                          className="border border-gold/40 bg-gold/5 p-6"
                        >
                          <span className="section-label flex items-center gap-1 mb-2">
                            <Bell size={10} /> destaque
                          </span>
                          <h2 className="font-serif text-navy text-xl font-semibold mb-2">
                            {aviso.titulo}
                          </h2>
                          <p className="text-sm font-sans font-light text-stone-600 leading-relaxed">
                            {aviso.texto}
                          </p>
                          <p className="text-xs text-stone-400 mt-4 font-sans">
                            {new Date(aviso.dataPublicacao).toLocaleDateString(
                              "pt-BR",
                              { day: "2-digit", month: "long", year: "numeric" }
                            )}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Todos os outros */}
              <SectionHeader label="Todos" title="Comunicados Recentes" />
              <div className="flex flex-col gap-4">
                {avisos
                  .filter((a) => !a.destaque)
                  .map((aviso) => (
                    <div
                      key={aviso._id}
                      className="bg-white border border-stone p-6 hover:border-gold/40 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="font-serif text-navy text-xl font-semibold">
                          {aviso.titulo}
                        </h2>
                        <span className="text-xs text-stone-400 font-sans shrink-0 mt-1">
                          {new Date(aviso.dataPublicacao).toLocaleDateString(
                            "pt-BR",
                            { day: "2-digit", month: "short" }
                          )}
                        </span>
                      </div>
                      <p className="text-sm font-sans font-light text-stone-600 leading-relaxed mt-2">
                        {aviso.texto}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
