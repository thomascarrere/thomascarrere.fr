"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";
const MAX_AGE_MS = 390 * 24 * 60 * 60 * 1000; // ~13 mois

type Choix = "accepted" | "refused";
type Stored = { choix: Choix; date: number };

export const OUVRIR_COOKIES_EVENT = "ouvrir-parametres-cookies";

function lire(): Stored | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Stored;
    if (!parsed?.choix || !parsed?.date) return null;
    if (Date.now() - parsed.date > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function enregistrer(choix: Choix) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choix, date: Date.now() } satisfies Stored)
    );
  } catch {
    // localStorage indisponible : on ignore, le bandeau réapparaitra
  }
}

function appliquerConsentement(accorde: boolean) {
  const valeur = accorde ? "granted" : "denied";
  const params = {
    ad_storage: valeur,
    ad_user_data: valeur,
    ad_personalization: valeur,
    analytics_storage: valeur,
  };
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", params);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(["consent", "update", params]);
  }
}

export function BandeauCookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = lire();
    if (stored) {
      appliquerConsentement(stored.choix === "accepted");
    } else {
      setVisible(true);
    }
    const ouvrir = () => setVisible(true);
    window.addEventListener(OUVRIR_COOKIES_EVENT, ouvrir);
    return () => window.removeEventListener(OUVRIR_COOKIES_EVENT, ouvrir);
  }, []);

  function choisir(choix: Choix) {
    enregistrer(choix);
    appliquerConsentement(choix === "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-[1140px] rounded-2xl border border-border bg-white shadow-[0_8px_40px_rgba(22,0,66,0.18)] p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <p className="text-text text-[14px] leading-6 flex-1">
          Ce site utilise des cookies de mesure d’audience (Google Analytics) et
          de publicité (Google Ads). Vous pouvez les accepter ou les refuser. En
          savoir plus dans nos{" "}
          <Link
            href="/mentions-legales#confidentialite"
            className="text-violet font-medium hover:text-violet-hover transition-colors underline underline-offset-2"
          >
            mentions légales
          </Link>
          .
        </p>
        <div className="flex flex-col-reverse sm:flex-row gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choisir("refused")}
            className="inline-flex items-center justify-center rounded-full min-h-[44px] px-6 py-2.5 text-sm font-medium tracking-[-0.02em] bg-white text-heading border border-border hover:bg-bg-hover hover:border-transparent transition-colors duration-300 cursor-pointer"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={() => choisir("accepted")}
            className="inline-flex items-center justify-center rounded-full min-h-[44px] px-6 py-2.5 text-sm font-medium tracking-[-0.02em] bg-violet text-white hover:bg-violet-hover transition-colors duration-300 cursor-pointer"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
