import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import Breadcrumbs from '@/components/custom/Breadcrumbs';
import SIPCalculator from '@/components/custom/SIPCalculator';
import EMICalculator from '@/components/custom/EMICalculator';
import PPFCalculator from '@/components/custom/PPFCalculator';
import FDCalculator from '@/components/custom/FDCalculator';
import LumpSumCalculator from '@/components/custom/LumpSumCalculator';
import LifeInsuranceNeedsCalculator from '@/components/custom/LifeInsuranceNeedsCalculator';
import TermPlanCalculator from '@/components/custom/TermPlanCalculator';
import IncomeTaxCalculator from '@/components/custom/IncomeTaxCalculator';
import HRACalculator from '@/components/custom/HRACalculator';
import Section80CCalculator from '@/components/custom/Section80CCalculator';
import TelemetryTracker from '@/components/custom/TelemetryTracker';

interface CalculatorPageProps {
  params: Promise<{
    group: string;
    tool: string;
  }>;
}

import { isValidCalculatorRoute, getCalculator, CALCULATORS } from '@/lib/calculator-routes';

// Generate static params from centralized config
const getStaticCalculators = () => {
  const params: { group: string; tool: string }[] = [];
  
  CALCULATORS.forEach(calc => {
    params.push({ 
      group: calc.category, 
      tool: calc.slug 
    });
  });
  
  return params;
};

export async function generateStaticParams() {
  return getStaticCalculators();
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { group, tool } = await params;
  
  if (!isValidCalculatorRoute(group, tool)) {
    return {
      title: 'కాలిక్యులేటర్ దొరకలేదు - FinTech Telugu',
      description: 'మీరు వెతుకుతున్న కాలిక్యులేటర్ దొరకలేదు'
    };
  }

  const calculator = getCalculator(group, tool);
  if (!calculator) {
    return {
      title: 'కాలిక్యులేటర్ దొరకలేదు - FinTech Telugu',
      description: 'మీరు వెతుకుతున్న కాలిక్యులేటర్ దొరకలేదు'
    };
  }

  return {
    title: `${calculator.teluguName} - FinTech Telugu`,
    description: `${calculator.description} విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.`,
    keywords: `${calculator.name}, calculator, కాలిక్యులేటర్, Telugu, financial planning, ఆర్థిక ప్రణాళిక`
  };
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { group, tool } = await params;

  // Validate route parameters using centralized config
  if (!isValidCalculatorRoute(group, tool)) {
    notFound();
  }

  const calculator = getCalculator(group, tool);
  if (!calculator) {
    notFound();
  }

  // SIP Calculator Implementation
  if (group === 'investment' && tool === 'sip') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <SIPCalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/learn/investments/mutual-funds" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">మ్యూచువల్ ఫండ్స్</div>
                      <div className="text-sm text-blue-700">మ్యూచువల్ ఫండ్స్ గురించి తెలుసుకోండి</div>
                    </Link>
                    <Link 
                      href="/compare/sip-vs-lumpsum" 
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-green-900">SIP vs లంప్‌సమ్</div>
                      <div className="text-sm text-green-700">ఏ పద్ధతి మంచిదో తెలుసుకోండి</div>
                    </Link>
                    <Link 
                      href="/calculators/investment/lumpsum" 
                      className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-purple-900">లంప్‌సమ్ కాలిక్యులేటర్</div>
                      <div className="text-sm text-purple-700">ఒకేసారి పెట్టుబడి లెక్కింపు</div>
                    </Link>
                  </div>
                </div>
                
                {/* Quick Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    SIP టిప్స్
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• నిర్దిష్ట తేదీన క్రమం తప్పకుండా పెట్టుబడి చేయండి</li>
                    <li>• మార్కెట్ హెచ్చు తగ్గుల గురించి చింతించకండి</li>
                    <li>• దీర్ఘకాలిక లక్ష్యాలను మదనంలో ఉంచుకోండి</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // EMI Calculator Implementation
  if (group === 'loan' && tool === 'emi') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <EMICalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/learn/banking-credit/loans-overview" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">లోన్ గైడ్</div>
                      <div className="text-sm text-blue-700">లోన్లు గురించి తెలుసుకోండి</div>
                    </Link>
                    <Link 
                      href="/learn/investments/real-estate-reits" 
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-green-900">రియల్ ఎస్టేట్ & REITs</div>
                      <div className="text-sm text-green-700">రియల్ ఎస్టేట్ పెట్టుబడులు</div>
                    </Link>
                    <Link 
                      href="/learn/money-basics/interest-basics" 
                      className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-purple-900">వడ్డీ రేట్ గైడ్</div>
                      <div className="text-sm text-purple-700">వడ్డీ రేట్లు అర్థం చేసుకోండి</div>
                    </Link>
                    <Link 
                      href="/tips/reduce-emi" 
                      className="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-orange-900">EMI తగ్గించడం</div>
                      <div className="text-sm text-orange-700">EMI బర్డెన్ తగ్గించే మార్గాలు</div>
                    </Link>
                  </div>
                </div>
                
                {/* Quick Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    💡 EMI టిప్స్
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• వివిధ బ్యాంకుల వడ్డీ రేట్లను పోల్చండి</li>
                    <li>• లోన్ వ్యవధి పెంచితే EMI తక్కువ అవుతుంది</li>
                    <li>• అదనపు చెల్లింపుల ద్వారా వడ్డీని ఆదా చేయండి</li>
                    <li>• మీ ఆదాయంలో 30-40% కంటే ఎక్కువ EMI ఉండకూడదు</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // PPF Calculator Implementation
  if (group === 'investment' && tool === 'ppf') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <PPFCalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/calculators/investment/sip" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">SIP కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700">సిస్టమాటిక్ పెట్టుబడి లెక్కింపు</div>
                    </Link>
                    <Link 
                      href="/calculators/planning/retirement" 
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-green-900">రిటైర్‌మెంట్ ప్లానర్</div>
                      <div className="text-sm text-green-700">పదవీ విరమణ ప్రణాళిక</div>
                    </Link>
                    <Link 
                      href="/learn/retirement/ppf" 
                      className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-purple-900">PPF గైడ్</div>
                      <div className="text-sm text-purple-700">PPF గురించి వివరంగా తెలుసుకోండి</div>
                    </Link>
                    <Link 
                      href="/learn/taxation/sections-80c-80d-80g" 
                      className="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-orange-900">సెక్షన్ 80C</div>
                      <div className="text-sm text-orange-700">పన్ను మినహాయింపులు</div>
                    </Link>
                  </div>
                </div>
                
                {/* Quick Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    PPF టిప్స్
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• గరిష్ఠ పన్ను ప్రయోజనానికి ₹1.5 లక్షలు కంట్రిబ్యూట్ చేయండి</li>
                    <li>• ప్రతి ఆర్థిక సంవత్సరం ఏప్రిల్‌లో కంట్రిబ్యూట్ చేయండి</li>
                    <li>• 15 సంవత్సరాల తర్వాత 5-5 సంవత్సరాల పొడిగింపు చేయవచ్చు</li>
                    <li>• 7వ సంవత్సరం తర్వాత పార్షియల్ విత్‌డ్రాల్ అవకాశం ఉంది</li>
                  </ul>
                </div>
                
                {/* PPF vs Other Investments */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    PPF ప్రత్యేకతలు
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• EEE స్టేటస్ - కంట్రిబ్యూషన్, వడ్డీ, మెచ్యూరిటీ అన్నీ పన్ను రహిత</li>
                    <li>• ప్రభుత్వ గ్యారంటీతో 100% సేఫ్ పెట్టుబడి</li>
                    <li>• కనీస రిస్క్‌తో స్థిరమైన రాబడులు</li>
                    <li>• రిటైర్‌మెంట్ కోసం ఆదర్శ దీర్ఘకాలిక పెట్టుబడి</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Lump Sum Calculator Implementation
  if (group === 'investment' && tool === 'lumpsum') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <LumpSumCalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/calculators/investment/sip" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">SIP కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700">క్రమం తప్పకుండా పెట్టుబడి లెక్కింపు</div>
                    </Link>
                    <Link 
                      href="/learn/investments/mutual-funds" 
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-green-900">మ్యూచువల్ ఫండ్స్</div>
                      <div className="text-sm text-green-700">మ్యూచువల్ ఫండ్స్ గురించి తెలుసుకోండి</div>
                    </Link>
                    <Link 
                      href="/compare/sip-vs-lumpsum" 
                      className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-purple-900">SIP vs లంప్‌సమ్</div>
                      <div className="text-sm text-purple-700">ఏ పద్ధతి మంచిదో తెలుసుకోండి</div>
                    </Link>
                    <Link 
                      href="/compare/mf-vs-fd" 
                      className="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-orange-900">MF vs FD</div>
                      <div className="text-sm text-orange-700">మ్యూచువల్ ఫండ్ vs ఫిక్స్‌డ్ డిపాజిట్</div>
                    </Link>
                  </div>
                </div>
                
                {/* Quick Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    లంప్‌సమ్ టిప్స్
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• మార్కెట్ దిగువ స్థాయిలో ఉన్నప్పుడు పెట్టుబడి చేయండి</li>
                    <li>• మార్కెట్ టైమింగ్ రిస్క్ గురించి అవగాహన ఉంచుకోండి</li>
                    <li>• డైవర్సిఫైడ్ ఫండ్లలో పెట్టుబడి చేయండి</li>
                    <li>• దీర్ఘకాలిక దృక్పధంతో పెట్టుబడి చేయండి</li>
                  </ul>
                </div>
                
                {/* Lump Sum vs SIP */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    లంప్‌సమ్ ప్రత్యేకతలు
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• పెద్ద మొత్తం ఒకేసారి పెట్టుబడి</li>
                    <li>• మార్కెట్ టైమింగ్ ముఖ్యం</li>
                    <li>• బుల్ మార్కెట్‌లలో అధిక రిటర్న్లు</li>
                    <li>• అనుభవజ్ఞులైన ఇన్వెస్టర్లకు అనువైనది</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // FD Calculator Implementation
  if (group === 'investment' && tool === 'fd') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <FDCalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/calculators/investment/ppf" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">PPF కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700">పబ్లిక్ ప్రావిడెంట్ ఫండ్ లెక్కింపు</div>
                    </Link>
                    <Link 
                      href="/calculators/investment/sip" 
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-green-900">SIP కాలిక్యులేటర్</div>
                      <div className="text-sm text-green-700">సిస్టమాటిక్ పెట్టుబడి లెక్కింపు</div>
                    </Link>
                    <Link 
                      href="/learn/banking-credit/fd-vs-rd" 
                      className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-purple-900">FD vs RD గైడ్</div>
                      <div className="text-sm text-purple-700">ఏది మంచిదో తెలుసుకోండి</div>
                    </Link>
                    <Link 
                      href="/learn/money-basics/interest-basics" 
                      className="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-orange-900">వడ్డీ రేట్ గైడ్</div>
                      <div className="text-sm text-orange-700">వడ్డీ రేట్లు అర్థం చేసుకోండి</div>
                    </Link>
                  </div>
                </div>
                
                {/* Quick Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    FD టిప్స్
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• వేర్వేరు బ్యాంకుల వడ్డీ రేట్లను పోల్చండి</li>
                    <li>• TDS ఎక్కువ కాకుండా ఉండేలా ప్లాన్ చేయండి</li>
                    <li>• కుటుంబ సభ్యుల పేర్లలో FDs చేయండి</li>
                    <li>• లిక్విడిటీ అవసరాలను దృష్టిలో ఉంచుకోండి</li>
                  </ul>
                </div>
                
                {/* FD vs Other Investments */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    FD ప్రత్యేకతలు
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• 100% గారంటీడ్ రిటర్న్లు</li>
                    <li>• DICGC ఇన్షురెన్స్ కవరేజ్</li>
                    <li>• ప్రిమెచ్యూర్ విత్‌డ్రాల్ సౌకర్యం</li>
                    <li>• రిస్క్ లేకుండా స్థిరమైన ఆదాయం</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Section 80C Calculator
  if (group === 'tax' && tool === '80c') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>గమనిక:</strong> ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పన్ను సలహా కాదు. 
                పెట్టుబడి నిర్ణయాలకు ఆర్థిక సలహాదారుని సంప్రదించండి.
              </p>
            </div>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <Section80CCalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tax Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టాక్స్ టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/calculators/tax/income-tax" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">ఆదాయపు పన్ను కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700">పూర్తి పన్ను లెక్కింపు 80C సహా</div>
                    </Link>
                    <Link 
                      href="/calculators/tax/hra" 
                      className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-purple-900">HRA కాలిక్యులేటర్</div>
                      <div className="text-sm text-purple-700">హౌస్ రెంట్ అలవన్స్ లెక్కింపు</div>
                    </Link>
                    <Link 
                      href="/learn/taxation/section-80c-deductions" 
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-green-900">Section 80C గైడ్</div>
                      <div className="text-sm text-green-700">80C డిడక్షన్ల వివరాలు</div>
                    </Link>
                    <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                      <div className="font-medium text-indigo-900">80D మరియు 80G కాలిక్యులేటర్లు</div>
                      <div className="text-sm text-indigo-700 mb-2">ఇతర టాక్స్ సేవింగ్ సెక్షన్లు</div>
                      <p className="text-xs text-indigo-600">త్వరలో అందుబాటులో</p>
                    </div>
                  </div>
                </div>
                
                {/* Related Investment Calculators */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    80C పెట్టుబడి కాలిక్యులేటర్లు
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/calculators/investment/ppf" 
                      className="block p-3 bg-white hover:bg-blue-50 rounded-lg border border-blue-200 transition-colors"
                    >
                      <div className="font-medium text-blue-900">PPF కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700">పబ్లిక్ ప్రావిడెంట్ ఫండ్ రిటర్న్లు</div>
                    </Link>
                    <Link 
                      href="/calculators/investment/sip" 
                      className="block p-3 bg-white hover:bg-blue-50 rounded-lg border border-blue-200 transition-colors"
                    >
                      <div className="font-medium text-blue-900">ELSS SIP కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700">ఈక్విటీ లింక్డ్ సేవింగ్స్ స్కీమ్</div>
                    </Link>
                    <div className="p-3 bg-white rounded-lg border border-blue-200">
                      <div className="font-medium text-blue-900">NSC కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700 mb-2">నేషనల్ సేవింగ్స్ సర్టిఫికేట్</div>
                      <p className="text-xs text-blue-600">త్వరలో అందుబాటులో</p>
                    </div>
                  </div>
                </div>
                
                {/* Section 80C Tips */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    💡 Section 80C చిట్కాలు
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• గరిష్టం ₹1.5L వరకు డిడక్షన్ పొందవచ్చు</li>
                    <li>• PPF అత్యుత్తమ దీర్ఘకాలిక ఆప్షన్</li>
                    <li>• ELSS కేవలం 3 సంవత్సరాల లాక్-ఇన్</li>
                    <li>• ఇన్శూరెన్స్ ప్రీమియంలో 10% లిమిట్ ఉంది</li>
                    <li>• హోమ్ లోన్ ప్రిన్సిపల్ కూడా కౌంట్ అవుతుంది</li>
                    <li>• సంవత్సరం చివర్లో రష్ చేయకండి</li>
                  </ul>
                </div>

                {/* Investment Mix Strategy */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                    💼 పెట్టుబడి మిశ్రమ వ్యూహం
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-indigo-800 mb-1">కొత్త పెట్టుబడిదారుల కోసం</h4>
                      <p className="text-indigo-700">PPF (60%) + ELSS (30%) + Insurance (10%)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-indigo-800 mb-1">అనుభవిన పెట్టుబడిదారులకు</h4>
                      <p className="text-indigo-700">ELSS (40%) + PPF (40%) + Others (20%)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-indigo-800 mb-1">రిస్క్ తీసుకోలేని వారికి</h4>
                      <p className="text-indigo-700">PPF (50%) + NSC (30%) + Insurance (20%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Life Insurance Needs Calculator
  if (group === 'insurance' && tool === 'life-insurance-needs') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Calculator */}
            <div className="lg:col-span-3">
              <DisclaimerBanner type="calculator" />
              <LifeInsuranceNeedsCalculator />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-6">
                
                {/* Related Insurance Tools */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    సంబంధిత కాలిక్యులేటర్లు
                  </h3>
                  <div className="space-y-3">
                    <Link href="/calculators/insurance/term-plan" className="block">
                      <div className="p-3 bg-purple-50 rounded border border-purple-200 hover:border-purple-300 transition-colors">
                        <h4 className="font-medium text-purple-900 mb-1">టర్మ్ ప్లాన్ కాలిక్యులేటర్</h4>
                        <p className="text-sm text-purple-700 mb-2">టర్మ్ ప్లాన్ ప్రీమియంలను పోల్చండి</p>
                        <p className="text-xs text-purple-600">ఇప్పుడే వాడండి →</p>
                      </div>
                    </Link>
                    <div className="p-3 bg-green-50 rounded border border-green-200">
                      <h4 className="font-medium text-green-900 mb-1">హెల్త్ ఇన్షూరెన్స్</h4>
                      <p className="text-sm text-green-700 mb-2">హెల్త్ కవర్ అవసరాలు లెక్కించండి</p>
                      <p className="text-xs text-green-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <Link href="/calculators/planning/retirement" className="block">
                      <div className="p-3 bg-blue-50 rounded border border-blue-200 hover:border-blue-300 transition-colors">
                        <h4 className="font-medium text-blue-900 mb-1">రిటైర్మెంట్ ప్లానర్</h4>
                        <p className="text-sm text-blue-700 mb-2">పూర్తి ఆర్థిక ప్లానింగ్</p>
                        <p className="text-xs text-blue-600">త్వరలో అందుబాటులో</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Life Insurance Education Links */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    జీవిత బీమా గురించి తెలుసుకోండి
                  </h3>
                  <div className="space-y-3">
                    <Link href="/learn/insurance/life-insurance" className="block">
                      <div className="p-3 bg-indigo-50 rounded border border-indigo-200 hover:border-indigo-300 transition-colors">
                        <h4 className="font-medium text-indigo-900 mb-1">జీవిత బీమా బేసిక్స్</h4>
                        <p className="text-sm text-indigo-700">జీవిత బీమా గురించి సంపూర్ణ గైడ్</p>
                      </div>
                    </Link>
                    <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                      <h4 className="font-medium text-yellow-900 mb-1">టర్మ్ vs ఎండౌమెంట్</h4>
                      <p className="text-sm text-yellow-700 mb-2">రెండు రకాల పాలసీల పోలిక</p>
                      <p className="text-xs text-yellow-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border border-red-200">
                      <h4 className="font-medium text-red-900 mb-1">ఇన్షూరెన్స్ vs ఇన్వెస్ట్‌మెంట్</h4>
                      <p className="text-sm text-red-700 mb-2">రక్షణ మరియు పెట్టుబడుల తేడా</p>
                      <p className="text-xs text-red-600">త్వరలో అందుబాటులో</p>
                    </div>
                  </div>
                </div>

                {/* Insurance Tips */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    బీమా చిట్కాలు
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• కనీసం వార్షిక ఆదాయంలో 10 రెట్లు కవర్ తీసుకోండి</li>
                    <li>• వయస్సు తక్కువగా ఉన్నప్పుడు తీసుకుంటే ప్రీమియం తక్కువ</li>
                    <li>• టర్మ్ ఇన్షూరెన్స్ అధిక కవర్‌కు మంచిది</li>
                    <li>• రైడర్లతో అదనపు రక్షణ పొందవచ్చు</li>
                    <li>• సంవత్సరానికి ఒకసారి కవర్ రీవ్యూ చేయండి</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Term Plan Calculator
  if (group === 'insurance' && tool === 'term-plan') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Calculator */}
            <div className="lg:col-span-3">
              <DisclaimerBanner type="calculator" />
              <TermPlanCalculator />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-6">
                
                {/* Related Insurance Tools */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    సంబంధిత కాలిక్యులేటర్లు
                  </h3>
                  <div className="space-y-3">
                    <Link href="/calculators/insurance/life-insurance-needs" className="block">
                      <div className="p-3 bg-blue-50 rounded border border-blue-200 hover:border-blue-300 transition-colors">
                        <h4 className="font-medium text-blue-900 mb-1">లైఫ్ ఇన్షూరెన్స్ నీడ్స్</h4>
                        <p className="text-sm text-blue-700 mb-2">ఎంత కవర్ అవసరమో లెక్కించండి</p>
                        <p className="text-xs text-blue-600">ఇప్పుడే వాడండి →</p>
                      </div>
                    </Link>
                    <div className="p-3 bg-green-50 rounded border border-green-200">
                      <h4 className="font-medium text-green-900 mb-1">హెల్త్ ఇన్షూరెన్స్</h4>
                      <p className="text-sm text-green-700 mb-2">హెల్త్ కవర్ అవసరాలు లెక్కించండి</p>
                      <p className="text-xs text-green-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <Link href="/calculators/planning/retirement" className="block">
                      <div className="p-3 bg-purple-50 rounded border border-purple-200 hover:border-purple-300 transition-colors">
                        <h4 className="font-medium text-purple-900 mb-1">రిటైర్మెంట్ ప్లానర్</h4>
                        <p className="text-sm text-purple-700 mb-2">పూర్తి ఆర్థిక ప్లానింగ్</p>
                        <p className="text-xs text-purple-600">త్వరలో అందుబాటులో</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Term Insurance Education Links */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    టర్మ్ ఇన్షూరెన్స్ గురించి తెలుసుకోండి
                  </h3>
                  <div className="space-y-3">
                    <Link href="/learn/insurance/life-insurance" className="block">
                      <div className="p-3 bg-indigo-50 rounded border border-indigo-200 hover:border-indigo-300 transition-colors">
                        <h4 className="font-medium text-indigo-900 mb-1">టర్మ్ ఇన్షూరెన్స్ బేసిక్స్</h4>
                        <p className="text-sm text-indigo-700">టర్మ్ ఇన్షూరెన్స్ గురించి సంపూర్ణ గైడ్</p>
                      </div>
                    </Link>
                    <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                      <h4 className="font-medium text-yellow-900 mb-1">టర్మ్ vs ఎండౌమెంట్</h4>
                      <p className="text-sm text-yellow-700 mb-2">రెండు రకాల పాలసీల పోలిక</p>
                      <p className="text-xs text-yellow-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded border border-orange-200">
                      <h4 className="font-medium text-orange-900 mb-1">ప్రీమియం పేమెంట్ టిప్స్</h4>
                      <p className="text-sm text-orange-700 mb-2">ప్రీమియం ఆదా చేయడం ఎలా</p>
                      <p className="text-xs text-orange-600">త్వరలో అందుబాటులో</p>
                    </div>
                  </div>
                </div>

                {/* Term Insurance Tips */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    టర్మ్ ప్లాన్ చిట్కాలు
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• వయస్సు తక్కువగా ఉన్నప్పుడు కొనుగోలు చేయండి</li>
                    <li>• స్మోకింగ్ మానేస్తే ప్రీమియం తగ్గుతుంది</li>
                    <li>• ఆన్‌లైన్ కొనుగోలు చేస్తే ప్రీమియం తక్కువ</li>
                    <li>• మెడికల్ టెస్ట్‌లు తప్పకుండా చేయించుకోండి</li>
                    <li>• క్లెయిమ్ సెట్లమెంట్ రేషియో చూసి ఎంచుకోండి</li>
                    <li>• రైడర్లను జోడించి అదనపు రక్షణ పొందండి</li>
                  </ul>
                </div>

                {/* Comparison Tools */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    పోలిక టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/70 rounded border">
                      <h4 className="font-medium text-gray-900 mb-1">టర్మ್ vs ఫుల్ లైఫ్</h4>
                      <p className="text-sm text-gray-700 mb-2">రెండు రకాల పాలసీల వేర్వేరు ఫీచర్లు</p>
                      <p className="text-xs text-gray-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <div className="p-3 bg-white/70 rounded border">
                      <h4 className="font-medium text-gray-900 mb-1">బెస్ట్ టర్మ్ ప్లాన్స్</h4>
                      <p className="text-sm text-gray-700 mb-2">టాప్ టర్మ్ ప్లాన్స్ పోలిక</p>
                      <p className="text-xs text-gray-600">త్వరలో అందుబాటులో</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Income Tax Calculator Implementation
  if (group === 'tax' && tool === 'income-tax') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>గమనిక:</strong> ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పన్ను సలహా కాదు. 
                పన్ను నిర్ణయాలకు ముందు టాక్స్ అడ్వైజర్‌ని సంప్రదించండి.
              </p>
            </div>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <IncomeTaxCalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tax Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టాక్స్ టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/learn/taxation/income-tax-basics" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">ఆదాయపు పన్ను గైడ్</div>
                      <div className="text-sm text-blue-700">పన్ను స్లాబ్‌లు మరియు మినహాయింపులు</div>
                    </Link>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-medium text-green-900">HRA కాలిక్యులేటర్</div>
                      <div className="text-sm text-green-700 mb-2">హౌస్ రెంట్ అలవన్స్ లెక్కింపు</div>
                      <p className="text-xs text-green-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="font-medium text-purple-900">సెక్షన్ 80C కాలిక్యులేటర్</div>
                      <div className="text-sm text-purple-700 mb-2">పన్ను ఆదా పెట్టుబడుల లెక్కింపు</div>
                      <p className="text-xs text-purple-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <Link 
                      href="/calculators/investment/ppf" 
                      className="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-orange-900">PPF కాలిక్యులేటర్</div>
                      <div className="text-sm text-orange-700">80C మినహాయింపుతో PPF లెక్కింపు</div>
                    </Link>
                  </div>
                </div>
                
                {/* Tax Planning Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    💡 పన్ను ప్లానింగ్ టిప్స్
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• ఆర్థిక సంవత్సరం ప్రారంభంలోనే పన్ను ప్లానింగ్ చేయండి</li>
                    <li>• సెక్షన్ 80C కింద గరిష్టంగా ₹1.5L పెట్టుబడి చేయండి</li>
                    <li>• హెల్త్ ఇన్షూరెన్స్ తప్పనిసరిగా తీసుకోండి</li>
                    <li>• పాత vs కొత్త విధానం ఏది మంచిదో పోల్చండి</li>
                    <li>• ITR సమర్పణకు ముందే లెక్కలు చూసుకోండి</li>
                  </ul>
                </div>

                {/* Tax Regime Comparison */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    విధానాల పోలిక
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">పాత విధానం</h4>
                      <p className="text-blue-700">
                        • అధిక రేట్లు కానీ మినహాయింపులు<br/>
                        • 80C, 80D మొదలైన డిడక్షన్లు<br/>
                        • HRA, LTA మినహాయింపులు
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">కొత్త విధానం</h4>
                      <p className="text-blue-700">
                        • తక్కువ రేట్లు కానీ మినహాయింపులు లేవు<br/>
                        • ₹3L వరకు పన్ను లేదు<br/>
                        • సాధారణ డిడక్షన్ మాత్రమే
                      </p>
                    </div>
                  </div>
                </div>

                {/* Educational Content */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                    పన్ను విద్య
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/learn/taxation/income-tax-basics" 
                      className="block p-2 bg-white rounded border border-indigo-200 hover:border-indigo-300 transition-colors"
                    >
                      <div className="font-medium text-indigo-900 text-sm">పన్ను బేసిక్స్</div>
                      <div className="text-xs text-indigo-700">ఆదాయపు పన్ను గురించి తెలుసుకోండి</div>
                    </Link>
                    <div className="p-2 bg-white rounded border border-indigo-200">
                      <div className="font-medium text-indigo-900 text-sm">టాక్స్ స్లాబ్‌లు 2024</div>
                      <div className="text-xs text-indigo-700 mb-1">కరెంట్ టాక్స్ రేట్లు మరియు స్లాబ్‌లు</div>
                      <p className="text-xs text-indigo-600">త్వరలో అందుబాటులో</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // HRA Calculator Implementation
  if (group === 'tax' && tool === 'hra') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          
          {/* Title and Disclaimer */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {calculator.teluguName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {calculator.description}
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>గమనిక:</strong> ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పన్ను సలహా కాదు. 
                అద్దె రశీదులు మరియు IT విభాగ నియమాలను తప్పనిసరిగా పాటించండి.
              </p>
            </div>
          </div>
          
          <DisclaimerBanner type="calculator" />
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">
            {/* Main Calculator Content */}
            <div className="xl:col-span-3">
              <HRACalculator />
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Related Tax Tools */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    సంబంధిత టాక్స్ టూల్స్
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/calculators/tax/income-tax" 
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-blue-900">ఆదాయపు పన్ను కాలిక్యులేటర్</div>
                      <div className="text-sm text-blue-700">పూర్తి పన్ను లెక్కింపు HRA సహా</div>
                    </Link>
                    <Link 
                      href="/learn/taxation/income-tax-basics" 
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-green-900">HRA గైడ్</div>
                      <div className="text-sm text-green-700">HRA నియమాలు మరియు మినహాయింపులు</div>
                    </Link>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="font-medium text-purple-900">సెక్షన్ 80C కాలిక్యులేటర్</div>
                      <div className="text-sm text-purple-700 mb-2">ఇతర పన్ను ఆదా పెట్టుబడులు</div>
                      <p className="text-xs text-purple-600">త్వరలో అందుబాటులో</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="font-medium text-orange-900">జీతం స్ట్రక్చర్ ప్లానర్</div>
                      <div className="text-sm text-orange-700 mb-2">HRA ఆప్టిమైజేషన్ కోసం</div>
                      <p className="text-xs text-orange-600">త్వరలో అందుబాటులో</p>
                    </div>
                  </div>
                </div>
                
                {/* HRA Tips */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    💡 HRA చిట్కాలు
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• అద్దె రశీదులను తప్పనిసరిగా సేవ్ చేయండి</li>
                    <li>• ₹8,000/నెల మించితే యజమాని PAN కార్డ్ అవసరం</li>
                    <li>• రివెన్యూ స్టాంప్ రశీదులపై ఉండాలి</li>
                    <li>• కుటుంబ సభ్యుల నుండి అద్దె తీసుకుంటే HRA రాదు</li>
                    <li>• అద్దె ఒప్పందం ₹1L/సంవత్సరం మించితే అవసరం</li>
                  </ul>
                </div>

                {/* Metro vs Non-Metro */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    మెట్రో vs నాన్-మెట్రో
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">మెట్రో సిటీలు (50%)</h4>
                      <p className="text-blue-700">
                        • ముంబయి, దిల్లీ, కోల్‌కతా, చెన్నై<br/>
                        • జీతంలో 50% వరకు HRA మినహాయింపు<br/>
                        • అధిక అద్దె రేట్లకు అనుకూలం
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">నాన్-మెట్రో (40%)</h4>
                      <p className="text-blue-700">
                        • ఇతర అన్ని నగరాలు<br/>
                        • జీతంలో 40% వరకు HRA మినహాయింపు<br/>
                        • తక్కువ అద్దె రేట్లకు సరైనది
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compliance Notes */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">
                    ⚠️ కాంప్లయన్స్ నోట్స్
                  </h3>
                  <div className="space-y-2 text-sm text-red-800">
                    <p>• అద్దె రశీదులు IT విభాగ తనిఖీలో చూపించాలి</p>
                    <p>• యజమాని PAN వివరాలు Form 12BB లో పేర్కొనాలి</p>
                    <p>• తప్పుడు HRA క్లెయిమ్‌లకు పెనాల్టీ వర్తిస్తుంది</p>
                    <p>• హోమ్ లోన్ వడ్డీతో కలిపి క్లెయిమ్ చేయవచ్చు</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Default implementation for other calculators
  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumbs />
      <DisclaimerBanner type="calculator" />
      
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {calculator.teluguName}
        </h1>
        <p className="text-lg text-gray-600">
          {calculator.description}
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">
          అభివృద్ధి దశలో
        </h2>
        <p className="text-blue-800">
          ఈ కాలిక్యులేటర్ ప్రస్తుతం అభివృద్ధి దశలో ఉంది. త్వరలో పూర్తి ఫీచర్లతో అందుబాటులోకి వస్తుంది.
        </p>
      </div>
    </div>
  );
}