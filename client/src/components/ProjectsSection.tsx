import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsSection() {
  const { t, isRTL } = useLanguage();

  const projects = [
    {
      title: "Next.js Full Stack Project",
      description: t("projects.nexus.desc"),
      image: "/project1 (1).png",
      color: "from-blue-500 to-cyan-500",
      tags: ["Next.js", "React", "APIs", "Vercel", "Tailwind CSS"],
      liveUrl: "https://nexus-ai-platform-two.vercel.app/login",
      codeUrl: "https://github.com/Mohamed-Eslam777",
    },
    {
      title: "Data Analysis Dashboard",
      description: t("projects.dashboard.desc"),
      image: "/project2 (1).png",
      color: "from-green-500 to-emerald-500",
      tags: ["React", "Chart.js", "PapaParse", "JavaScript", "CSS"],
      liveUrl: "https://mohamed-eslam777.github.io/data-dashboard",
      codeUrl: "https://github.com/Mohamed-Eslam777/data-dashboard",
    },
    {
      title: "Election Campaign System",
      description: t("projects.election.desc"),
      image: "/project3 (1).png",
      color: "from-purple-500 to-pink-500",
      tags: ["HTML", "CSS", "JavaScript", "Netlify", "Responsive Design"],
      liveUrl: "https://sage-croquembouche-f5ac0.netlify.app",
      codeUrl: "https://github.com/Mohamed-Eslam777",
    },
  ];

  return (
    <section id="projects" className={`py-20 md:py-32 px-4 ${isRTL ? 'rtl' : 'ltr'}`} data-testid="section-projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold ${isRTL ? 'gradient-text-rtl' : 'gradient-text'} mb-4`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-testid="text-projects-title"
          >
            {t("projects.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
          <motion.div 
            className="section-divider mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className="group bg-card border-card-border overflow-hidden h-full flex flex-col hover-elevate"
                data-testid={`project-card-${index}`}
              >
                <motion.div 
                  className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <CardContent className={`p-6 flex flex-col flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? "justify-end" : "justify-start"}`}>
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          data-testid={`project-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      data-testid={`button-live-demo-${index}`}
                    >
                      <ExternalLink className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {t("projects.liveDemo")}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.codeUrl, "_blank")}
                      data-testid={`button-code-${index}`}
                    >
                      <Github className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {t("projects.code")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          {t("projects.more")}{" "}
          <a
            href="https://github.com/Mohamed-Eslam777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            data-testid="link-github-more"
          >
            GitHub
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
