import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading"
            onComplete={() => setIsLoading(false)}
            duration={1500}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background relative"
          >
            <AnimatedBackground />
            <div className="relative z-10">
              <Navbar />
              <main>
                <HeroSection />
                <StatsSection />
                <Suspense fallback={<div className="h-96" />}>
                  <AboutSection />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <ExperienceSection />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <ProjectsSection />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <SkillsSection />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <TestimonialsSection />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <ContactSection />
                </Suspense>
              </main>
              <Suspense fallback={<div className="h-20" />}>
                <Footer />
              </Suspense>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
