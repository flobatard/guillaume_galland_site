import { Award, Heart, Gem } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Un engagement sans compromis envers la qualité et la perfection dans chaque détail de nos réalisations.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "L'amour du design et de l'artisanat guide chacune de nos décisions et inspire nos créations.",
  },
  {
    icon: Gem,
    title: "Authenticité",
    description:
      "Des matériaux nobles et des savoir-faire traditionnels pour des espaces d'une élégance intemporelle.",
  },
];

const Values = () => {
  return (
    <section className="section-spacing luxury-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            Nos Valeurs
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Les principes qui guident notre travail et définissent notre approche
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-foreground">{value.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
