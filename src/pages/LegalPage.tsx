import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { localizedPaths } from "@/i18n/routes";
import type { Lang } from "@/i18n";

const sectionTitleClass =
  "text-2xl md:text-3xl font-serif font-light mb-6 text-foreground";

const mailLink = (
  <a
    href="mailto:contact@guillaumegalland.com"
    className="hover:text-accent transition-colors underline underline-offset-2"
  />
);

/**
 * Mentions légales / Legal notice — page unique montée sur
 * /fr/mentions-legales et /en/legal-notice, entièrement pilotée par t().
 */
const LegalPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Lang;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const editorRows = t("legal.editor.rows", { returnObjects: true });
  const hostingRows = t("legal.hosting.rows", { returnObjects: true });
  const ipParagraphs = t("legal.ip.paragraphs", { returnObjects: true });
  const privacyItems = t("legal.privacy.items", { returnObjects: true });

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title={t("legal.seo.title")}
        description={t("legal.seo.description")}
        path={localizedPaths.legal[lang]}
        lang={lang}
        alternates={localizedPaths.legal}
      />
      <Navigation />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <header className="mb-16 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
              {t("legal.title")}
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              {t("legal.subtitle")}
            </p>
          </header>

          <div className="space-y-12 text-foreground font-light">
            <section>
              <h2 className={sectionTitleClass}>{t("legal.editor.title")}</h2>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>{t("legal.editor.intro")}</p>
                <ul className="space-y-1 pl-4">
                  {editorRows.map((row, index) => (
                    <li key={index}>
                      <span className="text-foreground">{row.label}&nbsp;:</span>{" "}
                      {row.value}
                    </li>
                  ))}
                  <li>
                    <span className="text-foreground">
                      {t("legal.editor.phoneLabel")}&nbsp;:
                    </span>{" "}
                    <a href="tel:+33627841442" className="hover:text-accent transition-colors">
                      +33 6 27 84 14 42
                    </a>
                  </li>
                  <li>
                    <span className="text-foreground">
                      {t("legal.editor.emailLabel")}&nbsp;:
                    </span>{" "}
                    <a href="mailto:contact@guillaumegalland.com" className="hover:text-accent transition-colors">
                      contact@guillaumegalland.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className={sectionTitleClass}>{t("legal.director.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("legal.director.body")}
              </p>
            </section>

            <section>
              <h2 className={sectionTitleClass}>{t("legal.hosting.title")}</h2>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>{t("legal.hosting.intro")}</p>
                <ul className="space-y-1 pl-4">
                  {hostingRows.map((row, index) => (
                    <li key={index}>
                      <span className="text-foreground">{row.label}&nbsp;:</span>{" "}
                      {row.value}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className={sectionTitleClass}>{t("legal.ip.title")}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {ipParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className={sectionTitleClass}>{t("legal.privacy.title")}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("legal.privacy.intro")}</p>
                {privacyItems.map((item, index) => (
                  <p key={index}>
                    <span className="text-foreground">{item.label}&nbsp;:</span>{" "}
                    {item.value}
                  </p>
                ))}
                <p>
                  <span className="text-foreground">
                    {t("legal.privacy.rightsLabel")}&nbsp;:
                  </span>{" "}
                  <Trans i18nKey="legal.privacy.rights" components={{ mailLink }} />
                </p>
                <p>
                  <Trans
                    i18nKey="legal.privacy.cnil"
                    components={{
                      cnilLink: (
                        <a
                          href="https://www.cnil.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors underline underline-offset-2"
                        />
                      ),
                    }}
                  />
                </p>
              </div>
            </section>

            <section>
              <h2 className={sectionTitleClass}>{t("legal.cookies.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("legal.cookies.body")}
              </p>
            </section>

            <section>
              <h2 className={sectionTitleClass}>{t("legal.law.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("legal.law.body")}
              </p>
            </section>

            <section>
              <h2 className={sectionTitleClass}>{t("legal.contact.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                <Trans i18nKey="legal.contact.body" components={{ mailLink }} />
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <Link
                to={localizedPaths.home[lang]}
                className="text-muted-foreground hover:text-accent transition-colors font-light underline underline-offset-4"
              >
                {t("legal.backHome")}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
