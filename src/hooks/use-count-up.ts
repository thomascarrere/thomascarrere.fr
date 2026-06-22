"use client";

import { useState, useEffect } from "react";

export function useCountUp(target: number, duration = 1500, active = false) {
  // Valeur finale par defaut : les chiffres restent lisibles avant le scroll
  // (rendu statique / haut de page). L'animation count-up n'est qu'une amelioration.
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let rafId: number;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, active]);

  return count;
}
