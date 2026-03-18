"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";

export default function AgencyPricing() {
  const variant = getHeroVariant();

  return (
    <section id="agency-pricing" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-10.5">
            {/* Heading */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px] max-[320px]:text-[24px]">
                Agency pricing that scales with your clients
              </h2>
              <p className="text-base leading-[135%] text-[rgba(32,32,32,0.75)]">
                One platform fee + per-client pricing. No hidden costs.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="w-full max-w-[520px]">
              <article className="metrics-card relative flex flex-col items-center gap-5 rounded-lg border-2 border-white p-6 text-center ring-2 ring-[#202020] min-[375px]:p-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#202020] px-3 py-1 text-xs font-bold text-white">
                  Agency Plan
                </div>

                <h3 className="text-lg leading-[1.33] font-bold tracking-[-0.01em] text-[#202020]">
                  Scale
                </h3>

                {/* Price */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-base leading-[1] text-[rgba(32,32,32,0.6)]">
                      $
                    </span>
                    <span className="text-[2.5rem] leading-[1] font-bold tracking-[-0.04em] text-[#202020]">
                      699
                    </span>
                    <span className="text-base leading-[1] text-[rgba(32,32,32,0.6)]">
                      /mo
                    </span>
                  </div>
                  <p className="text-sm text-[rgba(32,32,32,0.6)]">
                    + $150/mo per client workspace
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2 text-left">
                  {[
                    "Unlimited creators across all clients",
                    "Unlimited job listings & invites",
                    "White-label client dashboards",
                    "Batch payments across clients",
                    "Automated W9s, 1099s, contracts",
                    "Cross-client analytics & reporting",
                    "Priority agency support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="mt-0.5 shrink-0"
                      >
                        <circle cx="9" cy="9" r="9" fill="#202020" />
                        <path
                          d="M6 9L8 11L12 7"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm leading-[1.4] text-[rgba(32,32,32,0.75)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Example */}
                <div className="w-full rounded-xl bg-[#f8f9fa] p-4">
                  <p className="text-sm font-medium text-[#202020]">
                    Example: 5 clients
                  </p>
                  <p className="mt-1 text-[13px] text-[rgba(32,32,32,0.6)]">
                    $699 + (5 x $150) = $1,449/mo
                  </p>
                  <p className="mt-0.5 text-[13px] text-[rgba(32,32,32,0.6)]">
                    Less than a part-time coordinator
                  </p>
                </div>
              </article>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-3">
              <Link href="/contact">
                <Button
                  variant="primary"
                  onClick={() =>
                    handleCTAClick("book_demo_agency_pricing", true, variant)
                  }
                >
                  <span>Book Agency Demo</span>
                </Button>
              </Link>
              <Link
                href="/pricing/agency"
                className="text-base font-bold text-[#202020] underline underline-offset-4 transition-colors hover:text-[rgba(32,32,32,0.75)]"
                onClick={() =>
                  handleCTAClick("see_full_pricing_agency", true, variant)
                }
              >
                See full pricing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
