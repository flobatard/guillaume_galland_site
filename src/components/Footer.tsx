import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-serif font-light">Guillaume Galland</h3>
          <p className="text-primary-foreground/80 font-light">
            France
          </p>
          <div className="pt-6 border-t border-primary-foreground/20 space-y-2">
            <p>
              <Link
                to="/mentions-legales"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground font-light underline underline-offset-4 transition-colors"
              >
                Mentions Légales
              </Link>
            </p>
            <p className="text-sm text-primary-foreground/60 font-light">
              © {currentYear} Guillaume Galland. Tous droits réservés.
            </p>
            <p className="text-sm text-primary-foreground/40 font-light">
              Dernière Mise à jour: 01/03/2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
