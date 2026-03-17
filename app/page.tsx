import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Bento from "@/components/home/Bento";
import Workflow from "@/components/home/Workflow";
import Testimonials from "@/components/home/Testimonials";
import Platform from "@/components/home/Platform";
import Cta from "@/components/home/Cta";
import FAQ from "@/components/home/FAQ";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import ComparisonTable from "@/components/home/ComparisonTable";
import SideShiftCreators from "@/components/home/SideShiftCreators";

export default function Home() {
  const isCreator = false;
  return (
    <>
      <Header isCreator={isCreator} demoMode />
      <main>
        {/* 1. Hero (clarity + outcome) */}
        <Hero isCreator={isCreator} demoMode />
        {/* 2. Logo bar (right after hero) */}
        <Brands isCreator={isCreator} />
        {/* 3. Proof stat strip */}
        <Bento isCreator={isCreator} />
        {/* 4. How it works (4 pillars) */}
        <Workflow isCreator={isCreator} />
        {/* 5. What's inside (product preview) */}
        <Platform isCreator={isCreator} />
        {/* 5.5. Creator carousel */}
        <SideShiftCreators marketplaceMode autoplayVideos={false} />
        {/* 6. CTA block */}
        <Cta isCreator={isCreator} demoMode />
        {/* 7. Testimonials */}
        <Testimonials isCreator={isCreator} demoMode />
        {/* 8. Pricing Snapshot */}
        <ComparisonTable demoMode />
        {/* 9. FAQ */}
        <FAQ isCreator={isCreator} />
      </main>
      <Footer />
      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]"></div>
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]"></div>
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
