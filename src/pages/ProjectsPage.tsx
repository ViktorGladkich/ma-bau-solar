import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { projectsData } from "../lib/data";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";

const categories = [
  "Alle",
  "Gewerbe",
  "Industrie",
  "Freifläche",
  "Wohngebäude",
];

// Animation Variants
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants: Variants = {
  hidden: { y: 100, opacity: 0, rotateX: -45 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.05,
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState("Alle");

  const visibleProjects = useMemo(() => {
    return filter === "Alle"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <SEO
        title="Projekte – Realisierte Photovoltaik-Anlagen"
        description="MA Bau GmbH Referenzprojekte ✓ 100+ realisierte Photovoltaik-Anlagen ✓ Freiflächen, Industrie- & Gewerbedächer ✓ 42+ MWp installiert ✓ Deutschland, Österreich & Europa ✓ Erfolgreiche Solar-Projekte ansehen"
        keywords="MA Bau Projekte, Photovoltaik Referenzen, Solar Projekte, PV Anlagen Beispiele, Freifläche Referenz, Industriedach Projekt, Gewerbedach Solar, MA Bau Referenzen, Photovoltaik Portfolio"
        url="https://mabaugmbh.de/projects"
      />
      <div className="bg-[#111] min-h-[100svh] w-full text-[#EAE7DF] selection:bg-accent selection:text-white overflow-x-hidden">
        {/* --- HERO SECTION --- */}
        <header className="relative w-full min-h-[60svh] md:min-h-[70svh] flex flex-col justify-end pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-[#111]/30 z-10" />
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="/projects/heroProject.jpg"
              alt="Projekte Hintergrund"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 md:px-12 relative z-20">
            {/* Main Title */}
            <div className="relative overflow-hidden mb-6 md:mb-12">
              <h1 className="text-[17vw] sm:text-[14vw] md:text-[12vw] font-serif font-medium leading-[0.8] tracking-tighter uppercase mix-blend-overlay text-white/90 break-words perspective-1000">
                {"Projekte".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Description & Filters Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 border-t border-white/20 pt-6 md:pt-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="max-w-md text-gray-300 font-light text-sm md:text-lg leading-relaxed"
              >
                Unsere realisierten Bauprojekte – von Großanlagen bis zu
                maßgeschneiderten Lösungen. Jedes Projekt ein Schritt in
                Richtung Zukunft.
              </motion.p>

              {/* Filter Tabs */}
              <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="w-full lg:w-auto overflow-x-auto overflow-y-hidden pb-2 lg:pb-0 scrollbar-hide no-scrollbar"
              >
                <div className="flex flex-nowrap items-center gap-6 md:gap-8 min-w-max">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`relative py-2 text-xs md:text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${
                        filter === cat
                          ? "text-white font-bold"
                          : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      {cat}
                      {filter === cat && (
                        <motion.div
                          layoutId="activeFilter"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </motion.nav>
            </div>
          </div>
        </header>

        {/* --- PHILOSOPHY SECTION --- */}
        <section className="bg-[#111] py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

          <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
              <motion.div
                className="md:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-accent"></div>
                  <span className="text-accent uppercase tracking-widest text-xs font-bold">
                    Über uns
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1]">
                  Qualität, die <br />
                  <span className="text-gray-600 italic font-light">
                    bleibt.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="md:col-span-7 md:pl-8 lg:pl-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-10">
                  Wir bei MA Bau glauben daran, dass jedes Bauprojekt mehr ist
                  als nur Beton und Stahl. Es ist ein Versprechen an die
                  Zukunft.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-500 font-light leading-relaxed">
                  <p>
                    Ob energieeffiziente Sanierung, moderner Innenausbau oder
                    komplexe Großprojekte – unser Anspruch ist handwerkliche
                    Präzision bis ins kleinste Detail.
                  </p>
                  <p>
                    Mit einem Team aus erfahrenen Spezialisten und einem
                    Netzwerk regionaler Partner realisieren wir Bauvorhaben, die
                    funktional, ästhetisch und langlebig sind.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- PROJECT GRID --- */}
        <div className="bg-[#EAE7DF] w-full min-h-screen py-20 md:py-32 rounded-t-[3rem] relative z-10 -mt-12">
          <div className="container mx-auto px-4 md:px-12">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-40 auto-rows-min"
            >
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => {
                  // Determine layout style based on index ("Editorial Scatter" pattern)
                  const isWide = index % 3 === 0;
                  const isTall = index % 3 === 1;

                  let gridClass = "";
                  let aspectClass = "";

                  if (isWide) {
                    gridClass = "md:col-span-7";
                    aspectClass = "aspect-[4/3] md:aspect-[16/10]";
                  } else if (isTall) {
                    gridClass = "md:col-span-4 md:col-start-9 md:mt-32";
                    aspectClass = "aspect-[3/4]";
                  } else {
                    gridClass = "md:col-span-6 md:col-start-4";
                    aspectClass = "aspect-[1/1] md:aspect-[4/3]";
                  }

                  return (
                    <motion.div
                      layout
                      key={project.id}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      exit="hidden"
                      viewport={{ once: true, margin: "-100px" }}
                      className={`group w-full ${gridClass}`}
                    >
                      <Link to={`/projects/${project.slug}`} className="block">
                        {/* Card Image */}
                        <div
                          className={`relative ${aspectClass} overflow-hidden rounded-[2.5rem] mb-8 bg-gray-200 shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              duration: 0.7,
                              ease: [0.33, 1, 0.68, 1],
                            }} // Custom cubic bezier for premium feel
                            className="w-full h-full"
                          >
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover transition-all duration-700"
                            />
                          </motion.div>

                          {/* Hover Overlay with Button */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                              <ArrowRight className="text-white w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                          </div>

                          {/* Year Badge */}
                          <div className="absolute top-6 right-6 z-10">
                            <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-bold uppercase py-2 px-4 tracking-widest rounded-full shadow-lg">
                              {project.year}
                            </span>
                          </div>
                        </div>

                        {/* Card Content - Dynamic Alignment */}
                        <div
                          className={`flex flex-col gap-3 relative px-4 ${isTall ? "md:text-right md:items-end" : ""}`}
                        >
                          <div className="flex justify-between items-baseline w-full border-b border-primary/10 pb-4 mb-2 group-hover:border-accent/50 transition-colors duration-500">
                            <span className="text-sm font-bold text-accent uppercase tracking-widest">
                              {project.category}
                            </span>
                            <span className="text-xs text-gray-400 font-mono">
                              0{index + 1}
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-5xl font-serif text-primary leading-none group-hover:text-accent transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p
                            className={`text-gray-500 font-light text-base md:text-lg line-clamp-2 mt-2 max-w-md ${isTall ? "md:mr-0" : ""}`}
                          >
                            {project.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {visibleProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center text-gray-500 font-serif text-xl"
              >
                Keine Projekte in dieser Kategorie gefunden.
              </motion.div>
            )}

            {/* --- CTA SECTION --- */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-32 md:mt-64 relative bg-[#111] text-white rounded-2xl overflow-hidden px-8 py-20 md:py-32 text-center"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif mb-8">
                  Bereit für Ihr <br />
                  <span className="text-accent">nächstes Projekt?</span>
                </h2>
                <p className="text-gray-400 font-light text-lg mb-10">
                  Lassen Sie uns gemeinsam Ihre Vision realisieren.{" "}
                  <br className="hidden md:block" />
                  Von der ersten Skizze bis zur Übergabe.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 group"
                >
                  Kontakt aufnehmen
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
};
