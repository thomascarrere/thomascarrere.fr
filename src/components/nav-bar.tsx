"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackCtaNavbar, trackClickLinkedin } from "@/lib/gtag";
import { useScrolled } from "@/hooks/use-scrolled";

const LIENS = [
  { href: "/sprint-fondations", label: "Sprint Fondations" },
  {
    href: "/direction-marketing-externalise",
    label: "Direction Marketing externalisée",
  },
  { href: "/qui-suis-je", label: "Qui suis-je ?" },
];

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";
const LINKEDIN = "https://www.linkedin.com/in/thomascarrere/";

export function NavBar() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled(50);
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !menuOuvert;

  return (
    <nav
      className={`sticky top-0 z-50 min-h-[88px] px-[5%] py-6 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(22,0,66,0.06)]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Thomas Carrère"
            width={160}
            height={40}
            className={`h-10 w-auto transition-all duration-300 ${
              transparent ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {LIENS.map((lien) => {
            const actif = pathname === lien.href;
            return (
              <Link
                key={lien.href}
                href={lien.href}
                className={`rounded-full px-6 py-2 text-sm font-medium tracking-[-0.01em] transition-colors ${
                  transparent
                    ? actif
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : actif
                      ? "text-active-link"
                      : "text-heading hover:bg-bg-hover"
                }`}
              >
                {lien.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div
            className={`border-l pl-4 transition-colors duration-300 ${
              transparent ? "border-white/20" : "border-border"
            }`}
          >
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClickLinkedin("navbar")}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                transparent
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-bg-hover hover:bg-border"
              }`}
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={18}
                height={18}
                className="transition-all duration-300"
              />
            </a>
          </div>
          <a
            href={CALENDRIER}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackCtaNavbar}
            className={`inline-flex items-center justify-center rounded-full min-h-[40px] px-6 py-2 text-sm font-medium tracking-[-0.02em] transition-all duration-300 ${
              transparent
                ? "border border-white/30 text-white hover:bg-white/10"
                : "bg-violet text-white hover:bg-violet-hover"
            }`}
          >
            Discutons →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 transition-transform ${
              transparent ? "bg-white" : "bg-heading"
            } ${menuOuvert ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 transition-opacity ${
              transparent ? "bg-white" : "bg-heading"
            } ${menuOuvert ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 transition-transform ${
              transparent ? "bg-white" : "bg-heading"
            } ${menuOuvert ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOuvert && (
        <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
          <div className="flex flex-col gap-2 max-w-[1280px] mx-auto">
            {LIENS.map((lien) => {
              const actif = pathname === lien.href;
              return (
                <Link
                  key={lien.href}
                  href={lien.href}
                  onClick={() => setMenuOuvert(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    actif
                      ? "text-active-link bg-violet-bg"
                      : "text-heading hover:bg-bg-hover"
                  }`}
                >
                  {lien.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 mt-2 px-4">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClickLinkedin("navbar-mobile")}
                className="w-10 h-10 rounded-full bg-bg-hover flex items-center justify-center"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href={CALENDRIER}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCtaNavbar}
                className="inline-flex items-center justify-center rounded-full bg-violet text-white min-h-[40px] px-6 py-2 text-sm font-medium hover:bg-violet-hover transition-colors flex-1"
              >
                Discutons →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
