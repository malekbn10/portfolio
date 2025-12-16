import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/malekbn10" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/malek-bennjima",
  },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/21699414614" },
  { icon: Mail, label: "Email", href: "mailto:melekbennjima@gmail.com" },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuration EmailJS - Remplacez par vos propres IDs
      const result = await emailjs.sendForm(
        "service_gz017zk", // Service ID depuis EmailJS
        "template_mo1yafq", // Template ID depuis EmailJS
        e.currentTarget,
        "KMNlJLgc59dgo_fR8" // Public Key depuis EmailJS
      );

      if (result.text === "OK") {
        toast({
          title: "Message envoyé !",
          description: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
        });
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      toast({
        title: "Erreur",
        description:
          "Impossible d'envoyer le message. Contactez-moi directement par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="heading-lg mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="body-md mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-secondary border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Connect With Me
              </h3>
              <p className="body-md mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-colors group"
                  >
                    <social.icon
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Response Time
              </h3>
              <p className="body-md">
                I typically respond within{" "}
                <span className="text-primary font-semibold">24 hours</span>.
                For urgent inquiries, please reach out via LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
