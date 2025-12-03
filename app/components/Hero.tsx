"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center p-0">
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop")',
          transform: `translateY(${offset * 0.5}px)`,
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="relative z-10 container text-white">
        <span className="block mb-4 text-gold tracking-[0.2em] uppercase text-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Exclusief Vastgoed & Renovatie
        </span>
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Uw Vastgoedproject,<br />
          <span className="italic text-gold">Onze Expertise</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 font-light animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          Van renovatie tot verkoop — wij begeleiden elk detail met ongeëvenaarde precisie en toewijding.
        </p>
        <a href="#contact" className="btn-gold animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          Gratis Adviesgesprek
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <ArrowDown size={24} />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}


