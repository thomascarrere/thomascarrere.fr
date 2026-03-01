import Image from "next/image";
import Link from "next/link";

const LINKEDIN = "https://www.linkedin.com/in/thomascarrere/";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border px-[5%] py-8">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Thomas Carrere"
            width={120}
            height={30}
            className="h-8 w-auto"
          />
        </Link>

        <p className="text-xs font-medium text-text-muted">
          &copy; 2026 Thomas Carrere
        </p>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-bg-hover flex items-center justify-center hover:bg-border transition-colors"
        >
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={18}
            height={18}
          />
        </a>
      </div>
    </footer>
  );
}
