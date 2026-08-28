import { useTranslation } from "react-i18next";
import type { Lang } from "./index";

import presFr from "@/assets/images/Pres.png";
import localisationFr from "@/assets/images/Localisation.png";
import heinekenFr from "@/assets/images/heineken_alpha_rogne_padding_5.png";
import arteliaFr from "@/assets/images/Ils_Nous_Font confiance 2.png";

/**
 * Images dont une variante existe (ou existera) par langue. Imports statiques
 * obligatoires : Vite ne résout pas les chemins dynamiques.
 *
 * TODO_GUILLAUME: images-en — plusieurs visuels contiennent du texte français
 * incrusté (Pres.png, Localisation.png, Structure Indep.png, …). Dès qu'une
 * version anglaise d'un visuel est livrée, l'importer ici et renseigner sa
 * clé `en` : les composants la récupèrent sans aucune autre modification.
 */
const images = {
  hero: { fr: presFr },
  localisationMap: { fr: localisationFr },
  portfolioHeineken: { fr: heinekenFr },
  portfolioArtelia: { fr: arteliaFr },
} satisfies Record<string, { fr: string; en?: string }>;

export type LocalizedImageKey = keyof typeof images;

export function useLocalizedImage(key: LocalizedImageKey): string {
  const { i18n } = useTranslation();
  const variants: { fr: string; en?: string } = images[key];
  return variants[i18n.language as Lang] ?? variants.fr;
}
