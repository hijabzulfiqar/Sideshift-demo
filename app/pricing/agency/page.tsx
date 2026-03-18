import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";

export default function AgencyPricingPage() {
  return (
    <>
      <Header />
      <main>
        <section id="agency-pricing" className="relative">
          <div className="px-global py-section-md pt-[89px] sm:pt-[100px] md:pt-[118px]">
            <div className="max-w-global mx-auto">
              <PricingCards
                variant="full"
                title="Pricing built for agencies"
                subtitle="One platform fee. Per-client workspaces. Scale your book of business without scaling your team."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
