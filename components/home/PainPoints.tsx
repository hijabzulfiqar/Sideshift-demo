"use client";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#E0F5FF" />
        <path
          d="M12 7v4M12 15h.01"
          stroke="#014163"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="5" stroke="#014163" strokeWidth="1.5" />
      </svg>
    ),
    title: "Paid Ads Are Getting More Expensive",
    description:
      "iOS 14.5 broke targeting. CPMs up 40\u2013100%. Creative fatigues every 2\u20134 weeks. You\u2019re paying more to reach fewer of the right people.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#E0F5FF" />
        <path
          d="M15 8.5a2.5 2.5 0 01-5 0 2.5 2.5 0 015 0zM8 16c0-1.657 1.343-3 3-3h2c1.657 0 3 1.343 3 3"
          stroke="#014163"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M17 10l1 1" stroke="#014163" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Influencers Aren\u2019t Converting",
    description:
      "$5K\u2013$100K per post. Their audience knows it\u2019s sponsored. You don\u2019t own the content. And you can\u2019t iterate on what doesn\u2019t work.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#E0F5FF" />
        <rect x="7" y="7" width="4" height="4" rx="0.5" stroke="#014163" strokeWidth="1.5" />
        <rect x="13" y="7" width="4" height="4" rx="0.5" stroke="#014163" strokeWidth="1.5" />
        <rect x="7" y="13" width="4" height="4" rx="0.5" stroke="#014163" strokeWidth="1.5" />
        <rect x="13" y="13" width="4" height="4" rx="0.5" stroke="#014163" strokeWidth="1.5" />
      </svg>
    ),
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
          <div className="flex flex-col items-center gap-8 md:gap-10">
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
            <div className="grid w-full grid-cols-1 gap-2 min-[375px]:gap-3 sm:grid-cols-3 md:gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="metrics-card flex flex-col gap-3 rounded-lg border-2 border-white p-5 md:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0F5FF]">
                    {card.icon}
                  </div>
                  <h3 className="text-base leading-[1.2] font-bold tracking-[-0.01em] min-[375px]:text-lg">
                    {card.title}
                  </h3>
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
