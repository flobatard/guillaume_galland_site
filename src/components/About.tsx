import portraitImage from "@/assets/portrait-guillaume.jpg";

const About = () => {
  return (
    <section id="apropos" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
              À propos
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p className="text-lg">
                Avec plus de 15 ans d'expérience dans l'univers du design d'intérieur haut de gamme, 
                je me consacre à la création d'espaces qui incarnent l'excellence et le raffinement.
              </p>
              <p className="text-lg">
                Mon approche se distingue par une attention méticuleuse aux détails, une sélection 
                rigoureuse de matériaux nobles et une compréhension profonde des besoins de ma clientèle 
                exigeante.
              </p>
              <p className="text-lg">
                Chaque projet est une opportunité unique de transformer une vision en réalité, en 
                alliant esthétique intemporelle et fonctionnalité irréprochable.
              </p>
              <div className="pt-6">
                <div className="inline-block">
                  <p className="text-2xl font-serif text-foreground mb-1">Guillaume Galland</p>
                  <p className="text-sm text-accent uppercase tracking-widest">Designer d'Intérieur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={portraitImage}
                  alt="Guillaume Galland, Designer d'Intérieur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
