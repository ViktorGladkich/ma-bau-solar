import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Capability } from "../../data/expertiseData";

gsap.registerPlugin(ScrollTrigger);

interface CapabilitiesGridProps {
  capabilities: Capability[];
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({
  capabilities,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".cap-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );

      // Cards Animation
      gsap.fromTo(
        ".cap-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".capabilities-grid",
            start: "top 85%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary text-secondary px-6 md:px-12"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="cap-header text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Technische Kompetenz
          </span>
          <h2 className="text-3xl md:text-5xl font-serif">
            Das Werkzeug für Ihre Vision.
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="capabilities-grid grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="cap-card p-6 border border-white/10 hover:bg-white/5 transition-colors duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 text-accent">{cap.icon}</div>
              <h3 className="text-xl font-serif mb-2">{cap.title}</h3>
              <p className="text-sm font-light text-white/60">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
