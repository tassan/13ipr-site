import Link from "next/link";
import { Instagram, Youtube, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 font-sans">
      {/* Gold top border */}
      <div className="h-0.5 bg-gold" />

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1 — Identidade */}
        <div>
          <h3 className="font-serif text-2xl text-white font-medium mb-1">
            IPR Cidade Nova
          </h3>
          <p className="text-gold text-sm font-light italic mb-4">
            "Uma igreja da família e da Palavra"
          </p>
          <p className="text-sm leading-relaxed">
            Igreja Presbiteriana Renovada, servindo a comunidade do bairro Cidade Nova
            em Governador Valadares, MG.
          </p>
        </div>

        {/* Col 2 — Navegação */}
        <div>
          <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-4">
            Páginas
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Início"],
              ["/sobre", "A Igreja"],
              ["/pastores", "Pastores"],
              ["/noticias", "Notícias"],
              ["/eventos", "Eventos"],
              ["/contato", "Contato"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contato e redes */}
        <div>
          <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-4">
            Encontre-nos
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
              <span>Bairro Cidade Nova, Governador Valadares – MG</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold shrink-0" />
              <a
                href="https://wa.me/5533999168996"
                className="hover:text-gold transition-colors"
              >
                (33) 99916-8996
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com/13iprcidadenova"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com/@13iprcidadenova"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} Igreja Presbiteriana Renovada – Cidade Nova
          </span>
          <span>Governador Valadares, MG</span>
        </div>
      </div>
    </footer>
  );
}
