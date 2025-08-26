import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import Breadcrumbs from '@/components/custom/Breadcrumbs';
import SIPCalculator from '@/components/custom/SIPCalculator';
import EMICalculator from '@/components/custom/EMICalculator';
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