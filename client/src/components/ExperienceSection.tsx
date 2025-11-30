import { motion } from "framer-motion";
import { Briefcase, Brain, Zap, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const { t, isRTL } = useLanguage();

  const experiences = [
    {
      icon: Brain,
      title: t("experience.ai.title"),
      company: t("experience.ai.company"),
      period: t("experience.ai.period"),
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      accentColor: "bg-blue-500/20 text-blue-400",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      description: [
        t("experience.ai.d1"),
        t("experience.ai.d2"),
        t("experience.ai.d3"),
        t("experience.ai.d4"),
      ],
    },
    {
      icon: Briefcase,
      title: t("experience.dev.title"),
      company: t("experience.dev.company"),
      period: t("experience.dev.period"),
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      accentColor: "bg-emerald-500/20 text-emerald-400",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      description: [
        t("experience.dev.d1"),
        t("experience.dev.d2"),
        t("experience.dev.d3"),
        t("experience.dev.d4"),
      ],
    },
  ];

  return (
    <section id="experience" className={`py-20 md:py-32 px-4 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} data-testid="section-experience">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Zap className="w-8 h-8 text-primary glow-pulse" />
          </motion.div>
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold ${isRTL ? 'gradient-text-rtl' : 'gradient-text'} mb-4`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-testid="text-experience-title"
          >
            {t("experience.title")}
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Experience items - Clean stacked layout */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
                data-testid={`experience-${index}`}
              >
                {/* Subtle connector line between items */}
                {index < experiences.length - 1 && (
                  <motion.div
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-primary/50 to-transparent hidden md:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                )}

                {/* Content card */}
                <motion.div
                  className="w-full"
                >
                  <ExperienceCard exp={exp} index={index} isRTL={isRTL} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
  isRTL,
}: {
  exp: { 
    title: string; 
    company: string; 
    period: string; 
    description: string[];
    color: string;
    borderColor: string;
    accentColor: string;
    glowColor: string;
  };
  index: number;
  isRTL: boolean;
}) {
  return (
    <motion.div
      className={`group relative rounded-xl md:rounded-2xl border-2 ${exp.borderColor} bg-gradient-to-br ${exp.color} backdrop-blur-xl p-5 md:p-10 overflow-hidden hover-elevate transition-all duration-300 ${exp.glowColor}`}
      whileHover={{ y: -8, boxShadow: `0 25px 50px -12px rgba(16, 185, 129, 0.3)` }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background overlay */}
      <motion.div 
        className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10">
        <div className={`flex items-start justify-between mb-4 md:mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <motion.span 
            className={`inline-block px-3 py-1.5 text-xs md:text-xs font-bold uppercase tracking-wider ${exp.accentColor} rounded-full border border-white/10 backdrop-blur-sm`}
            whileHover={{ scale: 1.08, y: -3 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(16, 185, 129, 0.2)",
                "0 0 20px 0 rgba(16, 185, 129, 0.3)",
                "0 0 0 0 rgba(16, 185, 129, 0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📅 {exp.period}
          </motion.span>
        </div>

        <div className={isRTL ? 'text-right' : 'text-left'}>
          <motion.h3 
            className="text-xl md:text-3xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            {exp.title}
          </motion.h3>
          
          <motion.p 
            className="text-primary font-semibold text-sm md:text-lg mb-4 md:mb-6 flex items-center gap-2"
            initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            🏢 {exp.company}
          </motion.p>

          <ul className={`space-y-2 md:space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {exp.description.map((item, i) => (
              <motion.li 
                key={i} 
                className={`flex items-start gap-3 text-muted-foreground group/item text-sm md:text-base ${isRTL ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-primary mt-0.5 md:mt-1.5 flex-shrink-0 text-lg md:text-xl group-hover/item:text-primary transition-colors duration-300"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -10, 0],
                  }}
                  transition={{ 
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  ✨
                </motion.div>
                <span className="leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
