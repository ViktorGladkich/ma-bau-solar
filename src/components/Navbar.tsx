import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();

      // Make visible before animating
      gsap.set(".menu-overlay", { visibility: "visible" });

      tl.to(".menu-overlay", { y: "0%", duration: 0.8, ease: "power4.inOut" })
        .fromTo(
          ".menu-item",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".menu-info",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    } else {
      document.body.style.overflow = "";
      const tl = gsap.timeline();

      tl.to(".menu-overlay", {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          // Hide visibility after animation finishes to prevent selecting text
          gsap.set(".menu-overlay", { visibility: "hidden" });
        },
      });
    }
  }, [isOpen]);

  // Updated navigation structure - Added Home, Removed Journal
  const navLinks = [
    { name: "Startseite", to: "/", label: "01" },
    { name: "Projekte", to: "/projects", label: "02" },
    { name: "Leistungen", to: "/expertise", label: "03" },
    { name: "Über uns", to: "/about", label: "04" },
    { name: "Kontakt", to: "/contact", label: "05" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "py-1 bg-secondary/80 backdrop-blur-md border-b border-primary/5"
            : "py-4 bg-transparent"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 md:px-2 flex justify-between items-center">
          <Link
            to="/"
            className={`z-50 relative group cursor-hover flex items-center ${
              scrolled ? "pointer-events-auto" : "pointer-events-none"
            }`}
            aria-label="MA Bau GmbH Home"
          >
            <div
              className={`transition-opacity duration-700 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="/logo/logo-Mabau.png"
                alt="MA Bau Logo"
                className="w-20 md:w-20 object-contain "
              />
            </div>

            {/* Typographic Lockup */}
            <div
              className={`flex flex-col justify-center transition-opacity duration-700 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-lg md:text-2xl font-sans font-bold leading-none tracking-tight uppercase">
                MA Bau
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <button
              className={`z-50 flex items-center gap-3 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 group cursor-hover transition-all duration-500 ${
                scrolled ? "text-primary" : "text-secondary"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              {/* Text label with smooth transition */}
              <span className="hidden md:block text-xs uppercase tracking-widest transition-all duration-500 group-hover:tracking-[0.2em] group-hover:opacity-80">
                {isOpen ? "Schließen" : "Menü"}
              </span>

              {/* Premium Animated Hamburger Icon */}
              <div className="relative w-10 h-10 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                {/* Hover glow effect - only on burger, not on X */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isOpen
                      ? "bg-transparent scale-0"
                      : "bg-transparent scale-0 group-hover:scale-100 group-hover:bg-current/5"
                  }`}
                />

                {/* Top line - with stagger delay */}
                <span
                  className={`absolute h-[2px] rounded-full transition-all ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
                    isOpen
                      ? "bg-accent"
                      : scrolled
                      ? "bg-primary"
                      : "bg-secondary"
                  } ${
                    isOpen
                      ? "w-6 rotate-45 translate-y-0 duration-500 delay-100"
                      : "w-6 rotate-0 -translate-y-[7px] duration-400 delay-0 group-hover:w-7"
                  }`}
                />

                {/* Middle line - fades and scales */}
                <span
                  className={`absolute h-[2px] rounded-full transition-all ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
                    isOpen
                      ? "bg-accent"
                      : scrolled
                      ? "bg-primary"
                      : "bg-secondary"
                  } ${
                    isOpen
                      ? "w-0 opacity-0 duration-300 delay-0"
                      : "w-4 opacity-100 duration-400 delay-75 group-hover:w-5"
                  }`}
                />

                {/* Bottom line - with stagger delay */}
                <span
                  className={`absolute h-[2px] rounded-full transition-all ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
                    isOpen
                      ? "bg-accent"
                      : scrolled
                      ? "bg-primary"
                      : "bg-secondary"
                  } ${
                    isOpen
                      ? "w-6 -rotate-45 translate-y-0 duration-500 delay-150"
                      : "w-6 rotate-0 translate-y-[7px] duration-400 delay-100 group-hover:w-7"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      {/* Added 'invisible' class to prevent content from being seen/copied when closed */}
      <div className="menu-overlay fixed inset-0 bg-primary z-40 transform -translate-y-full text-secondary flex flex-col justify-center invisible">
        <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 h-full py-24 md:py-32">
          <div className="hidden lg:flex flex-col justify-between menu-info opacity-0">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-accent mb-4">
                Kontakt
              </h3>
              <p className="text-xl font-serif leading-relaxed text-gray-300">
                Rubensweg 1
                <br />
                01217 Dresden
                <br />
                Deutschland
              </p>
              <br />
              <a
                href="mailto:info@ma-bau-gmbh.de"
                className="block text-lg text-gray-300 hover:text-accent transition-colors cursor-hover"
              >
                info@ma-bau-gmbh.de
              </a>
              <a
                href="tel:+4917632187740"
                className="block text-lg text-gray-300 hover:text-accent transition-colors cursor-hover mt-2"
              >
                +49 176 32187740
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MA BAU GmbH
            </div>
          </div>

          <nav
            className="flex flex-col justify-center space-y-2"
            aria-label="Hauptnavigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`menu-item group flex items-baseline gap-6 py-2 border-b border-gray-800 hover:border-white/20 transition-colors cursor-hover ${
                  location.pathname === link.to ? "border-white" : ""
                }`}
                onClick={handleLinkClick}
              >
                <span className="text-[10px] md:text-xs font-mono text-accent">
                  {link.label}
                </span>
                <span className="text-4xl sm:text-5xl md:text-7xl font-serif text-gray-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 ease-out">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
