import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/custom/Breadcrumbs';
import PrivacyPolicyContent from '@/components/custom/PrivacyPolicyContent';
import TermsOfUseContent from '@/components/custom/TermsOfUseContent';
import DisclaimerContent from '@/components/custom/DisclaimerContent';
import AffiliateDisclosureContent from '@/components/custom/AffiliateDisclosureContent';

interface LegalPageProps {
  params: Promise<{
    doc: string;
  }>;
}

// Valid legal document routes
const validLegalDocs = ['privacy', 'terms', 'disclaimer', 'affiliate'];

export async function generateStaticParams() {
  return validLegalDocs.map((doc) => ({
    doc,
  }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { doc } = await params;
  
  if (!validLegalDocs.includes(doc)) {
    return {
      title: 'డాక్యుమెంట్ దొరకలేదు - FinTech Telugu',
      description: 'మీరు వెతుకుతున్న చట్టపరమైన డాక్యుమెంట్ దొరకలేదు'
    };
  }

  const docName = doc === 'privacy' ? 'ప్రైవసీ పాలసీ' :
                 doc === 'terms' ? 'నియమాలు మరియు షరతులు' :
                 doc === 'affiliate' ? 'అఫిలియేట్ డిస్క్లోజర్' :
                 'డిస్క్లేమర్';

  return {
    title: `${docName} - FinTech Telugu`,
    description: `FinTech Telugu ${docName} - మా వెబ్‌సైట్ వాడకానికి సంబంధించిన చట్టపరమైన సమాచారం`,
    keywords: `${docName}, legal, చట్టపరమైన, policy, పాలసీ, terms, నియమాలు`
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { doc } = await params;

  // Validate route parameters
  if (!validLegalDocs.includes(doc)) {
    notFound();
  }

  const docName = doc === 'privacy' ? 'ప్రైవసీ పాలసీ' :
                 doc === 'terms' ? 'నియమాలు మరియు షరతులు' :
                 doc === 'affiliate' ? 'అఫిలియేట్ డిస్క్లోజర్' :
                 'డిస్క్లేమర్';

  // Render appropriate component based on doc type
  const renderContent = () => {
    switch (doc) {
      case 'privacy':
        return <PrivacyPolicyContent />;
      case 'terms':
        return <TermsOfUseContent />;
      case 'affiliate':
        return <AffiliateDisclosureContent />;
      case 'disclaimer':
      default:
        return <DisclaimerContent />;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumbs />
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {docName}
        </h1>
        <p className="text-sm text-gray-500">
          చివరిసారి అప్‌డేట్ చేయబడిన తేదీ: {new Date().toLocaleDateString('te-IN')}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {renderContent()}
      </div>
      
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-sm">
          <strong>ముఖ్యమైన గమనిక:</strong> ఈ వెబ్‌సైట్‌లోని సమస్త సమాచారం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
          పెట్టుబడి నిర్ణయాలు తీసుకునే ముందు దయచేసి అర్హత కలిగిన ఆర్థిక సలహాదారుని సంప్రదించండి.
        </p>
      </div>
    </div>
  );
}