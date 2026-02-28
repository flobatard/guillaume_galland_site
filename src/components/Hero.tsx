import heroImage from "@/assets/images/Pres.png"
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("apropos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center bg-black justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif font-light text-primary-foreground mb-6 leading-tight">
          GUILLAUME GALLAND
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground/90 mb-8">
          AMO – OPC externalisé
        </p>
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto font-light">
          Tertiaire · Hôtellerie · Retail
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-all animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
