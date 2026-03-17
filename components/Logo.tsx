import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[362/58] w-[120px] min-[375px]:w-[150px] md:w-[181px]",
        className,
      )}
    >
      <Image
        src="/logo.avif"
        width={710}
        height={124}
        alt="SideShift"
        fetchPriority="high"
        className="absolute top-0 left-[0%] h-auto w-[100%]"
      />
    </div>
  );
}

export default Logo;
