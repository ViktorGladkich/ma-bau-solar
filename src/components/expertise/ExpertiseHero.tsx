import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface ExpertiseHeroProps {
  title: string;
  subtitle: React.ReactNode;
  description: string;
  backgroundImage: string;
}

export const ExpertiseHero: React.FC<ExpertiseHeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
}) => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Adjust height for mobile Safari
    if (headerRef.current && window.matchMedia("(max-width: 767px)").matches) {
      headerRef.current.style.height = `${window.innerHeight}px`;
    }

    // Hero Animations
    const ctx = gsap.context(() => {
      // Title letters animation
      gsap.fromTo(
        ".hero-char",
        { y: 150, opacity: 0, rotateX: -90, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.05,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );

      // Subtitle reveal
      gsap.fromTo(
        ".hero-sub",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.6,
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative w-full h-dvh flex flex-col justify-end pb-16 md:pb-24 overflow-hidden transform-gpu"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-[#111]/30 z-10" />
        <img
          src={backgroundImage}
          className="w-full h-full object-cover opacity-80"
          alt="Hintergrund"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12">
        {/* Animated Title */}
        <h1 className="text-[14vw] md:text-[13vw] font-serif leading-[0.85] text-white/90 tracking-tighter uppercase overflow-hidden mb-8 md:mb-12">
          {title.split("").map((char, i) => (
            <span key={i} className="hero-char inline-block origin-bottom">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Subtitle Section */}
        <div className="hero-sub grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 max-w-5xl border-t border-white/10 pt-8 md:pt-12">
          <h2 className="text-2xl md:text-3xl font-serif leading-tight text-white">
            {subtitle}
          </h2>
          <p className="text-sm md:text-lg font-light leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
};
