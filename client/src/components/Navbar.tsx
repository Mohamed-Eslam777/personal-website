import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Wait a bit for animation to complete, then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 ${isRTL ? 'right-0 left-auto' : 'left-0 right-auto'} z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-background/50 backdrop-blur-sm"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("#hero")}
            className={`flex items-center gap-2 group ${isRTL ? 'order-2' : 'order-1'}`}
            data-testid="link-logo"
          >
            <Logo size="sm" animate={false} />
            <span className="text-lg font-semibold text-foreground hidden sm:block">
              {isRTL ? "محمد مقلد" : "Mohammed Maklad"}
            </span>
          </button>

          <div className={`hidden md:flex items-center gap-1 ${isRTL ? 'order-3 flex-row-reverse' : 'order-2'}`}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                data-testid={`link-nav-${link.href.slice(1)}`}
              >
                {link.name}
              </button>
            ))}
            <div className={`flex items-center gap-2 ml-4 ${isRTL ? 'mr-4 ml-0' : ''}`}>
              <LanguageToggle />
              <ThemeToggle />
              <Button
                size="sm"
                onClick={() => window.open("/cv.pdf", "_blank")}
                data-testid="button-download-cv"
              >
                <Download className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t("nav.downloadCV")}
              </Button>
            </div>
          </div>

          <div className={`flex items-center gap-1 md:hidden ${isRTL ? 'order-1' : 'order-3'}`}>
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground border-foreground/20"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
            data-testid="mobile-menu"
          >
            <div className={`px-4 py-4 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 rounded-md transition-colors duration-200 active:bg-primary/20`}
                  data-testid={`link-mobile-${link.href.slice(1)}`}
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-border my-2" />
              <Button
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open("/cv.pdf", "_blank");
                }}
                data-testid="button-mobile-download-cv"
              >
                <Download className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t("nav.downloadCV")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
