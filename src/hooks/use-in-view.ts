"use client";

import { useRef, useState, useEffect } from "react";

// Etats d'apparition d'un bloc :
// - "initial" : rendu serveur et premier affichage. Le contenu est visible,
//   rien n'est masque tant que le script n'a pas tourne (ni sans script).
// - "cache"   : bloc situe sous la zone visible, masque apres hydratation
//   en attendant le scroll.
// - "visible" : bloc revele au scroll, avec transition.
export type EtatApparition = "initial" | "cache" | "visible";

export function useInView(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [etat, setEtat] = useState<EtatApparition>("initial");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reduced-motion : on garde l'etat initial (visible, sans animation)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Deja a l'ecran au chargement : on reste en "initial", sans animation.
          setEtat((precedent) => (precedent === "cache" ? "visible" : precedent));
          if (options?.once !== false) {
            observer.unobserve(element);
          }
        } else {
          setEtat("cache");
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

  return { ref, etat, inView: etat !== "cache" };
}
