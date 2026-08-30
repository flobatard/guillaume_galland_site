import { useTranslation } from "react-i18next";
import { useLocalizedImage } from "@/i18n/localizedAssets";

const Portfolio = () => {
  const { t } = useTranslation();
  const items = t("portfolio.items", { returnObjects: true });
  // Même ordre que les entrées de portfolio.items dans fr.ts / en.ts.
  const itemImages = [
    useLocalizedImage("portfolioHeineken"),
    useLocalizedImage("portfolioLouvre"),
  ];

  return (
    <section id="portfolio" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-sm hover:shadow-2xl transition-all duration-500 animate-fade-in flex items-end"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-end overflow-hidden h-100">
                <img
                  src={itemImages[index]}
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
