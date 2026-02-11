import React from "react";
import { Hero } from "../components/Hero";
import { SEO } from "../components/SEO";
import { Projects } from "../components/Projects";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import footerBanner from "../assets/footerBanner.webp";
import { IntroSection, ServicesSection } from "../components/home";

interface LocalSeoPageProps {
  service: "Bauunternehmen" | "Sanierung" | "Innenausbau" | "Trockenbau";
  city: string;
}

const contentMap = {
  Bauunternehmen: {
    heroTitle: (city: string) => (
      <>
        Ihr Bauunternehmen
        <br />
        <span className="italic text-accent">in {city}.</span>
      </>
    ),
    heroSubtitle: (city: string) => `MA Bau GmbH – Bauunternehmen ${city}`,
    heroDescription: (city: string) =>
      `Als erfahrenes Bauunternehmen in ${city} realisieren wir Ihre Bauprojekte mit höchster Präzision und Qualität. Von der Planung bis zur Fertigstellung sind wir Ihr Partner für nachhaltiges Bauen.`,
    seoTitle: (city: string) =>
      `Bauunternehmen ${city} – MA Bau GmbH | Zuverlässig & Kompetent`,
    seoDesc: (city: string) =>
      `Ihr zuverlässiges Bauunternehmen in ${city}. ✓ Hochbau & Tiefbau ✓ Sanierung ✓ Neubau. 100+ erfolgreiche Projekte. Jetzt unverbindlich anfragen!`,
    keywords: (city: string) =>
      `Bauunternehmen ${city}, Baufirma ${city}, Hausbau ${city}, Bauunternehmer ${city}, Sanierung, Neubau`,
  },
  Sanierung: {
    heroTitle: (city: string) => (
      <>
        Sanierung &
        <br />
        <span className="italic text-accent">Renovierung {city}.</span>
      </>
    ),
    heroSubtitle: (city: string) => `MA Bau GmbH – Sanierung ${city}`,
    heroDescription: (city: string) =>
      `Professionelle Sanierung und Renovierung in ${city}. Wir modernisieren Ihre Immobilie energetisch und optisch auf höchstem Niveau.`,
    seoTitle: (city: string) =>
      `Sanierung ${city} – Altbausanierung & Renovierung | MA Bau GmbH`,
    seoDesc: (city: string) =>
      `Experten für Sanierung & Renovierung in ${city}. ✓ Altbau-Sanierung ✓ Energetische Sanierung ✓ Kernsanierung. Jetzt Wert Ihrer Immobilie steigern!`,
    keywords: (city: string) =>
      `Sanierung ${city}, Renovierung ${city}, Altbausanierung ${city}, Kernsanierung, Energetische Sanierung`,
  },
  Innenausbau: {
    heroTitle: (city: string) => (
      <>
        Innenausbau
        <br />
        <span className="italic text-accent">in {city}.</span>
      </>
    ),
    heroSubtitle: (city: string) => `MA Bau GmbH – Innenausbau ${city}`,
    heroDescription: (city: string) =>
      `Hochwertiger Innenausbau in ${city}. Trockenbau, Bodenbeläge und Raumgestaltung aus einer Hand für Gewerbe und Privat.`,
    seoTitle: (city: string) =>
      `Innenausbau ${city} – Trockenbau & Raumgestaltung | MA Bau GmbH`,
    seoDesc: (city: string) =>
      `Ihr Spezialist für Innenausbau in ${city}. ✓ Trockenbau ✓ Akustikbau ✓ Bodenarbeiten. Maßgeschneiderte Lösungen für Ihre Räume.`,
    keywords: (city: string) =>
      `Innenausbau ${city}, Trockenbau ${city}, Ladenbau ${city}, Büroumbau ${city}, Raumgestaltung`,
  },
  Trockenbau: {
    heroTitle: (city: string) => (
      <>
        Trockenbau Profis
        <br />
        <span className="italic text-accent">in {city}.</span>
      </>
    ),
    heroSubtitle: (city: string) => `MA Bau GmbH – Trockenbau ${city}`,
    heroDescription: (city: string) =>
      `Präziser Trockenbau in ${city}. Wände, Decken und Brandschutz für Ihr Bauvorhaben. Schnell, sauber und fachgerecht.`,
    seoTitle: (city: string) =>
      `Trockenbau ${city} – Wände, Decken & Brandschutz | MA Bau GmbH`,
    seoDesc: (city: string) =>
      `Professioneller Trockenbau in ${city}. ✓ Trennwände ✓ Abgehängte Decken ✓ Brandschutz. Jetzt Angebot für Ihr Projekt anfordern!`,
    keywords: (city: string) =>
      `Trockenbau ${city}, Trockenbauer ${city}, Rigips ${city}, Akustikdecken ${city}, Brandschutzbau`,
  },
};

export const LocalSeoPage: React.FC<LocalSeoPageProps> = ({
  service,
  city,
}) => {
  const content = contentMap[service];

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

      <div className="bg-secondary">
        <Hero
          title={content.heroTitle(city)}
          subtitle={content.heroSubtitle(city)}
          description={content.heroDescription(city)}
        />

        {/* Customized Intro Text for Locale */}
        <section className="py-16 md:py-24 bg-white text-primary px-6 md:px-12">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-6">
              Ihr Partner in {city}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              Wir realisieren Ihr {service}-Projekt in {city} und Umgebung.
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Als regionales Bauunternehmen sind wir stolz darauf, in {city}{" "}
              hochwertige Bauleistungen anzubieten. Egal ob Sie eine Sanierung
              planen, einen Innenausbau benötigen oder ein komplettes
              Bauvorhaben umsetzen wollen – wir stehen Ihnen mit Fachwissen und
              Leidenschaft zur Seite.
            </p>
          </div>
        </section>

        <IntroSection />

        <ServicesSection />

        <Projects />

        {/* Call to Action Parallax */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Reuse footer banner or use a specific image if available */}
            <img
              src={footerBanner}
              className="w-full h-full object-cover filter brightness-[0.4]"
              alt="Hintergrund"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/40"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <span className="block text-accent text-xs uppercase tracking-[0.2em] mb-6">
              Starten Sie Ihr Projekt in {city}
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-none">
              Bereit für
              <br />
              die Umsetzung?
            </h2>
            <div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-white text-primary px-8 py-4 md:px-10 md:py-5 text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
              >
                <span>Beratung in {city} anfordern</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
