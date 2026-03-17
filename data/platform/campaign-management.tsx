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

export const campaignHeroOverrides: HeroOverrides = {
  label: "Creator Management",
  headline: "Manage Every Creator Campaign From One Dashboard",
  stats: [
    { value: "10x", label: "Faster campaign setup" },
    { value: "1,000+", label: "Brands using it" },
    { value: "100%", label: "Automated workflows" },
  ],
  primaryCta: { text: "Start Managing", href: "https://app.sideshift.app/signup", event: "start_managing_campaign_hero" },
  secondaryCta: { text: "Book a Demo", href: "/contact", event: "book_demo_campaign_hero" },
};

export const campaignWhyUgc: WhyUgcContent = {
  label: "Why Creator Management?",
  heading: "Stop juggling spreadsheets, DMs, and email threads.",
  paragraphs: [
    "Running creator campaigns across multiple platforms means tracking briefs, deadlines, approvals, and revisions in a dozen different places. SideShift brings it all into one workflow — from briefing to final delivery.",
    "Automate the repetitive work so you can focus on strategy and creative direction instead of chasing creators for status updates.",
  ],
  cards: [
    { title: "Brief to Delivery", description: "Create campaign briefs, invite creators, manage submissions, request revisions, and approve final content — all from one place." },
    { title: "Automated Workflows", description: "Set deadlines, send automatic reminders, and track every campaign milestone without manual follow-ups." },
    { title: "Team Collaboration", description: "Add team members, assign roles, share feedback on content drafts, and keep everyone aligned on campaign progress." },
  ],
};

export const campaignUgcComparison: UgcComparisonContent = {
  label: "UGC vs Traditional",
  heading: "Why managed UGC campaigns outperform ad hoc content",
  description: "Structured creator management delivers consistent, on-brand content at scale.",
  ugcColumnHeader: "Managed UGC",
  traditionalColumnHeader: "Ad Hoc Content",
};

export const campaignComparisonRows: ComparisonRow[] = [
  { category: "Workflow", ugc: "Automated brief-to-delivery pipeline", traditional: "Manual coordination via email and DMs" },
  { category: "Consistency", ugc: "Brand guidelines enforced at every step", traditional: "Quality varies with each freelancer" },
  { category: "Speed", ugc: "Launch campaigns in hours, not weeks", traditional: "Weeks of back-and-forth coordination" },
  { category: "Tracking", ugc: "Real-time status for every deliverable", traditional: "Spreadsheets and guesswork" },
  { category: "Scale", ugc: "Run 50+ creator campaigns simultaneously", traditional: "Limited by manual bandwidth" },
];

export const campaignPricing: PricingContent = {
  heading: "Plans that grow with your campaign volume",
  subheading: "Start free. Scale when you need more creators and campaigns.",
};

export const campaignFaqContent: FaqContent = {
  heading: "Creator Management FAQ",
  subheading: "Everything you need to know about managing campaigns on SideShift.",
};

export const campaignFaqData: FaqItem[] = [
  { id: 1, question: "How do I create a campaign brief?", answer: "Use our built-in brief builder to set deliverables, deadlines, brand guidelines, talking points, and creative references — then invite creators directly." },
  { id: 2, question: "Can I manage revisions?", answer: "Yes — request unlimited revisions on submitted content, leave timestamped feedback, and approve final versions all within the platform." },
  { id: 3, question: "How many campaigns can I run at once?", answer: "There's no limit. Run as many simultaneous campaigns as you need, each with its own creators, briefs, and timelines." },
  { id: 4, question: "Can I add team members?", answer: "Yes — invite your team with role-based access. Assign reviewers, manage approvals, and keep everyone in the loop." },
  { id: 5, question: "Does SideShift handle contracts?", answer: "Yes. Every campaign generates automatic creator agreements covering content rights, deliverables, payment terms, and usage rights." },
];

export const campaignArticlesContent: ArticlesContent = {
  label: "Related Articles",
  heading: "Learn more about creator management",
};

export const campaignArticles: Article[] = [
  { slug: "brand-ambassador-programs", title: "Brand Ambassador Programs: Complete Guide for 2026", excerpt: "How to build and manage long-term creator partnerships at scale.", category: "Campaign Strategy", readTime: "7 min read" },
  { slug: "how-to-find-ugc-creators", title: "How to Find UGC Creators", excerpt: "A practical guide to finding and vetting the right creators for your brand.", category: "Creator Discovery", readTime: "6 min read" },
  { slug: "brand-consistency", title: "Brand Consistency: How to Build a Recognizable Brand", excerpt: "Keep your brand on-point across every creator campaign.", category: "Brand Strategy", readTime: "5 min read" },
];
