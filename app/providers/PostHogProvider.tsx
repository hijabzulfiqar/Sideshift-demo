'use client'

import posthog from 'posthog-js'
import { useEffect } from 'react'
import { usePathname} from 'next/navigation'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // Initialize PostHog once
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true') {
            posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
                api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
                capture_pageview: false, // manual capture
            })
        }
    }, [])

    useEffect(() => {
        if (pathname && process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true') {
            // Only track brand-side pages
            if (!pathname.startsWith('/creator')) {
                posthog.capture('$pageview', {
                    path: pathname,
                })
            }
        }
    }, [pathname])
    return <>{children}</>
}
