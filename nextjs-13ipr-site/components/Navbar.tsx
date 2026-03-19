import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "A Igreja" },
  { href: "/pastores", label: "Pastores" },
  { href: "/noticias", label: "Notícias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="font-serif text-xl font-semibold tracking-tight transition-colors text-navy"
          >
            IPR
          </span>
          <span
            className="text-xs font-sans font-light tracking-widest uppercase transition-colors text-gold-light"
          >
            Cidade Nova · GV
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-sans font-medium tracking-wide transition-colors hover:text-gold text-navy/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <details className="md:hidden">
          <summary className="p-1 cursor-pointer list-none marker:hidden text-navy" aria-label="Menu">
            <Menu size={22} />
          </summary>

          <nav className="bg-white border-t border-stone shadow-lg flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-sm font-sans font-medium text-navy hover:bg-surface hover:text-gold border-b border-stone/50 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
