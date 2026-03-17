"use client";
import * as React from "react";
import Button from "../ui/Button";
import LazyLottie from "../ui/LazyLottie";
import Link from "next/link";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";


function Cta({
  isCreator,
  demoMode = false,
  heading,
  ctaText,
}: {
  isCreator: boolean;
  demoMode?: boolean;
  heading?: string;
  ctaText?: string;
}) {
  const isBrand = !isCreator;
  const variant = getHeroVariant();
  return (
    <section id="cta" className="relative z-0">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-4.5">
            <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px] md:text-[64px]">
              {heading
                ? heading
                : isCreator
                  ? "Start Creating With Top Brands Today"
                  : "Launch Your UGC Campaign Today"}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5">
              {demoMode ? (
                <Link href="/contact" className="max-[320px]:w-full">
                  <Button variant="primary" className="max-[320px]:w-full"
                    onClick={() => handleCTAClick("book_demo_cta", !isCreator, variant)}>
                    <span>{ctaText ?? "Book a Demo"}</span>
                  </Button>
                </Link>
              ) : (
                <>
                  <Link
                    href="https://app.sideshift.app/signup"
                    className="max-[320px]:w-full"
                  >
                    <Button variant="primary" className="max-[320px]:w-full"
                      onClick={() => handleCTAClick(isCreator ? "join_as_creator" : "start_free_trial_cta", !isCreator, variant)}>
                      <span>{isCreator ? "Join as a Creator" : "Start Your Free Trial"}</span>
                    </Button>
                  </Link>
                  <Link
                    href={
                      isCreator
                        ? "https://app.sideshift.app/signup"
                        : "/contact"
                    }
                    className="max-[320px]:w-full"
                  >
                    <Button variant="secondary" className="max-[320px]:w-full"
                      onClick={() =>
                        handleCTAClick(
                          isCreator ? "explore_gigs_cta" : "book_strategy_call_cta",
                          !isCreator, variant
                        )
                      }>
                      <span>{isCreator ? "Explore Gigs" : "Book a Demo"}</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <div className="relative -z-10 aspect-[1160/580] w-full rounded-2xl md:aspect-[1160/355]">
              <LazyLottie
                path="/lottie/10.json"
                className="absolute top-1/2 left-1/2 w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover md:w-full"
                loop={true}
                autoplay={true}
                loading={<div className="absolute h-full w-full" />}
                fallback={
                  <div className="flex h-full w-full items-center justify-center bg-red-100 text-red-500">
                    Failed to load
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
