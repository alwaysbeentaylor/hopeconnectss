import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-white/10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif mb-6">Premium Vastgoed</h2>
          <p className="text-white/60 max-w-sm leading-relaxed">
            Uw partner voor exclusief vastgoed en renovatieprojecten in West-Vlaanderen. 
            Wij staan voor kwaliteit, vertrouwen en resultaat.
          </p>
        </div>
        
        <div>
          <h3 className="text-gold text-sm uppercase tracking-widest mb-6">Contact</h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold" />
              <a href="mailto:info@example.com" className="hover:text-gold transition-colors">info@example.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold" />
              <a href="tel:+32000000000" className="hover:text-gold transition-colors">+32 000 00 00 00</a>
            </li>
            <li className="pl-[30px]">
              Kustlaan 123<br />
              8300 Knokke-Heist
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gold text-sm uppercase tracking-widest mb-6">Socials</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group">
              <Instagram size={20} className="group-hover:text-white text-white/80" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group">
              <Linkedin size={20} className="group-hover:text-white text-white/80" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container text-center pt-8 border-t border-white/5 text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Premium Vastgoed. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}


