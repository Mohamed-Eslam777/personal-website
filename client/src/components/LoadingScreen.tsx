import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function LoadingScreen({ onComplete, duration = 2500 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [onComplete, duration]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        data-testid="loading-screen"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <Logo size="xl" animate />
          
          <div className="w-48 md:w-64">
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-muted-foreground text-sm mt-3 text-center">
              Loading... {progress}%
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
