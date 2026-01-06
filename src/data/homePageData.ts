// Static data for HomePage - separated for better maintainability

export interface ProcessStep {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export interface Material {
  id: number;
  name: string;
  desc: string;
  img: string;
}

export interface ZoomImage {
  src: string;
  alt: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Beratung & Planung",
    desc: "Am Anfang steht das Verstehen. Wir analysieren Ihre Flächen, Ihre Anforderungen und entwickeln ein maßgeschneidertes Solarkonzept.",
    img: "/processSteps/beratung_Strategie.jpg",
  },
  {
    id: 2,
    title: "Technische Auslegung",
    desc: "Unsere Experten übersetzen Konzepte in präzise Pläne. Statikprüfung, Komponentenauswahl und Genehmigungsplanung aus einer Hand.",
    img: "/processSteps/design_Architektur.jpg",
  },
  {
    id: 3,
    title: "Montage & Installation",
    desc: "Unsere erfahrenen Teams montieren mit höchster Präzision. Fachgerechte Installation auf Freiflächen und Dächern aller Art.",
    img: "/processSteps/montage.jpg",
  },
  {
    id: 4,
    title: "Inbetriebnahme & Service",
    desc: "Wir bringen Ihre Anlage sicher ans Netz. Professionelle Inbetriebnahme und zuverlässiger Service für langfristigen Ertrag.",
    img: "/processSteps/Inbetriebnahme_Service.jpg",
  },
];

export const materials: Material[] = [
  {
    id: 1,
    name: "Solarmodule",
    desc: "Premium-Module von führenden Herstellern wie Jinko, Longi und Canadian Solar.",
    img: "/materials/solarmodule.jpg",
  },
  {
    id: 2,
    name: "Unterkonstruktion",
    desc: "Hochwertige Montagesysteme für sichere und langlebige Installationen.",
    img: "/materials/unterkonstruktion.jpg",
  },
  {
    id: 3,
    name: "Wechselrichter",
    desc: "Effiziente Wechselrichtertechnik für optimale Energieumwandlung.",
    img: "/materials/wechselrichter.jpg",
  },
  {
    id: 4,
    name: "Elektrotechnik",
    desc: "Professionelle Verkabelung und Netzanbindung nach höchsten Standards.",
    img: "/materials/elektrotechnik.jpg",
  },
];

export const zoomImages: ZoomImage[] = [
  { src: "/zoomImages/zoom2.jpg", alt: "Moderne Solaranlage" },
  { src: "/zoomImages/zoom1.jpg", alt: "Wood Detail" },
  { src: "/zoomImages/zoom2.jpg", alt: "Light Installation" },
  { src: "/zoomImages/zoom4.jpg", alt: "Curved Wood" },
  { src: "/zoomImages/zoom5.jpg", alt: "Interior Design" },
  { src: "/zoomImages/zoom7.jpg", alt: "Construction Detail" },
  { src: "/zoomImages/zoom6.jpg", alt: "Finished Booth" },
];

export const clientLogos: ClientLogo[] = [
  { name: "Client 1", logo: "/logo/clients/client1.png" },
  { name: "Client 2", logo: "/logo/clients/client2.png" },
  { name: "Client 3", logo: "/logo/clients/client3.png" },
  { name: "Client 4", logo: "/logo/clients/client4.png" },
  { name: "Client 5", logo: "/logo/clients/client5.png" },
  { name: "Client 6", logo: "/logo/clients/client6.png" },
  { name: "Client 7", logo: "/logo/clients/client7.png" },
  { name: "Client 8", logo: "/logo/clients/client8.png" },
];
