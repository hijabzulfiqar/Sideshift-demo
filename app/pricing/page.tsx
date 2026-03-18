import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section id="pricing" className="relative">
          <div className="px-global py-section-md pt-[89px] sm:pt-[100px] md:pt-[118px]">
            <div className="max-w-global mx-auto">
              <PricingCards
                variant="full"
                title="Choose the right plan for your growth goals"
                subtitle="Start with a free trial on our self-serve platform, or book a call for managed services."
              />
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-6 mb-6">
          <Link
            href="/roi-calculator"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[rgba(32,32,32,0.35)] hover:border-b hover:border-black transition-all duration-150"
          >
            Calculate your ROI
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
      {/* iClosed popup widget script */}
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
