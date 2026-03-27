"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import LazyLottie from "../ui/LazyLottie";
import Link from "next/link";
import HeroCreators from "@/public/lottie/HERO-CREATORS.svg";
import HeroBrands from "@/public/lottie/HERO.svg";
import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { getHeroVariant, HeroVariant } from "@/lib/analytics";
import { handleCTAClick } from "@/lib/handleCTAClick";


interface HeroOverrides {
  label?: string;
  headline?: string | React.ReactNode;
  subtitle?: string;
  stats?: { value: string; label: string }[];
  primaryCta?: { text: string; href: string; event: string };
  secondaryCta?: { text: string; href: string; event: string };
}

function Hero({
  isCreator,
  overrides,
  demoMode = false,
  hideSecondaryCta = false,
}: {
  isCreator: boolean;
  overrides?: HeroOverrides;
  demoMode?: boolean;
  hideSecondaryCta?: boolean;
}) {
  const [variant, setVariant] = useState<HeroVariant>('A');
  const [hasMounted, setHasMounted] = useState(false);


  useEffect(() => {
    setHasMounted(true);
    // Only run variant logic for brands
    if (!isCreator && process.env.NEXT_PUBLIC_ENABLE_HERO_AB === 'true') {
      const v = getHeroVariant(); // returns 'A' or 'B'
      setVariant(v);
    }
  }, []);
  const getBrandHeadline = () => {
  if (!hasMounted) return ""; // prevent hydration mismatch
  return variant === 'A'
    ? "Turn creators into your most profitable growth channel"
    : "Run 10x more UGC tests without growing your team";
};
const onHeroCTAClick = (cta: string) => {
    if (!isCreator) { // Only for brands

      if (process.env.NEXT_PUBLIC_ENABLE_HERO_AB === 'true') {
        posthog.capture('hero_cta_clicked', {
          variant,
          cta,
          path: window.location.pathname,
        });
      }
        handleCTAClick(cta, true, variant); // call global function with variant
      
    }
  }



  return (
    <section id="home" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global py-section-md relative mx-auto pt-[89px] sm:pt-[100px] md:pt-[118px]">
          <div className="flex flex-col items-start sm:items-center md:flex-row md:items-start">
            <div className="relative z-10 w-full max-w-[676px] md:min-w-[500px]">
              <div className="flex flex-col items-start gap-3.5 sm:items-center md:items-start">
                {overrides?.label && (
                  <p className="text-sm leading-[140%] font-medium tracking-[0.02em] text-[rgba(32,32,32,0.5)] md:text-base">
                    {overrides.label}
                  </p>
                )}
                <div className="relative w-full">
                  <h1 className="max-w-[20ch] text-[9vw] leading-[90%] font-bold tracking-[-0.05em] min-[375px]:text-[10vw] sm:mx-auto sm:text-center sm:text-[48px] md:mx-0 md:text-left md:text-[min(69px,4.7vw)]">
                    {overrides?.headline ? (
                      overrides.headline
                    ) : isCreator ? (
                      <>
                        The UGC Platform for{" "}
                        <span className="relative inline-block">
                          <span className="opacity-0">Creators</span>
                          <Image
                            src="/assets/home/creators-title-dark.avif"
                            alt="Creators"
                            width={236}
                            height={66}
                            className="absolute top-[55%] left-0 h-auto w-full -translate-y-1/2"
                          />
                        </span>
                      </>
                    ) : (
                      hasMounted ? getBrandHeadline() : ""
                    )}
                  </h1>
                </div>
                {overrides?.stats && (
                  <div className="flex flex-col gap-1.5">
                    {overrides.stats.map((stat) => (
                      <p
                        key={stat.label}
                        className="text-[15px] leading-[1.4] text-[#202020] md:text-base"
                      >
                        <span className="font-bold">{stat.value}</span>{" "}
                        <span className="text-[rgba(32,32,32,0.6)]">
                          {stat.label}
                        </span>
                      </p>
                    ))}
                  </div>
                )}
                <p className="max-w-[517px] text-[15px] leading-[135%] text-[rgba(32,32,32,0.75)] min-[375px]:text-base sm:text-center sm:text-lg md:text-left">
                  <span>
                    {overrides?.subtitle
                      ? overrides.subtitle
                      : isCreator
                        ? "SideShift connects you directly with leading brands, handles the contracts and payouts, and lets you focus on creating."
                        : "Recruit UGC creators, manage campaigns, track results, and pay them automatically — from one operating system."}
                  </span>
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:justify-center sm:gap-3.5 md:mt-8 md:justify-start">
                {demoMode ? (
                  <Link
                    href="https://app.sideshift.app/signup"
                    className="max-[320px]:w-full"
                    onClick={() => onHeroCTAClick("book_demo_hero")}
                  >
                    <Button variant="primary" className="max-[320px]:w-full">
                      <span>Book a Demo</span>
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link
                      href={overrides?.primaryCta?.href ?? "https://app.sideshift.app/signup"}
                      className="max-[320px]:w-full"
                      onClick={() => onHeroCTAClick(overrides?.primaryCta?.event ?? (isCreator ? "Join as a Creator" : "Start Free Trial from Hero"))}
                    >
                      <Button variant="primary" className="max-[320px]:w-full">
                        <span>{overrides?.primaryCta?.text ?? (isCreator ? "Join as a Creator" : "Start Your Free Trial")}</span>
                      </Button>
                    </Link>
                    {!hideSecondaryCta && <Link
                      href={overrides?.secondaryCta?.href ?? (isCreator ? "https://app.sideshift.app/signup" : "https://app.sideshift.app/signup")}
                      className="max-[320px]:w-full"
                      onClick={() => onHeroCTAClick(overrides?.secondaryCta?.event ?? (isCreator ? "Explore Gigs" : "Book Demo from Hero"))}
                    >
                      <Button variant="secondary" className="max-[320px]:w-full">
                        <span>{overrides?.secondaryCta?.text ?? (isCreator ? "Explore Gigs" : "Book a Demo")}</span>
                      </Button>
                    </Link>}
                  </>
                )}
              </div>

            </div>
            <div
              key={isCreator ? "creators" : "brands"}
              className="relative z-0 mx-auto aspect-[400/300] w-full flex-1 sm:max-w-[500px] md:min-h-[450px] md:max-w-none md:min-w-[500px]"
            >
              {isCreator ? (
                <LazyLottie
                  path={"/lottie/HERO-CREATORS.json"}
                  className="absolute top-[95%] left-[0%] h-auto w-[185%] max-w-none -translate-x-1/2 -translate-y-1/2 md:top-[80%] md:left-[-10%] md:w-[200%]"
                  loop={true}
                  autoplay={true}
                  loading={<HeroCreators className="h-full w-full" />}
                />
              ) : (
                <LazyLottie
                  path={"/lottie/HERO.json"}
                  className="absolute top-[95%] left-[-10%] h-auto w-[240%] max-w-none -translate-x-1/2 -translate-y-1/2 md:top-[80%] md:left-[-5%] md:w-[240%]"
                  loop={true}
                  autoplay={true}
                  loading={<HeroBrands className="h-full w-full" />}
                />
              )}
            </div>
          </div>
          <Image
            src="/assets/home/hero-light.svg"
            alt="Hero Light"
            width={550}
            height={373}
            className="absolute top-[0%] left-[7%] -z-10 h-auto w-[550px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
export type { HeroOverrides };
