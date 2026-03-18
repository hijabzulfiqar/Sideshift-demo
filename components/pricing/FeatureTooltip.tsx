// Tooltip copy keyed to exact feature strings
import { useEffect, useRef, useState } from "react";


const FEATURE_TOOLTIPS: Record<string, string> = {
    "Typical output: 250+ videos/mo":
        "Based on average creator output across active SideShift campaigns. Actual output varies by brief complexity.",
    "Typical output: 500+ videos/mo":
        "2× Starter output. Ideal for brands running multiple campaigns simultaneously.",
    "Typical output: 1000+ videos/mo":
        "Scale customers average 1,000–2,500 videos/month with unlimited creator access.",
    "1 Job Listing · 30 Invites":
        "Post 1 active campaign at a time and invite up to 30 creators to apply. Perfect for testing a single product line.",
    "2 Job Listings · 100 Invites":
        "Run two campaigns at once — e.g. one for product launches, one for evergreen content. 100 invites spreads your reach 3× further.",
    "3 Job Listings · Unlimited Invites":
        "Run three campaigns simultaneously with no cap on creator invites — saturate any niche you want.",
    "1 Job Boost":
        "Boosts push your listing to the top of creator feeds for 48 hours, increasing applicant volume by ~3×.",
    "3 Job Boosts":
        "Use all 3 boosts simultaneously on different listings to maximise applicant flow across campaigns.",
    "Top performers flagged automatically":
        "SideShift's algorithm surfaces your best creators so you know who to rehire first.",
    "One-click payouts and contracts":
        "Pay creators instantly via Stripe. Contracts are auto-generated and signed in-app — no lawyers required.",
    "Track performance by creator and post":
        "See views, engagement, and conversion data per creator and per video — no spreadsheets needed.",
    "Message, hire, and brief — all in-app":
        "The entire creator workflow lives in one place — no DMs, no email threads, no spreadsheets.",
    "24/7 Founder support":
        "Direct Slack access to SideShift founders. Real humans, not ticket queues.",
    "Dedicated strategist + weekly check-ins":
        "A senior SideShift strategist handles briefs, creator selection, and QC so your team just approves.",
    "Full creator ops (sourcing, briefs, QC, payouts)":
        "We handle the entire creator lifecycle — finding and vetting creators, briefing, reviewing content, and processing payments.",
    "Custom dashboards":
        "Bespoke reporting views built for your KPIs — connect to your BI tools or get a white-labelled report.",
    "High-volume output, fully managed":
        "Our team manages all creator ops end-to-end. You set the direction, we deliver the volume.",
};

// Tooltip — hover on desktop, tap to toggle on mobile
export function FeatureTooltip({ text }: { text: string }) {
    const tip = FEATURE_TOOLTIPS[text];
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!open) return;
        const close = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, [open]);

    if (!tip) return <>{text}</>;

    return (
        <span
            ref={ref}
            className="relative"
            onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        >
            <span className="cursor-help border-b border-dashed border-[rgba(32,32,32,0.3)] pb-px">
                {text}
            </span>
            <span className="pointer-events-none ml-1 inline-flex h-[13px] w-[13px] items-center justify-center rounded-full border border-[rgba(32,32,32,0.3)] text-[9px] font-bold leading-none text-[rgba(32,32,32,0.4)] align-middle [@media(hover:hover)]:hidden">
                i
            </span>
            <span
                className={`pointer-events-none absolute bottom-[calc(100%+8px)] left-0 z-50 w-52 rounded-lg bg-[#202020] px-3.5 py-2.5 text-xs leading-relaxed text-white shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-opacity duration-150 ${open ? "opacity-100" : "opacity-0 [@media(hover:hover)]:group-hover/tip:opacity-100"}`}
            >
                {tip}
                <span className="absolute left-4 top-full border-[6px] border-transparent border-t-[#202020]" />
            </span>
        </span>
    );
}
