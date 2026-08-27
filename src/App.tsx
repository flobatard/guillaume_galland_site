import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
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

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "mentions-legales", element: <MentionsLegales /> },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE

      // Prérendue en dist/404.html, que Vercel sert avec un statut 404 sur
      // toute URL inconnue. Le filtre de routes de vite-react-ssg exclut tout
      // chemin contenant « * » ou « : », d'où cette route explicite.
      { path: "404", element: <NotFound /> },
      // Navigation côté client uniquement : jamais prérendue.
      { path: "*", element: <NotFound /> },
    ],
  },
];
