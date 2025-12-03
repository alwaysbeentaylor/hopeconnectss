"use client";

import { useReveal } from "@/hooks/useReveal";
import { CheckCircle2 } from "lucide-react";

const usps = [
  "Persoonlijke aanpak op maat",
  "Lokale expertise (Kust & West-Vlaanderen)",
  "Transparante communicatie",
  "Geen verborgen kosten",
  "Focus op high-end afwerking",
  "Gecertificeerd netwerk van partners"
];

export default function USP() {
  const ref = useReveal();

  return (
    <section className="bg-charcoal text-off-white" id="waarom-ons">
      <div ref={ref} className="container reveal-on-scroll flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="md:w-1/2">
          <span className="text-gold uppercase tracking-widest text-sm mb-2 block">Onze Kracht</span>
          <h2 className="text-4xl md:text-5xl mb-6">Waarom kiezen voor onze expertise?</h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            In een markt vol standaardoplossingen kiezen wij resoluut voor maatwerk en persoonlijke betrokkenheid. 
            Uw visie is ons uitgangspunt, perfectie ons einddoel.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {usps.map((usp, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-gold flex-shrink-0" size={20} />
                <span className="font-light">{usp}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="aspect-[4/5] w-full bg-gray-800 relative overflow-hidden">
             {/* Abstract/Architecture Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-80"
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1000&auto=format&fit=crop")'}}
             />
             <div className="absolute inset-0 border border-gold/30 m-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}


