import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  define: {
    // Date de build (YYYY-MM-DD), affichée dans le footer comme date de
    // dernière mise à jour : toujours exacte, jamais périmée.
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [svgr(), react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    /**
     * Routes littérales à prérendre. « / » et « /mentions-legales » sont
     * exclues : ce sont de purs <Navigate> (les 301 de vercel.json les
     * interceptent en production) — les prérendre produirait des pages vides.
     */
    includedRoutes: () => [
      "/fr",
      "/fr/mentions-legales",
      "/en",
      "/en/legal-notice",
      "/404",
    ],
    /**
     * 1. index.html porte lang="fr" ; les pages anglaises sont réécrites ici
     *    (le LangLayout ne peut corriger <html> qu'au runtime client).
     * 2. vite-react-ssg préfixe les balises de <Head> juste après « <head> »,
     *    ce qui repousse <meta charset> au-delà des 1024 premiers octets que
     *    la spécification impose pour la détection d'encodage. Un HTML
     *    français lu en latin-1 casse tous les accents. On remonte donc le
     *    charset en tête.
     */
    onPageRendered(route: string, html: string) {
      let out = html;
      if (route === "/en" || route.startsWith("/en/")) {
        out = out.replace('<html lang="fr"', '<html lang="en"');
      }
      const charset = '<meta charset="UTF-8">';
      if (!out.includes(charset)) return out;
      return out
        .replace(charset, "")
        .replace("<head>", `<head>${charset}`);
    },
  },
}));
