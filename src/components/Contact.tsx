import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Merci pour votre message ! Nous vous recontacterons très prochainement.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Discutons de votre projet et donnons vie ensemble à vos ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-8 text-foreground">Prenons Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent/20">
                  <Phone className="w-5 h-5 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">Téléphone</p>
                  <a
                    href="tel:+33123456789"
                    className="text-muted-foreground hover:text-accent transition-colors font-light"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent/20">
                  <Mail className="w-5 h-5 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">Email</p>
                  <a
                    href="mailto:contact@guillaumegalland.fr"
                    className="text-muted-foreground hover:text-accent transition-colors font-light"
                  >
                    contact@guillaumegalland.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent/20">
                  <MapPin className="w-5 h-5 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">Adresse</p>
                  <p className="text-muted-foreground font-light">
                    15 Avenue de l'Élégance
                    <br />
                    75008 Paris, France
                  </p>
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
                  placeholder="Votre nom"
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
                  placeholder="Votre email"
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
                  placeholder="Votre téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Parlez-nous de votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-12 text-base font-light"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
