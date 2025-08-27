"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ArticleHeader from "./ArticleHeader";
import LearnFAQ from "./LearnFAQ";
import TelemetryTracker from "./TelemetryTracker";
import { 
  PiggyBank, 
  Shield, 
  TrendingUp, 
  Calendar, 
  Calculator,
  FileText,
  Lock,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from "lucide-react";

export default function PPFLearnContent() {
  const handleContentEngagement = (section: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'content_engagement',
          data: {
            page: 'ppf-learn',
            section: section,
            timestamp: new Date().toISOString()
          }
        }
      }));
    }
  };

  const ppfFAQs = [
    {
      question: "PPF అంటే ఏమిటి?",
      answer: "పబ్లిక్ ప్రావిడెంట్ ఫండ్ (PPF) అనేది ప్రభుత్వ నియంత్రణలో ఉన్న దీర్ఘకాలిక పొదుపు పథకం. ఇది 15 సంవత్సరాల లాక్-ఇన్ పీరియడ్‌తో వస్తుంది మరియు పూర్తిగా టాక్స్ ఫ్రీ రిటర్న్స్ ఇస్తుంది."
    },
    {
      question: "PPF లో ఎంత డబ్బు పెట్టవచ్చు?",
      answer: "సంవత్సరానికి కనీసం ₹500 మరియు గరిష్టంగా ₹1.5 లక్షలు వరకు పెట్టవచ్చు. ఈ మొత్తం సెక్షన్ 80C కింద పన్ను మినహాయింపు పొందుతుంది."
    },
    {
      question: "PPF లో పార్షియల్ విత్‌డ్రాల్ ఎప్పుడు చేయవచ్చు?",
      answer: "7వ సంవత్సరం పూర్తయిన తర్వాత, 4వ సంవత్సరం ముగింపులో ఉన్న బ్యాలెన్స్‌లో 50% వరకు విత్‌డ్రా చేయవచ్చు."
    },
    {
      question: "PPF పై లోన్ ఎప్పుడు తీసుకోవచ్చు?",
      answer: "3వ సంవత్సరం నుంచి 6వ సంవత్సరం వరకు, 2వ సంవత్సరం ముగింపులో ఉన్న బ్యాలెన్స్‌లో 25% వరకు లోన్ తీసుకోవచ్చు."
    },
    {
      question: "PPF మెచ్యూరిటీ తర్వాత ఏమి చేయాలి?",
      answer: "15 సంవత్సరాల తర్వాత మొత్తం మొత్తాన్ని విత్‌డ్రా చేయవచ్చు లేదా 5-5 సంవత్సరాల బ్లాక్‌లలో ఎక్స్‌టెండ్ చేయవచ్చు."
    }
  ];

  const ppfTools = [
    {
      title: "PPF కాలిక్యులేటర్",
      description: "మీ PPF పెట్టుబడి వృద్ధిని మరియు మెచ్యూరిటీ అమౌంట్‌ను లెక్కించండి",
      href: "/calculators/investment/ppf",
      icon: Calculator,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      available: true
    },
    {
      title: "SIP కాలిక్యులేటర్",
      description: "PPF తో పోల్చడానికి SIP రిటర్న్స్ లెక్కించండి",
      href: "/calculators/investment/sip",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      available: true
    },
    {
      title: "రిటైర్మెంట్ కాలిక్యులేటర్",
      description: "మీ రిటైర్మెంట్ కార్పస్ అవసరాలను లెక్కించండి",
      href: "/calculators/planning/retirement",
      icon: PiggyBank,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      available: false
    }
  ];

  const relatedReads = [
    {
      title: "NPS vs PPF - ఏది మంచిది?",
      description: "రెండు రిటైర్మెంట్ ప్లాన్‌ల వివరణాత్మక పోలిక",
      href: "/learn/retirement/nps-vs-ppf",
      available: false
    },
    {
      title: "EPF గురించి తెలుసుకోండి",
      description: "ఉద్యోగుల ప్రావిడెంట్ ఫండ్ యొక్క ప్రయోజనాలు",
      href: "/learn/retirement/epf",
      available: false
    },
    {
      title: "సెక్షన్ 80C టాక్స్ సేవింగ్స్",
      description: "80C కింద అన్ని టాక్స్ సేవింగ్ ఆప్షన్స్",
      href: "/learn/taxation/section-80c",
      available: false
    },
    {
      title: "రిటైర్మెంట్ ప్లానింగ్ గైడ్",
      description: "విభిన్న రిటైర్మెంట్ పథకాలను ఎలా ఎంచుకోవాలి",
      href: "/learn/retirement/planning-guide",
      available: false
    }
  ];

  return (
    <article className="max-w-4xl mx-auto">
      <TelemetryTracker />
      
      {/* Hero Heading with Category Tag */}
      <ArticleHeader 
        category="రిటైర్మెంట్ ప్లానింగ్"
        title="PPF అర్థం చేసుకోండి"
        subtitle="పబ్లిక్ ప్రావిడెంట్ ఫండ్ యొక్క అన్ని నియమాలు, లాభాలు మరియు ఫీచర్లను వివరంగా తెలుసుకోండి"
        onView={() => handleContentEngagement('header')}
      />

      {/* Article Content with Proper Typography */}
      <div className="prose prose-lg max-w-none" style={{ lineHeight: '1.6', fontSize: '16px' }}>
        
        {/* PPF Overview Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('overview')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <PiggyBank className="w-5 h-5 text-white" />
                </div>
                PPF అంటే ఏమిటి?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>పబ్లిక్ ప్రావిడెంట్ ఫండ్ (PPF)</strong> అనేది భారత ప్రభుత్వం నియంత్రించే దీర్ఘకాలిక పొదుపు పథకం. 
                  ఇది రిటైర్మెంట్ ప్లానింగ్ కోసం అత్యంత ప్రభావవంతమైన మరియు సురక్షితమైన ఆప్షన్‌లలో ఒకటిగా పరిగణించబడుతుంది.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800">100% సేఫ్</h4>
                    <p className="text-sm text-green-700">ప్రభుత్వ గ్యారంటీ</p>
                  </div>
                  
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-yellow-800">కంపౌండ్ ఇంట్రెస్ట్</h4>
                    <p className="text-sm text-yellow-700">వార్షిక చక్రవృద్ధి</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-800">EEE స్టేటస్</h4>
                    <p className="text-sm text-purple-700">పూర్తిగా టాక్స్ ఫ్రీ</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* PPF Investment Rules Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('investment-rules')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                పెట్టుబడి నియమాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Contribution Limits */}
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">కంట్రిబ్యూషన్ లిమిట్స్</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        కనీసం: <strong>₹500 సంవత్సరానికి</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        గరిష్టం: <strong>₹1.5 లక్షలు సంవత్సరానికి</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        ఇన్‌క్రిమెంట్: <strong>₹50 మల్టిపుల్స్‌లో</strong>
                      </li>
                    </ul>
                  </div>

                  {/* Lock-in Period */}
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-3">లాక్-ఇన్ పీరియడ్</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-orange-600" />
                        మినిమం: <strong>15 సంవత్సరాలు</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        ఎక్స్‌టెన్షన్: <strong>5-5 సంవత్సరాల బ్లాక్‌లు</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        ప్రీమెచ్యూర్ క్లోజర్: <strong>అనుమతి లేదు</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Interest Rate Information */}
                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">వడ్డీ రేట్ సమాచారం</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2">
                        <strong>ప్రస్తుత రేట్:</strong> <span className="text-green-700 font-bold">7.1% వార్షిక</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        వడ్డీ రేట్ ప్రభుత్వం ప్రతి క్వార్టర్‌లో సమీక్షిస్తుంది
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <strong>చక్రవృద్ధి:</strong> <span className="text-blue-700 font-bold">వార్షికంగా</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        ప్రతి సంవత్సరం మార్చి 31న వడ్డీ జోడించబడుతుంది
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tax Benefits Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('tax-benefits')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                టాక్స్ బెనిఫిట్స్ - EEE స్టేటస్
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  PPF యొక్క ప్రత్యేకత అది <strong>EEE (Exempt-Exempt-Exempt)</strong> స్టేటస్ కలిగి ఉండడం:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">E1</span>
                    </div>
                    <h4 className="font-semibold text-blue-900 mb-2">కంట్రిబ్యూషన్</h4>
                    <p className="text-sm text-blue-800">
                      సెక్షన్ 80C కింద ₹1.5 లక్షల వరకు టాక్స్ డిడక్షన్
                    </p>
                  </div>

                  <div className="text-center p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-yellow-600">E2</span>
                    </div>
                    <h4 className="font-semibold text-yellow-900 mb-2">వడ్డీ</h4>
                    <p className="text-sm text-yellow-800">
                      వార్షిక వడ్డీపై ఎలాంటి టాక్స్ లేదు
                    </p>
                  </div>

                  <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">E3</span>
                    </div>
                    <h4 className="font-semibold text-green-900 mb-2">మెచ్యూరిటీ</h4>
                    <p className="text-sm text-green-800">
                      మెచ్యూరిటీ అమౌంట్ పూర్తిగా టాక్స్ ఫ్రీ
                    </p>
                  </div>
                </div>

                {/* Tax Savings Example */}
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-4">టాక్స్ సేవింగ్ ఉదాహరణ</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-purple-800 mb-2">
                        మీ టాక్స్ స్లాబ్ 30% అయితే:
                      </p>
                      <ul className="space-y-1 text-purple-700 text-sm">
                        <li>• ₹1.5 లక్షల కంట్రిబ్యూషన్</li>
                        <li>• ₹45,000 టాక్స్ సేవింగ్</li>
                        <li>• వాస్తవ పెట్టుబడి: ₹1,05,000</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-pink-800 mb-2">
                        15 సంవత్సరాలలో మొత్తం సేవింగ్:
                      </p>
                      <ul className="space-y-1 text-pink-700 text-sm">
                        <li>• ₹6,75,000 టాక్స్ సేవింగ్</li>
                        <li>• ప్లస్ టాక్స్ ఫ్రీ వడ్డీ</li>
                        <li>• ప్లస్ టాక్స్ ఫ్రీ మెచ్యూరిటీ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* PPF Features Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('ppf-features')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                PPF ప్రత్యేక ఫీచర్లు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* Partial Withdrawal */}
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    పార్షియల్ విత్‌డ్రాల్
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">అర్హత:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• 7వ సంవత్సరం పూర్తయిన తర్వాత</li>
                        <li>• మొదటిసారి మాత్రమే</li>
                        <li>• అత్యవసర పరిస్థితుల్లో</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">లిమిట్:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• 4వ సంవత్సరం ముగింపు బ్యాలెన్స్</li>
                        <li>• లేదా మునుపటి సంవత్సరం ముగింపు బ్యాలెన్స్</li>
                        <li>• వీటిలో తక్కువది యొక్క 50%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Loan Facility */}
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    లోన్ ఫెసిలిటీ
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">అవకాశం:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• 3వ నుంచి 6వ సంవత్సరం వరకు</li>
                        <li>• భర్తీ చేయాల్సిన కాలావధి: 36 నెలలు</li>
                        <li>• వడ్డీ రేట్: PPF రేట్ + 1%</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">లోన్ లిమిట్:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• 2వ సంవత్సరం ముగింపు బ్యాలెన్స్</li>
                        <li>• లేదా మునుపటి సంవత్సరం ముగింపు బ్యాలెన్స్</li>
                        <li>• వీటిలో తక్కువది యొక్క 25%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Extension Options */}
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    ఎక్స్‌టెన్షన్ ఆప్షన్స్
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">15 సంవత్సరాల తర్వాత:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• మొత్తం విత్‌డ్రా చేయవచ్చు</li>
                        <li>• లేదా 5-5 సంవత్సరాల బ్లాక్‌లలో ఎక్స్‌టెండ్ చేయవచ్చు</li>
                        <li>• ఎక్స్‌టెన్షన్‌లో కొత్త కంట్రిబ్యూషన్ ఐచ్ఛికం</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">ఎక్స్‌టెన్షన్ లాభాలు:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• వడ్డీ లభిస్తుంది</li>
                        <li>• కొత్త కంట్రిబ్యూషన్‌కు 80C బెనిఫిట్</li>
                        <li>• పూర్తిగా టాక్స్ ఫ్రీ రిటర్న్స్</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* PPF vs Others Comparison */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('comparison')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                PPF vs ఇతర పెట్టుబడులు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold">ఫీచర్</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">PPF</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">EPF</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">NPS</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">ELSS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">లాక్-ఇన్ పీరియడ్</td>
                      <td className="border border-gray-300 p-3 text-center">15 సంవత్సరాలు</td>
                      <td className="border border-gray-300 p-3 text-center">రిటైర్మెంట్ వరకు</td>
                      <td className="border border-gray-300 p-3 text-center">60 సంవత్సరాల వరకు</td>
                      <td className="border border-gray-300 p-3 text-center">3 సంవత్సరాలు</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">రిస్క్</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">జీరో రిస్క్</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">జీరో రిస్క్</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">మీడియం</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">హై రిస్క్</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">రిటర్న్స్</td>
                      <td className="border border-gray-300 p-3 text-center">7-8%</td>
                      <td className="border border-gray-300 p-3 text-center">8-9%</td>
                      <td className="border border-gray-300 p-3 text-center">10-12%</td>
                      <td className="border border-gray-300 p-3 text-center">12-15%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">80C బెనిఫిట్</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">✓</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">✓</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">✓</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">మెచ్యూరిటీ టాక్స్</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">టాక్స్ ఫ్రీ</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">టాక్స్ ఫ్రీ</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">టాక్స్ అప్లైర్</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">LTCG టాక్స్</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">PPF యొక్క ప్రత్యేకతలు:</h4>
                <ul className="space-y-1 text-blue-800 text-sm">
                  <li>• <strong>రిస్క్ ఫ్రీ:</strong> ప్రభుత్వ గ్యారంటీతో 100% సేఫ్</li>
                  <li>• <strong>ఫ్లెక్సిబిలిటీ:</strong> కనీసం ₹500 నుంచి మొదలుపెట్టవచ్చు</li>
                  <li>• <strong>లాంగ్ టర్మ్ వెల్త్ క్రియేషన్:</strong> 15+ సంవత్సరాల కంపౌండింగ్</li>
                  <li>• <strong>టాక్స్ ప్లానింగ్:</strong> EEE స్టేటస్ తో మల్టిపుల్ బెనిఫిట్స్</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Tools Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('related-tools')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                సంబంధిత కాలిక్యులేటర్లు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                PPF పెట్టుబడిని ప్లాన్ చేయడానికి మరియు ఇతర పెట్టుబడులతో పోల్చడానికి ఈ కాలిక్యులేటర్లను ఉపయోగించండి:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {ppfTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div 
                      key={tool.title}
                      className={`${tool.bgColor} ${tool.borderColor} border-2 rounded-lg p-6 transition-all hover:shadow-lg ${tool.available ? '' : 'opacity-75'}`}
                    >
                      <div className="text-center">
                        <div className={`w-12 h-12 ${tool.bgColor.replace('50', '100')} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${tool.color}`} />
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                        
                        <Button 
                          asChild={tool.available}
                          variant={tool.available ? "default" : "secondary"}
                          size="sm"
                          className={`w-full ${tool.available ? '' : 'cursor-not-allowed'}`}
                          disabled={!tool.available}
                          onClick={() => handleContentEngagement('tool-click-' + tool.title)}
                        >
                          {tool.available ? (
                            <Link href={tool.href}>
                              లెక్కించండి
                            </Link>
                          ) : (
                            <span>త్వరలో...</span>
                          )}
                        </Button>
                        
                        {tool.available ? (
                          <div className="mt-2">
                            <Badge variant="default" className="bg-green-600">
                              అందుబాటులో
                            </Badge>
                          </div>
                        ) : (
                          <div className="mt-2">
                            <Badge variant="outline">
                              త్వరలో
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>గమనిక:</strong> ఈ కాలిక్యులేటర్లు విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                  వాస్తవ రాబడులు మార్కెట్ పరిస్థితులను మరియు ప్రభుత్వ నియమ మార్పులను బట్టి మారవచ్చు. 
                  పెట్టుబడి నిర్ణయాలకు ముందు ఆర్థిక సలహాదారుని సంప్రదించండి.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Reads Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('related-reads')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                సంబంధిత వ్యాసాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                రిటైర్మెంట్ ప్లానింగ్ మరియు పెట్టుబడుల గురించి మరింత తెలుసుకోవడానికి ఈ వ్యాసాలను చదవండి:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {relatedReads.map((article) => (
                  <div 
                    key={article.title}
                    className={`border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md ${article.available ? 'hover:border-blue-300' : 'opacity-75'}`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                    
                    <Button
                      asChild={article.available}
                      variant={article.available ? "outline" : "secondary"}
                      size="sm"
                      className={`${article.available ? '' : 'cursor-not-allowed'}`}
                      disabled={!article.available}
                      onClick={() => handleContentEngagement('article-click-' + article.title)}
                    >
                      {article.available ? (
                        <Link href={article.href}>
                          చదవండి
                        </Link>
                      ) : (
                        <span>త్వరలో...</span>
                      )}
                    </Button>

                    <div className="mt-2">
                      <Badge variant={article.available ? "default" : "outline"} className={article.available ? "bg-blue-600" : ""}>
                        {article.available ? "అందుబాటులో" : "త్వరలో"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('faq')}>
          <LearnFAQ 
            title="PPF గురించిన ప్రధాన ప్రశ్నలు"
            faqs={ppfFAQs}
            onFAQInteraction={(question) => handleContentEngagement('faq-' + question)}
          />
        </section>

        {/* Important Notes */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('important-notes')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                ముఖ్యమైన గమనికలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">డిస్‌క్లైమర్:</h4>
                  <p className="text-red-800 text-sm">
                    ఈ కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. ఇది పెట్టుబడి సలహా కాదు. 
                    PPF నియమాలు మరియు వడ్డీ రేట్లు ప్రభుత్వం మార్చవచ్చు. అన్ని పెట్టుబడి నిర్ణయాలకు ముందు 
                    అర్హత కలిగిన ఆర్థిక సలహాదారుని సంప్రదించండి.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">తాజా సమాచారం:</h4>
                  <p className="text-blue-800 text-sm">
                    PPF వడ్డీ రేట్లు మరియు నియమాలు ప్రభుత్వం క్రమం తప్పకుండా అప్‌డేట్ చేస్తుంది. 
                    తాజా సమాచారం కోసం అధికారిక ప్రభుత్వ వెబ్‌సైట్లను చూడండి లేదా బ్యాంక్‌ను సంప్రదించండి.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </article>
  );
}