"use client";

import { useEffect } from "react";
import { ctaItem } from "@/config/nav";
import { Button } from "@/components/ui/Button";
import { NavLinks } from "@/components/header/NavLinks";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <nav
        id="mobile-navigation"
        className={`absolute inset-x-0 top-0 flex min-h-dvh flex-col bg-bg px-6 pb-10 pt-24 transition-all duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        aria-label="Mobile"
      >
        <NavLinks onNavigate={onClose} className="flex-col items-start gap-7" />

        <div className="mt-auto border-t border-border pt-8">
          <Button href={ctaItem.href} onClick={onClose} className="w-full">
            {ctaItem.label}
          </Button>
        </div>
      </nav>
    </div>
  );
}
