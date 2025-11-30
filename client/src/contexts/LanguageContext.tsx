import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.downloadCV": "Download CV",
    "hero.greeting": "Hello, I'm",
    "hero.name": "Mohammed Maklad",
    "hero.viewProjects": "View Projects",
    "hero.getInTouch": "Get in Touch",
    "hero.scrollDown": "Scroll Down",
    "hero.bio": "AI Specialist and Full-Stack Developer with hands-on experience in LLM training, data annotation, search relevance evaluation, and AI model evaluation. Building modern web applications with React, Node.js, and cutting-edge technologies.",
    "stats.projects": "Projects Completed",
    "stats.years": "Years Experience",
    "stats.certifications": "Certifications",
    "stats.coffee": "Cups of Coffee",
    "about.title": "Professional Summary",
    "about.location": "Location",
    "about.education": "Education",
    "about.graduation": "Graduation",
    "about.expected": "Expected: 2027",
    "about.degree": "B.Sc. AI, Delta University",
    "about.city": "Cairo, Egypt",
    "about.p1": "AI Specialist and Full-Stack Developer with hands-on experience in LLM training, data annotation, search relevance evaluation, and AI model evaluation.",
    "about.p2": "Strong background in web development, data analysis, and DevOps basics. Skilled in Python, Java, C#, Node.js, and modern web technologies.",
    "about.p3": "Experienced in delivering high-quality, guideline-compliant annotations with strong attention to detail. Proficient in identifying logic gaps, hallucinations, and bias in AI model responses.",
    "experience.title": "Experience",
    "experience.ai.title": "AI Trainer & Data Annotation Specialist",
    "experience.ai.company": "Freelancer",
    "experience.ai.period": "May 2025 - Present",
    "experience.ai.d1": "Training and evaluating AI and LLM models through structured data annotation workflows",
    "experience.ai.d2": "Conducting Search Relevance Evaluation and identifying logic gaps in AI responses",
    "experience.ai.d3": "Delivering precise, guideline-compliant annotation results with high accuracy",
    "experience.ai.d4": "Detecting hallucinations and logic inconsistencies in AI outputs",
    "experience.dev.title": "Full-Stack Developer",
    "experience.dev.company": "Freelance & Personal Projects",
    "experience.dev.period": "1+ Year Experience",
    "experience.dev.d1": "Building AI-powered web platforms, data visualization tools, and responsive websites",
    "experience.dev.d2": "Developing scalable applications using Node.js, Express, and React (MERN Stack)",
    "experience.dev.d3": "Implementing user authentication and authorization with JWT",
    "experience.dev.d4": "Integrating AI APIs (Google Gemini) and real-time notifications (Socket.io)",
    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of projects showcasing my skills in AI integration, full-stack development, and data visualization.",
    "projects.liveDemo": "Live Demo",
    "projects.code": "Code",
    "projects.more": "More projects available on my",
    "projects.nexus.title": "Nexus AI Platform",
    "projects.nexus.desc": "AI-powered web platform built with Next.js, React, and APIs. Features user authentication, AI integration, and modern responsive design. Deployed on Vercel for optimal performance and scalability.",
    "projects.dashboard.title": "Interactive Data Dashboard",
    "projects.dashboard.desc": "A web-based analytics tool that allows users to upload any CSV file, select data columns, and instantly visualize the analysis in dynamic, interactive charts (Bar and Pie). Perfect for quick data exploration.",
    "projects.election.title": "Election Campaign Website",
    "projects.election.desc": "A professional Arabic RTL political campaign website featuring a hero section with countdown timer, candidate biography, campaign program, news/updates gallery, and testimonials section.",
    "skills.title": "Technical Skills",
    "skills.subtitle": "Technologies and tools I use to build AI-powered applications and deliver high-quality solutions.",
    "skills.programming": "Programming & AI",
    "skills.web": "Web Development",
    "skills.devops": "DevOps & Tools",
    "skills.ai": "AI & Data",
    "skills.languages": "Languages",
    "testimonials.title": "What People Say",
    "testimonials.subtitle": "Feedback from clients and colleagues I've had the pleasure of working with.",
    "contact.badge": "Open to new opportunities",
    "contact.title": "Get In Touch",
    "contact.subtitle": "I'm open to new opportunities. Whether you have a project in mind, need AI/data annotation expertise, or just want to connect - feel free to reach out!",
    "footer.tagline": "AI Specialist & Full-Stack Developer",
    "footer.quickLinks": "Quick Links",
    "footer.followMe": "Follow Me",
    "footer.rights": "All rights reserved.",
    "footer.designedBy": "Designed by Mohammed Eslam Maklad",
  },
  ar: {
    "nav.about": "نبذة عني",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.contact": "تواصل معي",
    "nav.downloadCV": "تحميل السيرة الذاتية",
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "محمد مقلد",
    "hero.viewProjects": "عرض المشاريع",
    "hero.getInTouch": "تواصل معي",
    "hero.scrollDown": "انزل للأسفل",
    "hero.bio": "متخصص في الذكاء الاصطناعي ومطور Full-Stack مع خبرة عملية في تدريب نماذج اللغات الكبيرة، وتصنيف البيانات، وتقييم نتائج البحث، وتقييم نماذج الذكاء الاصطناعي. أقوم ببناء تطبيقات ويب حديثة باستخدام React و Node.js وأحدث التقنيات.",
    "stats.projects": "مشاريع منجزة",
    "stats.years": "سنوات خبرة",
    "stats.certifications": "شهادات",
    "stats.coffee": "أكواب قهوة",
    "about.title": "الملخص المهني",
    "about.location": "الموقع",
    "about.education": "التعليم",
    "about.graduation": "التخرج",
    "about.expected": "متوقع: 2027",
    "about.degree": "بكالوريوس ذكاء اصطناعي، جامعة الدلتا",
    "about.city": "القاهرة، مصر",
    "about.p1": "متخصص في الذكاء الاصطناعي ومطور Full-Stack مع خبرة عملية في تدريب نماذج اللغات الكبيرة، وتصنيف البيانات، وتقييم نتائج البحث، وتقييم نماذج الذكاء الاصطناعي.",
    "about.p2": "خلفية قوية في تطوير الويب وتحليل البيانات وأساسيات DevOps. ماهر في Python و Java و C# و Node.js وتقنيات الويب الحديثة.",
    "about.p3": "خبرة في تقديم تصنيفات عالية الجودة متوافقة مع الإرشادات مع اهتمام كبير بالتفاصيل. ماهر في تحديد الفجوات المنطقية والهلوسات والتحيز في استجابات نماذج الذكاء الاصطناعي.",
    "experience.title": "الخبرات",
    "experience.ai.title": "مدرب ذكاء اصطناعي ومتخصص تصنيف بيانات",
    "experience.ai.company": "عمل حر",
    "experience.ai.period": "مايو 2025 - حتى الآن",
    "experience.ai.d1": "تدريب وتقييم نماذج الذكاء الاصطناعي واللغات الكبيرة من خلال سير عمل منظم لتصنيف البيانات",
    "experience.ai.d2": "إجراء تقييم ملاءمة البحث وتحديد الفجوات المنطقية في استجابات الذكاء الاصطناعي",
    "experience.ai.d3": "تقديم نتائج تصنيف دقيقة ومتوافقة مع الإرشادات بدقة عالية",
    "experience.ai.d4": "اكتشاف الهلوسات والتناقضات المنطقية في مخرجات الذكاء الاصطناعي",
    "experience.dev.title": "مطور Full-Stack",
    "experience.dev.company": "عمل حر ومشاريع شخصية",
    "experience.dev.period": "خبرة +1 سنة",
    "experience.dev.d1": "بناء منصات ويب مدعومة بالذكاء الاصطناعي وأدوات تصور البيانات ومواقع متجاوبة",
    "experience.dev.d2": "تطوير تطبيقات قابلة للتوسع باستخدام Node.js و Express و React (MERN Stack)",
    "experience.dev.d3": "تنفيذ مصادقة وتفويض المستخدم باستخدام JWT",
    "experience.dev.d4": "دمج واجهات برمجة تطبيقات الذكاء الاصطناعي (Google Gemini) والإشعارات الفورية (Socket.io)",
    "projects.title": "المشاريع المميزة",
    "projects.subtitle": "مجموعة مختارة من المشاريع التي تعرض مهاراتي في تكامل الذكاء الاصطناعي وتطوير Full-Stack وتصور البيانات.",
    "projects.liveDemo": "معاينة حية",
    "projects.code": "الكود",
    "projects.more": "المزيد من المشاريع متاحة على",
    "projects.nexus.title": "منصة Nexus AI",
    "projects.nexus.desc": "منصة ويب مدعومة بالذكاء الاصطناعي مبنية باستخدام Next.js و React وواجهات برمجة التطبيقات. تتميز بمصادقة المستخدم وتكامل الذكاء الاصطناعي وتصميم متجاوب حديث. منشورة على Vercel للأداء الأمثل.",
    "projects.dashboard.title": "لوحة بيانات تفاعلية",
    "projects.dashboard.desc": "أداة تحليلات قائمة على الويب تتيح للمستخدمين تحميل أي ملف CSV واختيار أعمدة البيانات وتصور التحليل فوراً في رسوم بيانية تفاعلية ديناميكية (شريطية ودائرية).",
    "projects.election.title": "موقع حملة انتخابية",
    "projects.election.desc": "موقع حملة سياسية عربي احترافي من اليمين لليسار يتميز بقسم رئيسي مع عداد تنازلي وسيرة ذاتية للمرشح وبرنامج الحملة ومعرض الأخبار وقسم الشهادات.",
    "skills.title": "المهارات التقنية",
    "skills.subtitle": "التقنيات والأدوات التي أستخدمها لبناء تطبيقات مدعومة بالذكاء الاصطناعي وتقديم حلول عالية الجودة.",
    "skills.programming": "البرمجة والذكاء الاصطناعي",
    "skills.web": "تطوير الويب",
    "skills.devops": "أدوات DevOps",
    "skills.ai": "الذكاء الاصطناعي والبيانات",
    "skills.languages": "اللغات",
    "testimonials.title": "ماذا يقول الناس",
    "testimonials.subtitle": "ملاحظات من العملاء والزملاء الذين تشرفت بالعمل معهم.",
    "contact.badge": "متاح للفرص الجديدة",
    "contact.title": "تواصل معي",
    "contact.subtitle": "أنا منفتح على الفرص الجديدة. سواء كان لديك مشروع في ذهنك، أو تحتاج إلى خبرة في الذكاء الاصطناعي/تصنيف البيانات، أو تريد فقط التواصل - لا تتردد في التواصل!",
    "footer.tagline": "متخصص ذكاء اصطناعي ومطور Full-Stack",
    "footer.quickLinks": "روابط سريعة",
    "footer.followMe": "تابعني",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.designedBy": "تصميم محمد إسلام مقلد",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as Language) || "en";
    }
    return "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
