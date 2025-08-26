"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function SipLumpsumFAQ() {
  const handleFAQClick = (question: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('FAQ interaction:', question);
  };

  const faqs: FAQItem[] = [
    {
      question: "SIP మరియు లంప్‌సమ్ ఏది మంచిది?",
      answer: "రెంటిది వాటి స్వంత ప్రయోజనాలున్నాయి. SIP మార్కెట్ హెచ్చు తగ్గుల నుండి రక్షిస్తుంది మరియు క్రమశిక్షణను అభివృద్ధి చేస్తుంది. లంప్‌సమ్ మంచి మార్కెట్ టైమింగ్‌తో ఎక్కువ రాబడిని అందించవచ్చు. మీ ఆర్థిక స్థితి మరియు లక్ష్యాలను బట్టి ఎంచుకోండి."
    },
    {
      question: "చిన్న మొత్తంతో ప్రారంభించాలంటే ఏది మంచిది?",
      answer: "చిన్న మొత్తంతో ప్రారంభించాలంటే SIP మంచిది. మీరు కేవలం ₹500 నెలకు కూడా SIP ప్రారంభించవచ్చు. లంప్‌సమ్‌కు సాధారణంగా కనిష్టం ₹5,000 లేదా అంతకంటే ఎక్కువ అవసరం."
    },
    {
      question: "మార్కెట్ క్రాష్ సమయంలో ఏది మంచిది?",
      answer: "మార్కెట్ క్రాష్ సమయంలో రెంటిది వాటి స్వంత ప్రయోజనాలున్నాయి. SIP ద్వారా మీరు తక్కువ ధరలకు క్రమంగా కొనుగోలు చేయవచ్చు. లంప్‌సమ్‌తో మంచి అవకాశంలో పెద్ద మొత్తాన్ని పెట్టుబడి చేయవచ్చు. అయితే ఇది మార్కెట్ టైమింగ్‌పై ఆధారపడుతుంది."
    },
    {
      question: "రెంటి పద్ధతులను కలిపి ఉపయోగించవచ్చా?",
      answer: "అవును, మీరు రెంటి పద్ధతులను కలిపి ఉపయోగించవచ్చు. ఉదాహరణకు, నెలవారీ SIP కొనసాగించి, అకస్మాత్తుగా వచ్చే డబ్బును లంప్‌సమ్‌గా పెట్టుబడి చేయవచ్చు. ఇది రిస్క్‌ను బ్యాలెన్స్ చేయడంలో సహాయపడుతుంది."
    },
    {
      question: "SIP ఎప్పుడైనా ఆపవచ్చా?",
      answer: "అవును, SIP ఎప్పుడైనా ఆపవచ్చు లేదా మొత్తాన్ని మార్చవచ్చు. అయితే దీర్ఘకాలిక లక్ష్యాల కోసం SIPని కొనసాగించడం మంచిది. లంప్‌సమ్‌లో ఒకసారి పెట్టుబడి చేసిన తర్వాత అదనంగా పెట్టుబడి చేయాలంటే మరో లంప్‌సమ్ అవసరం."
    },
    {
      question: "రాబడిలో తేడా ఎంత ఉంటుంది?",
      answer: "రాబడిలో తేడా మార్కెట్ పరిస్థితులపై ఆధారపడుతుంది. ఎక్కువ కాలం పెట్టుబడి చేస్తే సాధారణంగా రెంటి పద్ధతుల మధ్య రాబడిలో పెద్దగా తేడా ఉండదు. SIP రుపాయి కాస్ట్ అవరేజింగ్ ప్రయోజనం పొందుతుంది, లంప్‌సమ్ మంచి టైమింగ్‌తో ఎక్కువ రాబడి అందించవచ్చు."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          తరచుగా అడిగే ప్రశ్నలు
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">
          SIP మరియు లంప్‌సమ్ గురించి తరచుగా అడిగే ప్రశ్నలకు సమాధానాలు:
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger 
                className="text-left hover:no-underline"
                onClick={() => handleFAQClick(faq.question)}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2 pb-4">
                  <p className="text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">
            మరిన్ని సందేహాలు ఉన్నాయా?
          </h4>
          <p className="text-green-800 text-sm">
            పెట్టుబడి గురించి మరిన్ని ప్రశ్నలు ఉంటే, SEBI రిజిస్టర్డ్ ఆర్థిక సలహాదారుని సంప్రదించండి. 
            మ్యూచువల్ ఫండ్ పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి. 
            అన్ని పత్రాలను జాగ్రత్తగా చదివి అర్థం చేసుకున్న తర్వాతే పెట్టుబడి చేయండి.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}