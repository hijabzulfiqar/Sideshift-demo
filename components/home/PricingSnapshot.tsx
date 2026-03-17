"use client";
import Link from "next/link";
import Button from "../ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: 199,
    features: [
      "Hire up to 5 Creators",
      "Typical output: 250+ videos/mo",
      "1 Job Listing · 30 Invites",
    ],
    href: "https://app.sideshift.app/signup",
    cta: "Start free trial",
  },
  {
    id: 2,
    name: "Growth",
    price: 299,
    features: [
      "Hire up to 15 Creators",
      "Typical output: 500+ videos/mo",
      "2 Job Listings · 100 Invites",
      "1 Job Boost",
    ],
    popular: true,
    href: "https://app.sideshift.app/signup",
    cta: "Start free trial",
  },
  {
    id: 3,
    name: "Scale",
    price: 999,
    features: [
      "Hire Unlimited Creators",
      "Typical output: 1000+ videos/mo",
      "3 Job Listings · Unlimited Invites",
      "3 Job Boosts",
    ],
    href: "/contact",
    cta: "Book a Demo",
  },
];

function PricingSnapshot({
  heading,
  subheading,
  demoMode = false,
}: {
  heading?: string;
  subheading?: string;
  demoMode?: boolean;
} = {}) {
  const variant = getHeroVariant();
  const isBrand = true;
  return (
    <section id="pricing-snapshot" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-10.5">
            {/* Heading */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="max-w-[18ch] text-center max-[375px]:text-[28px] max-[320px]:text-[24px]">
                {heading ?? "Simple pricing that scales with your creator output"}
              </h2>
              <p className="text-base leading-[135%] text-[rgba(32,32,32,0.75)]">
                {subheading ?? "Choose a plan that fits your needs."}
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid w-full max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className={`metrics-card relative flex flex-col items-center gap-3 rounded-lg border-2 border-white p-5 text-center min-[375px]:p-6 ${plan.popular ? "ring-2 ring-[#202020]" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#202020] px-3 py-1 text-xs font-bold text-white">
                      Most popular
                    </div>
                  )}

                  {/* Plan name */}
                  <h3 className="text-lg leading-[1.33] font-bold tracking-[-0.01em] text-[#202020]">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-base leading-[1] text-[rgba(32,32,32,0.6)]">
                      $
                    </span>
                    <span className="text-[2.5rem] leading-[1] font-bold tracking-[-0.04em] text-[#202020]">
                      {plan.price}
                    </span>
                    <span className="text-base leading-[1] text-[rgba(32,32,32,0.6)]">
                      /mo
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-1">
                    {plan.features.map((feature, index) => (
                      <p
                        key={index}
                        className="text-sm leading-[1.4] text-[rgba(32,32,32,0.75)]"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-3">
              {demoMode ? (
                <Link href="/contact">
                  <Button variant="primary" onClick={() => handleCTAClick("book_demo_pricing", isBrand, variant)}>
                    <span>Book a Demo</span>
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="https://app.sideshift.app/signup?plan=growth&interval=annual">
                    <Button variant="primary" onClick={() => handleCTAClick("start_free_trial_pricing_snapshot", isBrand, variant)}>
                      <span>Start 7-day free trial</span>
                    </Button>
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-base font-bold text-[#202020] underline underline-offset-4 transition-colors hover:text-[rgba(32,32,32,0.75)]"
                    onClick={() => handleCTAClick("see_full_pricing_bottom", isBrand, variant)}
                  >
                    See full pricing →
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSnapshot;
