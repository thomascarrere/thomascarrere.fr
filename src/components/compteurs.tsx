"use client";

import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";

type Compteur = {
  valeur: number;
  suffixe?: string;
  label: string;
};

type CompteursProps = {
  items: Compteur[];
};

export function Compteurs({ items }: CompteursProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="flex justify-center gap-10 md:gap-16">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-10 md:gap-16">
          {i > 0 && <div className="w-px h-12 bg-border" />}
          <div className="text-center">
            <CompteurValeur
              valeur={item.valeur}
              suffixe={item.suffixe}
              active={inView}
            />
            <p className="text-text-muted text-sm mt-1">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CompteurValeur({
  valeur,
  suffixe = "",
  active,
}: {
  valeur: number;
  suffixe?: string;
  active: boolean;
}) {
  const count = useCountUp(valeur, 1500, active);
  return (
    <span className="text-4xl font-bold text-violet font-archivo tracking-tight">
      {count}
      {suffixe}
    </span>
  );
}
