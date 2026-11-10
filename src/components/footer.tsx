"use client";

import Image from "next/image";
import Link from "next/link";
import { trackClickLinkedin } from "@/lib/gtag";
import { OUVRIR_COOKIES_EVENT } from "@/components/bandeau-cookies";

const LINKEDIN = "https://www.linkedin.com/in/thomascarrere/";

export function Footer() {
  return (
    <footer className="bg-[#160042] px-[5%] py-8">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/">
          <Image
            src="/images/logo-horizontal.png"
            alt="Thomas Carrère"
            width={88}
            height={44}
            className="h-11 w-auto brightness-0 invert"
          />
        </Link>

        {/* Liens en 13 px, zone cliquable de 44 px de haut */}
        <div className="flex flex-col items-center text-[13px] font-medium text-white/70 text-center">
          <p className="text-[13px] leading-normal">
            &copy; 2026 Thomas Carrère : Directeur Marketing Externalisé
            &middot; La Réunion, France
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6">
            <li>
              <Link
                href="/guide/directeur-marketing-externalise"
                className="inline-flex items-center min-h-[44px] hover:text-white transition-colors underline underline-offset-2"
              >
                Guide : directeur marketing externalisé
              </Link>
            </li>
            <li>
              <Link
                href="/mentions-legales"
                className="inline-flex items-center min-h-[44px] hover:text-white transition-colors underline underline-offset-2"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event(OUVRIR_COOKIES_EVENT))
                }
                className="inline-flex items-center min-h-[44px] hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
              >
                Gérer les cookies
              </button>
            </li>
          </ul>
        </div>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClickLinkedin("footer")}
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={18}
            height={18}
            className="rounded-sm"
          />
        </a>
      </div>
    </footer>
  );
}
