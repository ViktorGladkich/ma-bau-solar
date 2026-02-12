import React from "react";
import { motion, MotionValue } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

interface WhyUsSectionProps {
  whyUsTitle: string;
  whyUsText: string;
  whyUsPoints: string[];
  city: string;
  service: string;
  springY: MotionValue<string>;
}

const useScrollAnimation = () => {
  return {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "circOut" as const },
  };
};

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({
  whyUsTitle,
  whyUsText,
  whyUsPoints,
  city,
  service,
  springY,
}) => {
  return (
    <section className="py-24 bg-[#EAE7DF] px-6 md:px-12 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/30 skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Sticky Content Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div {...useScrollAnimation()}>
              <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-6">
                Warum MA Bau GmbH?
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                {whyUsTitle}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg whitespace-pre-line mb-10">
                {whyUsText}
              </p>

              <div className="space-y-4">
                {whyUsPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                    className="flex items-center gap-4 group p-4 bg-white/50 hover:bg-white rounded-xl transition-colors duration-300 border border-transparent hover:border-accent/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-primary font-medium text-lg">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Side with Floating Card */}
          <div className="lg:col-span-7 relative pt-12 lg:pt-0">
            <motion.div
              style={{ y: springY }}
              className="relative h-[600px] md:h-[800px] w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <img
                  src="/projects/heroProject.jpg"
                  alt={`MA Bau GmbH - ${service} in ${city}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              {/* Floating Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-12 left-6 right-6 md:left-12 md:right-auto md:max-w-md bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-lg border-l-4 border-accent"
              >
                <div className="flex items-center gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-primary font-serif italic text-xl leading-relaxed mb-6">
                  "Hervorragende Arbeit und absolut zuverlässig. Genau der
                  Partner, den man sich in {city} wünscht."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                    KD
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary">
                      Kunde aus {city}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      Projekt: {service}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
