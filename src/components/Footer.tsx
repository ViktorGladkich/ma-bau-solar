import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary/80 pt-20 pb-8 border-t border-secondary font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="block">
              {/* Ensure you have a dark version of the logo for white backgrounds, or use the existing one if it fits */}
              <img
                src="/logo/logo-Mabau.png"
                alt="MA Bau GmbH"
                className="w-24 h-auto opacity-100 hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-primary/60">
              Ihr Partner für Bau & Energie. Wir realisieren Visionen – von der
              Planung bis zur Schlüsselübergabe. Qualität, die bleibt.
            </p>
            {/* Social icons removed */}
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/leistungen"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (SEO) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
              Leistungen Dresden
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/bauunternehmen-dresden"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Bauunternehmen
                </Link>
              </li>
              <li>
                <Link
                  to="/sanierung-dresden"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Sanierung & Renovierung
                </Link>
              </li>
              <li>
                <Link
                  to="/innenausbau-dresden"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Innenausbau
                </Link>
              </li>
              <li>
                <Link
                  to="/trockenbau-dresden"
                  className="hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  Trockenbau
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Rubensweg 1<br />
                  01217 Dresden
                  <br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+4917632187740"
                  className="hover:text-primary transition-colors"
                >
                  +49 176 32187740
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@ma-bau-gmbh.de"
                  className="hover:text-primary transition-colors"
                >
                  info@ma-bau-gmbh.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="w-full h-64 md:h-80 rounded-sm overflow-hidden mb-16 border border-primary/10 relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.356238712218!2d13.753856!3d51.028028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c5f6db225555%3A0x6a0a09e0785f7e0!2sRubensweg%201%2C%2001217%20Dresden!5e0!3m2!1sde!2sde!4v1707567890123!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%)",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="group-hover:filter-none transition-all duration-500"
            title="Standortkarte MA Bau GmbH"
          ></iframe>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div className="text-primary/40">
            © {currentYear} MA Bau GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6">
            <Link
              to="/impressum"
              className="hover:text-primary transition-colors uppercase tracking-wider text-primary/60"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="hover:text-primary transition-colors uppercase tracking-wider text-primary/60"
            >
              Datenschutz
            </Link>
            <Link
              to="/agb"
              className="hover:text-primary transition-colors uppercase tracking-wider text-primary/60"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
