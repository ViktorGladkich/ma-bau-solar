import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import footerBanner from "../../assets/footerBanner.webp";

interface CTASectionProps {
  ctaTitle: string;
  city: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ ctaTitle, city }) => {
  const { scrollYProgress } = useScroll(); // Could pass ref for section-specific scroll
  const y = useTransform(scrollYProgress, [0.8, 1], ["-20%", "0%"]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{
          y,
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src={footerBanner}
          className="w-full h-full object-cover filter brightness-[0.4]"
          alt="Hintergrund"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block text-accent text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6"
        >
          Starten Sie Ihr Projekt in {city}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-7xl font-serif text-white mb-8 md:mb-10 leading-none break-words"
        >
          {ctaTitle}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-primary px-6 py-4 md:px-8 md:py-5 text-xs md:text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-accent hover:text-white rounded-full hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]"
          >
            <span className="relative z-10 font-bold whitespace-nowrap">
              Beratung in {city} anfordern
            </span>
            <ArrowRight
              size={16}
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
