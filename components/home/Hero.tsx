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
        <div className="max-w-global py-section-md relative mx-auto pt-[56px] min-[480px]:pt-[72px] sm:pt-[88px] md:pt-[100px] lg:pt-[118px]">
          <div className="flex flex-col items-start sm:items-center lg:flex-row lg:items-start">
            <div className="relative z-10 w-full max-w-[676px] lg:min-w-[500px]">
              <div className="flex flex-col items-start gap-2.5 sm:items-center sm:gap-3.5 lg:items-start">
                {overrides?.label && (
                  <p className="text-xs leading-[140%] font-medium tracking-[0.02em] text-[rgba(32,32,32,0.5)] min-[375px]:text-[13px] sm:text-sm md:text-base">
                    {overrides.label}
                  </p>
                )}
                <div className="relative w-full">
                  <h1 className="max-w-[20ch] text-[10vw] leading-[90%] font-bold tracking-[-0.05em] min-[375px]:text-[11vw] sm:mx-auto sm:text-center sm:text-[48px] md:text-[56px] lg:mx-0 lg:text-left lg:text-[min(69px,4.7vw)]">
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
                <p className="max-w-[517px] text-[14px] leading-[140%] text-[rgba(32,32,32,0.75)] min-[375px]:text-[15px] sm:text-center sm:text-base md:text-lg lg:text-left">
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
              <div className="mt-3 flex flex-wrap items-center gap-2 min-[480px]:mt-4 sm:justify-center sm:gap-3.5 md:mt-6 lg:mt-8 lg:justify-start">
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
              className="relative z-0 mx-auto aspect-[4/3] w-full flex-1 min-[480px]:aspect-[16/10] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-auto lg:min-h-[450px] lg:min-w-[500px]"
            >
              {isCreator ? (
                <LazyLottie
                  path={"/lottie/HERO-CREATORS.json"}
                  className="absolute top-[90%] left-[0%] h-auto w-[185%] max-w-none -translate-x-1/2 -translate-y-1/2 min-[480px]:top-[85%] min-[480px]:left-[-5%] sm:top-[80%] sm:left-[-8%] sm:w-[170%] md:top-[75%] md:left-[-5%] md:w-[155%] lg:top-[80%] lg:left-[-10%] lg:w-[200%]"
                  loop={true}
                  autoplay={true}
                  loading={<HeroCreators className="h-full w-full" />}
                />
              ) : (
                <LazyLottie
                  path={"/lottie/HERO.json"}
                  className="absolute top-[85%] left-[-10%] h-auto w-[240%] max-w-none -translate-x-1/2 -translate-y-1/2 min-[480px]:top-[80%] min-[480px]:w-[210%] sm:top-[75%] sm:left-[-8%] sm:w-[180%] md:top-[70%] md:left-[-5%] md:w-[155%] lg:top-[80%] lg:left-[-5%] lg:w-[240%]"
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
            className="absolute top-[0%] left-[7%] -z-10 h-auto w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
export type { HeroOverrides };
