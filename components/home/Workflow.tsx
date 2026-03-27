"use client";
import * as React from "react";
import LazyLottie from "../ui/LazyLottie";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";

const steps = [
  {
    number: "1",
    title: "Hire Creators From the Marketplace",
    description: "Post a job, get 20\u201350 applications in 48hrs",
  },
  {
    number: "2",
    title: "Launch a Campaign",
    description: "Set budget, schedule, creative direction",
  },
  {
    number: "3",
    title: "Track Automatically",
    description: "Views, engagement, conversions in real-time",
  },
  {
    number: "4",
    title: "Find Winners & Double Down",
    description: "Cut what\u2019s not working, scale what is",
  },
  {
    number: "5",
    title: "Repeat",
    description: "Fresh creators, fresh angles. The flywheel compounds.",
  },
];

function Workflow({
  isCreator,
  heading,
  showSteps = false,
  showCta = false,
}: {
  isCreator: boolean;
  heading?: string;
  showSteps?: boolean;
  showCta?: boolean;
}) {
  const variant = getHeroVariant();

  return (
    <section id="how-it-works" className="relative z-0 scroll-mt-[-145px]">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8">
            <h2 className="max-w-[16ch] text-center max-[375px]:text-[28px]">
              {heading
                ? heading
                : isCreator
                  ? "How SideShift Works for Creators"
                  : "How SideShift Works for Brands"}
            </h2>
            <div
              key={isCreator ? "creators" : "brands"}
              className="relative -z-10 hidden aspect-[1160/350] w-full rounded-2xl sm:block"
            >
              {isCreator ? (
                <LazyLottie
                  path={"/lottie/C_1.json"}
                  className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                  loop={true}
                  autoplay={true}
                  loading={<div className="absolute h-full w-full" />}
                />
              ) : (
                <LazyLottie
                  path={"/lottie/5.json"}
                  className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                  loop={true}
                  autoplay={true}
                  loading={<div className="absolute h-full w-full" />}
                />
              )}
            </div>
            <div
              key={isCreator ? "creators_mobile" : "brands_mobile"}
              className="relative -z-10 aspect-[351/700] w-full rounded-2xl sm:hidden"
            >
              {isCreator ? (
                <LazyLottie
                  path={"/lottie/Mobile-1-5-creators.json"}
                  className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                  loop={true}
                  autoplay={true}
                  loading={<div className="absolute h-full w-full" />}
                />
              ) : (
                <LazyLottie
                  path={"/lottie/Mobile-1-5-brands.json"}
                  className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                  loop={true}
                  autoplay={true}
                  loading={<div className="absolute h-full w-full" />}
                />
              )}
            </div>

            {/* Steps — shown when showSteps is true */}
            {showSteps && (
              <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-5">
                {steps.map((step, i) => (
                  <div key={step.number} className="relative flex flex-col items-center text-center px-3 py-4 sm:py-0">
                    {i > 0 && (
                      <div
                        className="absolute top-[28px] right-1/2 hidden h-[2px] w-full sm:block"
                        style={{
                          background: "linear-gradient(90deg, #B8E0FF 0%, #A7D7FF 100%)",
                        }}
                      />
                    )}
                    <div
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white"
                      style={{
                        background:
                          "radial-gradient(71.9% 62.07% at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%), linear-gradient(180deg, #A7D7FF 0%, #E0F5FF 45%, #B8E0FF 100%)",
                        boxShadow:
                          "4.5px 3.5px 4px 0 rgba(1,65,99,0.03), 1.2px 1.5px 4.5px 0 rgba(1,65,99,0.02)",
                      }}
                    >
                      <span className="text-lg font-extrabold text-[#014163]">
                        {step.number}
                      </span>
                    </div>
                    <h4 className="mt-3 text-[14px] font-bold leading-[1.2] tracking-[-0.01em] text-gray-900 md:text-[15px]">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-[13px] leading-[1.4] text-[rgba(32,32,32,0.55)]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA — shown when showSteps or showCta is true */}
            {(showSteps || showCta) && (
              <div className="flex flex-col items-center gap-2">
                <Link href="https://app.sideshift.app/signup">
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleCTAClick("start_free_trial_how_it_works", true, variant)
                    }
                  >
                    <span>Start Your Free Trial</span>
                  </Button>
                </Link>
                <p className="text-[14px] text-[rgba(32,32,32,0.5)]">
                  Post your first job in 4 minutes &middot; No credit card required
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
