import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import portraitImage from "@/assets/portrait-guillaume.jpg";

const About = () => {
  const { t } = useTranslation();
  const intro = t("about.intro", { returnObjects: true });

  return (
    <section id="apropos" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
              {t("about.title")}
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p className="text-lg">
                {intro.map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    {index < intro.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
              <p className="text-lg">{t("about.values")}</p>
              <p className="text-lg">{t("about.motto")}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={portraitImage}
                  alt={t("about.portraitAlt")}
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
