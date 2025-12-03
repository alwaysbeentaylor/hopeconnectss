"use client";

import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Villa Knokke",
    category: "Totaalrenovatie",
    image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Penthouse Oostende",
    category: "Interieuradvies & Verkoop",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Herenhuis Brugge",
    category: "Renovatiecoördinatie",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function PortfolioGrid() {
  const ref = useReveal();

  return (
    <section className="bg-white" id="projecten">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Recente Projecten</h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
          {projects.map((project) => (
            <div key={project.id} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                <span className="text-gold text-sm uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-3xl font-serif mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <span className="text-sm border-b border-gold pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  Bekijk Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


