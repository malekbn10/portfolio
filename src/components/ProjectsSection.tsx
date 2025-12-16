import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "University Orientation Platform",
    description:
      "Innovative platform streamlining university orientation with OCR-powered PDF data extraction and enhanced authentication for improved student onboarding.",
    fullDescription:
      "Engineered an OCR module to streamline data extraction from the orientation guide PDFs, resulting in improved overall operational efficiency for the selection process. Developed an innovative authentication and authorization module, improving user registration process, which led to a smoother onboarding experience for new students.",
    tech: ["JavaScript", "NestJS", "React", "JWT", "ML", "MySQL"],
    highlights: [
      "OCR data extraction",
      "Enhanced authentication",
      "Improved onboarding",
      "Operational efficiency",
      "Machine Learning integration",
    ],
    featured: true,
    githubUrl: "https://github.com/malekbn10/universityPlat-Back",
  },
  {
    title: "Developer's Social Media",
    description:
      "Developer-focused social media platform enhancing peer engagement with interactive features, built in collaboration with two academic institutions.",
    fullDescription:
      "Collaborated with two academic institutions to design and develop a developer-focused social media platform, enhancing peer engagement by creating interactive features. Developed comprehensive user management, notifications, and filtering modules to provide a seamless social experience for developers.",
    tech: ["JavaScript", "C#", ".NET", "React", "JWT", "MySQL Server"],
    highlights: [
      "User management system",
      "Real-time notifications",
      "Advanced filtering",
      "Peer engagement features",
      "Academic collaboration",
    ],
    featured: true,
    githubUrl: "https://github.com/malekbn10/developer_social_media_backend",
  },
  {
    title: "Group Buying Platform",
    description:
      "Collaborative group buying platform with comprehensive user management, product catalog, and secure authentication system.",
    fullDescription:
      "Collaborated with two other colleges for the design and development of a group buying platform. Developed a complete user management system, product catalog, and secure authentication module to enable seamless group purchasing experiences.",
    tech: ["JavaScript", "Express", "Angular", "JWT", "MongoDB"],
    highlights: [
      "User management",
      "Product catalog",
      "Authentication system",
      "Group buying features",
      "College collaboration",
    ],
    featured: false,
    githubUrl: "https://github.com/malekbn10/group_buying_platform",
  },
  {
    title: "E-Commerce App with Admin Dashboard",
    description:
      "Full-featured e-commerce platform with comprehensive admin dashboard for inventory, orders, and analytics management.",
    fullDescription:
      "Built a complete e-commerce solution featuring a customer-facing storefront and a powerful admin dashboard. The platform includes product management, order processing, inventory tracking, customer management, and real-time analytics. The admin dashboard provides comprehensive tools for managing all aspects of the online store.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    highlights: [
      "Admin dashboard",
      "Inventory management",
      "Order processing",
      "Real-time analytics",
      "Payment integration",
    ],
    featured: false,
    githubUrl: "https://github.com/malekbn10/e-commerce-aziz-pfe",
  },
  {
    title: "AI Model Pro - Tunisian Payment Integration",
    description:
      "AI-powered application with integrated Tunisian bank VCard payment system for seamless local transactions.",
    fullDescription:
      "Developed an advanced AI model application with full integration of Tunisian bank VCard payment gateway. The platform leverages AI capabilities while providing a localized payment experience for Tunisian users, ensuring secure and efficient transactions through local banking infrastructure.",
    tech: [
      "React",
      "NestJS",
      "OpenAI API",
      "Gemini API",
      "Payment Gateway",
      "JWT",
    ],
    highlights: [
      "AI model integration",
      "Tunisian VCard payment",
      "Local banking support",
      "Secure transactions",
      "Payment gateway integration",
    ],
    featured: false,
    githubUrl: "not-found",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="relative section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="heading-lg mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-md mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            scalable, production-ready applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass glass-hover rounded-2xl overflow-hidden animate-fade-in cursor-pointer ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-card/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-gradient">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={14} className="mr-1" />
                    View Details
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-gradient">
                      {selectedProject.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <DialogTitle className="text-xl text-foreground">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Key Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle
                          size={14}
                          className="text-primary shrink-0"
                        />
                        {highlight}
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
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="hero"
                    className="flex-1"
                    onClick={() =>
                      window.open(selectedProject.githubUrl, "_blank")
                    }
                  >
                    <Github size={16} className="mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
