import Image from "next/image";

type CarteTemoignageProps = {
  nom: string;
  entreprise: string;
  texte: string;
  avatar?: string;
};

export function CarteTemoignage({
  nom,
  entreprise,
  texte,
  avatar,
}: CarteTemoignageProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-[23px_23px_64px_-16px_#393b6a0f]">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#443fde"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-text mb-6 text-[15px] leading-relaxed">{texte}</p>
      <div className="flex items-center gap-3">
        {avatar ? (
          <Image
            src={avatar}
            alt={nom}
            width={48}
            height={48}
            className="rounded-full bg-bg-hover object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-bg-hover flex items-center justify-center text-violet font-semibold text-sm">
            {nom
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
        <div>
          <p className="text-heading font-medium text-sm">{nom}</p>
          <p className="text-text-muted text-xs">{entreprise}</p>
        </div>
      </div>
    </div>
  );
}
