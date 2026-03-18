import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { getEventos } from "@/lib/queries";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Agenda e próximos eventos da 13ª IPR Cidade Nova, GV.",
};

export const revalidate = 60;

function formatDate(isoDate: string) {
  const dt = new Date(isoDate);
  return {
    dia: dt.getDate().toString().padStart(2, "0"),
    mes: dt.toLocaleString("pt-BR", { month: "short" }).replace(".", ""),
    ano: dt.getFullYear(),
    diaSemana: dt.toLocaleString("pt-BR", { weekday: "long" }),
    hora: dt.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
  };
}

export default async function EventosPage() {
  const eventos = await getEventos();

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
          <span className="section-label text-gold">Programação</span>
          <div className="gold-divider gold-divider--center" />
          <h1 className="font-serif text-white text-5xl md:text-6xl font-semibold mt-2">
            Agenda
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-6">
          {eventos.length === 0 ? (
            <div className="text-center py-20">
              <CalendarDays size={32} className="text-stone mx-auto mb-4" />
              <p className="font-sans text-stone-400 text-sm">
                Nenhum evento próximo no momento.
              </p>
              <p className="font-sans text-stone-300 text-xs mt-2">
                Fique de olho — novidades em breve!
              </p>
            </div>
          ) : (
            <>
              <SectionHeader
                label="Próximos eventos"
                title="Agenda"
                subtitle="Todos os eventos e programações especiais da nossa congregação."
              />

              <div className="flex flex-col gap-4">
                {eventos.map((evento) => {
                  const { dia, mes, diaSemana, hora } = formatDate(evento.dataHora);
                  return (
                    <div
                      key={evento._id}
                      className="bg-white border border-stone p-0 flex overflow-hidden hover:border-gold/50 transition-colors"
                    >
                      {/* Date block */}
                      <div className="bg-navy text-white flex flex-col items-center justify-center px-5 py-5 min-w-[72px]">
                        <span className="font-serif text-3xl font-semibold leading-none">
                          {dia}
                        </span>
                        <span className="text-gold text-xs font-sans uppercase tracking-widest mt-0.5">
                          {mes}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-5">
                        <h2 className="font-serif text-navy text-xl font-semibold leading-tight">
                          {evento.titulo}
                        </h2>
                        {evento.descricao && (
                          <p className="text-sm font-sans font-light text-stone-600 mt-1 leading-relaxed">
                            {evento.descricao}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-4 mt-3">
                          <span className="flex items-center gap-1.5 text-xs font-sans text-stone-500 capitalize">
                            <CalendarDays size={12} className="text-gold" />
                            {diaSemana}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-sans text-stone-500">
                            <Clock size={12} className="text-gold" />
                            {hora}
                          </span>
                          {evento.local && (
                            <span className="flex items-center gap-1.5 text-xs font-sans text-stone-500">
                              <MapPin size={12} className="text-gold" />
                              {evento.local}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
