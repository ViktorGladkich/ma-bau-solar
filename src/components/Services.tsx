import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const services = [
  {
    title: "Freiflächenanlagen",
    desc: "Von der Fläche zur fertigen Anlage – wir setzen Solarprojekte zuverlässig und fachgerecht im Außenbereich um.",
    tags: ["Freiflächen", "Außenbereich", "Großanlagen"],
  },
  {
    title: "Dachanlagen",
    desc: "Ob Neubau oder Bestand – wir übernehmen die bauliche Umsetzung von Solarprojekten auf Hallen-, Industrie- und Gewerbedächern.",
    tags: ["Hallendächer", "Industriedächer", "Gewerbe"],
  },
  {
    title: "Planung",
    desc: "Professionelle Planung und technische Ausarbeitung Ihrer Solaranlage. Von der Machbarkeitsstudie bis zur Detailplanung.",
    tags: ["Machbarkeit", "Auslegung", "Genehmigung"],
  },
  {
    title: "Montage",
    desc: "Fachgerechte Installation durch erfahrene Teams. Termingerechte Umsetzung mit höchsten Qualitätsstandards.",
    tags: ["Installation", "Qualität", "Service"],
  },
];

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT ANIMATIONS
      gsap.utils.toArray<HTMLElement>(".animate-text").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-32 bg-secondary px-6 md:px-12 border-t border-primary/5"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mb-24">
          <span className="animate-text block text-xs font-bold uppercase tracking-widest text-accent mb-8">
            03 — Expertise
          </span>
          <h2
            id="services-heading"
            className="animate-text text-3xl md:text-5xl font-serif leading-tight mb-8"
          >
            Wir begleiten Sie von der Planung bis zur fertigen Anlage. Ein
            durchgängiger Prozess für kompromisslose Qualität.
          </h2>
          <div className="animate-text">
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-primary/30 pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Unser Prozess im Detail <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item group border-t border-primary/20 pt-8 hover:border-primary transition-colors duration-500 grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="animate-text md:col-span-1 text-xs font-mono text-gray-400 mt-2">
                0{index + 1}
              </div>
              <div className="md:col-span-4">
                <h3 className="animate-text text-2xl md:text-3xl font-serif text-primary group-hover:pl-4 transition-all duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="animate-text text-gray-600 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2 content-start justify-end">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="animate-text text-[10px] uppercase tracking-wider border border-primary/10 px-3 py-1 rounded-full text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
