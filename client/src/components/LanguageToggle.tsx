import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="relative font-medium min-w-[60px] text-foreground border-foreground/20 hover:bg-primary/10"
      data-testid="button-language-toggle"
    >
      <motion.span
        key={language}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {language === "en" ? "عربي" : "EN"}
      </motion.span>
    </Button>
  );
}
