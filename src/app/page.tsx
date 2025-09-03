import { Metadata } from "next";
import HeroSection from "@/components/custom/HeroSection";
import FeaturedCalculators from "@/components/custom/FeaturedCalculators";
import LatestArticles from "@/components/custom/LatestArticles";
import QuickTipsFAQ from "@/components/custom/QuickTipsFAQ";
import TrendingTopics from "@/components/custom/TrendingTopics";
import PlatformNavigation from "@/components/custom/PlatformNavigation";
import SocialProof from "@/components/custom/SocialProof";
import DisclaimerBanner from "@/components/custom/DisclaimerBanner";
import TelemetryTracker from "@/components/custom/TelemetryTracker";

export const metadata: Metadata = {
  title: "FinTech Telugu - తెలుగులో ఆర్థిక విద్య మరియు కాలిక్యులేటర్లు",
  description: "తెలుగులో ఆర్థిక విద్య మరియు కాలిక్యులేటర్‌ల కోసం మీ వేదిక. ఉచిత SIP, EMI, FD కాలిక్యులేటర్లు, విద్యాపరమైన కంటెంట్, టిప్స్ మరియు పోలిక సాధనాలు.",
  keywords: "Telugu finance, ఆర్థిక విద్య, SIP calculator, EMI calculator, FD calculator, financial planning, investment tips, loans, insurance, tax planning, తెలుగులో ఫైనాన్స్",
  openGraph: {
    title: "FinTech Telugu - తెలుగులో ఆర్థిక విద్య మరియు కాలిక్యులేటర్లు",
    description: "తెలుగులో ఆర్థిక విద్య మరియు కాలిక్యులేటర్‌ల కోసం మీ వేదిక. ఉచిత కాలిక్యులేటర్లు, విద్యాపరమైన కంటెంట్ మరియు ప్రాక్టికల్ టిప్స్.",
    type: "website",
    locale: "te_IN",
    url: "https://fintechtelugu.com",
    siteName: "FinTech Telugu",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech Telugu - తెలుగులో ఆర్థిక విద్య మరియు కాలిక్యులేటర్లు",
    description: "తెలుగులో ఆర్థిక విద్య మరియు కాలిక్యులేటర్‌ల కోసం మీ వేదిక. ఉచిత కాలిక్యులేటర్లు మరియు విద్యాపరమైన కంటెంట్.",
  },
  alternates: {
    canonical: "https://fintechtelugu.com",
  },
};

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
      <TrendingTopics />
      <PlatformNavigation />
      <QuickTipsFAQ />
      <SocialProof />
    </>
  );
}
