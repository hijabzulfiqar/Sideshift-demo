import React from "react";
import Link from "next/link";
import { standardComparisonRows } from "./shared";
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

export const instagramHeroOverrides: HeroOverrides = {
  label: "Instagram Influencers & UGC Creator Platform",
  headline: "Discover, Hire, & Manage Instagram Creators In One Place",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_ig_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_ig_hero",
  },
};

export const instagramWhyUgc: WhyUgcContent = {
  label: "Why Instagram UGC?",
  heading: "Creator marketing has changed.",
  paragraphs: [
    "The winning strategy is volume and velocity. Ten creators posting authentic content weekly will outperform one mega-influencer posting once-a-month, every time.",
    "Creators on Instagram don\u2019t need 500K followers to drive results. They need to understand the platform, create native-feeling content, and ship consistently.",
  ],
  cards: [
    {
      title: "Dedicated Instagram Accounts",
      description:
        "Creators who live on the platform and understand what performs. Native content that fits seamlessly into feeds, Stories, and Reels.",
    },
    {
      title: "High Volume UGC",
      description:
        "More content means more tests, more iterations, and faster signal on what converts. Scale to hundreds of videos per month without the operational drag.",
    },
    {
      title: "Authentic Content That Actually Converts",
      description:
        "Real product experiences outperform polished ads. UGC generates higher engagement and trust on Instagram feeds, Stories, and Reels.",
    },
  ],
};

export const instagramUgcComparison: UgcComparisonContent = {
  label: "Instagram UGC vs Traditional Influencer Marketing",
  heading: "Instagram UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "High Volume Instagram UGC",
  traditionalColumnHeader: "Traditional Instagram Influencer Marketing",
};

export const instagramComparisonRows = standardComparisonRows;

export const instagramPricing: PricingContent = {
  heading: "Instagram UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your Instagram creator needs.",
};

export const instagramFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about Instagram influencer marketing and UGC on SideShift.",
};

export const instagramFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is Instagram UGC?",
    answer: (
      <>
        Instagram UGC (user-generated content) is authentic content created by real
        users and creators rather than brands. It includes photos, videos, Reels, and
        Stories that showcase genuine product experiences, driving higher engagement
        and trust compared to traditional branded content. Learn more in our{" "}
        <Link href="/blog/your-guide-to-instagram-content-creators" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          complete Instagram UGC strategy guide
        </Link>.
      </>
    ),
  },
  {
    id: 2,
    question: "How much do Instagram influencers cost?",
    answer: (
      <>
        Instagram influencer costs vary widely based on follower count and engagement
        rates. Nano-influencers (1K-10K followers) typically charge $50-$250 per post,
        while micro-influencers (10K-100K) charge $250-$1,000. With SideShift&apos;s
        UGC model, you get scalable, output-based pricing that&apos;s significantly
        more cost-effective than traditional influencer marketing. See our{" "}
        <Link href="/blog/hire-the-right-content-creator-for-your-marketing-campaign" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          brand playbook for hiring Instagram creators
        </Link>.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find Instagram creators for my brand?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, location, specialty, and more. Browse portfolios, view top posts, and message creators directly. Most brands hire their first creators within the first week.",
  },
  {
    id: 4,
    question: "What types of Instagram content can creators make?",
    answer: (
      <>
        Creators on SideShift produce all types of Instagram content including Reels,
        Stories, Feed posts, and carousel content. From product reviews and unboxings
        to tutorials and lifestyle content, creators deliver native-feeling content
        optimized for the Instagram algorithm. Read our guide on{" "}
        <Link href="/blog/how-to-produce-high-converting-social-media-videos" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          scaling Instagram Reels with UGC creators
        </Link>.
      </>
    ),
  },
  {
    id: 5,
    question: "How is UGC different from influencer marketing?",
    answer:
      "Traditional influencer marketing pays for access to an influencer's audience. UGC pays creators for the content itself, which you own and can use across your own channels and paid ads. This means more content, more testing, and better ROI at scale.",
  },
  {
    id: 6,
    question: "Can I use Instagram UGC for paid ads?",
    answer:
      "Yes! One of the biggest advantages of UGC is full usage rights. You can repurpose creator content across Instagram ads, Facebook ads, your website, email campaigns, and more—without additional licensing fees.",
  },
];

export const instagramArticles: Article[] = [
  {
    slug: "your-guide-to-instagram-content-creators",
    title: "Your Guide to Instagram Content Creators",
    excerpt:
      "Learn how top brands are using Instagram UGC to drive 3x more engagement than traditional branded content.",
    category: "Instagram Marketing",
    readTime: "7 min read",
  },
  {
    slug: "how-to-produce-high-converting-social-media-videos",
    title: "How to Produce High-Converting Social Media Videos",
    excerpt:
      "A step-by-step guide to producing high-volume Reels content that performs across organic and paid.",
    category: "Instagram Reels",
    readTime: "5 min read",
  },
  {
    slug: "hire-the-right-content-creator-for-your-marketing-campaign",
    title: "How to Hire the Right Content Creator for Your Marketing Campaign",
    excerpt:
      "Everything you need to know about finding, vetting, and managing Instagram creators at scale.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const instagramArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Instagram Marketing Resources",
};
