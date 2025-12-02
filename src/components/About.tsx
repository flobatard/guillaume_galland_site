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
                Fondée en décembre 2025, GALLAND accompagne les acteurs du bâtiment
                tout au long de leurs projets immobiliers, depuis la sélection du bâtiment
                jusqu’à sa livraison. Nous intervenons sur l’analyse et le choix du bien, la
                sélection des partenaires techniques et opérationnels, ainsi que sur le suivi
                des entreprises en phase travaux et le contrôle final avant réception.
              </p>
              <p className="text-lg">
                Notre expertise s’appuie sur un réseau qualifié de consultants, de bureaux
                d’études et de partenaires spécialisés, nous permettant d’adapter nos
                interventions aux enjeux spécifiques de chaque projet. Nous avons souhaité
                créer un cadre de travail fidèle à nos valeurs, où la rigueur dans la
                préparation, l’efficacité dans le pilotage, la qualité des relations humaines et
                la capacité à se mettre à la place de l’utilisateur final constituent les
                fondations de notre démarche.
              </p>
              <p className="text-lg">
                Notre mission est de sécuriser, optimiser et valoriser les
                projets immobiliers de nos clients, avec exigence,
                transparence et proximité.
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
