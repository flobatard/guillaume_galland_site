import PeopleAnalyse from '@/assets/svgs/Picture1.svg?react'
import Gears from '@/assets/svgs/Picture2.svg?react'
import Planning from '@/assets/svgs/Picture3.svg?react'
import CheckMarkedDocument from '@/assets/svgs/Picture4.svg?react'

const services = [
  {
    icon: PeopleAnalyse,
    title: "Cadrage & Analyse",
    description: `Je participe à l’analyse des contraintes du site, des objectifs du projet et des hypothèses techniques et économiques. 
    Cette étape permet de définir un cadre clair pour anticiper les risques et sécuriser les décisions dès la phase amont, tout en m’intégrant aux méthodes et standards du client.
    `,
  },
  {
    icon: Gears,
    title: "Appui à la conception technique",
    description: `
      Je renforce vos équipes projet en relisant et validant les études techniques et réglementaires. 
      Je contribue à la coordination des intervenants techniques et à l’analyse des dossiers de consultation, en m’intégrant à vos processus et pratiques existants.`,
  },
  {
    icon: Planning,
    title: "Suivi & Pilotage Travaux - OPC",
    description: `J’interviens opérationnellement aux côtés de vos équipes pour suivre les entreprises et coordonner les lots techniques. 
    Je soutiens le pilotage du planning et la maîtrise des coûts, et j’aide à identifier et résoudre les points sensibles tout en respectant votre organisation.`,
  },
  {
    icon: CheckMarkedDocument,
    title: "Livraison et clôture de projet",
    description: `J’assiste vos équipes lors des opérations préalables à
                  la réception, à la levée des réserves et à la
                  consolidation des documents de fin d’opération. Je
                  participe également à la mise en service et à la
                  clôture administrative et technique du projet, en
                  garantissant que le travail de vos équipes et des
                  entreprises est correctement finalisé.`,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            DE L'IDÉE À LA RÉALISATION
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
