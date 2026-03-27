"use client";

export default function TickerBar() {
  const items = [
    "700,000+ Creators",
    "1,000+ Brands",
    "\u2605\u2605\u2605\u2605\u2605",
    "5B+ Views Tracked",
  ];

  return (
    <div className="relative z-50 w-full overflow-hidden bg-[#202020] py-2.5">
      <div className="flex w-full items-center overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent_100%)]">
        {[1, 2, 3].map((copy) => (
          <div
            key={copy}
            className="marquee-scroll flex shrink-0 items-center gap-0 pl-0"
            style={{ animationDuration: "25s" }}
          >
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap text-[13px] font-medium tracking-wide text-white/90 sm:text-sm">
                  {item}
                </span>
                <span className="mx-4 text-white/30 sm:mx-6">&middot;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
