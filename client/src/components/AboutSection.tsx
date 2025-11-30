import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className={`py-20 md:py-32 px-4 ${isRTL ? 'rtl' : 'ltr'}`} data-testid="section-about">
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
            data-testid="text-about-title"
          >
            {t("about.title")}
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`lg:col-span-2 ${isRTL ? "text-right" : "text-left"}`}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed" data-testid="text-about-content">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                {t("about.p1")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t("about.p2")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t("about.p3")}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-card-border hover-elevate">
              <CardContent className="p-6 space-y-6">
                <motion.div 
                  className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-sm text-muted-foreground">{t("about.location")}</p>
                    <p className="font-medium text-foreground" data-testid="text-location">
                      {t("about.city")}
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-sm text-muted-foreground">{t("about.education")}</p>
                    <p className="font-medium text-foreground" data-testid="text-education">
                      {t("about.degree")}
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-sm text-muted-foreground">{t("about.graduation")}</p>
                    <p className="font-medium text-foreground" data-testid="text-graduation">
                      {t("about.expected")}
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
