import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
     * vite-react-ssg préfixe les balises de <Head> juste après « <head> »,
     * ce qui repousse <meta charset> au-delà des 1024 premiers octets que la
     * spécification impose pour la détection d'encodage. Un HTML français lu
     * en latin-1 casse tous les accents. On remonte donc le charset en tête.
     */
    onPageRendered(_route: string, html: string) {
      const charset = '<meta charset="UTF-8">';
      if (!html.includes(charset)) return html;
      return html
        .replace(charset, "")
        .replace("<head>", `<head>${charset}`);
    },
  },
}));
