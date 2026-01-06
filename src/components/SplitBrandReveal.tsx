import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import bgImage from "../assets/bgImage.webp";
const column1 = [
  "/projects/78kWp_Berlin.jpg",
  "/projects/499kWp_schwaebisch.jpg",
  "/projects/499kWp_schwaebisch2.jpg",
];

const column2 = [
  "/projects/einkaufszentrum.jpg",
  "/processSteps/Inbetriebnahme_Service.jpg",
  "/projects/freiflaeche4.jpg",
];

const column3 = [
  "/materials/solarmodule.jpg",
  "/projects/produktionshalle4.jpg",
  "/projects/lagerhalle4.jpg",
];

export const SplitBrandReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (
      containerRef.current &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      containerRef.current.style.height = `${window.innerHeight}px`;
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? "top top+=85" : "top top",
          end: isMobile ? "+=150%" : "+=300%",
          scrub: isMobile ? 0.5 : 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Split Text Animation (The "Doors" opening)
      tl.to(
        ".split-top",
        { yPercent: -100, ease: "power2.inOut", duration: 1 },
        0
      ).to(
        ".split-bottom",
        { yPercent: 100, ease: "power2.inOut", duration: 1 },
        0
      );

      // 2. Content Reveal (Fade in)
      tl.fromTo(
        ".reveal-content",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        0.1
      );

      // 3. Vertical Carousel Parallax - Reduced on mobile for performance
      const parallaxAmount = isMobile ? -20 : -40;

      tl.fromTo(
        ".col-move-up",
        { yPercent: 0 },
        { yPercent: parallaxAmount, ease: "none", duration: 3 },
        0
      );

      // Column 2 moves DOWN (starts higher)
      tl.fromTo(
        ".col-move-down",
        { yPercent: parallaxAmount },
        { yPercent: 0, ease: "none", duration: 3 },
        0
      );

      // 4. Word-by-Word Text Reveal
      // Starts after the doors open (around time 0.8)
      tl.fromTo(
        ".manifesto-word",
        {
          opacity: 0.1,
          filter: isMobile ? "blur(4px)" : "blur(8px)",
          y: isMobile ? 5 : 10,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          stagger: isMobile ? 0.05 : 0.1, // Faster stagger on mobile
          duration: isMobile ? 1.5 : 2,
          ease: "power2.out",
        },
        0.8
      );
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  const manifestoText =
    "Wir bauen nicht nur Anlagen. Wir schaffen nachhaltige Energie. Von der Freifläche bis zum Hallendach. Jedes Projekt eine zuverlässige Lösung für Ihre Energiezukunft.";
  const words = manifestoText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#1C1C1C] will-change-transform"
    >
      {/* --- THE HIDDEN CONTENT (REVEALED BEHIND) --- */}
      <div className="reveal-content absolute inset-0 z-0 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Grid Columns - Hidden on very small screens for performance */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 md:gap-8 px-1 md:px-8 opacity-20 md:opacity-30 pointer-events-none">
          {/* Column 1 */}
          <div className="col-move-up flex flex-col gap-1 md:gap-8 pt-[120px] md:pt-[20vh] will-change-transform">
            {column1.map((src, i) => (
              <div
                key={i}
                className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-800"
              >
                <img
                  src={src}
                  alt="Solaranlage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            <div className="contents">
              {column1.map((src, i) => (
                <div
                  key={`dup-${i}`}
                  className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-800"
                >
                  <img
                    src={src}
                    alt="Solaranlage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 (Center) - Starts offset upwards */}
          <div className="col-move-down flex flex-col gap-1 md:gap-8 -mt-[20vh] md:-mt-[80vh] will-change-transform">
            {column2.map((src, i) => (
              <div
                key={i}
                className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-800"
              >
                <img
                  src={src}
                  alt="Solaranlage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            <div className="contents">
              {column2.map((src, i) => (
                <div
                  key={`dup-${i}`}
                  className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-800"
                >
                  <img
                    src={src}
                    alt="Solaranlage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-move-up flex flex-col gap-1 md:gap-8 pt-[100px] md:pt-[10vh] will-change-transform">
            {column3.map((src, i) => (
              <div
                key={i}
                className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-800"
              >
                <img
                  src={src}
                  alt="Solaranlage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            <div className="contents">
              {column3.map((src, i) => (
                <div
                  key={`dup-${i}`}
                  className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-800"
                >
                  <img
                    src={src}
                    alt="Solaranlage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Central Manifesto Overlay */}
        <div className="max-w-5xl relative z-30 text-center px-4 sm:px-6 md:px-6 mix-blend-screen">
          <span className="block text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] mb-3 sm:mb-4 md:mb-12 opacity-80">
            Das Manifest
          </span>

          <h2 className="text-base sm:text-xl md:text-5xl lg:text-6xl font-serif text-[#EAE7DF] leading-relaxed sm:leading-relaxed md:leading-tight drop-shadow-2xl">
            {words.map((word, i) => (
              <span
                key={i}
                className="manifesto-word inline-block mr-[3px] sm:mr-1 md:mr-3 text-white/90"
              >
                {word}
              </span>
            ))}
          </h2>

          <div className="mt-4 sm:mt-6 md:mt-16 flex justify-center">
            <div className="w-[1px] h-10 sm:h-16 md:h-24 bg-gradient-to-b from-accent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* --- THE SPLIT COVER (TEXT) --- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Top Half */}
        <div
          className="split-top absolute inset-0 flex items-center justify-center bg-[#1C1C1C] overflow-hidden border-b border-white/5 will-change-transform"
          style={{ clipPath: "inset(0 0 50% 0)" }}
        >
          {/* Background Image for Top Half */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src={bgImage}
              alt="Background"
              className="w-full h-full object-cover opacity-60"
              loading="eager"
            />
          </div>

          <h1 className="relative z-20 text-[13vw] sm:text-[14vw] md:text-[14vw] font-serif font-bold text-accent tracking-tighter leading-none whitespace-nowrap drop-shadow-2xl">
            MA BAU
          </h1>
        </div>

        {/* Bottom Half */}
        <div
          className="split-bottom absolute inset-0 flex items-center justify-center bg-[#1C1C1C] overflow-hidden border-t border-white/5 will-change-transform"
          style={{ clipPath: "inset(50% 0 0 0)" }}
        >
          {/* Background Image for Bottom Half */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src={bgImage}
              alt="Background"
              className="w-full h-full object-cover opacity-60"
              loading="eager"
            />
          </div>

          <h1 className="relative z-20 text-[13vw] sm:text-[14vw] md:text-[14vw] font-serif font-bold text-accent tracking-tighter leading-none whitespace-nowrap drop-shadow-2xl">
            MA BAU
          </h1>
        </div>
      </div>
    </section>
  );
};
