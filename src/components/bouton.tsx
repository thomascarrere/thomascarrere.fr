import Link from "next/link";

type BoutonProps = {
  href: string;
  children: React.ReactNode;
  variante?: "primaire" | "secondaire";
  externe?: boolean;
  className?: string;
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

  return (
    <Link
      href={href}
      className={`${base} ${styles[variante]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
