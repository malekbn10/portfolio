import { Code2, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building maintainable, scalable codebases following SOLID principles and industry best practices.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimizing for speed and efficiency with advanced caching, database indexing, and async processing.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Implementing robust security measures including OAuth, JWT, encryption, and secure API design.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="heading-lg mt-4">
            Crafting <span className="text-gradient">Digital Excellence</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="body-lg">
              I'm a passionate Full-Stack Developer with deep expertise in
              backend engineering and SaaS architecture. My focus is on building
              systems that don't just work—they scale, perform, and stand the
              test of time.
            </p>
            <p className="body-md">
              With many experiences across startups and enterprises, I've
              developed a keen eye for identifying potential bottlenecks before
              they become problems. I believe in writing code that's not only
              functional but also readable, testable, and maintainable by future
              developers.
            </p>
            <p className="body-md">
              My approach combines also spec-driven development with modern
              AI-assisted workflows, enabling rapid delivery without
              compromising quality. Whether it's designing RESTful APIs,
              implementing real-time features, or architecting multi-tenant SaaS
              platforms, I bring the same level of dedication and precision.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass glass-hover rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
