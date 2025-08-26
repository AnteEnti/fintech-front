import { Metadata } from 'next';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';

export const metadata: Metadata = {
  title: 'మా గురించి - FinTech Telugu',
  description: 'FinTech Telugu గురించి తెలుసుకోండి. మా లక్ష్యం తెలుగులో ఆర్థిక విద్యను అందించడం. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
  keywords: 'about, మా గురించి, FinTech Telugu, Telugu financial education, ఆర్థిక విద్య'
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <DisclaimerBanner type="page" />
      
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          మా గురించి
        </h1>
        <p className="text-lg text-gray-600">
          తెలుగులో ఆర్థిక విద్యను అందించడంలో మా యాత్రకు స్వాగతం
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">మా లక్ష్యం</h2>
          <p className="text-gray-700 mb-4">
            FinTech Telugu యొక్క ప్రధాన లక్ష్యం తెలుగు భాషలో ఆర్థిక విద్యను అందించడం. 
            మేము సరళమైన తెలుగులో ఆర్థిక కాన్సెప్ట్‌లను వివరిస్తాము.
          </p>
          <p className="text-gray-700">
            మా కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే రూపొందించబడింది.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">మా సేవలు</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• ఉచిత ఆర్థిక కాలిక్యులేటర్లు</li>
            <li>• తెలుగులో విద్యా వ్యాసాలు</li>
            <li>• ఆర్థిక పోలికలు మరియు విశ్లేషణలు</li>
            <li>• ప్రాక్టికల్ ఆర్థిక టిప్స్</li>
            <li>• ఆర్థిక ప్రణాళిక మార్గదర్శకాలు</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">ముఖ్యమైన గమనిక</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-800">
            <strong>మేము SEBI రిజిస్టర్డ్ ఆర్థిక సలహాదారులు కాదు.</strong> 
            మా కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
            పెట్టుబడి నిర్ణయాలు తీసుకునే ముందు దయచేసి అర్హత కలిగిన ఆర్థిక సలహాదారుని సంప్రదించండి.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">విద్యాపరమైనది</h3>
          <p className="text-blue-700 text-sm">
            మా కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే
          </p>
        </div>
        
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 mb-2">తెలుగులో</h3>
          <p className="text-green-700 text-sm">
            సరళమైన తెలుగు భాషలో ఆర్థిక కాన్సెప్ట్‌లు
          </p>
        </div>
        
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">ఉచితం</h3>
          <p className="text-purple-700 text-sm">
            అన్ని కాలిక్యులేటర్లు మరియు కంటెంట్ పూర్తిగా ఉచితం
          </p>
        </div>
      </div>
    </div>
  );
}