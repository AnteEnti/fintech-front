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
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle, Home, DollarSign } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomeLoanVsRentComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('Housing comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "ప్రారంభ ఖర్చు",
      homeLoan: "డౌన్ పేమెంట్ (20-25%), రిజిస్ట్రేషన్, స్టాంప్ డ్యూటీ",
      rent: "సెక్యూరిటీ డిపాజిట్ (2-3 నెలల అద్దె), అడ్వాన్స్",
      homeLoanIcon: "💰",
      rentIcon: "💵"
    },
    {
      aspect: "నెలవారీ చెల్లింపు",
      homeLoan: "EMI (ప్రిన్సిపల్ + వడ్డీ) + మెయింటెనెన్స్",
      rent: "నెలవారీ అద్దె + మెయింటెనెన్స్ (ఉంటే)",
      homeLoanIcon: "🏦",
      rentIcon: "🏠"
    },
    {
      aspect: "దీర్ఘకాలిక ఖర్చు",
      homeLoan: "మొత్తం వడ్డీ + మెయింటెనెన్స్ + ప్రాపర్టీ ట్యాక్స్",
      rent: "అద్దె పెరుగుదల (వార్షిక 5-10%) + బ్రోకరేజ్",
      homeLoanIcon: "📈",
      rentIcon: "📊"
    },
    {
      aspect: "ఆస్తి యాజమాన్యం",
      homeLoan: "పూర్తి యాజమాన్యం, అప్రిసియేషన్ బెనిఫిట్",
      rent: "యాజమాన్యం లేదు, అప్రిసియేషన్ బెనిఫిట్ లేదు",
      homeLoanIcon: "🏡",
      rentIcon: "🔑"
    },
    {
      aspect: "వెళ్లిపోయే స్వేచ్ఛ",
      homeLoan: "అమ్మకం ప్రక్రియ అవసరం, సమయం పట్టుతుంది",
      rent: "నోటీస్ ఇచ్చి సులభంగా వెళ్లిపోవచ్చు",
      homeLoanIcon: "🔒",
      rentIcon: "🚪"
    },
    {
      aspect: "పన్ను ప్రయోజనాలు",
      homeLoan: "ప్రిన్సిపల్ (80C) + వడ్డీ (24B) మినహాయింపులు",
      rent: "HRA మినహాయింపు (జీతం కంటే 50% వరకు)",
      homeLoanIcon: "💸",
      rentIcon: "📋"
    },
    {
      aspect: "మెయింటెనెన్స్ బాధ్యత",
      homeLoan: "పూర్తి బాధ్యత (మరమ్మతులు, అప్‌గ్రేడ్‌లు)",
      rent: "హౌస్ ఓనర్ బాధ్యత (చాలావరకు)",
      homeLoanIcon: "🔧",
      rentIcon: "📞"
    }
  ];

  const homeLoanAdvantages = [
    "స్వంత ఆస్తి యాజమాన్యం",
    "ప్రాపర్టీ వాల్యు అప్రిసియేషన్",
    "పన్ను మినహాయింపుల ప్రయోజనాలు",
    "రెంటల్ ఇన్కమ్ అవకాశం",
    "EMI తర్వాత ఆస్తి పూర్తిగా మీదే"
  ];

  const homeLoanDisadvantages = [
    "భారీ ప్రారంభ పెట్టుబడి అవసరం",
    "వడ్డీ రేట్ హెచ్చుతగ్గుల రిస్క్",
    "మెయింటెనెన్స్ పూర్తి బాధ్యత",
    "లిక్విడిటీ సమస్య (అమ్మకం కష్టం)",
    "ప్రాపర్టీ ప్రైస్ తగ్గే రిస్క్"
  ];

  const rentAdvantages = [
    "తక్కువ ప్రారంభ ఖర్చు",
    "లొకేషన్ మార్చే స్వేచ్ఛ",
    "మెయింటెనెన్స్ బాధ్యత లేదు",
    "ప్రాపర్టీ మార్కెట్ రిస్క్ లేదు",
    "ఫ్లెక్సిబిలిటీ ఎక్కువ"
  ];

  const rentDisadvantages = [
    "స్వంత ఆస్తి కాదు",
    "అద్దె వార్షిక పెరుగుదల",
    "HRA మినహాయింపు పరిమితి",
    "హౌస్ ఓనర్ మీద ఆధారపడడం",
    "దీర్ఘకాలికంగా ఖరీదు అవకాశం"
  ];

  const scenarios = [
    {
      title: "యువ ప్రొఫెషనల్స్ (25-30 సంవత్సరాలు)",
      homeLoanSuit: "స్థిర ఉద్యోగం, కుటుంబ ప్లానింగ్, ఒకే నగరంలో ఉండే ఆలోచన",
      rentSuit: "ఉద్యోగ అవకాశాల కోసం మోబిలిటీ, అనిశ్చిత ఆదాయం, కెరీర్ ఫోకస్",
      icon: "👨‍💼"
    },
    {
      title: "కుటుంబాలు (30-45 సంవత్సరాలు)",
      homeLoanSuit: "పిల్లల విద్య స్థిరత్వం, దీర్ఘకాలిక ప్లానింగ్, ఆర్థిక స్థిరత్వం",
      rentSuit: "ఉద్యోగ ట్రాన్స్‌ఫర్‌లు, అనిశ్చిత భవిష్యత్తు, అద్దె HRA ప్రయోజనం",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "సీనియర్ సిటిజెన్స్ (45+ సంవత్సరాలు)",
      homeLoanSuit: "రిటైర్మెంట్ హోమ్, రెంటల్ ఇన్కమ్ ప్లానింగ్, ఆస్తి వారసత్వం",
      rentSuit: "మెయింటెనెన్స్ ఇబ్బంది లేకుండా, హెల్త్ కేర్ సమీపంలో, ఫ్లెక్సిబిలిటీ",
      icon: "👴"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            హోమ్ లోన్ vs అద్దె: వ్యత్యాసాలు తెలుసుకోండి
          </CardTitle>
          <p className="text-lg text-gray-600 text-center mt-4" style={{ lineHeight: '1.6' }}>
            ఇల్లు కొనుగోలు మరియు అద్దెకు ఉండటం మధ్య ఆర్థిక వ్యత్యాసాలను అర్థం చేసుకోండి
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">హోమ్ లోన్</h3>
              <p className="text-blue-800 text-sm">
                ఇల్లు కొని స్వంత ఆస్తి యాజమాన్యం పొందడం
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">అద్దె</h3>
              <p className="text-green-800 text-sm">
                అద్దెకు ఇంట్లో ఉండడం - ఫ్లెక్సిబిలిటీతో
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            వివరమైన పోలిక
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Mobile-friendly stacked layout */}
          <div className="block md:hidden space-y-6">
            {comparisonData.map((item, index) => (
              <Card key={index} className="border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{item.aspect}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.homeLoanIcon}</span>
                      <h4 className="font-semibold text-blue-900">హోమ్ లోన్</h4>
                    </div>
                    <p className="text-blue-800 text-sm">{item.homeLoan}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.rentIcon}</span>
                      <h4 className="font-semibold text-green-900">అద్దె</h4>
                    </div>
                    <p className="text-green-800 text-sm">{item.rent}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop table layout */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold text-gray-900">పోలిక అంశం</TableHead>
                  <TableHead className="text-center font-bold text-blue-900">
                    <div className="flex items-center justify-center gap-2">
                      <Home className="w-5 h-5" />
                      హోమ్ లోన్
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-bold text-green-900">
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      అద్దె
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-semibold text-gray-900 text-center">
                      {item.aspect}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xl">{item.homeLoanIcon}</span>
                      </div>
                      <p className="text-blue-800 text-sm">{item.homeLoan}</p>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xl">{item.rentIcon}</span>
                      </div>
                      <p className="text-green-800 text-sm">{item.rent}</p>
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
        {/* Home Loan Pros & Cons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-900 flex items-center gap-2">
              <Home className="w-6 h-6" />
              హోమ్ లోన్ - ప్రయోజనాలు & పరిమితులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {homeLoanAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-1">•</span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                పరిమితులు
              </h4>
              <ul className="space-y-2">
                {homeLoanDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Rent Pros & Cons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-green-900 flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              అద్దె - ప్రయోజనాలు & పరిమితులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {rentAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-1">•</span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                పరిమితులు
              </h4>
              <ul className="space-y-2">
                {rentDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scenario-based Guidance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            వివిధ పరిస్థితుల్లో ఏది అనుకూలం?
          </CardTitle>
          <p className="text-gray-600 mt-2" style={{ lineHeight: '1.6' }}>
            మీ వయస్సు, ఉద్యోగ పరిస్థితి మరియు భవిష్యత్ ప్లాన్‌లను బట్టి ఏది మంచిదో అర్థం చేసుకోండి
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{scenario.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{scenario.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        హోమ్ లోన్ అనుకూలం
                      </h4>
                      <p className="text-blue-800 text-sm">{scenario.homeLoanSuit}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        అద్దె అనుకూలం
                      </h4>
                      <p className="text-green-800 text-sm">{scenario.rentSuit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Understanding Home Ownership vs Renting */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            గృహ యాజమాన్యం vs అద్దె - అర్థం చేసుకోండి
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-900">హోమ్ లోన్ - దీర్ఘకాలిక దృష్టిკోణం</h3>
              <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                హోమ్ లోన్ తీసుకుని ఇల్లు కొనుగోలు చేయడం దీర్ఘకాలిక పెట్టుబడి. 15-20 సంవత్సరాలలో EMI పూర్తయ్యాక, 
                ఇల్లు పూర్తిగా మీదే అవుతుంది. ప్రాపర్టీ విలువలు పెరిగితే మీ సంపద పెరుగుతుంది.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-900">అద్దె - ఫ్లెక్సిబిలిటీ & లిక్విడిటీ</h3>
              <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                అద్దె అంటే మీకు ఎక్కువ ఫ్లెక్సిబిలిటీ. ఉద్యోగ అవకాశాలు, లైఫ్‌స్టైల్ మార్పులకు అనుగుణంగా 
                సులభంగా మార్చుకోవచ్చు. మెయింటెనెన్స్ ఇబ్బంది లేకుండా ఉండవచ్చు.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Planning Guidance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            గృహ ఆర్థిక ప్లానింగ్
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                హోమ్ లోన్ తీసుకునే ముందు ఏమి పరిగణించాలి?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm text-gray-700" style={{ lineHeight: '1.6' }}>
                  <p>• <strong>డౌన్ పేమెంట్:</strong> ప్రాపర్టీ విలువలో 20-25% సిద్ధం చేసుకోండి</p>
                  <p>• <strong>EMI విమర్శ:</strong> మీ నెలవారీ ఆదాయంలో 30-40% EMI కి కేటాయించండి</p>
                  <p>• <strong>అదనపు ఖర్చులు:</strong> రిజిస్ట్రేషన్, స్టాంప్ డ్యూటీ, లోన్ ప్రాసెసింగ్ ఫీజులు</p>
                  <p>• <strong>ఎమర్జెన్సీ ఫండ్:</strong> కనీసం 6 నెలల ఖర్చులు సిద్ధంగా ఉంచండి</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                అద్దె vs EMI - ఎలా పోల్చాలి?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm text-gray-700" style={{ lineHeight: '1.6' }}>
                  <p>• <strong>అద్దె vs EMI రేషియో:</strong> అదే ప్రాంతంలో అద్దె మరియు EMI పోల్చండి</p>
                  <p>• <strong>అవకాశ వ్యయం:</strong> డౌన్ పేమెంట్ డబ్బును ఇతర పెట్టుబడుల్లో పెట్టినట్లయితే రాబడి</p>
                  <p>• <strong>పన్ను ప్రయోజనాలు:</strong> హోమ్ లోన్ మరియు HRA మినహాయింపులను లెక్కించండి</p>
                  <p>• <strong>దీర్ఘకాలిక వ్యయం:</strong> 10-20 సంవత్సరాల మొత్తం ఖర్చు లెక్కించండి</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                లొకేషన్ మరియు టైమింగ్ ప్రాముఖ్యత?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm text-gray-700" style={{ lineHeight: '1.6' }}>
                  <p>• <strong>లొకేషన్ విశ్లేషణ:</strong> రవాణా, స్కూల్స్, హాస్పిటల్స్ సౌలభ్యం</p>
                  <p>• <strong>ఫ్యూచర్ డెవలప్మెంట్:</strong> ప్రాంత అభివృద్ధి ప్లాన్‌లు, మెట్రో కనెక్టివిటీ</p>
                  <p>• <strong>మార్కెట్ టైమింగ్:</strong> ప్రాపర్టీ మార్కెట్ సైకిల్, వడ్డీ రేట్లు పరిగణించండి</p>
                  <p>• <strong>అద్దె యీల్డ్:</strong> భవిష్యత్తులో అద్దెకు ఇవ్వే అవకాశం ఉంటే రెంటల్ యీల్డ్ చూడండి</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Related Tools & Resources */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-indigo-900 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              సంబంధిత కాలిక్యులేటర్లు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link 
              href="/calculators/loan/emi"
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              onClick={() => handleInteraction('emi-calculator-click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-blue-900">EMI కాలిక్యులేటర్</h4>
                  <p className="text-blue-700 text-sm">మీ హోమ్ లోన్ EMI లెక్కించండి</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </Link>
            
            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">హోమ్ లోన్ ఎలిజిబిలిటీ</h4>
                  <p className="text-gray-500 text-sm">త్వరలో అందుబాటులో</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-purple-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              మరింత తెలుసుకోండి
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link 
              href="/learn/banking-credit/loans-overview"
              className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              onClick={() => handleInteraction('loans-learn-click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-orange-900">లోన్‌ల గురించి తెలుసుకోండి</h4>
                  <p className="text-orange-700 text-sm">లోన్ రకాలు, EMI, దరఖాస్తు ప్రక్రియ</p>
                </div>
                <ArrowRight className="w-5 h-5 text-orange-600" />
              </div>
            </Link>
            
            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">రియల్ ఎస్టేట్ & REITs</h4>
                  <p className="text-gray-500 text-sm">త్వరలో అందుబాటులో</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            తరచుగా అడిగే ప్రశ్నలు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left">
                హోమ్ లోన్ తీసుకోవాలా లేక అద్దెకు ఉండాలా - ఎలా నిర్ణయించాలి?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  మీ ఆర్థిక స్థితి, భవిష్యత్ ప్లాన్‌లు, ఉద్యోగ స్థిరత్వం పరిగణించండి. 5+ సంవత్సరాలు అదే చోట ఉండే ఆలోచన ఉంటే హోమ్ లోన్ మంచిది. 
                  మోబిలిటీ అవసరమైతే అద్దె మంచిది. ఆర్థిక సలహాదారుని సంప్రదించండి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left">
                ప్రస్తుతం అద్దెకు ఉండి భవిష్యత్తులో ఇల్లు కొనవచ్చా?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  అవును, చాలామంది ఈ వ్యూహం అనుసరిస్తారు. అద్దెకు ఉంటూ డౌన్ పేమెంట్ కోసం డబ్బు కూడబెట్టవచ్చు. 
                  కానీ ప్రాపర్టీ ప్రైజులు పెరిగే రిస్క్ కూడా ఉంది. మీ ఫైనాన్షియల్ గోల్స్ ప్రకారం ప్లాన్ చేసుకోండి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left">
                EMI మరియు అద్దె దాదాపు సమానంగా ఉంటే ఏది ఎంచుకోవాలి?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  EMI = అద్దె అయితే, దీర్ఘకాలికంగా హోమ్ లోన్ మంచిది. కానీ డౌన్ పేమెంట్, అదనపు ఖర్చులు, 
                  మెయింటెనెన్స్ కూడా లెక్కించాలి. మీ లిక్విడిటీ అవసరాలు, కెరీర్ స్థిరత్వం పరిగణించి నిర్ణయించండి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left">
                పన్ను ప్రయోజనాల దృష్ట్యా ఏది మంచిది?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  హోమ్ లోన్‌లో ప్రిన్సిపల్ (80C - ₹1.5 లక్షలు) మరియు వడ్డీ (24B - ₹2 లక్షలు) మినహాయింపులు. 
                  అద్దెలో HRA మినహాయింపు (జీతంలో 50% లేదా వాస్తవ అద్దె). మీ ట్యాక్స్ స్లాబ్ ప్రకారం లెక్కించుకోండి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger className="text-left">
                ఫ్లాట్ కొనుగోలు vs ప్లాట్ కొని కట్టించుకోవడం?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  రెడీ ఫ్లాట్ - వెంటనే వాడుకోవచ్చు, ఖరీదు ఎక్కువ. ప్లాట్ కొని కట్టించుకోవడం - కస్టమైజేషన్ అవకాశం, 
                  తక్కువ ఖరీదు, కానీ నిర్మాణ సమయం మరియు ఇబ్బందులు. మీ అవసరాలు, బడ్జెట్ ప్రకారం ఎంచుకోండి.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Key Decision Factors Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            నిర్णయ కారకాలు - సారాంశం
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <Home className="w-5 h-5" />
                హోమ్ లోన్ ఎంచుకోండి - ఒకవేళ
              </h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• 5+ సంవత్సరాలు అదే చోట ఉండే ప్లాన్ ఉంటే</li>
                <li>• స్థిరమైన ఉద్యోగం మరియు ఆదాయం ఉంటే</li>
                <li>• డౌన్ పేమెంట్ కోసం తగినంత మొత్తం ఉంటే</li>
                <li>• పన్ను మినహాయింపుల అవసరం ఉంటే</li>
                <li>• స్వంత ఆస్తి కావాలని అనిపిస్తే</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                అద్దె ఎంచుకోండి - ఒకవేళ
              </h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• ఉద్యోగ ట్రాన్స్‌ఫర్‌లు తరచుగా ఉంటే</li>
                <li>• అనిశ్చిత ఆదాయం లేదా కెరీర్ మార్పులు ఉంటే</li>
                <li>• మెయింటెనెన్స్ ఇబ్బంది వద్దని అనిపిస్తే</li>
                <li>• పెట్టుబడి వైవిధ్యం కావాలని అనిపిస్తే</li>
                <li>• లొకేషన్ ఫ్లెక్సిబిలిటీ అవసరం ఉంటే</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm text-center" style={{ lineHeight: '1.6' }}>
              <strong>ముఖ్యమైన గమనిక:</strong> ఈ పోలిక విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              వ్యక్తిగత నిర్ణయానికి ఆర్థిక సలహాదారుని, రియల్ ఎస్టేట్ నిపుణుని సంప్రదించండి.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Final Disclaimer */}
      <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-lg font-semibold text-red-900 mb-3">
          ముఖ్యమైన నిరాకరణ
        </h3>
        <p className="text-red-800 text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
          ఈ సమాచారం పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే అందించబడింది. ఇది రియల్ ఎస్టేట్ లేదా ఆర్థిక సలహా కాదు. 
          రియల్ ఎస్టేట్ మార్కెట్ రిస్క్‌లకు లోబడి ఉంటుంది మరియు భౌగోళిక, ఆర్థిక పరిస్థితుల మార్పులకు అనుగుణంగా మారవచ్చు. 
          ఏదైనా గృహ లేదా ఆర్థిక నిర్णయం తీసుకునే ముందు అర్హత కలిగిన రియల్ ఎస్టేట్ సలహాదారుని, ఆర్థిక నిపుణుని మరియు 
          లీగల్ అడ్వైజర్‌ని సంప్రదించండి. ప్రాపర్టీ పెట్టుబడులకు మార్కెట్ రిస్క్ ఉంటుంది.
        </p>
      </div>
    </div>
  );
}