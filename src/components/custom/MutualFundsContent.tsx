"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArticleHeader from "./ArticleHeader";
import RelatedTools from "./RelatedTools";
import CrossLinksBlock from "./CrossLinksBlock";
import LearnFAQ from "./LearnFAQ";
import TelemetryTracker from "./TelemetryTracker";

export default function MutualFundsContent() {
  const handleContentEngagement = (section: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'content_engagement',
          data: {
            page: 'mutual-funds-learn',
            section: section,
            timestamp: new Date().toISOString()
          }
        }
      }));
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      <TelemetryTracker />
      
      {/* Hero Heading with Category Tag */}
      <ArticleHeader 
        category="పెట్టుబడులు"
        title="మ్యూచువల్ ఫండ్స్ అర్థం చేసుకోండి"
        subtitle="మ్యూచువల్ ఫండ్స్ గురించి సరళమైన తెలుగులో తెలుసుకోండి"
        onView={() => handleContentEngagement('header')}
      />

      {/* Article Content with Proper Typography */}
      <div className="prose prose-lg max-w-none" style={{ lineHeight: '1.6', fontSize: '16px' }}>
        
        {/* Overview Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('overview')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                మ్యూచువల్ ఫండ్ అంటే ఏమిటి?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                మ్యూచువల్ ఫండ్ అనేది అనేక మంది పెట్టుబడిదారుల డబ్బును ఒకచోట చేర్చి, 
                అది స్టాక్స్, బాండ్స్ మరియు ఇతర సెక్యూరిటీలలో పెట్టుబడి చేసే ఒక పెట్టుబడి సాధనం.
              </p>
              
              <p className="text-gray-700 mb-4">
                ఇది ఒక పెద్ద కుండలో అనేకమంది చిన్న మొత్తాలను వేసి, 
                ఆ మొత్తం డబ్బును అనుభవజ్ఞుడైన ఫండ్ మేనేజర్ వివిధ చోట్లలో పెట్టుబడి చేసేలా చూసుకుంటారు.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                <p className="text-blue-800 font-medium">
                  సరళంగా చెప్పాలంటే: మీరు ఒంటరిగా స్టాక్ మార్కెట్‌లో పెట్టుబడి చేయడానికి బదులు, 
                  అనేకమంది కలిసి పెట్టుబడి చేసి లాభనష్టాలను పంచుకుంటారు.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Concepts Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('concepts')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                ముఖ్యమైన అంశాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* SIP vs Lump Sum */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SIP vs లంప్‌సమ్ - ఏది మంచిది?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">SIP (సిస్టమాటిక్ ఇన్వెస్ట్‌మెంట్ ప్లాన్)</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• ప్రతి నెలా ఒక నిర్దిష్ట మొత్తం పెట్టుబడి</li>
                        <li>• తక్కువ మొత్తంతో మొదలుపెట్టవచ్చు</li>
                        <li>• మార్కెట్ హెచ్చుతగ్గుల ప్రభావం తగ్గుతుంది</li>
                        <li>• క్రమబద్ధమైన పొదుపు అలవాటు ఏర్పడుతుంది</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">లంప్‌సమ్ (ఒకేసారి పెట్టుబడి)</h4>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• ఒకేసారి పెద్ద మొత్తం పెట్టుబడి</li>
                        <li>• మార్కెట్ దిగువ స్థాయిలో ఉంటే మంచిది</li>
                        <li>• ఎక్కువ డబ్బు ఉన్నవారికి అనుకూలం</li>
                        <li>• మార్కెట్ టైమింగ్ ముఖ్యం</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Fund Types */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">మ్యూచువల్ ఫండ్ రకాలు</h3>
                  
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">ఈక్విటీ ఫండ్స్</h4>
                      <p className="text-gray-700 text-sm">ప్రధానంగా స్టాక్స్‌లో పెట్టుబడి. ఎక్కువ రాబడి అవకాశం, ఎక్కువ రిస్క్.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">డెట్ ఫండ్స్</h4>
                      <p className="text-gray-700 text-sm">బాండ్స్, డిబెంచర్లలో పెట్టుబడి. స్థిరమైన రాబడి, తక్కువ రిస్క్.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">హైబ్రిడ్ ఫండ్స్</h4>
                      <p className="text-gray-700 text-sm">స్టాక్స్ మరియు బాండ్స్ రెండింటిలోనూ పెట్టుబడి. సమతుల్యమైన రిస్క్.</p>
                    </div>
                  </div>
                </div>

                {/* NAV Concept */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">NAV అంటే ఏమిటి?</h3>
                  <p className="text-gray-700">
                    NAV (Net Asset Value) అనేది మ్యూచువల్ ఫండ్‌లోని ఒక యూనిట్ విలువ. 
                    ఇది ఫండ్‌లోని అన్ని పెట్టుబడుల మొత్తం విలువను మొత్తం యూనిట్లతో భాగిస్తే వస్తుంది.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>ఉదాహరణ:</strong> ఒక ఫండ్‌లో మొత్తం ₹1 కోటి విలువైన పెట్టుబడులు ఉన్నాయి. 
                      మొత్తం 10 లక్ష యూనిట్లు ఉన్నాయి. అయితే NAV = ₹1,00,00,000 ÷ 10,00,000 = ₹10
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Examples Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('examples')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                ఉదాహరణలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* SIP Example */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">SIP ఉదాహరణ</h3>
                  <p className="text-gray-700 mb-3">
                    రాజు ప్రతి నెలా ₹5,000 SIP మొదలుపెట్టాడు. 12% వార్షిక రాబడితో 10 సంవత్సరాలు కొనసాగించాడు.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 rounded">
                      <div className="text-sm text-gray-600">మొత్తం పెట్టుబడి</div>
                      <div className="text-lg font-bold text-blue-600">₹6,00,000</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="text-sm text-gray-600">అంచనా రాబడి</div>
                      <div className="text-lg font-bold text-green-600">₹5,49,000</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="text-sm text-gray-600">మొత్తం అమౌంట్</div>
                      <div className="text-lg font-bold text-purple-600">₹11,49,000</div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    *ఇది కేవలం ఉదాహరణ. వాస్తవ రాబడి మార్కెట్ పరిస్థితులను బట్టి మారవచ్చు.
                  </p>
                </div>

                {/* Lump Sum Example */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">లంప్‌సమ్ ఉదాహరణ</h3>
                  <p className="text-gray-700 mb-3">
                    సీత ఒకేసారి ₹6,00,000 పెట్టుబడి చేసింది. 12% వార్షిక రాబడితో 10 సంవత్సరాలు.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 rounded">
                      <div className="text-sm text-gray-600">మొత్తం పెట్టుబడి</div>
                      <div className="text-lg font-bold text-blue-600">₹6,00,000</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="text-sm text-gray-600">అంచనా రాబడి</div>
                      <div className="text-lg font-bold text-green-600">₹12,57,000</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="text-sm text-gray-600">మొత్తం అమౌంట్</div>
                      <div className="text-lg font-bold text-purple-600">₹18,57,000</div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    *ఇది కేవలం ఉదాహరణ. వాస్తవ రాబడి మార్కెట్ పరిస్థితులను బట్టి మారవచ్చు.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-orange-800 text-sm">
                    <strong>గమనిక:</strong> పై ఉదాహరణలు కేవలం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                    మ్యూచువల్ ఫండ్ పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి. గతంలోని రాబడి భవిష్యత్తు పనితీరుకు హామీ కాదు.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Tools Section */}
        <RelatedTools onToolClick={(tool) => handleContentEngagement(`related-tool-${tool}`)} />

        {/* FAQ Section */}
        <LearnFAQ 
          title="మ్యూచువల్ ఫండ్స్ గురించి తరచుగా అడిగే ప్రశ్నలు"
          faqs={[
            {
              question: "మ్యూచువల్ ఫండ్‌లో పెట్టుబడికి కనిష్ఠ మొత్తం ఎంత?",
              answer: "చాలా మ్యూచువల్ ఫండ్‌లలో కనిష్ఠ SIP మొత్తం ₹500. లంప్‌సమ్‌కి సాధారణంగా ₹5,000 లేదా ₹10,000 కనిష్ఠ మొత్తం ఉంటుంది."
            },
            {
              question: "మ్యూచువల్ ఫండ్ సేఫ్‌టీ ఎలా ఉంటుంది?",
              answer: "మ్యూచువల్ ఫండ్‌లు SEBI నియంత్రణలో ఉంటాయి. అయితే మార్కెట్ రిస్క్ ఉంటుంది. వివిధ రకాల ఫండ్‌లలో వివిధ స్థాయిల రిస్క్ ఉంటుంది."
            },
            {
              question: "SIP ఎప్పుడు ఆపవచ్చు?",
              answer: "SIP ను మీరు ఎప్పుడైనా ఆపవచ్చు. లాక్-ఇన్ పీరియడ్ లేని ఫండ్‌లలో మీ డబ్బును ఎప్పుడైనా విత్‌డ్రా చేసుకోవచ్చు."
            },
            {
              question: "ఎన్ని మ్యూచువల్ ఫండ్‌లలో పెట్టుబడి చేయాలి?",
              answer: "మొదట్లో 1-2 మంచి ఫండ్‌లతో మొదలుపెట్టి, అనుభవం వచ్చిన తర్వాత వివిధ కేటగరీలలో పెట్టుబడులు పెట్టవచ్చు."
            },
            {
              question: "మ్యూచువల్ ఫండ్ రాబడిపై ట్యాక్స్ ఎలా ఉంటుంది?",
              answer: "ఈక్విటీ ఫండ్‌లలో 1 సంవత్సరం కంటే ఎక్కువ ఉంచితే LTCG ట్యాక్స్ ₹1 లక్షకు మించిన లాభాలపై 10%. తక్కువ వ్యవధిలో విత్‌డ్రా చేస్తే 15% STCG ట్యాక్స్."
            }
          ]}
          onFAQInteraction={(question) => handleContentEngagement(`faq-${question}`)}
        />

        {/* Cross-Links Block */}
        <CrossLinksBlock onLinkClick={(link) => handleContentEngagement(`cross-link-${link}`)} />
      </div>
    </article>
  );
}