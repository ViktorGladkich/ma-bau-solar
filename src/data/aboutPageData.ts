// Static data for AboutPage - separated for better maintainability

export interface Milestone {
  year: string;
  title: string;
  desc: string;
  img: string;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
}

export interface Award {
  year: string;
  name: string;
  category: string;
}

export const milestones: Milestone[] = [
  {
    year: "2020",
    title: "Gründung in Dresden",
    desc: "MA Bau GmbH wird in Dresden gegründet mit klarem Fokus auf professionelle Photovoltaik-Montage und qualitativ hochwertige Baudienstleistungen. Von Anfang an setzen wir auf nachhaltige Energielösungen und zuverlässige Handwerksarbeit.",
    img: "/uberUns/grundung.jpg",
  },
  {
    year: "2021",
    title: "Erste Großprojekte",
    desc: "Erfolgreiche Realisierung erster Großanlagen auf Industrie- und Gewerbedächern. Highlight: 819 kWp Industriedachanlage in Sattlend, Österreich - ein Meilenstein in unserer Firmengeschichte mit professioneller Umsetzung unter Einhaltung lokaler Vorschriften und spezifischer Anforderungen.",
    img: "/projects/sattlend.jpg",
  },
  {
    year: "2022",
    title: "Expansion nach Deutschland und Europa",
    desc: "Erweiterung des Leistungsspektrums auf Freiflächenanlagen. Strategische Partnerschaften mit führenden Modulherstellern etabliert. Erste überregionale Projekte in Berlin, Brandenburg und Österreich erfolgreich abgeschlossen.",
    img: "/uberUns/expansion.jpg",
  },
  {
    year: "2024",
    title: "Starkes Wachstum",
    desc: "Massiver Ausbau der Montagekapazitäten und des Teams. Über 100 erfolgreich realisierte Solarprojekte in Deutschland, Österreich und weiteren europäischen Ländern. Spezialisierung auf komplexe Großanlagen und anspruchsvolle Dachmontagen.",
    img: "/projects/footerBanner.webp",
  },
  {
    year: "2025",
    title: "Zukunft der Energiewende",
    desc: "Weiterentwicklung als Full-Service-Partner für Photovoltaik-Projekte jeder Größenordnung. Über 42 MWp installierte Leistung. Kontinuierliche Innovation in Montagetechnik und Projektmanagement. Aktive Mitgestaltung der Energiewende in Europa.",
    img: "/uberUns/zukunftEnergiewende.jpg",
  },
];

export const team: TeamMember[] = [
  {
    name: "Geschäftsführer",
    role: "Management & Strategie",
    img: "/uberUns/geschäftsführer.jpeg",
  },
  {
    name: "Gesellschafter",
    role: "Partner & Entwicklung",
    img: "/uberUns/gesellschafter.jpeg",
  },
];

export const awards: Award[] = [
  {
    year: "2024",
    name: "42+ MWp",
    category: "Installierte Leistung gesamt",
  },
  { year: "2024", name: "22 MWp", category: "Größte Freiflächenanlage" },
  { year: "2024", name: "850 kWp", category: "Größte Dachanlage" },
  { year: "2020-2025", name: "100+", category: "Realisierte Projekte" },
];
