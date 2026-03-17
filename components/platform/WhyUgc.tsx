import React from "react";
import SectionLabel from "./SectionLabel";
import type { WhyUgcContent } from "@/types/platform";

interface WhyUgcProps {
  content: WhyUgcContent;
}

const cardImages = [
  "/assets/home/bento1.avif",
  "/assets/home/bento2.avif",
  "/assets/home/bento3.avif",
];

export default function WhyUgc({ content }: WhyUgcProps) {
  return (
    <section id="why-ugc" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3 text-center md:gap-4">
              <SectionLabel>{content.label}</SectionLabel>
              <h2>{content.heading}</h2>
              {content.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="max-w-[680px] text-[14px] leading-[1.5] text-[rgba(32,32,32,0.6)] md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
              {content.cards.map((card, i) => (
                <div
                  key={card.title}
                  className="platform-feature-card flex flex-col gap-4 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-[18px] leading-[1.2] font-bold text-[#202020] md:text-[20px]">
                    {card.title}
                  </h3>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f1f3f5]">
                    <img
                      src={cardImages[i % cardImages.length]}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[14px] leading-[1.5] text-[rgba(32,32,32,0.65)] md:text-[15px]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
