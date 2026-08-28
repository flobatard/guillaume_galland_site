import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App.tsx";
import i18n from "./i18n";
import { langFromPath } from "./i18n/routes";
import "./index.css";

export const createRoot = ViteReactSSG({ routes }, ({ isClient }) => {
  // Fixe la langue depuis l'URL AVANT l'hydratation : le HTML prérendu de
  // /en/* est en anglais, hydrater avec la langue par défaut (fr) créerait
  // un mismatch. changeLanguage est synchrone (ressources bundlées).
  if (isClient) {
    const lang = langFromPath(window.location.pathname);
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }
});
