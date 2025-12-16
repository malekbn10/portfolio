import { useState } from "react";
import { Briefcase, Calendar, CheckCircle, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "TLedger",
    location: "Tunis (Hybrid)",
    period: "Nov 2025 - Present",
    description:
      "Designed and developed a SaaS platform providing access to AI models (ChatGPT, Gemini) with local Tunisian payment integration. Applied Spec-Driven Development (SDD) to define functional and technical specifications before implementation.",
    fullDescription:
      "Leading the development of a SaaS platform that provides access to AI models like ChatGPT and Gemini with integrated local Tunisian payment solutions. Applied Spec-Driven Development (SDD) methodology to define functional and technical specifications before implementation. Leveraged AI Agents (GitHub Copilot, Spec-Kit) for code generation, documentation, and testing. Built secure and scalable REST APIs for FinTech applications with a focus on subscription systems, billing, and AI usage quota tracking.",
    technologies: [
      "TypeScript",
      "NestJS",
      "React",
      "Tailwind",
      "Docker",
      "CI/CD",
      "Spec-Driven Development",
      "GitHub Spec-Kit",
    ],
    achievements: [
      "Implemented AI model integration (ChatGPT, Gemini)",
      "Developed subscription and billing system",
      "Integrated local Tunisian payment gateways",
      "Built secure REST APIs for FinTech",
      "Applied Spec-Driven Development methodology",
      "Implemented AI usage quota tracking",
    ],
  },
  {
    role: "End of Studies Intern",
    company: "KEYSOFT-CONSULTING",
    location: "Tunis (Hybrid)",
    period: "Jan 2025 - June 2025",
    description:
      "Developed a web application connecting communities with professionals offering various services (plumber, gardener, mechanics). Designed to facilitate interactions and service booking between users and skilled professionals.",
    fullDescription:
      "Led the development and conception of a web application aimed at connecting communities with professionals offering various services such as plumbers, gardeners, and mechanics. Designed to facilitate interactions and service booking between users and skilled professionals. Ensured a user-friendly interface and efficient functionalities to enhance user experience using modern technologies and Agile methodologies.",
    technologies: [
      "NestJS",
      "React",
      "JWT",
      "MySQL",
      "TypeScript",
      "Scrum",
      "Figma",
    ],
    achievements: [
      "Built service marketplace platform",
      "Implemented user-professional matching system",
      "Developed booking management features",
      "Created user-friendly interface with Figma",
      "Applied Scrum methodology",
      "Enhanced user experience through efficient design",
    ],
  },
  {
    role: "Summer Intern",
    company: "TRITUX GROUP",
    location: "Tunis (Hybrid)",
    period: "Aug 2024 - Oct 2024",
    description:
      "Developed an internal application module to facilitate the process of project management for the team leader. Built tasks and projects management API/components along with authentication and authorization modules.",
    fullDescription:
      "Developed an internal application module to facilitate the project management process for team leaders. Implemented comprehensive tasks and projects management APIs and components. Developed a robust authentication and authorization module to ensure secure access control across the application. Worked in an Agile environment using Scrum methodology.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "JWT",
      "MongoDB",
      "Swagger",
      "Scrum",
    ],
    achievements: [
      "Built project management module",
      "Developed tasks management API",
      "Implemented authentication & authorization",
      "Created RESTful APIs with Swagger documentation",
      "Enhanced team leader workflow efficiency",
      "Applied Agile/Scrum practices",
    ],
  },
  {
    role: "Summer Intern",
    company: "CARTHAGE BUSINESS ANGELS",
    location: "Remote",
    period: "June 2023 - Aug 2023",
    description:
      "Participated in the development of a Crowdfunding platform dedicated to new born startups to facilitate the fundraising process.",
    fullDescription:
      "Contributed to the development of a Crowdfunding platform specifically designed for newly established startups to facilitate their fundraising process. Worked with Laravel framework to build backend functionalities and developed responsive front-end interfaces using HTML and CSS. Helped create features that enable startups to present their projects and connect with potential investors.",
    technologies: ["Laravel", "HTML", "CSS", "MySQL"],
    achievements: [
      "Developed crowdfunding platform features",
      "Built startup fundraising tools",
      "Created responsive web interfaces",
      "Implemented database solutions with MySQL",
      "Facilitated startup-investor connections",
    ],
  },
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);

  return (
    <section
      id="experience"
      className="relative section-padding bg-gradient-card"
    >
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="relative container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Career
          </span>
          <h2 className="heading-lg mt-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="body-md mt-4 max-w-2xl mx-auto">
            A track record of delivering impactful solutions across industries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex flex-col md:flex-row gap-8 animate-fade-in ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div
                    className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedExperience(exp)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="heading-md text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={14} className="text-primary" />
                          <span className="text-muted-foreground">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="body-md mb-4">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Click hint */}
                    <p className="text-xs text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view details →
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      <Dialog
        open={!!selectedExperience}
        onOpenChange={() => setSelectedExperience(null)}
      >
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedExperience && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl text-foreground">
                      {selectedExperience.role}
                    </DialogTitle>
                    <p className="text-primary font-medium">
                      {selectedExperience.company}
                    </p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {selectedExperience.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {selectedExperience.location}
                      </span>
                    </div>
                  </div>
                </div>
                <DialogDescription className="text-muted-foreground mt-4">
                  {selectedExperience.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle
                          size={14}
                          className="text-primary shrink-0"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExperienceSection;
