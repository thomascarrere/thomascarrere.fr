"use client";

import Link from "next/link";
import { trackClickParcours, trackViewOffer } from "@/lib/gtag";

type LienTrackerProps = {
  href: string;
  children: React.ReactNode;
  event: "parcours" | "offre";
  label: string;
  className?: string;
};

export function LienTracker({
  href,
  children,
  event,
  label,
  className = "",
}: LienTrackerProps) {
  function handleClick() {
    if (event === "parcours") {
      trackClickParcours(label);
    } else {
      trackViewOffer(label);
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
