"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";

export default function FinalCta() {
  return (
    <section className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-5 text-center md:gap-6">
            <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px] md:text-[64px]">
              Ready to Scale the Creators That Actually Work?
            </h2>
            <p className="max-w-[600px] text-base leading-[1.5] text-[rgba(32,32,32,0.65)] md:text-lg">
              Join 1,000+ brands using SideShift to turn UGC creators into
              their most profitable growth channel.
            </p>
            <Link href="https://sideshift.app/plans/brands">
              <Button
                variant="primary"
                onClick={() =>
                  handleCTAClick("start_free_trial_final_cta")
                }
              >
                <span>Launch your campaign</span>
              </Button>
            </Link>
            <p className="text-[14px] text-[rgba(32,32,32,0.5)]">
              Go live in under 10 minutes &middot; No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
