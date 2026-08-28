import type { Lang } from "./index";

/**
 * Table des chemins localisés. Les slugs diffèrent par langue
 * (mentions-legales ↔ legal-notice) : c'est ici, et nulle part ailleurs,
 * que vit le mapping.
 */
export const localizedPaths = {
  home: { fr: "/fr", en: "/en" },
  legal: { fr: "/fr/mentions-legales", en: "/en/legal-notice" },
} as const;

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

/** Chemin équivalent dans l'autre langue ; retombe sur la home de la cible. */
export function altPathFor(pathname: string, target: Lang): string {
  for (const page of Object.values(localizedPaths)) {
    if (page.fr === pathname || page.en === pathname) return page[target];
  }
  return localizedPaths.home[target];
}
