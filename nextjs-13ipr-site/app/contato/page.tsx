import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, Phone, Clock, Instagram, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Localização, horários e formas de contato da 13ª IPR Cidade Nova, Governador Valadares.",
};

const cultos = [
  { tipo: "Escola Bíblica Dominical", dia: "Domingo", horario: "09h00" },
  { tipo: "Culto de Celebração", dia: "Domingo", horario: "18h00" },
  { tipo: "Culto de Oração", dia: "Quarta-feira", horario: "19h30" },
];

export default function ContatoPage() {
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
          <span className="section-label text-gold">Fale Conosco</span>
          <div className="gold-divider gold-divider--center" />
          <h1 className="font-serif text-white text-5xl md:text-6xl font-semibold mt-2">
            Contato
          </h1>
        </div>
      </div>

      {/* Conteúdo principal */}
      <section className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna esquerda — Informações */}
          <div>
            <SectionHeader
              label="Informações"
              title="Como nos encontrar"
            />

            <ul className="space-y-6 font-sans text-stone-700">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    Endereço
                  </span>
                  <p className="text-sm leading-relaxed font-light">
                    Rua Dr. Paulo de Sousa Lima, 1010 - Cidade Nova<br />
                    Gov. Valadares - MG, 35063-007
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/5533999168996"
                    className="text-sm font-light hover:text-gold transition-colors"
                  >
                    (33) 99916-8996
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    Horários dos Cultos
                  </span>
                  <ul className="space-y-1">
                    {cultos.map((c, i) => (
                      <li key={i} className="text-sm font-light flex gap-2">
                        <span className="text-stone-400">{c.dia}</span>
                        <span className="text-gold">{c.horario}</span>
                        <span>{c.tipo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                  <Instagram size={18} className="text-gold" />
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    Redes Sociais
                  </span>
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://instagram.com/13iprcidadenova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <Instagram size={13} /> @13iprcidadenova
                    </a>
                    <a
                      href="https://youtube.com/@13iprcidadenova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <Youtube size={13} /> 13 IPR Cidade Nova
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna direita — Mapa e formulário */}
          <div className="flex flex-col gap-8">
            {/* Google Maps embed */}
            <div className="border border-stone overflow-hidden">
              <iframe
                title="Localização 13ª IPR Cidade Nova"
                src="https://www.google.com/maps?cid=4566480430851867757&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=pt-BR&source=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Formulário de contato */}
            <div className="bg-surface border border-stone p-8">
              <h2 className="font-serif text-navy text-2xl font-semibold mb-6">
                Envie uma mensagem
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Formulário client-side separado
function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/XXXXXXXX"
      method="POST"
      className="flex flex-col gap-4 font-sans"
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-widest uppercase text-gold">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          required
          placeholder="Seu nome"
          className="bg-white border border-stone px-4 py-2.5 text-sm text-navy placeholder-stone-400 focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-widest uppercase text-gold">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="seu@email.com"
          className="bg-white border border-stone px-4 py-2.5 text-sm text-navy placeholder-stone-400 focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-widest uppercase text-gold">
          Mensagem
        </label>
        <textarea
          name="mensagem"
          required
          rows={4}
          placeholder="Como podemos ajudar?"
          className="bg-white border border-stone px-4 py-2.5 text-sm text-navy placeholder-stone-400 focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-navy hover:bg-navy-dark text-white font-medium text-sm px-6 py-3 transition-colors text-center"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
