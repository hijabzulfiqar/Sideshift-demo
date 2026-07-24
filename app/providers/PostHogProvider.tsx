'use client'

import posthog from 'posthog-js'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // Initialize PostHog once
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true') {
            posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
                api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
                capture_pageview: false, // manual capture
                disable_session_recording: true,//  keeps rrweb off
                capture_heatmaps: false,        // kills heatmap data
                cross_subdomain_cookie: true,
                autocapture: {
                    dom_event_allowlist: ['click'],
                    element_allowlist: ['a', 'button'],
                },
            })
        }
    }, [])

    useEffect(() => {
        if (pathname && process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true') {
            (pathname && process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true') {
            const side = pathname.startsWith('/creator')
                ? 'creator'
                : pathname.startsWith('/agency')
                    ? 'agency'
                    : 'brand'
            posthog.capture('$pageview', {
                path: pathname,
                side,
            })
        }
    }, [pathname])
    return <>{children}</>
}
