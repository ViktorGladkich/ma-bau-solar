"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "../components/ui/empty";
import gsap from "gsap";
import { SEO } from "../components/SEO";

const PRIMARY_ORB_HORIZONTAL_OFFSET = 60;
const PRIMARY_ORB_VERTICAL_OFFSET = 30;

export function NotFoundPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Animate the 404 text
      gsap.fromTo(
        ".error-code",
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.3,
        }
      );

      // Animate description
      gsap.fromTo(
        ".error-description",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: "power2.out" }
      );

      // Animate buttons
      gsap.fromTo(
        ".error-buttons",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 1.1, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="404 - Seite nicht gefunden"
        description="Die gesuchte Seite konnte nicht gefunden werden."
      />

      <div
        ref={containerRef}
        className="w-full relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111] text-[#EAE7DF]"
      >
        {/* Animated Background Orbs */}
        <div
          aria-hidden={true}
          className="-z-10 absolute inset-0 overflow-hidden"
        >
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,126,0.08),transparent_60%)]" />

          {/* Primary orb - accent color */}
          <motion.div
            animate={{
              x: [
                0,
                PRIMARY_ORB_HORIZONTAL_OFFSET,
                -PRIMARY_ORB_HORIZONTAL_OFFSET,
                0,
              ],
              y: [
                0,
                PRIMARY_ORB_VERTICAL_OFFSET,
                -PRIMARY_ORB_VERTICAL_OFFSET,
                0,
              ],
              rotate: [0, 10, -10, 0],
            }}
            className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-gradient-to-tr from-accent/20 to-amber-500/10 blur-3xl"
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
          />

          {/* Secondary orb */}
          <motion.div
            animate={{
              x: [
                0,
                -PRIMARY_ORB_HORIZONTAL_OFFSET,
                PRIMARY_ORB_HORIZONTAL_OFFSET,
                0,
              ],
              y: [
                0,
                -PRIMARY_ORB_VERTICAL_OFFSET,
                PRIMARY_ORB_VERTICAL_OFFSET,
                0,
              ],
            }}
            className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-accent/10 to-orange-400/5 blur-3xl"
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
            }}
          />

          {/* Third subtle orb */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            className="absolute top-1/4 right-1/3 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
            }}
          />
        </div>

        <Empty>
          <EmptyHeader>
            <EmptyTitle className="error-code font-serif font-bold text-[12rem] md:text-[16rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              404
            </EmptyTitle>
            <EmptyDescription className="error-description text-lg md:text-xl max-w-md">
              Die Seite, die Sie suchen, wurde möglicherweise
              <br className="hidden md:block" />
              verschoben oder existiert nicht mehr.
            </EmptyDescription>
          </EmptyHeader>

          <EmptyContent className="error-buttons">
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" /> Zur Startseite
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Projekte ansehen
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-500 text-sm mb-4">Brauchen Sie Hilfe?</p>
              <Button asChild variant="ghost" size="sm">
                <Link to="/contact">
                  <Phone className="mr-2 h-4 w-4" /> Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </div>
    </>
  );
}
