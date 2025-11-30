import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const titlesEn = [
  "AI Specialist",
  "Full-Stack Developer",
  "Data Annotation Expert",
  "LLM Trainer",
];

const titlesAr = [
  "متخصص ذكاء اصطناعي",
  "مطور Full-Stack",
  "خبير تصنيف البيانات",
  "مدرب نماذج اللغات",
];

export default function HeroSection() {
  const { t, language, isRTL } = useLanguage();
  const titles = language === "ar" ? titlesAr : titlesEn;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setCurrentTitleIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 px-4 overflow-hidden"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`order-2 lg:order-1 ${isRTL ? "text-right" : "text-left"}`}
          >
            <motion.p 
              className="text-primary font-medium mb-2 md:mb-4 text-base md:text-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              data-testid="text-greeting"
            >
              <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                👋
              </motion.span>
              {t("hero.greeting")}
            </motion.p>
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 md:mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              data-testid="text-name"
            >
              {t("hero.name")}
            </motion.h1>
            <div className="h-8 md:h-12 md:h-14 mb-4 md:mb-6">
              <span
                className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-semibold"
                data-testid="text-title"
              >
                {displayText}
                <motion.span 
                  className="inline-block w-0.5 h-5 md:h-6 md:h-8 bg-primary ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </div>
            <motion.p
              className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              data-testid="text-bio"
            >
              {t("hero.bio")}
            </motion.p>
            <motion.div 
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 ${isRTL ? "sm:justify-end" : "sm:justify-start"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="sm"
                  onClick={() => scrollToSection("#projects")}
                  className="w-full sm:w-auto text-sm md:text-base"
                  data-testid="button-view-projects"
                >
                  <Eye className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("hero.viewProjects")}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection("#contact")}
                  className="w-full sm:w-auto text-sm md:text-base text-foreground border-foreground/30 hover:bg-foreground/10"
                  data-testid="button-get-in-touch"
                >
                  <Mail className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("hero.getInTouch")}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col items-center mt-8 md:mt-12 md:hidden"
            >
              <button
                onClick={() => scrollToSection("#about")}
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                data-testid="button-scroll-down"
              >
                <span className="text-xs mb-2">{t("hero.scrollDown")}</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center mb-8 md:mb-0"
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 relative z-10 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.2)",
                    "0 0 40px rgba(16, 185, 129, 0.4)",
                    "0 0 20px rgba(16, 185, 129, 0.2)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img 
                  src="/profile (1).png" 
                  alt={t("hero.name")}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/10 border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            data-testid="button-scroll-down-desktop"
          >
            <span className="text-sm mb-2">{t("hero.scrollDown")}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
