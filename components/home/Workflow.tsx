"use client";
import * as React from "react";
import LazyLottie from "../ui/LazyLottie";

function Workflow({ isCreator, heading }: { isCreator: boolean; heading?: string }) {
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
