import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import developerPhoto from "@/assets/developer-portrait.jpg";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-card">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Geometric Decorations */}
      <div
        className="absolute bottom-32 right-20 w-24 h-24 border border-accent/10 rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container-narrow section-padding text-center">
        {/* Developer Photo */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-60 animate-pulse-glow" />
            <img
              src={developerPhoto}
              alt="Developer portrait"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/30"
            />
          </div>
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Available for new projects
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="heading-xl mb-6 animate-fade-in "
          style={{ animationDelay: "0.2s" }}
        >
          Malek Ben Njima
          <br />
          <span className="text-gradient">Software Engineer</span>
        </h1>

        {/* Subtitle */}
        <p
          className="body-lg max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          I build scalable, production-ready applications with clean
          architecture, exceptional performance, and enterprise-grade security.
          Turning complex requirements into elegant solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2" size={18} />
              Contact Me
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 gap-8 mt-20 max-w-lg mx-auto animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {[{ value: "1+", label: "Years Experience" }].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
