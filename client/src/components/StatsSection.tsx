import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Zap, Trophy, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Code2, value: 10, suffix: "+", label: t("stats.projects"), color: "text-blue-400", bgColor: "bg-blue-500/10 dark:bg-blue-500/20" },
    { icon: Zap, value: 1, suffix: "+", label: t("stats.years"), color: "text-yellow-400", bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20" },
    { icon: Trophy, value: 5, suffix: "+", label: t("stats.certifications"), color: "text-purple-400", bgColor: "bg-purple-500/10 dark:bg-purple-500/20" },
    { icon: Flame, value: 500, suffix: "+", label: t("stats.coffee"), color: "text-orange-400", bgColor: "bg-orange-500/10 dark:bg-orange-500/20" },
  ];

  return (
    <section className={`py-16 md:py-20 px-4 relative ${isRTL ? 'rtl' : 'ltr'}`} data-testid="section-stats">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -8 }}
              className={`relative group rounded-xl ${stat.bgColor} border border-primary/20 p-6 md:p-8 overflow-hidden hover-elevate transition-all duration-300 backdrop-blur-sm`}
              data-testid={`stat-${index}`}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${stat.color.replace('text-', 'rgba(').replace('-400', ', 0.1)')}, transparent)`,
                }}
              />

              {/* Glowing orb background */}
              <motion.div
                className={`absolute -inset-8 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-2xl ${stat.color}`}
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className={`p-3 rounded-lg mb-4 ${stat.bgColor} border border-primary/30`}
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                >
                  <stat.icon className={`w-6 h-6 md:w-7 md:h-7 ${stat.color}`} />
                </motion.div>

                <motion.div 
                  className="text-2xl md:text-4xl font-bold text-foreground mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.12 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <CountUp end={stat.value} />
                  <span className={`${stat.color} text-xl md:text-2xl`}>{stat.suffix}</span>
                </motion.div>

                <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color === 'text-blue-400' ? 'from-blue-500 to-blue-500/0' : stat.color === 'text-yellow-400' ? 'from-yellow-500 to-yellow-500/0' : stat.color === 'text-purple-400' ? 'from-purple-500 to-purple-500/0' : 'from-orange-500 to-orange-500/0'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
