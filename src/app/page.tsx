import HeroSection from "@/components/custom/HeroSection";
import FeaturedCalculators from "@/components/custom/FeaturedCalculators";
import LatestArticles from "@/components/custom/LatestArticles";
import QuickTipsFAQ from "@/components/custom/QuickTipsFAQ";
import DisclaimerBanner from "@/components/custom/DisclaimerBanner";
import TelemetryTracker from "@/components/custom/TelemetryTracker";

export default function Home() {
  return (
    <>
      <TelemetryTracker trackPageView={true} />
      
      <div className="container mx-auto px-6 py-6">
        <DisclaimerBanner type="page" />
      </div>
      
      <HeroSection />
      <FeaturedCalculators />
      <LatestArticles />
      <QuickTipsFAQ />
    </>
  );
}
