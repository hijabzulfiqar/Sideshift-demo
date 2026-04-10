"use client";

import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { TbUserOff } from "react-icons/tb";
import { RiStackLine } from "react-icons/ri";
import type { IconType } from "react-icons";

const cards: { icon: IconType; title: string; description: string }[] = [
  {
    icon: HiOutlineCurrencyDollar,
    title: "Paid Ads Are Getting More Expensive",
    description:
      "iOS 14.5 broke targeting. CPMs up 40\u2013100%. Creative fatigues every 2\u20134 weeks. You\u2019re paying more to reach fewer of the right people.",
  },
  {
    icon: TbUserOff,
    title: "Influencers Aren\u2019t Converting",
    description:
      "$5K\u2013$100K per post. Their audience knows it\u2019s sponsored. You don\u2019t own the content. And you can\u2019t iterate on what doesn\u2019t work.",
  },
  {
    icon: RiStackLine,
    title: "DIY Creator Management Is Chaos",
    description:
      "Scouting on TikTok. DMing on Instagram. Negotiating over email. Tracking in spreadsheets. Paying via Venmo. Five platforms, zero visibility.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Header */}
            <div className="flex flex-col items-center gap-3 text-center md:gap-4">
              <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#014163]">
                Sound familiar?
              </p>
              <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px]">
                Your Marketing Isn&apos;t Working Because You&apos;re Not Testing Enough Content
              </h2>
              <p className="max-w-[640px] text-base leading-[1.5] text-[rgba(32,32,32,0.65)] md:text-lg">
                Most brands put all their budget behind 1&ndash;2 polished campaigns and pray
                something hits. That&apos;s not a strategy. That&apos;s a lottery ticket.
              </p>
            </div>

            {/* Cards */}
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="painpoint-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[rgba(1,65,99,0.08)] p-5 transition-all duration-300 hover:border-[rgba(1,65,99,0.15)] hover:shadow-[0_8px_30px_rgba(1,65,99,0.08)] sm:p-6 md:p-7"
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#014163] to-transparent opacity-20 transition-opacity duration-300 group-hover:opacity-40" />

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#E0F5FF] to-[#c8ecff] shadow-[0_2px_8px_rgba(1,65,99,0.08)] sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 text-[#014163] sm:h-[22px] sm:w-[22px]" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-[16px] leading-[1.25] font-bold tracking-[-0.01em] text-[#0a0a0a] sm:text-[17px] md:text-lg">
                        {card.title}
                      </h3>
                      <p className="text-[14px] leading-[1.6] text-[rgba(32,32,32,0.6)] md:text-[15px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
