import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  className?: string;
}

const sizes = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
  xl: "text-8xl md:text-9xl",
};

export default function Logo({ size = "md", animate = true, className = "" }: LogoProps) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
      animate={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className={`${sizes[size]} font-bold text-primary select-none relative z-10`}
        animate={
          animate
            ? {
                textShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.3)",
                  "0 0 40px rgba(16, 185, 129, 0.6)",
                  "0 0 20px rgba(16, 185, 129, 0.3)",
                ],
              }
            : undefined
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        data-testid="logo-symbol"
      >
        〽
      </motion.span>
      
      {animate && (
        <>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border border-primary/20 rounded-full" 
                 style={{ width: "120%", height: "120%" }} />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border border-primary/10 rounded-full border-dashed" 
                 style={{ width: "140%", height: "140%" }} />
          </motion.div>

          <motion.div
            className="absolute"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div 
              className="rounded-full bg-primary/10 blur-xl"
              style={{ width: "150%", height: "150%" }}
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
