import { useTranslation } from "react-i18next";
import { useLocalizedImage } from "@/i18n/localizedAssets";

const Portfolio = () => {
  const { t } = useTranslation();
  const items = t("portfolio.items", { returnObjects: true });
  // Même ordre que les entrées de portfolio.items dans fr.ts / en.ts.
  // `fit`  : "contain" pour les logos (fond transparent), "cover" pour les photos.
  // `tone` : couleur du voile portant le texte — "dark" sur une photo, "light" sur un logo.
  const itemVisuals = [
    { src: useLocalizedImage("portfolioHeineken"), fit: "contain" as const, tone: "light" as const },
    { src: useLocalizedImage("portfolioLouvre"), fit: "cover" as const, tone: "dark" as const },
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
          {items.map((item, index) => {
            const visual = itemVisuals[index];
            const veil =
              visual.tone === "dark"
                ? "from-primary/95 via-primary/60 group-hover:via-primary/85"
                : "from-background via-background/85 group-hover:via-background/95";
            const veilText =
              visual.tone === "dark" ? "text-primary-foreground" : "text-foreground";

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-sm bg-card shadow-lg hover:shadow-2xl transition-shadow duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center overflow-hidden h-72 md:h-80">
                  <img
                    src={visual.src}
                    alt={item.title}
                    className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                      visual.fit === "contain"
                        ? "object-contain px-8 pt-8 pb-40 md:pb-32"
                        : "object-cover"
                    }`}
                  />
                </div>

                {/* Voile dégradé permanent : le titre reste lisible au repos (et sur
                    mobile, où le survol n'existe pas). Au survol, le voile se renforce
                    et la description se déplie. */}
                <div
                  className={`absolute inset-x-0 bottom-0 pt-16 bg-gradient-to-t to-transparent transition-[background] duration-500 ${veil}`}
                >
                  <div className={`px-6 pb-6 md:px-8 md:pb-8 ${veilText}`}>
                    <h3 className="text-2xl md:text-3xl font-serif">{item.title}</h3>
                    {/* Astuce grid-rows 0fr → 1fr : la description se déplie en douceur
                        sans hauteur fixe. Toujours dépliée sous md (pas de survol). */}
                    <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                      <div className="overflow-hidden">
                        <p
                          style={{ whiteSpace: "pre-line" }}
                          className="pt-2 text-sm md:text-base font-light transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
