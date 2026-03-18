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
import ComparisonTable from "@/components/home/ComparisonTable";
import PricingSnapshot from "@/components/home/PricingSnapshot";
import FAQ from "@/components/home/FAQ";
import Cta from "@/components/home/Cta";
import WhyUgc from "@/components/platform/WhyUgc";
import UgcComparison from "@/components/platform/UgcComparison";
import RelatedArticles from "@/components/platform/RelatedArticles";
import {
  marketplaceHeroOverrides,
  marketplaceWhyUgc,
  marketplaceUgcComparison,
  marketplaceComparisonRows,
  marketplacePricing,
  marketplaceFaqContent,
  marketplaceFaqData,
  marketplaceArticles,
  marketplaceArticlesContent,
} from "@/data/platform/creator-marketplace";

export default function CreatorMarketplacePage() {
  return (
    <>
      <Header />

      <main>
        <Hero isCreator={false} overrides={marketplaceHeroOverrides} />
        <Brands isCreator={false} />
        <Bento isCreator={false} />
        <Platform isCreator={false} />
        <Workflow isCreator={false} />
        <SideShiftCreators marketplaceMode autoplayVideos={false} />
        <WhyUgc content={marketplaceWhyUgc} />
        <Testimonials isCreator={false} />
        <ComparisonTable />
        <PricingSnapshot
          heading={marketplacePricing.heading}
          subheading={marketplacePricing.subheading}
        />
        <UgcComparison
          content={marketplaceUgcComparison}
          rows={marketplaceComparisonRows}
        />
        <FAQ
          isCreator={false}
          customFaqData={marketplaceFaqData}
          customHeading={marketplaceFaqContent.heading}
          customSubheading={marketplaceFaqContent.subheading}
        />
        <RelatedArticles
          content={marketplaceArticlesContent}
          articles={marketplaceArticles}
        />
        <Cta isCreator={false} />
      </main>

      <Footer />

      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]" />
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]" />
    </>
  );
}
