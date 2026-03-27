"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";

export default function FinalCta() {
  const variant = getHeroVariant();

  return (
    <section className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-5 text-center md:gap-6">
            <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px] md:text-[64px]">
              Ready To Build Your Viral Creator Program?
            </h2>
            <p className="max-w-[600px] text-base leading-[1.5] text-[rgba(32,32,32,0.65)] md:text-lg">
              Join 1,000+ brands using SideShift to turn UGC creators into
              their most profitable growth channel.
            </p>
            <Link href="https://app.sideshift.app/signup">
              <Button
                variant="primary"
                onClick={() =>
                  handleCTAClick("start_free_trial_final_cta", true, variant)
                }
              >
                <span>Start Your Free Trial</span>
              </Button>
            </Link>
            <p className="text-[14px] text-[rgba(32,32,32,0.5)]">
              Post your first job in 4 minutes &middot; No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
