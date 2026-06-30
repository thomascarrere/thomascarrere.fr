"use client";

import { useRef, useState, useEffect } from "react";

export function useInView(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reduced-motion : on revele immediatement (pas d'apparition au scroll)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) {
            observer.unobserve(element);
          }
        } else if (options?.once === false) {
          setInView(false);
        }
      },
      // rootMargin positif en bas : etend la zone de detection sous le viewport
      // pour declencher le reveal un peu avant que la section soit visible,
      // ce qui evite les zones blanches perceptibles au scroll.
      {
        threshold: options?.threshold ?? 0,
        rootMargin: "0px 0px 15% 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, inView };
}
