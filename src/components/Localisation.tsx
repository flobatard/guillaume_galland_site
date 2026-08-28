import { useTranslation } from "react-i18next";
import { useLocalizedImage } from "@/i18n/localizedAssets";

const Localisation = () => {
  const { t } = useTranslation();
  const localisationImage = useLocalizedImage("localisationMap");
  const bullets = t("localisation.bullets", { returnObjects: true });

  return (
    <section id="localisation" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in relative md:-top-24 lg:-right-24 h-full">
            <div className="relative">
              <div className="rounded-sm">
                <img
                  src={localisationImage}
                  alt={t("localisation.mapAlt")}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-sm -z-10" />
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
              {t("localisation.title")}
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p className="text-lg">{t("localisation.p1")}</p>
              <p className="text-lg">{t("localisation.p2")}</p>
              <div className="text-lg">
                {t("localisation.p3")}
                <ul className="list-disc pl-4">
                  {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localisation;
