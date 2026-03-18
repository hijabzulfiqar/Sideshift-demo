# Landing Page (`/lp`) — Summary of Changes & Open Items

## What's Been Done

### 1. Conversion-Focused Layout (No Nav, No Footer)
- Removed full Header/Footer navigation
- Centered SideShift logo at the top — clean, distraction-free
- Reference: [Objectionly LP](https://lp.objectionly.com/breakdown) style simplicity

### 2. Embedded Booking Widget (No Page Change)
- iClosed calendar widget is embedded directly in the page (`#book` section)
- Sits right below the Hero — visitors never leave the page to book
- Eliminates churn risk from redirecting to `/contact`
- New component: `components/home/BookingEmbed.tsx`

### 3. Single CTA Strategy
- **Hero**: One "Book a Demo" button → scrolls to `#book`
- **ComparisonTable**: "Book a Demo" button → scrolls to `#book`
- **Creators section**: "Book a Demo" button → scrolls to `#book`
- **Removed CTAs from**: Testimonials, FAQ (were redundant back-to-back)
- Secondary CTA in Hero removed (`hideSecondaryCta`)

### 4. Stats / Numbers — No Duplication
- Stats numbers (700K+ Creators, 5B+ Views, $100M+ Paid Out, 1,000+ Brands) appear **only** in the Bento section with the designed visual cards + animations
- Not duplicated in Hero or anywhere else on the LP
- Bento heading: "The Numbers That Power SideShift"

### 5. Current Page Flow
```
Logo (centered)
  ↓
Hero (headline + single CTA → #book)
  ↓
BookingEmbed (iClosed calendar inline)
  ↓
Brands (logo strip)
  ↓
Bento (stats with visual cards: 700K+, 1K+, 5B+, $100M+)
  ↓
Workflow
  ↓
Platform
  ↓
Creators (marketplace showcase + CTA → #book)
  ↓
Testimonials (bento grid, no CTA)
  ↓
ComparisonTable (CTA → #book)
  ↓
FAQ (no CTA)
```

---

## Open Items from Nikolai's Feedback

### A. Creator Section Design Fix
- Nikolai flagged the creator card design (screenshot shared 2026-03-17)
- Cards showing creator name, rating, country flag — needs visual polish
- **Status**: Not yet addressed

### B. Blog Section Visuals
- Blog cards ("High Volume UGC Resources") currently use placeholder images
- Nikolai asked if we can pull real visuals from the Sanity blog articles
- Sanity is not set up in this demo project — using placeholder images for now
- **Status**: Placeholder images in use; Sanity integration not planned for demo

### C. Pricing Link
- Nikolai mentioned the FAQ copy should include a link to the pricing page
- e.g. "How much does high-volume UGC cost?" → link to pricing
- **Status**: Not yet addressed

### D. Copy Adjustments
- Nikolai suggested adjusting copy "according to the top stuff in the hero section"
- Quick AI-assisted copy changes are possible
- **Status**: Hero using default brand copy; can be customized via `overrides`

---

## Files Modified (LP-specific changes)

| File | Change |
|------|--------|
| `app/lp/page.tsx` | LP page — no nav, embedded booking, single CTAs |
| `components/home/BookingEmbed.tsx` | New — inline iClosed calendar widget |
| `components/home/Hero.tsx` | Added `hideSecondaryCta` prop |
| `components/home/Testimonials.tsx` | Added `hideCta`, `ctaHref` props |
| `components/home/ComparisonTable.tsx` | Added `ctaHref` prop (mobile + desktop) |
| `components/home/FAQ.tsx` | Added `hideCta`, `ctaHref` props |
| `components/home/SideShiftCreators.tsx` | Added `hideCta` prop |
| `data/platform/videos.ts` | Fixed missing `ShowcaseVideo` type (pre-existing build error) |

> All component changes are backwards-compatible — existing pages using these components are unaffected (props default to `false`/`undefined`).
