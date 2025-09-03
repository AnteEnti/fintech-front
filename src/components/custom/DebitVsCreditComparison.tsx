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
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle, CreditCard, Shield } from "lucide-react";

export default function DebitVsCreditComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('Debit vs Credit comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "ఖర్చు మూలం",
      debit: "మీ ఖాతా బ్యాలెన్స్ నుండి తక్షణం డబ్బు కట్టుబాటు",
      credit: "బ్యాంకు నుండి రుణం తీసుకుని, తర్వాత చెల్లించడం",
      debitIcon: "💳",
      creditIcon: "💰",
      debitBadge: "మీ డబ్బు",
      creditBadge: "బ్యాంకు డబ్బు"
    },
    {
      aspect: "ఖర్చు నియంత్రణ",
      debit: "ఖాతాలో ఉన్న మొత్తానికే పరిమితం, సహజ నియంత్రణ",
      credit: "క్రెడిట్ లిమిట్ వరకు ఖర్చు చేయవచ్చు, అధిక ఖర్చు రిస్క్",
      debitIcon: "🛡️",
      creditIcon: "⚠️",
      debitBadge: "సురక్షిత లిమిట్",
      creditBadge: "అధిక ఖర్చు రిస్క్"
    },
    {
      aspect: "ఖర్చులు మరియు ఫీజులు",
      debit: "వార్షిక ఫీ, ATM చార్జీలు, అంతర్జాతీయ లావాదేవీ ఫీజులు",
      credit: "వార్షిక ఫీ, వడ్డీ రేట్లు, ఆలస్య చెల్లింపు పెనాల్టీలు",
      debitIcon: "💸",
      creditIcon: "📊",
      debitBadge: "తక్కువ ఫీజులు",
      creditBadge: "అధిక ఖర్చులు"
    },
    {
      aspect: "రివార్డ్స్ మరియు ప్రయోజనాలు",
      debit: "పరిమిత క్యాష్‌బ్యాక్, కొన్ని డిస్కౌంట్లు",
      credit: "విస్తృత రివార్డ్ ప్రోగ్రామ్స్, పాయింట్లు, మైల్స్, లాంజ్ యాక్సెస్",
      debitIcon: "🎁",
      creditIcon: "🏆",
      debitBadge: "తక్కువ రివార్డ్స్",
      creditBadge: "అధిక ప్రయోజనాలు"
    },
    {
      aspect: "క్రెడిట్ స్కోర్ ప్రభావం",
      debit: "క్రెడిట్ చరిత్రపై ఎటువంటి ప్రభావం లేదు",
      credit: "సరైన వినియోగంతో క్రెడిట్ స్కోర్ మెరుగుపడుతుంది",
      debitIcon: "🔄",
      creditIcon: "📈",
      debitBadge: "క్రెడిట్ న్యూట్రల్",
      creditBadge: "క్రెడిట్ బిల్డర్"
    },
    {
      aspect: "భద్రత మరియు మోసం రక్షణ",
      debit: "తక్షణ ఖాతా యాక్సెస్ రిస్క్, పరిమిత డిస్ప్యూట్ ఎంపికలు",
      credit: "శూన్య బాధ్యత రక్షణ, మంచి మోసం పర్యవేక్షణ",
      debitIcon: "🔓",
      creditIcon: "🔒",
      debitBadge: "మధ్యమ భద్రత",
      creditBadge: "అధిక భద్రత"
    }
  ];

  const debitAdvantages = [
    "మీ సొంత డబ్బు మాత్రమే ఖర్చు చేయడం",
    "రుణ ప్రమాదం లేదు",
    "తక్షణ లావాదేవీలు",
    "ATM యాక్సెస్ సౌకర్యం",
    "UPI ఇంటిగ్రేషన్",
    "తక్కువ ఫీజులు"
  ];

  const debitDisadvantages = [
    "తక్కువ రివార్డ్ ప్రోగ్రామ్స్",
    "క్రెడిట్ చరిత్ర నిర్మించదు",
    "పరిమిత మోసం రక్షణ",
    "తక్షణ డబ్బు నష్టం రిస్క్",
    "అంతర్జాతీయ లావాదేవీలలో ఇబ్బందులు"
  ];

  const creditAdvantages = [
    "విస్తృత రివార్డ్ ప్రోగ్రామ్స్",
    "క్రెడిట్ స్కోర్ నిర్మాణం",
    "అత్యవసర పరిస్థితుల్లో సహాయం",
    "శూన్య బాధ్యత మోసం రక్షణ",
    "ప్రీమియం ప్రయోజనాలు",
    "అంతర్జాతీయ వినియోగంకు అనుకూలం"
  ];

  const creditDisadvantages = [
    "వడ్డీ రేట్లు మరియు ఫీజులు",
    "అధిక ఖర్చు ప్రలోభన",
    "రుణ ప్రమాదం",
    "క్రెడిట్ స్కోర్ దెబ్బతినే అవకాశం",
    "సమయానికి చెల్లించాల్సిన బాధ్యత"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          డెబిట్ కార్డ్ vs క్రెడిట్ కార్డ్ పోలిక
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          రెండు కార్డుల మధ్య వ్యత్యాసాలను అర్థం చేసుకుని సరైన ఎంపిక చేసుకోండి
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <AlertCircle className="w-4 h-4" />
          <span>ఈ కంటెంట్ విద్యా ప్రయోజనాలకు మాత్రమే. కార్డ్ ఎంపిక నిర్ణయాలకు ముందు ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి.</span>
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
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      డెబిట్ కార్డ్
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      క్రెడిట్ కార్డ్
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
                          <span className="text-lg">{row.debitIcon}</span>
                          <div>
                            <p>{row.debit}</p>
                            <Badge variant="outline" className="mt-1 text-blue-600 border-blue-200">
                              {row.debitBadge}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-lg">{row.creditIcon}</span>
                          <div>
                            <p>{row.credit}</p>
                            <Badge variant="outline" className="mt-1 text-green-600 border-green-200">
                              {row.creditBadge}
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
        {/* Debit Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              డెబిట్ కార్డ్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {debitAdvantages.map((advantage, index) => (
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
                {debitDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Credit Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              క్రెడిట్ కార్డ్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {creditAdvantages.map((advantage, index) => (
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
                {creditDisadvantages.map((disadvantage, index) => (
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

      {/* Usage Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle>ఎప్పుడు ఏది ఉపయోగించాలి?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                డెబిట్ కార్డ్ అనువైనది:
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>దైనందిన ఖర్చులు:</strong> కిరాణా, పెట్రోల్, రెస్టారెంట్ బిల్లులు
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>ATM నగదు ఉపసంహరణ:</strong> అత్యవసర నగదు అవసరాల కోసం
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>UPI చెల్లింపులు:</strong> స్మార్ట్‌ఫోన్ ఆధారిత చెల్లింపులు
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>కన్జర్వేటివ్ స్పెండర్స్:</strong> ఖర్చు నియంత్రణ కావాలి అనుకునేవారు
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-green-700 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                క్రెడిట్ కార్డ్ అనువైనది:
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>ఆన్‌లైన్ షాపింగ్:</strong> ఇంటర్నెట్ కొనుగోలుల కోసం
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>అంతర్జాతీయ ప్రయాణం:</strong> విదేశీ లావాదేవీలకు
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>క్రెడిట్ స్కోర్ బిల్డింగ్:</strong> క్రెడిట్ చరిత్ర నిర్మణ కోసం
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <div>
                    <strong>రివార్డ్స్ మాక్సిమైజర్స్:</strong> ప్రయోజనాలు పొందాలని అనుకునేవారు
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
              href="/calculators/loan/credit-card"
              className="block p-4 bg-white rounded-lg border hover:border-blue-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'credit_card')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold">క్రెడిట్ కార్డ్ వడ్డీ</div>
                  <div className="text-sm text-gray-600">క్రెడిట్ కార్డ్ ఖర్చు లెక్కింపు</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/calculators/planning/budget"
              className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'budget')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold">బడ్జెట్ ప్లానర్</div>
                  <div className="text-sm text-gray-600">ఖర్చుల ప్రణాళిక చేయండి</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/calculators/loan/emi"
              className="block p-4 bg-white rounded-lg border hover:border-purple-300 transition-colors"
              onClick={() => handleInteraction('calculator_link', 'emi')}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold">EMI కాలిక్యులేటర్</div>
                  <div className="text-sm text-gray-600">రుణ EMI లెక్కింపు</div>
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
              href="/learn/banking-credit/credit-cards"
              className="block p-4 border rounded-lg hover:border-blue-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'credit_cards')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold">క్రెడిట్ కార్డ్లు గైడ్</div>
                  <div className="text-sm text-gray-600">క్రెడిట్ కార్డ్లు గురించి వివరంగా</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/banking-credit/cibil-score"
              className="block p-4 border rounded-lg hover:border-green-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'cibil_score')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold">CIBIL స్కోర్ మేనేజ్‌మెంట్</div>
                  <div className="text-sm text-gray-600">క్రెడిట్ స్కోర్ మెరుగుపరచండి</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/banking-credit/digital-banking"
              className="block p-4 border rounded-lg hover:border-purple-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'digital_banking')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold">డిజిటల్ బ్యాంకింగ్</div>
                  <div className="text-sm text-gray-600">ఆన్‌లైన్ బ్యాంకింగ్ భద్రత</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </Link>

            <Link 
              href="/learn/money-basics/budgeting"
              className="block p-4 border rounded-lg hover:border-orange-300 transition-colors"
              onClick={() => handleInteraction('learn_link', 'budgeting')}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-semibold">బడ్జెటింగ్ మరియు ఖర్చు నియంత్రణ</div>
                  <div className="text-sm text-gray-600">ఖర్చుల ప్రణాళిక మరియు పొదుపు</div>
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
                డెబిట్ కార్డ్ లేదా క్రెడిట్ కార్డ్ - ఏది మంచిది?
              </h4>
              <p className="text-gray-700">
                ఇది మీ ఆర్థిక క్రమశిక్షణ, ఖర్చు అలవాట్లు, మరియు ఆర్థిక లక్ష్యాలను బట్టి ఉంటుంది. 
                దైనందిన ఖర్చులకు డెబిట్ కార్డ్, రివార్డ్స్ మరియు క్రెడిట్ స్కోర్ బిల్డింగ్ కోసం క్రెడిట్ కార్డ్ అనువైనది.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                క్రెడిట్ కార్డ్ వల్ల రుణ ప్రమాదం ఎంతవరకు ఉంది?
              </h4>
              <p className="text-gray-700">
                క్రెడిట్ కార్డ్‌ను బాధ్యత గా ఉపయోగించకపోతే రుణ ప్రమాదం అధికం. 
                పూర్తి మొత్తాన్ని సమయానికి చెల్లించడం, క్రెడిట్ లిమిట్‌లో 30% వరకు మాత్రమే ఉపయోగించడం వంటి నియమాలు పాటించాలి.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                UPI చెల్లింపులకు ఏ కార్డ్ బెస్ట్?
              </h4>
              <p className="text-gray-700">
                UPI చెల్లింపులకు డెబిట్ కార్డ్ మంచిది ఎందుకంటే ఇది మీ ఖాతా నుండి తక్షణం డబ్బు కట్టుబాటు చేస్తుంది. 
                క్రెడిట్ కార్డ్ UPI కూడా అందుబాటులో ఉంది, కానీ అదనపు ఫీజులు ఉండవచ్చు.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                అంతర్జాతీయ ప్రయాణాలకు ఏది బెస్ట్?
              </h4>
              <p className="text-gray-700">
                అంతర్జాతీయ ప్రయాణాలకు క్రెడిట్ కార్డ్ మంచిది. మంచి ఎక్స్‌చేంజ్ రేట్లు, 
                శూన్య బాధ్యత మోసం రక్షణ, మరియు విదేశాలలో విస్తృత అంగీకారం కారణంగా క్రెడిట్ కార్డ్ అనువైనది.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                రెండు కార్డులు కలిసి ఉపయోగించవచ్చా?
              </h4>
              <p className="text-gray-700">
                అవును, చాలా మంది రెండు కార్డులను కలిసి ఉపయోగిస్తారు. 
                దైనందిన ఖర్చులకు డెబిట్ కార్డ్, రివార్డ్స్ మరియు ప్రత్యేక కొనుగోళ్లకు క్రెడిట్ కార్డ్ ఉపయోగించడం మంచిది.
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
          ఈ సమాచారం కేవలం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. ఇది ఆర్థిక సలహా కాదు. 
          కార్డ్ ఎంపిక నిర్ణయాలు తీసుకునే ముందు ఆర్థిక సలహాదారుని సంప్రదించండి. 
          క్రెడిట్ కార్డ్ వినియోగం బాధ్యత గా చేయండి మరియు పూర్తి మొత్తాన్ని సమయానికి చెల్లించండి.
        </p>
      </div>
    </div>
  );
}