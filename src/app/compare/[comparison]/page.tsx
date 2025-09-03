import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import Breadcrumbs from '@/components/custom/Breadcrumbs';
import SipLumpsumComparison from '@/components/custom/SipLumpsumComparison';
import HomeLoanVsRentComparison from '@/components/custom/HomeLoanVsRentComparison';
import MFVsFDComparison from '@/components/custom/MFVsFDComparison';
import TermVsEndowmentComparison from '@/components/custom/TermVsEndowmentComparison';
import GoldVsRealEstateComparison from '@/components/custom/GoldVsRealEstateComparison';
import NPSvsPPFvsEPFComparison from '@/components/custom/NPSvsPPFvsEPFComparison';
import DebitVsCreditComparison from '@/components/custom/DebitVsCreditComparison';
import ULIPVsMFComparison from '@/components/custom/ULIPVsMFComparison';
import TelemetryTracker from '@/components/custom/TelemetryTracker';

interface ComparisonPageProps {
  params: Promise<{
    comparison: string;
  }>;
}

// Valid comparison routes
const validComparisons = [
  'mf-vs-fd', 
  'sip-vs-lumpsum', 
  'term-vs-endowment',
  'savings-vs-investment',
  'home-loan-vs-rent',
  'gold-vs-realestate',
  'nps-vs-ppf-vs-epf',
  'debit-vs-credit',
  'ulip-vs-mf'
];

export async function generateStaticParams() {
  return validComparisons.map((comparison) => ({
    comparison,
  }));
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const { comparison } = await params;
  
  if (!validComparisons.includes(comparison)) {
    return {
      title: 'పోలిక దొరకలేదు - FinTech Telugu',
      description: 'మీరు వెతుకుతున్న పోలిక దొరకలేదు'
    };
  }

  // Specific metadata for SIP vs Lump Sum comparison
  if (comparison === 'sip-vs-lumpsum') {
    return {
      title: 'SIP vs లంప్‌సమ్ పోలిక - FinTech Telugu',
      description: 'SIP మరియు లంప్‌సమ్ పెట్టుబడి పద్ధతుల మధ్య వ్యత్యాసాలు, ప్రయోజనాలు మరియు పరిమితులను తెలుసుకోండి. మీకు ఏ పద్ధతి అనుకూలమో అర్థం చేసుకోండి.',
      keywords: 'SIP vs lump sum, SIP vs లంప్‌సమ్, systematic investment, mutual fund investment, పెట్టుబడి పద్ధతులు, investment comparison, ఆర్థిక పోలిక',
      openGraph: {
        title: 'SIP vs లంప్‌సమ్ పోలిక',
        description: 'SIP మరియు లంప్‌సమ్ పెట్టుబడి పద్ధతుల మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for Home Loan vs Rent comparison
  if (comparison === 'home-loan-vs-rent') {
    return {
      title: 'హోమ్ లోన్ vs అద్దె పోలిక - FinTech Telugu',
      description: 'ఇల్లు కొనుగోలు (హోమ్ లోన్) vs అద్దె మధ్య వ్యత్యాసాలు, ఆర్థిక ప్రభావం మరియు ఎప్పుడు ఏది ఎంచుకోవాలో తెలుసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'home loan vs rent, హోమ్ లోన్ vs అద్దె, house buying vs renting, ఇల్లు కొనుగోలు vs అద్దె, real estate decision, గృహ ఆర్థిక నిర్णయం, housing comparison, గృహ పోలిక',
      openGraph: {
        title: 'హోమ్ లోన్ vs అద్దె పోలిక',
        description: 'ఇల్లు కొనుగోలు మరియు అద్దె మధ్య ఆర్థిక వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for MF vs FD comparison
  if (comparison === 'mf-vs-fd') {
    return {
      title: 'మ్యూచువల్ ఫండ్ vs ఫిక్స్‌డ్ డిపాజిట్ పోలిక - FinTech Telugu',
      description: 'మ్యూచువల్ ఫండ్స్ మరియు ఫిక్స్‌డ్ డిపాజిట్ మధ్య వ్యత్యాసాలు, రిస్క్-రిటర్న్ ప్రొఫైల్, టాక్స్ ఇంప్లికేషన్లు మరియు ఎప్పుడు ఏది ఎంచుకోవాలో తెలుసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'mutual fund vs FD, మ్యూచువల్ ఫండ్ vs ఫిక్స్‌డ్ డిపాజిట్, investment comparison, పెట్టుబడి పోలిక, risk return, రిస్క్ రిటర్న్, investment options, పెట్టుబడి ఎంపికలు',
      openGraph: {
        title: 'మ్యూచువల్ ఫండ్ vs ఫిక్స్‌డ్ డిపాజిట్ పోలిక',
        description: 'మ్యూచువల్ ఫండ్స్ మరియు ఫిక్స్‌డ్ డిపాజిట్ మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for Term vs Endowment comparison
  if (comparison === 'term-vs-endowment') {
    return {
      title: 'టర్మ్ ఇన్షూరెన్స్ vs ఎండౌమెంట్ ప్లాన్ పోలిక - FinTech Telugu',
      description: 'టర్మ్ ఇన్షూరెన్స్ మరియు ఎండౌమెంట్ ప్లాన్స్ మధ్య వ్యత్యాసాలు, ప్రీమియం కాస్ట్, కవర్ మొత్తం, రిటర్న్స్ మరియు ఏది ఎప్పుడు ఎంచుకోవాలో తెలుసుకోండి. రక్షణ vs పొదుపు కాన్సెప్ట్ అర్థం చేసుకోండి.',
      keywords: 'term insurance vs endowment, టర్మ్ ఇన్షూరెన్స్ vs ఎండౌమెంట్, life insurance comparison, జీవిత బీమా పోలిక, insurance vs investment, బీమా vs పెట్టుబడి, protection vs savings',
      openGraph: {
        title: 'టర్మ్ ఇన్షూరెన్స్ vs ఎండౌమెంట్ ప్లాన్ పోలిక',
        description: 'టర్మ్ ఇన్షూరెన్స్ మరియు ఎండౌమెంట్ ప్లాన్స్ మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for Gold vs Real Estate comparison
  if (comparison === 'gold-vs-realestate') {
    return {
      title: 'బంగారం vs రియల్ ఎస్టేట్ పెట్టుబడి పోలిక - FinTech Telugu',
      description: 'బంగారం మరియు రియల్ ఎస్టేట్ పెట్టుబడుల మధ్య వ్యత్యాసాలు, రిటర్న్లు, లిక్విడిటీ, రిస్క్‌లు మరియు ఏది ఎప్పుడు ఎంచుకోవాలో తెలుసుకోండి. సంప్రదాయ పెట్టుబడి ఎంపికలను అర్థం చేసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'gold vs real estate, బంగారం vs రియల్ ఎస్టేట్, traditional investment, సంప్రదాయ పెట్టుబడి, investment comparison, పెట్టుబడి పోలిక, inflation hedge, ద్రవ్యోల్బణ రక్షణ',
      openGraph: {
        title: 'బంగారం vs రియల్ ఎస్టేట్ పెట్టుబడి పోలిక',
        description: 'బంగారం మరియు రియల్ ఎస్టేట్ పెట్టుబడుల మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for NPS vs PPF vs EPF comparison
  if (comparison === 'nps-vs-ppf-vs-epf') {
    return {
      title: 'NPS vs PPF vs EPF రిటైర్‌మెంట్ పోలిక - FinTech Telugu',
      description: 'NPS, PPF మరియు EPF రిటైర్‌మెంట్ ప్లానింగ్ ఎంపికల మధ్య వ్యత్యాసాలు, రిటర్న్లు, టాక్స్ బెనిఫిట్స్, విత్‌డ్రాల్ రూల్స్ మరియు ఏది ఎప్పుడు ఎంచుకోవాలో తెలుసుకోండి. రిటైర్‌మెంట్ సేవింగ్స్ తెలుసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'NPS vs PPF vs EPF, retirement planning, రిటైర్‌మెంట్ ప్లానింగ్, pension scheme, పెన్షన్ స్కీమ్, tax saving, టాక్స్ సేవింగ్, retirement comparison, రిటైర్‌మెంట్ పోలిక',
      openGraph: {
        title: 'NPS vs PPF vs EPF రిటైర్‌మెంట్ పోలిక',
        description: 'NPS, PPF మరియు EPF రిటైర్‌మెంట్ ప్లానింగ్ ఎంపికల మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for Debit vs Credit Card comparison
  if (comparison === 'debit-vs-credit') {
    return {
      title: 'డెబిట్ కార్డ్ vs క్రెడిట్ కార్డ్ పోలిక - FinTech Telugu',
      description: 'డెబిట్ కార్డ్ మరియు క్రెడిట్ కార్డ్ మధ్య వ్యత్యాసాలను తెలుసుకోండి. ఖర్చు విధానం, ఖర్చులు, ప్రయోజనాలు, క్రెడిట్ ప్రభావం మరియు సరైన కార్డ్ ఎంపికకు మార్గదర్శకత్వం. విద్యా ప్రయోజనాలకు మాత్రమే.',
      keywords: 'debit vs credit card, డెబిట్ vs క్రెడిట్ కార్డ్, payment cards, పేమెంట్ కార్డ్లు, card comparison, కార్డ్ పోలిక, credit score, క్రెడిట్ స్కోర్, responsible spending, బాధ్యత గల ఖర్చు',
      openGraph: {
        title: 'డెబిట్ కార్డ్ vs క్రెడిట్ కార్డ్ పోలిక',
        description: 'డెబిట్ కార్డ్ మరియు క్రెడిట్ కార్డ్ మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for ULIP vs MF comparison
  if (comparison === 'ulip-vs-mf') {
    return {
      title: 'ULIP vs మ్యూచువల్ ఫండ్ పోలిక - FinTech Telugu',
      description: 'ULIP మరియు మ్యూచువల్ ఫండ్స్ మధ్య వ్యత్యాసాలను తెలుసుకోండి. ఖర్చుల నిర్మాణం, రిటర్న్లు, బీమా కవరేజ్, వశ్యత మరియు సరైన పెట్టుబడి-బీమా వ్యూహం ఎంపిక. విద్యా ప్రయోజనాలకు మాత్రమే.',
      keywords: 'ULIP vs mutual fund, ULIP vs మ్యూచువల్ ఫండ్, investment insurance, పెట్టుబడి బీమా, insurance investment, product comparison, ఉత్పత్తి పోలిక, financial planning, ఆర్థిక ప్రణాళిక',
      openGraph: {
        title: 'ULIP vs మ్యూచువల్ ఫండ్ పోలిక',
        description: 'ULIP మరియు మ్యూచువల్ ఫండ్స్ మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  const comparisonName = comparison === 'mf-vs-fd' ? 'మ్యూచువల్ ఫండ్ vs ఫిక్స్‌డ్ డిపాజిట్' :
                        comparison === 'sip-vs-lumpsum' ? 'SIP vs లంప్‌సమ్' :
                        comparison === 'term-vs-endowment' ? 'టర్మ్ vs ఎండౌమెంట్ ప్లాన్' :
                        comparison === 'savings-vs-investment' ? 'పొదుపు vs పెట్టుబడి' :
                        comparison === 'home-loan-vs-rent' ? 'హోమ్ లోన్ vs అద్దె' :
                        comparison === 'gold-vs-realestate' ? 'బంగారం vs రియల్ ఎస్టేట్' :
                        comparison === 'debit-vs-credit' ? 'డెబిట్ కార్డ్ vs క్రెడిట్ కార్డ్' :
                        comparison === 'ulip-vs-mf' ? 'ULIP vs మ్యూచువల్ ఫండ్' :
                        'NPS vs PPF vs EPF';

  return {
    title: `${comparisonName} పోలిక - FinTech Telugu`,
    description: `${comparisonName} మధ్య వ్యత్యాసాలు మరియు ఏది ఎప్పుడు ఎంచుకోవాలో తెలుసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.`,
    keywords: `${comparisonName}, comparison, పోలిక, Telugu, financial comparison, ఆర్థిక పోలిక`
  };
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { comparison } = await params;

  // Validate route parameters
  if (!validComparisons.includes(comparison)) {
    notFound();
  }

  // Specific implementation for SIP vs Lump Sum comparison
  if (comparison === 'sip-vs-lumpsum') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <SipLumpsumComparison />
        </div>
      </>
    );
  }

  // Specific implementation for Home Loan vs Rent comparison
  if (comparison === 'home-loan-vs-rent') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <HomeLoanVsRentComparison />
        </div>
      </>
    );
  }

  // Specific implementation for MF vs FD comparison
  if (comparison === 'mf-vs-fd') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <MFVsFDComparison />
        </div>
      </>
    );
  }

  // Specific implementation for Term vs Endowment comparison
  if (comparison === 'term-vs-endowment') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <TermVsEndowmentComparison />
        </div>
      </>
    );
  }

  // Specific implementation for Gold vs Real Estate comparison
  if (comparison === 'gold-vs-realestate') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <GoldVsRealEstateComparison />
        </div>
      </>
    );
  }

  // Specific implementation for NPS vs PPF vs EPF comparison
  if (comparison === 'nps-vs-ppf-vs-epf') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <NPSvsPPFvsEPFComparison />
        </div>
      </>
    );
  }

  // Specific implementation for Debit vs Credit Card comparison
  if (comparison === 'debit-vs-credit') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <DebitVsCreditComparison />
        </div>
      </>
    );
  }

  // Specific implementation for ULIP vs MF comparison
  if (comparison === 'ulip-vs-mf') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <ULIPVsMFComparison />
        </div>
      </>
    );
  }

  const comparisonName = comparison === 'mf-vs-fd' ? 'మ్యూచువల్ ఫండ్ vs ఫిక్స్‌డ్ డిపాజిట్' :
                        comparison === 'sip-vs-lumpsum' ? 'SIP vs లంప్‌సమ్' :
                        comparison === 'term-vs-endowment' ? 'టర్మ్ vs ఎండౌమెంట్ ప్లాన్' :
                        comparison === 'savings-vs-investment' ? 'పొదుపు vs పెట్టుబడి' :
                        comparison === 'home-loan-vs-rent' ? 'హోమ్ లోన్ vs అద్దె' :
                        comparison === 'gold-vs-realestate' ? 'బంగారం vs రియల్ ఎస్టేట్' :
                        comparison === 'debit-vs-credit' ? 'డెబిట్ కార్డ్ vs క్రెడిట్ కార్డ్' :
                        comparison === 'ulip-vs-mf' ? 'ULIP vs మ్యూచువల్ ఫండ్' :
                        'NPS vs PPF vs EPF';

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumbs />
      <DisclaimerBanner type="page" />
      
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {comparisonName} పోలిక
        </h1>
        <p className="text-lg text-gray-600">
          వివరమైన పోలిక వ్యాసం త్వరలో అందుబాటులోకి వస్తుంది
        </p>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-purple-900 mb-3">
          పోలిక అధ్యయనం త్వరలో
        </h2>
        <p className="text-purple-800">
          {comparisonName} మధ్య వివరమైన పోలిక అధ్యయనం త్వరలో ప్రచురించబడుతుంది. 
          ఇది మీకు సరైన ఎంపిక చేయడంలో సహాయపడుతుంది.
        </p>
      </div>
    </div>
  );
}