"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import ArticleHeader from "./ArticleHeader";
import LearnFAQ from "./LearnFAQ";
import TelemetryTracker from "./TelemetryTracker";
import { 
  FileText, 
  Calculator,
  PiggyBank,
  AlertTriangle,
  CheckCircle,
  Info,
  Building,
  TrendingUp,
  Shield,
  Receipt,
  Calendar
} from "lucide-react";

export default function IncomeTaxContent() {
  const handleContentEngagement = (section: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'content_engagement',
          data: {
            page: 'income-tax-learn',
            section: section,
            timestamp: new Date().toISOString()
          }
        }
      }));
    }
  };

  const incomeTaxFAQs = [
    {
      question: "ఆదాయపు పన్ను అంటే ఏమిటి?",
      answer: "ఆదాయపు పన్ను అంటే మీ వార్షిక ఆదాయంపై ప్రభుత్వానికి చెల్లించే పన్ను. ఇది మీ జీతం, వ్యాపార లాభాలు, పెట్టుబడుల నుండి వచ్చే ఆదాయంపై వసూలు చేయబడుతుంది. ఇది దేశ అభివృద్ధి కోసం ఉపయోగించబడుతుంది."
    },
    {
      question: "పాత పన్ను విధానం vs కొత్త పన్ను విధానం ఏది మంచిది?",
      answer: "రెండు విధానాల్లోనూ వేర్వేరు ప్రయోజనాలు ఉన్నాయి. పాత విధానంలో 80C, 80D వంటి కోతలు ఉంటాయి. కొత్త విధానంలో తక్కువ పన్ను రేట్లు ఉంటాయి కానీ కోతలు పరిమితం. మీ పెట్టుబడుల ఆధారంగా ఏది మంచిదో లెక్కించాలి."
    },
    {
      question: "సెక్షన్ 80C కింద ఏమి ఏమి కవర్ అవుతుంది?",
      answer: "80C కింద PPF, ELSS మ్యూచువల్ ఫండ్స్, లైఫ్ ఇన్షూరెన్స్ ప్రీమియం, ఇంట్లోన్ ప్రిన్సిపల్, 5 ఏళ్ల ఎఫ్డి, NSC వంటివి కవర్ అవుతాయి. గరిష్టంగా ₹1.5 లక్షల వరకు కోత పొందవచ్చు."
    },
    {
      question: "ITR ఫైలింగ్ ఎప్పుడు చేయాలి?",
      answer: "సాధారణంగా ప్రతి ఏడాది జూలై 31 నేటికి ITR ఫైల్ చేయాలి. జాప్యం అయితే పెనాల్టీ కడవాల్సి వస్తుంది. ఆన్‌లైన్‌లో income tax e-filing portal ద్వారా చేయవచ్చు."
    },
    {
      question: "TDS అంటే ఏమిటి? ఎలా రీఫండ్ పొందాలి?",
      answer: "TDS అంటే జీతం, ఇంట్రెస్ట్ నుండి ముందుగానే కట్ చేసే పన్ను. మీ వార్షిక పన్ను లయబిలిటీ కంటే TDS ఎక్కువ అయితే రీఫండ్ పొందవచ్చు. ITR ఫైల్ చేసిన తర్వాత రీఫండ్ ప్రాసెస్ అవుతుంది."
    },
    {
      question: "అడ్వాన్స్ టాక్స్ ఎవరు చెల్లించాలి?",
      answer: "వార్షిక పన్ను ₹10,000 కంటే ఎక్కువ ఉంటే అడ్వాన్స్ టాక్స్ చెల్లించాలి. జీతం లేని వ్యాపారులు, ఫ్రీలాన్సర్లు, రెంటల్ ఇన్కమ్ ఉన్న వారు త్రైమాసికంగా చెల్లించాలి."
    }
  ];

  const taxSlabsOld2024 = [
    { range: "₹0 - ₹2,50,000", rate: "0%", description: "పన్ను లేదు" },
    { range: "₹2,50,001 - ₹5,00,000", rate: "5%", description: "రీబేట్ తో 0% కూడా కావచ్చు" },
    { range: "₹5,00,001 - ₹10,00,000", rate: "20%", description: "స్టాండర్డ్ కోత + 80C కోతలు" },
    { range: "₹10,00,001+", rate: "30%", description: "అధిక ఆదాయం కోసం" }
  ];

  const taxSlabsNew2024 = [
    { range: "₹0 - ₹3,00,000", rate: "0%", description: "పన్ను లేదు" },
    { range: "₹3,00,001 - ₹6,00,000", rate: "5%", description: "రీబేట్ తో 0% కూడా కావచ్చు" },
    { range: "₹6,00,001 - ₹9,00,000", rate: "10%", description: "తక్కువ పన్ను రేటు" },
    { range: "₹9,00,001 - ₹12,00,000", rate: "15%", description: "మధ్యతర పన్ను రేటు" },
    { range: "₹12,00,001 - ₹15,00,000", rate: "20%", description: "అధిక పన్ను రేటు" },
    { range: "₹15,00,001+", rate: "30%", description: "అత్యధిక ఆదాయం" }
  ];

  const popularDeductions = [
    { section: "80C", limit: "₹1,50,000", description: "PPF, ELSS, లైఫ్ ఇన్షూరెన్స్, హోమ్ లోన్ ప్రిన్సిపల్" },
    { section: "80D", limit: "₹25,000", description: "హెల్త్ ఇన్షూరెన్స్ ప్రీమియం (స్వయం + కుటుంబం)" },
    { section: "80D", limit: "+₹25,000", description: "తల్లిదండ్రుల హెల్త్ ఇన్షూరెన్స్" },
    { section: "80G", limit: "వేర్వేరు", description: "దానధర్మాలు - PM CARES, దాతృత్వ సంస్థలు" },
    { section: "80TTA", limit: "₹10,000", description: "సేవింగ్ అకౌంట్ ఇంట్రెస్ట్" },
    { section: "24(b)", limit: "₹2,00,000", description: "హోమ్ లోన్ ఇంట్రెస్ట్" }
  ];

  const itrForms = [
    { form: "ITR-1", suitable: "జీతం మరియు ఇంట్రెస్ట్ ఇన్కమ్ మాత్రమే (₹50L వరకు)" },
    { form: "ITR-2", suitable: "క్యాపిటల్ గైన్స్, మల్టిపుల్ హౌస్ ప్రాపర్టీలు" },
    { form: "ITR-3", suitable: "వ్యాపార లేదా వృత్తిపరమైన ఆదాయం" },
    { form: "ITR-4", suitable: "చిన్న వ్యాపారులు (₹2Cr వరకు టర్న్‌ఓవర్)" }
  ];

  const relatedTools = [
    {
      title: "ఇన్కమ్ టాక్స్ కాలిక్యులేటర్",
      description: "మీ పన్ను లయబిలిటీ లెక్కించండి",
      href: "/calculators/taxation/income-tax",
      icon: <Calculator className="w-5 h-5" />
    },
    {
      title: "HRA కాలిక్యులేటర్",
      description: "హౌస్ రెంట్ అలవెన్స్ లెక్కించండి",
      href: "/calculators/taxation/hra",
      icon: <Building className="w-5 h-5" />
    },
    {
      title: "80C డిడక్షన్ కాలిక్యులేటర్",
      description: "సెక్షన్ 80C కోతలు లెక్కించండి",
      href: "/calculators/taxation/section-80c",
      icon: <PiggyBank className="w-5 h-5" />
    }
  ];

  const relatedReads = [
    {
      title: "సెక్షన్ 80C గైడ్",
      description: "80C కింద వచ్చే అన్ని పెట్టుబడుల గురించి",
      href: "/learn/taxation/section-80c-deductions"
    },
    {
      title: "సెక్షన్ 80D గైడ్",
      description: "హెల్త్ ఇన్షూరెన్స్ టాక్స్ బెనిఫిట్స్",
      href: "/learn/taxation/section-80d-health-insurance"
    },
    {
      title: "క్యాపిటల్ గైన్స్ టాక్స్",
      description: "పెట్టుబడుల నుండి వచ్చే లాభాలపై పన్ను",
      href: "/learn/taxation/capital-gains-tax"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <TelemetryTracker trackPageView={true} />
      
      {/* Hero Section */}
      <ArticleHeader 
        title="ఆదాయపు పన్ను బేసిక్స్ అర్థం చేసుకోండి"
        subtitle="ఆదాయపు పన్ను గురించి పూర్తి గైడ్ - పన్ను స్లాబ్‌లు, కోతలు, ఫైలింగ్ ప్రక్రియ మరియు టాక్స్ ప్లానింగ్ వ్యూహాలు"
        category="పన్నులు"
        onView={() => handleContentEngagement('header')}
      />

      {/* Income Tax Basics */}
      <Card onClick={() => handleContentEngagement('basics')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            ఆదాయపు పన్ను అంటే ఏమిటి?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            ఆదాయపు పన్ను అంటే మీ వార్షిక ఆదాయంపై ప్రభుత్వానికి చెల్లించే పన్ను. ఇది <strong>ప్రోగ్రెసివ్ టాక్సేషన్</strong> 
            సిస్టమ్ ప్రకారం వసూలు చేయబడుతుంది - అంటే ఆదాయం ఎక్కువ అయినంత మాత్రాన పన్ను రేటు కూడా పెరుగుతుంది.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">ఆదాయపు పన్ను ముఖ్య లక్షణాలు:</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• మీ మొత్తం ఆదాయంపై వసూలు (జీతం, వ్యాపారం, పెట్టుబడుల లాభాలు)</li>
              <li>• ఆర్థిక సంవత్సరం: ఏప్రిల్ 1 నుండి మార్చి 31 వరకు</li>
              <li>• వివిధ కోతలు (deductions) ద్వారా పన్ను తగ్గించుకోవచ్చు</li>
              <li>• ITR ఫైలింగ్ ద్వారా సంవత్సరానికి ఒకసారి చెల్లించాలి</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Tax Slabs Comparison */}
      <Card onClick={() => handleContentEngagement('tax-slabs')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            పన్ను స్లాబ్‌లు - పాత vs కొత్త పన్ను విధానం
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Old Tax Regime */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">పాత పన్ను విధానం</Badge>
                <Info className="w-4 h-4 text-blue-500" />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ఆదాయం</TableHead>
                    <TableHead>రేటు</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {taxSlabsOld2024.map((slab, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{slab.range}</TableCell>
                      <TableCell>
                        <span className="font-semibold">{slab.rate}</span>
                        <p className="text-xs text-gray-600 mt-1">{slab.description}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4 p-3 bg-amber-50 rounded border-l-4 border-amber-400">
                <p className="text-amber-800 text-sm">
                  <strong>ప్రయోజనం:</strong> 80C, 80D వంటి అనేక కోతలు అందుబాటులో ఉంటాయి
                </p>
              </div>
            </div>

            {/* New Tax Regime */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default">కొత్త పన్ను విధానం</Badge>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ఆదాయం</TableHead>
                    <TableHead>రేటు</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {taxSlabsNew2024.map((slab, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{slab.range}</TableCell>
                      <TableCell>
                        <span className="font-semibold">{slab.rate}</span>
                        <p className="text-xs text-gray-600 mt-1">{slab.description}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4 p-3 bg-green-50 rounded border-l-4 border-green-400">
                <p className="text-green-800 text-sm">
                  <strong>ప్రయోజనం:</strong> తక్కువ పన్ను రేట్లు, సాధారణ గణనలు
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">ఏ విధానం ఎంచుకోవాలి?</h4>
            <p className="text-gray-700 text-sm">
              మీరు 80C, 80D వంటి కోతలు ఎక్కువగా ఉపయోగిస్తుంటే పాత విధానం మంచిది. 
              కోతలు తక్కువ లేదా లేకపోతే కొత్త విధానం మంచిది. రెండింటిని లెక్కించి చూడండి.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Popular Deductions */}
      <Card onClick={() => handleContentEngagement('deductions')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <PiggyBank className="w-6 h-6 text-purple-600" />
            ప్రసిద్ధ పన్ను కోతలు (Tax Deductions)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularDeductions.map((deduction, index) => (
              <div key={index} className="flex items-start gap-4 p-3 border rounded-lg hover:bg-gray-50">
                <Badge variant="outline" className="mt-1">{deduction.section}</Badge>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-green-700">{deduction.limit}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{deduction.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <p className="text-purple-800 text-sm">
              <strong>గుర్తుంచుకోండి:</strong> ఈ కోతలు పాత పన్ను విధానంలో మాత్రమే వర్తిస్తాయి. 
              కొత్త విధానంలో చాలా తక్కువ కోతలే ఉంటాయి.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ITR Filing Process */}
      <Card onClick={() => handleContentEngagement('filing')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Receipt className="w-6 h-6 text-orange-600" />
            ITR ఫైలింగ్ ప్రక్రియ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="p-4 border-l-4 border-blue-400 bg-blue-50">
              <h4 className="font-semibold text-blue-900 mb-2">
                <Calendar className="w-5 h-5 inline mr-2" />
                ముఖ్యమైన తేదీలు:
              </h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• ITR ఫైలింగ్: జూలై 31 (సాధారణ పన్ను చెల్లింపుదారులకు)</li>
                <li>• ఆడిట్ కేసులు: అక్టోబర్ 31</li>
                <li>• అడ్వాన్స్ టాక్స్: జూన్ 15, సెప్టెంబర్ 15, డిసెంబర్ 15, మార్చి 15</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">ఏ ITR ఫారమ్ ఉపయోగించాలి?</h4>
              <div className="space-y-2">
                {itrForms.map((form, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded">
                    <Badge variant="secondary">{form.form}</Badge>
                    <p className="text-sm text-gray-700">{form.suitable}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">ఫైలింగ్ ప్రక్రియ:</h4>
              <ol className="text-orange-800 text-sm space-y-1 list-decimal list-inside">
                <li>incometaxindiaefiling.gov.in లో లాగిన్ చేయండి</li>
                <li>సరైన ITR ఫారమ్ ఎంచుకోండి</li>
                <li>ఆదాయం, కోతల వివరాలు నింపండి</li>
                <li>పన్ను లెక్కింపు వేరిఫై చేయండి</li>
                <li>ఫైల్ చేసిన తర్వాత e-verification చేయండి</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Tax Planning */}
      <Card onClick={() => handleContentEngagement('planning')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-indigo-600" />
            అడ్వాన్స్డ్ టాక్స్ ప్లానింగ్
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="tds-concept">
              <AccordionTrigger>TDS (Tax Deducted at Source) అర్థం చేసుకోండి</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-gray-700">
                  TDS అంటే మీ ఆదాయం నుండి ముందుగానే కట్ చేసే పన్ను. జీతం, బ్యాంక్ ఇంట్రెస్ట్, 
                  ఫిక్స్‌డ్ డిపాజిట్ ఇంట్రెస్ట్ నుండి TDS కట్ చేస్తారు.
                </p>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h5 className="font-medium mb-2">TDS రేట్లు:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• జీతం: స్లాబ్ రేట్ ప్రకారం</li>
                    <li>• సేవింగ్ అకౌంట్ ఇంట్రెస్ట్: 10% (₹40,000+ అయితే)</li>
                    <li>• ఎఫ్‌డి ఇంట్రెస్ట్: 10% (₹40,000+ అయితే)</li>
                    <li>• రెంట్: 10% (₹2,40,000+ అయితే)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="advance-tax">
              <AccordionTrigger>అడ్వాన్స్ టాక్స్ ఎవరు చెల్లించాలి?</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-gray-700">
                  వార్షిక పన్ను లయబిలిటీ ₹10,000 కంటే ఎక్కువ ఉంటే అడ్వాన్స్ టాక్స్ చెల్లించాలి. 
                  జీతం లేని వారికి ఇది ముఖ్యం.
                </p>
                
                <div className="grid gap-4">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-medium mb-2">అడ్వాన్స్ టాక్స్ షెడ్యూల్:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• జూన్ 15: 15% చెల్లించాలి</li>
                      <li>• సెప్టెంబర్ 15: మొత్తంలో 45% చెల్లించాలి</li>
                      <li>• డిసెంబర్ 15: మొత్తంలో 75% చెల్లించాలి</li>
                      <li>• మార్చి 15: మొత్తం 100% చెల్లించాలి</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="penalty-avoidance">
              <AccordionTrigger>పెనాల్టీలను ఎలా నివారించాలి?</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <h5 className="font-medium text-red-900 mb-2">సాధారణ పెనాల్టీలు:</h5>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• లేట్ ఫైలింగ్: ₹5,000 వరకు</li>
                      <li>• అడ్వాన్స్ టాక్స్ లేకపోవడం: 1% నెలవారీ వడ్డీ</li>
                      <li>• TDS లేకపోవడం: 1% నెలవారీ వడ్డీ</li>
                      <li>• తప్పుడు రిటర్న్లు: 200% వరకు పెనాల్టీ</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h5 className="font-medium text-green-900 mb-2">ఎలా నివారించాలి:</h5>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• సమయానికి ITR ఫైల్ చేయండి</li>
                      <li>• అడ్వాన్స్ టాక్స్ సరైన సమయంలో చెల్లించండి</li>
                      <li>• అన్ని ఆదాయాలను సరిగా రిపోర్ట్ చేయండి</li>
                      <li>• CA సలహా తీసుకోండి క్లిష్టమైన కేసుల్లో</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <LearnFAQ 
        title="ఆదాయపు పన్ను గురించి తరచుగా అడిగే ప్రశ్నలు"
        faqs={incomeTaxFAQs}
        onFAQInteraction={() => handleContentEngagement('faq')}
      />

      {/* Related Tools */}
      <Card onClick={() => handleContentEngagement('related-tools')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-blue-600" />
            సంబంధిత కాలిక్యులేటర్లు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-1">
            {relatedTools.map((tool, index) => (
              <Link 
                key={index}
                href={tool.href} 
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors"
                onClick={() => handleContentEngagement(`tool-link-${tool.title}`)}
              >
                <div className="flex items-center gap-3">
                  {tool.icon}
                  <div>
                    <div className="font-medium">{tool.title}</div>
                    <div className="text-sm text-gray-600">{tool.description}</div>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Related Reads */}
      <Card onClick={() => handleContentEngagement('related-reads')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-green-600" />
            మరింత చదవండి
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {relatedReads.map((read, index) => (
              <Link 
                key={index}
                href={read.href} 
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 hover:border-green-300 transition-colors"
                onClick={() => handleContentEngagement(`read-link-${read.title}`)}
              >
                <div>
                  <div className="font-medium">{read.title}</div>
                  <div className="text-sm text-gray-600">{read.description}</div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Disclaimer */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">ముఖ్యమైన డిస్క్లైమర్:</h4>
              <p className="text-yellow-800 text-sm leading-relaxed">
                ఈ కంటెంట్ కేవలం విద్యా ప్రయోజనాల కోసం మాత్రమే. ఇది పన్ను సలహా కాదు. 
                పన్ను చట్టాలు తరచుగా మారతాయి. ముఖ్యమైన పన్ను నిర్ణయాలకు ముందు 
                లైసెన్స్ ఉన్న టాక్స్ కన్సల్టెంట్ లేదా చార్టర్డ్ అకౌంటెంట్‌ని సంప్రదించండి. 
                ఇన్కమ్ టాక్స్ డిపార్ట్‌మెంట్ అధికారిక వెబ్‌సైట్‌ను కూడా చూడండి.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}