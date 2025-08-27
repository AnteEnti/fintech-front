"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import ArticleHeader from "./ArticleHeader";
import LearnFAQ from "./LearnFAQ";
import TelemetryTracker from "./TelemetryTracker";
import { 
  Shield, 
  Heart, 
  Calculator,
  FileText,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle,
  Info,
  PiggyBank,
  Building,
  Clock,
  Phone
} from "lucide-react";

export default function LifeInsuranceContent() {
  const handleContentEngagement = (section: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'content_engagement',
          data: {
            page: 'life-insurance-learn',
            section: section,
            timestamp: new Date().toISOString()
          }
        }
      }));
    }
  };

  const lifeInsuranceFAQs = [
    {
      question: "జీవిత బీమా అంటే ఏమిటి?",
      answer: "జీవిత బీమా అనేది మీ జీవితంపై తీసుకునే విధానం. మీకు ఏమైనా జరిగితే, మీ కుటుంబానికి ఆర్థిక రక్షణ అందించడమే దీని ప్రధాన లక్ష్యం. ఇది కుటుంబ భరణ పోషణ దారుని కోల్పోయిన తరువాత కుటుంబ సభ్యులకు ఆర్థిక మద్దతు అందిస్తుంది."
    },
    {
      question: "టర్మ్ ఇన్షూరెన్స్ మరియు ఎండౌమెంట్ ప్లాన్ మధ్య తేడా ఏమిటి?",
      answer: "టర్మ్ ఇన్షూరెన్స్ కేవలం రక్షణ మాత్రమే అందిస్తుంది - తక్కువ ప్రీమియంలకు అధిక కవర్. ఎండౌమెంట్ ప్లాన్ రక్షణతో పాటు పొదుపు కూడా అందిస్తుంది - అధిక ప్రీమియం కానీ మెచ్యూరిటీ బెనిఫిట్ ఉంటుంది."
    },
    {
      question: "ఎంత కవర్ తీసుకోవాలి?",
      answer: "సాధారణంగా మీ వార్షిక ఆదాయంలో 10-15 రెట్లు కవర్ తీసుకోవాలి. ఉదాహరణకు, సంవత్సరానికి ₹5 లక్షలు ఆదాయం ఉంటే ₹50-75 లక్షల కవర్ అవసరం. అప్పులు, భవిష్యత్ అవసరాలు కూడా పరిగణించాలి."
    },
    {
      question: "ఎప్పుడు జీవిత బీమా తీసుకోవాలి?",
      answer: "వివాహం అయిన తరువాత లేదా ఆర్థిక బాధ్యతలు వచ్చిన తరువాత వెంటనే. వయస్సు తక్కువగా ఉన్నప్పుడు ప్రీమియం తక్కువగా ఉంటుంది. 20-30 సంవత్సరాల వయస్సులో తీసుకోవడం మంచిది."
    },
    {
      question: "జీవిత బీమాలో రైడర్లు ఎందుకు అవసరం?",
      answer: "రైడర్లు అదనపు రక్షణ అందిస్తాయి. యాక్సిడెంటల్ డెత్, క్రిటికల్ ఇల్నెస్, డిస్అబిలిటీ వైవర్ ఆఫ్ ప్రీమియం వంటివి తక్కువ అదనపు ఖర్చుతో అదనపు రక్షణ అందిస్తాయి."
    },
    {
      question: "క్లెయిమ్ ప్రక్రియ ఎలా ఉంటుంది?",
      answer: "మరణం జరిగిన వెంటనే ఇన్షూరెన్స్ కంపెనీకి తెలియజేయాలి. డెత్ సర్టిఫికేట్, పాలసీ డాక్యుమెంట్లు, నామినీ గుర్తింపు రుజువులు సమర్పించాలి. సాధారణంగా 30 రోజుల లోపల క్లెయిమ్ సెటిల్ అవుతుంది."
    }
  ];

  const lifeInsuranceTools = [
    {
      title: "లైఫ్ ఇన్షూరెన్స్ నీడ్స్ కాలిక్యులేటర్",
      description: "మీకు ఎంత కవర్ అవసరమో లెక్కించండి",
      href: "/calculators/insurance/life-insurance-needs",
      icon: Calculator,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      available: false
    },
    {
      title: "టర్మ్ ప్లాన్ కాలిక్యులేటర్",
      description: "వివిధ టర్మ్ ప్లాన్ ప్రీమియంలను పోల్చండి",
      href: "/calculators/insurance/term-plan",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      available: false
    },
    {
      title: "ఎండౌమెంట్ ప్లాన్ కాలిక్యులేటర్",
      description: "ఎండౌమెంట్ ప్లాన్ రిటర్న్లను లెక్కించండి",
      href: "/calculators/insurance/endowment-plan",
      icon: PiggyBank,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      available: false
    }
  ];

  const relatedReads = [
    {
      title: "టర్మ్ vs ఎండౌమెంట్ - ఏది మంచిది?",
      description: "రెండు జీవిత బీమా రకాల వివరణాత్మక పోలిక",
      href: "/learn/insurance/term-vs-endowment",
      available: false
    },
    {
      title: "ఇన్షూరెన్స్ ఎందుకు ఇన్వెస్ట్‌మెంట్ కాదు",
      description: "రక్షణ మరియు పెట్టుబడి మధ్య తేడా అర్థం చేసుకోండి",
      href: "/learn/insurance/insurance-vs-investment",
      available: false
    },
    {
      title: "సెక్షన్ 80C టాక్స్ బెనిఫిట్లు",
      description: "జీవిత బీమా ప్రీమియంలపై పన్ను మినహాయింపులు",
      href: "/learn/taxation/section-80c",
      available: false
    },
    {
      title: "ఎమర్జెన్సీ ఫండ్ & లైఫ్ ఇన్షూరెన్స్",
      description: "సంపూర్ణ ఆర్థిక రక్షణ కోసం ప్లానింగ్",
      href: "/learn/money-basics/emergency-fund",
      available: false
    }
  ];

  const insuranceTypes = [
    {
      type: "టర్మ్ ఇన్షూరెన్స్",
      description: "కేవలం రక్షణ - మెచ్యూరిటీ బెనిఫిట్ లేదు",
      premium: "చాలా తక్కువ",
      coverage: "అధిక కవర్",
      suitability: "కుటుంబ బాధ్యతలు ఉన్న అందరికీ",
      color: "bg-green-100 text-green-800"
    },
    {
      type: "ఎండౌమెంట్ ప్లాన్",
      description: "రక్షణ + పొదుపు కలయిక",
      premium: "అధిక ప్రీమియం",
      coverage: "మధ్యమ కవర్",
      suitability: "రక్షణ + పొదుపు రెండూ కావాలంటే",
      color: "bg-blue-100 text-blue-800"
    },
    {
      type: "మనీ బ్యాక్ ప్లాన్",
      description: "కొంత మొత్తం మధ్యలో తిరిగి వస్తుంది",
      premium: "అధిక ప్రీమియం",
      coverage: "తక్కువ కవర్",
      suitability: "క్రమం తప్పకుండా ఆదాయం కావాలంటే",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      type: "ULIP",
      description: "ఇన్షూరెన్స్ + మార్కెట్ ఇన్వెస్ట్‌మెంట్",
      premium: "అధిక ప్రీమియం",
      coverage: "తక్కువ కవర్",
      suitability: "మార్కెట్ రిస్క్ తీసుకోగలిగే వారికి",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <article className="max-w-4xl mx-auto">
      <TelemetryTracker />
      
      {/* Hero Heading with Category Tag */}
      <ArticleHeader 
        category="బీమా"
        title="జీవిత బీమా పూర్తి గైడ్"
        subtitle="కుటుంబ ఆర్థిక రక్షణ కోసం జీవిత బీమా గురించి A నుండి Z వరకు తెలుసుకోండి"
        onView={() => handleContentEngagement('header')}
      />

      {/* Article Content with Proper Typography */}
      <div className="prose prose-lg max-w-none" style={{ lineHeight: '1.6', fontSize: '16px' }}>
        
        {/* Life Insurance Overview Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('overview')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                జీవిత బీమా అంటే ఏమిటి?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>జీవిత బీమా</strong> అనేది మీ జీవితంపై తీసుకునే ఒక ఆర్థిక రక్షణ. మీకు ఏమైనా జరిగినప్పుడు మీ కుటుంబ సభ్యులకు 
                  ఆర్థిక సహాయం అందించడమే దీని ప్రధాన ఉద్దేశం. ఇది కుటుంబ భరణ పోషణ దారుని కోల్పోయిన తరువాత ఆర్థిక భద్రత అందిస్తుంది.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-800">కుటుంబ రక్షణ</h4>
                    <p className="text-sm text-blue-700">ప్రియమైన వారికి ఆర్థిక భద్రత</p>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800">అప్పుల చెల్లింపు</h4>
                    <p className="text-sm text-green-700">హోమ్ లోన్, వ్యక్తిగత అప్పులు</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-800">భవిష్యత్తు లక్ష్యాలు</h4>
                    <p className="text-sm text-purple-700">పిల్లల విద్య, వివాహం</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Insurance Types Comparison */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('insurance-types')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                జీవిత బీమా రకాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-6">
                  {insuranceTypes.map((insurance) => (
                    <div key={insurance.type} className={`p-6 border border-gray-200 rounded-lg`}>
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{insurance.type}</h4>
                        <Badge className={insurance.color}>{insurance.suitability}</Badge>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{insurance.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <span className="text-sm text-gray-600">ప్రీమియం:</span>
                          <p className="font-medium text-gray-900">{insurance.premium}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">కవరేజ్:</span>
                          <p className="font-medium text-gray-900">{insurance.coverage}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">ఎవరికి అనుకూలం:</span>
                          <p className="font-medium text-gray-900">{insurance.suitability}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">సిఫార్సు:</h4>
                  <p className="text-gray-700">
                    <strong>ముందుగా టర్మ్ ఇన్షూరెన్స్</strong> తీసుకోండి అధిక కవర్ కోసం. తర్వాత అవసరమైతే ఇతర రకాల పాలసీలు పరిగణించండి. 
                    రక్షణ మరియు పెట్టుబడిని వేరు వేరుగా చేయడం మంచిది.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Coverage Calculation Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('coverage-calculation')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                కవర్ ఎంత తీసుకోవాలి?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  సరైన కవర్ కాలిక్యులేషన్ చాలా ముఖ్యం. చాలా తక్కువ తీసుకుంటే కుటుంబానికి సరిపోదు, ఎక్కువ తీసుకుంటే ప్రీమియం భారం అవుతుంది.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Income Multiple Method */}
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      ఇన్కమ్ మల్టిపుల్ మెథడ్
                    </h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        వార్షిక ఆదాయం × 10-15 రెట్లు
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        ఉదా: ₹5 లక్షలు ఆదాయం = ₹50-75 లక్షల కవర్
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        సరళమైన మరియు త్వరగా లెక్కించవచ్చు
                      </li>
                    </ul>
                  </div>

                  {/* Needs-Based Method */}
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      అవసరాల ఆధార పద్ధతి
                    </h4>
                    <ul className="space-y-2 text-orange-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        అప్పులు + భవిష్యత్ ఖర్చులు
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        పిల్లల విద్య, వివాహం ఖర్చులు
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        కుటుంబ జీవన ఖర్చుల అంచనా
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Coverage Calculation Example */}
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-4">కవరేజ్ కాలిక్యులేషన్ ఉదాహరణ</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-purple-800 mb-2 font-medium">వ్యక్తి వివరాలు:</p>
                      <ul className="space-y-1 text-purple-700 text-sm">
                        <li>• వార్షిక ఆదాయం: ₹8 లక్షలు</li>
                        <li>• వయస్సు: 30 సంవత్సరాలు</li>
                        <li>• కుటుంబం: భార్య + 2 పిల్లలు</li>
                        <li>• హోమ్ లోన్: ₹40 లక్షలు</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-pink-800 mb-2 font-medium">కవర్ లెక్కింపు:</p>
                      <ul className="space-y-1 text-pink-700 text-sm">
                        <li>• ఇన్కమ్ రిప్లేస్‌మెంట్: ₹80 లక్షలు (10×)</li>
                        <li>• అప్పుల చెల్లింపు: ₹40 లక్షలు</li>
                        <li>• పిల్లల విద్య: ₹20 లక్షలు</li>
                        <li>• <strong>మొత్తం కవర్: ₹1.4 కోట్లు</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Premium Factors Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('premium-factors')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                ప్రీమియంను ప్రభావితం చేసే అంశాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Age Factor */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      వయస్సు
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 20-30 సంవత్సరాలు: చాలా తక్కువ ప్రీమియం</li>
                      <li>• 30-40 సంవత్సరాలు: మధ్యమ ప్రీమియం</li>
                      <li>• 40+ సంవత్సరాలు: అధిక ప్రీమియం</li>
                      <li>• <strong>పాయింట్:</strong> ముందుగా తీసుకోవడం మంచిది</li>
                    </ul>
                  </div>

                  {/* Health Factor */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-600" />
                      ఆరోగ్యం
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• మంచి ఆరోగ్యం: సాధారణ ప్రీమియం</li>
                      <li>• దీర్ఘకాలిక వ్యాధులు: అధిక ప్రీమియం</li>
                      <li>• కొన్నిసార్లు మెడికల్ టెస్ట్ అవసరం</li>
                      <li>• <strong>పాయింట్:</strong> నిజాయితీగా వివరాలు ఇవ్వాలి</li>
                    </ul>
                  </div>

                  {/* Lifestyle Factor */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      జీవనశైలి
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• ధూమపానం: 25-50% అధిక ప్రీమియం</li>
                      <li>• మద్యపానం: రిస్క్ ఆధారంగా పెరుగుతుంది</li>
                      <li>• వ్యాయామం: కొన్నిసార్లు డిస్కౌంట్</li>
                      <li>• <strong>పాయింట్:</strong> ఆరోగ్యకర జీవనం లాభదాయకం</li>
                    </ul>
                  </div>

                  {/* Occupation Factor */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-purple-600" />
                      వృత్తి
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• ఆఫీస్ జాబ్: సాధారణ రేట్</li>
                      <li>• ప్రమాదకర వృత్తులు: అధిక ప్రీమియం</li>
                      <li>• పైలట్, మైనర్: ప్రత్యేక రేట్లు</li>
                      <li>• <strong>పాయింట్:</strong> వృత్తి మార్చినా తెలియజేయాలి</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    ముఖ్యమైన చిట్కాలు:
                  </h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• అన్ని వివరాలు నిజాయితీగా ఇవ్వండి - లేకుంటే క్లెయిమ్ రిజెక్ట్ అవుతుంది</li>
                    <li>• ప్రీమియం తక్కువ చేయడానికి ఆరోగ్యకర జీవనశైలి అనుసరించండి</li>
                    <li>• వయస్సు పెరిగేకొద్దీ ప్రీమియం పెరుగుతుంది - త్వరగా తీసుకోండి</li>
                    <li>• మహిళలకు సాధారణంగా తక్కువ ప్రీమియం (దీర్ఘాయువు కారణంగా)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Riders and Add-ons Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('riders-addons')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                రైడర్లు మరియు అడ్-ఆన్ లు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  రైడర్లు మీ ప్రధాన జీవిత బీమా విధానంతో పాటు అదనపు రక్షణ అందిస్తాయి. తక్కువ అదనపు ఖర్చుతో ఎక్కువ రక్షణ పొందవచ్చు.
                </p>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-100">
                        <TableHead className="font-semibold">రైడర్ రకం</TableHead>
                        <TableHead className="font-semibold">రక్షణ వివరాలు</TableHead>
                        <TableHead className="font-semibold">ఎప్పుడు అవసరం</TableHead>
                        <TableHead className="font-semibold">అంచనా ఖర్చు</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">యాక్సిడెంటల్ డెత్</TableCell>
                        <TableCell>ప్రమాదవశాత్తు మరణంపై అదనపు కవర్</TableCell>
                        <TableCell>రోడ్డు ప్రయాణం ఎక్కువ చేసేవారికి</TableCell>
                        <TableCell>₹200-500/లక్ష</TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50">
                        <TableCell className="font-medium">క్రిటికల్ ఇల్నెస్</TableCell>
                        <TableCell>క్యాన్సర్, గుండె జబ్బు వంటి వ్యాధులకు</TableCell>
                        <TableCell>కుటుంబంలో వంశపారంపర్య వ్యాధులు ఉంటే</TableCell>
                        <TableCell>₹1000-3000/లక్ష</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">డిస్అబిలిటీ</TableCell>
                        <TableCell>శాశ్వత వైకల్యంపై ఆదాయ రక్షణ</TableCell>
                        <TableCell>ప్రమాదకర వృత్తి చేసేవారికి</TableCell>
                        <TableCell>₹500-1500/లక్ష</TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50">
                        <TableCell className="font-medium">వైవర్ ఆఫ్ ప్రీమియం</TableCell>
                        <TableCell>వైకల్యంపై ప్రీమియం చెల్లింపు మాఫీ</TableCell>
                        <TableCell>అందరికీ ఉపయోగకరం</TableCell>
                        <TableCell>₹300-800/లక్ష</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">రైడర్ ఎంపిక చిట్కాలు:</h4>
                  <ul className="space-y-1 text-green-800 text-sm">
                    <li>• అవసరమైన రైడర్లు మాత్రమే తీసుకోండి - అన్నీ అవసరం లేదు</li>
                    <li>• క్రిటికల్ ఇల్నెస్ రైడర్ చాలా ఉపయోగకరం</li>
                    <li>• వైవర్ ఆఫ్ ప్రీమియం అందరికీ మంచిది</li>
                    <li>• కొత్త రైడర్లు తర్వాత జోడించడం కష్టం</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tax Benefits Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('tax-benefits')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                పన్ను మినహాయింపులు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  జీవిత బీమా ప్రీమియంలు మరియు క్లెయిమ్‌లపై పన్ను మినహాయింపులు అందుబాటులో ఉన్నాయి:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Section 80C */}
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      సెక్షన్ 80C - ప్రీమియంపై మినహాయింపు
                    </h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        సంవత్సరానికి ₹1.5 లక్షల వరకు
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        ప్రీమియం కవర్ అమౌంట్‌లో 10%కు మించకూడదు
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        టర్మ్ ఇన్షూరెన్స్‌కు ఈ పరిమితి లేదు
                      </li>
                    </ul>
                  </div>

                  {/* Section 10(10D) */}
                  <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      సెక్షన్ 10(10D) - క్లెయిమ్‌పై మినహాయింపు
                    </h4>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        డెత్ బెనిఫిట్ పూర్తిగా ట్యాక్స్ ఫ్రీ
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        మెచ్యూరిటీ అమౌంట్ కూడా ట్యాక్స్ ఫ్రీ
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        ULIP లకు కొన్ని షరతులు వర్తిస్తాయి
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tax Saving Example */}
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-4">ట్యాక్స్ సేవింగ్ ఉదాహరణ</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-purple-800 mb-2">వార్షిక ఆదాయం: ₹10 లక్షలు (30% ట్యాక్స్ బ్రాకెట్)</p>
                      <ul className="space-y-1 text-purple-700 text-sm">
                        <li>• జీవిత బీమా ప్రీమియం: ₹50,000</li>
                        <li>• 80C కింద ట్యాక్స్ సేవింగ్: ₹15,000</li>
                        <li>• వాస్తవ ప్రీమియం: ₹35,000</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-pink-800 mb-2">₹1 కోటి కవర్‌తో మరణంపై:</p>
                      <ul className="space-y-1 text-pink-700 text-sm">
                        <li>• క్లెయిమ్ అమౌంట్: ₹1 కోటి</li>
                        <li>• ట్యాక్స్: ₹0 (పూర్తిగా ఫ్రీ)</li>
                        <li>• కుటుంబానికి పూర్తి మొత్తం అందుతుంది</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    ట్యాక్స్ నియమాల గమనికలు:
                  </h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• ULIPలకు 5 సంవత్సరాల లాక్-ఇన్ తర్వాత మాత్రమే ట్యాక్స్ ఫ్రీ</li>
                    <li>• ప్రీమియం కవర్‌లో 10%కు మించితే 80C బెనిఫిట్ లేదు (ULIP, ఎండౌమెంట్)</li>
                    <li>• ట్యాక్స్ నియమాలు మార్చవచ్చు - తాజా సమాచారం తెలుసుకోండి</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Claim Process Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('claim-process')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                క్లెయిమ్ ప్రక్రియ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  సరైన సమయంలో క్లెయిమ్ పొందడానికి ఈ ప్రక్రియను తెలుసుకోవడం ముఖ్యం:
                </p>

                <div className="space-y-4">
                  {/* Step-by-step process */}
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-blue-900">వెంటనే సంప్రదించండి</h4>
                        <p className="text-blue-800 text-sm">మరణం జరిగిన వెంటనే ఇన్షూరెన్స్ కంపెనీకు ఫోన్ చేయండి. 24-48 గంటల లోపల తెలియజేయడం మంచిది.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-green-900">డాక్యుమెంట్లు సేకరించండి</h4>
                        <p className="text-green-800 text-sm">డెత్ సర్టిఫికేట్, పాలసీ డాక్యుమెంట్లు, నామినీ గుర్తింపు రుజువులు, మెడికల్ రికార్డులు సేకరించండి.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-purple-900">ఫారం నింపండి</h4>
                        <p className="text-purple-800 text-sm">క్లెయిమ్ ఫారం పూరించి అన్ని అవసరమైన డాక్యుమెంట్లతో జమ చేయండి. కంపెనీ వెబ్‌సైట్ నుండి ఫారం డౌన్‌లోడ్ చేయవచ్చు.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-orange-900">వెంచర్ అండ్ వెయిట్</h4>
                        <p className="text-orange-800 text-sm">కంపెనీ వెరిఫికేషన్ ప్రక్రియ పూర్తి చేస్తుంది. సాధారణంగా 30 రోజుల లోపల క్లెయిమ్ సెటిల్ అవుతుంది.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">అవసరమైన డాక్యుమెంట్లు:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">ప్రాథమిక డాక్యుమెంట్లు:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• క్లెయిమ్ ఫారం</li>
                        <li>• ఒరిజినల్ పాలసీ డాక్యుమెంట్</li>
                        <li>• డెత్ సర్టిఫికేట్</li>
                        <li>• నామినీ గుర్తింపు రుజువు</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">అదనపు డాక్యుమెంట్లు:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• హాస్పిటల్ రికార్డులు (అవసరమైతే)</li>
                        <li>• పోస్టుమార్టం రిపోర్ట్ (అవసరమైతే)</li>
                        <li>• పోలీసు FIR (ప్రమాద మరణాలకు)</li>
                        <li>• ఎంప్లాయర్ సర్టిఫికేట్</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    క్లెయిమ్ రిజెక్షన్ కారణాలు:
                  </h4>
                  <ul className="space-y-1 text-red-800 text-sm">
                    <li>• అప్లికేషన్‌లో తప్పుడు సమాచారం ఇవ్వడం</li>
                    <li>• ప్రీ-ఎగ్జిస్టింగ్ కండిషన్లను దాచడం</li>
                    <li>• ఆత్మహత్య (మొదటి 12 నెలల్లో)</li>
                    <li>• చేతబడిన డాక్యుమెంట్లు సమర్పించకపోవడం</li>
                    <li>• ఎక్స్‌క్లూషన్ కారణాలు (యుద్ధం, డ్రగ్స్ వంటివి)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Tools Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('related-tools')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                సంబంధిత కాలిక్యులేటర్లు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                జీవిత బీమా ప్లానింగ్‌కు సహాయం చేసే కాలిక్యులేటర్లు:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {lifeInsuranceTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div 
                      key={tool.title}
                      className={`${tool.bgColor} ${tool.borderColor} border-2 rounded-lg p-6 transition-all hover:shadow-lg ${tool.available ? '' : 'opacity-75'}`}
                    >
                      <div className="text-center">
                        <div className={`w-12 h-12 ${tool.bgColor.replace('50', '100')} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${tool.color}`} />
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                        
                        <Button 
                          asChild={tool.available}
                          variant={tool.available ? "default" : "secondary"}
                          size="sm"
                          className={`w-full ${tool.available ? '' : 'cursor-not-allowed'}`}
                          disabled={!tool.available}
                          onClick={() => handleContentEngagement('tool-click-' + tool.title)}
                        >
                          {tool.available ? (
                            <Link href={tool.href}>
                              లెక్కించండి
                            </Link>
                          ) : (
                            <span>త్వరలో...</span>
                          )}
                        </Button>
                        
                        {tool.available ? (
                          <div className="mt-2">
                            <Badge variant="default" className="bg-green-600">
                              అందుబాటులో
                            </Badge>
                          </div>
                        ) : (
                          <div className="mt-2">
                            <Badge variant="outline">
                              త్వరలో
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>గమనిక:</strong> ఈ కాలిక్యులేటర్లు అంచనాలు మాత్రమే అందిస్తాయి. 
                  వాస్తవ ప్రీమియంలు మరియు కవర్‌లు వివిధ అంశాలపై ఆధారపడి ఉంటాయి. 
                  సరైన సలహా కోసం ఇన్షూరెన్స్ ఏజెంట్‌ని సంప్రదించండి.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Reads Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('related-reads')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                సంబంధిత వ్యాసాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                జీవిత బీమా మరియు ఆర్థిక ప్లానింగ్ గురించి మరింత తెలుసుకోవడానికి:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {relatedReads.map((article) => (
                  <div 
                    key={article.title}
                    className={`border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md ${article.available ? 'hover:border-blue-300' : 'opacity-75'}`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                    
                    <Button
                      asChild={article.available}
                      variant={article.available ? "outline" : "secondary"}
                      size="sm"
                      className={`${article.available ? '' : 'cursor-not-allowed'}`}
                      disabled={!article.available}
                      onClick={() => handleContentEngagement('article-click-' + article.title)}
                    >
                      {article.available ? (
                        <Link href={article.href}>
                          చదవండి
                        </Link>
                      ) : (
                        <span>త్వరలో...</span>
                      )}
                    </Button>

                    <div className="mt-2">
                      <Badge variant={article.available ? "default" : "outline"} className={article.available ? "bg-blue-600" : ""}>
                        {article.available ? "అందుబాటులో" : "త్వరలో"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('faq')}>
          <LearnFAQ 
            title="జీవిత బీమా గురించిన ప్రధాన ప్రశ్నలు"
            faqs={lifeInsuranceFAQs}
            onFAQInteraction={(question) => handleContentEngagement('faq-' + question)}
          />
        </section>

        {/* Important Notes & Disclaimer */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('important-notes')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                ముఖ్యమైన గమనికలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">IRDAI నియంత్రణ:</h4>
                  <p className="text-red-800 text-sm">
                    భారతదేశంలో అన్ని ఇన్షూరెన్స్ కంపెనీలు IRDAI (Insurance Regulatory and Development Authority of India) 
                    నియంత్రణలో ఉంటాయి. ఏదైనా సమస్య వస్తే IRDAI కు ఫిర్యాదు చేయవచ్చు.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">విద్యా ప్రయోజనం మాత్రమే:</h4>
                  <p className="text-blue-800 text-sm">
                    ఈ కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. ఇది ఇన్షూరెన్స్ సలహా కాదు. 
                    అన్ని బీమా నిర్ణయాలకు ముందు అర్హత కలిగిన ఇన్షూరెన్స్ అడ్వైజర్‌ని సంప్రదించండి.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">నియమ మార్పులు:</h4>
                  <p className="text-yellow-800 text-sm">
                    ఇన్షూరెన్స్ నియమాలు, ప్రీమియం రేట్లు, ట్యాక్స్ బెనిఫిట్లు మార్చవచ్చు. 
                    తాజా సమాచారం కోసం అధికారిక వెబ్‌సైట్లను చూడండి లేదా ఏజెంట్‌ను సంప్రదించండి.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">తాజా సమాచారం కోసం:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• IRDAI అధికారిక వెబ్‌సైట్: www.irdai.gov.in</li>
                    <li>• ఇన్షూరెన్స్ కంపెనీ కస్టమర్ కేర్</li>
                    <li>• లైసెన్స్ పొందిన ఇన్షూరెన్స్ ఏజెంట్</li>
                    <li>• బీమా లోకపాల్ (grievance redressal)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </article>
  );
}