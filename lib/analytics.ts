import posthog from 'posthog-js'

const VARIANT_KEY = 'hero_variant'
const VARIANT_TIMESTAMP_KEY = 'hero_variant_assigned_at'
const VARIANT_EXPIRY_DAYS = 30

export type HeroVariant = 'A' | 'B'

function isExpired(timestamp: number) {
    const now = Date.now()
    const expiryMs = VARIANT_EXPIRY_DAYS * 24 * 60 * 60 * 1000
    return now - timestamp > expiryMs
}

export function getHeroVariant(): HeroVariant {
    if (typeof window === 'undefined') return 'A'

    const storedVariant = localStorage.getItem(VARIANT_KEY) as HeroVariant | null
    const storedTime = localStorage.getItem(VARIANT_TIMESTAMP_KEY)
    const eventFiredKey = 'hero_variant_event_fired'
    const eventFired = localStorage.getItem(eventFiredKey)
    

    if (
        storedVariant &&
        (storedVariant === 'A' || storedVariant === 'B') &&
        storedTime &&
        !isExpired(Number(storedTime))
    ) {
        return storedVariant
    }

    const variant: HeroVariant = Math.random() < 0.5 ? 'A' : 'B'

    localStorage.setItem(VARIANT_KEY, variant)
    localStorage.setItem(VARIANT_TIMESTAMP_KEY, Date.now().toString())

    // Only fire event if it hasn't been fired yet for this variant assignment
    if (!eventFired) {
        const interval = setInterval(() => {
            if (posthog && posthog.__loaded) {
                posthog.capture('hero_variant_assigned', { variant });
                localStorage.setItem(eventFiredKey, 'true');
                clearInterval(interval);
            }
        }, 50);
    }

    return variant
}
