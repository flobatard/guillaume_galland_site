import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

import heineken from "@/assets/images/heineken_alpha_rogne_padding_5.png"
import artelia from "@/assets/images/Ils_Nous_Font confiance 2.png"

const portfolioItems = [
  {
    id: 1,
    image: heineken,
    title: "Heineken",
    description: "AMO - Réaménagement du Siège Social de Heineken \nFrance à Rueil-Malmaison 7500m²",
  },
  {
    id: 2,
    image: artelia,
    title: "Artelia",
    description: "OPC – Travaux de Rénovation des postes électriques HTA",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            ILS NOUS FONT CONFIANCE
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Découvrez une sélection de projets, en cours ou à venir, qui illustrent notre excellence et notre savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-sm hover:shadow-2xl transition-all duration-500 animate-fade-in flex items-end"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-end overflow-hidden h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-primary-foreground">
                  <h3 className="text-2xl md:text-3xl font-serif mb-2">{item.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }} className="text-sm md:text-base font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
