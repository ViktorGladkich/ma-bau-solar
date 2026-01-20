import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service cards
      const serviceCards = gsap.utils.toArray<HTMLElement>(".service-card");
      serviceCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-white via-secondary/30 to-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-16 bg-gradient-to-r from-accent to-accent/0"></div>
            <span className="animate-text text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Unsere Leistungen
            </span>
          </div>
          <h2 className="animate-text text-5xl md:text-6xl font-serif text-primary leading-[0.95] mb-8">
            Mehr als nur
            <br />
            <span className="italic text-accent">Photovoltaik.</span>
          </h2>
          <p className="animate-text text-xl md:text-2xl text-primary/60 font-light leading-relaxed max-w-2xl">
            Von erneuerbaren Energien bis zu vielseitigen Handwerksleistungen –
            wir bieten Ihnen umfassende Lösungen aus einer Hand.
          </p>
        </div>

        {/* Premium Services Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-8">
          {/* Service 1: Photovoltaik - Large Featured Card */}
          <Link
            to="/expertise"
            className="service-card lg:col-span-7 group relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-sm min-h-[500px] md:min-h-[600px] flex flex-col justify-end p-8 md:p-12 transition-all duration-700 hover:shadow-2xl cursor-pointer"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            {/* Icon */}
            <div className="relative mb-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/30 transition-all duration-500 group-hover:scale-110">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl lg:text-6xl font-serif text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                Photovoltaik
              </h3>
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl">
                Professionelle Planung und Installation von Solaranlagen – von
                Freiflächenanlagen bis zur Dachmontage auf Industrie- und
                Gewerbedächern.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-serif text-accent mb-1">
                    42+ MWp
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-widest">
                    Installiert
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-serif text-accent mb-1">
                    100+
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-widest">
                    Projekte
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-accent group-hover:gap-5 transition-all duration-300">
                <span className="text-sm uppercase tracking-[0.2em] font-medium">
                  Mehr erfahren
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </Link>

          {/* Service 2: Renovierung - Medium Card */}
          <Link
            to="/expertise"
            className="service-card lg:col-span-5 group relative overflow-hidden bg-white border border-primary/10 rounded-sm min-h-[500px] md:min-h-[600px] flex flex-col justify-end p-8 md:p-10 transition-all duration-700 hover:shadow-2xl hover:border-accent/30 cursor-pointer"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>

            {/* Icon */}
            <div className="relative mb-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-serif text-primary mb-5 group-hover:text-accent transition-colors duration-500">
                Renovierung
              </h3>
              <p className="text-primary/60 text-base md:text-lg font-light leading-relaxed mb-8">
                Hochwertige Renovierungsarbeiten für Wohn- und
                Gewerbeimmobilien. Wir bringen Ihre Räume auf den neuesten
                Stand.
              </p>

              <div className="flex items-center gap-3 text-primary group-hover:text-accent group-hover:gap-5 transition-all duration-300">
                <span className="text-sm uppercase tracking-[0.2em] font-medium">
                  Mehr erfahren
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </Link>
        </div>

        {/* Service 3: Bauarbeiten & Handwerk - Full Width Card */}
        <Link
          to="/expertise"
          className="service-card group relative overflow-hidden bg-gradient-to-r from-secondary via-white to-secondary border border-primary/10 rounded-sm min-h-[400px] flex flex-col md:flex-row items-end md:items-center justify-between p-8 md:p-12 transition-all duration-700 hover:shadow-2xl hover:border-accent/30 cursor-pointer"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)",
              }}
            ></div>
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex-1 mb-8 md:mb-0">
            {/* Icon */}
            <div className="mb-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary mb-5 group-hover:text-accent transition-colors duration-500 max-w-md">
              Bauarbeiten & Handwerk
            </h3>
            <p className="text-primary/60 text-base md:text-lg font-light leading-relaxed max-w-xl">
              Vielseitige Handwerksleistungen – von Stahlunterbauten und
              Trockenbau bis zu Abrissarbeiten und Malerarbeiten.
            </p>
          </div>

          {/* Right Content - Service Tags */}
          <div className="relative z-10 flex flex-wrap gap-3 max-w-md">
            {[
              "Stahlunterbauten",
              "Trockenbau",
              "Abrissarbeiten",
              "Malerarbeiten",
            ].map((service, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white border border-primary/10 rounded-full text-sm text-primary/70 group-hover:border-accent/30 group-hover:text-accent transition-all duration-300"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
        </Link>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-24 text-center">
          <p className="animate-text text-primary/60 font-light text-lg mb-8">
            Interessiert an unseren Leistungen?
          </p>
          <Link
            to="/expertise"
            className="group inline-flex items-center gap-4 bg-primary text-white px-10 py-5 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10">Alle Leistungen ansehen</span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
            />

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};
