import posthog from 'posthog-js';

export function handleCTAClick(cta: string, isBrand: boolean, variant?: string) {
    if (!isBrand) return;
    // Fires whenever a primary CTA is clicked
    posthog.capture("cta_clicked", {
        cta,
        path: window.location.pathname,
        ...(variant ? { variant } : {})
    });

    // Fires when user clicks signup/start trial
    if (/^start/i.test(cta))  {
        posthog.capture("signup_started", {
            cta,
            path: window.location.pathname,
            ...(variant ? { variant } : {})
        });
    }
    
}
