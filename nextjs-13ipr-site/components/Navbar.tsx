"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "A Igreja" },
  { href: "/pastores", label: "Pastores" },
  { href: "/noticias", label: "Notícias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`font-serif text-xl font-semibold tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            13ª IPR
          </span>
          <span
            className={`text-xs font-sans font-light tracking-widest uppercase transition-colors ${
              scrolled ? "text-gold" : "text-gold-light"
            }`}
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
              className={`text-sm font-sans font-medium tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-navy/80" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-1 transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone shadow-lg">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-sm font-sans font-medium text-navy hover:bg-surface hover:text-gold border-b border-stone/50 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
