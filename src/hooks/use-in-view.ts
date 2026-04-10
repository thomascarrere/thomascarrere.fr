"use client";

import { useRef, useState, useEffect } from "react";

export function useInView(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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
      { threshold: options?.threshold ?? 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, inView };
}
