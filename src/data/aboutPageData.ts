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
    name: "Geschäftsführung",
    role: "Management",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
  },
  {
    name: "Projektleitung",
    role: "Planung & Koordination",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
  },
  {
    name: "Technik",
    role: "Technische Leitung",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Montage",
    role: "Montageleitung",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop",
  },
  {
    name: "Service",
    role: "Kundenbetreuung",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
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
