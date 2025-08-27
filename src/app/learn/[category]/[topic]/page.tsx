import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import Breadcrumbs from '@/components/custom/Breadcrumbs';
import MutualFundsContent from '@/components/custom/MutualFundsContent';
import LoansLearnContent from '@/components/custom/LoansLearnContent';
import PPFLearnContent from '@/components/custom/PPFLearnContent';
import LifeInsuranceContent from '@/components/custom/LifeInsuranceContent';
import TelemetryTracker from '@/components/custom/TelemetryTracker';

interface LearnPageProps {
  params: Promise<{
    category: string;
    topic: string;
  }>;
}

// Valid learn routes
const validLearnContent = {
  'money-basics': ['budgeting', 'saving-tips', 'emergency-fund'],
  'investments': ['mutual-funds', 'sip-guide', 'stock-basics'],
  'insurance': ['life-insurance', 'health-insurance', 'term-insurance'],
  'loans': ['home-loan-guide', 'personal-loan-tips', 'credit-score'],
  'banking-credit': ['loans-overview'],
  'tax-planning': ['income-tax', 'tax-saving', 'deductions'],
  'retirement': ['ppf']
};

export async function generateStaticParams() {
  const params: { category: string; topic: string }[] = [];
  
  Object.entries(validLearnContent).forEach(([category, topics]) => {
    topics.forEach((topic) => {
      params.push({ category, topic });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: LearnPageProps): Promise<Metadata> {
  const { category, topic } = await params;
  
  if (!validLearnContent[category as keyof typeof validLearnContent]?.includes(topic)) {
    return {
      title: 'వ్యాసం దొరకలేదు - FinTech Telugu',
      description: 'మీరు వెతుకుతున్న విద్యా కంటెంట్ దొరకలేదు'
    };
  }

  // Specific metadata for mutual funds
  if (category === 'investments' && topic === 'mutual-funds') {
    return {
      title: 'మ్యూచువల్ ఫండ్స్ అర్థం చేసుకోండి - FinTech Telugu',
      description: 'మ్యూచువల్ ఫండ్స్ గురించి సరళమైన తెలుగులో తెలుసుకోండి. SIP, లంప్‌సమ్, ఫండ్ రకాలు మరియు పెట్టుబడి పద్ధతుల గురించి వివరణ. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'mutual funds, మ్యూచువల్ ఫండ్స్, SIP, lump sum, investment, పెట్టుబడి, Telugu financial education',
      openGraph: {
        title: 'మ్యూచువల్ ఫండ్స్ అర్థం చేసుకోండి',
        description: 'మ్యూచువల్ ఫండ్స్ గురించి సరళమైన తెలుగులో తెలుసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for loans overview
  if (category === 'banking-credit' && topic === 'loans-overview') {
    return {
      title: 'లోన్‌లు అర్థం చేసుకోండి - విద్యా వ్యాసం | FinTech Telugu',
      description: 'లోన్‌ల రకాలు, EMI, వడ్డీ రేట్లు మరియు దరఖాస్తు ప్రక్రియ గురించి సరళమైన తెలుగులో తెలుసుకోండి. హోమ్ లోన్, కార్ లోన్, పర్సనల్ లోన్ వివరాలు. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'loans, లోన్‌లు, EMI, home loan, హోమ్ లోన్, personal loan, పర్సనల్ లోన్, car loan, కార్ లోన్, interest rates, వడ్డీ రేట్లు, Telugu financial education',
      openGraph: {
        title: 'లోన్‌లు అర్థం చేసుకోండి - Banking & Credit',
        description: 'లోన్‌ల రకాలు, EMI మరియు దరఖాస్తు ప్రక్రియ గురించి తెలుసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for PPF learn content
  if (category === 'retirement' && topic === 'ppf') {
    return {
      title: 'PPF అర్థం చేసుకోండి - పబ్లిక్ ప్రావిడెంట్ ఫండ్ | FinTech Telugu',
      description: 'PPF గురించి వివరమైన తెలుగు వ్యాసం. 15 సంవత్సరాల లాక్-ఇన్, వడ్డీ రేట్లు, పార్షియల్ విత్‌డ్రాల్, లోన్ ఫెసిలిటీ మరియు సెక్షన్ 80C టాక్స్ బెనిఫిట్స్ గురించి తెలుసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'PPF, Public Provident Fund, పబ్లిక్ ప్రావిడెంట్ ఫండ్, retirement planning, రిటైర్మెంట్ ప్లానింగ్, Section 80C, సెక్షన్ 80C, tax benefits, టాక్స్ బెనిఫిట్స్, Telugu financial education',
      openGraph: {
        title: 'PPF అర్థం చేసుకోండి - Retirement Planning',
        description: 'PPF యొక్క అన్ని నియమాలు, లాభాలు మరియు ఫీచర్లు తెలుగులో తెలుసుకోండి',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  // Specific metadata for life insurance
  if (category === 'insurance' && topic === 'life-insurance') {
    return {
      title: 'జీవిత బీమా అర్థం చేసుకోండి - Life Insurance | FinTech Telugu',
      description: 'జీవిత బీమా గురించి పూర్తి గైడ్. టర్మ్ vs ఎండౌమెంట్, కవర్ కాలిక్యులేషన్, ప్రీమియం కారకాలు, రైడర్లు, క్లెయిమ్ ప్రక్రియ మరియు టాక్స్ బెనిఫిట్లు. కుటుంబ ఆర్థిక రక్షణ కోసం సంపూర్ణ వివరాలు. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
      keywords: 'life insurance, జీవిత బీమా, term insurance, టర్మ్ ఇన్షూరెన్స్, endowment plan, ఎండౌమెంట్ ప్లాన్, family protection, కుటుంబ రక్షణ, insurance riders, బీమా రైడర్లు, claim process, క్లెయిమ్ ప్రక్రియ, Section 80C, सेक्शन 80C, Telugu financial education, IRDAI',
      openGraph: {
        title: 'జీవిత బీమా అర్థం చేసుకోండి - కుటుంబ రక్షణ',
        description: 'జీవిత బీమా యొక్క అన్ని అంశాలను తెలుగులో తెలుసుకోండి - టర్మ్, ఎండౌమెంట్, రైడర్లు మరియు క్లెయిమ్ ప్రక్రియ',
        locale: 'te_IN',
        type: 'article'
      }
    };
  }

  const topicName = topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${topicName} - విద్యా వ్యాసం | FinTech Telugu`,
    description: `${topicName} గురించి తెలుసుకోండి. సరళమైన తెలుగులో ఆర్థిక విద్య. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.`,
    keywords: `${topicName}, Telugu, financial education, ఆర్థిక విద్య, learn, నేర్చుకోండి`
  };
}

export default async function LearnPage({ params }: LearnPageProps) {
  const { category, topic } = await params;

  // Validate route parameters
  if (!validLearnContent[category as keyof typeof validLearnContent]?.includes(topic)) {
    notFound();
  }

  // Specific implementation for mutual funds
  if (category === 'investments' && topic === 'mutual-funds') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <MutualFundsContent />
        </div>
      </>
    );
  }

  // Specific implementation for loans overview
  if (category === 'banking-credit' && topic === 'loans-overview') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <LoansLearnContent />
        </div>
      </>
    );
  }

  // Specific implementation for PPF learn content
  if (category === 'retirement' && topic === 'ppf') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <PPFLearnContent />
        </div>
      </>
    );
  }

  // Specific implementation for life insurance
  if (category === 'insurance' && topic === 'life-insurance') {
    return (
      <>
        <TelemetryTracker trackPageView={true} />
        <div className="container mx-auto px-6 py-8">
          <Breadcrumbs />
          <DisclaimerBanner type="page" />
          <LifeInsuranceContent />
        </div>
      </>
    );
  }

  // Default implementation for other learn content
  const categoryName = category === 'money-basics' ? 'డబ్బు మూలాలు' :
                      category === 'investments' ? 'పెట్టుబడులు' :
                      category === 'insurance' ? 'బీమా' :
                      category === 'loans' ? 'రుణాలు' :
                      category === 'banking-credit' ? 'బ్యాంకింగ్ & క్రెడిట్' :
                      category === 'retirement' ? 'రిటైర్మెంట్ ప్లానింగ్' :
                      'పన్ను ప్రణాళిక';

  const topicName = topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumbs />
      <DisclaimerBanner type="page" />
      
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-2">
          {categoryName} / {topicName}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {topicName}
        </h1>
        <p className="text-lg text-gray-600">
          ఈ విషయంపై వివరమైన వ్యాసం త్వరలో అందుబాటులోకి వస్తుంది
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-green-900 mb-3">
          విద్యా కంటెంట్ త్వరలో
        </h2>
        <p className="text-green-800">
          ఈ విషయంపై వివరమైన, సులభమైన తెలుగు వ్యాసం త్వరలో ప్రచురించబడుతుంది. 
          ఇది పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.
        </p>
      </div>
    </div>
  );
}