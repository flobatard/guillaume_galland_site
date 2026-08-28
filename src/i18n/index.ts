import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr";
import en from "./locales/en";

export type Lang = "fr" | "en";
export const LANGS: Lang[] = ["fr", "en"];

/**
 * Ressources bundlées + init synchrone : indispensable pour le prérendu
 * vite-react-ssg (pas de chargement asynchrone possible pendant le SSG) et
 * pour éviter tout mismatch d'hydratation côté client. La langue est dérivée
 * de l'URL (LangLayout / main.tsx), jamais détectée depuis le navigateur.
 */
i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: "fr",
  fallbackLng: "fr",
  supportedLngs: LANGS,
  initAsync: false,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
