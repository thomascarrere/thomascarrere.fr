"use client";

import Link from "next/link";
import { trackGenerateLead, trackViewOffer } from "@/lib/gtag";

type BoutonProps = {
  href: string;
  children: React.ReactNode;
  variante?: "primaire" | "secondaire";
  externe?: boolean;
  className?: string;
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

const OFFRES: Record<string, string> = {
  "/sprint-fondations": "Sprint Fondations",
  "/direction-marketing-externalise": "Direction Marketing Externalisee",
};

export function Bouton({
  href,
  children,
  variante = "primaire",
  externe = false,
  className = "",
}: BoutonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full min-h-[48px] px-8 py-3 text-sm font-medium tracking-[-0.02em] transition-colors duration-300 cursor-pointer";
  const styles = {
    primaire: "bg-violet text-white hover:bg-violet-hover",
    secondaire:
      "bg-white text-heading border border-border hover:bg-bg-hover hover:border-transparent",
  };

  const props = externe
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  function handleClick() {
    if (href === CALENDRIER) {
      trackGenerateLead(typeof window !== "undefined" ? window.location.pathname : "unknown");
    } else if (OFFRES[href]) {
      trackViewOffer(OFFRES[href]);
    }
  }

  return (
    <Link
      href={href}
      className={`${base} ${styles[variante]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
