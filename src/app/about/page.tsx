import { Metadata } from 'next';
import AboutUsHero from '@/components/custom/AboutUsHero';
import MissionVision from '@/components/custom/MissionVision';
import TeluguLanguageFocus from '@/components/custom/TeluguLanguageFocus';
import EducationalPurpose from '@/components/custom/EducationalPurpose';
import SEBICompliance from '@/components/custom/SEBICompliance';
import PlatformValues from '@/components/custom/PlatformValues';
import TeamExpertise from '@/components/custom/TeamExpertise';
import PlatformDevelopment from '@/components/custom/PlatformDevelopment';
import CommunityImpact from '@/components/custom/CommunityImpact';
import TrustSignals from '@/components/custom/TrustSignals';
import ContactEngagement from '@/components/custom/ContactEngagement';
import MandatoryCompliance from '@/components/custom/MandatoryCompliance';
import PlatformExplorationCTA from '@/components/custom/PlatformExplorationCTA';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import TelemetryTracker from '@/components/custom/TelemetryTracker';
import Breadcrumbs from '@/components/custom/Breadcrumbs';

export const metadata: Metadata = {
  title: 'మా గురించి - FinTech Telugu | తెలుగులో ఆర్థిక విద్య వేదిక',
  description: 'FinTech Telugu మిషన్, విజన్ మరియు తెలుగులో ఆర్థిక విద్య అందించే మా నిబద్ధత గురించి తెలుసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలతో SEBI కంప్లైంట్ ప్లాట్‌ఫాం.',
  keywords: 'about us, మా గురించి, FinTech Telugu, Telugu financial education, ఆర్థిక విద్య, mission vision, SEBI compliance, educational platform, తెలుగు ఫైనాన్స్',
  openGraph: {
    title: 'మా గురించి - FinTech Telugu | తెలుగులో ఆర్థిక విద్య వేదిక',
    description: 'FinTech Telugu మిషన్, విజన్ మరియు తెలుగులో ఆర్థిక విద్య అందించే మా నిబద్ధత గురించి తెలుసుకోండి.',
    type: 'website',
    locale: 'te_IN',
    url: 'https://fintechtelugu.com/about',
    siteName: 'FinTech Telugu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'మా గురించి - FinTech Telugu | తెలుగులో ఆర్థిక విద్య వేదిక',
    description: 'FinTech Telugu మిషన్, విజన్ మరియు తెలుగులో ఆర్థిక విద్య అందించే మా నిబద్ధత గురించి తెలుసుకోండి.',
  },
  alternates: {
    canonical: 'https://fintechtelugu.com/about',
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'హోమ్', href: '/' },
    { label: 'మా గురించి', href: '/about', current: true }
  ];

  return (
    <>
      <TelemetryTracker trackPageView={true} />
      
      <div className="container mx-auto px-6 py-6">
        <Breadcrumbs items={breadcrumbItems} />
        <DisclaimerBanner type="page" />
      </div>
      
      <AboutUsHero />
      <MissionVision />
      <TeluguLanguageFocus />
      <EducationalPurpose />
      <SEBICompliance />
      <PlatformValues />
      <TeamExpertise />
      <PlatformDevelopment />
      <CommunityImpact />
      <TrustSignals />
      <ContactEngagement />
      <MandatoryCompliance />
      <PlatformExplorationCTA />
    </>
  );
}