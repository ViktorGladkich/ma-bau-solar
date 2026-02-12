import React from "react";

export type ServiceType =
  | "Bauunternehmen"
  | "Sanierung"
  | "Innenausbau"
  | "Trockenbau";

export interface LocalSeoContent {
  heroTitle: (city: string) => React.ReactNode;
  heroSubtitle: (city: string) => string;
  heroDescription: (city: string) => string;
  seoTitle: (city: string) => string;
  seoDesc: (city: string) => string;
  keywords: (city: string) => string;
  introTitle: (city: string) => string;
  introSubtitle: string;
  whyUsTitle: string;
  whyUsText: (city: string) => string;
  whyUsPoints: string[];
  servicesTitle: (city: string) => string;
  servicesText: (city: string) => string;
  referencesTitle: (city: string) => string;
  referencesText: (city: string) => string;
  ctaTitle: (city: string) => string;
}

export const contentMap: Record<ServiceType, LocalSeoContent> = {
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
      `Als erfahrenes Bauunternehmen in ${city} planen und realisieren wir private und gewerbliche Bauprojekte. Verlassen Sie sich auf Qualität, Termintreue und transparente Kommunikation.`,
    seoTitle: (city: string) =>
      `Bauunternehmen ${city} – MA Bau GmbH | Zuverlässig & Kompetent`,
    seoDesc: (city: string) =>
      `Ihr zuverlässiges Bauunternehmen in ${city}. ✓ Hochbau & Tiefbau ✓ Sanierung ✓ Neubau. 100+ erfolgreiche Projekte. Jetzt unverbindlich anfragen!`,
    keywords: (city: string) =>
      `Bauunternehmen ${city}, Baufirma ${city}, Hausbau ${city}, Bauunternehmer ${city}, Sanierung, Neubau`,

    // Intro Section
    introTitle: (city: string) => `Ihr Bauprojekt in ${city}.`,
    introSubtitle: "Kompetent. Zuverlässig. Regional.",

    whyUsTitle: "Warum MA Bau GmbH?",
    whyUsText: (city: string) => `
      Ein Bauprojekt ist Vertrauenssache. Als in ${city} verwurzeltes Unternehmen kennen wir nicht nur die lokalen Gegebenheiten und Bauvorschriften, sondern verfügen auch über ein etabliertes Netzwerk an zuverlässigen Partnern und Lieferanten.
      
      Unser Anspruch ist es, nicht einfach nur "zu bauen", sondern Lebensräume zu schaffen, die auch in Jahrzehnten noch Bestand haben. Wir setzen auf moderne Baumaterialien, energieeffiziente Lösungen und eine handwerkliche Ausführung, die keine Kompromisse duldet.
    `,
    whyUsPoints: [
      "Persönliche Beratung & Betreuung vor Ort",
      "Transparente Kostenplanung ohne versteckte Posten",
      "Termingerechte Fertigstellung Ihrer Projekte",
      "Hochqualifiziertes Fachpersonal",
    ],
    servicesTitle: (city: string) =>
      `Unsere Leistungen als Bauunternehmen in ${city}`,
    servicesText: (city: string) => `
      Wir bieten Ihnen ein umfassendes Leistungsspektrum, das alle Phasen Ihres Bauvorhabens abdeckt. Von der ersten Skizze bis zur Schlüsselübergabe sind wir Ihr zentraler Ansprechpartner in ${city}.

      Egal ob Neubau, Umbau oder Erweiterung bestehender Gebäude – wir koordinieren alle Gewerke und sorgen für einen reibungslosen Ablauf. Unsere Expertise erstreckt sich sowohl auf den privaten Wohnbau als auch auf gewerbliche Objekte.
    `,
    referencesTitle: (city: string) => `Zufriedene Bauherren in ${city}`,
    referencesText: (city: string) => `
      Nichts spricht mehr für unsere Qualität als die Zufriedenheit unserer Kunden. In den vergangenen Jahren haben wir zahlreiche Projekte in ${city} und der Umgebung erfolgreich abgeschlossen. Von modernen Einfamilienhäusern bis hin zu komplexen Gewerbebauten.
      
      Unsere Kunden schätzen besonders unsere Zuverlässigkeit und die Fähigkeit, auch bei unvorhergesehenen Herausforderungen schnell und lösungsorientiert zu handeln.
    `,
    ctaTitle: (city: string) =>
      `Kontaktieren Sie Ihr Bauunternehmen in ${city}`,
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

    // Intro Section
    introTitle: (city: string) => `Ihre Sanierung in ${city}.`,
    introSubtitle: "Kompetent. Zuverlässig. Regional.",

    whyUsTitle: "Warum Sanierung mit MA Bau GmbH?",
    whyUsText: (city: string) => `
      Eine Sanierung ist oft komplexer als ein Neubau. Sie erfordert viel Erfahrung, Fingerspitzengefühl und technisches Know-how, um die Bausubstanz zu erhalten und gleichzeitig modernen Wohnkomfort zu schaffen. In ${city} haben wir uns auf genau diese Herausforderungen spezialisiert.

      Wir analysieren den Bestand genau, identifizieren Schwachstellen und entwickeln ein Sanierungskonzept, das Wirtschaftlichkeit und Nachhaltigkeit vereint. Mit uns steigern Sie nicht nur den Wert Ihrer Immobilie, sondern auch Ihre Lebensqualität.
    `,
    whyUsPoints: [
      "Energetische Sanierung nach neuesten Standards",
      "Erhalt historischer Bausubstanz",
      "Alles aus einer Hand: Abbruch bis Feininstallation",
      "Staubschutz & Sauberkeit auf der Baustelle",
    ],
    servicesTitle: (city: string) => `Unsere Sanierungsleistungen in ${city}`,
    servicesText: (city: string) => `
      Ob Kernsanierung, energetische Modernisierung oder Renovierung einzelner Räume – wir sind Ihr Experte für Bauen im Bestand in ${city}. Wir tauschen nicht nur Oberflächen aus, sondern sanieren grundlegend: von der Dämmung über neue Fenster bis hin zu modernster Haustechnik.

      Besonders im Bereich der energetischen Sanierung können Sie durch unsere Maßnahmen langfristig Heizkosten sparen und von staatlichen Förderungen profitieren. Wir beraten Sie gerne zu den Möglichkeiten.
    `,
    referencesTitle: (city: string) => `Erfolgreiche Sanierungen in ${city}`,
    referencesText: (city: string) => `
      Zahlreiche Altbauten in ${city} erstrahlen dank unserer Arbeit in neuem Glanz. Sehen Sie sich unsere Referenzprojekte an und überzeugen Sie sich davon, wie wir aus in die Jahre gekommenen Immobilien moderne Schmuckstücke machen.
    `,
    ctaTitle: (city: string) => `Starten Sie Ihre Sanierung in ${city}`,
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

    // Intro Section
    introTitle: (city: string) => `Individueller Innenausbau in ${city}.`,
    introSubtitle: "Kompetent. Zuverlässig. Regional.",

    whyUsTitle: "Qualität im Detail – Innenausbau in Dresden",
    whyUsText: (city: string) => `
      Der Innenausbau bestimmt maßgeblich, wie Sie sich in Ihren Räumen fühlen. In ${city} stehen wir für Innenausbau, der Design und Funktion perfekt verbindet. Wir arbeiten mit hochwertigen Materialien und achten auf jedes Detail – von der Schattenfuge bis zum perfekten Bodenübergang.

      Unsere Teams arbeiten präzise, sauber und termingerecht, damit Sie Ihre Räumlichkeiten so schnell wie möglich nutzen können. Egal ob Büroetage, Ladengeschäft oder privater Wohnraum.
    `,
    whyUsPoints: [
      "Maßgeschneiderte Raumkonzepte",
      "Hochwertige Materialien & Verarbeitung",
      "Schallschutz & Akustikoptimierung",
      "Flexible Lösungen für jeden Grundriss",
    ],
    servicesTitle: (city: string) => `Ihr Partner für Innenausbau in ${city}`,
    servicesText: (city: string) => `
      Unser Leistungsspektrum im Innenausbau in ${city} ist vielfältig. Wir übernehmen den kompletten Trockenbau, verlegen Böden aller Art (Parkett, Vinyl, Fliesen), kümmern uns um Malerarbeiten und installieren moderne Deckensysteme.

      Wir schaffen Räume, die inspirieren. Durch intelligente Raumaufteilung und den Einsatz modernster Trockenbausysteme können wir Grundrisse flexibel gestalten und an Ihre Bedürfnisse anpassen.
    `,
    referencesTitle: (city: string) => `Referenzen Innenausbau ${city}`,
    referencesText: (city: string) => `
      Von modernen Bürowelten bis hin zu exklusiven Wohnräumen – unsere Referenzen im Innenausbau in ${city} sprechen für sich. Lassen Sie sich von unseren bisherigen Projekten inspirieren.
    `,
    ctaTitle: (city: string) => `Anfrage Innenausbau ${city}`,
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

    // Intro Section
    introTitle: (city: string) => `Ihr Fachbetrieb für Trockenbau in ${city}.`,
    introSubtitle: "Kompetent. Zuverlässig. Regional.",

    whyUsTitle: "Trockenbau in Dresden – Schnell & Flexibel",
    whyUsText: (city: string) => `
      Trockenbau ist die moderne Art zu bauen: schnell, flexibel und kosteneffizient. In ${city} sind wir Ihr spezialisierter Partner für alle Trockenbauarbeiten. Wir wissen, dass es auf Baustellen oft auf Schnelligkeit ankommt, ohne dabei die Qualität zu vernachlässigen.

      Unsere geschulten Trockenbauer beherrschen alle Systeme und Normen – vom einfachen Ständerwerk bis hin zu komplexen Brandschutz- und Akustiklösungen. Wir garantieren planebene Oberflächen (Q3/Q4) und perfekt ausgeführte Details.
    `,
    whyUsPoints: [
      "Wände, Decken & Vorsatzschalen",
      "Brandschutzverkleidungen (F30-F120)",
      "Akustikdecken & Schallschutz",
      "Dachgeschossausbau",
    ],
    servicesTitle: (city: string) => `Trockenbau-Leistungen für ${city}`,
    servicesText: (city: string) => `
      Wir bieten in ${city} das gesamte Spektrum des Trockenbaus an. Dazu gehören das Stellen von Trennwänden, das Abhängen von Decken, der Dachgeschossausbau sowie spezielle Brandschutzmaßnahmen.

      Auch Sonderkonstruktionen, wie gebogene Wände oder integrierte Lichtvouten, setzen wir routiniert um. Wir verwenden ausschließlich zertifizierte Systemkomponenten namhafter Hersteller, um Langlebigkeit und Sicherheit zu gewährleisten.
    `,
    referencesTitle: (city: string) => `Trockenbau Projekte in ${city}`,
    referencesText: (city: string) => `
      Zahlreiche Großprojekte und private Umbauten in ${city} wurden durch unsere Trockenbau-Teams realisiert. Vertrauen Sie auf unsere Expertise für Ihr nächstes Projekt.
    `,
    ctaTitle: (city: string) => `Trockenbauer in ${city} gesucht?`,
  },
};
