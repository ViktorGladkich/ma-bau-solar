import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  title: string;
  linkText: string;
  linkTo: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  linkText,
  linkTo,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-6 md:px-12 mt-16 text-center pb-32"
    >
      <h2 className="text-3xl md:text-5xl font-serif mb-8">{title}</h2>
      <Link
        to={linkTo}
        className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest border-b border-primary pb-2 hover:text-accent hover:border-accent transition-colors"
      >
        <span>{linkText}</span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </div>
  );
};
