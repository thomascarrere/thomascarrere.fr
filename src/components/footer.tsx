"use client";

import Image from "next/image";
import Link from "next/link";
import { trackClickLinkedin } from "@/lib/gtag";

const LINKEDIN = "https://www.linkedin.com/in/thomascarrere/";

export function Footer() {
  return (
    <footer className="bg-[#160042] px-[5%] py-8">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Thomas Carrère"
            width={120}
            height={30}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>

        <p className="text-xs font-medium text-white/50 text-center">
          &copy; 2026 Thomas Carrère — Consultant Marketing
          <br />
          <span className="text-[11px]">
            La Réunion &middot; France
          </span>
        </p>

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
            className="brightness-0 invert"
          />
        </a>
      </div>
    </footer>
  );
}
