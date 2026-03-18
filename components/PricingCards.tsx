"use client";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { FeatureTooltip } from "@/components/pricing/FeatureTooltip";

const plans = [
  {
    id: 1,
    name: "Starter",
    monthlyPrice: 199,
    annualPrice: 99,
    description: "Prove UGC moves the needle in 30 days",
    pWidth: "max-w-none",
    features: [
      "Hire up to 5 Creators",
      "Typical output: 250+ videos/mo",
      "1 Job Listing · 30 Invites",
      "Message, hire, and brief — all in-app",
      "Track performance by creator and post",
      "Top performers flagged automatically",
      "One-click payouts and contracts",
      "Email support",
    ],
    // First 4 shown by default, rest hidden until expanded
    visibleCount: 4,
    testimonial: {
  quote: "SideShift was a huge help in our Gen Z hiring process. We filled 100% of our creator needs in just a few weeks — it's our go-to whenever we need creators.",
  author: "Edward Tian",
  role: "Founder, GPTZero",
},
    href: "https://app.sideshift.app/signup",
    cta: "Start 7-day free trial",
  },
  {
    id: 2,
    name: "Growth",
    monthlyPrice: 299,
    annualPrice: 149,
    description: "Turn UGC into a repeatable growth channel",
    pWidth: "max-w-none",
    popular: true,
    features: [
      "Hire up to 15 Creators",
      "Typical output: 500+ videos/mo",
      "2 Job Listings · 100 Invites",
      "1 Job Boost",
      "Phone + email support",
    ],
    visibleCount: 5,
    testimonial: {
      quote: "SideShift delivers the best candidates of any job board I've used. Recommend to any consumer startup focused on growth.",
      author: "Jeremy Gross",
      role: "Head of US Growth, Amo",
    },
    includesPrevious: "Everything in Starter, plus:",
    href: "https://app.sideshift.app/signup",
    cta: "Start 7-day free trial",
  },
  {
    id: 3,
    name: "Scale",
    monthlyPrice: 999,
    annualPrice: 699,
    description: "Run high-volume creator ops without an agency",
    pWidth: "max-w-none",
    features: [
      "Hire Unlimited Creators",
      "Typical output: 1000+ videos/mo",
      "3 Job Listings · Unlimited Invites",
      "3 Job Boosts",
      "24/7 Founder support",
    ],
    visibleCount: 5,
    testimonial: {
      quote: "The sheer volume of organic content we pushed through their creators turned into real distribution and traction for us.",
      author: "Horacio Lopez",
      role: "Revenue Operations, Replit",
    },
    includesPrevious: "Everything in Growth, plus:",
    href: "/contact",
    cta: "Book a Demo",
    calendarLink: "https://app.iclosed.io/e/sideshift/sideshift-strategy-call",
  },
  {
    id: 4,
    name: "Enterprise",
    monthlyPrice: 10000,
    annualPrice: 10000,
    description: "Done-for-you UGC at scale",
    pWidth: "max-w-none",
    features: [
      "Unlimited Creators · Unlimited Invites",
      "High-volume output, fully managed",
      "Dedicated strategist + weekly check-ins",
      "We run it, you approve",
      "Full creator ops (sourcing, briefs, QC, payouts)",
      "Custom dashboards",
    ],
    visibleCount: 4,
    testimonial: {
      quote: "Their creator network unlocked a new layer of growth that traditional paid channels never could. A playbook every high-growth company should have.",
      author: "Henrique Dubugras",
      role: "Founding CEO, Brex",
    },
    includesPrevious: "Everything in Scale, plus:",
    href: "/contact",
    cta: "Learn More",
    calendarLink:
      "https://app.iclosed.io/e/sideshift/sideshift-enterprise-call",
  },
];


interface PricingCardsProps {
  variant?: "full" | "snapshot";
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
}

export default function PricingCards({
  variant = "full",
  showHeader = true,
  title = "Turn creators into your most profitable growth channel",
  subtitle = "Creators apply to you. Programs run themselves. Results you can actually track.",
}: PricingCardsProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "annually",
  );
  // Track which cards have their full feature list expanded
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const isSnapshot = variant === "snapshot";

  function toggleExpand(planId: number, e: React.MouseEvent) {
    e.stopPropagation();
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(planId) ? next.delete(planId) : next.add(planId);
      return next;
    });
  }


  return (
    <div className="space-y-8 md:space-y-14">
      {showHeader && (
        <header className="flex flex-col items-center gap-3 text-center md:gap-4">
          <h2 className="max-w-[20ch] text-[32px] leading-[90%] font-bold tracking-[-0.05em] sm:text-[40px] md:text-[min(69px,4.7vw)]">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-[500px] text-base leading-[135%] text-[rgba(32,32,32,0.75)] md:text-lg">
              {subtitle}
            </p>
          )}

          <div className="flex items-center gap-3.5">
            <span
              className={`bg-gradient-to-b from-[#202020] to-[#515151] bg-clip-text text-xl leading-[1.6] font-bold tracking-[-0.03em] text-transparent ${billingCycle === "monthly" ? "" : "opacity-40"}`}
            >
              Monthly
            </span>

            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annually" : "monthly",
                )
              }
              className="relative h-[2.4rem] w-[4.8rem] cursor-pointer rounded-full border border-white bg-gradient-to-b from-[rgba(1,65,99,0.14)] to-[rgba(1,65,99,0)] p-1 px-2 shadow-[2.56px_2.56px_5.12px_-1.92px_rgba(0,0,0,0.25)_inset,35.84px_53.76px_17.92px_0_rgba(1,65,99,0),23.04px_34.56px_16.64px_0_rgba(1,65,99,0.01),12.8px_19.2px_14.08px_0_rgba(1,65,99,0.05),5.76px_8.32px_10.24px_0_rgba(1,65,99,0.09),1.28px_1.92px_5.76px_0_rgba(1,65,99,0.1)] transition-all"
              style={{ backgroundColor: "#F0FAFF" }}
              aria-label="Toggle billing cycle"
            >
              <div
                className={`h-[1.52rem] w-[2rem] rounded-full border border-black bg-gradient-to-b from-[#202020] to-[#515151] shadow-[0_0_0.64px_1.92px_#494949_inset,0_3.84px_3.2px_0_rgba(0,0,0,0.55)_inset,35.84px_53.76px_17.92px_0_rgba(1,65,99,0),23.04px_34.56px_16.64px_0_rgba(1,65,99,0.01),12.8px_19.2px_14.08px_0_rgba(1,65,99,0.05),5.76px_8.32px_10.24px_0_rgba(1,65,99,0.09),1.28px_1.92px_5.76px_0_rgba(1,65,99,0.1)] transition-transform ${billingCycle === "annually" ? "translate-x-[85%]" : ""
                  }`}
              />
            </button>

            <span
              className={`bg-gradient-to-b from-[#202020] to-[#515151] bg-clip-text text-xl leading-[1.6] font-bold tracking-[-0.03em] text-transparent ${billingCycle === "monthly" ? "opacity-40" : ""}`}
            >
              Annual
            </span>
            <span
              className={`text-base font-medium text-[#22C55E] ${billingCycle === "monthly" ? "opacity-40" : ""}`}
            >
              Save 30%
            </span>
          </div>
        </header>
      )}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => {
          const isExpanded = expandedIds.has(plan.id);
          const hiddenCount = plan.features.length - plan.visibleCount;
          const visibleFeatures = isExpanded
            ? plan.features
            : plan.features.slice(0, plan.visibleCount);

          return (
            <article
              key={plan.id}
              className={`platform-feature-card relative flex flex-col rounded-lg border-2 border-white p-4 cursor-pointer select-none transition-shadow duration-200 ${isSnapshot ? "gap-4 pb-4" : "gap-[1.625rem] pb-6"} ${plan.popular ? "ring-2 ring-[#202020]" : ""}`}
            >
              {plan.popular && !isSnapshot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#202020] px-3 py-1 text-xs font-bold text-white">
                  Most popular
                </div>
              )}
              {/* Top section - name, price, description */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col">
                  <h3 className="text-lg leading-[1.33] font-bold tracking-[-0.01em] text-[#202020]">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center">
                      <h3
                        className={`flex items-center font-bold tracking-[-0.04em] ${isSnapshot ? "text-[2rem] leading-[1]" : "text-[2.625rem] leading-[1]"}`}
                      >
                        {plan.name === "Enterprise" ? (
                          <span className="leading-[1]">Custom</span>
                        ) : (
                          <>
                            <span>$</span>
                            <SlidingNumber
                              value={
                                billingCycle === "annually"
                                  ? plan.annualPrice
                                  : plan.monthlyPrice
                              }
                            />
                          </>
                        )}
                      </h3>
                      <span
                        className={`text-base leading-[1.3] tracking-[-0.01em] text-[rgba(32,32,32,0.75)] ${plan.name === "Enterprise" ? "invisible" : ""}`}
                      >
                        &nbsp;/month
                      </span>
                    </div>
                  </div>
                </div>

                {!isSnapshot && (
                  <p
                    className={`min-h-[3.25rem] text-base leading-[1.3] tracking-[-0.01em] text-[rgba(32,32,32,0.75)] ${plan.pWidth}`}
                  >
                    {plan.description}
                  </p>
                )}
              </div>

              {/* CTA Button - always at same position */}
              <div className="flex flex-col items-center gap-1">
                {plan.calendarLink ? (
                  <button
                    data-iclosed-link={plan.calendarLink}
                    data-embed-type="popup"
                    onClick={() =>
                      handleCTAClick(`${plan.cta} - ${plan.name}`, true, variant)
                    }
                    className={`cta-button-dark flex w-full max-w-none cursor-pointer items-center justify-center rounded-full font-bold text-white ${isSnapshot ? "px-4 py-2.5 text-sm" : "px-5 py-3.5 text-base leading-[1.4]"}`}
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <a
                    href={
                      plan.href.includes("signup")
                        ? `${plan.href}?plan=${plan.name.toLowerCase()}&interval=${billingCycle === "annually" ? "annual" : "monthly"}`
                        : plan.href
                    }
                    onClick={() =>
                      handleCTAClick(`${plan.cta} - ${plan.name}`, true, variant)
                    }
                    className={`cta-button-dark flex w-full max-w-none items-center justify-center rounded-full font-bold text-white ${isSnapshot ? "px-4 py-2.5 text-sm" : "px-5 py-3.5 text-base leading-[1.4]"}`}
                  >
                    {plan.cta}
                  </a>
                )}
                {!isSnapshot && (
                  <span
                    className={`text-xs ${plan.name !== "Enterprise" ? "text-[rgba(32,32,32,0.6)]" : "invisible"}`}
                  >
                    $0 today · Cancel anytime
                  </span>
                )}
              </div>

              {/* Features list - below button */}
              {!isSnapshot && (
                <div className="flex flex-col gap-[0.6875rem]">
                  <p
                    className={`text-sm font-medium italic ${plan.includesPrevious ? "text-[rgba(32,32,32,0.6)]" : "invisible"}`}
                  >
                    {plan.includesPrevious || "Includes:"}
                  </p>
                  <ul className="flex flex-col gap-[0.6875rem]">
                    {visibleFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <Check className="flex h-[1.5em] w-[0.825rem] shrink-0 items-center justify-center stroke-[4] text-[#202020]" />
                        <span className="group/tip relative text-base leading-[1.5] tracking-[-0.01em] text-[rgba(32,32,32,0.75)]">
                          <FeatureTooltip text={feature} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Show more / Show less — only renders when there are hidden features */}
                  {hiddenCount > 0 && (
                    <button
                      onClick={(e) => toggleExpand(plan.id, e)}
                      className="flex items-center gap-1 self-start text-xs font-medium text-[rgba(32,32,32,0.45)] transition-colors hover:text-[rgba(32,32,32,0.75)]"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                      {isExpanded ? "Show less" : `+${hiddenCount} more features`}
                    </button>
                  )}
                </div>
              )}

              {/* Testimonial — sits below features, hidden in snapshot */}
              {!isSnapshot && plan.testimonial && (
                <div className="mt-auto border-t border-[rgba(32,32,32,0.08)] pt-4">
                  <p className="text-sm leading-[1.5] text-[rgba(32,32,32,0.6)] italic">
                    "{plan.testimonial.quote}"
                  </p>
                  <div className="mt-2 flex flex-col">
                    <span className="text-xs font-semibold text-[rgba(32,32,32,0.75)]">
                      {plan.testimonial.author}
                    </span>
                    <span className="text-xs text-[rgba(32,32,32,0.4)]">
                      {plan.testimonial.role}
                    </span>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {isSnapshot && (
        <div className="flex justify-center">
          <Link
            href="/pricing"
            className="text-base font-bold text-[#202020] underline underline-offset-4 transition-colors hover:text-[rgba(32,32,32,0.75)]"
          >
            View full pricing details →
          </Link>
        </div>
      )}
    </div>
  );
}