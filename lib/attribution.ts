
export const TRACKING_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',     // Google Ads
  'fbclid',    // Meta
  'ttclid',    // TikTok
  'li_fat_id', // LinkedIn
  'msclkid',   // Microsoft / Bing
  'twclid',    // Twitter / X
] as const;

export type TrackingKey = (typeof TRACKING_KEYS)[number];

export type Attribution = Partial<Record<TrackingKey, string>> & {
  /** ISO timestamp of when this attribution was captured */
  captured_at?: string;
};


export const PASSTHROUGH_DOMAINS = [
  'sideshift.app', 
  'app.sideshift.app',
  'iclosed.io',
] as const;


const STORAGE_KEY = 'sideshift.attribution';

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
      /* storage disabled — links still navigate, just no attribution */
    }
  },
  clear(): void {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  },
};

export function captureAttributionFromUrl(
  search: string = typeof window !== 'undefined' ? window.location.search : '',
): void {
  const params = new URLSearchParams(search);
  const captured: Attribution = {};

  for (const key of TRACKING_KEYS) {
    const value = params.get(key);
    if (value) captured[key] = value;
  }

  if (Object.keys(captured).length === 0) return;

  captured.captured_at = new Date().toISOString();
  storage.set(JSON.stringify(captured));
}


export function getAttribution(): Attribution | null {
  const raw = storage.get();
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return null;
  }
}


export function clearAttribution(): void {
  storage.clear();
}

export function appendAttributionToUrl(href: string): string {
  if (!href) return href;

  const attribution = getAttribution();
  if (!attribution) return href;

  const base =
    typeof window !== 'undefined' ? window.location.href : 'https://sideshift.app';

  let url: URL;
  try {
    url = new URL(href, base);
  } catch {
    return href;
  }

  const isPassthrough = PASSTHROUGH_DOMAINS.some((domain) =>
    url.hostname.includes(domain),
  );
  if (!isPassthrough) return href;

  for (const key of TRACKING_KEYS) {
    const value = attribution[key];
    if (value && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  }

  // Preserve relative-vs-absolute form of input
  if (href.startsWith('/') || href.startsWith('?') || href.startsWith('#')) {
    return url.pathname + url.search + url.hash;
  }
  return url.toString();
}


export function isPassthroughUrl(href: string): boolean {
  if (!href) return false;
  const base =
    typeof window !== 'undefined' ? window.location.href : 'https://sideshift.app';
  try {
    const url = new URL(href, base);
    return PASSTHROUGH_DOMAINS.some((domain) => url.hostname.includes(domain));
  } catch {
    return false;
  }
}