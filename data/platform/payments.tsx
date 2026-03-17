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

export const paymentsHeroOverrides: HeroOverrides = {
  label: "Creator Payouts",
  headline: "Pay Creators Automatically — W9s, 1099s & All",
  stats: [
    { value: "$100M+", label: "Paid to creators" },
    { value: "Automated", label: "Tax compliance" },
    { value: "3 Days", label: "Average payout time" },
  ],
  primaryCta: { text: "Start Paying", href: "https://app.sideshift.app/signup", event: "start_paying_payments_hero" },
  secondaryCta: { text: "Book a Demo", href: "/contact", event: "book_demo_payments_hero" },
};

export const paymentsWhyUgc: WhyUgcContent = {
  label: "Why Automated Payouts?",
  heading: "Pay hundreds of creators without the paperwork.",
  paragraphs: [
    "Managing payments to dozens or hundreds of creators is a nightmare of invoices, tax forms, and wire transfers. SideShift automates the entire payout process — from collecting W9s to issuing 1099s at year-end.",
    "Creators get paid on time, every time. You skip the accounting headaches and stay compliant without lifting a finger.",
  ],
  cards: [
    { title: "Automated Tax Compliance", description: "W9 collection, 1099 generation, and tax reporting handled automatically. Stay compliant with zero manual paperwork." },
    { title: "Batch Payments", description: "Pay all your creators across all campaigns with one click. No more individual invoices, wire transfers, or PayPal transactions." },
    { title: "Transparent for Creators", description: "Creators see their payment status in real-time — pending, processing, paid. No more 'where's my payment?' emails." },
  ],
};

export const paymentsUgcComparison: UgcComparisonContent = {
  label: "UGC vs Traditional",
  heading: "Why automated payouts beat manual creator payments",
  description: "Automated creator payments eliminate errors, save time, and keep creators happy.",
  ugcColumnHeader: "Automated Payouts",
  traditionalColumnHeader: "Manual Payments",
};

export const paymentsComparisonRows: ComparisonRow[] = [
  { category: "Speed", ugc: "Creators paid within 3 business days", traditional: "Net-30 or longer payment terms" },
  { category: "Tax Compliance", ugc: "Automatic W9 collection and 1099 filing", traditional: "Manual tracking and year-end scramble" },
  { category: "Scaling", ugc: "Pay 500 creators as easily as 5", traditional: "Each creator requires individual processing" },
  { category: "Errors", ugc: "System-validated, zero duplicate payments", traditional: "Manual entry prone to mistakes" },
  { category: "Creator Satisfaction", ugc: "Real-time payment status visibility", traditional: "Creators left guessing about payment timeline" },
];

export const paymentsPricing: PricingContent = {
  heading: "Payouts included in every plan",
  subheading: "No payment processing fees. Payouts are built into SideShift.",
};

export const paymentsFaqContent: FaqContent = {
  heading: "Creator Payouts FAQ",
  subheading: "Everything you need to know about paying creators through SideShift.",
};

export const paymentsFaqData: FaqItem[] = [
  { id: 1, question: "How do creators get paid?", answer: "Creators receive payments directly to their bank account via ACH transfer. International creators in supported countries can receive payments via local bank transfer." },
  { id: 2, question: "Do you handle W9s and 1099s?", answer: "Yes — SideShift collects W9 forms from US-based creators during onboarding and automatically generates and files 1099s at year-end." },
  { id: 3, question: "How fast are payouts processed?", answer: "Payments are typically processed within 3 business days after content is approved and the payout is triggered." },
  { id: 4, question: "Can I set custom payment terms?", answer: "Yes — configure payment triggers based on content approval, campaign completion, or custom milestones. You control when payouts are released." },
  { id: 5, question: "Are there any payment processing fees?", answer: "No. Creator payouts are included in your SideShift subscription with no additional transaction fees." },
];

export const paymentsArticlesContent: ArticlesContent = {
  label: "Related Articles",
  heading: "Learn more about creator payments",
};

export const paymentsArticles: Article[] = [
  { slug: "most-promising-ugc-niches-for-creators", title: "5 Most Promising UGC Niches for Creators in 2026", excerpt: "Where the biggest creator payouts are happening right now.", category: "Creator Economy", readTime: "5 min read" },
  { slug: "how-to-find-ugc-creators", title: "How to Find UGC Creators", excerpt: "A practical guide to finding and vetting the right creators for your brand.", category: "Creator Discovery", readTime: "6 min read" },
  { slug: "ecommerce-influencer-marketing-platform", title: "Best Ecommerce Influencer Marketing Platform", excerpt: "Top platforms for managing creator payments and campaigns.", category: "Platforms", readTime: "7 min read" },
];
