import React from "react";
import Link from "next/link";
import type {
  ComparisonRow,
  FaqItem,
  Article,
  WhyUgcContent,
  UgcComparisonContent,
  PricingContent,
  FaqContent,
  ArticlesContent,
  HeroOverrides,
} from "@/types/platform";

export const marketplaceHeroOverrides: HeroOverrides = {
  label: "UGC Creator Marketplace",
  headline: "Find & Hire UGC Creators Across Every Platform",
  stats: [
    { value: "700,000+", label: "Vetted creators" },
    { value: "9", label: "Industries covered" },
    { value: "10,000+", label: "Campaigns launched" },
  ],
  primaryCta: {
    text: "Find Creators",
    href: "https://app.sideshift.app/signup",
    event: "find_creators_marketplace_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_marketplace_hero",
  },
};

export const marketplaceWhyUgc: WhyUgcContent = {
  label: "Why UGC?",
  heading: "The fastest-growing brands run on creator content.",
  paragraphs: [
    "Volume beats polish. Ten creators posting authentic content weekly will outperform one mega-influencer posting monthly, every time. The brands winning on social aren\u2019t spending more \u2014 they\u2019re testing more.",
    "UGC gives you the creative velocity to find what resonates, then scale it \u2014 without blowing your budget on a single polished campaign that might not land.",
  ],
  cards: [
    {
      title: "Content at Scale",
      description:
        "Go from a handful of brand assets to hundreds of creator videos per month. More creative variety means more data on what drives clicks, views, and conversions.",
    },
    {
      title: "Full Usage Rights",
      description:
        "Every piece of content is yours. Run it across paid ads, organic channels, email, and beyond \u2014 without additional licensing fees or complicated rights negotiations.",
    },
    {
      title: "Authentic Content That Converts",
      description:
        "Real product experiences outperform polished ads. UGC blends naturally into feeds, builds trust faster, and performs stronger across every platform.",
    },
  ],
};

export const marketplaceUgcComparison: UgcComparisonContent = {
  label: "UGC vs Traditional Influencer Marketing",
  heading: "Why high-volume UGC wins",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "High Volume UGC",
  traditionalColumnHeader: "Traditional Influencer Marketing",
};

export const marketplaceComparisonRows: ComparisonRow[] = [
  {
    category: "Content Ownership",
    ugc: "Full usage rights — use across ads, organic, and email",
    traditional: "Often restricted to one channel or time window",
  },
  {
    category: "Cost",
    ugc: "Scalable, output-based pricing",
    traditional: "High per-post fees regardless of performance",
  },
  {
    category: "Authenticity",
    ugc: "Native, organic style that blends into feeds",
    traditional: "Overly polished, sponsored feel",
  },
  {
    category: "Volume",
    ugc: "250+ videos/month possible",
    traditional: "1\u20132 posts per influencer per month",
  },
  {
    category: "Performance",
    ugc: "Real-time analytics and performance bonuses",
    traditional: "Limited reporting, no feedback loop",
  },
  {
    category: "Rights Usage",
    ugc: "Use across organic and paid advertising campaigns",
    traditional: "Costly usage rights for paid advertising",
  },
];

export const marketplacePricing: PricingContent = {
  heading: "Simple pricing for any creator volume",
  subheading: "Scale your UGC output without scaling your costs.",
};

export const marketplaceFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about the SideShift creator marketplace and UGC.",
};

export const marketplaceFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is the SideShift Creator Marketplace?",
    answer: (
      <>
        The SideShift Creator Marketplace is where brands discover and hire
        vetted UGC creators across every niche — from health and relationships to tech
        and pets. Creators apply to campaigns or get invited directly by brands.
        Learn how it works in our{" "}
        <Link
          href="/blog/ugc-creator-platforms"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete creator marketplace guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How do I find the right creator for my brand?",
    answer: (
      <>
        Browse by platform (Instagram, TikTok, YouTube, and more), industry
        niche, location, and content style. View creator portfolios, top
        performing videos, and ratings from past brand collaborations. Most
        brands find and hire their first creator within a week. Read our{" "}
        <Link
          href="/blog/how-to-find-ugc-creators"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          guide to hiring UGC creators
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "What types of content can creators make?",
    answer:
      "Creators on SideShift produce short-form video (Reels, TikToks, Shorts), product reviews, unboxings, tutorials, lifestyle content, and more. Content is delivered ready-to-post across your brand's channels and paid ad accounts.",
  },
  {
    id: 4,
    question: "How is UGC different from influencer marketing?",
    answer:
      "Traditional influencer marketing pays for access to someone's audience. UGC pays creators for the content itself — which you own and can use across any channel. More volume, more testing, better ROI at scale.",
  },
  {
    id: 5,
    question: "Can I use UGC content for paid ads?",
    answer:
      "Yes. Every piece of content comes with full usage rights. Run it as Instagram ads, TikTok Spark Ads, YouTube pre-rolls, or across your own channels without additional licensing fees.",
  },
  {
    id: 6,
    question: "How does pricing work for brands?",
    answer: (
      <>
        SideShift uses flat monthly subscription pricing — no per-post fees or
        hidden costs. Plans start at $199/month for up to 5 creators. See the
        full breakdown on our{" "}
        <Link
          href="/pricing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          pricing page
        </Link>
        .
      </>
    ),
  },
];

export const marketplaceArticles: Article[] = [
  {
    slug: "ugc-creator-platforms",
    title: "The 6 Best UGC Creator Platforms of 2026",
    excerpt:
      "Everything brands need to know about finding, vetting, and managing UGC creators at scale in 2026.",
    category: "Creator Marketing",
    readTime: "8 min read",
  },
  {
    slug: "how-to-find-ugc-creators",
    title: "How to Find UGC Creators for Your Brand in 2026",
    excerpt:
      "A practical guide to evaluating creator portfolios, writing briefs, and scaling output without the chaos.",
    category: "Hiring Creators",
    readTime: "6 min read",
  },
  {
    slug: "ugc-vs-influencer-marketing",
    title: "UGC vs Influencer Marketing: What's Better for ROI in 2026?",
    excerpt:
      "We break down the key differences in cost, content rights, volume, and performance between UGC and traditional influencer campaigns.",
    category: "Strategy",
    readTime: "5 min read",
  },
];

export const marketplaceArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Creator Marketing Resources",
};
