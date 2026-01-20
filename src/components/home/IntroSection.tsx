import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const IntroSection: React.FC = () => {
  return (
    <article className="intro-section py-24 md:py-32 px-6 md:px-12 container mx-auto border-b border-primary/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <span className="animate-text block text-xs font-bold uppercase tracking-widest text-accent mb-6">
            Full Service Solaranlagen
          </span>
          <h2 className="animate-text text-4xl md:text-5xl font-serif leading-[1.1] text-primary">
            Photovoltaik
            <br />
            & Bau
            <br />
            <span className="italic text-accent">professionell</span> umgesetzt.
          </h2>
        </div>
        <div className="lg:col-span-1 hidden lg:block"></div>
        <div className="lg:col-span-6 pt-2">
          <p className="animate-text text-xl text-primary/80 font-light leading-relaxed mb-8">
            Wir sind MA Bau. Ihr Partner für nachhaltige Energielösungen und
            professionelles Handwerk – von der Solaranlage bis zur Renovierung.
          </p>
          <p className="animate-text text-gray-600 font-light leading-relaxed mb-10">
            Unser Ansatz verbindet fundierte Planung mit handwerklicher
            Präzision. Ob Freiflächenanlagen oder Dachmontage auf Hallen-,
            Industrie- und Gewerbedächern – wir übernehmen die komplette
            bauliche Umsetzung Ihrer Solarprojekte.
          </p>
          <div className="animate-text">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors p-2 -ml-2"
            >
              Lernen Sie uns kennen <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
