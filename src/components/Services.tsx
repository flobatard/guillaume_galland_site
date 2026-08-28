import { useTranslation } from "react-i18next";
import PeopleAnalyse from '@/assets/svgs/Picture1.svg?react'
import Gears from '@/assets/svgs/Picture2.svg?react'
import Planning from '@/assets/svgs/Picture3.svg?react'
import CheckMarkedDocument from '@/assets/svgs/Picture4.svg?react'

// Les icônes suivent l'ordre des entrées de services.items dans les
// dictionnaires (fr.ts / en.ts).
const icons = [PeopleAnalyse, Gears, Planning, CheckMarkedDocument];

const Services = () => {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <section id="services" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group text-center animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex mx-auto items-center justify-center w-20 h-20 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-accent-foreground"/>
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
