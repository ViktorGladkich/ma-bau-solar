import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ReferencesSectionProps {
  referencesTitle: string;
  referencesText: string;
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({
  referencesTitle,
  referencesText,
}) => {
  return (
    <section className="py-32 bg-[#111] text-white px-6 md:px-12 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-accent"></span>
              Referenzen
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {referencesTitle}
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-xl mb-12">
              {referencesText}
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-4 text-white uppercase tracking-widest text-sm hover:text-accent transition-colors group"
            >
              Alle Projekte ansehen
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-12 space-y-6"
            >
              <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative group">
                <img
                  src="/projects/ref_commercial.png"
                  alt="Referenz Gewerbebau"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="aspect-[4/5] bg-white/5 rounded-lg overflow-hidden relative group">
                <img
                  src="/projects/ref_interior.png"
                  alt="Referenz Innenausbau"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="aspect-[4/5] bg-white/5 rounded-lg overflow-hidden relative group">
                <img
                  src="/projects/ref_drywall.png"
                  alt="Referenz Trockenbau"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative group">
                <img
                  src="/projects/ref_modern_house.png"
                  alt="Referenz Neubau"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
