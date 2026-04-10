type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: "blanc" | "alt" | "dark";
  large?: boolean;
  id?: string;
};

export function Section({
  children,
  className = "",
  bg = "blanc",
  large = false,
  id,
}: SectionProps) {
  const bgClass = {
    blanc: "bg-white",
    alt: "bg-bg-alt",
    dark: "bg-[#160042] relative overflow-hidden",
  }[bg];
  const maxWidth = large ? "max-w-[1280px]" : "max-w-[1140px]";

  return (
    <section id={id} className={`py-18 px-[5%] ${bgClass} ${className}`}>
      <div className={`mx-auto ${maxWidth} relative z-10`}>{children}</div>
    </section>
  );
}
