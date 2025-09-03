import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

interface DisclaimerBannerProps {
  type?: 'global' | 'page' | 'calculator' | 'calculator-result';
}

export default function DisclaimerBanner({ type = 'page' }: DisclaimerBannerProps) {
  const getDisclaimerText = () => {
    switch (type) {
      case 'global':
        return "ఈ వెబ్‌సైట్‌లోని కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. ఇది పెట్టుబడి సలహా కాదు. పెట్టుబడులు మార్కెట్ ప్రమాదాలకు లోబడి ఉంటాయి.";
      case 'calculator':
        return "ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పెట్టుబడి సలహా కాదు.";
      case 'calculator-result':
        return "ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పెట్టుబడి సలహా కాదు. పెట్టుబడి నిర్ణయాలు తీసుకునే ముందు ఆర్థిక సలహాదారుని సంప్రదించండి.";
      case 'page':
      default:
        return "ఈ వేదిక పూర్తిగా విద్యా ప్రయోజనాల కోసం మాత్రమే. మేము ఎటువంటి వ్యక్తిగత ఆర్థిక సలహాలు అందించము. వ్యక్తిగత ఆర్థిక నిర్ణయాలకు ముందు ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి.";
    }
  };

  return (
    <Alert className="border-blue-200 bg-blue-50 mb-6">
      <Info className="h-4 w-4 text-blue-600" />
      <AlertDescription className="text-blue-800 text-sm leading-relaxed">
        {getDisclaimerText()}
      </AlertDescription>
    </Alert>
  );
}