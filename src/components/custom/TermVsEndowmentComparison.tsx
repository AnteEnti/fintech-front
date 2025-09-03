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
import Link from "next/link";
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle, Shield, TrendingUp, Users, DollarSign, Target, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TermVsEndowmentComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('Insurance comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "రక్షణ ఫోకస్ & కవర్ మొత్తం",
      term: "పియూర్ ప్రొటెక్షన్ - అధిక కవర్ తక్కువ ప్రీమియంలో. కుటుంబ అవసరాలకు సరైన రక్షణ (₹50లక్షలు - ₹2కోట్లు)",
      endowment: "లిమిటెడ్ కవర్ - ప్రీమియంలో పెద్ద భాగం ఇన్వెస్ట్‌మెంట్‌కు వెళ్లడంవల్ల తక్కువ రక్షణ మాత్రమే",
      termIcon: "🛡️",
      endowmentIcon: "📊"
    },
    {
      aspect: "ప్రీమియం కాస్ట్ ఎఫిషియెన్సీ",
      term: "అత్యంత కాస్ట్ ఎఫెక్టివ్ - ₹1లక్ష కవర్‌కు ₹10-30/నెల. 30 ఏళ్ల వ్యక్తికి ₹1కోటి కవర్ = ₹12,000-15,000/సంవత్సరం",
      endowment: "ఎక్కువ ప్రీమియం - అదే కవర్‌కు 10-15 రెట్లు ఎక్కువ ప్రీమియం. ప్రొటెక్షన్ + సేవింగ్స్ కలపడంవల్ల",
      termIcon: "💰",
      endowmentIcon: "💳"
    },
    {
      aspect: "ఇన్వెస్ట్‌మెంట్ కంట్రోల్ & ఫ్లెక్సిబిలిటీ",
      term: "పూర్తి ఇన్వెస్ట్‌మెంట్ ఫ్రీడమ్ - వేరుగా MF/SIP/ETF లలో ఇన్వెస్ట్ చేసి 10-12% రిటర్న్స్ పొందవచ్చు",
      endowment: "లిమిటెడ్ ఇన్వెస్ట్‌మెంట్ ఆప్షన్స్ - ఇన్షూరెన్స్ కంపెనీ నిర్ణయిస్తుంది. 4-6% రిటర్న్స్ మాత్రమే",
      termIcon: "🔓",
      endowmentIcon: "🔒"
    },
    {
      aspect: "మెచ్యూరిటీ బెనిఫిట్స్ & లాంగ్ టర్మ్ వాల్యూ",
      term: "నో మెచ్యూరిటీ బెనిఫిట్ - కానీ వేరుగా ఇన్వెస్ట్ చేసిన మొత్తం చాలా ఎక్కువ ఉంటుంది",
      endowment: "గ్యారంటీడ్ మెచ్యూరిటీ + బోనస్ - కానీ ఇన్ఫ్లేషన్ అడ్జస్ట్ చేస్తే వాస్తవిక రిటర్న్ తక్కువే",
      termIcon: "❌",
      endowmentIcon: "✅"
    },
    {
      aspect: "లిక్విడిటీ & సరెండర్ ఆప్షన్స్",
      term: "నో సరెండర్ వాల్యూ - కానీ వేరుగా ఇన్వెస్ట్ చేసిన మొత్తం అవసరానికి ఉపయోగించవచ్చు",
      endowment: "2-3 సంవత్సరాల తర్వాత సరెండర్ వాల్యూ - కానీ హైవ్ చార్జీస్‌తో నష్టం ఉంటుంది",
      termIcon: "🚫",
      endowmentIcon: "💵"
    },
    {
      aspect: "ట్యాక్స్ ప్లానింగ్ & ఇంప్లికేషన్స్",
      term: "సెక్షన్ 80C డిడక్షన్ + డెత్ బెనిఫిట్ పూర్తిగా ట్యాక్స్ ఫ్రీ. వేరుగా ఇన్వెస్ట్‌మెంట్‌కు 80C/ELSS ఉపయోగించవచ్చు",
      endowment: "80C డిడక్షన్ + మెచ్యూరిటీ ట్యాక్స్ ఫ్రీ (10(10D) కింద). కానీ ఓవరాల్ ట్యాక్స్ ఎఫిషియెన్సీ తక్కువ",
      termIcon: "💸",
      endowmentIcon: "💰"
    },
    {
      aspect: "ఫైనాన్షియల్ డిసిప్లిన్ & బిహేవియర్",
      term: "సెల్ఫ్ డిసిప్లిన్ అవసరం - వేరుగా ఇన్వెస్ట్‌మెంట్ చేయాలి. ఫైనాన్షియల్ ఎడ్యుకేషన్ ఉన్నవారికి మంచిది",
      endowment: "ఫోర్స్డ్ సేవింగ్ - ఆటోమేటిక్ డిసిప్లిన్. ఇన్వెస్ట్‌మెంట్ నాలెడ్జ్ లేనివారికి సులువు",
      termIcon: "🎯",
      endowmentIcon: "⚙️"
    },
    {
      aspect: "లైఫ్ స్టేజ్ అనుకూలత",
      term: "యంగ్ ప్రొఫెషనల్స్ & యంగ్ ఫ్యామిలీస్‌కు పర్ఫెక్ట్ - అధిక రక్షణ అవసరం, తక్కువ బడ్జెట్",
      endowment: "మిడిల్ ఏజ్ కన్జర్వేటివ్ ఇన్వెస్టర్స్‌కు - స్టేబల్ ఇన్కమ్, రిస్క్ అవర్స్ మనస్తత్వం",
      termIcon: "👶",
      endowmentIcon: "👨"
    }
  ];

  const scenarios = [
    {
      title: "టర్మ్ ఇన్షూరెన్స్ ఎప్పుడు ఎంచుకోవాలి?",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      suitable: [
        "కుటుంబ బ్రెడ్‌విన్నర్లు - భార్య, పిల్లలకు హై ప్రొటెక్షన్ అవసరం",
        "25-40 ఏళ్లలో ఉన్న యంగ్ ప్రొఫెషనల్స్ - కెరీర్ గ్రోత్ ఫేజ్‌లో",
        "హోమ్ లోన్, పర్సనల్ లోన్లు ఉన్నవారు - లోన్ అమౌంట్ కవర్ చేయాలి",
        "ఇన్వెస్ట్‌మెంట్ నాలెడ్జ్ ఉన్నవారు - MF/SIP లలో వేరుగా ఇన్వెస్ట్ చేయగలరు",
        "తక్కువ ప్రీమియం బడ్జెట్ (నెలకు ₹1000-5000) - మ్యాక్సిమమ్ కవర్ కావాలి",
        "అధిక ఇన్కమ్ గ్రోత్ ఎక్స్‌పెక్టేషన్స్ - కెరీర్ పీక్ రీచ్ కాలేదు"
      ],
      color: "blue"
    },
    {
      title: "ఎండౌమెంట్ ప్లాన్ ఎప్పుడు కన్సిడర్ చేయవచ్చు?",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      suitable: [
        "45+ ఏజ్‌లో ఉన్న స్టేబల్ ఇన్కమ్ వారు - రిటైర్మెంట్ ప్లానింగ్",
        "ఇన్వెస్ట్‌మెంట్ రిస్క్ తీసుకోలేని కన్జర్వేటివ్ వ్యక్తులు",
        "ఫైనాన్షియల్ డిసిప్లిన్ లేని వారు - ఫోర్స్డ్ సేవింగ్ అవసరం",
        "చిన్న రక్షణ + గ్యారంటీడ్ రిటర్న్ రెండూ కలిపి కావాలనుకుంటే",
        "ట్రెడిషనల్ ఇన్వెస్ట్‌మెంట్ మైండ్‌సెట్ - ష్యూర్ రిటర్న్స్ అంటే నమ్మకం",
        "కంప్లెక్స్ ఇన్వెస్ట్‌మెంట్ డెసిషన్స్ తీసుకోవాలని అనిపించనివారు"
      ],
      color: "green"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          టర్మ్ ఇన్షూరెన్స్ vs ఎండౌమెంట్ ప్లాన్స్ పోలిక
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          టర్మ్ ఇన్షూరెన్స్ మరియు ఎండౌమెంట్ ప్లాన్స్ మధ్య ప్రధాన వ్యత్యాసాలను అర్థం చేసుకోండి. 
          రక్షణ vs పొదుపు, కాస్ట్ డిఫరెన్స్, మరియు మీ ఆర్థిక లక్ష్యాలకు ఏది అనుకూలమో తెలుసుకోండి.
        </p>
      </div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Shield className="w-5 h-5" />
              టర్మ్ ఇన్షూరెన్స్
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 mb-3">
              <strong>కేవలం రక్షణ:</strong> తక్కువ ప్రీమియంలో అధిక లైఫ్ కవర్
            </p>
            <div className="text-sm text-blue-700">
              ✅ అధిక కవర్ తక్కువ కాస్ట్‌లో<br/>
              ✅ యంగ్ ఫ్యామిలీస్‌కు ఆదర్శం<br/>
              ❌ మెచ్యూరిటీ బెనిఫిట్ లేదు
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <TrendingUp className="w-5 h-5" />
              ఎండౌమెంట్ ప్లాన్
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-3">
              <strong>రక్షణ + పొదుపు:</strong> ఇన్షూరెన్స్ మరియు ఇన్వెస్ట్‌మెంట్ కలయిక
            </p>
            <div className="text-sm text-green-700">
              ✅ గ్యారంటీడ్ మెచ్యూరిటీ బెనిఫిట్<br/>
              ✅ ఫోర్స్డ్ సేవింగ్ అలవాటు<br/>
              ❌ అధిక ప్రీమియం, తక్కువ కవర్
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900">వివరమైన పోలిక</CardTitle>
          <p className="text-gray-600">
            టర్మ్ ఇన్షూరెన్స్ మరియు ఎండౌమెంట్ ప్లాన్స్ మధ్య ప్రతి అంశంలో వ్యత్యాసాలు
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">పోలిక అంశం</TableHead>
                  <TableHead className="w-1/3 text-blue-700 bg-blue-50">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      టర్మ్ ఇన్షూరెన్స్
                    </div>
                  </TableHead>
                  <TableHead className="w-1/3 text-green-700 bg-green-50">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      ఎండౌమెంట్ ప్లాన్
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
                    <TableCell className="text-blue-800 bg-blue-25">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">{row.termIcon}</span>
                        <span>{row.term}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-green-800 bg-green-25">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">{row.endowmentIcon}</span>
                        <span>{row.endowment}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* When to Choose What */}
      <div className="grid md:grid-cols-2 gap-6">
        {scenarios.map((scenario, index) => (
          <Card key={index} className={`border-${scenario.color}-200`}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-3 text-${scenario.color}-900`}>
                {scenario.icon}
                {scenario.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {scenario.suitable.map((item, itemIndex) => (
                  <li key={itemIndex} className={`flex items-start gap-2 text-${scenario.color}-800`}>
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Educational Content */}
      <Card>
        <CardHeader>
          <CardTitle>రక్షణ vs పొదుపు అర్థం చేసుకోండి</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="protection-concept">
              <AccordionTrigger onClick={() => handleInteraction('protection_concept_expanded')}>
                రక్షణ (Term Insurance) అంటే ఏమిటి?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <p className="mb-4">
                  టర్మ్ ఇన్షూరెన్స్ కేవలం <strong>రిస్క్ కవర్</strong> అందిస్తుంది. మీకు ఏదైనా జరిగితే, 
                  మీ కుటుంబానికి ఫైనాన్షియల్ సెక్యూరిటీ ఇస్తుంది.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">టర్మ్ ఇన్షూరెన్స్ ప్రత్యేకతలు:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• తక్కువ ప్రీమియంలో అధిక కవర్</li>
                    <li>• కేవలం రక్షణ - ఇన్వెస్ట్‌మెంట్ లేదు</li>
                    <li>• పాలసీ టర్మ్ ముగిసితే మెచ్యూరిటీ బెనిఫిట్ లేదు</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="savings-concept">
              <AccordionTrigger onClick={() => handleInteraction('savings_concept_expanded')}>
                పొదుపు (Endowment Plan) అంటే ఏమిటి?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <p className="mb-4">
                  ఎండౌమెంట్ ప్లాన్ <strong>రక్షణ + పొదుపు</strong> రెండూ అందిస్తుంది. 
                  మీ ప్రీమియంలో కొంత భాగం రక్షణకు, కొంత భాగం ఇన్వెస్ట్‌మెంట్‌కు వెళ్తుంది.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">ఎండౌమెంట్ ప్లాన్ ప్రత్యేకతలు:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• రక్షణ + గ్యారంటీడ్ రిటర్న్స్</li>
                    <li>• మెచ్యూరిటీలో లంప్‌సమ్ మొత్తం</li>
                    <li>• ఫోర్స్డ్ సేవింగ్ ద్వారా క్రమశిక్షణ</li>
                    <li>• సరెండర్ వాల్యూ ఉంటుంది</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="decision-factors">
              <AccordionTrigger onClick={() => handleInteraction('decision_factors_expanded')}>
                ఏది ఎంచుకోవాలి - నిర్ణయం ఎలా తీసుకోవాలి?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-medium text-yellow-900 mb-2">ప్రధాన పరిగణనలు:</h4>
                    <ol className="text-yellow-800 text-sm space-y-2 list-decimal list-inside">
                      <li><strong>బడ్జెట్:</strong> తక్కువ ప్రీమియం ఉంటే టర్మ్, అధిక ప్రీమియం కట్టగలిగితే ఎండౌమెంట్</li>
                      <li><strong>కవర్ అవసరం:</strong> అధిక కవర్ కావాలంటే టర్మ్ ప్లాన్</li>
                      <li><strong>ఇన్వెస్ట్‌మెంట్ పరిజ్ఞానం:</strong> వేరుగా ఇన్వెస్ట్ చేయగలిగితే టర్మ్</li>
                      <li><strong>రిస్క్ టాలరెన్స్:</strong> రిస్క్ ఇష్టపడకపోతే ఎండౌమెంట్</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800 text-sm">
                      <strong>ఎక్స్పర్ట్ సూచన:</strong> చాలా ఫైనాన్షియల్ ఎక్స్పర్ట్లు &ldquo;Term Insurance + Separate Investment&rdquo; 
                      కాంబినేషన్‌ను సూచిస్తారు. దీనివల్ల అధిక రక్షణ + మంచి రిటర్న్స్ రెండూ పొందవచ్చు.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Related Tools & Links */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Calculator className="w-5 h-5" />
              ఇన్షూరెన్స్ కాలిక్యులేటర్లు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link 
              href="/calculators/insurance/term-plan" 
              className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              onClick={() => handleInteraction('term_calculator_click')}
            >
              <div>
                <div className="font-medium text-blue-900">టర్మ్ ప్లాన్ కాలిక్యులేటర్</div>
                <div className="text-sm text-blue-700">టర్మ్ ప్లాన్ ప్రీమియంలను పోల్చండి</div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </Link>
            
            <Link 
              href="/calculators/insurance/life-insurance-needs" 
              className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              onClick={() => handleInteraction('coverage_calculator_click')}
            >
              <div>
                <div className="font-medium text-blue-900">లైఫ్ కవర్ నీడ్స్</div>
                <div className="text-sm text-blue-700">ఎంత కవర్ అవసరమో లెక్కించండి</div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </Link>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <BookOpen className="w-5 h-5" />
              లైఫ్ ఇన్షూరెన్స్ గైడ్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link 
              href="/learn/insurance/life-insurance" 
              className="flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              onClick={() => handleInteraction('learn_basics_click')}
            >
              <div>
                <div className="font-medium text-green-900">లైఫ్ ఇన్షూరెన్స్ బేసిక్స్</div>
                <div className="text-sm text-green-700">ఇన్షూరెన్స్ గురించి పూర్తి గైడ్</div>
              </div>
              <ArrowRight className="w-5 h-5 text-green-600" />
            </Link>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-900">ఇన్వెస్ట్‌మెంట్ vs ఇన్షూరెన్స్</div>
              <div className="text-sm text-gray-600">త్వరలో అందుబాటులో</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Age-Based Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-600" />
            వయసు ఆధారిత సిఫారసులు
          </CardTitle>
          <p className="text-gray-600">
            వివిధ వయస్సు గ్రూపులకు అనుకూలమైన ఇన్షూరెన్స్ వ్యూహం
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">25-35 ఏళ్లు</h4>
              <div className="text-blue-800 text-sm space-y-2">
                <p><strong>సిఫారసు:</strong> టర్మ్ ఇన్షూరెన్స్</p>
                <div className="space-y-1">
                  <p>• కెరీర్ గ్రోత్ ఫేజ్‌లో</p>
                  <p>• తక్కువ ప్రీమియంలో అధిక కవర్</p>
                  <p>• లోన్లు (హోమ్/కార్) కవర్ చేయాలి</p>
                  <p>• వేరుగా SIP/MF లో ఇన్వెస్ట్</p>
                </div>
                <div className="mt-3 p-2 bg-blue-100 rounded text-xs">
                  <strong>ఉదాహరణ:</strong> ₹1కోటి కవర్ = ₹1200-1500/నెల
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">35-45 ఏళ్లు</h4>
              <div className="text-yellow-800 text-sm space-y-2">
                <p><strong>సిఫారసు:</strong> హైబ్రిడ్ అప్రోచ్</p>
                <div className="space-y-1">
                  <p>• మెయిన్ కవర్ - టర్మ్ ఇన్షూరెన్స్</p>
                  <p>• స్మాల్ ఎండౌమెంట్ - ఫోర్స్డ్ సేవింగ్</p>
                  <p>• పిల్లల ఎడ్యుకేషన్ ప్లానింగ్</p>
                  <p>• స్టేబల్ ఇన్కమ్ ఫేజ్‌లో</p>
                </div>
                <div className="mt-3 p-2 bg-yellow-100 rounded text-xs">
                  <strong>ఉదాహరణ:</strong> 80% టర్మ్ + 20% ఎండౌమెంట్
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">45+ ఏళ్లు</h4>
              <div className="text-green-800 text-sm space-y-2">
                <p><strong>సిఫారసు:</strong> ఎండౌమెంట్ కన్సిడర్ చేయవచ్చు</p>
                <div className="space-y-1">
                  <p>• రిటైర్మెంట్ ప్లానింగ్ ఫోకస్</p>
                  <p>• రిస్క్ అవర్షన్ అధికం</p>
                  <p>• గ్యారంటీడ్ రిటర్న్స్ కావాలి</p>
                  <p>• టర్మ్ ప్రీమియం అధికం అవుతుంది</p>
                </div>
                <div className="mt-3 p-2 bg-green-100 rounded text-xs">
                  <strong>గమనిక:</strong> టర్మ్ ప్రీమియం చాలా అధికం అయ్యేలా
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Case Studies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-600" />
            వాస్తవ జీవిత కేస్ స్టడీలు
          </CardTitle>
          <p className="text-gray-600">
            వివిధ వృత్తులలో ఉన్న వ్యక్తులకు అనుకూలమైన ఇన్షూరెన్స్ వ్యూహాలు
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="case-study-it">
              <AccordionTrigger onClick={() => handleInteraction('case_study_it_expanded')}>
                కేస్ స్టడీ 1: IT ప్రొఫెషనల్ (రమేష్ - 28 ఏళ్లు)
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">ప్రొఫైల్:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• వేతనం: ₹12లక్షలు/సంవత్సరం</li>
                      <li>• కుటుంబం: భార్య + 1 పిల్లవాడు</li>
                      <li>• హోమ్ లోన్: ₹60లక్షలు</li>
                      <li>• లక్ష్యాలు: పిల్లల విద్య + రిటైర్మెంట్</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-medium text-blue-900 mb-2">సిఫారసు వ్యూహం:</h5>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• టర్మ్ కవర్: ₹1.5కోట్లు (₹15,000/సంవత్సరం)</li>
                      <li>• SIP: ₹25,000/నెల (MF లలో)</li>
                      <li>• PPF: ₹1.5లక్షలు/సంవత్సరం</li>
                      <li>• ఎండౌమెంట్ అవసరం లేదు</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>ఫలితం:</strong> అధిక రక్షణ + మంచి రిటర్న్స్. 20 సంవత్సరాలలో SIP ద్వారా ₹2-3కోట్లు పొదుపు.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="case-study-business">
              <AccordionTrigger onClick={() => handleInteraction('case_study_business_expanded')}>
                కేస్ స్టడీ 2: వ్యాపారి (సుధాకర్ - 42 ఏళ్లు)
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">ప్రొఫైల్:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• వ్యాపార ఆదాయం: ₹8లక్షలు/సంవత్సరం</li>
                      <li>• కుటుంబం: భార్య + 2 పిల్లలు</li>
                      <li>• ఇన్వెస్ట్‌మెంట్ నాలెడ్జ్: కొద్దిగా</li>
                      <li>• రిస్క్ టాలరెన్స్: తక్కువ</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-medium text-yellow-900 mb-2">సిఫారసు వ్యూహం:</h5>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• టర్మ్ కవర్: ₹75లక్షలు (₹18,000/సంవత్సరం)</li>
                      <li>• ఎండౌమెంట్: ₹15లక్షలు కవర్ (ఫోర్స్డ్ సేవింగ్)</li>
                      <li>• ఫిక్స్‌డ్ డిపాజిట్స్: ₹50,000/సంవత్సరం</li>
                      <li>• PPF: ₹1.5లక్షలు/సంవత్సరం</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-orange-800 text-sm">
                    <strong>కారణం:</strong> వ్యాపార ఆదాయం అస్థిరం + రిస్క్ అవర్షన్ వల్ల మిశ్రమ వ్యూహం అనుకూలం.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="case-study-salaried">
              <AccordionTrigger onClick={() => handleInteraction('case_study_salaried_expanded')}>
                కేస్ స్టడీ 3: జూనియర్ ఉద్యోగి (అనిత - 24 ఏళ్లు)
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">ప్రొఫైల్:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• వేతనం: ₹4లక్షలు/సంవత్సరం</li>
                      <li>• సింగిల్ - పేరెంట్స్‌కు డిపెండెంట్</li>
                      <li>• కెరీర్ షురువాత్ లో</li>
                      <li>• భవిష్యత్తులో వేతనం వృద్ధి అంచనా</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <h5 className="font-medium text-purple-900 mb-2">సిఫారసు వ్యూహం:</h5>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• టర్మ్ కవర్: ₹50లక్షలు (₹6,000/సంవత్సరం)</li>
                      <li>• SIP: ₹5,000/నెల (ELSS + లార్జ్ క్యాప్)</li>
                      <li>• ఎమర్జెన్సీ ఫండ్: 6 నెలల ఖర్చులు</li>
                      <li>• ఎండౌమెంట్ అవసరం లేదు</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 text-sm">
                    <strong>దృష్టి:</strong> కెరీర్ గ్రోత్‌తో పాటు కవర్ పెంచుకోవచ్చు. యంగ్ ఏజ్‌లో తక్కువ ప్రీమియం ప్రయోజనం.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Decision Making Framework */}
      <Card className="border-2 border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-900">
            <Target className="w-6 h-6" />
            నిర్णయ తీసుకునే ఫ్రేమ్‌వర్క్
          </CardTitle>
          <p className="text-gray-600">
            5 సులభ దశలలో మీకు అనుకూలమైన ఇన్షూరెన్స్ వ్యూహాన్ని ఎంచుకోండి
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">మీ కవర్ అవసరాన్ని లెక్కించండి</h4>
                <p className="text-gray-700 text-sm mb-2">
                  లైఫ్ కవర్ = (వార్షిక ఆదాయం × 10-15) + ఋణాలు + భవిష్యత్ లక్ష్యాలు - ఉన్న ఆస్తులు
                </p>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-indigo-800 text-sm">
                    <strong>ఉదాహరణ:</strong> ₹8లక్షలు వేతనం = కనీసం ₹80లక్షలు - ₹1.2కోట్లు కవర్ అవసరం
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">మీ బడ్జెట్‌ను నిర్ణయించండి</h4>
                <p className="text-gray-700 text-sm mb-2">
                  ఇన్షూరెన్స్‌కు వార్షిక ఆదాయంలో 5-10% కేటాయించండి
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>టర్మ్:</strong> తక్కువ బడ్జెట్‌లో అధిక కవర్
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 text-sm">
                      <strong>ఎండౌమెంట్:</strong> అధిక బడ్జెట్‌లో తక్కువ కవర్
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">మీ ఇన్వెస్ట్‌మెంట్ పరిజ్ఞానాన్ని అంచనా వేయండి</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 border-l-4 border-blue-400 bg-blue-50">
                    <p className="text-blue-900 font-medium text-sm mb-1">అధిక పరిజ్ఞానం ఉంటే:</p>
                    <p className="text-blue-800 text-xs">టర్మ్ + వేరుగా MF/SIP లో ఇన్వెస్ట్</p>
                  </div>
                  <div className="p-3 border-l-4 border-green-400 bg-green-50">
                    <p className="text-green-900 font-medium text-sm mb-1">తక్కువ పరిజ్ఞానం ఉంటే:</p>
                    <p className="text-green-800 text-xs">ఎండౌమెంట్ లేదా హైబ్రిడ్ అప్రోచ్</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-sm">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">మీ రిస్క్ టాలరెన్స్‌ను అర్థం చేసుకోండి</h4>
                <p className="text-gray-700 text-sm mb-2">
                  మార్కెట్ రిస్క్‌లు తీసుకోవాలనుకుంటున్నారా లేదా గ్యారంటీడ్ రిటర్న్స్ కావాలా?
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800 text-sm">
                    <strong>గుర్తుంచుకోండి:</strong> అధిక రిస్క్ = అధిక రిటర్న్ పొటెన్షియల్, తక్కువ రిస్క్ = తక్కువ కానీ స్థిరమైన రిటర్న్స్
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-sm">5</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">మీ చివరి నిర్ణయం</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">
                        <strong>టర్మ్ ఎంచుకోండి:</strong> అధిక కవర్ కావాలి + వేరుగా ఇన్వెస్ట్ చేయగలరు
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">
                        <strong>ఎండౌమెంట్ ఎంచుకోండి:</strong> గ్యారంటీడ్ రిటర్న్స్ + ఫోర్స్డ్ సేవింగ్ కావాలి
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700">
                        <strong>హైబ్రిడ్ అప్రోచ్:</strong> రెండిటి ప్రయోజనాలు పొందాలనుకుంటే
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced CTAs */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Calculator className="w-5 h-5" />
              లైఫ్ కవర్ లెక్కలు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link 
              href="/calculators/insurance/life-insurance-needs" 
              className="block p-3 bg-white hover:bg-blue-50 rounded-lg transition-colors border border-blue-200"
              onClick={() => handleInteraction('life_insurance_needs_cta_click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-900">లైఫ్ కవర్ నీడ్స్</div>
                  <div className="text-xs text-blue-700">ఎంత కవర్ అవసరమో లెక్కించండి</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </div>
            </Link>
            
            <Link 
              href="/calculators/insurance/term-plan" 
              className="block p-3 bg-white hover:bg-blue-50 rounded-lg transition-colors border border-blue-200"
              onClick={() => handleInteraction('term_plan_calculator_cta_click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-900">టర్మ్ ప్లాన్ కాలిక్యులేటర్</div>
                  <div className="text-xs text-blue-700">ప్రీమియం కాస్ట్ & కవర్ పోల్చండి</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <DollarSign className="w-5 h-5" />
              ఇన్వెస్ట్‌మెంట్ టూల్స్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link 
              href="/calculators/investment/sip" 
              className="block p-3 bg-white hover:bg-green-50 rounded-lg transition-colors border border-green-200"
              onClick={() => handleInteraction('sip_calculator_cta_click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-green-900">SIP కాలిక్యులేటర్</div>
                  <div className="text-xs text-green-700">వేరుగా ఇన్వెస్ట్‌మెంట్ ప్లానింగ్</div>
                </div>
                <ArrowRight className="w-4 h-4 text-green-600" />
              </div>
            </Link>
            
            <Link 
              href="/calculators/investment/lumpsum" 
              className="block p-3 bg-white hover:bg-green-50 rounded-lg transition-colors border border-green-200"
              onClick={() => handleInteraction('lumpsum_calculator_cta_click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-green-900">లంప్‌సమ్ కాలిక్యులేటర్</div>
                  <div className="text-xs text-green-700">వన్-టైమ్ ఇన్వెస్ట్‌మెంట్ ప్లానింగ్</div>
                </div>
                <ArrowRight className="w-4 h-4 text-green-600" />
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-900">
              <BookOpen className="w-5 h-5" />
              ఎడ్యుకేషన్ హబ్
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link 
              href="/learn/insurance/life-insurance" 
              className="block p-3 bg-white hover:bg-purple-50 rounded-lg transition-colors border border-purple-200"
              onClick={() => handleInteraction('life_insurance_guide_cta_click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-purple-900">లైఫ్ ఇన్షూరెన్స్ గైడ్</div>
                  <div className="text-xs text-purple-700">పూర్తి ఇన్షూరెన్స్ శిక్షణ</div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </div>
            </Link>
            
            <Link 
              href="/learn/investment/mutual-funds" 
              className="block p-3 bg-white hover:bg-purple-50 rounded-lg transition-colors border border-purple-200"
              onClick={() => handleInteraction('investment_basics_cta_click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-purple-900">ఇన్వెస్ట్‌మెంట్ బేసిక్స్</div>
                  <div className="text-xs text-purple-700">MF, SIP, ELSS గైడ్</div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">ముఖ్యమైన డిస్క్లైమర్:</h4>
              <p className="text-yellow-800 text-sm leading-relaxed">
                ఈ సమాచారం కేవలం విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. ఇది ఇన్షూరెన్స్ సలహా కాదు. 
                వాస్తవ పాలసీ టర్మ్స్, ప్రీమియంలు, రిటర్న్స్ ఇన్షూరెన్స్ కంపెనీ నిబంధనలను బట్టి మారవచ్చు. 
                ఇన్షూరెన్స్ పాలసీ కొనుగోలు చేసే ముందు లైసెన్స్ ఉన్న ఇన్షూరెన్స్ ఏజెంట్ లేదా 
                ఆర్థిక సలహాదారుని సంప్రదించండి.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}