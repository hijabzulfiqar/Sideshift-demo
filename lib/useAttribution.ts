"use client";
import { useState, useEffect } from "react";
import { appendAttributionToUrl } from "@/lib/attribution";


export function useAttributedHref() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return (href: string) => (hydrated ? appendAttributionToUrl(href) : href);
}
