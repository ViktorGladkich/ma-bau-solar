import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Optimized video with Cloudinary transformations
const heroVideo =
  "https://res.cloudinary.com/dcphhfemb/video/upload/q_auto:good,f_auto/v1767643382/hero_vyelws.mp4";

// Optimized thumbnail - use video path, not image path
const heroVideoThumbnail =
  "https://res.cloudinary.com/dcphhfemb/video/upload/q_auto:good,w_1920/v1767643382/hero_vyelws.jpg";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle = "MA Bau GmbH – Bau & Energie",
  description = "Von Photovoltaik bis Renovierung – wir setzen Ihre Projekte professionell und zuverlässig um.",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lockMobileHeight = () => {
      if (
        containerRef.current &&
        window.matchMedia("(max-width: 767px)").matches
      ) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    // Set initially
    lockMobileHeight();
    const ctx = gsap.context(() => {
      // DESKTOP ANIMATION
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Idle animation for scroll prompt
        gsap.to(".scroll-prompt", {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "power1.inOut",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=1500", // Scroll distance
            scrub: 1,
            pin: true, // Pinning enabled
            pinSpacing: true,
            anticipatePin: 1, // Helps with the "jump" on start
            fastScrollEnd: true, // Prevents glitches on fast scrolls
            invalidateOnRefresh: true, // Recalculate on resize
          },
        });

        // 0. Scroll prompt fades out
        tl.to(".scroll-prompt", { opacity: 0, duration: 0.1 }, 0);

        // 1. Initial text panel slides off
        tl.to(
          ".hero-initial-text",
          {
            xPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        );

        // 2. Image expands
        tl.to(
          ".hero-image-wrapper",
          {
            width: "100%",
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        );

        // 3. Overlay darkens
        tl.to(".hero-overlay", { opacity: 0.5, duration: 1 }, 0);

        // 4. Final text reveals
        tl.fromTo(
          ".hero-final-text",
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          ">-0.2",
        );
      });

      // MOBILE ANIMATION (No Pinning to avoid mobile browser address bar conflicts)
      mm.add("(max-width: 767px)", () => {
        // Simple fade in for background, no zoom on scroll
        gsap.fromTo(
          ".mobile-bg-img",
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          },
        );

        // Text Entrance (Play once, do not scrub)
        gsap.fromTo(
          ".mobile-hero-content > *",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            delay: 0.5,
            ease: "power3.out",
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Structured Data for Video */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "MA Bau GmbH - Bau & Energie Expertise",
            description:
              "Von Photovoltaik bis Renovierung – wir setzen Ihre Projekte professionell und zuverlässig um.",
            thumbnailUrl: heroVideoThumbnail,
            uploadDate: "2026-01-05T12:00:00+01:00",
            contentUrl: heroVideo,
            embedUrl: heroVideo,
            duration: "PT30S",
          }),
        }}
      />

      {/* CHANGED: h-[100svh] -> h[100dvh] to use dynamic viewport height */}
      <header
        ref={containerRef}
        className="relative w-full h-[100vh] md:h-screen overflow-hidden bg-white will-change-transform transform-gpu contain-layout"
        role="banner"
        aria-label="Hero Bereich"
      >
        {/* ================= MOBILE LAYOUT (< 768px) ================= */}
        <div className="md:hidden relative w-full h-full flex flex-col justify-end pb-24 px-6">
          {/* Background Video Fixed */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 z-10" />
            <video
              src={heroVideo}
              poster={heroVideoThumbnail}
              className="mobile-bg-img w-full h-full object-cover will-change-transform"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Mobile Content */}
          <div className="mobile-hero-content relative z-20 text-secondary mb-4">
            <div className="flex items-center gap-3 mb-6 opacity-80">
              <div className="h-[1px] w-8 bg-accent"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                {subtitle}
              </span>
            </div>

            <h1 className="text-5xl font-serif leading-[1.05] mb-6 drop-shadow-lg">
              {title || (
                <>
                  Bauen.
                  <br />
                  <span className="italic text-accent">Gestalten.</span>
                </>
              )}
            </h1>

            <p className="text-white/80 font-light text-base leading-relaxed max-w-xs mb-10 drop-shadow-md">
              {description}
            </p>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 text-white/50">
              <span className="text-[10px] uppercase tracking-widest">
                Scrollen
              </span>
              <div className="w-12 h-[1px] bg-white/30">
                <div className="w-full h-full bg-accent origin-left animate-[scale-x_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT (>= 768px) ================= */}
        <div className="hidden md:flex w-full h-full relative">
          {/* Left Side: Initial Text */}
          <div className="hero-initial-text absolute top-0 left-0 w-[45%] h-full flex flex-col justify-center px-12 lg:px-24 z-10 bg-white will-change-transform">
            <div className="overflow-hidden">
              <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-6">
                {subtitle}
              </span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-serif text-primary leading-[1.05] mb-8">
              {title || (
                <>
                  Bauen. <br />
                  <span className="italic text-accent">Gestalten.</span>
                </>
              )}
            </h1>
            <p className="text-primary/60 font-light max-w-md leading-relaxed text-lg">
              {description}
            </p>

            <div className="scroll-prompt mt-20 flex items-center gap-4 text-primary/30">
              <div className="h-[1px] w-12 bg-primary/20"></div>
              <span className="text-xs uppercase tracking-widest">
                Entdecken
              </span>
            </div>
          </div>

          {/* Right Side: Video Wrapper */}
          <div
            className="hero-image-wrapper absolute top-0 right-0 w-[55%] min-h-full h-full overflow-hidden z-0 bg-black will-change-transform backface-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="hero-overlay absolute inset-0 bg-black/0 z-10 pointer-events-none transition-opacity"></div>
            <video
              src={heroVideo}
              poster={heroVideoThumbnail}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Final Text (Centered, Hidden Initially) */}
          <div className="hero-final-text absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none text-center px-4 opacity-0">
            <h2 className="text-8xl lg:text-9xl font-serif text-accent mix-blend-multiply ">
              MA BAU
            </h2>
            <span className="text-primary text-sm uppercase tracking-[0.3em] mb-6 drop-shadow-md">
              Bau & Energie
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
