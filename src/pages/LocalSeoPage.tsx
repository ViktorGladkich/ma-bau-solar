import React, { useRef } from "react";
import { Hero } from "../components/Hero";
import { SEO } from "../components/SEO";
import { Projects } from "../components/Projects";
import { useScroll, useTransform, useSpring } from "framer-motion";

// Data
import { contentMap } from "../data/localSeoContent";
import type { ServiceType } from "../data/localSeoContent";

// Components
import { IntroSection } from "../components/localseo/IntroSection";
import { WhyUsSection } from "../components/localseo/WhyUsSection";
import { ServicesSection } from "../components/localseo/ServicesSection";
import { ReferencesSection } from "../components/localseo/ReferencesSection";
import { CTASection } from "../components/localseo/CTASection";

interface LocalSeoPageProps {
  service: ServiceType;
  city: string;
}

export const LocalSeoPage: React.FC<LocalSeoPageProps> = ({
  service,
  city,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Shared scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const content = contentMap[service];

  if (!content) {
    console.error(`LocalSeoPage: Content not found for service "${service}"`);
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary text-primary">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Seite nicht gefunden</h1>
          <p>Für den Service "{service}" sind keine Inhalte hinterlegt.</p>
          <a href="/" className="text-accent underline mt-4 block">
            Zurück zur Startseite
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={content.seoTitle(city)}
        description={content.seoDesc(city)}
        keywords={content.keywords(city)}
        url={`https://mabaugmbh.de/${service.toLowerCase()}-${city.toLowerCase()}`}
      />

      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "MA Bau GmbH",
            image: "https://mabaugmbh.de/logo/logo-Mabau.png",
            telephone: "+49 176 32187740",
            email: "info@ma-bau-gmbh.de",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rubensweg 1",
              addressLocality: "Dresden",
              postalCode: "01217",
              addressCountry: "DE",
            },
            areaServed: {
              "@type": "City",
              name: city,
            },
            priceRange: "$$",
            description: content.seoDesc(city),
            url: `https://mabaugmbh.de/${service.toLowerCase()}-${city.toLowerCase()}`,
          }),
        }}
      />

      <div ref={containerRef} className="bg-secondary overflow-hidden">
        <Hero
          title={content.heroTitle(city)}
          subtitle={content.heroSubtitle(city)}
          description={content.heroDescription(city)}
        />

        <IntroSection
          introSubtitle={content.introSubtitle}
          introTitle={content.introTitle(city)}
          city={city}
        />

        <WhyUsSection
          whyUsTitle={content.whyUsTitle}
          whyUsText={content.whyUsText(city)}
          whyUsPoints={content.whyUsPoints}
          city={city}
          service={service}
          springY={springY}
        />

        <ServicesSection
          servicesTitle={content.servicesTitle(city)}
          servicesText={content.servicesText(city)}
        />

        <ReferencesSection
          referencesTitle={content.referencesTitle(city)}
          referencesText={content.referencesText(city)}
        />

        <Projects />

        <CTASection ctaTitle={content.ctaTitle(city)} city={city} />
      </div>
    </>
  );
};
