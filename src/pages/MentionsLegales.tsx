import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <header className="mb-16 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Informations légales et politique de confidentialité
            </p>
          </header>

          <div className="space-y-12 text-foreground font-light">
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                1. Éditeur du site
              </h2>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>
                  Le présent site est édité par&nbsp;:
                </p>
                <ul className="space-y-1 pl-4">
                  <li><span className="text-foreground">Nom&nbsp;:</span> Guillaume Galland</li>
                  <li><span className="text-foreground">Statut juridique&nbsp;:</span> Micro-entreprise</li>
                  <li><span className="text-foreground">Adresse du siège&nbsp;:</span> 48 rue de malte, Paris</li>
                  <li><span className="text-foreground">SIRET&nbsp;:</span> 92745621000016</li>
                  <li><span className="text-foreground">Code APE&nbsp;:</span> 7112b</li>
                  <li>
                    <span className="text-foreground">Téléphone&nbsp;:</span>{" "}
                    <a href="tel:+33627841442" className="hover:text-accent transition-colors">
                      +33 6 27 84 14 42
                    </a>
                  </li>
                  <li>
                    <span className="text-foreground">Email&nbsp;:</span>{" "}
                    <a href="mailto:contact@guillaumegalland.com" className="hover:text-accent transition-colors">
                      contact@guillaumegalland.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                2. Directeur de la publication
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le directeur de la publication du site est Guillaume Galland, en sa qualité de
                fondateur de la micro-entreprise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                3. Hébergement
              </h2>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>Le site est hébergé par&nbsp;:</p>
                <ul className="space-y-1 pl-4">
                  <li><span className="text-foreground">Hébergeur&nbsp;:</span> Vercel</li>
                  <li><span className="text-foreground">Adresse&nbsp;:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
                  <li><span className="text-foreground">Contact&nbsp;:</span> privacy@vercel.com — https://vercel.com</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                4. Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'ensemble du contenu présent sur ce site (textes, images, photographies,
                  graphismes, logos, icônes, vidéos, sons, ainsi que leur mise en forme) est la
                  propriété exclusive de Guillaume Galland ou de ses partenaires, et est protégé
                  par les lois françaises et internationales relatives à la propriété
                  intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation ou
                  exploitation de tout ou partie des éléments du site, par quelque procédé et
                  sur quelque support que ce soit, est interdite sans l'autorisation écrite
                  préalable de Guillaume Galland. Toute exploitation non autorisée du site ou
                  de l'un quelconque des éléments qu'il contient sera considérée comme
                  constitutive d'une contrefaçon et poursuivie conformément aux dispositions
                  des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                5. Données personnelles
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD —
                  Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978
                  modifiée, les données personnelles que vous transmettez via le formulaire de
                  contact (nom, adresse email, numéro de téléphone, contenu du message) sont
                  collectées par Guillaume Galland.
                </p>
                <p>
                  <span className="text-foreground">Finalité&nbsp;:</span> répondre à votre
                  demande de contact et, le cas échéant, assurer le suivi de la relation
                  commerciale qui pourrait en découler.
                </p>
                <p>
                  <span className="text-foreground">Base légale&nbsp;:</span> votre consentement
                  exprès, manifesté par l'envoi volontaire du formulaire.
                </p>
                <p>
                  <span className="text-foreground">Durée de conservation&nbsp;:</span> les
                  données sont conservées pendant le temps strictement nécessaire au traitement
                  de votre demande, puis archivées ou supprimées selon les obligations légales
                  applicables.
                </p>
                <p>
                  <span className="text-foreground">Destinataires&nbsp;:</span> vos données sont
                  destinées à Guillaume Galland exclusivement. Le formulaire est traité via le
                  service Formspree, qui agit en qualité de sous-traitant.
                </p>
                <p>
                  <span className="text-foreground">Vos droits&nbsp;:</span> vous disposez d'un
                  droit d'accès, de rectification, de suppression, d'opposition, de limitation
                  du traitement et de portabilité de vos données. Vous pouvez exercer ces droits
                  en écrivant à{" "}
                  <a href="mailto:contact@guillaumegalland.com" className="hover:text-accent transition-colors underline underline-offset-2">
                    contact@guillaumegalland.com
                  </a>.
                </p>
                <p>
                  Vous disposez également du droit d'introduire une réclamation auprès de la
                  Commission Nationale de l'Informatique et des Libertés (CNIL —{" "}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-2">
                    www.cnil.fr
                  </a>
                  ) si vous estimez que le traitement de vos données ne respecte pas la
                  réglementation en vigueur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                6. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le présent site n'utilise aucun cookie, qu'il soit de mesure d'audience, de
                publicité ou émis par des tiers. Aucune information n'est déposée ni lue sur
                votre terminal lors de votre navigation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                7. Loi applicable et juridiction compétente
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de
                litige et à défaut de résolution amiable, les tribunaux français seront seuls
                compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                8. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question relative aux présentes mentions légales ou à l'exercice de
                vos droits, vous pouvez écrire à{" "}
                <a href="mailto:contact@guillaumegalland.com" className="hover:text-accent transition-colors underline underline-offset-2">
                  contact@guillaumegalland.com
                </a>
                .
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <Link
                to="/"
                className="text-muted-foreground hover:text-accent transition-colors font-light underline underline-offset-4"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
