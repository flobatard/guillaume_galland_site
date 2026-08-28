import { Head } from "vite-react-ssg";
import type { TFunction } from "i18next";
import type { Lang } from "@/i18n";
import { localizedPaths } from "@/i18n/routes";

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

const OG_LOCALES: Record<Lang, string> = { fr: "fr_FR", en: "en_US" };

type SeoProps = {
  title: string;
  description: string;
  /** Chemin localisé absolu depuis la racine, ex. "/en/legal-notice". */
  path: string;
  /** Langue de la page — pilote og:locale et og:locale:alternate. */
  lang?: Lang;
  /**
   * Chemins équivalents dans chaque langue. Émet les <link hreflang>
   * fr / en / x-default (x-default → FR, cohérent avec le 301 « / → /fr »).
   */
  alternates?: { fr: string; en: string };
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
};

export function Seo({
  title,
  description,
  path,
  lang = "fr",
  alternates,
  noindex,
  jsonLd,
}: SeoProps) {
  const url = new URL(path, ORIGIN).toString();
  const otherLang: Lang = lang === "fr" ? "en" : "fr";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Guillaume Galland" />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Pas de fragment <>…</> ici : Head (react-helmet-async) n'accepte
          que des balises head directes comme enfants. */}
      {alternates && (
        <link
          rel="alternate"
          hrefLang="fr"
          href={new URL(alternates.fr, ORIGIN).toString()}
        />
      )}
      {alternates && (
        <link
          rel="alternate"
          hrefLang="en"
          href={new URL(alternates.en, ORIGIN).toString()}
        />
      )}
      {alternates && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={new URL(alternates.fr, ORIGIN).toString()}
        />
      )}

      {/* Open Graph.
          TODO_GUILLAUME: og-image — og:image et twitter:image restent absentes
          tant que public/og-image.png n'existe pas. Une balise pointant vers un
          fichier manquant donne un aperçu vide au partage, ce qui est pire que
          pas de balise du tout : les plateformes ne retombent alors plus sur
          leur heuristique. Dès que l'image est livrée, décommenter le bloc
          ci-dessous et celui de la Twitter Card. */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Galland" />
      <meta property="og:locale" content={OG_LOCALES[lang]} />
      {alternates && (
        <meta property="og:locale:alternate" content={OG_LOCALES[otherLang]} />
      )}
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

/** JSON-LD Person de la page d'accueil, dans la langue de la page. */
export function buildHomeJsonLd(t: TFunction, lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Guillaume Galland",
    jobTitle: t("seo.jsonLd.jobTitle"),
    description: t("seo.jsonLd.description"),
    url: `${ORIGIN}${localizedPaths.home[lang]}`,
    email: "contact@guillaumegalland.com",
    knowsAbout: t("seo.jsonLd.knowsAbout", { returnObjects: true }),
  };
}
