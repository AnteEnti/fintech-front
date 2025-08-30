import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';

interface TipsPageProps {
  params: Promise<{
    topic: string;
  }>;
}

// Valid tips routes
const validTips = [
  'daily-saving-tips',
  'reduce-emi',
  'improve-cibil',
  'tax-saving-tips',
  'investment-basics',
  'budget-planning',
  'emergency-fund-tips',
  'avoid-mistakes',
  'digital-fraud-awareness',
  'credit-card-usage'
];

export async function generateStaticParams() {
  return validTips.map((topic) => ({
    topic,
  }));
}

export async function generateMetadata({ params }: TipsPageProps): Promise<Metadata> {
  const { topic } = await params;
  
  if (!validTips.includes(topic)) {
    return {
      title: 'టిప్స్ దొరకలేదు - FinTech Telugu',
      description: 'మీరు వెతుకుతున్న ఆర్థిక టిప్స్ దొరకలేదు'
    };
  }

  const topicName = topic === 'daily-saving-tips' ? 'రోజువారీ పొదుపు టిప్స్' :
                   topic === 'reduce-emi' ? 'EMI తగ్గించే టిప్స్' :
                   topic === 'improve-cibil' ? 'CIBIL స్కోర్ మెరుగుపరచే టిప్స్' :
                   topic === 'tax-saving-tips' ? 'పన్ను ఆదా టిప్స్' :
                   topic === 'investment-basics' ? 'పెట్టుబడి ప్రాథమికాలు' :
                   topic === 'budget-planning' ? 'బడ్జెట్ ప్లానింగ్ టిప్స్' :
                   topic === 'avoid-mistakes' ? 'సాధారణ ఆర్థిక తప్పిదాలను ఎలా నివారించాలి' :
                   topic === 'digital-fraud-awareness' ? 'డిజిటల్ మోసాల గురించి తెలుసుకోండి' :
                   topic === 'credit-card-usage' ? 'క్రెడిట్ కార్డ్ వినియోగంలో తెలివైన పద్ధతులు' :
                   'ఎమర్జెన్సీ ఫండ్ టిప్స్';

  return {
    title: `${topicName} - FinTech Telugu`,
    description: `${topicName} - ప్రాక్టికల్ మరియు ఉపయోగకరమైన ఆర్థిక సలహాలు తెలుగులో. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.`,
    keywords: `${topicName}, tips, Telugu, financial tips, ఆర్థిక టిప్స్, money tips`
  };
}

export default async function TipsPage({ params }: TipsPageProps) {
  const { topic } = await params;

  // Validate route parameters
  if (!validTips.includes(topic)) {
    notFound();
  }

  const topicName = topic === 'daily-saving-tips' ? 'రోజువారీ పొదుపు టిప్స్' :
                   topic === 'reduce-emi' ? 'EMI తగ్గించే టిప్స్' :
                   topic === 'improve-cibil' ? 'CIBIL స్కోర్ మెరుగుపరచే టిప్స్' :
                   topic === 'tax-saving-tips' ? 'పన్ను ఆదా టిప్స్' :
                   topic === 'investment-basics' ? 'పెట్టుబడి ప్రాథమికాలు' :
                   topic === 'budget-planning' ? 'బడ్జెట్ ప్లానింగ్ టిప్స్' :
                   topic === 'avoid-mistakes' ? 'సాధారణ ఆర్థిక తప్పిదాలను ఎలా నివారించాలి' :
                   topic === 'digital-fraud-awareness' ? 'డిజిటల్ మోసాల గురించి తెలుసుకోండి' :
                   topic === 'credit-card-usage' ? 'క్రెడిట్ కార్డ్ వినియోగంలో తెలివైన పద్ధతులు' :
                   'ఎమర్జెన్సీ ఫండ్ టిప్స్';

  return (
    <div className="container mx-auto px-6 py-8">
      <DisclaimerBanner type="page" />
      
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {topicName}
        </h1>
        <p className="text-lg text-gray-600">
          ప్రాక్టికల్ టిప్స్ మరియు సలహాలు త్వరలో అందుబాటులోకి వస్తాయి
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-yellow-900 mb-3">
          ఉపయోగకరమైన టిప్స్ త్వరలో
        </h2>
        <p className="text-yellow-800">
          {topicName} గురించి ప్రాక్టికల్ మరియు ఉపయోగకరమైన సలహాలు త్వరలో ప్రచురించబడతాయి. 
          ఇవన్నీ విద్యాపరమైన ఉద్దేశ్యాలతో మాత్రమే అందించబడతాయి.
        </p>
      </div>
    </div>
  );
}