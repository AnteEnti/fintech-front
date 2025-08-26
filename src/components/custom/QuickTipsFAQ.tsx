import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, HelpCircle } from "lucide-react";

export default function QuickTipsFAQ() {
  const tips = [
    "మీ ఆదాయంలో కనీసం 20% పొదుపు చేయండి",
    "ఎమర్జెన్సీ ఫండ్‌లో 6 నెలల ఖర్చులు ఉంచండి",
    "SIP ద్వారా క్రమంగా పెట్టుబడులు పెట్టండి"
  ];

  const faqs = [
    {
      question: "SIP అంటే ఏమిటి?",
      answer: "SIP అంటే సిస్టమాటిక్ ఇన్వెస్ట్‌మెంట్ ప్లాన్. ఇది క్రమంగా మ్యూచువల్ ఫండ్స్‌లో పెట్టుబడులు పెట్టే పద్ధతి."
    },
    {
      question: "EMI లెక్కింపు ఎలా చేస్తారు?",
      answer: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1] ఈ ఫార్ములా వాడి లెక్కిస్తారు, ఇక్కడ P=లోన్ అమౌంట్, R=నెలవారీ వడ్డీ రేటు, N=నెలల సంఖ్య."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                త్వరిత టిప్స్
              </h2>
            </div>
            
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <Card key={index} className="border-l-4 border-l-[#4B6FFF] bg-blue-50/50">
                  <CardContent className="p-4">
                    <p className="text-gray-800 font-medium">{tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <HelpCircle className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                తరచూ అడిగే ప్రశ్నలు
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}