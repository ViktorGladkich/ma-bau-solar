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
    year: "2015",
    title: "Gründung",
    desc: "MA Bau GmbH wird gegründet mit Fokus auf Bauleistungen im Bereich erneuerbare Energien.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
  },
  {
    year: "2018",
    title: "Solar-Spezialisierung",
    desc: "Strategische Ausrichtung auf Photovoltaik-Projekte. Erste Großanlagen auf Freiflächen realisiert.",
    img: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop",
  },
  {
    year: "2020",
    title: "Dach-Expertise",
    desc: "Erweiterung des Leistungsspektrums auf Industrie- und Gewerbedächer. Partnerschaften mit führenden Modulherstellern.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Wachstum",
    desc: "Ausbau der Montagekapazitäten. Über 50 erfolgreich realisierte Solarprojekte deutschlandweit.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Zukunft",
    desc: "Weiterentwicklung als Full-Service-Partner für Photovoltaik-Projekte jeder Größenordnung.",
    img: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=2568&auto=format&fit=crop",
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
    year: "2023",
    name: "German Design Award",
    category: "Ausgezeichnete Qualität",
  },
  { year: "2022", name: "iF Design Award", category: "Fair Construction" },
  { year: "2021", name: "Red Dot", category: "Spatial Communication" },
  { year: "2019", name: "BrandEx Award", category: "Best Stand L" },
];
