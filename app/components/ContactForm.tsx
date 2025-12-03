"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const ref = useReveal();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Er ging iets mis.");
      }

      setStatus("success");
      // Reset form after delay? Or just show success message.
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="bg-white relative" id="contact">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-off-white z-0" />
      <div ref={ref} className="container relative z-10 reveal-on-scroll">
        <div className="bg-charcoal text-off-white p-8 md:p-16 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-widest text-sm mb-2 block">Start Uw Project</span>
            <h2 className="text-3xl md:text-5xl mb-4">Neem Contact Op</h2>
            <p className="text-white/60">Vul het formulier in voor een vrijblijvend adviesgesprek.</p>
          </div>

          {status === "success" ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-white" size={32} />
              </div>
              <h3 className="text-2xl text-white mb-2">Bedankt voor uw aanvraag</h3>
              <p className="text-white/60">Wij nemen binnen 24 uur contact met u op.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-gold hover:text-white underline underline-offset-4 transition-colors"
              >
                Nieuw bericht versturen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label text-white/80">Naam</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="form-input bg-white/5 border-white/10 text-white focus:border-gold placeholder:text-white/20"
                    placeholder="Uw naam"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label text-white/80">Telefoon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input bg-white/5 border-white/10 text-white focus:border-gold placeholder:text-white/20"
                    placeholder="+32 ..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="email" className="form-label text-white/80">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="form-input bg-white/5 border-white/10 text-white focus:border-gold placeholder:text-white/20"
                    placeholder="uw@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type" className="form-label text-white/80">Type Project</label>
                  <select 
                    id="type" 
                    name="type" 
                    required
                    className="form-select bg-white/5 border-white/10 text-white focus:border-gold"
                  >
                    <option value="" className="bg-charcoal">Maak een keuze...</option>
                    <option value="Renovatie" className="bg-charcoal">Renovatiecoördinatie</option>
                    <option value="Verkoop" className="bg-charcoal">Vastgoedverkoop</option>
                    <option value="Aankoop" className="bg-charcoal">Vastgoed Aankoop</option>
                    <option value="Advies" className="bg-charcoal">Investeringsadvies</option>
                    <option value="Anders" className="bg-charcoal">Anders</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label text-white/80">Uw Bericht</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  className="form-textarea bg-white/5 border-white/10 text-white focus:border-gold placeholder:text-white/20 resize-none"
                  placeholder="Vertel ons kort over uw plannen..."
                ></textarea>
              </div>

              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-200 text-sm rounded">
                  {errorMessage || "Er is een fout opgetreden. Probeer het later opnieuw."}
                </div>
              )}

              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="btn-gold min-w-[200px] flex items-center justify-center mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    "Verstuur Aanvraag"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}


