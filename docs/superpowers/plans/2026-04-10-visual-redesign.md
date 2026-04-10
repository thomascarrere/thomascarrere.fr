# Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform thomascarrere.fr from a clean but generic design into a premium hybrid dark/light visual identity with subtle animations.

**Architecture:** Dark hero + dark CTA final bookend the page. All middle sections stay light. A transparent-to-white navbar reacts to scroll. Three custom React hooks (useInView, useCountUp, useScrolled) power scroll-triggered animations without external dependencies. The Section component gains a "dark" variant. The Bouton component gains a "glow" variant. Page.tsx splits into a server component (metadata/JSON-LD) and a client component (interactive content with animations).

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, CSS keyframes, Intersection Observer API, requestAnimationFrame.

**Spec:** `docs/superpowers/specs/2026-04-10-visual-redesign-design.md`

---

### Task 1: CSS foundation — keyframes and animation utilities

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add keyframes and utility classes to globals.css**

Add at the end of the file:

```css
/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(68, 63, 222, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(68, 63, 222, 0.6);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out both;
}

.animate-glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

.animate-stagger-1 { animation-delay: 0ms; }
.animate-stagger-2 { animation-delay: 100ms; }
.animate-stagger-3 { animation-delay: 200ms; }
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "Add CSS keyframes for fade-in, glow-pulse, and stagger animations"
```

---

### Task 2: useScrolled hook

**Files:**
- Create: `src/hooks/use-scrolled.ts`

- [ ] **Step 1: Create the hook**

```typescript
"use client";

import { useState, useEffect } from "react";

export function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/use-scrolled.ts
git commit -m "Add useScrolled hook for navbar scroll detection"
```

---

### Task 3: useInView hook

**Files:**
- Create: `src/hooks/use-in-view.ts`

- [ ] **Step 1: Create the hook**

```typescript
"use client";

import { useRef, useState, useEffect } from "react";

export function useInView(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) {
            observer.unobserve(element);
          }
        } else if (options?.once === false) {
          setInView(false);
        }
      },
      { threshold: options?.threshold ?? 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, inView };
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/use-in-view.ts
git commit -m "Add useInView hook for scroll-triggered animations"
```

---

### Task 4: useCountUp hook

**Files:**
- Create: `src/hooks/use-count-up.ts`

- [ ] **Step 1: Create the hook**

```typescript
"use client";

import { useState, useEffect } from "react";

export function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let rafId: number;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, active]);

  return count;
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/use-count-up.ts
git commit -m "Add useCountUp hook for animated number counters"
```

---

### Task 5: AnimatedSection wrapper component

**Files:**
- Create: `src/components/animated-section.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useInView } from "@/hooks/use-in-view";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/animated-section.tsx
git commit -m "Add AnimatedSection wrapper for scroll-triggered fade-in"
```

---

### Task 6: Section component — add dark variant

**Files:**
- Modify: `src/components/section.tsx`

- [ ] **Step 1: Update Section to support dark bg**

Replace the entire file:

```tsx
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: "blanc" | "alt" | "dark";
  large?: boolean;
  id?: string;
};

export function Section({
  children,
  className = "",
  bg = "blanc",
  large = false,
  id,
}: SectionProps) {
  const bgClass = {
    blanc: "bg-white",
    alt: "bg-bg-alt",
    dark: "bg-[#160042] relative overflow-hidden",
  }[bg];
  const maxWidth = large ? "max-w-[1280px]" : "max-w-[1140px]";

  return (
    <section id={id} className={`py-18 px-[5%] ${bgClass} ${className}`}>
      <div className={`mx-auto ${maxWidth} relative z-10`}>{children}</div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds. All existing sections using "blanc" or "alt" unchanged.

- [ ] **Step 3: Commit**

```bash
git add src/components/section.tsx
git commit -m "Add dark variant to Section component"
```

---

### Task 7: Bouton component — add glow variant

**Files:**
- Modify: `src/components/bouton.tsx`

- [ ] **Step 1: Add glow variant**

Change the type from:
```typescript
  variante?: "primaire" | "secondaire";
```
to:
```typescript
  variante?: "primaire" | "secondaire" | "glow";
```

Change the styles object from:
```typescript
  const styles = {
    primaire: "bg-violet text-white hover:bg-violet-hover",
    secondaire:
      "bg-white text-heading border border-border hover:bg-bg-hover hover:border-transparent",
  };
```
to:
```typescript
  const styles = {
    primaire: "bg-violet text-white hover:bg-violet-hover",
    secondaire:
      "bg-white text-heading border border-border hover:bg-bg-hover hover:border-transparent",
    glow: "bg-violet text-white hover:bg-violet-hover animate-glow-pulse",
  };
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds. Existing buttons unchanged.

- [ ] **Step 3: Commit**

```bash
git add src/components/bouton.tsx
git commit -m "Add glow variant to Bouton component"
```

---

### Task 8: NavBar — transparent on hero, white on scroll

**Files:**
- Modify: `src/components/nav-bar.tsx`

- [ ] **Step 1: Update NavBar**

Replace the entire file with:

```tsx
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
    label: "Direction Marketing externalisee",
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
            alt="Thomas Carrere"
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
                className={`transition-all duration-300 ${
                  transparent ? "brightness-0 invert" : ""
                }`}
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
```

**Important:** The navbar label "Direction Marketing externalisee" lost its accent (e). Verify and fix if needed to match the original: `"Direction Marketing externalisée"`.

- [ ] **Step 2: Verify build and test in browser**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds. On homepage: navbar transparent at top, white on scroll. On sub-pages: always white.

- [ ] **Step 3: Commit**

```bash
git add src/components/nav-bar.tsx
git commit -m "Navbar transparent on hero, transitions to white on scroll"
```

---

### Task 9: Compteurs component for social proof

**Files:**
- Create: `src/components/compteurs.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";

type Compteur = {
  valeur: number;
  suffixe?: string;
  label: string;
};

type CompteursProps = {
  items: Compteur[];
};

export function Compteurs({ items }: CompteursProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="flex justify-center gap-10 md:gap-16">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-10 md:gap-16">
          {i > 0 && <div className="w-px h-12 bg-border" />}
          <div className="text-center">
            <CompteurValeur
              valeur={item.valeur}
              suffixe={item.suffixe}
              active={inView}
            />
            <p className="text-text-muted text-sm mt-1">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CompteurValeur({
  valeur,
  suffixe = "",
  active,
}: {
  valeur: number;
  suffixe?: string;
  active: boolean;
}) {
  const count = useCountUp(valeur, 1500, active);
  return (
    <span className="text-4xl font-bold text-violet font-archivo tracking-tight">
      {count}
      {suffixe}
    </span>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/compteurs.tsx
git commit -m "Add Compteurs component with animated count-up"
```

---

### Task 10: Update carte-temoignage — refined styling

**Files:**
- Modify: `src/components/carte-temoignage.tsx`

- [ ] **Step 1: Update card styling**

Replace the outer div's className from:
```tsx
    <div className="bg-white rounded-xl p-8 shadow-[23px_23px_64px_-16px_#393b6a0f]">
```
To:
```tsx
    <div className="bg-white rounded-xl p-8 border border-border shadow-[0_4px_16px_rgba(22,0,66,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
```

Replace the star fill color from:
```tsx
            fill="#443fde"
```
To:
```tsx
            fill="#f59e0b"
```

Add italic to the testimonial text. Change:
```tsx
      <p className="text-text mb-6 text-[15px] leading-relaxed">{texte}</p>
```
To:
```tsx
      <p className="text-text mb-6 text-[15px] leading-relaxed italic">{texte}</p>
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/carte-temoignage.tsx
git commit -m "Refine testimonial cards with border, amber stars, hover lift"
```

---

### Task 11: Update accordion — refined styling

**Files:**
- Modify: `src/components/accordion.tsx`

- [ ] **Step 1: Update accordion container and items**

Replace the entire file:

```tsx
"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  reponse: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [ouvert, setOuvert] = useState<number | null>(null);

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden divide-y divide-border">
      {items.map((item, index) => (
        <div
          key={index}
          className="px-6 py-5 cursor-pointer"
          onClick={() => setOuvert(ouvert === index ? null : index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-heading">{item.question}</h3>
            <span
              className={`text-violet text-xl font-light shrink-0 ml-4 transition-transform duration-300 ${
                ouvert === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              ouvert === index ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <p className="text-text text-[15px] leading-relaxed">
              {item.reponse}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/accordion.tsx
git commit -m "Refine accordion to single container with plus/x toggle"
```

---

### Task 12: Update footer — dark background

**Files:**
- Modify: `src/components/footer.tsx`

- [ ] **Step 1: Update footer styling**

Replace the entire file:

```tsx
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
            alt="Thomas Carrere"
            width={120}
            height={30}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>

        <p className="text-xs font-medium text-white/50 text-center">
          &copy; 2026 Thomas Carrere — Consultant Marketing
          <br />
          <span className="text-[11px]">
            La Reunion &middot; France
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
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/footer.tsx
git commit -m "Update footer to dark background matching new design"
```

---

### Task 13: Create AccueilClient — main page refactor with all visual changes

**Files:**
- Create: `src/app/accueil-client.tsx`
- Modify: `src/app/page.tsx`

This is the core task. We extract all interactive/visual content from page.tsx into a client component that uses AnimatedSection for scroll animations, the new dark hero, enhanced cards, compteurs, and dark CTA final. Page.tsx stays as server component for metadata and JSON-LD.

- [ ] **Step 1: Create accueil-client.tsx**

Create `src/app/accueil-client.tsx` with the full client-side page content:

```tsx
"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { Bouton } from "@/components/bouton";
import { CarteTemoignage } from "@/components/carte-temoignage";
import { Accordion } from "@/components/accordion";
import { GrilleLogos } from "@/components/grille-logos";
import { LienTracker } from "@/components/lien-tracker";
import { Compteurs } from "@/components/compteurs";
import { AnimatedSection } from "@/components/animated-section";

type AccueilClientProps = {
  logoClients: { nom: string; image?: string }[];
  faq: { question: string; reponse: string }[];
  temoignages: {
    nom: string;
    entreprise: string;
    texte: string;
    avatar?: string;
  }[];
};

const CALENDRIER = "https://calendar.app.google/xaB44wDhgrkCX8Rj8";

export function AccueilClient({
  logoClients,
  faq,
  temoignages,
}: AccueilClientProps) {
  return (
    <>
      {/* Hero */}
      <Section bg="dark" className="!py-0">
        <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(68,63,222,0.25)_0%,transparent_70%)] blur-[40px] z-0" />
        <div className="absolute bottom-[-40px] left-[-20px] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(157,154,234,0.15)_0%,transparent_70%)] blur-[50px] z-0" />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[840px] mx-auto text-center py-20 md:py-28">
          <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
            Consultant marketing pour PME et TPE
          </p>
          <h1 className="mb-6 text-white">
            Le marketing de votre entreprise devient enfin{" "}
            <span className="bg-gradient-to-r from-violet-light to-violet bg-clip-text text-transparent">
              clair et organise
            </span>
          </h1>
          <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
            Base a La Reunion, j&apos;aide les dirigeants de PME a simplifier
            leurs messages et a structurer leurs actions de vente.{" "}
            <strong className="text-white/90">
              15 ans d&apos;experience
            </strong>{" "}
            et{" "}
            <strong className="text-white/90">
              120 entreprises accompagnees
            </strong>{" "}
            pour construire des bases solides, sans complexite inutile.
          </p>
          <Bouton href={CALENDRIER} externe variante="glow">
            Reserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>

      {/* Problematiques */}
      <Section bg="alt">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Besoin de clarte",
              texte:
                "Votre offre est excellente, mais elle merite d'etre expliquee plus simplement pour convaincre plus vite.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
            },
            {
              titre: "Besoin de structure",
              texte:
                "Vos equipes ont besoin de methodes et d'outils concrets pour ne plus perdre de temps au quotidien.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              ),
            },
            {
              titre: "Besoin d'accompagnement",
              texte:
                "Vous n'avez pas besoin d'une agence de plus, mais d'un partenaire qui s'implique vraiment a vos cotes.",
              icone: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#443fde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <AnimatedSection key={item.titre} delay={i * 100}>
              <div className="bg-white rounded-xl p-10 text-center flex flex-col items-center border border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(22,0,66,0.08)] transition-all duration-200">
                <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-violet-bg to-violet-lighter flex items-center justify-center mb-4">
                  {item.icone}
                </div>
                <h3 className="mb-3">{item.titre}</h3>
                <p className="text-text">{item.texte}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Offre Sprint Fondations */}
      <Section>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.08em] uppercase text-violet mb-4">
                Le diagnostic Fondations
              </p>
              <h2 className="mb-6">15 jours pour tout remettre a plat</h2>
              <p className="text-lg leading-8 text-text mb-8 tracking-[-0.02em]">
                Je m&apos;immerge dans votre activite pendant deux semaines pour
                lever les doutes et installer votre nouveau systeme de travail.
                Pas de theorie, juste du concret.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    titre: "Votre message clarifie",
                    desc: "Pour etre compris par vos clients des les premieres secondes",
                  },
                  {
                    titre: "Vos outils de vente",
                    desc: "Des modeles d'emails et des messages prets a l'emploi pour vos equipes",
                  },
                  {
                    titre: "Votre espace de pilotage",
                    desc: "Un outil simple (Notion) pour centraliser vos idees, vos projets et vos resultats",
                  },
                  {
                    titre: "Votre feuille de route",
                    desc: "Un plan precis sur 90 jours pour savoir exactement ou vous allez",
                  },
                ].map((item) => (
                  <div key={item.titre} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-heading">{item.titre}</p>
                      <p className="text-text text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Bouton href="/sprint-fondations" variante="secondaire">
                Decouvrir l&apos;offre &quot;Fondations&quot;
              </Bouton>
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/thomas-conference.jpg"
                alt="Thomas Carrere en conference"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160042]/10 to-transparent" />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* A propos + logos */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Qui suis-je
            </p>
            <h2 className="mb-6">
              Un regard exterieur, 15 ans d&apos;experience
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Ancien dirigeant d&apos;agence, j&apos;ai accompagne plus
              d&apos;une centaine d&apos;entreprises avant de choisir de
              travailler en direct avec les dirigeants. Mon approche est celle du
              bon sens : on garde ce qui marche, on simplifie ce qui est
              complexe, et on construit sur la duree.
            </p>
            <div className="mt-6">
              <LienTracker
                href="/qui-suis-je"
                event="parcours"
                label="accueil"
                className="text-violet font-medium text-sm hover:text-violet-hover transition-colors"
              >
                En savoir plus sur mon parcours →
              </LienTracker>
            </div>
          </div>
        </AnimatedSection>
        <div className="mb-12">
          <Compteurs
            items={[
              { valeur: 120, suffixe: "+", label: "entreprises accompagnees" },
              { valeur: 15, label: "ans d'experience" },
            ]}
          />
        </div>
        <GrilleLogos logos={logoClients} />
      </Section>

      {/* Direction Marketing */}
      <Section>
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-violet mb-4">
              Direction Marketing externalisee
            </p>
            <h2 className="mb-6">
              Un Directeur Marketing a vos cotes, chaque mois
            </h2>
            <p className="text-lg leading-8 text-text tracking-[-0.02em]">
              Une fois les bases posees, je ne vous laisse pas seul. Je peux
              devenir votre bras droit regulier pour piloter votre strategie,
              coordonner vos prestataires et veiller a ce que vos objectifs
              soient atteints.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: "Gouvernance",
              desc: "Je cadre, je coache vos equipes et je pilote vos prestataires",
              accent: false,
            },
            {
              titre: "Production",
              desc: "Je cree vos contenus strategiques (cas clients, sequences mails, pubs, etc.)",
              accent: true,
            },
            {
              titre: "CMO complet",
              desc: "Je gere l'integralite de votre marketing comme si c'etait ma propre boite",
              accent: false,
            },
          ].map((item, i) => (
            <AnimatedSection key={item.titre} delay={i * 100}>
              <div
                className={`rounded-xl p-8 text-center border-t-[3px] transition-all duration-200 hover:-translate-y-0.5 ${
                  item.accent
                    ? "bg-white border-violet shadow-[0_8px_32px_rgba(68,63,222,0.1)] -translate-y-1 border border-violet"
                    : "bg-white border-violet-lighter border border-border"
                }`}
              >
                {item.accent && (
                  <span className="inline-block px-3 py-0.5 bg-violet-bg rounded-full text-xs font-bold text-violet mb-3">
                    Populaire
                  </span>
                )}
                <h3 className="mb-3">{item.titre}</h3>
                <p className="text-text text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Bouton href="/direction-marketing-externalise" variante="secondaire">
            Decouvrir la Direction Marketing Externalisee
          </Bouton>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="alt">
        <AnimatedSection>
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-12">
              <h2>Questions frequentes</h2>
            </div>
            <Accordion items={faq} />
          </div>
        </AnimatedSection>
      </Section>

      {/* Temoignages */}
      <Section>
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-[0.08em] uppercase text-text-muted mb-4">
              Temoignages
            </p>
            <h2>Ce qu&apos;ils disent</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temoignages.map((t, i) => (
            <AnimatedSection key={t.nom} delay={(i % 3) * 100}>
              <CarteTemoignage
                nom={t.nom}
                entreprise={t.entreprise}
                texte={t.texte}
                avatar={t.avatar}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="dark">
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[radial-gradient(ellipse,rgba(68,63,222,0.2)_0%,transparent_70%)] blur-[40px] z-0" />
        <div className="max-w-[840px] mx-auto text-center py-8">
          <p className="text-sm font-bold tracking-[0.12em] uppercase text-violet-light mb-4">
            On y va ?
          </p>
          <h2 className="mb-6 text-white">
            Pret a structurer votre marketing ?
          </h2>
          <p className="text-lg leading-8 text-white/60 mb-8 tracking-[-0.02em]">
            30 minutes pour faire le point sur vos blocages. C&apos;est gratuit
            et sans engagement.
          </p>
          <Bouton href={CALENDRIER} externe variante="glow">
            Reserver mon diagnostic offert (30min) →
          </Bouton>
        </div>
      </Section>
    </>
  );
}
```

**IMPORTANT:** The text content above has been stripped of French accents for safety (JSX encoding). During implementation, copy the exact French text from the original `page.tsx` to preserve all accents (e, a, etc.). The accented text uses `&apos;` JSX entities which work correctly.

- [ ] **Step 2: Update page.tsx to use AccueilClient**

Replace the entire file content of `src/app/page.tsx`. Keep the data constants (LOGOS_CLIENTS, FAQ, TEMOIGNAGES), JSON-LD scripts, and metadata. Remove all component imports except `AccueilClient`. The default export becomes:

```tsx
import type { Metadata } from "next";
import { AccueilClient } from "./accueil-client";

export const metadata: Metadata = {
  alternates: { canonical: "https://thomascarrere.fr" },
};

// ... LOGOS_CLIENTS, FAQ, TEMOIGNAGES, jsonLdFaq, jsonLdReviews stay exactly as-is ...

export default function Accueil() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReviews) }}
      />
      <AccueilClient
        logoClients={LOGOS_CLIENTS}
        faq={FAQ}
        temoignages={TEMOIGNAGES}
      />
    </>
  );
}
```

Remove these imports from page.tsx (they're now in accueil-client.tsx):
- `Image` from "next/image"
- `Section`, `Bouton`, `CarteTemoignage`, `Accordion`, `GrilleLogos`, `LienTracker`

- [ ] **Step 3: Verify build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds. All sections render with animations.

- [ ] **Step 4: Commit**

```bash
git add src/app/accueil-client.tsx src/app/page.tsx
git commit -m "Extract client component with scroll animations and visual redesign"
```

---

### Task 14: Final build verification and visual check

**Files:** None (verification only)

- [ ] **Step 1: Full build**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run build`
Expected: Build succeeds with no errors or warnings.

- [ ] **Step 2: Dev server visual check**

Run: `cd /Users/mac/Documents/Projets/thomascarrere.fr && npm run dev`

Check in browser at localhost:3000:
- Navbar transparent on hero, white on scroll
- Hero dark with glows, gradient text, glowing CTA
- Problematiques cards fade in with stagger, hover lift works
- Sprint Fondations has violet surtitre, image has subtle overlay
- Compteurs animate from 0 to 120+ and 15
- Direction Marketing middle card elevated with "Populaire" badge
- FAQ is single container with plus/x toggle
- Testimonials have amber stars, italic text, hover lift
- CTA final is dark with glow
- Footer is dark
- All animations trigger on scroll

- [ ] **Step 3: Mobile check**

Check responsive at 375px width:
- Navbar hamburger works, mobile menu has white bg
- Hero text readable, CTA full width
- Cards stack to single column
- All sections look good at small width

- [ ] **Step 4: Commit any fixes if needed**

```bash
git add -A
git commit -m "Final visual polish and fixes"
```
