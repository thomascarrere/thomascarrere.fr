// Image Open Graph partagee. A repeter dans le bloc openGraph de chaque page :
// Next remplace l'objet openGraph du layout au lieu de le fusionner.
export const IMAGE_OG = {
  url: "/images/og-thomas-carrere.jpg?v=2",
  width: 1200,
  height: 630,
  alt: "Thomas Carrère, Directeur Marketing Externalisé pour les dirigeants de PME",
};

// Images de partage dédiées (1200 x 627), même charte que la bannière LinkedIn.
// Utilisées par LinkedIn (rubrique Sélection, partages), WhatsApp, e-mail.
function imagePartage(fichier: string, alt: string) {
  return { url: `/images/partage/${fichier}.jpg`, width: 1200, height: 627, alt };
}
export const IMAGE_OG_DIAGNOSTIC = imagePartage("partage-diagnostic", "Diagnostic et plan d'action, avec Thomas Carrère");
export const IMAGE_OG_DME = imagePartage("partage-dme", "Le directeur marketing que vous n'avez pas encore : Thomas Carrère");
export const IMAGE_OG_COACHING = imagePartage("partage-coaching", "Coaching Hebdo, avec Thomas Carrère");
export const IMAGE_OG_GUIDE = imagePartage("partage-guide", "Combien coûte un directeur marketing externalisé ? Guide de Thomas Carrère");
