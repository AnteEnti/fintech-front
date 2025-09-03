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

export default function ULIPVsMFComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('ULIP vs MF comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "ఖర్చుల నిర్మాణం",
      ulip: "ప్రీమియం అలొకేషన్, ఫండ్ మేనేజ్‌మెంట్, మార్టలిటీ, అడ్మిన్ చార్జీలు - అధిక ఖర్చులు",
      mf: "ఎక్స్‌పెన్స్ రేషియో మాత్రమే - సాధారణంగా 0.5% నుండి 2.5%",
      ulipIcon: "💸",
      mfIcon: "💰",
      ulipBadge: "అధిక ఖర్చులు",
      mfBadge: "తక్కువ ఖర్చులు"
    },
    {
      aspect: "రిటర్న్ పొటెన్షియల్",
      ulip: "ఫండ్ పెర్ఫార్మెన్స్ మైనస్ చార్జీలు - ప్రారంభ సంవత్సరాల్లో తక్కువ రిటర్న్లు",
      mf: "ప్యూర్ ఫండ్ పెర్ఫార్మెన్స్ - తక్షణ మార్కెట్ పార్టిసిపేషన్",
      ulipIcon: "📉",
      mfIcon: "📈",
      ulipBadge: "చార్జీల ప్రభావం",
      mfBadge: "ప్రత్యక్ష రిటర్న్లు"
    },
    {
      aspect: "బీమా కవరేజ్",
      ulip: "అంతర్నిహిత జీవిత బీమా కవరేజ్ - పరిమిత రక్షణ",
      mf: "బీమా కవరేజ్ లేదు - వేరుగా టర్మ్ ఇన్షూరెన్స్ అవసరం",
      ulipIcon: "🛡️",
      mfIcon: "❌",
      ulipBadge: "కంబైన్డ్ ప్రొడక్ట్",
      mfBadge: "ప్యూర్ ఇన్వెస్ట్‌మెంట్"
    },
    {
      aspect: "వశ్యత",
      ulip: "పరిమిత ఫండ్ ఆప్షన్లు, పాలసీ పరిమితులు",
      mf: "విస్తృత ఫండ్ యూనివర్స్, అపరిమిత ఎంపిక స్వేచ్ఛ",
      ulipIcon: "🔒",
      mfIcon: "🔓",
      ulipBadge: "పరిమిత ఎంపికలు",
      mfBadge: "అపరిమిత వశ్యత"
    },
    {
      aspect: "టాక్స్ ప్రయోజనాలు",
      ulip: "80C డిడక్షన్ + టాక్స్-ఫ్రీ మెచ్యూరిటీ",
      mf: "LTCG టాక్సేషన్, ప్రీమియం డిడక్షన్ లేదు",
      ulipIcon: "📊",
      mfIcon: "💼",
      ulipBadge: "ట్రిపుల్ బెనిఫిట్",
      mfBadge: "LTCG టాక్స్"
    },
    {
      aspect: "లిక్విడిటీ",
      ulip: "5 సంవత్సరాల లాక్-ఇన్, సరెండర్ చార్జీలు",
      mf: "తక్షణ రిడెంప్షన్ (ఎక్సిట్ లోడ్ ఉండవచ్చు)",
      ulipIcon: "⏳",
      mfIcon: "💧",
      ulipBadge: "లాక్-ఇన్ పీరియడ్",
      mfBadge: "హై లిక్విడిటీ"
    }
  ];

  const ulipAdvantages = [
    "పెట్టుబడి మరియు బీమా కంబైన్డ్",
    "80C టాక్స్ డిడక్షన్",
    "టాక్స్-ఫ్రీ మెచ్యూరిటీ",
    "జీవిత బీమా కవరేజ్",
    "క్రమశిక్షణతో పెట్టుబడి",
    "సింగిల్ ప్రోడక్ట్ కన్వీనియన్స్"
  ];

  const ulipDisadvantages = [
    "అధిక చార్జీలు మరియు ఖర్చులు",
    "ప్రారంభ సంవత్సరాల్లో తక్కువ రిటర్న్లు",
    "పరిమిత ఫండ్ ఎంపికలు",
    "5 సంవత్సరాల లాక్-ఇన్",
    "సరెండర్ చార్జీలు",
    "కాంప్లెక్స్ ప్రోడక్ట్ స్ట్రక్చర్"
  ];

  const mfAdvantages = [
    "తక్కువ ఖర్చుల నిర్మాణం",
    "తక్షణ మార్కెట్ పార్టిసిపేషన్",
    "విస్తృత ఫండ్ ఎంపికలు",
    "అధిక లిక్విడిటీ",
    "ట్రాన్స్‌పారెంట్ పెర్ఫార్మెన్స్",
    "ప్రొఫెషనల్ మేనేజ్‌మెంట్"
  ];

  const mfDisadvantages = [
    "బీమా కవరేజ్ లేదు",
    "LTCG టాక్సేషన్",
    "80C డిడక్షన్ లేదు",
    "మార్కెట్ రిస్క్",
    "వేర్వేరుగా బీమా అవసరం",
    "క్రమశిక్షణ స్వీయ నియంత్రణ"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ULIP vs మ్యూచువల్ ఫండ్స్ పోలిక
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          పెట్టుబడి-బీమా కలయిక vs ప్యూర్ ఇన్వెస్ట్‌మెంట్ మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <AlertCircle className="w-4 h-4" />
          <span>ఈ కంటెంట్ విద్యా ప్రయోజనాలకు మాత్రమే. పెట్టుబడి-బీమా ఉత్పత్తుల నిర్ణయాలకు ముందు ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి.</span>
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
                      <Shield className="w-5 h-5 text-blue-600" />
                      ULIP
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      మ్యూచువల్ ఫండ్స్
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
                          <span className="text-lg">{row.ulipIcon}</span>
                          <div>
                            <p>{row.ulip}</p>
                            <Badge variant="outline" className="mt-1 text-blue-600 border-blue-200">
                              {row.ulipBadge}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-lg">{row.mfIcon}</span>
                          <div>
                            <p>{row.mf}</p>
                            <Badge variant="outline" className="mt-1 text-green-600 border-green-200">
                              {row.mfBadge}
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
        {/* ULIP */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              ULIP
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {ulipAdvantages.map((advantage, index) => (
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
                {ulipDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Mutual Funds */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
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
                <Shield className="w-5 h-5" />
                ULIP అనువైనది:
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>సింగిల్ ప్రోడక్ట్ ప్రాధాన్యం:</strong> పెట్టుబడి మరియు బీమా ఒకే చోట
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>టాక్స్ ప్లానింగ్:</strong> 80C డిడక్షన్ మరియు టాక్స్-ఫ్రీ మెచ్యూరిటీ
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>క్రమశిక్షణ అవసరం:</strong> ఫోర్స్డ్ సేవింగ్స్ ప్రాధాన్యత
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>బీగినర్ ఇన్వెస్టర్స్:</strong> సింపుల్ ఆప్రోచ్ కావాలి అనుకునేవారు
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-green-700 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                మ్యూచువల్ ఫండ్స్ + టర్మ్ ఇన్షూరెన్స్:
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>కాస్ట్ ఆప్టిమైజేషన్:</strong> తక్కువ ఖర్చులతో అధిక రిటర్న్లు
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>వశ్యత:</strong> అపరిమిత ఫండ్ ఎంపికలు మరియు లిక్విడిటీ
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>అధిక కవరేజ్:</strong> తక్కువ ప్రీమియంలో అధిక బీమా రక్షణ
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>అడ్వాన్స్డ్ ఇన్వెస్టర్స్:</strong> ఇన్వెస్ట్‌మెంట్ కంట్రోల్ కావాలి అనుకునేవారు
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* "Buy Term, Invest Separately" Philosophy */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-center">
            &ldquo;టర్మ్ కొనండి, వేరుగా పెట్టుబడి చేయండి&rdquo; వ్యూహం
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700">ఎందుకు ఈ వ్యూహం మంచిది?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>కాస్ట్ ఎఫిషెన్సీ:</strong> తక్కువ ఖర్చులతో అధిక రిటర్న్లు</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>అధిక కవరేజ్:</strong> తక్కువ ప్రీమియంలో 10-20 రెట్లు ఎక్కువ బీమా</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>వశ్యత:</strong> ఇన్వెస్ట్‌మెంట్ మరియు ఇన్షూరెన్స్ స్వతంత్ర నియంత్రణ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>లిక్విడిటీ:</strong> అవసరమైనప్పుడు ఇన్వెస్ట్‌మెంట్ రిడీమ్ చేయవచ్చు</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700">ప్రాక్టికల్ ఉదాహరణ:</h4>
              <div className="bg-white rounded-lg p-4 border">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>30 సంవత్సరాల వయస్సు, ₹50L కవరేజ్:</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>ULIP ప్రీమియం:</span>
                    <span className="font-semibold">₹25,000/సంవత్సరం</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>టర్మ్ ప్రీమియం:</span>
                    <span className="font-semibold">₹8,000/సంవత్సరం</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>MF SIP అవకాశం:</span>
                    <span className="font-semibold">₹17,000/సంవత్సరం</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold text-green-700">
                    <span>అదనపు లాభం:</span>
                    <span>బెటర్ రిటర్న్స్ + అధిక కవరేజ్</span>
                  </div>
                </div>
              </div>
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
          <div className="grid md:grid-cols-2 gap-4">
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
              href="/calculators/investment/lumpsum"
              className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'lumpsum')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold">లంప్‌సమ్ కాలిక్యులేటర్</div>
                  <div className="text-sm text-gray-600">ఒకేసారి పెట్టుబడి లెక్కింపు</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/calculators/insurance/life-insurance-needs"
              className="block p-4 bg-white rounded-lg border hover:border-purple-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'life_insurance_needs')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold">లైఫ్ ఇన్షూరెన్స్ అవసరాలు</div>
                  <div className="text-sm text-gray-600">బీమా కవరేజ్ అవసరం లెక్కింపు</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/calculators/insurance/term-plan"
              className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'term_plan')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-orange-600" />
                <div>
                  <div className="font-semibold">టర్మ್ ప్లాన్ కాలిక్యులేటర్</div>
                  <div className="text-sm text-gray-600">టర్మ్ ఇన్షూరెన్స్ ప్రీమియం లెక్కింపు</div>
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
              href="/learn/insurance/term-vs-endowment"
              className="block p-4 border rounded-lg hover:border-green-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'term_vs_endowment')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold">టర్మ్ vs ఎండౌమెంట్</div>
                  <div className="text-sm text-gray-600">బీమా ఉత్పత్తుల పోలిక</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/insurance/insurance-basics"
              className="block p-4 border rounded-lg hover:border-purple-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'insurance_basics')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold">బీమా బేసిక్స్</div>
                  <div className="text-sm text-gray-600">బీమా ఆధారాలు అర్థం చేసుకోండి</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/investments/cost-analysis"
              className="block p-4 border rounded-lg hover:border-orange-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'cost_analysis')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-semibold">ఇన్వెస్ట్‌మెంట్ కాస్ట్ అనాలిసిస్</div>
                  <div className="text-sm text-gray-600">పెట్టుబడి ఖర్చుల ప్రభావం</div>
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
                ULIP లేదా మ్యూచువల్ ఫండ్ - ఏది మంచిది?
              </h4>
              <p className="text-gray-700">
                ఇది మీ ప్రాధాన్యతలను బట్టి ఉంటుంది. కాస్ట్ ఆప్టిమైజేషన్ మరియు వశ్యత కావాలంటే MF + టర్మ్ ఇన్షూరెన్స్ మంచిది. 
                సింగిల్ ప్రోడక్ట్ కన్వీనియన్స్ మరియు టాక్స్ ప్లానింగ్ కావాలంటే ULIP అనువైనది.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ULIP లాక్-ఇన్ పీరియడ్ ఎందుకు ఉంది?
              </h4>
              <p className="text-gray-700">
                5 సంవత్సరాల లాక్-ఇన్ IRDAI రెగ్యులేషన్ ప్రకారం. ఇది ఇన్వెస్టర్స్ దీర్ఘకాలిక పెట్టుబడి క్రమశిక్షణను ప్రోత్సహించడానికి. 
                ఈ కాలంలో సరెండర్ చేస్తే చార్జీలు వర్తిస్తాయి.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ULIP చార్జీలు ఎంత ప్రభావం చూపుతాయి?
              </h4>
              <p className="text-gray-700">
                ప్రారంభ 5 సంవత్సరాలలో చార్జీలు అధికంగా ఉంటాయి. ప్రీమియం అలొకేషన్ చార్జ్ 35-65% వరకు, 
                మార్టలిటీ చార్జ్, అడ్మిన్ చార్జ్ లు కూడా వర్తిస్తాయి. ఇవి రిటర్న్లను గణనీయంగా తగ్గిస్తాయి.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                టర్మ్ ఇన్షూరెన్స్ + MF అప్రోచ్ ఎందుకు బెటర్?
              </h4>
              <p className="text-gray-700">
                టర్మ్ ఇన్షూరెన్స్ తక్కువ ప్రీమియంలో అధిక కవరేజ్ ఇస్తుంది. MF లో తక్కువ ఖర్చులు మరియు మంచి రిటర్న్లు. 
                రెండు కలిపితే ULIP కంటే మంచి రిటర్న్లు మరియు అధిక బీమా కవరేజ్ లభిస్తుంది.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ULIP లో స్విచింగ్ ఎలా పనిచేస్తుంది?
              </h4>
              <p className="text-gray-700">
                చాలా ULIP లలో సంవత్సరానికి 4-12 స్విచింగ్‌లు ఫ్రీ. తర్వాత ప్రతి స్విచ్‌కి ₹100-500 చార్జ్. 
                మ్యూచువల్ ఫండ్స్‌లో అపరిమిత స్విచింగ్ మరియు రిడెంప్షన్ అవకాశం ఉంది.
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
          ఈ సమాచారం కేవలం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. ఇది ఇన్వెస్ట్‌మెంట్ లేదా ఇన్షూరెన్స్ సలహా కాదు. 
          ULIP లేదా మ్యూచువల్ ఫండ్ నిర్ణయాలు తీసుకునే ముందు ఆర్థిక సలహాదారుని సంప్రదించండి. 
          మార్కెట్ రిస్క్‌లు మరియు ఇన్షూరెన్స్ నిబంధనలను జాగ్రత్తగా అర్థం చేసుకోండి.
        </p>
      </div>
    </div>
  );
}