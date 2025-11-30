import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammed-maklad-469557381/",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    url: "https://github.com/Mohamed-Eslam777",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    url: "https://wa.me/201050586075",
  },
];

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 md:py-16 px-4 border-t border-border/50 bg-gradient-to-b from-background via-background to-background/80 relative overflow-hidden" data-testid="footer">
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 ${isRTL ? "text-right" : "text-left"}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
              <Logo size="sm" animate={false} />
              <span className="text-lg font-semibold text-foreground">
                {isRTL ? "محمد مقلد" : "Mohammed Maklad"}
              </span>
            </div>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-tagline">
              {t("footer.tagline")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.href.slice(1)}`}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">{t("footer.followMe")}</h3>
            <div className={`flex gap-4 ${isRTL ? "justify-end" : "justify-start"}`}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground hover:text-primary transition-all rounded-lg p-2 hover:bg-primary/10 ${link.label === "LinkedIn" ? "hover:text-blue-500" : link.label === "WhatsApp" ? "hover:text-green-500" : ""}`}
                  data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                  whileHover={{ scale: 1.3, y: -5, boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30 text-center"
        >
          <motion.p 
            className="text-muted-foreground text-sm" 
            data-testid="text-copyright"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © {new Date().getFullYear()} {isRTL ? "محمد مقلد" : "Mohammed Maklad"}. {t("footer.rights")}
          </motion.p>
          <motion.p 
            className="text-muted-foreground/60 text-xs mt-2"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
          >
            ✨ {t("footer.designedBy")}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
