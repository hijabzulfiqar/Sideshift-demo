"use client";
import * as React from "react";
import Video from "../ui/Video";

function Platform({
  isCreator,
  heading,
  featureOverrides,
}: {
  isCreator: boolean;
  heading?: string;
  featureOverrides?: { title: string; description: string }[];
}) {
  const features = [
    {
      title: featureOverrides?.[0]?.title ?? (isCreator ? "Centralized Opportunities." : "Source Creators."),
      description: featureOverrides?.[0]?.description ?? (isCreator
        ? "Find & apply to campaigns from top brands."
        : "Reach thousands of creators instantly."),

      image: "/assets/home/platform1.avif",
      imageCreator: "/assets/creators/platform.avif",
      videoUrl: "/webm/6.webm",
      videoCreatorUrl: "/webm/C-4.webm",
      videoFrameCreatorUrl: "/webm/C-4_frame.avif",
      videoFrameUrl: "/webm/6_frame.avif",
    },
    {
      title: featureOverrides?.[1]?.title ?? (isCreator ? "Payments Built-In." : "Track Performance."),
      description: featureOverrides?.[1]?.description ?? (isCreator
        ? "Track earnings and receive payouts automatically."
        : "See content, views, engagement, and conversions in real time."),

      image: "/assets/home/platform2.avif",
      imageCreator: "/assets/creators/platform2.avif",
      videoUrl: "/webm/7.webm",
      videoCreatorUrl: "/webm/C-2.webm",
      videoFrameCreatorUrl: "/webm/C-2_frame.avif",
      videoFrameUrl: "/webm/7_frame.avif",
    },
    {
      title: featureOverrides?.[2]?.title ?? (isCreator ? "Track Performance." : "Automate Payments."),
      description: featureOverrides?.[2]?.description ?? (isCreator
        ? "See views, clicks, and engagement from your content."
        : "Handle payouts and invoices without manual work."),
      image: "/assets/home/platform3.avif",
      imageCreator: "/assets/creators/platform3.avif",
      videoUrl: "/webm/8.webm",
      videoCreatorUrl: "/webm/C-3.webm",
      videoFrameCreatorUrl: "/webm/C-3_frame.avif",
      videoFrameUrl: "/webm/8_frame.avif",
    },
    {
      title: featureOverrides?.[3]?.title ?? (isCreator ? "Easy Delivery." : "Manage Creators."),
      description: featureOverrides?.[3]?.description ?? (isCreator
        ? "Manage briefs, approvals and payments in one platform."
        : "Organize your roster and run campaigns seamlessly."),
      image: "/assets/home/platform4.avif",
      imageCreator: "/assets/creators/platform4.avif",
      videoUrl: "/webm/9.webm",
      videoCreatorUrl: "/webm/C-5.webm",
      videoFrameUrl: "/webm/9_frame.avif",
      videoFrameCreatorUrl: "/webm/C-5_frame.avif",
    },
  ];
  return (
    <section id="platform" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-10.5">
            <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px]">
              {heading
                ? heading
                : isCreator
                  ? "Everything Creators Need in One Dashboard"
                  : "One Platform for All Your UGC Campaigns"}
            </h2>

            <div className="flex w-full flex-col gap-2 min-[375px]:gap-3">
              {/* First Row */}
              <div className="flex flex-col gap-2 min-[375px]:gap-3 [@media(min-width:760px)]:flex-row">
                <div
                  className={`platform-feature-card relative z-0 mx-auto flex aspect-auto min-h-[280px] max-w-[500px] flex-1 flex-col overflow-hidden rounded-lg border-2 border-white min-[375px]:min-h-[300px] sm:aspect-auto sm:min-h-[391px] ${isCreator ? "md:max-w-none" : "md:max-w-[492px]"}`}
                  key={
                    isCreator
                      ? `creators${features[0].title}`
                      : `brands${features[0].title}`
                  }
                >
                  <div className="px-4 pt-4 min-[375px]:px-5 min-[375px]:pt-5">
                    <h3 className="inline text-base leading-5 font-bold tracking-[-0.01em] text-gray-900 min-[375px]:text-lg min-[375px]:leading-6">
                      {features[0].title}
                    </h3>
                    <p className="inline text-[14px] leading-[1.3] text-gray-600 min-[375px]:text-base">
                      &nbsp;{features[0].description}
                    </p>
                  </div>

                  {isCreator ? (
                    <Video
                      src={features[0].videoCreatorUrl}
                      className="absolute top-0 left-[-10%] -z-10 aspect-[1168/774] h-[100%] max-w-none sm:left-1/2 sm:-translate-x-1/2 md:h-[100%]"
                      poster={features[0].videoFrameCreatorUrl}
                    />
                  ) : (
                    <Video
                      src={features[0].videoUrl}
                      className="absolute top-[0%] left-[50%] -z-10 h-full w-[100%] max-w-none -translate-x-1/2 object-cover object-left-top md:w-full"
                      poster={features[0].videoFrameUrl}
                    />
                  )}
                </div>
                <div
                  key={
                    isCreator
                      ? `creators${features[1].title}`
                      : `brands${features[1].title}`
                  }
                  className="platform-feature-card relative z-0 mx-auto flex aspect-auto min-h-[280px] max-w-[500px] flex-1 flex-col overflow-hidden rounded-lg border-2 border-white min-[375px]:min-h-[300px] sm:aspect-auto sm:min-h-[391px] md:max-w-none"
                >
                  <div className="px-4 pt-4 min-[375px]:px-5 min-[375px]:pt-5">
                    <h3 className="inline text-base leading-5 font-bold tracking-[-0.01em] text-gray-900 min-[375px]:text-lg min-[375px]:leading-6">
                      {features[1].title}
                    </h3>
                    <p className="inline text-[14px] leading-[1.3] text-gray-600 min-[375px]:text-base">
                      &nbsp;{features[1].description}
                    </p>
                  </div>

                  {isCreator ? (
                    <Video
                      src={features[1].videoCreatorUrl}
                      className="absolute top-0 left-1/2 -z-10 aspect-[1248/774] h-[100%] max-w-none -translate-x-1/2 md:h-[100%]"
                      poster={features[1].videoFrameCreatorUrl}
                    />
                  ) : (
                    <Video
                      src={features[1].videoUrl}
                      className="absolute -top-1 -z-10 aspect-[1364/774] h-[120%] max-w-none md:top-auto md:bottom-[-4%] md:left-[-1.3%] md:h-[114%] md:w-auto"
                      poster={features[1].videoFrameUrl}
                    />
                  )}
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col gap-2 min-[375px]:gap-3 [@media(min-width:760px)]:flex-row">
                <div
                  key={
                    isCreator
                      ? `creators${features[2].title}`
                      : `brands${features[2].title}`
                  }
                  className="platform-feature-card relative z-0 mx-auto flex aspect-auto min-h-[280px] max-w-[500px] flex-1 flex-col overflow-hidden rounded-lg border-2 border-white min-[375px]:min-h-[300px] sm:aspect-auto sm:min-h-[391px] md:max-w-none"
                >
                  <div className="px-4 pt-4 min-[375px]:px-5 min-[375px]:pt-5">
                    <h3 className="inline text-base leading-5 font-bold tracking-[-0.01em] text-gray-900 min-[375px]:text-lg min-[375px]:leading-6">
                      {features[2].title}
                    </h3>
                    <p className="inline text-[14px] leading-[1.3] text-gray-600 min-[375px]:text-base">
                      &nbsp;{features[2].description}
                    </p>
                  </div>

                  {isCreator ? (
                    <Video
                      src={features[2].videoCreatorUrl}
                      className="absolute top-[-3px] left-1/2 -z-10 aspect-[1168/774] h-[117%] max-w-none -translate-x-1/2 md:h-[106%]"
                      poster={features[2].videoFrameCreatorUrl}
                    />
                  ) : (
                    <Video
                      src={features[2].videoUrl}
                      className="absolute top-[-1%] left-1/2 -z-10 aspect-[1364/774] h-[115%] max-w-none -translate-x-1/2 md:top-[-1%] md:h-[110%]"
                      poster={features[2].videoFrameUrl}
                    />
                  )}
                </div>
                <div
                  key={
                    isCreator
                      ? `creators${features[3].title}`
                      : `brands${features[3].title}`
                  }
                  className={`platform-feature-card relative z-0 mx-auto flex aspect-auto min-h-[280px] max-w-[500px] flex-1 flex-col overflow-hidden rounded-lg border-2 border-white min-[375px]:min-h-[300px] sm:aspect-auto sm:min-h-[391px] ${isCreator ? "md:max-w-none" : "md:max-w-[492px]"}`}
                >
                  <div className="px-4 pt-4 min-[375px]:px-5 min-[375px]:pt-5">
                    <h3 className="inline text-base leading-5 font-bold tracking-[-0.01em] text-gray-900 min-[375px]:text-lg min-[375px]:leading-6">
                      {features[3].title}
                    </h3>
                    <p className="inline text-[14px] leading-[1.3] text-gray-600 min-[375px]:text-base">
                      &nbsp;{features[3].description}
                    </p>
                  </div>

                  {isCreator ? (
                    <Video
                      src={features[3].videoCreatorUrl}
                      className="absolute top-0 left-[0%] -z-10 aspect-[1168/774] h-[125%] max-w-none md:top-0 md:h-[103%]"
                      poster={features[3].videoFrameCreatorUrl}
                    />
                  ) : (
                    <Video
                      src={features[3].videoUrl}
                      className="absolute top-0 left-1/2 -z-10 aspect-[1052/774] h-[145%] max-w-none -translate-x-1/2 md:top-0 md:h-full"
                      poster={features[3].videoFrameUrl}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
