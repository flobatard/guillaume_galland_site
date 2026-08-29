import { useTranslation } from "react-i18next";
import PeopleAnalyse from '@/assets/svgs/Picture1.svg?react'
import Gears from '@/assets/svgs/Picture2.svg?react'
import Planning from '@/assets/svgs/Picture3.svg?react'
import CheckMarkedDocument from '@/assets/svgs/Picture4.svg?react'

// Les icônes suivent l'ordre des entrées de services.items dans les
// dictionnaires (fr.ts / en.ts).
const icons = [PeopleAnalyse, Gears, Planning, CheckMarkedDocument];

// Position et largeur (en % de la section) de chaque barre du planning,
// dans l'ordre des entrées de services.phases (fr.ts / en.ts). Chaque tâche
// démarre juste avant la fin de la précédente (léger chevauchement, comme
// sur un vrai planning d'opération).
const ganttBars = [
  { x: 6, w: 12 },
  { x: 16, w: 15 },
  { x: 29, w: 13 },
  { x: 40, w: 17 },
  { x: 55, w: 14 },
  { x: 67, w: 16 },
  { x: 81, w: 13 },
];

const GANTT_TOP = 12; // % : ordonnée de la première tâche
const GANTT_ROW = 12; // % : espacement vertical entre tâches

// Durée du balayage du curseur « aujourd'hui ». Doit rester égale aux durées
// des animations planning-sweep et gantt-lit (tailwind.config.ts) : c'est ce
// qui permet de caler l'allumage des barres sur la position du curseur.
const SWEEP_SECONDS = 28;

/**
 * Diagramme de Gantt stylisé en filigrane : grille calendaire, barre de
 * synthèse, tâches en cascade étiquetées d'une phase (loi MOP en français,
 * RIBA Plan of Work en anglais), liens de dépendance et jalon de livraison.
 * Opacité très faible pour ne pas gêner la lecture du contenu. Une couche
 * dorée « allume » chaque tâche au passage du curseur de balayage.
 */
const GanttBackground = ({
  phases,
}: {
  phases: { code: string; label: string }[];
}) => (
  <div
    aria-hidden="true"
    className="absolute inset-0 text-foreground pointer-events-none select-none"
  >
    {/* Planning de base, en filigrane */}
    <div className="absolute inset-0 opacity-[0.08]">
      {/* Grille calendaire : colonnes mensuelles étiquetées M01…M12 */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 border-l border-current opacity-30 ${
              i === 11 ? "border-r" : ""
            }`}
          >
            <span className="block mt-2 ml-2 text-[9px] font-medium tracking-[0.15em]">
              M{String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
      {/* Trait horizontal fermant l'en-tête calendaire */}
      <div className="absolute inset-x-0 top-8 h-px bg-current opacity-30" />

      {/* Barre de synthèse de l'opération, avec retombées aux extrémités */}
      <div className="absolute left-[6%] right-[6%] top-[6%] h-[3px] bg-current">
        <span className="absolute left-0 top-full h-2 w-[3px] bg-current" />
        <span className="absolute right-0 top-full h-2 w-[3px] bg-current" />
      </div>

      {/* Tâches : libellé en colonne à gauche, barres pleines/creuses alternées.
          Clés par index (et non par phase.code) : au changement de langue,
          React réutilise ainsi les nœuds DOM au lieu de les remonter, ce qui
          préserve la synchronisation des animations avec le curseur. */}
      {phases.map((phase, i) => {
        const bar = ganttBars[i % ganttBars.length];
        return (
          <div
            key={i}
            className="absolute h-3.5"
            style={{
              left: `${bar.x}%`,
              width: `${bar.w}%`,
              top: `${GANTT_TOP + i * GANTT_ROW}%`,
            }}
          >
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-[11px] font-medium tracking-[0.2em] uppercase whitespace-nowrap">
              {phase.code}
            </span>
            <div
              className={`h-full rounded-sm ${
                i % 2 ? "border border-current" : "bg-current"
              }`}
            />
            {/* Jalon de livraison au bout de la dernière tâche */}
            {i === phases.length - 1 && (
              <span className="absolute left-full ml-3 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-current" />
            )}
          </div>
        );
      })}

      {/* Liens de dépendance : descente verticale vers la tâche suivante */}
      {phases.slice(0, -1).map((_, i) => {
        const next = ganttBars[(i + 1) % ganttBars.length];
        return (
          <span
            key={i}
            className="absolute w-px bg-current opacity-70"
            style={{
              left: `${next.x + 1}%`,
              top: `calc(${GANTT_TOP + i * GANTT_ROW}% + 0.75rem)`,
              height: `calc(${GANTT_ROW}% - 0.75rem)`,
            }}
          />
        );
      })}
    </div>

    {/* Surbrillance dorée synchronisée avec le curseur : chaque barre reçoit
        la même animation que le balayage, décalée d'un retard négatif
        proportionnel à sa position horizontale — elle s'allume donc au
        moment exact où le curseur la traverse. */}
    <div className="absolute inset-0 text-accent opacity-50 motion-reduce:hidden">
      {phases.map((phase, i) => {
        const bar = ganttBars[i % ganttBars.length];
        return (
          <div
            key={i}
            className="absolute h-3.5 opacity-0 animate-gantt-lit"
            style={{
              left: `${bar.x}%`,
              width: `${bar.w}%`,
              top: `${GANTT_TOP + i * GANTT_ROW}%`,
              animationDelay: `${(bar.x / 100 - 1) * SWEEP_SECONDS}s`,
            }}
          >
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-[11px] font-medium tracking-[0.2em] uppercase whitespace-nowrap">
              {phase.code}
            </span>
            <div className="h-full rounded-sm bg-current shadow-[0_0_12px_2px_hsl(var(--accent)/0.6)]" />
            {i === phases.length - 1 && (
              <span className="absolute left-full ml-3 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-current" />
            )}
          </div>
        );
      })}
    </div>
  </div>
);

const Services = () => {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });
  const phases = t("services.phases", { returnObjects: true });

  return (
    <section id="services" className="relative section-spacing bg-secondary/30 overflow-hidden">
      <GanttBackground phases={phases} />
      {/* Curseur « aujourd'hui » balayant lentement le planning */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-planning-sweep motion-reduce:hidden"
      >
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent">
          {/* Poignée du curseur, alignée sur l'en-tête calendaire */}
          <span className="absolute top-7 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-accent/50" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Ligne chronologique en pointillés vers l'étape suivante.
                    left = centre + rayon du cercle (2.5rem) + marge ;
                    largeur = écart entre centres (100% + gap 3rem) − 7rem. */}
                {index < services.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 left-[calc(50%+3.5rem)] w-[calc(100%-4rem)] border-t-2 border-dashed border-foreground/15"
                  />
                )}
                <div className="group text-center hover:scale-105 transition-transform duration-300">
                  <div className="mb-6 flex mx-auto items-center justify-center w-20 h-20 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-accent-foreground"/>
                  </div>
                  <span className="block text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-2">
                    {service.phase}
                  </span>
                  <h3 className="text-xl font-serif mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-center text-sm md:text-base text-muted-foreground font-light tracking-wide max-w-xl mx-auto animate-fade-in">
          {t("services.anyStage")}
        </p>

        {/* Ligne d'offre distincte : la copropriété n'est pas une phase de la
            frise ci-dessus, elle se présente hors chronologie. */}
        <div className="mt-20 max-w-2xl mx-auto text-center border-t border-foreground/15 pt-12">
          <h3 className="text-2xl font-serif mb-4 text-foreground">
            {t("services.copro.title")}
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            {t("services.copro.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
