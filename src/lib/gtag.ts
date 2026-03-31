export const GA_ID = "G-Q2Y0BZEN2C";

type GtagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GtagEvent) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackGenerateLead(label: string) {
  trackEvent({
    action: "generate_lead",
    category: "conversion",
    label,
  });
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-11120283655/SwKqCPuf-ZIcEIegyLYp",
    });
  }
}

export function trackCtaNavbar() {
  trackEvent({
    action: "cta_navbar",
    category: "conversion",
    label: "Discutons",
  });
}

export function trackViewOffer(offre: string) {
  trackEvent({
    action: "view_offer",
    category: "engagement",
    label: offre,
  });
}

export function trackClickLinkedin(emplacement: string) {
  trackEvent({
    action: "click_linkedin",
    category: "engagement",
    label: emplacement,
  });
}

export function trackClickParcours(emplacement: string) {
  trackEvent({
    action: "click_parcours",
    category: "engagement",
    label: emplacement,
  });
}
