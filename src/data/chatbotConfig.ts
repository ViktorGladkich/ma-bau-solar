// Chatbot configuration and constants

// Feature flag for booking functionality (disabled until n8n is set up)
export const BOOKING_ENABLED = false;

export interface BookingFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
  date?: string;
  time?: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  type?: "text" | "calendar" | "time" | "summary" | "quick-reply";
  options?: string[];
  formData?: BookingFormData;
}

export type BookingStep =
  | "idle"
  | "firstName"
  | "lastName"
  | "email"
  | "company"
  | "message"
  | "date"
  | "time"
  | "confirm"
  | "done";

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
export const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const SYSTEM_PROMPT = `Du bist ein freundlicher und professioneller KI-Assistent für MA Bau GmbH - Ihr Partner für Photovoltaik-Lösungen. 

Über MA Bau GmbH:
- Spezialisiert auf Solaranlagen für Freiflächen und Dächer
- Full-Service-Anbieter: Beratung, Planung, Montage und Inbetriebnahme
- Freiflächen: Von der Fläche zur fertigen Anlage im Außenbereich
- Dächer: Neubau oder Bestand auf Hallen-, Industrie- und Gewerbedächern
- Über 100 realisierte Projekte mit mehr als 42 MWp installierter Leistung
- Erfahrene Montageteams für fachgerechte Installation
- Kontakt: info@ma-bau-gmbh.de | +49 176 32187740

Vorteile von Photovoltaik:
- Stromkosten senken und unabhängig werden
- Nachhaltige Energieerzeugung
- Attraktive Rendite und Wertsteigerung
- Fördermöglichkeiten nutzen

Deine Aufgaben:
- Beantworte Fragen zu unseren Solar-Dienstleistungen
- Hilf bei ersten Projektanfragen
- Erkläre unseren Prozess (Beratung → Planung → Montage → Inbetriebnahme)
- Wenn der Nutzer einen Termin buchen oder Kontakt aufnehmen möchte, verweise auf unsere Kontaktseite (/contact) oder direkt auf: E-Mail info@ma-bau-gmbh.de oder Telefon +49 176 32187740
- Halte deine Antworten kurz und prägnant (max 2-3 Sätze)

Antworte immer auf Deutsch, sei professionell aber freundlich.`;

export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
];

export const BOOKING_TRIGGER_PHRASES = [
  "termin",
  "beratung",
  "buchen",
  "meeting",
  "gespräch",
  "konsultation",
  "booking",
];

/**
 * Generate next 10 available weekdays
 */
export const getAvailableDates = (): { date: string; display: string }[] => {
  const dates: { date: string; display: string }[] = [];
  const today = new Date();
  let daysAdded = 0;
  const currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + 1);

  while (daysAdded < 10) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const displayStr = currentDate.toLocaleDateString("de-DE", {
        weekday: "short",
        day: "numeric",
        month: "short",
      });
      dates.push({ date: dateStr, display: displayStr });
      daysAdded++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

/**
 * Initial welcome message
 */
export const getWelcomeMessage = (): Message => ({
  id: "welcome",
  role: "assistant",
  content:
    "Willkommen bei MA Bau GmbH! ☀️ Wie kann ich Ihnen bei Ihrer Photovoltaik-Anlage helfen?",
  timestamp: new Date(),
  type: "quick-reply",
  options: ["Freiflächen-Anlagen", "Dach-Anlagen", "Kontakt aufnehmen"],
});
