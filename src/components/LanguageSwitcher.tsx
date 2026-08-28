import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGS, type Lang } from "@/i18n";
import { altPathFor } from "@/i18n/routes";

/**
 * Sélecteur FR | EN. De vrais <Link> (pas un bouton + changeLanguage) : les
 * ancres figurent dans le HTML prérendu et restent crawlables. Le hash est
 * préservé pour ne pas perdre la section courante du one-pager — mais ajouté
 * seulement après montage : au prérendu il est vide, alors qu'une visite
 * directe de /fr#section en aurait un à l'hydratation (mismatch de href).
 */
const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const current = i18n.language as Lang;
  const [hash, setHash] = useState("");
  useEffect(() => {
    setHash(location.hash);
  }, [location.hash]);

  return (
    <div className={`flex items-center space-x-2 text-sm font-light ${className}`}>
      {LANGS.map((lang, index) => (
        <span key={lang} className="flex items-center space-x-2">
          {index > 0 && (
            <span aria-hidden="true" className="text-muted-foreground/50">
              |
            </span>
          )}
          <Link
            to={altPathFor(location.pathname, lang) + hash}
            lang={lang}
            aria-current={lang === current ? "page" : undefined}
            className={
              lang === current
                ? "text-accent font-normal cursor-default"
                : "text-foreground hover:text-accent transition-colors"
            }
          >
            {lang.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
