import React, { useEffect, useRef, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { AIChatBot } from "./components/AIChatBot";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((module) => ({ default: module.AboutPage })),
);
const ExpertisePage = lazy(() =>
  import("./pages/ExpertisePage").then((module) => ({
    default: module.ExpertisePage,
  })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((module) => ({
    default: module.ProjectsPage,
  })),
);
const ProjectDetail = lazy(() =>
  import("./pages/ProjectDetail").then((module) => ({
    default: module.ProjectDetail,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);
const ImpressumPage = lazy(() =>
  import("./pages/ImpressumPage").then((module) => ({
    default: module.ImpressumPage,
  })),
);
const DatenschutzPage = lazy(() =>
  import("./pages/DatenschutzPage").then((module) => ({
    default: module.DatenschutzPage,
  })),
);
const AGBPage = lazy(() =>
  import("./pages/AGBPage").then((module) => ({
    default: module.AGBPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransitionOverlay = () => {
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { yPercent: 0 });
      gsap.to(overlayRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
        delay: 0.1,
      });
    }, overlayRef);

    return () => ctx.revert();
  }, [location]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white z-[60] pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      <img
        src="/logo/logo-Mabau.png"
        alt="MA Bau"
        width="80"
        height="74"
        className="w-20 h-20 object-contain opacity-80"
      />
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white text-primary">
    <div className="animate-pulse font-serif italic text-xl">Laden...</div>
  </div>
);

const AppContent: React.FC = () => {
  const [showPreloader, setShowPreloader] = React.useState(() => {
    return !sessionStorage.getItem("preloaderShown");
  });

  useEffect(() => {
    if (!showPreloader) return;

    // Mark preloader as shown for this session
    sessionStorage.setItem("preloaderShown", "true");

    const tl = gsap.timeline({
      onComplete: () => setShowPreloader(false),
    });

    tl.to(".loader-logo", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(
        ".loader-line",
        {
          scaleX: 1,
          duration: 1,
          ease: "expo.inOut",
        },
        "-=0.3",
      )
      .to(".loader-container", {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.2,
      });
  }, [showPreloader]);

  return (
    <div className="relative w-full min-h-screen bg-secondary cursor-none text-primary font-sans selection:bg-accent selection:text-white">
      <CustomCursor />
      <ScrollProgressBar />
      <PageTransitionOverlay />

      {/* Initial Loader Overlay */}
      {showPreloader && (
        <div className="loader-container fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-primary">
          <div className="overflow-hidden mb-6">
            <img
              src="/logo/logo-Mabau.png"
              alt="MA Bau Logo"
              width="150"
              height="139"
              className="loader-logo w-[150px] h-[139px] object-contain opacity-0"
            />
          </div>
          <div className="w-64 h-[2px] bg-primary/10 overflow-hidden">
            <div className="loader-line w-full h-full bg-accent transform scale-x-0 origin-left"></div>
          </div>
        </div>
      )}

      <Navbar />

      <main className="flex flex-col w-full min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/agb" element={<AGBPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <AIChatBot />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
