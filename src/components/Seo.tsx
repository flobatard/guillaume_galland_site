import { Head } from "vite-react-ssg";

/**
 * Métadonnées par route.
 *
 * vite-react-ssg PRÉFIXE ses balises dans <head> sans dédoublonnage
 * (indexHTML.replace("<head>", "<head>" + metaTags)). Toute balise laissée
 * dans index.html qui serait aussi émise ici se retrouverait donc EN DOUBLE
 * dans le fichier prérendu. index.html ne garde que l'invariant de route :
 * lang, charset, viewport, favicon, polices, script module.
 *
 * Ne pas ajouter de HelmetProvider : le runtime SSG en fournit déjà un.
 */

const ORIGIN = "https://guillaumegalland.com";

type SeoProps = {
  title: string;
  description: string;
  /** Chemin absolu depuis la racine, ex. "/mentions-legales". */
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
};

export function Seo({ title, description, path, noindex, jsonLd }: SeoProps) {
  const url = new URL(path, ORIGIN).toString();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Guillaume Galland" />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Open Graph.
          TODO_GUILLAUME: og-image — og:image et twitter:image restent absentes
          tant que public/og-image.png n'existe pas. Une balise pointant vers un
          fichier manquant donne un aperçu vide au partage, ce qui est pire que
          pas de balise du tout : les plateformes ne retombent alors plus sur
          leur heuristique. Dès que l'image est livrée, décommenter le bloc
          ci-dessous et celui de la Twitter Card. */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Galland" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/*
      <meta property="og:image" content={`${ORIGIN}/og-image.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Galland — AMO et conseil en immobilier d'entreprise"
      />
      */}

      {/* Twitter Card — twitter:site reste absente tant que l'existence du
          compte @GuillaumeGalland n'est pas confirmée (TODO_GUILLAUME:
          twitter-handle). Une balise pointant vers un compte inexistant
          dégrade l'aperçu. */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={`${ORIGIN}/og-image.png`} /> */}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}

/** Métadonnées de la page d'accueil, partagées avec le JSON-LD. */
export const homeSeo = {
  title: "Galland, AMO et conseil en immobilier d'entreprise",
  description:
    "AMO et conseil en immobilier d'entreprise. Nous accompagnons les maîtres d'ouvrage sur des projets tertiaires, hôteliers et retail, en France et en Europe, du cadrage à la livraison.",
  path: "/",
} as const;

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guillaume Galland",
  jobTitle: "Fondateur, AMO et conseil en immobilier d'entreprise",
  description:
    "Assistance à maîtrise d'ouvrage et conseil en immobilier d'entreprise, projets tertiaires, hôteliers et retail.",
  url: `${ORIGIN}/`,
  email: "contact@guillaumegalland.com",
  knowsAbout: [
    "AMO",
    "Tertiaire",
    "Hôtellerie",
    "Retail",
    "Copropriété",
    "Due diligence technique",
    "Data center",
    "Gestion de projet",
    "Construction",
  ],
};
