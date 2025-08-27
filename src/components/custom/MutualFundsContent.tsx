"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ArticleHeader from "./ArticleHeader";
import RelatedTools from "./RelatedTools";
import CrossLinksBlock from "./CrossLinksBlock";
import LearnFAQ from "./LearnFAQ";
import TelemetryTracker from "./TelemetryTracker";
import { TrendingUp, Shield, Calculator, AlertCircle, CheckCircle, Info } from "lucide-react";

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

  const fundTypes = [
    {
      type: "ఈక్విటీ ఫండ్స్",
      description: "ప్రధానంగా స్టాక్స్‌లో పెట్టుబడి",
      risk: "అధిక రిస్క్",
      returns: "అధిక రాబడి పొటెన్షియల్",
      suitability: "దీర్ఘకాలిక లక్ష్యాలకు (5+ సంవత్సరాలు)",
      color: "bg-red-100 text-red-800"
    },
    {
      type: "డెట్ ఫండ్స్",
      description: "బాండ్స్, డిబెంచర్లలో పెట్టుబడి",
      risk: "తక్కువ నుండి మధ్యమ రిస్క్",
      returns: "స్థిరమైన రాబడి",
      suitability: "స్వల్పకాలిక నుండి మధ్యమకాలిక లక్ష్యాలకు",
      color: "bg-blue-100 text-blue-800"
    },
    {
      type: "హైబ్రిడ్ ఫండ్స్",
      description: "ఈక్విటీ మరియు డెట్ రెండింటిలో పెట్టుబడి",
      risk: "మధ్యమ రిస్క్",
      returns: "సమతుల్యమైన రాబడి",
      suitability: "మోడరేట్ రిస్క్ టాలరెన్స్ ఉన్నవారికి",
      color: "bg-green-100 text-green-800"
    },
    {
      type: "ELSS ఫండ్స్",
      description: "ట్యాక్స్ సేవింగ్ ఈక్విటీ ఫండ్స్",
      risk: "అధిక రిస్క్",
      returns: "అధిక రాబడి + ట్యాక్స్ బెనిఫిట్",
      suitability: "ట్యాక్స్ సేవింగ్ + దీర్ఘకాలిక వెల్త్ క్రియేషన్",
      color: "bg-purple-100 text-purple-800"
    },
    {
      type: "ఇండెక్స్ ఫండ్స్",
      description: "నిర్దిష్ట ఇండెక్స్‌ను ట్రాక్ చేసే ఫండ్స్",
      risk: "మార్కెట్ రిస్క్",
      returns: "మార్కెట్ రిటర్న్లు",
      suitability: "పాసివ్ ఇన్వెస్టింగ్ కోరుకునేవారికి",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  return (
    <article className="max-w-4xl mx-auto">
      <TelemetryTracker />
      
      {/* Hero Heading with Category Tag */}
      <ArticleHeader 
        category="పెట్టుబడులు"
        title="మ్యూచువల్ ఫండ్స్ పూర్తి గైడ్"
        subtitle="మ్యూచువల్ ఫండ్స్ గురించి A నుండి Z వరకు తెలుసుకోండి"
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
                  <Info className="w-5 h-5 text-white" />
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
                  <strong>ముఖ్యమైన లక్షణాలు:</strong> ప్రొఫెషనల్ మేనేజ్‌మెంట్, డైవర్సిఫికేషన్, లిక్విడిటీ, SEBI రెగ్యులేషన్
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SIP vs Lump Sum Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('sip-lumpsum')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                SIP vs లంప్‌సమ్ - ఏ పద్ధతి ఎలా?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    SIP (సిస్టమాటిక్ ఇన్వెస్ట్‌మెంట్ ప్లాన్)
                  </h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• ప్రతి నెలా ఒక నిర్దిష్ట మొత్తం పెట్టుబడి</li>
                    <li>• రుపాయి కాస్ట్ అవరేజింగ్ బెనిఫిట్</li>
                    <li>• తక్కువ మొత్తంతో మొదలుపెట్టవచ్చు (కనిష్టం ₹500)</li>
                    <li>• మార్కెట్ టైమింగ్ రిస్క్ తగ్గుతుంది</li>
                    <li>• క్రమబద్ధమైన పొదుపు అలవాటు</li>
                    <li>• మార్కెట్ వాలటిలిటీ నుండి రక్షణ</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-blue-900 text-sm font-medium">
                      అనువైనది: నిత్య ఆదాయం ఉన్నవారికి, మార్కెట్ టైమింగ్ తెలియనివారికి
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    లంప్‌సమ్ (ఒకేసారి పెట్టుబడి)
                  </h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>• ఒకేసారి పెద్ద మొత్తం పెట్టుబడి</li>
                    <li>• మార్కెట్ దిగువ స్థాయిలో ఉంటే అనుకూలం</li>
                    <li>• ఎక్కువ మొత్తం అవసరం (కనిష్టం ₹5,000-₹10,000)</li>
                    <li>• మార్కెట్ టైమింగ్ కౌశల్యం అవసరం</li>
                    <li>• తక్షణ పూర్తి ఎక్స్‌పోజర్</li>
                    <li>• బల్ అవకాశాలను ఉపయోగించుకోవచ్చు</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-green-900 text-sm font-medium">
                      అనువైనది: పెద్ద మొత్తం ఉన్నవారికి, మార్కెట్ అవగాహన ఉన్నవారికి
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fund Types Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('fund-types')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                మ్యూచువల్ ఫండ్ రకాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ఫండ్ రకం</TableHead>
                      <TableHead>వివరణ</TableHead>
                      <TableHead>రిస్క్ లెవెల్</TableHead>
                      <TableHead>రాబడి</TableHead>
                      <TableHead>అనువైనది</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fundTypes.map((fund, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{fund.type}</TableCell>
                        <TableCell className="text-sm">{fund.description}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={fund.color}>
                            {fund.risk}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{fund.returns}</TableCell>
                        <TableCell className="text-sm">{fund.suitability}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Concepts Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('concepts')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                ముఖ్యమైన కాన్సెప్ట్స్
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* NAV */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NAV (Net Asset Value)</h3>
                <p className="text-gray-700 mb-2">
                  మ్యూచువల్ ఫండ్‌లోని ఒక యూనిట్ విలువ. ఇది ఫండ్‌లోని అన్ని పెట్టుబడుల మొత్తం విలువను 
                  మొత్తం యూనిట్లతో భాగిస్తే వస్తుంది.
                </p>
                <div className="bg-blue-50 p-3 rounded mt-2">
                  <p className="text-blue-800 text-sm">
                    <strong>ఫార్ములా:</strong> NAV = (మొత్తం అసెట్స్ - మొత్తం లైబిలిటీస్) ÷ మొత్తం యూనిట్స్
                  </p>
                </div>
              </div>

              {/* Expense Ratio */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ఎక్స్‌పెన్స్ రేషియో</h3>
                <p className="text-gray-700 mb-2">
                  ఫండ్ మేనేజ్‌మెంట్ కోసం ఫండ్ హౌస్ వసూలుచేసే వార్షిక ఫీ. ఇది మీ రిటర్న్లను ప్రభావితం చేస్తుంది.
                </p>
                <div className="bg-green-50 p-3 rounded mt-2">
                  <p className="text-green-800 text-sm">
                    <strong>ఉదాహరణ:</strong> 2% ఎక్స్‌పెన్స్ రేషియో అంటే మీ పెట్టుబడిలో 2% వార్షికంగా ఫీగా కట్టవుతుంది
                  </p>
                </div>
              </div>

              {/* Exit Load */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ఎగ్జిట్ లోడ్</h3>
                <p className="text-gray-700 mb-2">
                  నిర్దిష్ట వ్యవధిలోపు ఫండ్ నుండి డబ్బు తీసుకుంటే వసూలుచేసే పెనాల్టీ. 
                  సాధారణంగా ఈక్విటీ ఫండ్లలో 1 సంవత్సరం, డెట్ ఫండ్లలో 6 నెలలు.
                </p>
                <div className="bg-red-50 p-3 rounded mt-2">
                  <p className="text-red-800 text-sm">
                    <strong>సాధారణం:</strong> ఈక్విటీ ఫండ్లలో 1% ఎగ్జిట్ లోడ్ (1 సంవత్సరంలోపు విత్‌డ్రాల్‌కు)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Advanced Topics Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('advanced-topics')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                అడ్వాన్స్‌డ్ టాపిక్స్
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* ELSS */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ELSS (Equity Linked Savings Scheme)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">ట్యాక్స్ బెనిఫిట్స్</h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• సెక్షన్ 80C కింద ₹1.5 లక్షల వరకు డిడక్షన్</li>
                      <li>• 3 సంవత్సరాల లాక్-ఇన్ పీరియడ్</li>
                      <li>• LTCG ట్యాక్స్: ₹1 లక్ష మించిన లాభాలపై 10%</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">ప్రత్యేకతలు</h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• అతి తక్కువ లాక్-ఇన్ (PPF కంటే కూడా తక్కువ)</li>
                      <li>• ఈక్విటీ ఫండ్ లాంటి అధిక రిటర్న్ పొటెన్షియల్</li>
                      <li>• SIP ద్వారా పెట్టుబడి చేయవచ్చు</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Systematic Plans */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">సిస్టమాటిక్ ప్లాన్స్</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">STP (Systematic Transfer Plan)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      ఒక ఫండ్ నుండి మరొక ఫండ్‌కు క్రమం తప్పకుండా డబ్బు ట్రాన్స్‌ఫర్ చేయడం.
                    </p>
                    <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                      ఉపయోగం: డెట్ ఫండ్ నుండి ఈక్విటీ ఫండ్‌కు క్రమంగా మార్చి రిస్క్ తగ్గించడం
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">SWP (Systematic Withdrawal Plan)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      ఫండ్ నుండి క్రమం తప్పకుండా నిర్దిష్ట మొత్తం తీసుకోవడం.
                    </p>
                    <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                      ఉపయోగం: రిటైర్‌మెంట్ తర్వాత లేదా రెగ్యులర్ ఇన్కమ్ అవసరం ఉన్నప్పుడు
                    </div>
                  </div>
                </div>
              </div>

              {/* Fund Selection Criteria */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ఫండ్ సెలెక్షన్ క్రైటేరియా</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">పాస్ట్ పర్ఫార్మెన్స్</h4>
                      <p className="text-gray-600 text-sm">3-5 సంవత్సరాల రాబడులను చూడండి, కానీ గత పర్ఫార్మెన్స్ భవిష్యత్తుకు హామీ కాదు</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">ఫండ్ మేనేజర్ ట్రాక్ రికార్డ్</h4>
                      <p className="text-gray-600 text-sm">ఫండ్ మేనేజర్ అనుభవం మరియు వివిధ మార్కెట్ సైకిల్స్‌లో పర్ఫార్మెన్స్</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">ఎక్స్‌పెన్స్ రేషియో</h4>
                      <p className="text-gray-600 text-sm">తక్కువ ఎక్స్‌పెన్స్ రేషియో మంచిది - ఈక్విటీలో 2.5% కంటే తక్కువ, డెట్‌లో 2% కంటే తక్కువ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">AUM (Assets Under Management)</h4>
                      <p className="text-gray-600 text-sm">చాలా చిన్న లేదా చాలా పెద్ద ఫండ్‌లను తప్పించండి - మధ్యస్థ సైజ్ మంచిది</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Risk Factors Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('risk-factors')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <Shield className="w-8 h-8 text-red-600" />
                రిస్క్ ఫాక్టర్స్ అర్థం చేసుకోండి
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-900 mb-1">మార్కెట్ రిస్క్</h4>
                    <p className="text-red-800 text-sm">మార్కెట్ పడిపోవడం వల్ల ఫండ్ విలువ తగ్గుట</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-900 mb-1">క్రెడిట్ రిస్క్</h4>
                    <p className="text-orange-800 text-sm">ఫండ్ పెట్టుబడి చేసిన కంపెనీలు డిఫాల్ట్ అవ్వడం</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-900 mb-1">లిక్విడిటీ రిస్క్</h4>
                    <p className="text-yellow-800 text-sm">అవసరమైనప్పుడు త్వరగా విత్‌డ్రా చేయలేకపోవడం</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-900 mb-1">ఇంట్రెస్ట్ రేట్ రిస్క్</h4>
                    <p className="text-blue-800 text-sm">వడ్డీ రేట్ మార్పుల వల్ల డెట్ ఫండ్‌లపై ప్రభావం</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-900 mb-1">ఇన్ఫ్లేషన్ రిస్క్</h4>
                    <p className="text-purple-800 text-sm">ధరల పెరుగుదల వల్ల రియల్ రిటర్న్లు తగ్గుట</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-900 mb-1">ఫండ్ మేనేజర్ రిస్క్</h4>
                    <p className="text-green-800 text-sm">ఫండ్ మేనేజర్ తప్పుడు నిర్ణయాలు తీసుకోవడం</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">ముఖ్యమైన హెచ్చరిక</h4>
                    <p className="text-red-800 text-sm">
                      మ్యూచువల్ ఫండ్ పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి. గతకాల పర్ఫార్మెన్స్ భవిష్యత్తు రాబడులకు హామీ కాదు. 
                      పెట్టుబడికి ముందు స్కీమ్ ఇన్ఫర్మేషన్ డాక్యుమెంట్ చదవండి.
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                ప్రాక్టికల్ ఉదాహరణలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* SIP Example */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">SIP ఉదాహరణ - రాజ్ కథ</h3>
                  <p className="text-gray-700 mb-3">
                    రాజ్ (వయసు 25) ప్రతి నెలా ₹5,000 SIP మొదలుపెట్టాడు. 12% వార్షిక రాబడితో 15 సంవత్సరాలు కొనసాగించాడు.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-sm text-gray-600">మొత్తం పెట్టుబడి</div>
                      <div className="text-2xl font-bold text-blue-600">₹9,00,000</div>
                      <div className="text-xs text-gray-500">₹5,000 × 180 నెలలు</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-sm text-gray-600">అంచనా రాబడి</div>
                      <div className="text-2xl font-bold text-green-600">₹16,68,000</div>
                      <div className="text-xs text-gray-500">కంపౌండింగ్ మేజిక్</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-sm text-gray-600">మొత్తం విలువ</div>
                      <div className="text-2xl font-bold text-purple-600">₹25,68,000</div>
                      <div className="text-xs text-gray-500">15 సంవత్సరాలలో</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-blue-100 p-3 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>రాజ్ కథ నుండి నేర్చుకోవాలసినది:</strong> తొందరగా మొదలుపెట్టడం, క్రమం తప్పకుండా కొనసాగించడం వల్ల కంపౌండింగ్ మేజిక్ పని చేస్తుంది
                    </p>
                  </div>
                </div>

                {/* Tax Comparison */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">ట్యాక్స్ ఇంప్లికేషన్స్ ఉదాహరణ</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-purple-900 mb-2">ELSS ఫండ్</h4>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• పెట్టుబడి: ₹1,50,000 (సెక్షన్ 80C డిడక్షన్)</li>
                        <li>• 3 సంవత్సరాల తర్వాత విలువ: ₹2,50,000</li>
                        <li>• లాభం: ₹1,00,000</li>
                        <li>• LTCG ట్యాక్స్: ₹0 (₹1 లక్ష వరకు ఎక్సెంప్షన్)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-pink-900 mb-2">రెగ్యులర్ ఈక్విటీ ఫండ్</h4>
                      <ul className="text-pink-800 text-sm space-y-1">
                        <li>• పెట్టుబడి: ₹1,50,000 (ట్యాక్స్ డిడక్షన్ లేదు)</li>
                        <li>• 1+ సంవత్సరాల తర్వాత విలువ: ₹2,00,000</li>
                        <li>• లాభం: ₹50,000</li>
                        <li>• LTCG ట్యాక్స్: ₹0 (₹1 లక్ష లోపు లాభం)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>డిస్‌క్లైమర్:</strong> పై ఉదాహరణలు కేవలం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                    మ్యూచువల్ ఫండ్ పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి. గతకాల పర్ఫార్మెన్స్ భవిష్యత్తు రాబడులకు హామీ కాదు.
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
              answer: "చాలా మ్యూచువల్ ఫండ్‌లలో SIP కోసం కనిష్ఠ ₹500, లంప్‌సమ్ కోసం ₹5,000 నుండి ₹10,000 వరకు ఉంటుంది. కొన్ని ఫండ్‌లలో ₹100 నుండి SIP మొదలుపెట్టవచ్చు."
            },
            {
              question: "మ్యూచువల్ ఫండ్‌లో ఎంత రిస్క్ ఉంది?",
              answer: "మ్యూచువల్ ఫండ్‌లలో రిస్క్ ఫండ్ రకాన్ని బట్టి ఉంటుంది. ఈక్విటీ ఫండ్‌లలో అధిక రిస్క్, డెట్ ఫండ్‌లలో తక్కువ రిస్క్ ఉంటుంది. SIP ద్వారా రిస్క్‌ను కొంత తగ్గించవచ్చు."
            },
            {
              question: "SIP ఎప్పుడు ఆపవచ్చు లేదా పాజ్ చేయవచ్చు?",
              answer: "SIP ను మీరు ఎప్పుడైనా ఆపవచ్చు లేదా పాజ్ చేయవచ్చు. ELSS వంటి లాక్-ఇన్ పీరియడ్ ఉన్న ఫండ్‌లలో మాత్రం ఆ వ్యవధి వరకు విత్‌డ్రా చేయలేరు."
            },
            {
              question: "మ్యూచువల్ ఫండ్ రిటర్న్లపై ట్యాక్స్ ఎలా ఉంటుంది?",
              answer: "ఈక్విటీ ఫండ్‌లలో 1+ సంవత్సరం హోల్డ్ చేస్తే LTCG ట్యాక్స్ (₹1 లక్ష మించిన లాభాలపై 10%). 1 సంవత్సరం కంటే తక్కువ అయితే STCG ట్యాక్స్ 15%. డెట్ ఫండ్‌లలో 3+ సంవత్సరాల తర్వాత LTCG 20% (ఇండెక్సేషన్ బెనిఫిట్‌తో)."
            },
            {
              question: "ఫండ్ సెలెక్షన్ ఎలా చేయాలి?",
              answer: "ఫండ్ సెలెక్షన్ కోసం: 1) మీ రిస్క్ ప్రొఫైల్ గుర్తించండి 2) 3-5 సంవత్సరాల పర్ఫార్మెన్స్ చూడండి 3) ఎక్స్‌పెన్స్ రేషియో తక్కువ ఉండేవి ఎంచుకోండి 4) ఫండ్ మేనేజర్ ట్రాక్ రికార్డ్ చూడండి 5) AUM సైజ్ మధ్యస్థంగా ఉండేవి ఎంచుకోండి."
            },
            {
              question: "మ్యూచువల్ ఫండ్‌లను ఎలా ట్రాక్ చేయాలి?",
              answer: "1) నెలకు ఒకసారి పర్ఫార్మెన్స్ చెక్ చేయండి 2) ఫండ్ హౌస్ వెబ్‌సైట్ లేదా యాప్ ఉపయోగించండి 3) మొబైల్ యాప్‌లలో అలర్ట్స్ సెట్ చేయండి 4) వార్షిక రిపోర్ట్లు చదవండి 5) అవసరమైతే ఫండ్ మార్చండి, కానీ తరచుగా మార్చవద్దు."
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