import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CursorState {
  isHovering: boolean;
  isClicking: boolean;
}

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isClicking: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for touch device - don't show cursor on mobile
    if (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || window.innerWidth < 1024)
    ) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Show cursor when mouse moves
      if (!isVisible) setIsVisible(true);

      // Dot follows immediately
      gsap.set(dot, {
        x: mouseX,
        y: mouseY,
      });
    };

    const animate = () => {
      // Cursor follows with delay
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });

      requestAnimationFrame(animate);
    };

    // Interactive elements hover detection
    const handleMouseEnter = () => {
      setCursorState((prev) => ({ ...prev, isHovering: true }));
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, isHovering: false }));
    };

    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState((prev) => ({ ...prev, isClicking: false }));
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    // Query all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor], .cursor-hover'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    const rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isVisible]);

  // Update cursor appearance based on state
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (cursorState.isHovering) {
      gsap.to(cursor, {
        scale: 1.8,
        opacity: 0.6,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (cursorState.isClicking) {
      gsap.to(cursor, {
        scale: cursorState.isHovering ? 1.5 : 0.8,
        duration: 0.1,
      });
    }
  }, [cursorState]);

  // Hide on touch devices or small screens
  if (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || window.innerWidth < 1024)
  ) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-opacity duration-300 hidden lg:block ${
          isVisible ? "opacity-80" : "opacity-0"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`w-full h-full rounded-full border-2 border-accent transition-all duration-300 ${
            cursorState.isHovering ? "bg-accent/20 scale-150" : ""
          }`}
        />
      </div>

      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] transition-opacity duration-300 hidden lg:block ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Hide default cursor globally on desktop only */}
      <style>{`
        @media (min-width: 1024px) {
          body {
            cursor: none;
          }
          a, button, [role="button"], input, textarea, select, .cursor-hover {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
};
