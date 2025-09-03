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
      sip: "నెలవారీ/త్రైమాసిక/వార్షిక క్రమం తప్పకుండా నిర్ణయించిన మొత్తాన్ని పెట్టుబడి చేయడం. సిస్టమేటిక్ మరియు క్రమబద్ధమైన పద్ధతి.",
      lumpsum: "అందుబాటులో ఉన్న మొత్తం డబ్బును ఒకేసారి పెట్టుబడి చేయడం. పెద్ద మొత్తంతో వెంటనే మార్కెట్‌లో ప్రవేశం.",
      sipIcon: "🔄",
      lumpsumIcon: "💰"
    },
    {
      aspect: "కనిష్ట పెట్టుబడి మొత్తం",
      sip: "చాలా తక్కువ మొత్తంతో ప్రారంభం (కేవలం ₹500 నుండి). క్రమంగా పెంచుకోవచ్చు.",
      lumpsum: "పెద్ద మొత్తం అవసరం (సాధారణంగా ₹5,000 లేదా అంతకంటే ఎక్కువ). ఒకేసారి పెద్ద పెట్టుబడి.",
      sipIcon: "💵",
      lumpsumIcon: "💳"
    },
    {
      aspect: "రిస్క్ మేనేజ్మెంట్",
      sip: "రుపాయి కాస్ట్ అవరేజింగ్ ద్వారా మార్కెట్ వోలాటిలిటీ రిస్క్ తగ్గింపు. హెచ్చు తగ్గుల నుండి రక్షణ.",
      lumpsum: "మార్కెట్ టైమింగ్ రిస్క్ ఎక్కువ. ప్రవేశ సమయం మార్కెట్ పీక్‌లో ఉంటే నష్టం.",
      sipIcon: "📊",
      lumpsumIcon: "⚡"
    },
    {
      aspect: "పెట్టుబడి క్రమశిక్షణ",
      sip: "ఆటోమేటిక్ డెబిట్ ద్వారా బలవంతపు పొదుపు. ఎమోషనల్ ట్రేడింగ్ నుండి రక్షణ.",
      lumpsum: "మార్కెట్ టైమింగ్ మరియు వ్యక్తిగత క్రమశిక్షణ అవసరం. ఎమోషనల్ డెసిషన్ మేకింగ్ రిస్క్.",
      sipIcon: "⏰",
      lumpsumIcon: "🎯"
    },
    {
      aspect: "రిటర్న్ పొటెన్షియల్",
      sip: "మార్కెట్ హెచ్చు తగ్గుల అవరేజ్ రిటర్న్స్. స్థిర మరియు అంచనా వేయగల రిటర్న్స్.",
      lumpsum: "మంచి టైమింగ్‌తో అధిక రిటర్న్స్ సాధ్యం. మార్కెట్ ట్రెండ్స్‌పై ఆధారపడుతుంది.",
      sipIcon: "📈",
      lumpsumIcon: "🚀"
    },
    {
      aspect: "ఫ్లెక్సిబిలిటీ & మాడిఫికేషన్",
      sip: "మొత్తం పెంచడం/తగ్గించడం, ఫ్రీక్వెన్సీ మార్చడం, తాత్కాలికంగా ఆపడం సులభం.",
      lumpsum: "అదనపు లంప్‌సమ్ పెట్టుబడికే పరిమితం. పోర్ట్‌ఫోలియో రీబ్యాలెన్సింగ్ అవసరం.",
      sipIcon: "🔓",
      lumpsumIcon: "🔒"
    },
    {
      aspect: "కాస్ట్ & టాక్స్ ఇంప్లికేషన్స్",
      sip: "ట్రాన్జాక్షన్ ఛార్జీలు ఎక్కువ కానీ LTCG టాక్స్ స్టాగర్డ్ రియలైజేషన్ ప్రయోజనం.",
      lumpsum: "తక్కువ ట్రాన్జాక్షన్ కాస్ట్, కానీ పెద్ద మొత్తంలో LTCG టాక్స్ దెబ్బ.",
      sipIcon: "💸",
      lumpsumIcon: "💰"
    },
    {
      aspect: "గోల్ బేస్డ్ ప్లానింగ్",
      sip: "దీర్ఘకాలిక గోల్స్ కోసం ఆదర్శం. రిటైర్మెంట్, చైల్డ్ ఎడ్యూకేషన్ వంటివి.",
      lumpsum: "స్పెసిఫిక్ మైల్‌స్టోన్ అచీవ్మెంట్ కోసం. షార్ట్ టు మీడియం టర్మ్ గోల్స్.",
      sipIcon: "🎯",
      lumpsumIcon: "📍"
    }
  ];

  const sipAdvantages = [
    "రూపాయి కాస్ట్ అవరేజింగ్ ద్వారా రిస్క్ మిటిగేషన్ - మార్కెట్ హెచ్చు తగ్గుల సమయంలో యూనిట్‌ల సరాసరి కొనుగోలు ధర తగ్గుతుంది",
    "తక్కువ కనిష్ట పెట్టుబడితో ప్రారంభం (₹500 నుండి) - జీతం తీసుకున్న వారికి అనుకూలం",
    "ఆటోమేటిక్ పెట్టుబడి ద్వారా క్రమశిక్షణ - ఎమోషనల్ డెసిషన్ మేకింగ్ నుండి రక్షణ",
    "మార్కెట్ టైమింగ్ అవసరం లేదు - ఎప్పుడైనా ప్రారంభించవచ్చు",
    "టాక్స్ ఎఫిషెన్సీ - స్టాగర్డ్ LTCG రియలైజేషన్ అవకాశం",
    "గ్రాడ్యువల్ ఎక్స్పోజర్ - మార్కెట్ వోలాటిలిటీకి తక్కువ సెన్సిటివిటీ"
  ];

  const sipDisadvantages = [
    "బుల్ మార్కెట్‌లో పూర్తిగా పొందే రాబడిని కోల్పోవడం - డాలర్ కాస్ట్ అవరేజింగ్ లేట ఎంట్రీ అర్థం",
    "ట్రాన్జాక్షన్ ఛార్జీలు ఎక్కువసార్లు - ప్రతి నెలా ప్రోసెసింగ్ ఫీస్",
    "కాశ్ ఫ్లో కమిట్‌మెంట్ - రెగ్యులర్ ఇన్కమ్ అవసరం",
    "ఇన్వెస్ట్‌మెంట్ జాప్యం - గ్రాడ్యువల్ డిప్లాయ్‌మెంట్ వల్ల ఆలస్యం"
  ];

  const lumpsumAdvantages = [
    "ఇన్సంట్ మార్కెట్ పార్టిసిపేషన్ - అందుబాటులో ఉన్న మొత్తం వెంటనే పని చేస్తుంది",
    "బుల్ మార్కెట్‌లో మెక్సిమం రిటర్న్స్ - మంచి మార్కెట్ ట్రెండ్‌లో పూర్తి ప్రయోజనం",
    "తక్కువ ట్రాన్జాక్షన్ కాస్ట్స్ - ఒకేసారి పెట్టుబడి చేయడంవల్ల",
    "కాశ్ ఫ్లో స్వేచ్ఛ - మాసిక కమిట్‌మెంట్ అవసరం లేదు",
    "ఆప్పర్చునిటీ సీజింగ్ - మార్కెట్ డిప్‌లను సద్వినియోగం చేసుకోవచ్చు"
  ];

  const lumpsumDisadvantages = [
    "మార్కెట్ టైమింగ్ రిస్క్ - ఎంట్రీ పాయింట్ క్రిటికల్, పీక్‌లో ఎంట్రీ అయితే నష్టం",
    "లార్జ్ కాపిటల్ రిక్వైర్‌మెంట్ - పెట్టుబడికి కనీసం ₹5,000-10,000 అవసరం",
    "ఎమోషనల్ వల్నరాబిలిటీ - మార్కెట్ క్రాష్‌లో భయం, బుల్ మార్కెట్‌లో అత్యాశ",
    "కాన్సెంట్రేటెడ్ రిస్క్ - ఒకే సమయంలో పెట్టుబడి అంటే హై రిస్క్",
    "రీబ్యాలెన్సింగ్ ఇష్యూస్ - పోర్ట్‌ఫోలియో అడ్జస్ట్‌మెంట్‌లకు అదనపు పెట్టుబడి అవసరం"
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
            <Link 
              href="/calculators/investment/lumpsum"
              onClick={() => handleInteraction('calculator_link_click', 'Lump Sum Calculator')}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-900 mb-1">లంప్‌సమ్ కాలిక్యులేటర్</h3>
                      <p className="text-sm text-green-700">లంప్‌సమ్ పెట్టుబడి రాబడి లెక్కించండి</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                          అందుబాటులో
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* MF Returns Calculator */}
            <Link 
              href="/calculators/investment/mf-returns"
              onClick={() => handleInteraction('calculator_link_click', 'MF Returns Calculator')}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow border-purple-200 hover:border-purple-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-purple-900 mb-1">MF రిటర్న్స్ కాలిక్యులేటర్</h3>
                      <p className="text-sm text-purple-700">మ్యూచువల్ ఫండ్ రిటర్న్స్ విశ్లేషణ</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                          అందుబాటులో
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Goal Planner */}
            <Link 
              href="/calculators/planning/goal-planner"
              onClick={() => handleInteraction('calculator_link_click', 'Goal Planner')}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow border-teal-200 hover:border-teal-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-teal-900 mb-1">గోల్ ప్లానర్</h3>
                      <p className="text-sm text-teal-700">నిర్దిష్ట గోల్లకు పెట్టుబడి యోజన</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                          అందుబాటులో
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-teal-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

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
                      <h3 className="font-semibold text-orange-900 mb-1">మ్యూచువల్ ఫండ్స్ శిక్షణ</h3>
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

            {/* Risk vs Return Learn */}
            <Link 
              href="/learn/investments/risk-vs-return"
              onClick={() => handleInteraction('learn_link_click', 'Risk vs Return')}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow border-red-200 hover:border-red-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-900 mb-1">రిస్క్ vs రిటర్న్</h3>
                      <p className="text-sm text-red-700">రిస్క్ మరియు రిటర్న్ బాలెన్స్ అర్థం చేసుకోండి</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                          అందుబాటులో
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-red-600" />
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