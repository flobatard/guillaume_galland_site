import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import LangLayout from "@/components/LangLayout";
import Index from "./pages/Index";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

/**
 * Routes littérales uniquement : le filtre de vite-react-ssg exclut tout
 * chemin contenant « * » ou « : » du prérendu, donc pas de « /:lang ».
 * Les pages réellement prérendues sont listées dans ssgOptions.includedRoutes
 * (vite.config.ts) ; les redirections « / » et « /mentions-legales » ne
 * servent qu'au client et au dev — en production, les 301 de vercel.json
 * interceptent ces URLs avant le filesystem.
 */
export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/fr" replace /> },
      {
        path: "mentions-legales",
        element: <Navigate to="/fr/mentions-legales" replace />,
      },
      {
        path: "fr",
        element: <LangLayout lang="fr" />,
        children: [
          { index: true, element: <Index /> },
          { path: "mentions-legales", element: <LegalPage /> },
        ],
      },
      {
        path: "en",
        element: <LangLayout lang="en" />,
        children: [
          { index: true, element: <Index /> },
          { path: "legal-notice", element: <LegalPage /> },
        ],
      },
      // Prérendue en dist/404.html, que Vercel sert avec un statut 404 sur
      // toute URL inconnue. Page bilingue (une seule version prérendue).
      { path: "404", element: <NotFound /> },
      // Navigation côté client uniquement : jamais prérendue.
      { path: "*", element: <NotFound /> },
    ],
  },
];
