"use client";

import { useEffect, useState } from "react";
import { ctaItem } from "@/config/nav";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/header/Logo";
import { NavLinks } from "@/components/header/NavLinks";
import { MobileNav } from "@/components/header/MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
          scrolled || menuOpen
            ? "border-b border-border/70 bg-surface/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
          <Logo />

          <nav className="hidden lg:block" aria-label="Primary">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-3">
            <Button href={ctaItem.href} size="sm" className="hidden sm:inline-flex">
              {ctaItem.label}
            </Button>

            <button
              type="button"
              className="relative z-50 flex h-10 w-10 items-center justify-center text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 block h-px w-full origin-center bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6.5px] block h-px w-full bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[13px] block h-px w-full origin-center bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
