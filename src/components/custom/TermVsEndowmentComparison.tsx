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
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle, Shield, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TermVsEndowmentComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('Insurance comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "ప్రీమియం కాస్ట్",
      term: "తక్కువ ప్రీమియం - అధిక కవర్ పొందవచ్చు",
      endowment: "అధిక ప్రీమియం - రక్షణ + పొదుపు కోసం",
      termIcon: "💰",
      endowmentIcon: "💳"
    },
    {
      aspect: "కవర్ మొత్తం",
      term: "అదే ప్రీమియంకు అధిక కవర్ (10-20 రెట్లు)",
      endowment: "తక్కువ కవర్ - ప్రీమియంలో పొదుపు భాగం ఉంది",
      termIcon: "🛡️",
      endowmentIcon: "📊"
    },
    {
      aspect: "మెచ్యూరిటీ బెనిఫిట్",
      term: "మెచ్యూరిటీ బెనిఫిట్ లేదు - కేవలం రక్షణ",
      endowment: "మెచ్యూరిటీలో బోనస్‌లతో కలిపి గ్యారంటీడ్ మొత్తం",
      termIcon: "❌",
      endowmentIcon: "✅"
    },
    {
      aspect: "ఇన్వెస్ట్‌మెంట్ కంపోనెంట్",
      term: "ఇన్వెస్ట్‌మెంట్ లేదు - కేవలం రిస్క్ కవర్",
      endowment: "ఇన్షూరెన్స్ + ఇన్వెస్ట్‌మెంట్ కలయిక",
      termIcon: "🚫",
      endowmentIcon: "📈"
    },
    {
      aspect: "సరెండర్ వాల్యూ",
      term: "సరెండర్ వాల్యూ లేదు",
      endowment: "3-5 సంవత్సరాల తర్వాత సరెండర్ వాల్యూ ఉంటుంది",
      termIcon: "❌",
      endowmentIcon: "💵"
    },
    {
      aspect: "రిటర్న్స్",
      term: "రిటర్న్స్ లేవు - కేవలం రక్షణ",
      endowment: "4-6% వార్షిక రిటర్న్స్ (సాధారణంగా)",
      termIcon: "🚫",
      endowmentIcon: "📊"
    },
    {
      aspect: "ట్యాక్స్ ప్రయోజనాలు",
      term: "సెక్షన్ 80C కింద ప్రీమియం, డెత్ బెనిఫిట్ ట్యాక్స్ ఫ్రీ",
      endowment: "సెక్షన్ 80C కింద ప్రీమియం, మెచ్యూరిటీ మీద పరిమిత ట్యాక్స్",
      termIcon: "💸",
      endowmentIcon: "💰"
    }
  ];

  const scenarios = [
    {
      title: "టర్మ్ ఇన్షూరెన్స్ అనుకూలం",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      suitable: [
        "యువ కుటుంబాలు - అధిక రక్షణ అవసరం",
        "తక్కువ బడ్జెట్‌లో అధిక కవర్ కావాలి",
        "ఇన్వెస్ట్‌మెంట్‌లను వేరుగా చేయాలని అనుకుంటే",
        "EMI లు లేదా లోన్లు ఉన్నవారు",
        "పిల్లల విద్య, వివాహ ఖర్చులు భరించాల్సిన వారు"
      ],
      color: "blue"
    },
    {
      title: "ఎండౌమెంట్ ప్లాన్ అనుకూలం",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      suitable: [
        "కన్జర్వేటివ్ ఇన్వెస్టర్లు - రిస్క్ ఇష్టపడని వారు",
        "ఫోర్స్డ్ సేవింగ్ అలవాటు అవసరం ఉన్నవారు",
        "గ్యారంటీడ్ రిటర్న్స్ కావాలని అనుకుంటే",
        "ట్యాక్స్ ప్లానింగ్ అవసరం ఉన్నవారు",
        "తక్కువ రక్షణ + పొదుపు రెండూ కావాలని అనుకుంటే"
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