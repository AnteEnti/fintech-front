import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import Breadcrumbs from '@/components/custom/Breadcrumbs';
import MutualFundsContent from '@/components/custom/MutualFundsContent';
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
  'tax-planning': ['income-tax', 'tax-saving', 'deductions']
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

  // Default implementation for other learn content
  const categoryName = category === 'money-basics' ? 'డబ్బు మూలాలు' :
                      category === 'investments' ? 'పెట్టుబడులు' :
                      category === 'insurance' ? 'బీమా' :
                      category === 'loans' ? 'రుణాలు' :
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