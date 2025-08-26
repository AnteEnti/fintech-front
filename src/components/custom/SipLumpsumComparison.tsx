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
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import SipLumpsumFAQ from "./SipLumpsumFAQ";

export default function SipLumpsumComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('Comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "పెట్టుబడి విధానం",
      sip: "నిర్దిష్ట మొత్తాన్ని క్రమం తప్పకుండా (నెలవారీ/త్రైమాసిక) పెట్టుబడి చేయడం",
      lumpsum: "మొత్తం డబ్బును ఒకేసారి పెట్టుబడి చేయడం",
      sipIcon: "🔄",
      lumpsumIcon: "💰"
    },
    {
      aspect: "మొత్తం వెచ్చుబాటు",
      sip: "తక్కువ మొత్తంతో ప్రారంభించవచ్చు (కనిష్టం ₹500)",
      lumpsum: "పెద్ద మొత్తం అవసరం (సాధారణంగా ₹5,000 లేదా అంతకంటే ఎక్కువ)",
      sipIcon: "💵",
      lumpsumIcon: "💳"
    },
    {
      aspect: "మార్కెట్ రిస్క్",
      sip: "రుపాయి కాస్ట్ అవరేజింగ్ ద్వారా రిస్క్ తగ్గుతుంది",
      lumpsum: "మార్కెట్ టైమింగ్ రిస్క్ ఎక్కువ",
      sipIcon: "📊",
      lumpsumIcon: "⚡"
    },
    {
      aspect: "క్రమశిక్షణ",
      sip: "ఆటోమేటిక్ డెబిట్ ద్వారా క్రమశిక్షణ నిర్ధారణ",
      lumpsum: "మార్కెట్ టైమింగ్ మరియు స్వీయ క్రమశిక్షణ అవసరం",
      sipIcon: "⏰",
      lumpsumIcon: "🎯"
    },
    {
      aspect: "రాబడి సామర్థ్యం",
      sip: "మార్కెట్ హెచ్చు తగ్గుల నుండి సమానంగా ప్రయోజనం",
      lumpsum: "మంచి టైమింగ్‌తో ఎక్కువ రాబడి సాధ్యం",
      sipIcon: "📈",
      lumpsumIcon: "🚀"
    },
    {
      aspect: "లిక్విడిటీ",
      sip: "ఎప్పుడైనా SIP ఆపవచ్చు లేదా మొత్తం మార్చవచ్చు",
      lumpsum: "పెట్టుబడి చేసిన వెంటనే మొత్తం మార్కెట్‌లో లాక్",
      sipIcon: "🔓",
      lumpsumIcon: "🔒"
    }
  ];

  const sipAdvantages = [
    "తక్కువ మొత్తంతో పెట్టుబడి ప్రారంభం",
    "మార్కెట్ వోలాటిలిటీ రిస్క్ తగ్గింపు",
    "నిర్దిష్ట క్రమశిక్షణ నిర్మాణం",
    "ఎమోషనల్ ట్రేడింగ్ నుండి రక్షణ"
  ];

  const sipDisadvantages = [
    "మంచి మార్కెట్‌లో పూర్తి ప్రయోజనం పొందలేకపోవడం",
    "వ్యవధుల లోపల పెట్టుబడి జాప్యం",
    "ట్రాన్జాక్షన్ ఛార్జీలు ఎక్కువ అవకాశం"
  ];

  const lumpsumAdvantages = [
    "మంచి మార్కెట్ టైమింగ్‌తో ఎక్కువ రాబడి",
    "వెంటనే పూర్తి మొత్తం పెట్టుబడి",
    "తక్కువ ట్రాన్జాక్షన్ కాస్ట్"
  ];

  const lumpsumDisadvantages = [
    "మార్కెట్ టైమింగ్ రిస్క్ ఎక్కువ",
    "పెద్ద మొత్తం అవసరం",
    "ఎమోషనల్ ట్రేడింగ్ అవకాశం ఎక్కువ"
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            SIP vs లంప్‌సమ్: వ్యత్యాసాలు తెలుసుకోండి
          </CardTitle>
          <p className="text-lg text-gray-600 text-center mt-4">
            రెండు పెట్టుబడి పద్ధతుల మధ్య తేడాలను అర్థం చేసుకోని, మీకు అనుకూలమైన పద్ధతిని ఎంచుకోండి
          </p>
        </CardHeader>
      </Card>

      {/* Main Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            వివరమైన పోలిక
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 font-semibold text-gray-900">పోలిక అంశం</TableHead>
                  <TableHead className="w-1/3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl">🔄</span>
                      <span className="font-semibold text-blue-600">SIP</span>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl">💰</span>
                      <span className="font-semibold text-green-600">లంప్‌సమ్</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-semibold text-gray-900 py-4">
                      {row.aspect}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">{row.sipIcon}</span>
                        <p className="text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                          {row.sip}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">{row.lumpsumIcon}</span>
                        <p className="text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                          {row.lumpsum}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Advantages & Disadvantages */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* SIP Advantages & Disadvantages */}
        <div className="space-y-6">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                SIP యొక్క ప్రయోజనాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {sipAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700" style={{ lineHeight: '1.6' }}>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                SIP యొక్క పరిమితులు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {sipDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">⚠</span>
                    <span className="text-gray-700" style={{ lineHeight: '1.6' }}>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Lump Sum Advantages & Disadvantages */}
        <div className="space-y-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                లంప్‌సమ్ యొక్క ప్రయోజనాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lumpsumAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700" style={{ lineHeight: '1.6' }}>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-900 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-green-600" />
                లంప్‌సమ్ యొక్క పరిమితులు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lumpsumDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">⚠</span>
                    <span className="text-gray-700" style={{ lineHeight: '1.6' }}>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scenarios Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900">
              SIP ఎప్పుడు మంచిది?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-1">📅 రెగ్యులర్ ఇన్కమ్</h4>
                <p className="text-sm text-blue-800">నెలవారీ జీతం పొందుతున్న వ్యక్తులకు అనుకూలం</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-1">📊 మార్కెట్ వోలాటిలిటీ భయం</h4>
                <p className="text-sm text-blue-800">మార్కెట్ హెచ్చు తగ్గుల గురించి చింత ఉన్నవారికి</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-1">🎯 క్రమశిక్షణ అవసరం</h4>
                <p className="text-sm text-blue-800">పెట్టుబడి అలవాట్లు అభివృద్ధి చేసుకోవాలని అనిపిస్తే</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-xl text-green-900">
              లంప్‌సమ్ ఎప్పుడు మంచిది?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-900 mb-1">💰 అకస్మాత్ డబ్బు</h4>
                <p className="text-sm text-green-800">బోనస్, ఇన్సూరెన్స్ మేచూరిటీ వంటి పెద్ద మొత్తం వచ్చినప్పుడు</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-900 mb-1">📈 మార్కెట్ కాన్విక్షన్</h4>
                <p className="text-sm text-green-800">మార్కెట్ దిశ గురించి మంచి అవగాహన ఉన్నప్పుడు</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-900 mb-1">⚡ తక్షణ డిప్లాయ్మెంట్</h4>
                <p className="text-sm text-green-800">మొత్తం డబ్బును వెంటనే పెట్టుబడి చేయాలని అనిపిస్తే</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Tools & Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            సంబంధిత కాలిక్యులేటర్లు మరియు వనరులు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* SIP Calculator */}
            <Link 
              href="/calculators/investment/sip"
              onClick={() => handleInteraction('calculator_link_click', 'SIP Calculator')}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow border-blue-200 hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 mb-1">SIP కాలిక్యులేటర్</h3>
                      <p className="text-sm text-blue-700">SIP పెట్టుబడుల భవిష్యత్తు విలువ లెక్కించండి</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                          అందుబాటులో
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Lump Sum Calculator */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-600 mb-1">లంప్‌సమ్ కాలిక్యులేటర్</h3>
                    <p className="text-sm text-gray-500">లంప్‌సమ్ పెట్టుబడుల రాబడి లెక్కించండి</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Badge variant="secondary" className="bg-gray-200 text-gray-600">
                        త్వరలో
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mutual Funds Learn */}
            <Link 
              href="/learn/investments/mutual-funds"
              onClick={() => handleInteraction('learn_link_click', 'Mutual Funds')}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow border-orange-200 hover:border-orange-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-orange-900 mb-1">మ్యూచువల్ ఫండ్స్</h3>
                      <p className="text-sm text-orange-700">మ్యూచువల్ ఫండ్స్ గురించి వివరంగా తెలుసుకోండి</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                          అందుబాటులో
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-orange-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">
              🧠 ముఖ్యమైన గుర్తుంచవలసినవి
            </h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• రెంటి పద్ధతులూ మ్యూచువల్ ఫండ్ పెట్టుబడులకే వర్తిస్తాయి</li>
              <li>• మీ ఆర్థిక లక్ష్యాలు మరియు రిస్క్ టాలెరెన్స్ ప్రకారం ఎంచుకోండి</li>
              <li>• వైవిధ్యీకరణ కోసం రెంటి పద్ధతులను కలిపి కూడా ఉపయోగించవచ్చు</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <SipLumpsumFAQ />

      {/* Educational Disclaimer */}
      <Card className="bg-blue-50 border border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                విద్యాపరమైన సమాచారం మాత్రమే
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
                ఈ పోలిక పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే అందించబడింది. 
                ఇది పెట్టుబడి సలహా కాదు. SIP లేదా లంప్‌సమ్ ఏ పద్ధతి మీకు అనుకూలమో నిర్ణయించడానికి 
                దయచేసి SEBI రిజిస్టర్డ్ ఆర్థిక సలహాదారుని సంప్రదించండి. 
                మ్యూచువల్ ఫండ్ పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}