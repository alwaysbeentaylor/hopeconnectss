import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceCards from "./components/ServiceCards";
import USP from "./components/USP";
import PortfolioGrid from "./components/PortfolioGrid";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServiceCards />
      <USP />
      <PortfolioGrid />
      <Testimonial />
      <ContactForm />
      <Footer />
    </main>
  );
}


