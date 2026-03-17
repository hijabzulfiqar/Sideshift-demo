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
  highVolumeHeroOverrides,
  highVolumeWhyUgc,
  highVolumeUgcComparison,
  highVolumeComparisonRows,
  highVolumePricing,
  highVolumeFaqContent,
  highVolumeFaqData,
  highVolumeArticles,
  highVolumeArticlesContent,
} from "@/data/use-cases/high-volume-ugc";

export default function HighVolumeUgcPage() {
  return (
    <>
      <Header demoMode />

      <main>
        <Hero isCreator={false} demoMode overrides={highVolumeHeroOverrides} />
        <Brands isCreator={false} />
        <WhyUgc content={highVolumeWhyUgc} />
        <Workflow isCreator={false} />
        <SideShiftCreators platformMode autoplayVideos={false} />
        <Platform isCreator={false} />
        <Testimonials isCreator={false} demoMode />
        <Bento isCreator={false} />
        <PricingSnapshot demoMode
          heading={highVolumePricing.heading}
          subheading={highVolumePricing.subheading}
        />
        <UgcComparison
          content={highVolumeUgcComparison}
          rows={highVolumeComparisonRows}
        />
        <FAQ
          isCreator={false}
          customFaqData={highVolumeFaqData}
          customHeading={highVolumeFaqContent.heading}
          customSubheading={highVolumeFaqContent.subheading}
        />
        <RelatedArticles
          content={highVolumeArticlesContent}
          articles={highVolumeArticles}
        />
        <Cta isCreator={false} demoMode />
      </main>

      <Footer />

      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]" />
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]" />
    </>
  );
}
