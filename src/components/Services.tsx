import { Home, Palette, Sparkles, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Design d'Intérieur",
    description: "Conception complète d'espaces résidentiels et commerciaux haut de gamme",
  },
  {
    icon: Palette,
    title: "Sélection de Matériaux",
    description: "Choix minutieux de matériaux nobles et durables pour chaque projet",
  },
  {
    icon: Sparkles,
    title: "Décoration Sur-Mesure",
    description: "Création de pièces uniques et personnalisées selon vos goûts",
  },
  {
    icon: Users,
    title: "Accompagnement Personnel",
    description: "Suivi attentif de A à Z pour garantir votre satisfaction",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            Services
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Une expertise complète pour donner vie à vos projets les plus ambitieux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group text-center animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
