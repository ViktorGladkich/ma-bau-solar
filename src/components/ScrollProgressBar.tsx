import React, { useEffect, useRef } from "react";

export const ScrollProgressBar: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous animation frame if it exists
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        // Calculate scroll progress as percentage
        const totalScrollableHeight = documentHeight - windowHeight;
        const progress = Math.min(
          (scrollTop / totalScrollableHeight) * 100,
          100
        );

        // Update progress bar width directly without CSS transition
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${progress}%`;
        }
      });
    };

    // Add scroll event listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={progressBarRef}
        className="h-full bg-accent"
        style={{
          width: "0%",
          boxShadow: "0 0 10px rgba(158, 142, 118, 0.5)",
        }}
      />
    </div>
  );
};
