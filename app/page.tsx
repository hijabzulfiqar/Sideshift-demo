"use client";

import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Bento from "@/components/home/Bento";
import Workflow from "@/components/home/Workflow";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ComparisonTable from "@/components/home/ComparisonTable";
import TickerBar from "@/components/home/TickerBar";
import PainPoints from "@/components/home/PainPoints";
import TheShift from "@/components/home/TheShift";
import CaseStudies from "@/components/home/CaseStudies";
import FinalCta from "@/components/home/FinalCta";
import Logo from "@/components/Logo";
import Link from "next/link";
import Script from "next/script";

/* ── Hero copy overrides ── */
const heroOverrides = {
  label: "Attention: Consumer App, SaaS & E-Commerce Founders",
  headline: "Turn Creators Into Your Most Profitable Growth Channel",
  subtitle:
    "The fastest-growing brands don\u2019t rely on influencers or paid ads anymore. They run high-volume UGC creator programs that go viral consistently \u2014 and SideShift is the only platform built to make that happen.",
  primaryCta: {
    text: "Start Your Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_hero",
  },
};

/* ── FAQ: 8 custom items ── */
const faqItems = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "Create a free SideShift business account, post your first opportunity, and instantly reach thousands of high-quality, Gen Z UGC creators.",
  },
  {
    id: 2,
    question: "Does SideShift cost money?",
    answer:
      "SideShift is a paid product, but we offer a 7-day free trial so you can test fit before committing. We charge only a 1% fee on creator payouts to cover Stripe processing fees.",
  },
  {
    id: 3,
    question: "How fast can I hire creators?",
    answer:
      "90% of businesses hire within their first week, and many hire even sooner\u2014some on their first day on the platform.",
  },
  {
    id: 4,
    question: "UGC vs Influencer Marketing?",
    answer:
      "Influencers charge a premium for their audience. With UGC you can post hundreds of videos and test dozens of content formats for the cost of a few influencer posts. TikTok and Instagram algorithms even boost fresh accounts, giving organic content a lift.",
  },
  {
    id: 5,
    question: "What should I expect?",
    answer:
      "In the first 30 days, build your creator team, test different formats, and identify content-market fit. During months 2\u20133, double down on what works and scale your UGC spend to improve ROAS. Focus on ROAS over CPM as your main performance metric.",
  },
  {
    id: 6,
    question: "How does SideShift compare to an agency?",
    answer:
      "Most agencies charge $5,000\u2013$10,000/month for creator management. SideShift gives you direct access to 700,000+ creators starting at $99/month \u2014 that\u2019s about $0.40 per video at scale. You keep full control of briefs, approvals, and payments. No retainer. No markups on creator fees. Cancel anytime.",
  },
  {
    id: 7,
    question: "My team is small \u2014 can we manage this?",
    answer:
      "That\u2019s exactly who SideShift is built for. Most of our customers are teams of 1\u20133 people managing 10\u201350+ creators through the platform. Everything happens in one place \u2014 briefs, contracts, payments, content review. No spreadsheets, no email threads, no DM chaos.",
  },
  {
    id: 8,
    question: "What if creators ghost?",
    answer:
      "Every creator on SideShift has a verified track record and response rate visible on their profile. Our contract system includes deadlines and milestone tracking \u2014 if a creator goes silent, you\u2019re notified immediately and can replace them with one click. Teams using SideShift report a 90%+ completion rate on contracted campaigns.",
  },
];

export default function LandingPage() {
  const isCreator = false;

  return (
    <>
      {/* Top ticker bar */}
      <TickerBar />

      {/* Centered logo — no nav */}
      <div className="flex items-center justify-center pt-5 pb-2 sm:pt-6 md:pt-8">
        <Logo />
      </div>

      <main>
        {/* 1. Hero */}
        <Hero
          isCreator={isCreator}
          overrides={heroOverrides}
          hideSecondaryCta
        />

        {/* 2. Logo bar */}
        <Brands isCreator={isCreator} />

        {/* 3. Numbers / Stats */}
        <Bento isCreator={isCreator} />

        {/* 4. Pain points - "Sound Familiar?" */}
        <PainPoints />

        {/* 5. The Shift + Why UGC */}
        <TheShift />

        {/* 6. How it works (lottie animation + CTA) */}
        <Workflow isCreator={isCreator} showCta />

        {/* 8. Comparison Table */}
        <ComparisonTable heading="The New Standard for Creator Marketing" />

        {/* 9. Case Studies */}
        <CaseStudies />

        {/* 10. Testimonials */}
        <Testimonials isCreator={isCreator} />

        {/* 11. FAQ */}
        <FAQ isCreator={isCreator} customFaqData={faqItems} />

        {/* 12. Final CTA */}
        <FinalCta />
      </main>

      {/* ── Minimal Footer ── */}
      <footer className="relative mt-auto">
        <div className="px-global py-section-md pb-10">
          <div className="max-w-global mx-auto flex flex-col items-center gap-6 text-center">
            <p className="text-sm text-[rgba(32,32,32,0.5)]">
              SideShift &mdash; Copyright &copy; 2025. All Rights Reserved.
            </p>
            <p className="max-w-[700px] text-xs leading-[1.5] text-[rgba(32,32,32,0.35)]">
              This site is not a part of the Facebook website or Facebook Inc.
              This site is NOT endorsed by Facebook in any way. This site is not
              a part of Google or Google Inc. This site is NOT endorsed by
              Google in any way.
            </p>
            <p className="max-w-[700px] text-xs leading-[1.5] text-[rgba(32,32,32,0.35)]">
              Results and case studies reflect the outcomes of our best clients.
              They serve as examples, not guarantees. Individual results vary.
            </p>
            <div className="flex items-center gap-2 text-sm text-[rgba(32,32,32,0.5)]">
              <Link
                href="/terms-of-service"
                className="underline transition-colors hover:text-[#202020]"
              >
                Terms of Service
              </Link>
              <span>&middot;</span>
              <Link
                href="/privacy-policy"
                className="underline transition-colors hover:text-[#202020]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Background gradients */}
      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]" />
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]" />

      {/* iClosed popup widget script */}
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="afterInteractive"
      />
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1432305571358915');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}
