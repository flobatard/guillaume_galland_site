import portraitImage from "@/assets/portrait-guillaume.jpg";

const About = () => {
  return (
    <section id="apropos" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
              STRUCTURE INDÉPENDANTE
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p className="text-lg">
                Fondée en 2025, GALLAND est une structure indépendante spécialisée dans
                l’accompagnement des acteurs du bâtiment sur des projets immobiliers à
                forts enjeux.<br />

                Positionnée comme un partenaire de confiance, GALLAND intervient en
                complément des organisations existantes, avec une approche agile, exigeante et opérationnelle.<br />

                Habituée à évoluer aux côtés de grands acteurs du conseil et de la maîtrise
                d’ouvrage, GALLAND s’intègre naturellement aux équipes en place, dans le
                respect des méthodes, outils et standards projet.<br />

                La structure s’appuie sur un réseau qualifié de consultants, bureaux
                d’études et partenaires spécialisés, garantissant une capacité d’adaptation
                rapide aux contextes complexes et aux contraintes conjoncturelles du
                marché immobilier.
              </p>
              <p className="text-lg">
                Les valeurs de rigueur, exigence, efficacité, qualité des relations 
                humaines et de compréhension des usages constituent le socle de l’engagement de GALLAND.
              </p>
              <p className="text-lg">
                La qualité par l’exigence.
              </p>
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
