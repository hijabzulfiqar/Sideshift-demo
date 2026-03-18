"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Bento from "@/components/home/Bento";
import Cta from "@/components/home/Cta";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import ComparisonTable from "@/components/home/ComparisonTable";
import AgencyValueProps from "@/components/agency/AgencyValueProps";
import AgencyPricing from "@/components/agency/AgencyPricing";
import Workflow from "@/components/home/Workflow";
import Platform from "@/components/home/Platform";
import SideShiftCreators from "@/components/home/SideShiftCreators";
import Script from "next/script";
import {
  agencyHeroOverrides,
  agencyPlatformFeatures,
  agencyComparisonRows,
  agencyFaqData,
} from "@/data/agency";

export default function ForAgenciesPage() {
  return (
    <>
      <Header />

      <main>
        <Hero isCreator={false} overrides={agencyHeroOverrides} />

        <Brands isCreator={false} />

        <Bento isCreator={false} />

        <Workflow isCreator={false} heading="How SideShift Works for Agencies" />
        <Platform
          isCreator={false}
          heading="One Platform for Every Client"
          featureOverrides={agencyPlatformFeatures}
        />
        <SideShiftCreators marketplaceMode autoplayVideos={false} />

        <Cta isCreator={false} demoMode />

        <ComparisonTable
          demoMode
          heading="Why Agencies Switch to SideShift"
          subheading="Stop scaling headcount. Start scaling output."
          col2Header="Doing It Yourself"
          col3Header="Hiring Staff"
          rows={agencyComparisonRows}
          ctaText="Book Agency Demo"
        />

        <Testimonials isCreator={false} demoMode />

        <AgencyValueProps />

        <AgencyPricing />

        <FAQ
          isCreator={false}
          customFaqData={agencyFaqData}
          customHeading="Agency FAQs"
        />

        <Cta
          isCreator={false}
          demoMode
          heading="Ready to scale your agency without scaling your team?"
          ctaText="Book Agency Demo"
        />
      </main>

      <Footer />

      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]" />
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]" />

      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
