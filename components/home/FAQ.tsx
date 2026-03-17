"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";
const creatorFaqData = [
  {
    id: 1,
    question: "How do I sign up as a creator?",
    answer:
      "Create a free SideShift account, complete your profile (think of it as a common application), and attach your social handles (Personal and/or UGC accounts) plus links to top-performing videos to help your profile stand out. You can also take our free UGC training course (found under Badges) to earn a verified badge that signals to brands you’re serious about UGC.",
  },
  {
    id: 2,
    question: "Who can join?",
    answer:
      "We currently support creators based in the US, Canada, UK, and Australia. We’re working to open the marketplace to more countries soon.",
  },
  {
    id: 4,
    question: "What is UGC and how is it different from influencer marketing?",
    answer:
      "UGC (user-generated content) pays creators for the content itself, not for access to their audience. Instead of posting to your personal followers, you create videos that brands can use on their own channels or on new campaign accounts. This opens the door for anyone to earn—even for folks just getting started!",
  },
  {
    id: 5,
    question: "How does SideShift work?",
    answer:
      "Brands post campaign opportunities. You can apply directly, and brands can also invite you if your profile stands out. Some campaign briefs include detailed scripts; others leave creative direction to you. Communicate with each brand to set expectations.",
  },
  {
    id: 6,
    question: "Can I work with multiple brands at once?",
    answer:
      "Yes. You can run campaigns across different industries simultaneously. Just check individual briefs for any restrictions on direct competitors.",
  },
  {
    id: 7,
    question: "How quickly can I land my first campaign?",
    answer:
      "Many creators secure their first opportunity within days of signing up, especially if their profiles are complete and showcase past work. The more jobs you apply to and the more time you spend improving your profile, the higher your chances are. Completing SideShift’s free UGC course is a bonus signal to brands that you are serious about UGC.",
  },
  {
    id: 8,
    question: "How do payments work?",
    answer:
      "You get paid through SideShift after each campaign, with funds released to your creator wallet within a few days. Earnings range from $200–$2,000/month plus performance bonuses ($1–$4 per 1,000 views). SideShift charges a $2 fee on bank withdrawals and handles payments, contracts, and insurance.",
  },
  {
    id: 11,
    question: "Are there platform fees for creators?",
    answer:
      "SideShift charges brands, not creators. SideShift charges a $2 fee on bank withdrawals. You keep the full amount laid out in the contract.",
  },
  {
    id: 12,
    question: "Do I need to create new social accounts for campaigns?",
    answer:
      "Often yes. Many brands prefer creators to build fresh accounts in the campaign’s niche, which levels the playing field so anyone can succeed—even without a large personal following. Some brands will pay for content to run as paid ads, and others will pay creators to post to existing pages with a pre-built audience. Read each opportunity carefully and communicate with brands before signing contracts to understand expectations.",
  },
  {
    id: 17,
    question: "Is it safe to work with brands through SideShift?",
    answer:
      "Yes. SideShift provides payment insurance, manages all tax forms and independent-contractor agreements, and offers 24/7 creator support if disputes arise.",
  },
];

const brandFaqData = [
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
    question: "Who is SideShift built for?",
    answer:
      "SideShift helps consumer software and e-commerce companies of all sizes use creator-led UGC to replace or complement paid ads and influencer marketing. For those with limited budgets, it’s best to start in-house to learn formats and algorithms before scaling with creators. Pre-launch products may see limited ROI unless the goal is to test market response and gather audience feedback.",
  },
  {
    id: 5,
    question: "What creators are on SideShift?",
    answer:
      "700K+ Gen Z creators, 90%+ US-based, spanning mobile apps, consumer products, finance/crypto, e-commerce, TikTok Shop, lifestyle, and more. We also have vetted creators in Tier-1 markets such as Canada, Australia, and the UK.",
  },
  {
    id: 6,
    question: "UGC vs. Influencer Marketing—what's the difference?",
    answer:
      "Influencers charge a premium for their audience. With UGC you can post hundreds of videos and test dozens of content formats for the cost of a few influencer posts. TikTok and Instagram algorithms even boost fresh accounts, giving organic content a lift.",
  },
  {
    id: 7,
    question: "What should I expect? & how is success measured?",
    answer: `In the first 30 days, build your creator team, test different formats, and identify content-market fit (CMF). During months 2-3, double down on what works and scale your UGC spend to improve ROAS. Focus on ROAS over CPM as your main performance metric. Consistent, high-volume UGC also strengthens TikTok/Instagram SEO and lowers overall marketing costs.`,
  },
  {
    id: 9,
    question: "Self-serve vs. Managed Service—what's the difference?",
    answer:
      "Self-serve: run campaigns yourself with budgets starting around $1K/month, ideal for teams that want to learn and build a repeatable engine. Managed service: for larger teams and budgets that need speed and scale; our team runs everything end-to-end with the top 1% of creators on the marketplace.",
  },
  {
    id: 10,
    question: "How fast can I hire creators?",
    answer:
      "90% of businesses hire within their first week, and many hire even sooner—some on their first day on the platform.",
  },
  {
    id: 11,
    question: "How are payments and contracts managed?",
    answer:
      "All payments must be processed through SideShift—off-platform payments are not allowed. Funds load into a SideShift wallet and are released to creators after campaign completion. SideShift also handles all 1099s, tax documents, and independent-contractor agreements, so you stay compliant without extra paperwork.",
  },
  {
    id: 12,
    question: "How can I track creator performance?",
    answer:
      "Use the real-time analytics dashboard to monitor views, engagement, and CPMs at the video, creator, and campaign level. Mobile-app campaigns can also track conversions/downloads correlated to viral videos.",
  },
  {
    id: 13,
    question: "How do I know creators won't ghost my campaign?",
    answer:
      "Every creator on SideShift has a verified track record and response rate visible on their profile. Our contract system includes deadlines and milestone tracking — if a creator goes silent, you're notified immediately and can replace them with one click. Teams using SideShift report a 90%+ completion rate on contracted campaigns.",
  },
  {
    id: 14,
    question: "How does SideShift compare to hiring an agency?",
    answer:
      "Most agencies charge $5,000–$10,000/month for creator management. SideShift gives you direct access to 700,000+ creators starting at $99/month — that's about $0.40 per video at scale. You keep full control of briefs, approvals, and payments. No retainer. No markups on creator fees. Cancel anytime.",
  },
  {
    id: 15,
    question: "Does SideShift work for my industry?",
    answer:
      "SideShift works for any brand that needs UGC content. Our top-performing verticals include mobile apps (Photogeniq hit 69M views), consumer products, SaaS, and e-commerce. Filter creators by niche, audience demographics, and content style to find the right fit for your category.",
  },
  {
    id: 16,
    question: "My team is small — can we actually manage this?",
    answer:
      "That's exactly who SideShift is built for. Most of our customers are teams of 1-3 people managing 10-50+ creators through the platform. Everything happens in one place — briefs, contracts, payments, content review. No spreadsheets, no email threads, no DM chaos.",
  },
  {
    id: 17,
    question: "What happens during the free trial?",
    answer:
      "You get 7 days to post a job, review creator applicants, and send your first interviews — all for $0. Most teams post their first job within 10 minutes and start receiving applications within 24 hours. After the trial, plans start at $199/month with no long-term commitment.",
  },
];

function FAQ({
  isCreator,
  customFaqData,
  customHeading,
  customSubheading,
}: {
  isCreator: boolean;
  customFaqData?: { id: number; question: string; answer: React.ReactNode }[];
  customHeading?: string;
  customSubheading?: string;
}) {
  const [expandedItem, setExpandedItem] = useState<number | null>(1);
  const faqData = customFaqData ?? (isCreator ? creatorFaqData : brandFaqData);
  const variant = getHeroVariant();
  const toggleExpanded = (itemId: number) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemId: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpanded(itemId);
    }
  };

  // Animation variants for the answer
  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      filter: "blur(0px)",
    },
    exit: { opacity: 0, height: 0, y: -10, filter: "blur(3px)" },
  };

  // Animation variants for the arrow
  const arrowVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <section id="faqs" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-10.5">
            {/* Heading */}
            <div className="flex flex-col items-center gap-3 text-center md:gap-4">
              <h2 className="max-w-[13ch] text-center max-[375px]:text-[28px] max-[320px]:text-[24px]">
                {customHeading ?? "Have Questions? We Have Answers"}
              </h2>
              {customSubheading && (
                <p className="max-w-[600px] text-[14px] leading-[1.5] text-[rgba(32,32,32,0.6)] md:text-base">
                  {customSubheading}
                </p>
              )}
            </div>

            {/* FAQ Items */}
            <div
              className="relative mx-auto flex w-full max-w-[800px] flex-col items-start"
              role="region"
              aria-label="Frequently Asked Questions"
            >
              {faqData.map((item) => (
                <article
                  key={item.id}
                  className={
                    "relative flex w-full flex-[0_0_auto] cursor-pointer flex-col items-start gap-[0px] self-stretch border-b border-gray-200 py-[14px] transition-all last:border-b-0 hover:bg-gray-50/50 min-[375px]:py-[18px] md:px-5" +
                    (expandedItem === item.id ? " bg-gray-50/30" : "")
                  }
                  onClick={() => toggleExpanded(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  tabIndex={0}
                >
                  <header className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                    <h3 className="relative mt-[-1.00px] flex-1 pr-2 text-[16px] leading-[1.2] font-bold tracking-[-0.20px] text-gray-900 min-[375px]:text-[18px] sm:text-xl">
                      {item.question}
                    </h3>
                    <motion.div
                      variants={arrowVariants}
                      animate={
                        expandedItem === item.id ? "expanded" : "collapsed"
                      }
                      transition={{ duration: 0.5, ease: [0.7, 0, 0, 1] }}
                    >
                      {/* <ChevronDown /> */}
                      <Image
                        src="/icons/chevron-down.svg"
                        alt="Chevron Down"
                        width={24}
                        height={24}
                        className="h-5 w-5 min-[375px]:h-6 min-[375px]:w-6"
                      />
                    </motion.div>
                  </header>
                  <AnimatePresence>
                    {expandedItem === item.id && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        className="relative w-full self-stretch overflow-hidden"
                        role="region"
                        aria-live="polite"
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5, ease: [0.7, 0, 0, 1] }}
                      >
                        <p className="pt-2 text-[13px] leading-[1.4] tracking-[-0.01em] text-gray-600 min-[375px]:pt-2.5 min-[375px]:text-[14px] min-[375px]:leading-[1.3125] sm:pt-3.25 sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              ))}
            </div>

            {/* Still have questions? */}
            {!isCreator && (
              <div className="flex flex-col items-center gap-2 pt-4 min-[375px]:gap-3 min-[375px]:pt-6">
                <p className="text-center text-[14px] text-gray-600 min-[375px]:text-base">
                  Still have questions?
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="sm" onClick={() => handleCTAClick('Book Strategy Call FAQ', true, variant)}>
                    <span>Book a Demo</span>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;