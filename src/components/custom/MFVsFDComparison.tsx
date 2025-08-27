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
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle, TrendingUp, Shield } from "lucide-react";

export default function MFVsFDComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('MF vs FD comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "రిస్క్ ప్రొఫైల్",
      mf: "మార్కెట్ హెచ్చు తగ్గులకు లోబడి, మధ్యమ నుండి అధిక రిస్క్",
      fd: "గ్యారంటీడ్ రిటర్న్లు, రిస్క్ చాలా తక్కువ లేదా లేదు",
      mfIcon: "📈",
      fdIcon: "🛡️",
      mfBadge: "అధిక రిస్క్",
      fdBadge: "తక్కువ రిస్క్"
    },
    {
      aspect: "రిటర్న్ పొటెన్షియల్",
      mf: "దీర్ఘకాలికంగా అధిక రాబడిని అందించే అవకాశం (10-15%)",
      fd: "నిర్దిష్ట వడ్డీ రేట్ (సాధారణంగా 5-7%)",
      mfIcon: "🚀",
      fdIcon: "💰",
      mfBadge: "అధిక రాబడి",
      fdBadge: "స్థిరమైన రాబడి"
    },
    {
      aspect: "లిక్విడిటీ",
      mf: "ఎక్సిట్ లోడ్‌తో సహా సులభంగా రిడిమ్ చేయవచ్చు",
      fd: "మెచ్యూరిటీ వరకు లాక్-ఇన్, ప్రిమెచ్యూర్ విత్‌డ్రాల్‌లో పెనాల్టీ",
      mfIcon: "💧",
      fdIcon: "🔒",
      mfBadge: "అధిక లిక్విడిటీ",
      fdBadge: "పరిమిత లిక్విడిటీ"
    },
    {
      aspect: "టాక్స్ ట్రీట్‌మెంట్",
      mf: "కేపిటల్ గెయిన్స్ టాక్స్ (1 సంవత్సరం తర్వాత 10%)",
      fd: "వడ్డీపై ఇన్కమ్ టాక్స్ స్లాబ్ రేట్, TDS 10%",
      mfIcon: "📊",
      fdIcon: "💼",
      mfBadge: "కేపిటల్ గెయిన్స్",
      fdBadge: "ఇన్కమ్ టాక్స్"
    },
    {
      aspect: "ఇన్వెస్ట్‌మెంట్ హొరైజన్",
      mf: "దీర్ఘకాలిక లక్ష్యాలకు అనువైనది (5+ సంవత్సరాలు)",
      fd: "స్వల్పకాలిక మరియు మధ్యమకాలిక లక్ష్యాలకు అనువైనది",
      mfIcon: "⏳",
      fdIcon: "📅",
      mfBadge: "దీర్ఘకాలికం",
      fdBadge: "స్వల్పకాలికం"
    },
    {
      aspect: "మార్కెట్ డిపెండెన్సీ",
      mf: "మార్కెట్ పెర్ఫార్మన్స్‌పై పూర్తిగా ఆధారపడుతుంది",
      fd: "మార్కెట్ పరిస్థితుల నుండి స్వతంత్రం",
      mfIcon: "🎯",
      fdIcon: "🏛️",
      mfBadge: "మార్కెట్ లింక్డ్",
      fdBadge: "మార్కెట్ ఇండిపెండెంట్"
    }
  ];

  const mfAdvantages = [
    "అధిక రిటర్న్ పొటెన్షియల్",
    "ఇన్ఫ్లేషన్ బీటింగ్ రిటర్న్లు",
    "SIP ద్వారా క్రమశిక్షణ",
    "లిక్విడిటీ సౌకర్యం",
    "డైవర్సిఫికేషన్",
    "ప్రొఫెషనల్ మేనేజ్‌మెంట్"
  ];

  const mfDisadvantages = [
    "మార్కెట్ రిస్క్",
    "రిటర్న్లకు గ్యారంటీ లేదు",
    "మేనేజ్‌మెంట్ ఫీస్",
    "మార్కెట్ వాలటిలిటీ",
    "ఎక్సిట్ లోడ్ ఉండవచ్చు"
  ];

  const fdAdvantages = [
    "గ్యారంటీడ్ రిటర్న్లు",
    "కేపిటల్ ప్రొటెక్షన్",
    "DICGC ఇన్షురెన్స్",
    "పురాణ రిస్క్",
    "ప్రిడిక్టబుల్ రాబడులు",
    "సురక్షితమైన పెట్టుబడి"
  ];

  const fdDisadvantages = [
    "తక్కువ రిటర్న్లు",
    "ఇన్ఫ్లేషన్ రిస్క్",
    "లాక్-ఇన్ పీరియడ్",
    "లిక్విడిటీ పరిమితులు",
    "TDS కట్ చేయబడుతుంది",
    "ప్రిమెచ్యూర్ పెనాల్టీ"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          మ్యూచువల్ ఫండ్స్ vs ఫిక్స్‌డ్ డిపాజిట్ పోలిక
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          రెండు పెట్టుబడి పద్ధతుల మధ్య వ్యత్యాసాలను అర్థం చేసుకుని సరైన ఎంపిక చేసుకోండి
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <AlertCircle className="w-4 h-4" />
          <span>విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే - పెట్టుబడి సలహా కాదు</span>
        </div>
      </div>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            వివరమైన పోలిక పట్టిక
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">పోలిక అంశం</TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      మ్యూచువల్ ఫండ్స్
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      ఫిక్స్‌డ్ డిపాజిట్
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      {row.aspect}
                    </TableCell>
                    <TableCell className="text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-lg">{row.mfIcon}</span>
                          <div>
                            <p>{row.mf}</p>
                            <Badge variant="outline" className="mt-1 text-blue-600 border-blue-200">
                              {row.mfBadge}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-lg">{row.fdIcon}</span>
                          <div>
                            <p>{row.fd}</p>
                            <Badge variant="outline" className="mt-1 text-green-600 border-green-200">
                              {row.fdBadge}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Advantages and Disadvantages */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mutual Funds */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              మ్యూచువల్ ఫండ్స్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {mfAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                పరిమితులు
              </h4>
              <ul className="space-y-2">
                {mfDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Fixed Deposits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              ఫిక్స్‌డ్ డిపాజిట్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {fdAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                పరిమితులు
              </h4>
              <ul className="space-y-2">
                {fdDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Investment Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle>ఎప్పుడు ఏది ఎంచుకోవాలి?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                మ్యూచువల్ ఫండ్స్ అనువైనవి:
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>దీర్ఘకాలిక లక్ష్యాలు:</strong> 5+ సంవత్సరాల పెట్టుబడి అవకాశం
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>ఇన్ఫ్లేషన్ బీటింగ్:</strong> ఇన్ఫ్లేషన్ కంటే ఎక్కువ రాబడి అవసరం
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>రిస్క్ టాలరెన్స్:</strong> మధ్యమ నుండి అధిక రిస్క్ తీసుకోగలరు
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>SIP పెట్టుబడి:</strong> క్రమం తప్పకుండా పెట్టుబడి చేయగలరు
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-green-700 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                ఫిక్స్‌డ్ డిపాజిట్ అనువైనది:
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>కేపిటల్ ప్రిజర్వేషన్:</strong> డబ్బు భద్రత ప్రధానం
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>గ్యారంటీడ్ రిటర్న్లు:</strong> నిర్దిష్ట రాబడి అవసరం
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>స్వల్పకాలిక లక్ష్యాలు:</strong> 1-3 సంవత్సరాల పెట్టుబడి
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>కన్జర్వేటివ్ ప్రొఫైల్:</strong> తక్కువ రిస్క్ ఇష్టం
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator Links */}
      <Card className="bg-gradient-to-br from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-center">
            <Calculator className="w-6 h-6 mx-auto mb-2" />
            కాలిక్యులేటర్లు ఉపయోగించండి
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/calculators/investment/sip"
              className="block p-4 bg-white rounded-lg border hover:border-blue-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'sip')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold">SIP కాలిక్యులేటర్</div>
                  <div className="text-sm text-gray-600">మ్యూచువల్ ఫండ్ SIP లెక్కింపు</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/calculators/investment/fd"
              className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'fd')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold">FD కాలిక్యులేటర్</div>
                  <div className="text-sm text-gray-600">ఫిక్స్‌డ్ డిపాజిట్ లెక్కింపు</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/calculators/investment/lumpsum"
              className="block p-4 bg-white rounded-lg border hover:border-purple-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'lumpsum')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold">లంప్‌సమ్ కాలిక్యులేటర్</div>
                  <div className="text-sm text-gray-600">ఒకేసారి పెట్టుబడి లెక్కింపు</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Educational Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            <BookOpen className="w-6 h-6 mx-auto mb-2" />
            మరిన్ని వివరాలు తెలుసుకోండి
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/learn/investments/mutual-funds"
              className="block p-4 border rounded-lg hover:border-blue-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'mutual_funds')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold">మ్యూచువల్ ఫండ్స్ గైడ్</div>
                  <div className="text-sm text-gray-600">మ్యూచువల్ ఫండ్స్ గురించి వివరంగా</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/banking-credit/fd-vs-rd"
              className="block p-4 border rounded-lg hover:border-green-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'fd_vs_rd')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold">FD vs RD పోలిక</div>
                  <div className="text-sm text-gray-600">ఫిక్స్‌డ్ vs రికరింగ్ డిపాజిట్</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/money-basics/interest-basics"
              className="block p-4 border rounded-lg hover:border-purple-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'interest_basics')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold">వడ్డీ రేట్లు అర్థం చేసుకోండి</div>
                  <div className="text-sm text-gray-600">వడ్డీ రేట్ల పనిని తెలుసుకోండి</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/investments/risk-return"
              className="block p-4 border rounded-lg hover:border-orange-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'risk_return')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-semibold">రిస్క్ vs రిటర్న్</div>
                  <div className="text-sm text-gray-600">పెట్టుబడి రిస్క్ అర్థం చేసుకోండి</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>తరచుగా అడిగే ప్రశ్నలు</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                మ్యూచువల్ ఫండ్స్ లేదా FD - ఏది మంచిది?
              </h4>
              <p className="text-gray-700">
                ఇది మీ ఆర్థిక లక్ష్యాలు, రిస్క్ టాలరెన్స్, మరియు పెట్టుబడి కాలవధిని బట్టి ఉంటుంది. 
                దీర్ఘకాలిక లక్ష్యాలకు మ్యూచువల్ ఫండ్స్, స్వల్పకాలిక మరియు సురక్షిత పెట్టుబడికి FD అనువైనది.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                మ్యూచువల్ ఫండ్స్‌లో ఎంత రిస్క్ ఉంది?
              </h4>
              <p className="text-gray-700">
                మ్యూచువల్ ఫండ్స్ మార్కెట్ రిస్క్‌కు లోబడి ఉంటాయి, అంటే రాబడులు హెచ్చు తగ్గులకు లోనవుతాయి. 
                అయితే, దీర్ఘకాలికంగా పెట్టుబడి చేసి SIP ద్వారా రిస్క్‌ను తగ్గించవచ్చు.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                FD లో TDS ఎలా పని చేస్తుంది?
              </h4>
              <p className="text-gray-700">
                వార్షిక వడ్డీ ₹40,000 మించితే 10% TDS కట్టబడుతుంది. సీనియర్ సిటిజన్లకు ₹50,000 వరకు ఎక్సెంప్షన్ ఉంది. 
                మిగిలిన వడ్డీపై మీ ఇన్కమ్ టాక్స్ స్లాబ్ రేట్ ప్రకారం టాక్స్ కట్టాలి.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ఇన్ఫ్లేషన్ ప్రభావం ఎలా ఉంటుంది?
              </h4>
              <p className="text-gray-700">
                ఇన్ఫ్లేషన్ వల్ల డబ్బు విలువ తగ్గుతుంది. FD రేట్లు తక్కువగా ఉంటే రియల్ రిటర్న్లు తగ్గవచ్చు. 
                మ్యూచువల్ ఫండ్స్ దీర్ఘకాలికంగా ఇన్ఫ్లేషన్‌ను మించిన రాబడులను అందించగలవు.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                రెండూ కలిపి పెట్టుబడి చేయవచ్చా?
              </h4>
              <p className="text-gray-700">
                అవును, పోర్ట్‌ఫోలియో డైవర్సిఫికేషన్ కోసం రెండూ కలిపి పెట్టుబడి చేయవచ్చు. 
                ఎమర్జెన్సీ ఫండ్ మరియు స్వల్పకాలిక లక్ష్యాలకు FD, దీర్ఘకాలిక లక్ష్యాలకు మ్యూచువల్ ఫండ్స్ ఉపయోగించండి.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
        <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-3" />
        <h3 className="font-semibold text-amber-900 mb-2">ముఖ్యమైన నిరాకరణ</h3>
        <p className="text-amber-800 text-sm">
          ఈ సమాచారం కేవలం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. ఇది పెట్టుబడి సలహా కాదు. 
          పెట్టుబడి నిర్ణయాలు తీసుకునే ముందు ఆర్థిక సలహాదారుని సంప్రదించండి. 
          మ్యూచువల్ ఫండ్స్ పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి.
        </p>
      </div>
    </div>
  );
}