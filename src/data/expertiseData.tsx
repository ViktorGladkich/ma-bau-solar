import { Cpu, Truck, Hammer, Leaf, Monitor, PenTool } from "lucide-react";
import React from "react";

export interface ProcessStep {
  id: string;
  title: string;
  text: string;
  image: string;
}

export interface Capability {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const processes: ProcessStep[] = [
  {
    id: "01",
    title: "Beratung & Konzeption",
    text: "Jedes Projekt beginnt mit Zuhören. Wir analysieren Ihre Flächen, Ihre Anforderungen und Ihre Ziele. Unser Team entwickelt daraus maßgeschneiderte Solarkonzepte, die nicht nur effizient sind, sondern auch wirtschaftlich überzeugen.",
    image: "/processSteps/beratung_Strategie.jpg",
  },
  {
    id: "02",
    title: "Technische Planung",
    text: "Unsere Experten übersetzen das Konzept in präzise Pläne. Wir prüfen Statik, wählen optimale Komponenten und kümmern uns um alle Genehmigungen. Transparente Dokumentation gibt Ihnen Sicherheit vor Baubeginn.",
    image: "/processSteps/design_Architektur.jpg",
  },
  {
    id: "03",
    title: "Montage & Installation",
    text: "Unsere erfahrenen Montageteams arbeiten mit höchster Präzision. Ob Freifläche oder Dach – wir installieren fachgerecht und termingerecht. Qualität und Sicherheit stehen dabei immer an erster Stelle.",
    image: "/processSteps/montage.jpg",
  },
  {
    id: "04",
    title: "Inbetriebnahme & Service",
    text: "Eine Solaranlage ist eine langfristige Investition. Wir übernehmen die professionelle Inbetriebnahme, Netzanmeldung und bieten zuverlässigen Service für dauerhaft optimale Erträge.",
    image: "/processSteps/Inbetriebnahme_Service.jpg",
  },
];

export const capabilities: Capability[] = [
  {
    icon: <PenTool size={24} />,
    title: "Planung & Auslegung",
    desc: "Professionelle Anlagenplanung und Ertragsprognosen.",
  },
  {
    icon: <Hammer size={24} />,
    title: "Fachgerechte Montage",
    desc: "Erfahrene Teams für Dach- und Freiflächenanlagen.",
  },
  {
    icon: <Monitor size={24} />,
    title: "Monitoring",
    desc: "Intelligente Überwachung für optimale Erträge.",
  },
  {
    icon: <Truck size={24} />,
    title: "Logistik",
    desc: "Zuverlässige Materiallieferung auf die Baustelle.",
  },
  {
    icon: <Leaf size={24} />,
    title: "Nachhaltigkeit",
    desc: "Hochwertige Komponenten für langfristige Nutzung.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Smart Integration",
    desc: "Netzanbindung und intelligente Steuerung.",
  },
];

export const sustainabilityPoints = [
  "100% Ökostrom in der Fertigung",
  "Modulare Systembauweise",
  "Recycling-Partnerschaften",
];
