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

interface LearnFAQProps {
  title: string;
  faqs: FAQItem[];
  onFAQInteraction?: (question: string) => void;
}

export default function LearnFAQ({ title, faqs, onFAQInteraction }: LearnFAQProps) {
  const handleFAQClick = (question: string) => {
    if (onFAQInteraction) {
      onFAQInteraction(question);
    }
  };

  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            మ్యూచువల్ ఫండ్స్ గురించి సాధారణంగా అడిగే ప్రశ్నలకు సమాధానాలు:
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
              మ్యూచువల్ ఫండ్స్ గురించి మరిన్ని ప్రశ్నలు ఉంటే, SEBI నమోదిత ఆర్థిక సలహాదారుని సంప్రదించండి. 
              మ్యూచువల్ ఫండ్ పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి. 
              అన్ని పత్రాలను జాగ్రత్తగా చదివి అర్థం చేసుకున్న తర్వాతే పెట్టుబడి చేయండి.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}