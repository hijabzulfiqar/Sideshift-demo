import posthog from 'posthog-js';
import { setTrialIntent, type Plan, type Billing, type Segment } from './trialIntent';
import { getAttribution } from './attribution';

export type TrialIntentInput = {
  plan: Plan;
  billing: Billing;
  segment: Segment;
};
export type Side = 'brand' | 'creator';
function getSide(): Side {
  return window.location.pathname.startsWith('/creator') ? 'creator' : 'brand';
}


export function handleCTAClick(
  cta: string,
  variant?: string,
  trial?: TrialIntentInput,
) {

    const intent = trial ? setTrialIntent(trial) : null;
    const attribution = getAttribution() ?? {};
    // Fires whenever a primary CTA is clicked
    const baseProps = {
        cta,
        side: getSide(),
        path: window.location.pathname,
        ...(variant ? { variant } : {}),
        ...(intent
            ? {
                plan: intent.plan,
                billing: intent.billing,
                segment: intent.segment,
            }
            : {}),
        ...attribution,
    };

    // Fires whenever a primary CTA is clicked
    posthog.capture('cta_clicked', baseProps);

    // Fires when user clicks signup/start trial
    if (/^start/i.test(cta)) {
        posthog.capture('cta_signup_intent', baseProps);
    }
    
}