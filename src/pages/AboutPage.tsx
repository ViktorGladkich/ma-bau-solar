import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import heroAbout from "../assets/heroAbout.jpg";
import { milestones, awards } from "../data/aboutPageData";

export const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (headerRef.current && window.matchMedia("(max-width: 767px)").matches) {
      headerRef.current.style.height = `${window.innerHeight}px`;
    }

    const ctx = gsap.context(() => {
      // 1. Hero Reveal
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

      gsap.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
      );

      // 2. Manifesto Highlight
      const text = document.querySelector(".manifesto-text");
      if (text) {
        const words = text.querySelectorAll(".word");
        gsap.fromTo(
          words,
          { color: "#333" },
          {
            color: "#EAE7DF",
            stagger: 0.1,
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      }

      // 3. Timeline Sticky Logic (Desktop Only)
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          ScrollTrigger.create({
            trigger: ".timeline-section",
            start: "top top",
            end: "bottom bottom",
            pin: ".timeline-left",
            pinSpacing: false,
          });

          // Change the Year based on scroll position
          milestones.forEach((item, index) => {
            ScrollTrigger.create({
              trigger: `#milestone-${index}`,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                const yearEl = document.getElementById("sticky-year");
                if (yearEl) yearEl.innerText = item.year;
                gsap.fromTo(
                  "#sticky-year",
                  { y: 20, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.4 }
                );
              },
              onEnterBack: () => {
                const yearEl = document.getElementById("sticky-year");
                if (yearEl) yearEl.innerText = item.year;
                gsap.fromTo(
                  "#sticky-year",
                  { y: -20, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.4 }
                );
              },
            });
          });
        },
      });

      // 4. Team List Hover Animation
      gsap.utils.toArray<HTMLElement>(".team-row").forEach((row) => {
        gsap.fromTo(
          row,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: { trigger: row, start: "top 90%" },
          }
        );
      });

      // 5. Stats Counter
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((stat) => {
        const endValue = parseInt(stat.getAttribute("data-value") || "0");
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: stat, start: "top 85%" },
          }
        );
      });

      // 6. Section fade-in animations
      gsap.utils.toArray<HTMLElement>(".section-fade").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 7. Timeline items stagger animation
      gsap.utils
        .toArray<HTMLElement>(".timeline-item")
        .forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              y: 100,
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
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            }
          );
        });

      // 8. Awards list animation
      gsap.utils.toArray<HTMLElement>(".award-item").forEach((award, index) => {
        gsap.fromTo(
          award,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: award,
              start: "top 90%",
            },
            delay: index * 0.1,
          }
        );
      });

      // 9. Stats section stagger
      gsap.fromTo(
        ".stat-item",
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
          },
        }
      );

      // 10. CTA section reveal
      gsap.fromTo(
        ".cta-content",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
          },
        }
      );

      // 11. Awards header animation
      gsap.fromTo(
        ".awards-header",
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
            trigger: ".awards-section",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Über MA Bau GmbH – Photovoltaik Experte seit 2020"
        description="MA Bau GmbH Dresden – Seit 2020 Ihr zuverlässiger Partner für Photovoltaik ✓ 42+ MWp installiert ✓ 100+ erfolgreiche Projekte ✓ 5 Jahre Erfahrung ✓ Deutschland, Österreich & Europa ✓ Qualität aus Dresden"
        keywords="MA Bau Geschichte, MA Bau GmbH Dresden, Photovoltaik Experte Dresden, Solar Unternehmen Dresden, PV Montage Firma, Solaranlage Spezialist, MA Bau Team, Photovoltaik Erfahrung"
        url="https://mabaugmbh.de/about"
      />

      <div
        ref={containerRef}
        className="bg-[#111] min-h-[100svh] text-[#EAE7DF] selection:bg-accent selection:text-white"
      >
        {/* --- 1. HERO SECTION (FULL WIDTH) --- */}
        <header
          ref={headerRef}
          className="relative w-full h-[100vh] md:h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden transform-gpu"
        >
          {/* Header Background Image (Full Width) */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-[#111]/30 z-10" />
            <img
              src={heroAbout}
              className="w-full h-full object-cover opacity-80"
              alt="Hintergrund"
            />
          </div>

          <div className="relative z-20 container mx-auto px-6 md:px-12">
            <h1 className="text-[14vw] md:text-[13vw] font-serif leading-[0.85] tracking-tighter uppercase overflow-hidden mb-8 md:mb-12">
              {"MA BAU".split("").map((char, i) => (
                <span key={i} className="hero-char inline-block origin-bottom">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <div className="hero-sub grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl border-t border-white/10 pt-8 md:pt-12">
              <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-300">
                Seit 2020 in Dresden verwurzelt, europaweit tätig. Ihr
                zuverlässiger Partner für nachhaltige Energielösungen und
                professionelles Handwerk. Von großflächigen Solaranlagen über
                Industriemontagen bis zu hochwertigen Renovierungen – wir setzen
                Ihr Projekt mit Präzision, Erfahrung und Leidenschaft um.
              </p>
            </div>
          </div>
        </header>

        {/* --- 2. MANIFESTO (SCROLL REVEAL) --- */}
        <section className="py-24 md:py-48 px-6 md:px-12 container mx-auto">
          <div className="manifesto-text text-3xl md:text-6xl lg:text-7xl font-serif leading-[1.3] max-w-5xl mx-auto text-center">
            {"Qualität ist kein Zufall. Sie ist das Ergebnis von Erfahrung und Präzision. Wir glauben an Komponenten, die Jahrzehnte halten. Wir glauben an Arbeit, die Wert schafft."
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="word inline-block mr-2 md:mr-3 transition-colors duration-300"
                >
                  {word}
                </span>
              ))}
          </div>
        </section>

        {/* --- 3. THE JOURNEY (TIMELINE) --- */}
        <section className="timeline-section relative py-24 md:py-32 border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row">
            {/* Left: Sticky Year (Desktop Only) */}
            <div className="timeline-left hidden md:flex md:w-1/3 md:h-[100svh] sticky top-0 flex-col justify-center pb-32 md:pb-0">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
                Die Historie
              </span>
            </div>

            {/* Right: Scrolling Content */}
            <div className="timeline-right w-full md:w-2/3 flex flex-col gap-24 md:gap-48 pb-16 md:pb-32">
              {milestones.map((item, index) => (
                <div
                  id={`milestone-${index}`}
                  key={index}
                  className="timeline-item flex flex-col gap-6 md:gap-8 group"
                >
                  {/* Mobile Date Header */}
                  <div className="md:hidden flex items-end gap-4 border-b border-white/10 pb-4">
                    <span className="text-5xl font-serif text-[#EAE7DF] leading-none">
                      {item.year}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                      Meilenstein
                    </span>
                  </div>

                  <div className="w-full aspect-video overflow-hidden rounded-sm bg-white/5 relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-4xl font-serif mb-4 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: AWARDS & RECOGNITION --- */}
        <section className="awards-section py-24 bg-[#1a1a1a] border-y border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="awards-header">
                <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-6">
                  Unsere Leistung
                </span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                  Installierte
                  <br />
                  Kapazität.
                </h2>
                <p className="text-gray-400 font-light leading-relaxed max-w-md">
                  Seit unserer Gründung in Dresden im Jahr 2020 haben wir über
                  42 MWp Solarleistung erfolgreich installiert – auf Dächern und
                  Freiflächen in ganz Deutschland, Österreich und weiteren
                  europäischen Ländern. Qualität made in Dresden, Vertrauen
                  europaweit.
                </p>
              </div>

              <div className="flex flex-col">
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className="award-item flex items-center justify-between py-6 border-b border-white/10 group hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      <div>
                        <span className="block text-xl font-serif text-white">
                          {award.name}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-gray-500">
                          {award.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-gray-500 group-hover:text-white transition-colors">
                      {award.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. TEAM (INTERACTIVE LIST) --- TEMPORARILY COMMENTED OUT
        <section className="py-24 md:py-32 bg-[#EAE7DF] text-[#111]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16 md:mb-24">
              <h2 className="text-5xl md:text-8xl font-serif tracking-tight">
                Team
              </h2>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="team-row group relative border-t border-[#111]/10 py-8 md:py-10 cursor-pointer transition-colors hover:bg-white"
                    onMouseEnter={() => setHoveredMember(index)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4 md:gap-8">
                        <span className="text-xs font-mono text-gray-400">
                          0{index + 1}
                        </span>
                        <h3 className="text-2xl md:text-5xl font-serif group-hover:translate-x-4 transition-transform duration-300">
                          {member.name}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                        <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-accent transition-colors">
                          {member.role}
                        </span>
                        <div className="hidden md:flex w-8 h-8 items-center justify-center border border-[#111]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Plus size={16} />
                        </div>
                      </div>
                    </div>

                    <div className="md:hidden mt-6 mb-2 overflow-hidden rounded-sm relative w-full aspect-[4/5] bg-gray-200">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 text-[10px] uppercase tracking-widest font-bold">
                        Berlin Studio
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-[#111]/10"></div>
              </div>

              <div className="hidden lg:block fixed top-1/2 right-[15vw] w-[300px] h-[400px] pointer-events-none z-20 mix-blend-multiply transform -translate-y-1/2">
                {team.map((member, index) => (
                  <img
                    key={index}
                    src={member.img}
                    alt={member.name}
                    className={`absolute inset-0 w-full h-full object-cover shadow-2xl transition-all duration-500 ease-out ${
                      hoveredMember === index
                        ? "opacity-100 scale-100 rotate-2"
                        : "opacity-0 scale-90 -rotate-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* --- 5. STATS --- */}
        <section className="py-24 md:py-32 bg-[#111] border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
              <div className="stat-item flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-serif text-white mb-2 block">
                  <span className="stat-number" data-value="5">
                    0
                  </span>
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
                  Jahre Erfahrung
                </span>
              </div>
              <div className="stat-item flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-serif text-white mb-2 block">
                  <span className="stat-number" data-value="42">
                    0
                  </span>
                  +
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
                  MWp installiert
                </span>
              </div>
              <div className="stat-item flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-serif text-white mb-2 block">
                  <span className="stat-number" data-value="100">
                    0
                  </span>
                  +
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
                  Projekte
                </span>
              </div>
              <div className="stat-item flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-serif text-white mb-2 block">
                  <span className="stat-number" data-value="100">
                    0
                  </span>
                  %
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
                  Zufriedenheit
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. CTA --- */}
        <section className="cta-section py-24 md:py-32 bg-[#1a1a1a] text-center relative overflow-hidden">
          <div className="cta-content container mx-auto px-6 relative z-10">
            <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-6 md:mb-8">
              Let's Talk
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 md:mb-12">
              Bereit für <span className="italic text-accent">Exzellenz?</span>
            </h2>
            <Link
              to="/contact"
              className="inline-block px-10 md:px-12 py-4 md:py-5 border border-white/20 text-white text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all duration-300"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
