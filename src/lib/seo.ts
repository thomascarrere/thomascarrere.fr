// Image Open Graph partagee. A repeter dans le bloc openGraph de chaque page :
// Next remplace l'objet openGraph du layout au lieu de le fusionner.
export const IMAGE_OG = {
  url: "/images/og-thomas-carrere.jpg?v=3",
  width: 1200,
  height: 630,
  alt: "Thomas Carrère, Directeur Marketing Externalisé pour les dirigeants de PME",
};

// Images de partage dédiées (1200 x 627), même charte que la bannière LinkedIn.
// Refaites en bleu nuit le 24/11/2026 (source : Selection-LinkedIn/cartes-bleu-nuit.html,
// hors dépôt) : toutes les versions ont été incrémentées ce jour-là.
// Utilisées par LinkedIn (rubrique Sélection, partages), WhatsApp, e-mail.
// « version » change l'adresse de l'image : à incrémenter quand LinkedIn garde
// en mémoire une ancienne version (ou une version floue) d'une image.
function imagePartage(fichier: string, alt: string, version = 1) {
  const suffixe = version > 1 ? `?v=${version}` : "";
  return { url: `/images/partage/${fichier}.jpg${suffixe}`, width: 1200, height: 627, alt };
}
export const IMAGE_OG_DIAGNOSTIC = imagePartage("partage-diagnostic", "Diagnostic et plan d'action, avec Thomas Carrère", 2);
export const IMAGE_OG_DME = imagePartage("partage-dme", "Le directeur marketing que vous n'avez pas encore : Thomas Carrère", 2);
export const IMAGE_OG_COACHING = imagePartage("partage-coaching", "Coaching Hebdo, avec Thomas Carrère", 2);
export const IMAGE_OG_GUIDE = imagePartage("partage-guide", "Combien coûte un directeur marketing externalisé ? Guide de Thomas Carrère", 3);
