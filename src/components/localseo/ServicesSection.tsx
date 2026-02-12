import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Hammer, HardHat, Ruler, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  servicesTitle: string;
  servicesText: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  servicesTitle,
  servicesText,
}) => {
  return (
    <section className="py-32 bg-white px-6 md:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight"
          >
            {servicesTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 font-light leading-relaxed text-lg whitespace-pre-line"
          >
            {servicesText}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck size={40} className="text-accent" />,
              title: "Qualitätsgarantie",
              desc: "Wir arbeiten streng nach deutschen Qualitätsstandards und DIN-Normen.",
            },
            {
              icon: <Hammer size={40} className="text-accent" />,
              title: "Meisterhandwerk",
              desc: "Langjährige Erfahrung und geschultes Fachpersonal für beste Ergebnisse.",
            },
            {
              icon: <HardHat size={40} className="text-accent" />,
              title: "Sicherheit",
              desc: "Verlässliche Planung, Kostensicherheit und termingerechte Umsetzung.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative p-10 bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-2xl rounded-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                <Ruler size={120} />
              </div>

              <div className="mb-8 p-4 w-fit rounded-2xl bg-gray-50 group-hover:bg-accent/10 transition-colors duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-8 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowRight size={14} className="text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
