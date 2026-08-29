import { useState } from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios"
import { localizedPaths } from "@/i18n/routes";
import type { Lang } from "@/i18n";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const legalPath = localizedPaths.legal[i18n.language as Lang];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = "https://formspree.io/f/manaywng"
    axios.post(url, formData)
      .then(() =>
      {
        toast.success(t("contact.toastSuccess"));
        setFormData({ name: "", email: "", phone: "", message: "" })
      })
      .catch(() => toast.error(t("contact.toastError")))
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-8 text-foreground">{t("contact.getInTouch")}</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent/20">
                  <Mail className="w-5 h-5 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">{t("contact.emailLabel")}</p>
                  <a
                    href="mailto:contact@guillaumegalland.com"
                    className="text-muted-foreground hover:text-accent transition-colors font-light"
                  >
                    contact@guillaumegalland.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t("contact.placeholders.name")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t("contact.placeholders.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.placeholders.phone")}
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t("contact.placeholders.message")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-card border-border resize-none"
                />
              </div>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                <Trans
                  i18nKey="contact.rgpd"
                  components={{
                    mailLink: (
                      <a
                        href="mailto:contact@guillaumegalland.com"
                        className="underline underline-offset-2 hover:text-accent transition-colors"
                      />
                    ),
                    legalLink: (
                      <Link
                        to={legalPath}
                        className="underline underline-offset-2 hover:text-accent transition-colors"
                      />
                    ),
                  }}
                />
              </p>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-12 text-base font-light"
              >
                {t("contact.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
