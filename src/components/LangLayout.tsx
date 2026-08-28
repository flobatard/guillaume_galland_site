import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import i18n from "@/i18n";
import type { Lang } from "@/i18n";

/**
 * Fixe la langue du sous-arbre de routes. L'appel à changeLanguage se fait
 * PENDANT le rendu (pas dans un effet) : les useEffect ne s'exécutent jamais
 * au prérendu, or vite-react-ssg rend les pages FR et EN séquentiellement
 * dans le même process — chaque page doit basculer la langue avant de rendre
 * ses enfants. L'appel est synchrone (ressources bundlées) et idempotent.
 */
const LangLayout = ({ lang }: { lang: Lang }) => {
  if (i18n.language !== lang) i18n.changeLanguage(lang);

  // Navigation SPA côté client : maintient <html lang> à jour (le prérendu,
  // lui, est corrigé par onPageRendered dans vite.config.ts).
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <Outlet />;
};

export default LangLayout;
