import Image from "next/image";

type Logo = {
  nom: string;
  image?: string;
  /** Symbole sans nom (ex. Sita) : affiche le nom en texte à côté */
  symbole?: boolean;
};

type GrilleLogosProps = {
  logos: Logo[];
  /** 3 colonnes pour une liste multiple de 3 (évite une ligne incomplète) */
  colonnes?: 3 | 4;
};

export function GrilleLogos({ logos, colonnes = 4 }: GrilleLogosProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 max-sm:[&>*:last-child:nth-child(odd)]:col-span-2 ${colonnes === 4 ? "md:grid-cols-4" : ""}`}>
      {logos.map((logo) => (
        <div
          key={logo.nom}
          className="bg-white border border-border rounded-md min-h-[96px] p-6 flex items-center justify-center hover:shadow-[23px_23px_64px_-16px_#393b6a0f] transition-shadow"
        >
          {logo.image && logo.symbole ? (
            <span className="flex items-center gap-3">
              {/* alt vide : le nom est écrit juste à côté */}
              <Image src={logo.image} alt="" width={32} height={32} className="w-8 h-8 shrink-0" />
              <span className="text-heading font-semibold text-sm tracking-wide">{logo.nom}</span>
            </span>
          ) : logo.image ? (
            <Image
              src={logo.image}
              alt={logo.nom}
              width={120}
              height={48}
              className="object-contain max-h-12"
            />
          ) : (
            <span className="text-heading font-semibold text-sm tracking-wide text-center">
              {logo.nom}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
