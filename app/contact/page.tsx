"use client";

import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
const stats = [
  { number: "700K+", label: "Creators" },
  { number: "1K+", label: "Brands" },
  { number: "5B+", label: "Views" },
];

const testimonials = [
  {
    id: 1,
    name: "Luis Ocampo",
    title: "Founding Team, Partiful",
    testimonial:
      "The applicants have been super high quality! Unlike any platform I've used in the past.",
    avatar: "/assets/testimonials/1.avif",
  },
  {
    id: 2,
    name: "Edward Tian",
    title: "Founder, GPTZero",
    testimonial:
      "SideShift was a huge help for us in the gen z hiring process. We were able to fill 100% of our creator hiring needs in just a few weeks.",
    avatar: "/assets/testimonials/2.avif",
  },
  {
    id: 3,
    name: "Henrique Dubugras",
    title: "Founding CEO @ Brex",
    testimonial:
      "SideShift has shown us how much of a multiplier authentic, organic short-form content can be.",
    avatar: "/assets/testimonials/6.avif",
  },
];

const brands = [
  { src: "/assets/brands/1.avif", alt: "Brand 1", width: 94 },
  { src: "/assets/brands/2.avif", alt: "Brand 2", width: 110 },
  { src: "/assets/brands/3.avif", alt: "Brand 3", width: 83 },
  { src: "/assets/brands/4.avif", alt: "Brand 4", width: 122 },
  { src: "/assets/brands/5.avif", alt: "Brand 5", width: 80 },
  { src: "/assets/brands/6.avif", alt: "Brand 6", width: 83 },
];

export default function ContactPage() {
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
      <Header />

      <section id="contact" className="relative z-0">
        <div className="px-global pt-[120px] pb-[40px] md:pt-[140px] md:pb-[60px]">
          <div className="max-w-global mx-auto">
            {/* Hero Section */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="h2-style max-w-[19ch]">
                See if Sideshift fits your team
              </h1>
              <p className="max-w-[500px] text-base leading-[135%] text-[rgba(32,32,32,0.75)] md:text-lg">
                Tell us about your setup — we'll recommend the right path (self-serve trial or guided demo).
              </p>
            </div>

            {/* Stats Strip */}
            <div className="mt-6 flex items-center justify-center gap-6 md:mt-8 md:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-[#202020] md:text-2xl">
                    {stat.number}
                  </span>
                  <span className="text-sm text-[rgba(32,32,32,0.6)] md:text-base">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Booking Widget - Full Width */}
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
            {/* Below-widget trust line */}
            <p className="font-geist text-center text-sm text-[rgba(32,32,32,0.5)] mt-4">
              Most teams get set up in under 10 minutes on the self-serve platform.
            </p>

            {/* Testimonials - Horizontal on Desktop */}
            <div className="mt-6 flex flex-col gap-3 md:mt-8">
              <p className="text-center text-sm font-medium tracking-wider text-[rgba(32,32,32,0.5)] uppercase">
                Trusted by leading brands
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-3 rounded-xl border border-[rgba(32,32,32,0.08)] bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm leading-[1.5] text-[rgba(32,32,32,0.75)]">
                      &ldquo;{item.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#202020]">
                          {item.name}
                        </p>
                        <p className="text-xs text-[rgba(32,32,32,0.6)]">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Logos */}
            <div className="mt-6 flex flex-col items-center gap-3 md:mt-8">
              <p className="text-sm text-[rgba(32,32,32,0.5)]">
                Trusted by top brands worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {brands.map((brand, index) => (
                  <Image
                    key={index}
                    src={brand.src}
                    alt={brand.alt}
                    width={brand.width}
                    height={28}
                    className="h-[20px] w-auto opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-[24px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
