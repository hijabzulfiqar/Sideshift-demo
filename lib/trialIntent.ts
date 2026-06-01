import type { Attribution } from '@/lib/attribution';
import { getAttribution } from '@/lib/attribution';

export type Plan = 'starter' | 'growth' | 'agency_flat' | 'agency_per_client';
export type Billing = 'monthly' | 'annual';
export type Segment = 'brand' | 'agency';

export type TrialIntent = {
  plan: Plan;
  billing: Billing;
  segment: Segment;
  attribution_snapshot?: Attribution;
  captured_at: string;
};

const STORAGE_KEY = 'sideshift.trial_intent';

const storage = {
  get(): string | null {
    if (typeof window === 'undefined') return null;
    try {
      return window.sessionStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  },
  set(value: string): void {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage disabled — CTA still navigates with URL params */
    }
  },
  remove(): void {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  },
};

export function getTrialIntent(): TrialIntent | null {
  const raw = storage.get();
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as TrialIntent;
    if (!parsed.plan || !parsed.billing || !parsed.segment) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearTrialIntent(): void {
  storage.remove();
}
export function setTrialIntent(core: {
  plan: Plan;
  billing: Billing;
  segment: Segment;
}): TrialIntent {
  const intent: TrialIntent = {
    plan: core.plan,
    billing: core.billing,
    segment: core.segment,
    attribution_snapshot: getAttribution() ?? undefined,
    captured_at: new Date().toISOString(),
  };

  storage.set(JSON.stringify(intent));
  return intent;
}