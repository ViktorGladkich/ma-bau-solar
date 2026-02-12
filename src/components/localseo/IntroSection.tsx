import React from "react";
import { motion } from "framer-motion";

interface IntroSectionProps {
  introSubtitle: string;
  introTitle: string;
  city: string;
}

export const IntroSection: React.FC<IntroSectionProps> = ({
  introSubtitle,
  introTitle,
  city,
}) => {
  return (
    <div className="relative z-10 bg-white rounded-t-[3rem] -mt-20 pt-32 pb-24 px-6 md:px-12 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block py-2 px-6 border border-accent/30 rounded-full text-accent text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            {introSubtitle}
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-10 leading-[1.1] text-primary">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="block"
            >
              {introTitle}
            </motion.span>
          </span>
        </h2>

        <div className="flex justify-center mb-10">
          <div className="w-24 h-1 bg-accent rounded-full" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed"
        >
          Als regionales Bauunternehmen sind wir stolz darauf, in {city}{" "}
          hochwertige Bauleistungen anzubieten. Egal ob Sie eine Sanierung
          planen, einen Innenausbau benötigen oder ein komplettes Bauvorhaben
          umsetzen wollen.
        </motion.p>
      </motion.div>
    </div>
  );
};
