"use client";

import { useInView } from "@/hooks/use-in-view";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const { ref, etat } = useInView({ threshold: 0.1 });

  // Aucun style au rendu serveur : le contenu est lisible sans script.
  // Seuls les blocs sous la zone visible sont masques apres hydratation,
  // puis reveles au scroll.
  const style =
    etat === "initial"
      ? undefined
      : etat === "cache"
        ? { opacity: 0, transform: "translateY(10px)" }
        : {
            opacity: 1,
            transform: "translateY(0)",
            transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
          };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
