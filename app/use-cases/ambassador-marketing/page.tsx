"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Bento from "@/components/home/Bento";
import Platform from "@/components/home/Platform";
import Workflow from "@/components/home/Workflow";
import Testimonials from "@/components/home/Testimonials";
import PricingSnapshot from "@/components/home/PricingSnapshot";
import Cta from "@/components/home/Cta";
import FAQ from "@/components/home/FAQ";
import SideShiftCreators from "@/components/home/SideShiftCreators";
import WhyUgc from "@/components/platform/WhyUgc";
import UgcComparison from "@/components/platform/UgcComparison";
import RelatedArticles from "@/components/platform/RelatedArticles";
import {
  ambassadorHeroOverrides,
  ambassadorWhyUgc,
  ambassadorUgcComparison,
  ambassadorComparisonRows,
  ambassadorPricing,
  ambassadorFaqContent,
  ambassadorFaqData,
  ambassadorArticles,
  ambassadorArticlesContent,
} from "@/data/use-cases/ambassador-marketing";

export default function AmbassadorMarketingPage() {
  return (
    <>
      <Header demoMode />

      <main>
        <Hero isCreator={false} demoMode overrides={ambassadorHeroOverrides} />
        <Brands isCreator={false} />
        <WhyUgc content={ambassadorWhyUgc} />
        <Workflow isCreator={false} />
        <SideShiftCreators platformMode autoplayVideos={false} />
        <Platform isCreator={false} />
        <Testimonials isCreator={false} demoMode />
        <Bento isCreator={false} />
        <PricingSnapshot demoMode
          heading={ambassadorPricing.heading}
          subheading={ambassadorPricing.subheading}
        />
        <UgcComparison
          content={ambassadorUgcComparison}
          rows={ambassadorComparisonRows}
        />
        <FAQ
          isCreator={false}
          customFaqData={ambassadorFaqData}
          customHeading={ambassadorFaqContent.heading}
          customSubheading={ambassadorFaqContent.subheading}
        />
        <RelatedArticles
          content={ambassadorArticlesContent}
          articles={ambassadorArticles}
        />
        <Cta isCreator={false} demoMode />
      </main>

      <Footer />

      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]" />
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]" />
    </>
  );
}
