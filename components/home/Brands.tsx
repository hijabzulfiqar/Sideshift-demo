"use client";
import * as React from "react";
import Image from "next/image";

function Brands({ isCreator }: { isCreator: boolean }) {
  return (
    <section id="brands" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="items-left flex flex-col gap-4 md:flex-row md:gap-6">
            <h2 className="shrink-0 text-left text-[14px] leading-[140%] min-[375px]:text-base sm:text-lg">
              {isCreator
                ? "Brands You'll Create Content For:"
                : "Trusted By Top Brands Worldwide:"}
            </h2>

            <div className="flex w-full items-start overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent_100%)] sm:mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent_100%)]">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="marquee-scroll flex shrink-0 items-center justify-center gap-4 pl-4 min-[375px]:gap-6 min-[375px]:pl-6 sm:gap-10 sm:pl-10 md:gap-12 md:pl-12"
                >
                  <Image
                    src="/assets/brands/1.avif"
                    alt="Brand 1"
                    width={94}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/2.avif"
                    alt="Brand 2"
                    width={110}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/3.avif"
                    alt="Brand 3"
                    width={83}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/4.avif"
                    alt="Brand 4"
                    width={122}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/5.avif"
                    alt="Brand 5"
                    width={80}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/6.avif"
                    alt="Brand 6"
                    width={83}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/7.avif"
                    alt="Brand 7"
                    width={107}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/8.avif"
                    alt="Brand 8"
                    width={204}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/9.avif"
                    alt="Brand 9"
                    width={98}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                  <Image
                    src="/assets/brands/10.avif"
                    alt="Brand 10"
                    width={167}
                    height={28}
                    className="h-[22px] w-auto shrink-0 min-[375px]:h-[24px] sm:h-[28px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
