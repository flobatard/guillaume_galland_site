import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Localisation from "@/components/Localisation";
import { Seo, buildHomeJsonLd } from "@/components/Seo";
import { localizedPaths } from "@/i18n/routes";
import type { Lang } from "@/i18n";

const Index = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Lang;

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        path={localizedPaths.home[lang]}
        lang={lang}
        alternates={localizedPaths.home}
        jsonLd={buildHomeJsonLd(t, lang)}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Localisation />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
