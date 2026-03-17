"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";

export default function BookingEmbed() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [widgetKey, setWidgetKey] = useState(0);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://app.iclosed.io/assets/widget.js"]',
    );
    if (existingScript) {
      const timer = setTimeout(() => {
        setScriptLoaded(true);
        setWidgetKey((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (scriptLoaded && widgetRef.current) {
      const timer = setTimeout(() => {
        const widgetElement =
          widgetRef.current?.querySelector(".iclosed-widget");
        if (widgetElement) {
          const hasIframe = widgetElement.querySelector("iframe");
          if (!hasIframe) {
            const event = new CustomEvent("iclosed:init", { bubbles: true });
            widgetElement.dispatchEvent(event);
            setTimeout(() => {
              setWidgetKey((prev) => prev + 1);
            }, 100);
          }
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [scriptLoaded]);

  return (
    <>
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptLoaded(true);
          setWidgetKey((prev) => prev + 1);
        }}
      />
      <section id="book" className="relative z-0">
        <div className="px-global py-section-md">
          <div className="max-w-global mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px] md:text-[64px]">
                Book Your Strategy Call
              </h2>
              <p className="max-w-[500px] text-base leading-[135%] text-[rgba(32,32,32,0.75)] md:text-lg">
                Tell us about your setup — we&apos;ll recommend the right path
                for your team.
              </p>
            </div>

            <div ref={widgetRef} className="mt-8 w-full md:mt-10">
              {scriptLoaded && (
                <div
                  key={widgetKey}
                  className="iclosed-widget"
                  data-url="https://app.iclosed.io/e/sideshift/sideshift-demo"
                  title="SideShift Demo"
                  style={{ width: "100%", height: "480px" }}
                />
              )}
            </div>
            <p className="mt-4 text-center text-sm text-[rgba(32,32,32,0.5)]">
              Most teams get set up in under 10 minutes on the self-serve
              platform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
