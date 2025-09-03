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
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle, PiggyBank, Landmark, Building2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NPSvsPPFvsEPFComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('Retirement comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "పెట్టుబడి విధానం",
      nps: "మార్కెట్‌లింక్డ్ - ఈక్విటీ/డెట్ ఫండ్స్ ఎంపిక",
      ppf: "ప్రభుత్వ హామీతో నిర్ధిష్ట రిటర్న్",
      epf: "ఉద్యోగి + యజమాని కంట్రిబ్యూషన్ కార్పస్",
      npsIcon: "📊",
      ppfIcon: "🏛️",
      epfIcon: "🏢"
    },
    {
      aspect: "రిటర్న్ పొటెన్షియల్",
      nps: "8-12% (మార్కెట్ రిస్క్‌తో అధిక రిటర్న్ అవకాశం)",
      ppf: "7.1-8.5% (ప్రభుత్వ హామీతో స్థిర రిటర్న్)",
      epf: "8.15-8.5% (EPFO నిర్ణయిస్తే వార్షిక రేట్ మార్పులు)",
      npsIcon: "🚀",
      ppfIcon: "🛡️",
      epfIcon: "📈"
    },
    {
      aspect: "టాక్స్ బెనిఫిట్స్",
      nps: "80C (₹1.5L) + 80CCD(1B) (₹50K) = ₹2L వరకు",
      ppf: "80C కింద ₹1.5 లక్షలు వరకు మాత్రమే",
      epf: "80C కింద ₹1.5 లక్షలు వరకు మాత్రమే",
      npsIcon: "💸",
      ppfIcon: "💰",
      epfIcon: "💳"
    },
    {
      aspect: "మ్యాచూరిటీ/రిటైర్మెంట్",
      nps: "60 సంవత్సరాలు - 60% లంప్‌సమ్ + 40% అన్యుయిటీ",
      ppf: "15 సంవత్సరాలు - పూర్తి లంప్‌సమ్ లేదా పొడిగింపు",
      epf: "రిటైర్మెంట్/జాబ్ మార్పు - లంప్‌సమ్ విత్‌డ్రాల్",
      npsIcon: "🎯",
      ppfIcon: "📅",
      epfIcon: "🏁"
    },
    {
      aspect: "లిక్విడిటీ/ఎమర్జెన్సీ విత్‌డ్రాల్",
      nps: "60 సంవత్సరాల తర్వాత లేదా పరిమిత పార్షియల్ విత్‌డ్రాల్",
      ppf: "6వ సంవత్సరం తర్వాత లోన్/పార్షియల్ విత్‌డ్రాల్",
      epf: "జాబ్ మార్పు, లోన్, అడ్వాన్స్ ఆప్షన్లు అందుబాటులో",
      npsIcon: "🔒",
      ppfIcon: "🔓",
      epfIcon: "🚪"
    },
    {
      aspect: "కంట్రిబ్యూషన్ లిమిట్లు",
      nps: "మినిమం ₹500/సం, మాక్సిమం లిమిట్ లేదు",
      ppf: "మినిమం ₹500, మాక్సిమం ₹1.5 లక్షలు/సం",
      epf: "జీతంలో 12% (యజమాని మ్యాచింగ్‌తో)",
      npsIcon: "🎚️",
      ppfIcon: "⚖️",
      epfIcon: "📊"
    },
    {
      aspect: "ఇన్వెస్టమెంట్ కంట్రోల్",
      nps: "యూజర్ ఎంపిక - ఫండ్ మేనేజర్, అలోకేషన్",
      ppf: "ప్రభుత్వ నిర్వహణ - యూజర్ కంట్రోల్ లేదు",
      epf: "EPFO నిర్వహణ - యూజర్ కంట్రోల్ లేదు",
      npsIcon: "🎛️",
      ppfIcon: "🏛️",
      epfIcon: "🏢"
    },
    {
      aspect: "యజమాని కంట్రిబ్యూషన్",
      nps: "కార్పొరేట్ NPS - యజమాని మ్యాచింగ్ అవకాశం",
      ppf: "వ్యక్తిగత పెట్టుబడి - యజమాని రోల్ లేదు",
      epf: "తప్పనిసరి యజమాని కంట్రిబ్యూషన్ 12%",
      npsIcon: "🤝",
      ppfIcon: "👤",
      epfIcon: "⚖️"
    }
  ];

  const npsAdvantages = [
    "అధిక రిటర్న్ పొటెన్షియల్ (మార్కెట్‌లింక్డ్)",
    "అదనపు ₹50,000 టాక్స్ బెనిఫిట్ (80CCD(1B))",
    "ఫండ్ చాయిస్ మరియు అసెట్ అలోకేషన్ కంట్రోల్",
    "కార్పొరేట్ మ్యాచింగ్ అవకాశం",
    "రెగ్యులేటేడ్ మరియు ట్రాన్స్‌పేరెంట్",
    "పోర్టబిలిటీ - జాబ్ మార్పు ప్రభావం లేదు"
  ];

  const npsDisadvantages = [
    "మార్కెట్ రిస్క్ - రిటర్న్ హామీ లేదు",
    "60 సంవత్సరాల వరకు లాక్-ఇన్",
    "40% అన్యుయిటీ కొనుగోలు తప్పనిసరి",
    "ఎమర్జెన్సీ లిక్విడిటీ పరిమితం",
    "ఎక్సిట్ లోడ్ మరియు ఫీజులు",
    "అన్యుయిటీ రేట్లు తక్కువగా ఉండే అవకాశం"
  ];

  const ppfAdvantages = [
    "ప్రభుత్వ హామీతో రిస్క్ ఫ్రీ రిటర్న్",
    "ట్రిపుల్ E (EEE) - కంప్లీట్ టాక్స్ ఎగ్జెంప్షన్",
    "కాంపౌండింగ్ ఎఫెక్ట్ 15 సంవత్సరాలు",
    "లోన్ మరియు పార్షియల్ విత్‌డ్రాల్ ఫెసిలిటీ",
    "మినిమం ₹500 తో ఫ్లెక్సిబిలిటీ",
    "నో మార్కెట్ రిస్క్ - కేపిటల్ ప్రొటెక్షన్"
  ];

  const ppfDisadvantages = [
    "రిటర్న్ రేట్ ఇన్‌ఫ్లేషన్ కంటే కొంచెం ఎక్కువ మాత్రమే",
    "₹1.5 లక్షల వార్షిక లిమిట్",
    "15 సంవత్సరాల లాక్-ఇన్ పీరియడ్",
    "ఇంట్రెస్ట్ రేట్ మార్పుల రిస్క్",
    "ఇన్‌ఫ్లేషన్ ఎఫెక్ట్ దీర్ఘకాలికంగా",
    "ఏకైక ఇన్‌కమ్ కింద ₹1.5L లిమిట్"
  ];

  const epfAdvantages = [
    "ఆటోమేటిక్ సేవింగ్స్ - జీతంలోంచి కోత",
    "యజమాని మ్యాచింగ్ కంట్రిబ్యూషన్",
    "జాబ్‌టు జాబ్ పోర్టబిలిటీ",
    "లోన్ మరియు అడ్వాన్స్ ఫెసిలిటీ",
    "80C టాక్స్ బెనిఫిట్",
    "పెన్షన్ స్కీమ్ అవకాశం"
  ];

  const epfDisadvantages = [
    "జీతం మీద డిపెండెంట్ - లిమిటెడ్ కంట్రిబ్యూషన్",
    "ఇంట్రెస్ట్ రేట్లు వోలటైల్",
    "ఎంప్లాయీలకు మాత్రమే పరిమితం",
    "ప్రీమేచ్యూర్ విత్‌డ్రాల్‌కు పెనాల్టీ",
    "ఇన్వెస్టమెంట్ చాయిస్ లేదు",
    "ఫండ్ మేనేజ్మెంట్ కంట్రోల్ లేదు"
  ];

  const scenarios = [
    {
      title: "యువ ప్రొఫెషనల్స్ (25-35 సంవత్సరాలు)",
      npsRole: "అధిక ఈక్విటీ అలోకేషన్‌తో వెల్త్ క్రియేషన్ మెయిన్ గోల్",
      ppfRole: "80C కింద సేఫ్ ఇన్వెస్టమెంట్ + ఎమర్జెన్సీ లిక్విడిటీ",
      epfRole: "ఆటోమేటిక్ రిటైర్మెంట్ సేవింగ్స్ + యజమాని మ్యాచింగ్",
      icon: "👨‍💻",
      strategy: "NPS (70%) + PPF (20%) + EPF (10%)"
    },
    {
      title: "మిడ్-కెరీర్ (35-45 సంవత్సరాలు)",
      npsRole: "బ్యాలెన్స్డ్ అలోకేషన్‌తో స్టేబుల్ గ్రోత్",
      ppfRole: "టాక్స్ ప్లానింగ్ + చిల్డ్రన్ ఎడ్యూకేషన్ బ్యాకప్",
      epfRole: "కంట్రిబ్యూషన్ మాక్సిమైజేషన్ + VPF ఆప్షన్",
      icon: "👨‍💼",
      strategy: "NPS (50%) + PPF (25%) + EPF (25%)"
    },
    {
      title: "ప్రీ-రిటైర్మెంట్ (45-60 సంవత్సరాలు)",
      npsRole: "కన్జర్వేటివ్ అలోకేషన్‌తో రిస్క్ రిడక్షన్",
      ppfRole: "గ్యారంటీడ్ రిటర్న్‌తో సేఫ్టీ ఫర్స్ట్",
      epfRole: "రిటైర్మెంట్ కార్పస్ మాక్సిమైజేషన్",
      icon: "👴",
      strategy: "NPS (30%) + PPF (40%) + EPF (30%)"
    }
  ];

  const careerScenarios = [
    {
      type: "IT/ప్రైవేట్ ఎంప్లాయీ",
      nps: "కార్పొరేట్ NPS + అదనపు టాక్స్ బెనిఫిట్ కోసం వ్యక్తిగత",
      ppf: "80C అవసరం + ఎమర్జెన్సీ లిక్విడిటీ కోసం",
      epf: "ఆటోమేటిక్ + యజమాని మ్యాచింగ్ ప్రయోజనం పొందండి",
      icon: "💻"
    },
    {
      type: "ప్రభుత్వ ఉద్యోగి",
      nps: "ఇప్పటికే NPS కింద + అదనపు వ్యక్తిగత NPS",
      ppf: "సేకండ్ రిటైర్మెంట్ కార్పస్ + లిక్విడిటీ",
      epf: "లేకపోవచ్చు - ప్రభుత్వ పెన్షన్ ఉంది",
      icon: "🏛️"
    },
    {
      type: "స్వయం ఉద్యోగం/బిజినెస్",
      nps: "ప్రధాన రిటైర్మెంట్ ప్లానింగ్ వెహికల్",
      ppf: "స్టేబుల్ సేవింగ్స్ + టాక్స్ బెనిఫిట్",
      epf: "అవేలబుల్ కాదు - ప్రైవేట్ ఆల్టర్నేటివ్స్ చూడండి",
      icon: "🚀"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            NPS vs PPF vs EPF: రిటైర్‌మెంట్ ప్లానింగ్ పోలిక
          </CardTitle>
          <p className="text-lg text-gray-600 text-center mt-4" style={{ lineHeight: '1.6' }}>
            ప్రధాన రిటైర్‌మెంట్ సేవింగ్ ఎంపికల మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <PiggyBank className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">NPS</h3>
              <p className="text-blue-800 text-sm">
                మార్కెట్‌లింక్డ్ రిటైర్‌మెంట్ సేవింగ్స్
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Landmark className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">PPF</h3>
              <p className="text-green-800 text-sm">
                ప్రభుత్వ హామీతో పొదుపు స్కీమ్
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">EPF</h3>
              <p className="text-purple-800 text-sm">
                ఎంప్లాయీ ప్రొవిడెంట్ ఫండ్
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
          <div className="block lg:hidden space-y-6">
            {comparisonData.map((item, index) => (
              <Card key={index} className="border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{item.aspect}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.npsIcon}</span>
                      <h4 className="font-semibold text-blue-900">NPS</h4>
                    </div>
                    <p className="text-blue-800 text-sm">{item.nps}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.ppfIcon}</span>
                      <h4 className="font-semibold text-green-900">PPF</h4>
                    </div>
                    <p className="text-green-800 text-sm">{item.ppf}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.epfIcon}</span>
                      <h4 className="font-semibold text-purple-900">EPF</h4>
                    </div>
                    <p className="text-purple-800 text-sm">{item.epf}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop table layout */}
          <div className="hidden lg:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold text-gray-900">పోలిక అంశం</TableHead>
                  <TableHead className="text-center font-bold text-blue-900">
                    <div className="flex items-center justify-center gap-2">
                      <PiggyBank className="w-5 h-5" />
                      NPS
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-bold text-green-900">
                    <div className="flex items-center justify-center gap-2">
                      <Landmark className="w-5 h-5" />
                      PPF
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-bold text-purple-900">
                    <div className="flex items-center justify-center gap-2">
                      <Building2 className="w-5 h-5" />
                      EPF
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
                        <span className="text-xl">{item.npsIcon}</span>
                      </div>
                      <p className="text-blue-800 text-sm">{item.nps}</p>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xl">{item.ppfIcon}</span>
                      </div>
                      <p className="text-green-800 text-sm">{item.ppf}</p>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xl">{item.epfIcon}</span>
                      </div>
                      <p className="text-purple-800 text-sm">{item.epf}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Advantages and Disadvantages */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* NPS Pros & Cons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-900 flex items-center gap-2">
              <PiggyBank className="w-6 h-6" />
              NPS - ప్రయోజనాలు & పరిమితులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {npsAdvantages.map((advantage, index) => (
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
                {npsDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* PPF Pros & Cons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-green-900 flex items-center gap-2">
              <Landmark className="w-6 h-6" />
              PPF - ప్రయోజనాలు & పరిమితులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {ppfAdvantages.map((advantage, index) => (
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
                {ppfDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* EPF Pros & Cons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-purple-900 flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              EPF - ప్రయోజనాలు & పరిమితులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {epfAdvantages.map((advantage, index) => (
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
                {epfDisadvantages.map((disadvantage, index) => (
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

      {/* Life Stage Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            లైఫ్ స్టేజ్ ప్రకారం వ్యూహం
          </CardTitle>
          <p className="text-gray-600 mt-2" style={{ lineHeight: '1.6' }}>
            మీ వయస్సు మరియు కెరీర్ దశ ప్రకారం ఆప్టిమల్ అలోకేషన్ వ్యూహం
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{scenario.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{scenario.title}</h3>
                      <p className="text-indigo-600 font-semibold text-sm">{scenario.strategy}</p>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <PiggyBank className="w-4 h-4" />
                        NPS వ్యూహం
                      </h4>
                      <p className="text-blue-800 text-sm">{scenario.npsRole}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <Landmark className="w-4 h-4" />
                        PPF వ్యూహం
                      </h4>
                      <p className="text-green-800 text-sm">{scenario.ppfRole}</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        EPF వ్యూహం
                      </h4>
                      <p className="text-purple-800 text-sm">{scenario.epfRole}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career-based Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            కెరీర్ ప్రకారం వ్యూహం
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {careerScenarios.map((scenario, index) => (
              <Card key={index} className="border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{scenario.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{scenario.type}</h3>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">NPS వాడుక</h4>
                      <p className="text-blue-800 text-sm">{scenario.nps}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">PPF వాడుక</h4>
                      <p className="text-green-800 text-sm">{scenario.ppf}</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">EPF వాడుక</h4>
                      <p className="text-purple-800 text-sm">{scenario.epf}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">NPS కాలిక్యులేటర్</h4>
                  <p className="text-gray-500 text-sm">NPS రిటర్న్ ప్రొజెక్షన్</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">PPF కాలిక్యులేటర్</h4>
                  <p className="text-gray-500 text-sm">PPF రిటర్న్ మరియు మ్యాచూరిటీ</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>
            
            <Link 
              href="/calculators/tax/section-80c"
              className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              onClick={() => handleInteraction('section-80c-calculator-click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-orange-900">సెక్షన్ 80C కాలిక్యులేటర్</h4>
                  <p className="text-orange-700 text-sm">టాక్స్ సేవింగ్ ఆప్టిమైజేషన్</p>
                </div>
                <ArrowRight className="w-5 h-5 text-orange-600" />
              </div>
            </Link>

            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">రిటైర్మెంట్ కార్పస్ కాలిక్యులేటర్</h4>
                  <p className="text-gray-500 text-sm">రిటైర్మెంట్ లక్ష్య ప్లానింగ్</p>
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
            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">రిటైర్మెంట్ ప్లానింగ్</h4>
                  <p className="text-gray-500 text-sm">దీర్ఘకాలిక వెల్త్ బిల్డింగ్</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>
            
            <Link 
              href="/learn/tax-planning/income-tax-basics"
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              onClick={() => handleInteraction('tax-basics-learn-click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-blue-900">ఇన్కమ్ ట్యాక్స్ బేసిక్స్</h4>
                  <p className="text-blue-700 text-sm">టాక్స్ సేవింగ్ వ్యూహాలు</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </Link>

            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">గోల్ బేస్డ్ ఇన్వెస్టింగ్</h4>
                  <p className="text-gray-500 text-sm">సిస్టమేటిక్ వెల్త్ అక్యుములేషన్</p>
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
                NPS, PPF, EPF - ఏది రిటైర్మెంట్‌కు మంచిది?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  మూడూ వేర్వేరు ప్రయోజనాలు ఉన్నాయి. EPF ఆటోమేటిక్ + యజమాని మ్యాచింగ్, PPF సేఫ్ రిటర్న్, 
                  NPS అధిక రిటర్న్ పొటెన్షియల్. కాంబినేషన్ వాడడం మంచిది. వయస్సు, రిస్క్ టాలెరెన్స్ ప్రకారం 
                  అలోకేషన్ చేసుకోండి. ఫైనాన్షియల్ ప్లానర్‌ని సంప్రదించండి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left">
                NPS లో ఎంత ఈక్విటీ అలోకేషన్ చేయాలి?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  వయస్సు ప్రకారం నిర్ణయించండి. 30 సంవత్సరాలలో 70-80% ఈక్విటీ, 40 సంవత్సరాలలో 60%, 
                  50 సంవత్సరాలలో 40-50% వరకు. "100 మైనస్ వయస్సు" రూల్ ఫాలో చేయవచ్చు. 
                  ఆటోమేటిక్ అలోకేషన్ లేదా అక్టివ్ చాయిస్ రెండూ అందుబాటులో ఉన్నాయి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left">
                PPF లో ₹1.5 లక్షలు కంటే ఎక్కువ కట్టవచ్చా?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  కాదు, PPF లో వార్షిక మాక్సిమం లిమిట్ ₹1.5 లక్షలు మాత్రమే. ఎక్కువ కట్టినా టాక్స్ బెనిఫిట్ రాదు, 
                  ఇంట్రెస్ట్ కూడా రాకపోవచ్చు. అదనపు సొమ్మును NPS లేదా ఇతర ఇన్వెస్ట్మెంట్లలో ఉంచవచ్చు. 
                  జాయింట్ PPF అకౌంట్ తెరవలేం, కుటుంబ సభ్యుల పేర్లలో వేరే అకౌంట్లు తెరవాలి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left">
                EPF నుండి లోన్ ఎలా తీసుకోవాలి?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  EPF నుండి హౌస్ లోన్, మెడికల్ ఎమర్జెన్సీ, చిల్డ్రన్ ఎడ్యూకేషన్ కోసం అడ్వాన్స్ తీసుకోవచ్చు. 
                  ఆన్‌లైన్ EPF పోర్టల్ ద్వారా దరఖాస్తు చేసుకోవాలి. కనీసం 5 సంవత్సరాల సేవ ఉండాలి. 
                  అడ్వాన్స్ మొత్తం మీ కంట్రిబ్యూషన్ మరియు యజమాని కంట్రిబ్యూషన్ మీద ఆధారపడి ఉంటుంది.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger className="text-left">
                జాబ్ మార్చినప్పుడు NPS/EPF ట్రాన్స్ఫర్ అవుతుందా?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  NPS పూర్తిగా పోర్టబుల్ - జాబ్ మార్చినా కంటిన్యూ అవుతుంది. కార్పొరేట్ నుండి ఇండివిడ్యువల్‌కి మార్చాలి. 
                  EPF కూడా ట్రాన్స్ఫర్ అవుతుంది - UAN నంబర్ ద్వారా. కొత్త ఎంప్లాయర్‌తో లింక్ చేసుకోవాలి. 
                  రెండూ ఆన్‌లైన్ ప్రాసెస్. ట్రాన్స్ఫర్ కాకుండా విత్‌డ్రా చేస్తే టాక్స్ లేబిలిటీ ఉంటుంది.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Decision Framework Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            నిర్णయ ఫ్రేమ్‌వర్క్ - సారాంశం
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <PiggyBank className="w-5 h-5" />
                NPS ప్రాధాన్యత ఇవ్వండి
              </h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• అధిక రిటర్న్ లక్ష్యం ఉంటే</li>
                <li>• మార్కెట్ రిస్క్ తీసుకోగల సామర్థ్యం ఉంటే</li>
                <li>• అదనపు టాక్స్ బెనిఫిట్ అవసరం ఉంటే</li>
                <li>• ఇన్వెస్ట్మెంట్ కంట్రోల్ కావాలంటే</li>
                <li>• దీర్ఘకాలిక వెల్త్ క్రియేషన్ గోల్ ఉంటే</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5" />
                PPF ప్రాధాన్యత ఇవ్వండి
              </h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• రిస్క్ ఫ్రీ రిటర్న్ కావాలంటే</li>
                <li>• గ్యారంటీడ్ రిటర్న్ ప్రాధాన్యత ఉంటే</li>
                <li>• ఎమర్జెన్సీ లిక్విడిటీ అవసరం ఉంటే</li>
                <li>• కంప్లీట్ టాక్స్ ఎగ్జెంప్షన్ కావాలంటే</li>
                <li>• కన్జర్వేటివ్ ఇన్వెస్ట్మెంట్ విధానం ఉంటే</li>
              </ul>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                EPF మాక్సిమైజ్ చేయండి
              </h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• సాలరీడ్ ఎంప్లాయీ అయితే</li>
                <li>• ఆటోమేటిక్ సేవింగ్స్ కావాలంటే</li>
                <li>• యజమాని మ్యాచింగ్ ప్రయోజనం పొందాలంటే</li>
                <li>• VPF ద్వారా అదనపు కంట్రిబ్యూషన్ చేయాలంటే</li>
                <li>• జాబ్ చేంజ్ పోర్టబిలిటీ అవసరం ఉంటే</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm text-center" style={{ lineHeight: '1.6' }}>
              <strong>ముఖ్యమైన గమనిక:</strong> ఈ పోలిక విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              రిటైర్మెంట్ ప్లానింగ్ నిర్ణయాలకు ముందు ఫైనాన్షియల్ ప్లానర్‌ని సంప్రదించండి.
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
          ఈ సమాచారం పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే అందించబడింది. ఇది రిటైర్మెంట్ ప్లానింగ్ సలహా కాదు. 
          NPS, PPF, EPF స్కీంలు ప్రభుత్వ పాలసీ మార్పులకు లోబడి ఉంటాయి మరియు రెగ్యులేటరీ మార్పులకు అనుగుణంగా మారవచ్చు. 
          గత పనితీరు భవిష్యత్ ఫలితాలకు గ్యారెంటీ కాదు. రిటైర్మెంట్ ప్లానింగ్ మరియు టాక్స్ ప్లానింగ్ నిర్ణయాలకు ముందు 
          అర్హత కలిగిన రిటైర్మెంట్ ప్లానింగ్ ఎక్స్‌పర్ట్, ఫైనాన్షియల్ ప్లానర్ మరియు టాక్స్ అడ్వైజర్‌ని సంప్రదించండి. 
          పెట్టుబడులకు మార్కెట్ రిస్క్ ఉంటుంది.
        </p>
      </div>
    </div>
  );
}