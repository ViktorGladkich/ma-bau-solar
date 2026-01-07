import React, { useEffect } from "react";
import { SEO } from "../components/SEO";
import {
  ExpertiseHero,
  ProcessStepCard,
  CapabilitiesGrid,
  SustainabilitySection,
  CTASection,
  AdditionalServicesGrid,
} from "../components/expertise";
import {
  processes,
  capabilities,
  sustainabilityPoints,
  additionalServices,
} from "../data/expertiseData";

/**
 * ExpertisePage - Leistungen
 *
 * Displays the company's services, process steps, capabilities,
 * and sustainability commitment.
 *
 * Structure:
 * 1. Hero Section - Full-screen cinematic header
 * 2. Process Steps - Sticky scroll sections with parallax
 * 3. Capabilities Grid - Technical competencies
 * 4. Sustainability Section - Environmental commitment
 * 5. Additional Services - Construction services beyond solar (3D cards)
 * 6. CTA Section - Call to action
 */
export const ExpertisePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Expertise & Leistungen"
        description="Unser Prozess von der Planung bis zur Inbetriebnahme. Solaranlagen für Freiflächen und Dächer aus einer Hand."
      />

      <div className="bg-secondary min-h-dvh overflow-x-hidden">
        {/* Hero Section */}
        <ExpertiseHero
          title="Leistungen"
          subtitle={
            <>
              Von der Planung zur{" "}
              <span className="italic text-accent">fertigen Anlage.</span>
            </>
          }
          description="Wir verstehen uns nicht nur als Monteure, sondern als Partner für Ihre Energiezukunft. Unser Prozess ist transparent, strukturiert und auf Qualität ausgerichtet."
          backgroundImage="/hero-leistungen.jpg"
        />

        {/* Process Steps */}
        <div className="flex flex-col gap-0 mb-32">
          {processes.map((process, index) => (
            <ProcessStepCard
              key={process.id}
              step={process}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* Capabilities Grid */}
        <CapabilitiesGrid capabilities={capabilities} />

        {/* Sustainability Section */}
        <SustainabilitySection points={sustainabilityPoints} />

        {/* Additional Services */}
        <AdditionalServicesGrid services={additionalServices} />

        {/* Call to Action */}
        <CTASection
          title="Bereit für den nächsten Schritt?"
          linkText="Projekt anfragen"
          linkTo="/contact"
        />
      </div>
    </>
  );
};
