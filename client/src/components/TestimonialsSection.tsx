import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    quote:
      "Mohammed delivered exceptional work on our AI integration project. His attention to detail and technical expertise exceeded our expectations. Highly recommended!",
    quoteAr:
      "قدم محمد عملاً استثنائياً في مشروع دمج الذكاء الاصطناعي. اهتمامه بالتفاصيل وخبرته التقنية فاقت توقعاتنا. أوصي به بشدة!",
    name: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    role: "Project Manager at Tech Solutions",
    roleAr: "مدير مشاريع في Tech Solutions",
    initials: "AH",
    rating: 5,
  },
  {
    quote:
      "Working with Mohammed was a great experience. He built our data dashboard from scratch and the results were amazing. Professional and responsive throughout.",
    quoteAr:
      "كان العمل مع محمد تجربة رائعة. بنى لنا لوحة البيانات من الصفر وكانت النتائج مذهلة. محترف ومتجاوب طوال الوقت.",
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    role: "Startup Founder at DataViz Pro",
    roleAr: "مؤسسة شركة ناشئة في DataViz Pro",
    initials: "SJ",
    rating: 5,
  },
  {
    quote:
      "Mohammed created a beautiful campaign website for us with all the features we needed. His understanding of both Arabic RTL design and modern web standards is impressive.",
    quoteAr:
      "أنشأ محمد موقعاً جميلاً للحملة مع جميع الميزات التي نحتاجها. فهمه لتصميم RTL العربي ومعايير الويب الحديثة مثير للإعجاب.",
    name: "Omar Khaled",
    nameAr: "عمر خالد",
    role: "Marketing Director at Campaign Hub",
    roleAr: "مدير تسويق في Campaign Hub",
    initials: "OK",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 relative" data-testid="section-testimonials">
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
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Quote className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-testid="text-testimonials-title"
          >
            {t("testimonials.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("testimonials.subtitle")}
          </p>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className="bg-card border-card-border h-full hover-elevate group relative overflow-hidden"
                data-testid={`testimonial-card-${index}`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%)",
                  }}
                />

                <CardContent className={`p-6 flex flex-col h-full relative z-10 ${isRTL ? "text-right" : "text-left"}`}>
                  {/* Stars rating */}
                  <motion.div 
                    className={`flex gap-1 mb-4 ${isRTL ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 + index * 0.15 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [0, -3, 0],
                        }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    className={isRTL ? "mr-auto" : ""}
                  >
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  </motion.div>

                  {/* Quote text */}
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed flex-1 group-hover:text-foreground transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.15 }}
                    viewport={{ once: true }}
                    data-testid={`testimonial-quote-${index}`}
                  >
                    "{language === "ar" ? testimonial.quoteAr : testimonial.quote}"
                  </motion.p>

                  {/* Author info */}
                  <motion.div 
                    className={`flex items-center gap-4 pt-4 border-t border-border/50 ${isRTL ? "flex-row-reverse" : ""}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300" data-testid={`testimonial-name-${index}`}>
                        {language === "ar" ? testimonial.nameAr : testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300" data-testid={`testimonial-role-${index}`}>
                        {language === "ar" ? testimonial.roleAr : testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
