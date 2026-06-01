"use client";

import Script from "next/script";

export default function AttributionCookies() {
  return (
    <Script
      id="attribution-cookies"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const COOKIE_DOMAIN =".sideshift.app";
            const COOKIE_DAYS = 90;
            const TRACKED_PARAMS = [
              'utm_source', 'utm_medium', 'utm_campaign',
              'utm_content', 'utm_term', 'gclid', 'fbclid',
              'ref'
            ];
            function setCookie(name, value, days) {
              const expires = new Date(Date.now() + days * 864e5).toUTCString();
              document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; domain=' + COOKIE_DOMAIN + '; SameSite=Lax';
            }
            function getCookie(name) {
              const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
              return match ? decodeURIComponent(match[2]) : null;
            }
            const params = new URLSearchParams(window.location.search);
            const captured = {};
            TRACKED_PARAMS.forEach(function(key) {
              if (params.get(key)) captured[key] = params.get(key);
            });
            if (Object.keys(captured).length === 0) return;
            const payload = Object.assign({}, captured, {
              referrer: document.referrer || 'direct',
              landing_page: window.location.pathname,
              captured_at: new Date().toISOString()
            });
            if (!getCookie('attribution_first')) {
              setCookie('attribution_first', JSON.stringify(payload), COOKIE_DAYS);
            }
            setCookie('attribution_last', JSON.stringify(payload), COOKIE_DAYS);
          })();
        `,
      }}
    />
  );
}