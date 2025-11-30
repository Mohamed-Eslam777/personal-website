import { motion } from "framer-motion";
import { Code, Globe, Wrench, Brain, Languages, Sparkles, Zap, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const skillsData = {
  programming: ["Python", "Java", "C#", "Node.js", "PHP", "JavaScript", "TypeScript"],
  web: ["HTML", "CSS", "React", "Next.js", "Express.js", "Full-Stack", "APIs", "REST"],
  frameworks: ["MERN Stack", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Vite"],
  data: ["Pandas", "NumPy", "Data Analysis", "Data Visualization", "Excel Analysis", "CSV Processing"],
  ai: ["LLM Training", "AI Agent Creation", "Data Annotation", "Search Relevance", "AI Evaluation", "Prompt Engineering"],
  devops: ["Git", "GitHub", "Docker", "Vercel", "Agile/Scrum", "MS Excel", "Google Workspace"],
  languages: ["Arabic (Native)", "English (Very Good)"],
};

export default function SkillsSection() {
  const { t, isRTL } = useLanguage();

  const skillCategories = [
    { icon: Code, title: "Programming Languages", skills: skillsData.programming },
    { icon: Globe, title: "Web Development", skills: skillsData.web },
    { icon: Zap, title: "Frameworks & Libraries", skills: skillsData.frameworks },
    { icon: Database, title: "Data & Analysis", skills: skillsData.data },
    { icon: Brain, title: "AI & Machine Learning", skills: skillsData.ai },
    { icon: Wrench, title: "Tools & DevOps", skills: skillsData.devops },
    { icon: Languages, title: "Languages", skills: skillsData.languages },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 relative" data-testid="section-skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-testid="text-skills-title"
          >
            {t("skills.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("skills.subtitle")}
          </p>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="bg-card border-card-border h-full hover-elevate group relative overflow-hidden"
                data-testid={`skill-category-${index}`}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                  }}
                />

                <CardHeader className="pb-4 relative z-10">
                  <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10"
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(16, 185, 129, 0.2)",
                          "0 0 15px 0 rgba(16, 185, 129, 0.1)",
                          "0 0 0 0 rgba(16, 185, 129, 0)",
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 2.5, repeat: Infinity },
                        rotate: { duration: 0.6 },
                        scale: { duration: 0.6 }
                      }}
                    >
                      <category.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className={`flex flex-wrap gap-2 ${isRTL ? "justify-end" : "justify-start"}`}>
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15, y: -4, rotate: [0, 2, -2, 0] }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          data-testid={`skill-badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
