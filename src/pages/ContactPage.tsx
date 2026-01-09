import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Loader2, CheckCircle } from "lucide-react";
import { SEO } from "../components/SEO";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.fromTo(
        ".contact-reveal",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // 2. Info Columns Reveal
      gsap.fromTo(
        ".info-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      // 3. Form Reveal
      gsap.fromTo(
        ".form-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Vorname ist erforderlich";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Nachname ist erforderlich";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Send email using Web3Forms (free service, no backend needed)
      // Get your access key at https://web3forms.com/
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "97c8a12c-794f-42ed-80b9-9a495f5a9bc3",
          to: "info@ma-bau-gmbh.de",
          from_name: `${formData.firstName} ${formData.lastName}`,
          subject: `Neue Anfrage von ${formData.firstName} ${
            formData.lastName
          }${formData.company ? ` (${formData.company})` : ""}`,
          email: formData.email,
          message: formData.message,
          company: formData.company || "Nicht angegeben",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      // Fallback: open mailto link
      const mailtoLink = `mailto:info@ma-bau-gmbh.de?subject=${encodeURIComponent(
        `Anfrage von ${formData.firstName} ${formData.lastName}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nE-Mail: ${
          formData.email
        }\nUnternehmen: ${
          formData.company || "Nicht angegeben"
        }\n\nNachricht:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Kontakt – MA Bau GmbH Dresden"
        description="Kontaktieren Sie MA Bau GmbH ✓ Photovoltaik-Beratung ✓ Kostenlose Erstberatung ✓ Telefon: +49 176 32187740 ✓ E-Mail: info@ma-bau-gmbh.de ✓ Dresden, Deutschland & Europa ✓ Jetzt Projekt anfragen!"
        keywords="MA Bau Kontakt, MA Bau Dresden Kontakt, Photovoltaik Beratung, Solar Anfrage, PV Beratung Dresden, MA Bau Telefon, MA Bau Email, Solaranlage Anfrage"
        url="https://mabaugmbh.de/contact"
      />
      <div
        ref={containerRef}
        className="bg-secondary min-h-[100svh] w-full pt-24 md:pt-32 pb-32"
      >
        {/* Header */}
        <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
          <div className="max-w-5xl">
            <span className="contact-reveal block text-xs font-bold uppercase tracking-widest text-accent mb-8">
              Kontakt
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-primary">
              <div className="overflow-hidden mb-2">
                <span className="contact-reveal block">Starten wir</span>
              </div>
              <div className="overflow-hidden">
                <span className="contact-reveal block">
                  die <span className="italic text-accent">Konversation.</span>
                </span>
              </div>
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 border-t border-primary/10 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            {/* Left Column: FAQ */}
            <div className="space-y-8">
              <div className="info-item">
                <h3 className="text-2xl font-serif text-primary mb-8">
                  Häufig gestellte Fragen
                </h3>

                <div className="space-y-6">
                  <details className="group border-b border-primary/10 pb-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-lg font-medium text-primary">
                        Wie läuft ein Projekt bei MA Bau ab?
                      </span>
                      <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Wir beginnen mit einer kostenlosen Erstberatung,
                      analysieren Ihre Flächen und erstellen ein individuelles
                      Konzept. Nach der Planung erfolgt die fachgerechte Montage
                      durch unsere erfahrenen Teams.
                    </p>
                  </details>

                  <details className="group border-b border-primary/10 pb-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-lg font-medium text-primary">
                        Welche Flächen eignen sich für Solaranlagen?
                      </span>
                      <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Wir realisieren Projekte auf Freiflächen sowie auf
                      Hallen-, Industrie- und Gewerbedächern – sowohl bei
                      Neubauten als auch im Bestand.
                    </p>
                  </details>

                  <details className="group border-b border-primary/10 pb-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-lg font-medium text-primary">
                        Wie lange dauert die Installation?
                      </span>
                      <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Die Dauer hängt von der Projektgröße ab. Kleinere Anlagen
                      können innerhalb weniger Tage installiert werden, größere
                      Projekte benötigen entsprechend mehr Zeit. Wir erstellen
                      Ihnen einen detaillierten Zeitplan.
                    </p>
                  </details>

                  <details className="group border-b border-primary/10 pb-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-lg font-medium text-primary">
                        Bieten Sie Wartung und Service an?
                      </span>
                      <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Ja, wir bieten umfassende Wartungsverträge und schnellen
                      Service für alle von uns installierten Anlagen an.
                    </p>
                  </details>

                  <details className="group border-b border-primary/10 pb-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-lg font-medium text-primary">
                        Wie kann ich ein Angebot anfordern?
                      </span>
                      <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Nutzen Sie einfach unser Kontaktformular oder rufen Sie
                      uns direkt an unter +49 176 32187740. Wir melden uns
                      zeitnah bei Ihnen.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:pl-12">
              {isSuccess ? (
                <div className="form-item flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 border-2 border-accent">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-3xl font-serif text-primary mb-4">
                    Vielen Dank!
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 max-w-md">
                    Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns
                    schnellstmöglich bei Ihnen.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-accent hover:underline font-medium"
                  >
                    Neue Anfrage senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-item group relative">
                      <label className="block text-xs uppercase tracking-widest text-primary mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Max"
                        className={`w-full bg-transparent border-b py-4 text-xl focus:outline-none transition-colors placeholder:text-primary/20 text-primary ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-primary/20 focus:border-accent"
                        }`}
                      />
                      {errors.firstName && (
                        <span className="text-red-500 text-xs mt-1 block">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    <div className="form-item group relative">
                      <label className="block text-xs uppercase tracking-widest text-primary mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Mustermann"
                        className={`w-full bg-transparent border-b py-4 text-xl focus:outline-none transition-colors placeholder:text-primary/20 text-primary ${
                          errors.lastName
                            ? "border-red-500"
                            : "border-primary/20 focus:border-accent"
                        }`}
                      />
                      {errors.lastName && (
                        <span className="text-red-500 text-xs mt-1 block">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-item group relative">
                    <label className="block text-xs uppercase tracking-widest text-primary mb-2">
                      E-Mail Adresse *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@firma.de"
                      className={`w-full bg-transparent border-b py-4 text-xl focus:outline-none transition-colors placeholder:text-primary/20 text-primary ${
                        errors.email
                          ? "border-red-500"
                          : "border-primary/20 focus:border-accent"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-item group relative">
                    <label className="block text-xs uppercase tracking-widest text-primary mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Firmenname (Optional)"
                      className="w-full bg-transparent border-b border-primary/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-primary/20 text-primary"
                    />
                  </div>

                  <div className="form-item group relative">
                    <label className="block text-xs uppercase tracking-widest text-primary mb-2">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                      className={`w-full bg-transparent border-b py-4 text-xl focus:outline-none transition-colors placeholder:text-primary/20 text-primary resize-none ${
                        errors.message
                          ? "border-red-500"
                          : "border-primary/20 focus:border-accent"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div className="form-item pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="neon-button relative inline-flex items-center justify-center px-10 py-5 text-accent uppercase tracking-[4px] text-sm font-bold overflow-hidden transition-all duration-300 hover:border hover:border-accent disabled:opacity-70 disabled:cursor-not-allowed min-w-[240px]"
                    >
                      <span className="neon-line neon-line-1"></span>
                      <span className="neon-line neon-line-2"></span>
                      <span className="neon-line neon-line-3"></span>
                      <span className="neon-line neon-line-4"></span>
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "Anfrage absenden"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
