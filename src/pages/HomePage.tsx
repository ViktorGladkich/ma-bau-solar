import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SEO } from "../components/SEO";
import { SplitBrandReveal } from "../components/SplitBrandReveal";
import footerBanner from "../assets/footerBanner.webp";
import { processSteps, materials } from "../data/homePageData";
import { IntroSection, ServicesSection } from "../components/home";

export const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMaterial, setActiveMaterial] = useState(0);

  // Use Custom Hook for revealing text
  useScrollReveal(".animate-text");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Process Section - Sticky Image Logic
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      steps.forEach((step, i) => {
        // Check if elements exist before creating ScrollTrigger
        const processImg = document.querySelector(`.process-img-${i}`);
        const stepIndicator = document.querySelector(`.step-indicator-${i}`);

        if (!processImg || !stepIndicator) return;

        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(`.process-img`, {
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
              overwrite: true,
            });
            gsap.to(`.process-img-${i}`, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.inOut",
              overwrite: true,
            });
            gsap.to(`.step-indicator-${i}`, {
              width: "4rem",
              backgroundColor: "#9E8E76",
              duration: 0.3,
            });
          },
          onEnterBack: () => {
            gsap.to(`.process-img`, {
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
              overwrite: true,
            });
            gsap.to(`.process-img-${i}`, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.inOut",
              overwrite: true,
            });
            gsap.to(`.step-indicator-${i}`, {
              width: "4rem",
              backgroundColor: "#9E8E76",
              duration: 0.3,
            });
          },
          onLeave: () => {
            gsap.to(`.step-indicator-${i}`, {
              width: "2rem",
              backgroundColor: "#D1CDC4",
              duration: 0.3,
            });
          },
          onLeaveBack: () => {
            gsap.to(`.step-indicator-${i}`, {
              width: "2rem",
              backgroundColor: "#D1CDC4",
              duration: 0.3,
            });
          },
        });
      });

      // 2. Marquee animation
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });

      // 3. Mobile Process Images - Smooth fade-in animation
      const mobileProcessImages = gsap.utils.toArray<HTMLElement>(
        ".mobile-process-image",
      );
      mobileProcessImages.forEach((img) => {
        gsap.fromTo(
          img,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMaterialClick = (index: number) => {
    // If clicking the already active one, maybe toggle? For now, just set active.
    if (activeMaterial === index) return;
    setActiveMaterial(index);
  };
  return (
    <>
      <SEO
        title="MA Bau GmbH – Photovoltaik & Bau Experte Dresden"
        description="MA Bau GmbH Dresden ✓ Ihr Experte für Photovoltaik-Montage, Solaranlagen, Freiflächen-PV, Dachmontage & Bau ✓ 42+ MWp installiert ✓ 100+ Projekte ✓ Deutschland & Europa ✓ Jetzt Anfrage stellen!"
        keywords="MA Bau, MA Bau GmbH, MA Bau Dresden, Photovoltaik Dresden, Solaranlage Dresden, PV Montage Dresden, Photovoltaik Montage, Solar Dresden, Freifläche Photovoltaik, Dachmontage Solar, Industriedach Solar, Gewerbedach PV, Photovoltaik Berlin, Solaranlage Deutschland, PV-Anlage Installation"
        url="https://mabaugmbh.de/"
      />
      <div ref={containerRef} className="bg-secondary">
        <Hero />

        <IntroSection />

        <ServicesSection />

        {/* Premium Client Logo Carousel */}
        <section
          className="py-24 md:py-32 overflow-hidden bg-white text-primary"
          aria-label="Unsere Kunden"
        >
          <div className="container mx-auto px-6 mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="animate-text block text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  Unsere Partner
                </span>
                <h2 className="animate-text text-3xl md:text-5xl font-serif text-primary leading-tight">
                  Vertrauen, das
                  <br />
                  <span className="italic text-primary/50">verbindet.</span>
                </h2>
              </div>
              <p className="animate-text text-primary/60 font-light max-w-md text-sm md:text-base">
                Wir sind stolz auf die Zusammenarbeit mit führenden Unternehmen
                und realisieren gemeinsam nachhaltige Energielösungen.
              </p>
            </div>
          </div>

          {/* Logo Carousel */}
          <div className="relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="marquee relative w-full flex overflow-hidden py-8">
              <div className="marquee-inner flex gap-12 md:gap-20 items-center whitespace-nowrap">
                {[...Array(2)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {[
                      { name: "Kunde 1", logo: "/logo/clients/client1.jpg" },
                      { name: "Kunde 2", logo: "/logo/clients/client2.jpg" },
                      { name: "Kunde 3", logo: "/logo/clients/client3.jpg" },
                      { name: "Kunde 4", logo: "/logo/clients/client4.jpg" },
                      { name: "Kunde 5", logo: "/logo/clients/client5.jpg" },
                      { name: "Kunde 6", logo: "/logo/clients/client6.jpg" },
                      { name: "Kunde 7", logo: "/logo/clients/client7.jpg" },
                      { name: "Kunde 8", logo: "/logo/clients/client8.jpg" },
                    ].map((client, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex-shrink-0 group"
                      >
                        <div className="w-36 h-24 md:w-48 md:h-28 flex items-center justify-center px-6 py-4 bg-white rounded-lg transition-all duration-500 hover:bg-white hover:border-accent/30 hover:shadow-lg hover:scale-105">
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Process Section - Semantic Section */}
        <section className="bg-white relative" aria-label="Unser Prozess">
          <div className="flex flex-col lg:flex-row">
            {/* Sticky Image Column (Left) */}
            <div className="hidden lg:block lg:w-1/2 h-[100svh] sticky top-0 overflow-hidden bg-primary z-10">
              {processSteps.map((step, i) => (
                <div
                  key={step.id}
                  className={`process-img process-img-${i} absolute inset-0 w-full h-full pointer-events-none`}
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-12 left-12 z-20 text-white">
                    <span className="block text-9xl font-serif mb-4 opacity-30 leading-none">
                      0{step.id}
                    </span>
                    <h3 className="text-4xl font-serif">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Scrolling Content Column (Right) */}
            <div className="w-full lg:w-1/2 bg-secondary relative z-20">
              {processSteps.map((step, i) => (
                <div
                  key={step.id}
                  className="process-step min-h-[50vh] lg:min-h-[100svh] flex flex-col justify-center px-6 md:px-24 py-16 md:py-24 border-b border-primary/5 lg:border-none"
                >
                  {/* Mobile Image */}
                  <div className="mobile-process-image lg:hidden w-full aspect-video mb-8 overflow-hidden rounded-sm relative">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                      0{step.id}
                    </div>
                  </div>

                  <div
                    className={`step-indicator-${i} hidden lg:block w-8 h-[2px] bg-[#D1CDC4] mb-8 transition-all duration-500`}
                  ></div>

                  <span className="animate-text block text-xs font-bold uppercase tracking-widest text-accent mb-4">
                    Phase 0{step.id}
                  </span>
                  <h3 className="animate-text text-3xl md:text-4xl font-serif text-primary mb-6">
                    {step.title}
                  </h3>
                  <p className="animate-text text-lg text-gray-600 font-light leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atelier Section */}
        <section className="atelier-section py-32 bg-[#EAE7DF] px-6 md:px-12 overflow-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
              {/* Left: Material List */}
              <div className="relative z-10">
                <span className="animate-text block text-xs font-bold uppercase tracking-widest text-accent mb-8">
                  Das Atelier
                </span>
                <h2 className="animate-text text-4xl md:text-6xl font-serif text-primary leading-tight mb-16">
                  Handwerk in <br />
                  Perfektion.
                </h2>

                <div className="space-y-4">
                  {materials.map((mat, index) => (
                    <div
                      key={mat.id}
                      className={`group cursor-pointer border-t py-6 md:py-8 touch-manipulation transition-all duration-300 ${
                        activeMaterial === index
                          ? "border-accent bg-white/50 pl-4 -ml-4 rounded-sm shadow-sm"
                          : "border-primary/10 hover:pl-2"
                      }`}
                      onMouseEnter={() => handleMaterialClick(index)}
                      onClick={() => handleMaterialClick(index)}
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <div className="flex items-center gap-6">
                          <span
                            className={`text-xs font-mono transition-colors duration-300 ${
                              activeMaterial === index
                                ? "text-accent font-bold"
                                : "text-gray-400"
                            }`}
                          >
                            0{index + 1}
                          </span>
                          <h3
                            className={`text-xl md:text-3xl font-serif transition-all duration-300 ${
                              activeMaterial === index
                                ? "text-primary translate-x-2"
                                : "text-primary/60"
                            }`}
                          >
                            {mat.name}
                          </h3>
                        </div>
                      </div>

                      {/* Animated Description & Mobile Image Accordion */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          activeMaterial === index
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-600 font-light pl-10 md:pl-12 max-w-md text-sm md:text-base mt-2 mb-4">
                          {mat.desc}
                        </p>

                        {/* MOBILE IMAGE: Shown inside the accordion for better UX on small screens */}
                        <div className="lg:hidden pl-10 pr-4 pb-4">
                          <div className="rounded-sm overflow-hidden h-48 w-full shadow-md relative">
                            <img
                              src={mat.img}
                              alt={mat.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-2 left-2 text-white text-[10px] uppercase tracking-widest font-bold">
                              Made in Berlin
                            </div>
                          </div>
                        </div>

                        <div className="pl-10 md:pl-12 hidden lg:block">
                          <div className="h-[1px] w-12 bg-accent/50"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-primary/10"></div>
                </div>
              </div>

              {/* Right: Changing Image Display (DESKTOP ONLY) */}
              <div className="hidden lg:block h-[700px] w-full relative mt-8 lg:mt-0 shadow-2xl rounded-sm overflow-hidden perspective-1000">
                {materials.map((mat, index) => (
                  <div
                    key={mat.id}
                    className={`material-img-${index} absolute inset-0 w-full h-full transition-all duration-700 ease-in-out overflow-hidden bg-primary`}
                    style={{
                      opacity: activeMaterial === index ? 1 : 0,
                      zIndex: activeMaterial === index ? 10 : 0,
                      clipPath:
                        activeMaterial === index
                          ? "inset(0% 0% 0% 0%)"
                          : "inset(0% 0% 100% 0%)",
                    }}
                  >
                    <img
                      src={mat.img}
                      alt={mat.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white max-w-xs transform translate-y-0 transition-transform duration-700">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="block text-[10px] uppercase tracking-widest text-white/80">
                          Premium Quality
                        </span>
                      </div>
                      <p className="font-serif text-2xl">{mat.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <SplitBrandReveal />
        {/* Projects Preview */}
        <Projects />

        {/* Call to Action Parallax */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={footerBanner}
              className="w-full h-full object-cover filter brightness-[0.4]"
              alt="Hintergrund"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/40"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <span className="animate-text block text-accent text-xs uppercase tracking-[0.2em] mb-6">
              Ihr Projekt
            </span>
            <h2 className="animate-text text-4xl md:text-7xl font-serif text-white mb-10 leading-none">
              Raum für
              <br />
              Ihre Vision.
            </h2>
            <div className="animate-text">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-white text-primary px-8 py-4 md:px-10 md:py-5 text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
              >
                <span>Anfrage senden</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
