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

export const fashionHeroOverrides: HeroOverrides = {
  label: "Fashion & Clothing UGC Creator Platform",
  headline: "Scale Your Fashion Brand With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_fashion_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_fashion_hero",
  },
};

export const fashionWhyUgc: WhyUgcContent = {
  label: "Why Fashion UGC?",
  heading: "Fashion creator marketing has changed.",
  paragraphs: [
    "The winning strategy for fashion brands is volume and variety. Ten creators styling your pieces across different aesthetics and body types will outperform one glossy campaign shoot, every time.",
    "Fashion creators don\u2019t need massive followings to drive conversions. They need an eye for style, the ability to create native-feeling outfit content, and the consistency to ship real looks week after week.",
  ],
  cards: [
    {
      title: "Real Style & Outfit Content",
      description:
        "Creators who genuinely wear and style your pieces. Authentic try-on hauls, outfit-of-the-day posts, and honest fit reviews that shoppers trust far more than polished campaign imagery.",
    },
    {
      title: "High Volume Lookbooks",
      description:
        "More styling content means more ways to show your range, hit different aesthetics, and test what converts. Scale to hundreds of outfit videos per month without the production overhead.",
    },
    {
      title: "Authentic Reviews That Drive Purchases",
      description:
        "Real customers showing real fits outperform studio ads. UGC generates higher engagement, reduces return rates, and builds the social proof that turns browsers into buyers.",
    },
  ],
};

export const fashionUgcComparison: UgcComparisonContent = {
  label: "Fashion UGC vs Traditional Fashion Marketing",
  heading: "Fashion UGC in 2026",
  description:
    "High-volume fashion UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving fashion brands full creative control at scale.",
  ugcColumnHeader: "High Volume Fashion UGC",
  traditionalColumnHeader: "Traditional Fashion Influencer Marketing",
};

export const fashionComparisonRows = standardComparisonRows;

export const fashionPricing: PricingContent = {
  heading: "Fashion UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your fashion creator needs.",
};

export const fashionFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about fashion UGC and creator marketing for clothing brands on SideShift.",
};

export const fashionFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is fashion UGC?",
    answer: (
      <>
        Fashion UGC (user-generated content) is authentic content created by real
        creators and customers showcasing your clothing, styling your pieces, and
        sharing honest fit reviews — rather than polished brand-produced photography.
        It includes try-on hauls, outfit videos, unboxings, and styling tutorials that
        build trust with shoppers. Learn more in our{" "}
        <Link href="/blog/benefits-of-user-generated-content" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          complete fashion UGC strategy guide
        </Link>.
      </>
    ),
  },
  {
    id: 2,
    question: "How much do fashion creators cost?",
    answer: (
      <>
        Fashion creator costs depend on follower count, content type, and usage rights.
        Nano-influencers (1K-10K followers) typically charge $50-$300 per post, while
        micro-influencers (10K-100K) charge $300-$1,500. With SideShift&apos;s UGC
        model, you pay for the content itself on a scalable, output-based pricing
        structure — far more cost-effective than traditional influencer deals. See our{" "}
        <Link href="/blog/hire-the-right-content-creator-for-your-marketing-campaign" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          playbook for hiring fashion creators
        </Link>.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find fashion creators for my clothing brand?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, style aesthetic, location, body type representation, and more. Browse portfolios, view top-performing content, and message creators directly. Most fashion brands hire their first creators within the first week.",
  },
  {
    id: 4,
    question: "What types of fashion content can creators make?",
    answer: (
      <>
        Fashion creators on SideShift produce a wide range of content including try-on
        hauls, outfit-of-the-day videos, styling tutorials, unboxings, size and fit
        reviews, and seasonal lookbook content. From everyday basics to occasionwear,
        creators deliver native-feeling content tailored for TikTok, Instagram Reels,
        and paid ads. Read our guide on{" "}
        <Link href="/blog/the-most-effective-types-of-ugc-content-for-marketing" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          the best types of fashion UGC content for clothing brands
        </Link>.
      </>
    ),
  },
  {
    id: 5,
    question: "How is UGC different from influencer marketing for fashion brands?",
    answer:
      "Traditional influencer marketing pays for access to an influencer's audience. UGC pays creators for the content itself, which your brand owns and can use across your own channels and paid ads. For fashion brands this means more styling perspectives, more outfit combinations, more ad creative to test — and better ROI at scale.",
  },
  {
    id: 6,
    question: "Can I use fashion UGC for paid ads?",
    answer:
      "Yes — and it's one of the most powerful use cases. Full usage rights mean you can run creator try-on hauls and styling videos as paid ads across Meta, TikTok, Pinterest, and more. Fashion UGC ads consistently outperform polished studio creative because they match the organic content shoppers already scroll past and engage with daily.",
  },
];

export const fashionArticles: Article[] = [
  {
    slug: "benefits-of-user-generated-content",
    title: "9 Benefits of User Generated Content (UGC) for Your Business",
    excerpt:
      "Learn how top clothing brands are using fashion UGC to drive 3x more engagement and cut ad creative costs by 60%.",
    category: "Fashion Marketing",
    readTime: "7 min read",
  },
  {
    slug: "the-most-effective-types-of-ugc-content-for-marketing",
    title: "The Most Effective Types of UGC Content for Marketing in 2026",
    excerpt:
      "From try-on hauls to styling tutorials — a breakdown of which fashion content formats drive the most conversions.",
    category: "Content Strategy",
    readTime: "5 min read",
  },
  {
    slug: "hire-the-right-content-creator-for-your-marketing-campaign",
    title: "How to Hire the Right Content Creator for Your Marketing Campaign",
    excerpt:
      "Everything you need to know about finding, vetting, and managing fashion UGC creators at scale for your clothing brand.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const fashionArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Fashion Marketing Resources",
};
