"use client";

import { useReveal } from "@/hooks/useReveal";
import { Home, Key, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Home size={32} />,
    title: "Renovatiecoördinatie",
    description: "Volledige ontzorging bij renovatieprojecten. Van aannemersselectie tot oplevering, wij garanderen kwaliteit en timing."
  },
  {
    icon: <Key size={32} />,
    title: "Vastgoedverkoop & Aankoop",
    description: "Discrete bemiddeling bij de aan- en verkoop van exclusief vastgoed met focus op maximale waardecreatie."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Investeringsadvies",
    description: "Strategisch advies voor uw vastgoedportefeuille. Wij analyseren rendement en potentieel voor duurzame groei."
  }
];

export default function ServiceCards() {
  const ref = useReveal();

  return (
    <section className="bg-off-white" id="diensten">
      <div ref={ref} className="container reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-white shadow-sm border-t-2 border-transparent hover:border-gold transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


