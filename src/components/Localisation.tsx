import localisationImage from "@/assets/images/Localisation.png";

const Localisation = () => {
  return (
    <section id="localisation" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in relative -right-24 lg:-right-30 h-full">
            <div className="relative">
              <div className="rounded-sm">
                <img
                  src={localisationImage}
                  alt="Guillaume Galland, Designer d'Intérieur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-sm -z-10" />
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
              LOCALISATION
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p className="text-lg">
                Je suis basé à Paris, ce qui me permet d’intervenir rapidement
                sur vos projets en Île-de-France.
              </p>
              <p className="text-lg">
                Originaire du sud-Est, je bénéficie également d’un ancrage dans
                local, me permettant de suivre facilement des projets dans cette
                région et de rester proche des acteurs locaux.
              </p>
              <p className="text-lg">
                Mon organisation me permet d’être mobilisable sur l’ensemble
                du territoire français, selon les besoins de vos projets.
                Je peux intervenir de manière flexible :
                <ul className="list-disc pl-4">
                  <li>présence sur site aux moments critiques,</li>
                  <li>soutien direct à vos équipes dans vos locaux,</li>
                  <li>intervention ponctuelle à distance pour le suivi et l’analyse des dossiers.</li>
                </ul>

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localisation;
