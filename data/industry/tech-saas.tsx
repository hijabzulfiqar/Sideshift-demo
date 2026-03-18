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

export const techSaasHeroOverrides: HeroOverrides = {
  label: "Tech & SaaS UGC Creator Platform",
  headline: "Drive Product Adoption With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views" },
    { value: "10,000+", label: "Campaigns" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_tech_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_tech_hero",
  },
};

export const techSaasWhyUgc: WhyUgcContent = {
  label: "Why Tech & SaaS UGC?",
  heading: "Tech creator marketing has changed.",
  paragraphs: [
    "The days of relying on polished product launches and tech-press coverage are over. Today, the fastest-growing SaaS and tech brands win by flooding the market with authentic creator content that meets buyers where they already are.",
    "You don\u2019t need a celebrity endorsement or a viral moment. You need a steady stream of real users and creators showing exactly what your product does, why it matters, and how it fits into people\u2019s daily workflows.",
  ],
  cards: [
    {
      title: "Product Demos & Walkthroughs",
      description:
        "Creators who understand your product produce genuine screen-share demos, feature walkthroughs, and how-to content that educates prospects and accelerates purchase decisions.",
    },
    {
      title: "High Volume Content",
      description:
        "Scale to hundreds of pieces of content per month without the overhead. Test messaging angles, use cases, and audiences fast to find what converts before doubling down.",
    },
    {
      title: "Authentic Reviews From Real Users",
      description:
        "Real user testimonials and honest reviews build the trust that polished ads never can. Prospects see themselves in the content, reducing friction and shortening the sales cycle.",
    },
  ],
};

export const techSaasUgcComparison: UgcComparisonContent = {
  label: "Tech UGC vs Traditional Marketing",
  heading: "Tech & SaaS UGC in 2026",
  description:
    "High-volume tech UGC outperforms traditional influencer and agency campaigns on cost, speed, authenticity, and content rights\u2014giving SaaS brands full control at scale.",
  ugcColumnHeader: "High Volume Tech UGC",
  traditionalColumnHeader: "Traditional Tech Influencer Marketing",
};

export const techSaasComparisonRows = standardComparisonRows;

export const techSaasPricing: PricingContent = {
  heading: "Tech & SaaS UGC pricing that scales with your growth",
  subheading: "Choose a plan that fits your product marketing and creator needs.",
};

export const techSaasFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about tech and SaaS UGC creator marketing on SideShift.",
};

export const techSaasFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is tech UGC and why does it matter for SaaS brands?",
    answer: (
      <>
        Tech UGC (user-generated content) is authentic content created by real
        users and creators that showcases software products, tools, and digital
        services in genuine, everyday contexts. For SaaS brands, UGC builds
        credibility faster than branded content because prospects see real
        people solving real problems with your product. Learn more in our{" "}
        <Link
          href="/blog/benefits-of-user-generated-content"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete Tech &amp; SaaS UGC strategy guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How much does tech UGC content cost?",
    answer: (
      <>
        Tech UGC costs vary depending on content type, creator experience, and
        volume, but is significantly more cost-effective than traditional
        influencer or agency-produced content. With SideShift&apos;s
        output-based pricing model, you pay per deliverable rather than
        per-campaign retainers, making it easy to scale up without runaway
        costs. See our{" "}
        <Link
          href="/blog/ugc-cost"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          guide to budgeting for tech creator content
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find tech and SaaS creators for my product?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators and filter by niche, specialty, platform, and more. Browse creator portfolios, review past work, and message creators directly. Most tech brands connect with their first creators within the first week of signing up.",
  },
  {
    id: 4,
    question: "What types of content can tech UGC creators produce?",
    answer: (
      <>
        Tech UGC creators on SideShift produce a wide range of content
        including product demos, feature walkthroughs, screen recordings,
        tutorial videos, honest reviews, comparison content, and workflow
        showcases. Content can be optimized for TikTok, YouTube, LinkedIn,
        Instagram, or used directly in paid ads. Read our guide on{" "}
        <Link
          href="/blog/how-to-create-effective-ugc-ads"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          the best UGC content formats for SaaS brands
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "How is tech UGC different from influencer marketing?",
    answer:
      "Traditional influencer marketing buys access to an influencer\u2019s audience. Tech UGC pays creators for the content itself\u2014which you own outright and can deploy across your own channels, paid ads, and sales materials. This gives SaaS brands more content, more testing flexibility, and a far better return on spend compared to one-off influencer posts.",
  },
  {
    id: 6,
    question: "Can I use tech UGC content in paid ads?",
    answer:
      "Absolutely. Full usage rights are included with all SideShift UGC, so you can run creator content across paid social, search, display, and retargeting campaigns without additional licensing fees. Many SaaS brands find that authentic UGC significantly outperforms traditional ad creative in click-through rates and cost per acquisition.",
  },
];

export const techSaasArticles: Article[] = [
  {
    slug: "benefits-of-user-generated-content",
    title: "9 Benefits of User Generated Content (UGC) for Your Business",
    excerpt:
      "How the fastest-growing SaaS companies are using high-volume creator content to drive product adoption and reduce customer acquisition costs.",
    category: "SaaS Marketing",
    readTime: "8 min read",
  },
  {
    slug: "how-to-create-effective-ugc-ads",
    title: "How to Create Effective UGC Ads",
    excerpt:
      "From product demos to honest reviews, a breakdown of the content types that move the needle for tech companies at every stage of the funnel.",
    category: "Content Strategy",
    readTime: "6 min read",
  },
  {
    slug: "ugc-cost",
    title: "How Much Does UGC Cost? Pricing & Video Rates Explained",
    excerpt:
      "A practical guide to scoping, pricing, and scaling UGC creator programs for SaaS and tech brands without blowing your marketing budget.",
    category: "Creator Management",
    readTime: "5 min read",
  },
];

export const techSaasArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Tech & SaaS Marketing Resources",
};
