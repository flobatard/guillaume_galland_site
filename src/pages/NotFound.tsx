import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Seo } from "@/components/Seo";

/**
 * Page 404 bilingue : dist/404.html n'est prérendue qu'une seule fois et
 * servie par Vercel sur toute URL inconnue, quelle que soit la langue — le
 * contenu affiche donc les deux langues côte à côte.
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* /404 est prérendue, donc atteignable en direct avec un statut 200 :
          sans noindex elle serait indexable. */}
      <Seo
        title="Page introuvable / Page not found — Galland"
        description="Cette page n’existe pas ou a été déplacée. / This page does not exist or has been moved."
        path="/404"
        noindex
      />
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <div>
          <p className="text-xl text-gray-600" lang="fr">
            Cette page n’existe pas ou a été déplacée.
          </p>
          <p className="text-xl text-gray-600" lang="en">
            This page does not exist or has been moved.
          </p>
        </div>
        <p className="space-x-6">
          <Link
            to="/fr"
            lang="fr"
            className="text-blue-500 underline hover:text-blue-700"
          >
            ← Retour à l’accueil
          </Link>
          <Link
            to="/en"
            lang="en"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Back to home →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
