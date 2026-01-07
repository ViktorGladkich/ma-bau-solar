import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SustainabilitySectionProps {
  points: string[];
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  points,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header slide in
      gsap.fromTo(
        ".sust-header",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      // Description fade up
      gsap.fromTo(
        ".sust-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );

      // List items stagger
      gsap.fromTo(
        ".sust-list li",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sust-list",
            start: "top 85%",
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        ".sust-image",
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sust-image",
            start: "top 85%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <div className="sust-header">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
              Verantwortung
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
              Nachhaltigkeit
              <br />
              ist kein Trend.
            </h2>
          </div>

          <p className="sust-text text-gray-600 font-light leading-relaxed text-lg mb-8">
            Temporäre Architektur erzeugt oft permanenten Müll. Wir ändern das.
            Unser "Green Stand"-System setzt auf Modularität,
            Wiederverwendbarkeit und recycelbare Materialien. Wir kompensieren
            den CO2-Fußabdruck jedes Transports und arbeiten mit lokalen
            Partnern, um Emissionen zu minimieren.
          </p>

          <ul className="sust-list space-y-4 font-serif text-primary text-xl">
            {points.map((point, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="sust-image relative h-[400px] md:h-[600px] overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2513&auto=format&fit=crop"
            alt="Nachhaltige Materialien"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
      </div>
    </section>
  );
};
