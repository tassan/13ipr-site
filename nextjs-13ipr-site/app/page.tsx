import Link from "next/link";
import { ArrowRight, Clock, CalendarDays, Bell } from "lucide-react";
import { getAvisos, getCultos, getEventos } from "@/lib/queries";
import SectionHeader from "@/components/ui/SectionHeader";

// Static cultos fallback (editar no Sanity depois)
const CULTOS_FALLBACK = [
  { tipo: "Escola Bíblica Dominical", diaSemana: "Domingo", horario: "09h00" },
  { tipo: "Culto de Celebração", diaSemana: "Domingo", horario: "18h00" },
  { tipo: "Culto de Oração", diaSemana: "Quarta-feira", horario: "19h30" },
];

// ISR: revalida periodicamente para puxar conteúdo do Sanity
export const revalidate = 60;

export default async function HomePage() {
  const [avisos, cultosDB, eventos] = await Promise.all([
    getAvisos(4),
    getCultos(),
    getEventos(),
  ]);

  const cultos = cultosDB.length > 0 ? cultosDB : CULTOS_FALLBACK;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-overlay">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(160deg, #111C30 0%, #1B2A4A 50%, #0e1e38 100%)",
          }}
        />

        {/* Subtle cross pattern */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C9913A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gold accent line — left */}
        <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gold/20 hidden lg:block" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <span className="section-label text-gold animate-fade-up animate-fade-up-delay-1">
            Governador Valadares · Cidade Nova
          </span>

          {/* Title */}
          <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-semibold mt-6 mb-2 leading-[1.0] animate-fade-up animate-fade-up-delay-2">
            Igreja
            <br />
            <span className="text-gold">Presbiteriana</span>
            <br />
            Renovada
          </h1>

          {/* Lema */}
          <p className="font-serif italic text-white/60 text-xl md:text-2xl mt-6 mb-10 animate-fade-up animate-fade-up-delay-3">
            "Uma igreja da família e da Palavra"
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-fade-up-delay-4">
            <Link
              href="#cultos"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-sans font-medium text-sm px-8 py-3.5 transition-colors"
            >
              <Clock size={15} />
              Horários dos Cultos
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-gold text-white hover:text-gold font-sans font-medium text-sm px-8 py-3.5 transition-colors"
            >
              Conheça a Igreja
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-xs font-sans tracking-widest uppercase">
            rolar
          </span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* ── CULTOS ────────────────────────────────────────── */}
      <section id="cultos" className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Programação"
            title="Venha nos Encontrar"
            subtitle="Você é bem-vindo em qualquer um dos nossos cultos. Venha como você é."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cultos.map((culto, i) => (
              <div
                key={i}
                className="bg-white border border-stone p-6 flex flex-col gap-3 hover:border-gold/40 transition-colors"
              >
                <span className="section-label">{culto.diaSemana}</span>
                <h3 className="font-serif text-navy text-xl font-semibold">
                  {culto.tipo}
                </h3>
                <div className="flex items-center gap-2 text-gold font-sans font-medium text-lg mt-auto">
                  <Clock size={16} />
                  {culto.horario}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-stone-500 font-sans mt-8">
            Bairro Cidade Nova · Governador Valadares, MG ·{" "}
            <Link href="/contato" className="text-gold hover:underline">
              Ver no mapa
            </Link>
          </p>
        </div>
      </section>

      {/* ── AVISOS ────────────────────────────────────────── */}
      {avisos.length > 0 && (
        <section className="py-20 bg-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <SectionHeader label="Comunicados" title="Avisos" />
              <Link
                href="/noticias"
                className="hidden sm:flex items-center gap-2 text-sm font-sans text-navy hover:text-gold transition-colors"
              >
                Ver todos <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {avisos.map((aviso) => (
                <div
                  key={aviso._id}
                  className={`p-6 border transition-colors ${
                    aviso.destaque
                      ? "border-gold/50 bg-gold/5"
                      : "border-stone bg-white"
                  }`}
                >
                  {aviso.destaque && (
                    <span className="section-label flex items-center gap-1 mb-2">
                      <Bell size={10} /> destaque
                    </span>
                  )}
                  <h3 className="font-serif text-navy text-xl font-semibold mb-2">
                    {aviso.titulo}
                  </h3>
                  <p className="text-sm font-sans text-stone-600 leading-relaxed line-clamp-3">
                    {aviso.texto}
                  </p>
                  <p className="text-xs text-stone-400 mt-4 font-sans">
                    {new Date(aviso.dataPublicacao).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden text-center">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 text-sm font-sans text-navy hover:text-gold"
              >
                Ver todos os avisos <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── PRÓXIMOS EVENTOS ──────────────────────────────── */}
      {eventos.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <SectionHeader label="Agenda" title="Próximos Eventos" />
              <Link
                href="/eventos"
                className="hidden sm:flex items-center gap-2 text-sm font-sans text-navy hover:text-gold transition-colors"
              >
                Ver agenda completa <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {eventos.slice(0, 3).map((evento) => {
                const dt = new Date(evento.dataHora);
                return (
                  <div
                    key={evento._id}
                    className="bg-white border border-stone p-5 flex gap-5 items-center hover:border-gold/40 transition-colors"
                  >
                    <div className="flex-shrink-0 w-14 text-center bg-navy text-white py-2">
                      <div className="font-serif text-2xl font-semibold leading-none">
                        {dt.getDate().toString().padStart(2, "0")}
                      </div>
                      <div className="text-gold text-xs font-sans uppercase tracking-widest">
                        {dt.toLocaleString("pt-BR", { month: "short" })}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-navy text-lg font-semibold">
                        {evento.titulo}
                      </h3>
                      {evento.local && (
                        <p className="text-sm text-stone-500 font-sans">
                          {evento.local}
                        </p>
                      )}
                    </div>
                    <div className="ml-auto text-sm text-gold font-sans font-medium">
                      <CalendarDays size={14} className="inline mr-1" />
                      {dt.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #2d4270 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C9913A 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <span className="section-label text-gold">Venha</span>
          <span className="gold-divider gold-divider--center" />
          <h2 className="font-serif text-white text-4xl md:text-5xl font-semibold mb-4">
            Você é bem-vindo aqui
          </h2>
          <p className="font-sans text-white/60 font-light text-base mb-8 leading-relaxed">
            Nossa porta está aberta para você e sua família. Venha conhecer uma
            comunidade que ama a Palavra e cuida das pessoas.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-sans font-medium text-sm px-10 py-4 transition-colors"
          >
            Como nos encontrar <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
