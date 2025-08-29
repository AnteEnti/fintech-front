"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import ArticleHeader from "./ArticleHeader";
import LearnFAQ from "./LearnFAQ";
import TelemetryTracker from "./TelemetryTracker";
import { 
  FileText, 
  Calculator,
  PiggyBank,
  AlertTriangle,
  Info,
  Building,
  TrendingUp,
  Shield,
  Receipt,
  Calendar,
  Heart,
  HandHeart
} from "lucide-react";

export default function Sections80CContent() {
  const handleContentEngagement = (section: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'content_engagement',
          data: {
            page: 'sections-80c-80d-80g-learn',
            section: section,
            timestamp: new Date().toISOString()
          }
        }
      }));
    }
  };

  const sections80CFAQs = [
    {
      question: "Section 80C, 80D, 80G అంటే ఏమిటి?",
      answer: "Section 80C, 80D, 80G అనేవి ఆదాయపు పన్ను చట్టంలోని వివిధ విభాగాలు. 80C టాక్స్ సేవింగ్ పెట్టుబడులకు, 80D హెల్త్ ఇన్షూరెన్స్ కోసం, 80G దానాలకు సంబంధించిన పన్ను కోతలను అందిస్తాయి."
    },
    {
      question: "Section 80C కింద గరిష్టంగా ఎంత డిడక్షన్ పొందవచ్చు?",
      answer: "Section 80C కింద వార్షికంగా గరిష్టంగా ₹1.5 లక్షల వరకు డిడక్షన్ పొందవచ్చు. ఈ మొత్తం PPF, ELSS, జీవిత బీమా ప్రీమియం, NSC, Tax Saver FD వంటి అన్ని కేటగిరీలను కలిపి ఉంటుంది."
    },
    {
      question: "Section 80D కింద హెల్త్ ఇన్షూరెన్స్ డిడక్షన్ ఎంత?",
      answer: "Section 80D కింద నిమ్నలిఖిత డిడక్షన్లు అందుబాటులో ఉన్నాయి: స్వంత/కుటుంబానికి ₹25,000, తల్లిదండ్రులకు ₹25,000, వారు సీనియర్ సిటిజన్లైతే ₹50,000. ప్రివెంటివ్ హెల్త్ చెక్‌అప్‌కు అదనపు ₹5,000."
    },
    {
      question: "Section 80G కింద దానాలపై ఎలాంటి డిడక్షన్లు ఉన్నాయి?",
      answer: "Section 80G కింద 100% డిడక్షన్ (PM CARES Fund, National Defence Fund), 50% డిడక్షన్ (ఆమోదిత దాతృత్వ సంస్థలు) అందుబాటులో ఉంటుంది. సంస్థ వెబ్‌సైట్‌లో 80G సర్టిఫికేట్ ఉండాలి."
    },
    {
      question: "ELSS మరియు PPF మధ్య తేడా ఏమిటి?",
      answer: "ELSS లాక్-ఇన్ పీరియడ్ 3 సంవత్సరాలు, మార్కెట్ రిస్క్ ఉంది. PPF లాక్-ఇన్ 15 సంవత్సరాలు, రిస్క్ లేదు. ELSS అధిక రిటర్న్ అవకాశం ఉంది, PPF స్థిర వడ్డీ రేట్ ఉంటుంది."
    },
    {
      question: "ఈ సెక్షన్లను ఒకేసారి వాడవచ్చా?",
      answer: "అవును, Section 80C, 80D, 80G అన్నింటిని ఒకేసారి వాడవచ్చు. ఇవి విడివిడిగా లిమిట్లు ఉన్నాయి. మొత్తం మీద గణనీయమైన పన్ను ఆదా సాధ్యం."
    }
  ];

  return (
    <>
      <TelemetryTracker trackPageView={true} />
      
      <ArticleHeader
        category="పన్ను ప్రణాళిక"
        title="Section 80C, 80D, 80G అర్థం చేసుకోండి"
        subtitle="పన్ను కోతల ద్వారా మీ టాక్స్ లయబిలిటీని తగ్గించుకునే మార్గాలు తెలుసుకోండి. PPF, ELSS, హెల్త్ ఇన్షూరెన్స్ మరియు దానాలపై పన్ను ప్రయోజనాలను పొందండి."
        onView={() => handleContentEngagement('article-view')}
      />

      <div className="max-w-4xl mx-auto">
        
        {/* Educational Disclaimer */}
        <div className="mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <strong>విద్యాపరమైన కంటెంట్:</strong> ఈ కంటెంట్ విద్యా ప్రయోజనాల కోసం మాత్రమే. పన్ను నిర్ణయాలకు ముందు టాక్స్ అడ్వైజర్‌ని సంప్రదించండి. ఫలితాలు వ్యక్తిగత పరిస్థితులను అనుసరించి మారవచ్చు.
              </div>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              Section 80C/80D/80G కేటగిరీలు - త్వరిత దృశ్యం
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <PiggyBank className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900">Section 80C</h3>
                <p className="text-sm text-blue-700 mt-1">టాక్స్ సేవింగ్ పెట్టుబడులు</p>
                <p className="font-bold text-blue-800 mt-2">₹1.5L వరకు</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-900">Section 80D</h3>
                <p className="text-sm text-green-700 mt-1">హెల్త్ ఇన్షూరెన్స్</p>
                <p className="font-bold text-green-800 mt-2">₹25K-₹50K వరకు</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <HandHeart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-purple-900">Section 80G</h3>
                <p className="text-sm text-purple-700 mt-1">దాతృత్వ దానాలు</p>
                <p className="font-bold text-purple-800 mt-2">50%-100% వరకు</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 80C - Detailed Content */}
        <Card className="mb-8" onClick={() => handleContentEngagement('section-80c')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PiggyBank className="h-6 w-6 text-blue-600" />
              Section 80C - టాక్స్ సేవింగ్ పెట్టుబడులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ప్రాథమిక వివరాలు</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-2">
                  <strong>లిమిట్:</strong> వార్షికంగా గరిష్టంగా ₹1,50,000 వరకు డిడక్షన్ పొందవచ్చు
                </p>
                <p className="text-blue-800 mb-2">
                  <strong>ప్రయోజనం:</strong> మీ మార్జినల్ టాక్స్ రేట్ ప్రకారం పన్ను ఆదా
                </p>
                <p className="text-blue-800">
                  <strong>ఉదాహరణ:</strong> 30% టాక్స్ బ్రాకెట్‌లో ఉంటే ₹1.5L పెట్టుబడిపై ₹45,000 వరకు పన్ను ఆదా
                </p>
              </div>
            </div>

            {/* Investment Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 80C కేటగిరీలు</h3>
              <Accordion type="single" collapsible className="w-full">
                
                <AccordionItem value="ppf">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-blue-600" />
                      PPF (పబ్లిక్ ప్రావిడెంట్ ఫండ్)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong>లాక్-ఇన్ పీరియడ్:</strong> 15 సంవత్సరాలు</p>
                          <p><strong>వార్షిక లిమిట్:</strong> ₹1.5L వరకు</p>
                          <p><strong>కనిష్ట పెట్టుబడి:</strong> ₹500 వార్షికంగా</p>
                        </div>
                        <div>
                          <p><strong>వడ్డీ రేట్:</strong> ప్రస్తుతం 8.1% (2023-24)</p>
                          <p><strong>పన్ను స్టేటస్:</strong> EEE (Tax-free)</p>
                          <p><strong>రిస్క్ లెవల్:</strong> లేదు (Government backed)</p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-green-800 text-xs">
                          <strong>ప్రత్యేకత:</strong> పెట్టుబడి, వడ్డీ, మెచ్యూరిటీ - అన్నిటిపై పన్ను లేదు. దీర్ఘకాలిక లక్ష్యాలకు అనుకూలం.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="elss">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      ELSS (ఈక్విటీ లింక్డ్ సేవింగ్స్ స్కీమ్)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong>లాక్-ఇన్ పీరియడ్:</strong> 3 సంవత్సరాలు (కనిష్టం)</p>
                          <p><strong>వార్షిక లిమిట్:</strong> ₹1.5L వరకు</p>
                          <p><strong>కనిష్ట పెట్టుబడి:</strong> ₹500 మాసికంగా (SIP)</p>
                        </div>
                        <div>
                          <p><strong>ఆపేక్షిత రిటర్న్:</strong> 10-15% వార్షికంగా</p>
                          <p><strong>రిస్క్ లెవల్:</strong> అధిక (మార్కెట్ లింక్డ్)</p>
                          <p><strong>LTCG టాక్స్:</strong> ₹1L మించితే 10%</p>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded">
                        <p className="text-yellow-800 text-xs">
                          <strong>గమనిక:</strong> అధిక రిటర్న్ అవకాశం ఉన్నప్పటికీ మార్కెట్ రిస్క్ కూడా ఉంటుంది. SIP ద్వారా రిస్క్ తగ్గవచ్చు.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="life-insurance">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-purple-600" />
                      జీవిత బీమా ప్రీమియం
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong>లిమిట్:</strong> వార్షిక ప్రీమియం మొత్తంపై లేదా ₹1.5L</p>
                          <p><strong>అర్హత:</strong> టర్మ్ ప్లాన్లు, ఎండౌమెంట్ పాలసీలు</p>
                          <p><strong>ప్రీమియం లిమిట్:</strong> సమ్ అష్యూర్డ్‌లో 10% వరకు</p>
                        </div>
                        <div>
                          <p><strong>టర్మ్ ప్లాన్:</strong> అధిక కవర్, తక్కువ ప్రీమియం</p>
                          <p><strong>ఎండౌమెంట్:</strong> పెట్టుబడి + బీమా కలిసి</p>
                          <p><strong>మెచ్యూరిటీ:</strong> టాక్స్ ఫ్రీ (కొన్ని షరతులతో)</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-blue-800 text-xs">
                          <strong>సిఫార్సు:</strong> కుటుంబ రక్షణ కోసం టర్మ్ ప్లాన్ మెరుగు. ఇన్వెస్ట్‌మెంట్ కోసం వేరే ఆప్షన్లు పరిశీలించండి.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="others">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-600" />
                      ఇతర 80C ఆప్షన్లు
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <p><strong>NSC (నేషనల్ సేవింగ్స్ సర్టిఫికేట్)</strong></p>
                            <p className="text-gray-600">5 సంవత్సరాల లాక్-ఇన్, స్థిర వడ్డీ</p>
                          </div>
                          <div>
                            <p><strong>Tax Saver FD</strong></p>
                            <p className="text-gray-600">5 సంవత్సరాల లాక్-ఇన్, బ్యాంక్ వడ్డీ రేట్</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p><strong>హోమ్ లోన్ ప్రిన్సిపల్</strong></p>
                            <p className="text-gray-600">గృహ రుణ ప్రధాన చెల్లింపు</p>
                          </div>
                          <div>
                            <p><strong>పిల్లల విద్య ఫీజు</strong></p>
                            <p className="text-gray-600">ఉన్నత విద్య ట్యూషన్ ఖర్చులు</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Section 80D - Health Insurance */}
        <Card className="mb-8" onClick={() => handleContentEngagement('section-80d')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-green-600" />
              Section 80D - హెల్త్ ఇన్షూరెన్స్ డిడక్షన్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Deduction Limits Table */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">డిడక్షన్ లిమిట్లు</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>కేటగిరీ</TableHead>
                      <TableHead>సాధారణ వ్యక్తులకు</TableHead>
                      <TableHead>సీనియర్ సిటిజన్లకు</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">స్వంత/జీవిత భాగస్వామి/పిల్లలు</TableCell>
                      <TableCell>₹25,000</TableCell>
                      <TableCell>₹50,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">తల్లిదండ్రులు</TableCell>
                      <TableCell>₹25,000</TableCell>
                      <TableCell>₹50,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ప్రివెంటివ్ హెల్త్ చెక్‌అప్</TableCell>
                      <TableCell>₹5,000 (అదనపు)</TableCell>
                      <TableCell>₹5,000 (అదనపు)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Eligible Policies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">అర్హత గల పాలసీలు</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">✓ అర్హత ఉన్నవి</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• ఇండివిడ్యూల్ హెల్త్ ఇన్షూరెన్స్</li>
                    <li>• ఫ్యామిలీ ఫ్లోటర్ పాలసీ</li>
                    <li>• టాప్-అప్ హెల్త్ ప్లాన్లు</li>
                    <li>• సీనియర్ సిటిజన్ హెల్త్ ప్లాన్లు</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">✗ అర్హత లేనివి</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• కార్పోరేట్ గ్రూప్ ఇన్షూరెన్స్</li>
                    <li>• ట్రావెల్ ఇన్షూరెన్స్</li>
                    <li>• పర్సనల్ యాక్సిడెంట్ ఇన్షూరెన్స్</li>
                    <li>• లైఫ్ ఇన్షూరెన్స్ రైడర్లు</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">అవసరమైన డాక్యుమెంట్లు</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <ul className="text-sm text-yellow-800 space-y-2">
                  <li className="flex items-center gap-2">
                    <Receipt className="h-4 w-4" />
                    హెల్త్ ఇన్షూరెన్స్ ప్రీమియం రశీదులు
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    ప్రివెంటివ్ హెల్త్ చెక్‌అప్ రశీదులు
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    పాలసీ డాక్యుమెంట్లు మరియు ప్రీమియం సర్టిఫికేట్
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 80G - Donations */}
        <Card className="mb-8" onClick={() => handleContentEngagement('section-80g')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HandHeart className="h-6 w-6 text-purple-600" />
              Section 80G - దాతృత్వ దానాలపై డిడక్షన్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Deduction Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">డిడక్షన్ కేటగిరీలు</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">100% డిడక్షన్</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• PM CARES Fund</li>
                    <li>• National Defence Fund</li>
                    <li>• Prime Minister&apos;s National Relief Fund</li>
                    <li>• National Foundation for Communal Harmony</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">50% డిడక్షన్</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• ఆమోదిత దాతృత్వ సంస్థలు</li>
                    <li>• మతపరమైన ట్రస్ట్‌లు</li>
                    <li>• విద్యా సంస్థలు</li>
                    <li>• వైద్య సేవా సంస్థలు</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Documentation Requirements */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">అవసరమైన డాక్యుమెంట్లు</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">క్లెయిమ్ చేయడానికి అవసరం</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• దానం రశీదు సంస్థ లెటర్ హెడ్‌లో</li>
                    <li>• Section 80G సర్టిఫికేట్ నంబర్</li>
                    <li>• సంస్థ PAN వివరాలు</li>
                    <li>• దానం చేసిన తేదీ మరియు మొత్తం</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Points */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ముఖ్యమైన విషయాలు</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <ul className="text-sm text-yellow-800 space-y-2">
                  <li>• దానం చేసే ముందు సంస్థ వెబ్‌సైట్‌లో 80G ఆమోదం చెక్ చేయండి</li>
                  <li>• కొన్ని దానాలకు గ్రాస్ టోటల్ ఇన్‌కమ్‌లో 10% లిమిట్ ఉంటుంది</li>
                  <li>• కాష్‌లో దానం చేయకండి - చెక్/ఆన్‌లైన్ ట్రాన్సఫర్ వాడండి</li>
                  <li>• ITR ఫైల్ చేసేటప్పుడు రశీదులను సేవ్ చేసి ఉంచండి</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tax Planning Strategy */}
        <Card className="mb-8" onClick={() => handleContentEngagement('tax-planning-strategy')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-orange-600" />
              పన్ను ప్రణాళిక వ్యూహం
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Annual Planning */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">వార్షిక ప్రణాళిక</h3>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-blue-900">April-June</p>
                    <p className="text-sm text-blue-800">PPF, ELSS SIP ప్రారంభించండి</p>
                  </div>
                  <div>
                    <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-green-900">July-September</p>
                    <p className="text-sm text-green-800">హెల్త్ ఇన్షూరెన్స్ రెన్యూ చేయండి</p>
                  </div>
                  <div>
                    <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold text-orange-900">October-December</p>
                    <p className="text-sm text-orange-800">దానాలు, అదనపు పెట్టుబడులు</p>
                  </div>
                  <div>
                    <Calendar className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="font-semibold text-red-900">January-March</p>
                    <p className="text-sm text-red-800">చివరి నిమిషంలో రష్ చేయకండి</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Tax Saving Plan */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">నమూనా పన్ను ఆదా ప్లాన్</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>కేటగిరీ</TableHead>
                      <TableHead>వార్షిక లిమిట్</TableHead>
                      <TableHead>సిఫార్సు మొత్తం</TableHead>
                      <TableHead>సంభావ్య పన్ను ఆదా</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Section 80C</TableCell>
                      <TableCell>₹1,50,000</TableCell>
                      <TableCell>₹1,50,000</TableCell>
                      <TableCell>₹45,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Section 80D (Self)</TableCell>
                      <TableCell>₹25,000</TableCell>
                      <TableCell>₹25,000</TableCell>
                      <TableCell>₹7,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Section 80D (Parents)</TableCell>
                      <TableCell>₹25,000</TableCell>
                      <TableCell>₹25,000</TableCell>
                      <TableCell>₹7,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Section 80G</TableCell>
                      <TableCell>వేరియబుల్</TableCell>
                      <TableCell>₹20,000</TableCell>
                      <TableCell>₹6,000</TableCell>
                    </TableRow>
                    <TableRow className="font-bold">
                      <TableCell>మొత్తం</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>₹2,20,000</TableCell>
                      <TableCell>₹66,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="bg-green-50 p-3 rounded mt-3">
                <p className="text-sm text-green-800">
                  <strong>గమనిక:</strong> ఇది 30% టాక్స్ బ్రాకెట్‌లో ఉన్న వారికి నమూనా. మీ పరిస్థితులను అనుసరించి మొత్తాలు మారవచ్చు.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Tools */}
        <Card className="mb-8" onClick={() => handleContentEngagement('related-tools')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-blue-600" />
              సంబంధిత కాలిక్యులేటర్లు
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/calculators/tax/80c" 
                className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                onClick={() => handleContentEngagement('section-80c-calculator')}
              >
                <div className="flex items-center gap-3">
                  <Calculator className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Section 80C కాలిక్యులేటర్</h3>
                    <p className="text-sm text-blue-700">మీ 80C పెట్టుబడులను ఆప్టిమైజ్ చేయండి</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/calculators/tax/income-tax" 
                className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
                onClick={() => handleContentEngagement('income-tax-calculator')}
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-900">Income Tax కాలిక్యులేటర్</h3>
                    <p className="text-sm text-green-700">మొత్తం పన్ను లెక్కింపు చేయండి</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/calculators/investment/ppf" 
                className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
                onClick={() => handleContentEngagement('ppf-calculator')}
              >
                <div className="flex items-center gap-3">
                  <PiggyBank className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-purple-900">PPF కాలిక్యులేటర్</h3>
                    <p className="text-sm text-purple-700">PPF మెచ్యూరిటీ అంచనా వేయండి</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/calculators/investment/sip" 
                className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-colors"
                onClick={() => handleContentEngagement('sip-elss-calculator')}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                  <div>
                    <h3 className="font-semibold text-orange-900">SIP/ELSS కాలిక్యులేటర్</h3>
                    <p className="text-sm text-orange-700">ELSS SIP రిటర్న్లను లెక్కించండి</p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Related Reads */}
        <Card className="mb-8" onClick={() => handleContentEngagement('related-reads')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-green-600" />
              సంబంధిత వ్యాసాలు
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/learn/taxation/income-tax-basics" 
                className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                onClick={() => handleContentEngagement('income-tax-basics')}
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-blue-900">ఆదాయపు పన్ను బేసిక్స్</h3>
                    <p className="text-sm text-blue-700">పన్ను స్లాబ్‌లు మరియు ప్రాథమిక అంశాలు</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/learn/retirement/ppf" 
                className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
                onClick={() => handleContentEngagement('ppf-learn')}
              >
                <div className="flex items-center gap-3">
                  <PiggyBank className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-900">PPF గైడ్</h3>
                    <p className="text-sm text-green-700">పబ్లిక్ ప్రావిడెంట్ ఫండ్ వివరాలు</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/learn/insurance/life-insurance" 
                className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
                onClick={() => handleContentEngagement('life-insurance-learn')}
              >
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-purple-900">జీవిత బీమా గైడ్</h3>
                    <p className="text-sm text-purple-700">టర్మ్ vs ఎండౌమెంట్ పాలసీలు</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/learn/investments/mutual-funds" 
                className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-colors"
                onClick={() => handleContentEngagement('mutual-funds-learn')}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-semibold text-orange-900">మ్యూచువల్ ఫండ్స్ గైడ్</h3>
                    <p className="text-sm text-orange-700">ELSS మరియు SIP అర్థం చేసుకోండి</p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div onClick={() => handleContentEngagement('faq-section')}>
          <LearnFAQ 
            title="Section 80C/80D/80G - తరచుగా అడిగే ప్రశ్నలు"
            faqs={sections80CFAQs}
            onFAQInteraction={(question) => handleContentEngagement(`faq-${question.slice(0, 20)}`)}
          />
        </div>

        {/* Final Note */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="mb-2">
                <strong>గమనిక:</strong> ఈ వ్యాసంలోని సమాచారం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. పన్ను చట్టాలు మరియు నిబంధనలు తరచుగా మారుతూ ఉంటాయి.
              </p>
              <p>
                మీ వ్యక్తిగత పరిస్థితికి అనుగుణంగా పన్ను ప్రణాళిక కోసం దయచేసి చార్టర్డ్ అకౌంటెంట్ లేదా టాక్స్ అడ్వైజర్‌ని సంప్రదించండి.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}