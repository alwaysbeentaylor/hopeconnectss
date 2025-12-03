"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Diensten", href: "#diensten" },
    { name: "Over Ons", href: "#waarom-ons" },
    { name: "Projecten", href: "#projecten" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-sm py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex justify-between items-center text-white">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter">
          PREMIUM<span className="text-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-gold text-xs py-3 px-6">
            Start Project
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-charcoal border-t border-white/10 p-8 flex flex-col gap-6 md:hidden shadow-2xl">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}


