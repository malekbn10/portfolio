const skillCategories = [
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "Express.js", "FastAPI"],
    color: "primary",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    color: "accent",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "TypeORM"],
    color: "primary",
  },
  {
    title: "Auth & Realtime",
    skills: [
      "JWT",
      "OAuth 2.0",
      "WebSockets",
      "Socket.io",
      "Passport.js",
      "Auth0",
    ],
    color: "accent",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "AWS", "CI/CD", "Swagger"],
    color: "primary",
  },
  {
    title: "Testing & Quality",
    skills: [
      "Jest",
      "Cypress",
      "Playwright",
      "ESLint",
      "Prettier",
      "SonarQube",
    ],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative section-padding bg-gradient-card">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="relative container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="heading-lg mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="body-md mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit honed through years of building production
            systems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass glass-hover rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-${category.color}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
