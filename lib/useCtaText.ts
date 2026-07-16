"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";

/** PostHog feature-flag key controlling the primary CTA text A/B test. */
export const CTA_FLAG_KEY = "go-cta-text-v1";

/** Hardcoded default CTA text — renders when the flag is off/broken. */
export const DEFAULT_CTA_TEXT = "Launch your campaign";

/**
 * Reads the flag payload and returns payload.ctaText when it is a valid,
 * non-empty string. Any missing/invalid payload — or a PostHog failure —
 * falls back to the hardcoded default. Fully guarded so nothing goes dark.
 */
function resolveCtaText(): string {
  try {
    const payload = posthog.getFeatureFlagPayload(CTA_FLAG_KEY) as
      | { ctaText?: unknown }
      | undefined;
    const ctaText = payload?.ctaText;
    if (typeof ctaText === "string" && ctaText.trim().length > 0) {
      return ctaText;
    }
  } catch {
    // PostHog unavailable or payload malformed — keep the default.
  }
  return DEFAULT_CTA_TEXT;
}

/** Stamps the resolved variant on the session so events can be segmented. */
function registerVariant(): void {
  try {
    posthog.register({
      go_cta_variant: posthog.getFeatureFlag(CTA_FLAG_KEY) || "default",
    });
  } catch {
    // PostHog unavailable — nothing to register.
  }
}

/**
 * Resolves the CTA button text for the `go-cta-text-v1` experiment.
 *
 * SINGLE RESOLUTION POINT: call this exactly once, in the top-level page
 * component. The returned string is passed down to every CTA as a prop — no
 * other component reads the flag or subscribes to PostHog.
 *
 * No flicker: returns DEFAULT_CTA_TEXT on first paint and swaps to the flag's
 * payload.ctaText only once PostHog resolves its flags. Flag off, missing or
 * invalid payload, or a PostHog failure → the default is kept.
 */
export function useCtaText(): string {
  const [text, setText] = useState(DEFAULT_CTA_TEXT);

  useEffect(() => {
    // Flags may already be loaded (e.g. after a client-side navigation).
    registerVariant();
    setText(resolveCtaText());

    let unsubscribe: (() => void) | undefined;
    try {
      unsubscribe = posthog.onFeatureFlags(() => {
        registerVariant();
        setText(resolveCtaText());
      });
    } catch {
      // PostHog unavailable — keep the default.
    }

    return () => {
      try {
        unsubscribe?.();
      } catch {
        // ignore
      }
    };
  }, []);

  return text;
}
