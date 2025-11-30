import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammed-maklad-469557381/",
    color: "text-[#0077B5]",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    url: "https://github.com/Mohamed-Eslam777",
    color: "text-foreground",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    url: "https://wa.me/201050586075",
    color: "text-[#25D366]",
  },
];

export default function ContactSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className={`py-20 md:py-32 px-4 ${isRTL ? 'rtl' : 'ltr'}`} data-testid="section-contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-foreground border-primary/50" data-testid="badge-open-to-work">
              <motion.span 
                className="w-2 h-2 bg-primary rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {t("contact.badge")}
            </Badge>
          </motion.div>

          <motion.h2 
            className={`text-4xl md:text-5xl font-bold ${isRTL ? 'gradient-text-rtl' : 'gradient-text'} mb-4`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="text-contact-title"
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-xl mx-auto mb-8 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="text-contact-description"
          >
            {t("contact.subtitle")}
          </motion.p>
          <motion.div 
            className="section-divider mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => window.open("mailto:mo7amed2slam77@gmail.com")}
                className="text-lg px-8"
                data-testid="button-email"
              >
                <Mail className="w-5 h-5 mr-2" />
                mo7amed2slam77@gmail.com
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(link.url, "_blank")}
                  className={`w-12 h-12 border-foreground/30 bg-foreground/5 hover:bg-foreground/15 ${link.color} transition-all duration-300`}
                  data-testid={`button-social-${link.label.toLowerCase()}`}
                >
                  <link.icon className="w-7 h-7" />
                  <span className="sr-only">{link.label}</span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
