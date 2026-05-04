import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Localisation from "@/components/Localisation";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Localisation />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
