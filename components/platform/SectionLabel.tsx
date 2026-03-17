import React from "react";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-sm leading-[140%] font-medium tracking-[0.02em] text-[rgba(32,32,32,0.5)] md:text-base">
      {children}
    </p>
  );
}
