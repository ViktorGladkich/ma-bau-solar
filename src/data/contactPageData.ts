// Static data for ContactPage - separated for better maintainability

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Wie läuft ein Projekt bei MA Bau ab?",
    answer:
      "Wir beginnen mit einer kostenlosen Erstberatung, analysieren Ihre Flächen und erstellen ein individuelles Konzept. Nach der Planung erfolgt die fachgerechte Montage durch unsere erfahrenen Teams.",
  },
  {
    question: "Welche Flächen eignen sich für Solaranlagen?",
    answer:
      "Wir realisieren Projekte auf Freiflächen sowie auf Hallen-, Industrie- und Gewerbedächern – sowohl bei Neubauten als auch im Bestand.",
  },
  {
    question: "Wie lange dauert die Installation?",
    answer:
      "Die Dauer hängt von der Projektgröße ab. Kleinere Anlagen können innerhalb weniger Tage installiert werden, größere Projekte benötigen entsprechend mehr Zeit. Wir erstellen Ihnen einen detaillierten Zeitplan.",
  },
  {
    question: "Bieten Sie Wartung und Service an?",
    answer:
      "Ja, wir bieten umfassende Wartungsverträge und schnellen Service für alle von uns installierten Anlagen an.",
  },
  {
    question: "Wie kann ich ein Angebot anfordern?",
    answer:
      "Nutzen Sie einfach unser Kontaktformular oder rufen Sie uns direkt an unter +49 176 32187740. Wir melden uns zeitnah bei Ihnen.",
  },
];

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

export const validateContactForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = "Vorname ist erforderlich";
  }

  if (!formData.lastName.trim()) {
    errors.lastName = "Nachname ist erforderlich";
  }

  if (!formData.email.trim()) {
    errors.email = "E-Mail ist erforderlich";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
  }

  if (!formData.message.trim()) {
    errors.message = "Nachricht ist erforderlich";
  }

  return errors;
};
