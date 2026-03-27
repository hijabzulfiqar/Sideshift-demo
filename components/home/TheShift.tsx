"use client";

const cards = [
  {
    title: "Dedicated Creator Accounts",
    description:
      "Creators build fresh accounts in your niche. Algorithms boost new accounts, and your content feels native \u2014 not sponsored. You get an army of authentic voices.",
  },
  {
    title: "High Volume UGC",
    description:
      "Ten creators posting weekly beats one mega-influencer posting monthly. Volume creates data. Data creates winners. Winners create viral growth.",
  },
  {
    title: "Authentic Content That Converts",
    description:
      "89% of consumers trust UGC over brand-created content. Creator-made videos feel real because they are real \u2014 and that\u2019s what drives clicks, installs, and purchases.",
  },
];

const cardImages = [
  "/assets/home/bento1.avif",
  "/assets/home/bento2.avif",
  "/assets/home/bento3.avif",
];

export default function TheShift() {
  return (
    <>
      {/* Callout Banner */}
      <section className="relative">
        <div className="px-global py-section-md pb-0">
          <div className="max-w-global mx-auto">
            <div className="metrics-card rounded-lg border-2 border-white px-6 py-6 md:px-10 md:py-8">
              <p className="text-base leading-[1.5] font-medium text-[rgba(32,32,32,0.75)] md:text-lg">
                AI slop sucks. Consumers don&apos;t trust influencers. Paid ads
                cost more every quarter.{" "}
                <span className="font-bold text-[#014163]">
                  There is a better way.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift + Why UGC 3-Card */}
      <section id="why-ugc" className="relative">
        <div className="px-global py-section-md">
          <div className="max-w-global mx-auto">
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <div className="flex flex-col items-center gap-3 text-center md:gap-4">
                <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#014163]">
                  The Shift
                </p>
                <h2>Creator marketing has changed.</h2>
                <p className="max-w-[680px] text-[14px] leading-[1.5] text-[rgba(32,32,32,0.6)] md:text-base">
                  The winning strategy is volume and velocity. Ten creators
                  posting authentic content weekly outperform one
                  mega-influencer posting once a month, every time.
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
                {cards.map((card, i) => (
                  <div
                    key={card.title}
                    className="platform-feature-card flex flex-col gap-4 rounded-2xl p-6 md:p-8"
                  >
                    <h3 className="text-[18px] leading-[1.2] font-bold text-[#202020] md:text-[20px]">
                      {card.title}
                    </h3>
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f1f3f5]">
                      <img
                        src={cardImages[i]}
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
    </>
  );
}
