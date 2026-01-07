import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { AdditionalService } from "../../data/expertiseData";

gsap.registerPlugin(ScrollTrigger);

interface AdditionalServicesGridProps {
  services: AdditionalService[];
}

export const AdditionalServicesGrid: React.FC<AdditionalServicesGridProps> = ({
  services,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for service cards
      const cards = containerRef.current?.querySelectorAll(".service-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            y: 100,
            opacity: 0,
            rotateX: -20,
            scale: 0.9,
            filter: "blur(8px)",
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Header animation
      const header = containerRef.current?.querySelector(".services-header");
      if (header) {
        gsap.fromTo(
          header,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="services-section py-24 md:py-32 bg-primary text-secondary"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="services-header mb-16 md:mb-24 max-w-3xl">
          <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-6">
            Weitere Leistungen
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Komplettlösungen
            <br />
            aus einer Hand.
          </h2>
          <p className="text-gray-400 font-light text-lg leading-relaxed">
            Über Photovoltaik hinaus bieten wir Ihnen ein breites Spektrum an
            Bauleistungen – von Stahlkonstruktionen bis zu Innenausbau.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: AdditionalService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className="service-card group perspective-1000 opacity-0 h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-lg p-8 md:p-10 hover:border-accent/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-accent/10 h-full flex flex-col">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Icon */}
          <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>

          {/* Divider */}
          <div className="w-12 h-[2px] bg-accent/30 mb-6 group-hover:w-20 transition-all duration-500" />

          {/* Description */}
          <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
            {service.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};
