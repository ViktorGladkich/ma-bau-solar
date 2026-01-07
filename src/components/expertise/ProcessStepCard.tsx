import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProcessStep } from "../../data/expertiseData";

gsap.registerPlugin(ScrollTrigger);

interface ProcessStepCardProps {
  step: ProcessStep;
  isReversed: boolean;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  step,
  isReversed,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Image - Clip-path reveal from center
      const imgContainer = section.querySelector(".process-img-container");
      if (imgContainer) {
        gsap.fromTo(
          imgContainer,
          {
            clipPath: "inset(0 50% 0 50%)",
          },
          {
            clipPath: "inset(0 0% 0 0%)",
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      }

      // Step Number - Scale up with blur
      const stepNumber = section.querySelector(".step-number");
      if (stepNumber) {
        gsap.fromTo(
          stepNumber,
          { scale: 0.5, opacity: 0, filter: "blur(10px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      }

      // Title - Slide in from side
      const title = section.querySelector(".step-title");
      if (title) {
        gsap.fromTo(
          title,
          { x: isReversed ? 60 : -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
            },
          }
        );
      }

      // Divider - Scale from left
      const divider = section.querySelector(".step-divider");
      if (divider) {
        gsap.fromTo(
          divider,
          { scaleX: 0, transformOrigin: isReversed ? "right" : "left" },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        );
      }

      // Paragraph - Fade up with blur
      const paragraph = section.querySelector(".step-text");
      if (paragraph) {
        gsap.fromTo(
          paragraph,
          { y: 30, opacity: 0, filter: "blur(4px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [isReversed]);

  return (
    <div
      ref={sectionRef}
      className="process-section relative md:min-h-[80svh] flex items-center border-t border-primary/10 md:sticky md:top-0 bg-secondary"
    >
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div
          className={`flex flex-col md:flex-row gap-12 md:gap-16 items-center ${
            isReversed ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="process-img-container w-full md:w-1/2 overflow-hidden h-[300px] md:h-[600px] relative group rounded-sm shadow-md">
            <img
              src={step.image}
              alt={step.title}
              className="process-img w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="process-content w-full md:w-1/2">
            <span className="step-number text-4xl md:text-8xl font-serif text-primary/10 block mb-4 md:mb-6">
              {step.id}
            </span>
            <h3 className="step-title text-2xl md:text-4xl font-serif text-primary mb-6">
              {step.title}
            </h3>
            <div className="step-divider w-12 h-[1px] bg-accent mb-6"></div>
            <p className="step-text text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-md">
              {step.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
