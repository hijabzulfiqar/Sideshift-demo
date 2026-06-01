
'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { appendAttributionToUrl, isPassthroughUrl } from '@/lib/attribution';

const SENTINEL_ATTR = 'data-attribution-applied';
const OPT_OUT_ATTR = 'data-no-attribution';

function rewriteAllLinks(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href]');
  links.forEach((link) => {
    if (link.hasAttribute(OPT_OUT_ATTR)) return;
    if (link.hasAttribute(SENTINEL_ATTR)) return;
    if (!isPassthroughUrl(link.href)) {
      link.setAttribute(SENTINEL_ATTR, 'skipped');
      return;
    }
    const newHref = appendAttributionToUrl(link.href);
    if (newHref !== link.href) {
      link.href = newHref;
    }
    link.setAttribute(SENTINEL_ATTR, 'true');
  });
}

function clearSentinels(): void {
  document
    .querySelectorAll(`a[${SENTINEL_ATTR}]`)
    .forEach((el) => el.removeAttribute(SENTINEL_ATTR));
}

function AttributionLinkRewriterInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    clearSentinels();

    const run = () => rewriteAllLinks();

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
      const handle = w.requestIdleCallback(run, { timeout: 500 });
      return () => w.cancelIdleCallback?.(handle);
    } else {
      const handle = window.setTimeout(run, 100);
      return () => window.clearTimeout(handle);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function AttributionLinkRewriter() {
  return (
    <Suspense fallback={null}>
      <AttributionLinkRewriterInner />
    </Suspense>
  );
}