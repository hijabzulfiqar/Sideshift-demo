import React from "react";
import Link from "next/link";
import { standardComparisonRows } from "../platform/shared";
import type {
  FaqItem,
  Article,
  WhyUgcContent,
  UgcComparisonContent,
  PricingContent,
  FaqContent,
  ArticlesContent,
  HeroOverrides,
} from "@/types/platform";

export const healthWellnessHeroOverrides: HeroOverrides = {
  label: "Health & Wellness UGC Creator Platform",
  headline: "Scale Your Health & Wellness Brand With Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_health_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_health_hero",
  },
};

export const healthWellnessWhyUgc: WhyUgcContent = {
  label: "Why Health & Wellness UGC?",
  heading: "Authenticity is everything in health & wellness.",
  paragraphs: [
    "Consumers trust real people sharing real results over polished brand ads. Fitness routines, supplement reviews, and wellness journey content from genuine creators drive purchase decisions at scale.",
    "Health and wellness brands that invest in high-volume UGC build the social proof they need to convert skeptical buyers — because nothing sells a product like someone documenting their actual transformation.",
  ],
  cards: [
    {
      title: "Fitness & Routine Content",
      description:
        "Creators who live the lifestyle your customers aspire to. Authentic workout routines, before-and-after content, and day-in-the-life videos that resonate with health-conscious audiences.",
    },
    {
      title: "Supplement & Product Reviews",
      description:
        "Honest, detailed reviews from creators with engaged wellness communities. Real testimonials that build trust and drive conversions far better than any brand-produced claim.",
    },
    {
      title: "Wellness Journey Storytelling",
      description:
        "Long-form and short-form content documenting genuine health journeys. These personal narratives build deep emotional connections and turn viewers into loyal customers.",
    },
  ],
};

export const healthWellnessUgcComparison: UgcComparisonContent = {
  label: "Health & Wellness UGC vs Traditional Influencer Marketing",
  heading: "Health & Wellness UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving health and wellness brands full control at scale.",
  ugcColumnHeader: "High Volume Health & Wellness UGC",
  traditionalColumnHeader: "Traditional Health & Wellness Influencer Marketing",
};

export const healthWellnessComparisonRows = standardComparisonRows;

export const healthWellnessPricing: PricingContent = {
  heading: "Health & wellness UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your health and wellness creator needs.",
};

export const healthWellnessFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about health & wellness influencer marketing and UGC on SideShift.",
};

export const healthWellnessFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is health & wellness UGC?",
    answer: (
      <>
        Health and wellness UGC is authentic content created by real creators — not
        brands — showcasing fitness routines, supplement reviews, nutrition tips, and
        personal wellness journeys. This type of content drives significantly higher
        trust and engagement than traditional branded advertising. Learn more in our{" "}
        <Link
          href="/blog/benefits-of-user-generated-content"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete health & wellness UGC strategy guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How do I find health & wellness creators for my brand?",
    answer: (
      <>
        With SideShift, you can search our marketplace of 700,000+ vetted creators
        filtered by niche, including fitness, nutrition, mental wellness, skincare, and
        more. Browse creator portfolios, view engagement rates, and message creators
        directly. Most health and wellness brands hire their first creators within the
        first week. See our{" "}
        <Link
          href="/blog/how-to-find-ugc-creators"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          playbook for hiring health & wellness creators
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "What types of health & wellness content can creators produce?",
    answer:
      "Creators on SideShift produce a wide range of health and wellness content including supplement reviews, workout tutorials, meal prep videos, wellness routine vlogs, before-and-after transformation content, and product unboxings. All content is native-feeling and optimized for the platforms your audience uses most.",
  },
  {
    id: 4,
    question: "How much does health & wellness influencer marketing cost?",
    answer: (
      <>
        Traditional fitness and wellness influencer costs can range from $500 to
        $50,000+ per post depending on audience size. SideShift&apos;s UGC model uses
        output-based pricing, giving you more content for your budget without paying
        for audience access you don&apos;t need. Read our guide on{" "}
        <Link
          href="/blog/what-is-a-good-roas"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          maximizing ROI with health & wellness UGC
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use health & wellness UGC in paid ads?",
    answer:
      "Yes. One of the biggest advantages of working with UGC creators through SideShift is full content usage rights. You can repurpose creator content across paid social ads, YouTube pre-roll, your website, email campaigns, and retail listings — all without additional licensing fees.",
  },
  {
    id: 6,
    question: "How do I ensure health & wellness UGC is FTC compliant?",
    answer:
      "SideShift provides built-in brief templates and compliance guidelines that require creators to properly disclose brand partnerships in accordance with FTC regulations. All campaigns on our platform include disclosure requirements as a standard part of the creator agreement, protecting both your brand and your creators.",
  },
];

export const healthWellnessArticles: Article[] = [
  {
    slug: "benefits-of-user-generated-content",
    title: "9 Benefits of User Generated Content (UGC) for Your Business",
    excerpt:
      "Learn how top health and wellness brands are using creator content to build trust, drive conversions, and scale authentically.",
    category: "Health & Wellness Marketing",
    readTime: "7 min read",
  },
  {
    slug: "what-is-a-good-roas",
    title: "What is a Good ROAS? 2026 Benchmarks by Industry",
    excerpt:
      "A data-driven breakdown of why UGC outperforms traditional influencer marketing for fitness, nutrition, and wellness brands.",
    category: "UGC Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-to-find-ugc-creators",
    title: "How to Find UGC Creators for Your Brand in 2026",
    excerpt:
      "Everything you need to know about finding, vetting, and managing health and wellness creators at scale.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const healthWellnessArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Health & Wellness Marketing Resources",
};
