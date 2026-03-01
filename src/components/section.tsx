type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: "blanc" | "alt";
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
  const bgClass = bg === "alt" ? "bg-bg-alt" : "bg-white";
  const maxWidth = large ? "max-w-[1280px]" : "max-w-[1140px]";

  return (
    <section id={id} className={`py-18 px-[5%] ${bgClass} ${className}`}>
      <div className={`mx-auto ${maxWidth}`}>{children}</div>
    </section>
  );
}
