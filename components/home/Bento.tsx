"use client";
import * as React from "react";
import Video from "../ui/Video";

const metrics = [
  {
    number: "700,000+",
    label: "Creators",
    description: "Already onboarded",
    src: "/assets/home/bento1.avif",
    animationUrl: "/lottie/1.json",
    videoUrl: "/webm/1.webm",
    videoFrameUrl: "/webm/1_frame.avif",
  },
  {
    number: "1,000+",
    label: "Brands",
    description: "Actively hiring",
    src: "/assets/home/bento2.avif",
    animationUrl: "/lottie/2.json",
    videoUrl: "/webm/2.webm",
    videoFrameUrl: "/webm/2_frame.avif",
  },
  {
    number: "5B+",
    label: "Views",
    description: "Delivered last 90 days",
    src: "/assets/home/bento3.avif",
    animationUrl: "/lottie/3.json",
    videoUrl: "/webm/3.webm",
    videoFrameUrl: "/webm/3_frame.avif",
  },
  {
    number: "$100M+",
    label: "Paid Out",
    description: "To creators seamlessly",
    src: "/assets/home/bento4.avif",
    animationUrl: "/lottie/4.json",
    videoUrl: "/webm/4.webm",
    videoFrameUrl: "/webm/4_frame.avif",
  },
];

function Bento({ isCreator }: { isCreator: boolean }) {
  return (
    <section id="bento" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-10.5">
            <h2 className="max-w-[15ch] text-center max-[375px]:text-[28px]">
              {isCreator
                ? "The Largest UGC Creator Network"
                : "The Numbers That Power SideShift"}
            </h2>

            <div className="grid w-full grid-cols-2 gap-2 min-[375px]:gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((stat) => (
                <div
                  key={`${stat.number}-${stat.label}`}
                  className="metrics-card relative z-0 flex flex-col overflow-hidden rounded-lg border-2 border-white"
                >
                  <div className="flex flex-col p-3 min-[375px]:p-4 md:p-6">
                    <p className="text-[14px] leading-5 font-bold tracking-[-0.01em] min-[375px]:text-base min-[375px]:leading-6 sm:text-lg">
                      {stat.number} {stat.label}
                    </p>
                    <p className="text-[13px] leading-5 text-gray-600 min-[375px]:text-[14px] sm:text-base sm:leading-6">
                      {stat.description}
                    </p>
                  </div>
                  <div className="-z-10 aspect-[40/25] w-full">
                    <Video
                      src={stat.videoUrl}
                      className="absolute top-0 left-1/2 h-[105%] w-[105%] max-w-none -translate-x-1/2 object-cover"
                      poster={stat.videoFrameUrl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bento;
