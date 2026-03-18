"use client";

const valueProps = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202020" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Save 10+ hours/week",
    description:
      "No more weekly report builds or 3-hour payout sessions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202020" strokeWidth="2" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Reduce client churn",
    description:
      "Give clients real-time dashboard access. They stop asking for updates because they can see results themselves.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202020" strokeWidth="2" strokeLinecap="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Scale without hiring",
    description:
      "Manage 10+ client campaigns without a $60K/year coordinator.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202020" strokeWidth="2" strokeLinecap="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="17" cy="9" r="3" />
        <path d="M21 21v-2a3 3 0 00-2-2.83" />
      </svg>
    ),
    title: "Never lose creators",
    description:
      "Built-in database keeps your best performers ready across all client programs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202020" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h4" />
      </svg>
    ),
    title: "Year-end made easy",
    description:
      "Automated W9s and 1099s. No more days of tax work.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202020" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h6M3 15h6" />
      </svg>
    ),
    title: "Professional positioning",
    description:
      "Enterprise infrastructure vs spreadsheets. Show clients a real platform, not a Google Sheet.",
  },
];

export default function AgencyValueProps() {
  return (
    <section id="value-props" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3 text-center md:gap-4">
              <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px] max-[320px]:text-[24px]">
                Built for agencies that move fast
              </h2>
              <p className="max-w-[600px] text-base leading-[135%] text-[rgba(32,32,32,0.75)] md:text-lg">
                Everything you need to run creator programs across every client.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {valueProps.map((prop) => (
                <div
                  key={prop.title}
                  className="platform-feature-card flex flex-col gap-3 rounded-2xl border-2 border-white p-6 md:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f3f5]">
                    {prop.icon}
                  </div>
                  <h3 className="text-[18px] leading-[1.2] font-bold text-[#202020] md:text-[20px]">
                    {prop.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-[rgba(32,32,32,0.65)] md:text-[15px]">
                    {prop.description}
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
