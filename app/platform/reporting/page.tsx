"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Bento from "@/components/home/Bento";
import Platform from "@/components/home/Platform";
import Workflow from "@/components/home/Workflow";
import SideShiftCreators from "@/components/home/SideShiftCreators";
import Testimonials from "@/components/home/Testimonials";
import PricingSnapshot from "@/components/home/PricingSnapshot";
import FAQ from "@/components/home/FAQ";
import Cta from "@/components/home/Cta";
import WhyUgc from "@/components/platform/WhyUgc";
import UgcComparison from "@/components/platform/UgcComparison";
import RelatedArticles from "@/components/platform/RelatedArticles";
import {
  reportingHeroOverrides,
  reportingWhyUgc,
  reportingUgcComparison,
  reportingComparisonRows,
  reportingPricing,
  reportingFaqContent,
  reportingFaqData,
  reportingArticles,
  reportingArticlesContent,
} from "@/data/platform/reporting";

export default function ReportingPage() {
  return (
    <>
      <Header demoMode />
      <main>
        <Hero isCreator={false} demoMode overrides={reportingHeroOverrides} />
        <Brands isCreator={false} />
        <Bento isCreator={false} />
        <Platform isCreator={false} />
        <Workflow isCreator={false} />
        <SideShiftCreators platformMode autoplayVideos={false} />
        <WhyUgc content={reportingWhyUgc} />
        <Testimonials isCreator={false} demoMode />
        <PricingSnapshot demoMode
          heading={reportingPricing.heading}
          subheading={reportingPricing.subheading}
        />
        <UgcComparison
          content={reportingUgcComparison}
          rows={reportingComparisonRows}
        />
        <FAQ
          isCreator={false}
          customFaqData={reportingFaqData}
          customHeading={reportingFaqContent.heading}
          customSubheading={reportingFaqContent.subheading}
        />
        <RelatedArticles
          content={reportingArticlesContent}
          articles={reportingArticles}
        />
        <Cta isCreator={false} demoMode />
      </main>
      <Footer />
      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]" />
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]" />
    </>
  );
}
