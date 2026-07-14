"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";

/**
 * Sticky bottom CTA bar for mobile (< md).
 * Hidden while the hero CTA (#hero-cta) is in view; slides up once the user
 * scrolls past it, and hides again when they scroll back to the hero.
 */
export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={
        "fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white px-4 py-3 shadow-[0_-1px_8px_rgba(0,0,0,0.06)] transition-transform duration-300 md:hidden " +
        (visible ? "translate-y-0" : "pointer-events-none translate-y-full")
      }
    >
      <Link
        href="https://sideshift.app/plans/brands"
        className="block"
        onClick={() => handleCTAClick("signup_sticky_mobile")}
      >
        <Button variant="primary" className="w-full">
          <span>Launch your campaign</span>
        </Button>
      </Link>
    </div>
  );
}
