"use client";

import { useReveal } from "@/hooks/useReveal";
import { Quote } from "lucide-react";

export default function Testimonial() {
  const ref = useReveal();

  return (
    <section className="bg-off-white">
      <div ref={ref} className="container max-w-4xl mx-auto text-center reveal-on-scroll">
        <Quote className="mx-auto text-gold mb-8 opacity-50" size={48} />
        <blockquote className="text-2xl md:text-4xl font-serif italic leading-tight mb-10 text-charcoal">
          &ldquo;Een zeldzame combinatie van esthetisch inzicht en technische perfectie. 
          Ons renovatieproject werd niet alleen binnen budget opgeleverd, 
          maar overtrof al onze verwachtingen.&rdquo;
        </blockquote>
        <cite className="not-italic block">
          <span className="font-bold text-lg block mb-1">Familie De Smet</span>
          <span className="text-charcoal/60 text-sm uppercase tracking-wide">Knokke-Heist</span>
        </cite>
      </div>
    </section>
  );
}


