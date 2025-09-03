import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, HelpCircle } from "lucide-react";

export default function QuickTipsFAQ() {
  const tips = [
    {
      text: "మీ ఆదాయంలో కనీసం 20% పొదుపు చేయండి",
      category: "పొదుపు వ్యూహం",
      description: "50-30-20 రూల్ అనుసరించి మీ ఆదాయాన్ని విభజించండి"
    },
    {
      text: "ఎమర్జెన్సీ ఫండ్‌లో 6-12 నెలల ఖర్చులు ఉంచండి",
      category: "రిస్క్ మేనేజ్మెంట్",
      description: "అనుకోని పరిస్థితుల కోసం లిక్విడ్ ఫండ్స్‌లో డబ్బు కూడబెట్టండి"
    },
    {
      text: "SIP ద్వారా క్రమంగా పెట్టుబడులు పెట్టండి",
      category: "పెట్టుబడుల వ్యూహం", 
      description: "రూపాలర్ ఆధార్ అవరేజింగ్ ప్రయోజనం పొందేందుకు మంత్రధార పెట్టుబడులు చేయండి"
    },
    {
      text: "ఇన్సూరెన్స్ కవరేజ్ ఆదాయంలో 10-15 రెట్లు ఉంచండి",
      category: "రిస్క్ కవరేజ్",
      description: "మీ కుటుంబ భవిష్యత్తు సురక్షితంగా ఉండేలా తగిన లైఫ్ ఇన్సూరెన్స్ తీసుకోండి"
    },
    {
      text: "క్రెడిట్ కార్డ్ బిల్లులు పూర్తిగా, సమయానికి చెల్లించండి",
      category: "డెట్ మేనేజ్మెంట్",
      description: "అధిక వడ్డీ రేట్లను నివారించి మీ క్రెడిట్ స్కోర్‌ను మెరుగుపరచుకోండి"
    }
  ];

  const faqs = [
    {
      question: "SIP అంటే ఏమిటి మరియు ఎందుకు మంచిది?",
      answer: "SIP అంటే సిస్టమాటిక్ ఇన్వెస్ట్‌మెంట్ ప్లాన్. ఇది క్రమంగా మ్యూచువల్ ఫండ్స్‌లో పెట్టుబడులు పెట్టే పద్ధతి. ఇది మార్కెట్ టైమింగ్ రిస్క్‌ను తగ్గించి, రూపాలర్ ఆధార్ అవరేజింగ్ ప్రయోజనం అందిస్తుంది.",
      category: "పెట్టుబడులు"
    },
    {
      question: "EMI లెక్కింపు ఎలా చేస్తారు?",
      answer: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1] ఈ ఫార్ములా వాడి లెక్కిస్తారు, ఇక్కడ P=లోన్ అమౌంట్, R=నెలవారీ వడ్డీ రేటు, N=నెలల సంఖ్య. మా కాలిక్యులేటర్ వాడి సులభంగా లెక్కించవచ్చు.",
      category: "లోన్లు"
    },
    {
      question: "ఎమర్జెన్సీ ఫండ్ ఎక్కడ ఉంచాలి?",
      answer: "ఎమర్జెన్సీ ఫండ్‌ను లిక్విడ్ మ్యూచువల్ ఫండ్స్, హై-యీల్డ్ సేవింగ్స్ అకౌంట్ లేదా FD లాడర్‌లో ఉంచండి. అత్యవసర సమయంలో 24 గంటల్లో యాక్సెస్ అవ్వాలి.",
      category: "పొదుపులు"
    },
    {
      question: "ఇన్సూరెన్స్ కవరేజ్ ఎంత ఉండాలి?",
      answer: "లైఫ్ ఇన్సూరెన్స్ కవరేజ్ మీ వార్షిక ఆదాయంలో 10-15 రెట్లు ఉండాలి. హెల్త్ ఇన్సూరెన్స్ కనీసం 5-10 లక్షలు ఉండాలి, కుటుంబ సైజ్ బట్టి.",
      category: "ఇన్సూరెన్స్"
    },
    {
      question: "టాక్స్ సేవింగ్ ఎలా చేయాలి?",
      answer: "సెక్షన్ 80C కింద PPF, ELSS, లైఫ్ ఇన్సూరెన్స్ ప్రీమియం ద్వారా 1.5 లక్షలు వరకు సేవ్ చేయవచ్చు. అదనంగా హెల్త్ ఇన్సూరెన్స్ ప్రీమియం కోసం 80D వాడవచ్చు.",
      category: "టాక్స్ ప్లానింగ్"
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
              {tips.slice(0, 4).map((tip, index) => (
                <Card key={index} className="border-l-4 border-l-[#4B6FFF] bg-blue-50/50 hover:bg-blue-50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-gray-800 font-medium flex-1">{tip.text}</p>
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-2 whitespace-nowrap">
                        {tip.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
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
              {faqs.slice(0, 3).map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg font-semibold text-gray-900 flex-1">
                        {faq.question}
                      </CardTitle>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full ml-2 whitespace-nowrap">
                        {faq.category}
                      </span>
                    </div>
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