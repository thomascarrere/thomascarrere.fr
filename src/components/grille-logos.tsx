type GrilleLogosProps = {
  logos: { nom: string; initiales: string }[];
};

export function GrilleLogos({ logos }: GrilleLogosProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {logos.map((logo) => (
        <div
          key={logo.nom}
          className="border border-bg-hover rounded-md min-h-[96px] p-6 flex items-center justify-center hover:shadow-[23px_23px_64px_-16px_#393b6a0f] transition-shadow"
        >
          <span className="text-heading font-semibold text-sm tracking-wide text-center">
            {logo.nom}
          </span>
        </div>
      ))}
    </div>
  );
}
