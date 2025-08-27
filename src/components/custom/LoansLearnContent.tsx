"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ArticleHeader from "./ArticleHeader";
import LearnFAQ from "./LearnFAQ";
import TelemetryTracker from "./TelemetryTracker";

export default function LoansLearnContent() {
  const handleContentEngagement = (section: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'content_engagement',
          data: {
            page: 'loans-learn',
            section: section,
            timestamp: new Date().toISOString()
          }
        }
      }));
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      <TelemetryTracker />
      
      {/* Hero Heading with Category Tag */}
      <ArticleHeader 
        category="బ్యాంకింగ్ & క్రెడిట్"
        title="లోన్‌లు అర్థం చేసుకోండి"
        subtitle="లోన్‌ల రకాలు, EMI, వడ్డీ రేట్లు మరియు దరఖాస్తు ప్రక్రియ గురించి సరళమైన తెలుగులో తెలుసుకోండి"
        onView={() => handleContentEngagement('header')}
      />

      {/* Article Content with Proper Typography */}
      <div className="prose prose-lg max-w-none" style={{ lineHeight: '1.6', fontSize: '16px' }}>
        
        {/* Overview Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('overview')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                లోన్ అంటే ఏమిటి?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                లోన్ అనేది బ్యాంకు లేదా ఆర్థిక సంస్థ నుండి డబ్బును అప్పుగా తీసుకుని, 
                ఒప్పందం ప్రకారం వడ్డీతో సహా తిరిగి చెల్లించే వ్యవస్థ.
              </p>
              
              <p className="text-gray-700 mb-4">
                మీకు పెద్ద ఖర్చుకు డబ్బు అవసరమైనప్పుడు (గృహ కొనుగోలు, వాహన కొనుగోలు, విద్య వంటివి), 
                లోన్ తీసుకుని నెలవారీ వాయిదాలు (EMI) గా తిరిగి చెల్లించవచ్చు.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                <p className="text-blue-800 font-medium">
                  సరళంగా చెప్పాలంటే: మీరు నేడు డబ్బు అవసరమైనప్పుడు బ్యాంకు నుండి తీసుకుని, 
                  రాబోయే నెలల్లో వడ్డీతో కలిపి తిరిగి చెల్లించే వ్యవస్థ.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Concepts Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('concepts')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                ముఖ్యమైన అంశాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* EMI Concept */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">EMI అంటే ఏమిటి?</h3>
                  <p className="text-gray-700 mb-3">
                    EMI (Equated Monthly Installment) అనేది మీరు ప్రతి నెలా చెల్లించే నిర్దిష్ట మొత్తం. 
                    ఇది ప్రిన్సిపల్ (మూలధనం) మరియు వడ్డీ రెండింటినీ కలిపి ఉంటుంది.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>ఉదాహరణ:</strong> ₹10 లక్షల లోన్ తీసుకుని, 10% వడ్డీ రేటుతో 10 సంవత్సరాలకు, 
                      మీ EMI సుమారు ₹13,215 అవుతుంది.
                    </p>
                  </div>
                </div>

                {/* Interest Rate Types */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">వడ్డీ రేట్ రకాలు</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">ఫిక్స్‌డ్ వడ్డీ రేట్</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• లోన్ వ్యవధి అంతా వడ్డీ రేట్ మారదు</li>
                        <li>• EMI ఎల్లప్పుడూ ఒకటే ఉంటుంది</li>
                        <li>• బడ్జెట్ ప్లాన్ చేయడం సులభం</li>
                        <li>• మార్కెట్ వడ్డీ రేట్ పెరిగినా ప్రభావం లేదు</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">ఫ్లోటింగ్ వడ్డీ రేట్</h4>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• మార్కెట్ వడ్డీ రేట్లను బట్టి మారుతుంది</li>
                        <li>• EMI పెరుగుతూ తగ్గుతూ ఉంటుంది</li>
                        <li>• మార్కెట్ రేట్ తగ్గితే లాభం</li>
                        <li>• సాధారణంగా ఫిక్స్‌డ్ కంటే తక్కువగా మొదలవుతుంది</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Loan Terms */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">లోన్ వ్యవధి (Tenure)</h3>
                  <p className="text-gray-700 mb-3">
                    లోన్ వ్యవధి అంటే మీరు లోన్‌ను పూర్తిగా తిరిగి చెల్లించడానికి తీసుకునే కాలం.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">తక్కువ వ్యవధి</h4>
                      <ul className="text-gray-700 text-sm mt-2 space-y-1">
                        <li>• ఎక్కువ EMI</li>
                        <li>• తక్కువ మొత్తం వడ్డీ</li>
                        <li>• త్వరగా లోన్ ముగుస్తుంది</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">ఎక్కువ వ్యవధి</h4>
                      <ul className="text-gray-700 text-sm mt-2 space-y-1">
                        <li>• తక్కువ EMI</li>
                        <li>• ఎక్కువ మొత్తం వడ్డీ</li>
                        <li>• ఆర్థిక భారం తక్కువ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Loan Types Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('loan-types')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                లోన్‌ల రకాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* Home Loan */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">హోమ్ లోన్</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-3">
                    ఇల్లు కొనుగోలు, నిర్మాణం లేదా మరమ్మతుల కోసం తీసుకునే లోన్.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">వడ్డీ రేట్:</strong>
                      <p className="text-gray-600">6.5% - 12%</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">వ్యవధి:</strong>
                      <p className="text-gray-600">5 - 30 సంవత్సరాలు</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">మొత్తం:</strong>
                      <p className="text-gray-600">₹5 లక్షలు - ₹10 కోట్లు</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>ప్రత్యేకతలు:</strong> ట్యాక్స్ బెనిఫిట్స్, తక్కువ వడ్డీ రేట్, దీర్ఘకాలిక వ్యవధి
                    </p>
                  </div>
                </div>

                {/* Car Loan */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7h-3V5a1 1 0 00-1-1H9a1 1 0 00-1 1v2H5a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">కార్ లోన్</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-3">
                    కార్ లేదా ఇతర వాహనాల కొనుగోలు కోసం తీసుకునే లోన్.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">వడ్డీ రేట్:</strong>
                      <p className="text-gray-600">8% - 15%</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">వ్యవధి:</strong>
                      <p className="text-gray-600">1 - 7 సంవత్సరాలు</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">మొత్తం:</strong>
                      <p className="text-gray-600">₹2 లక్షలు - ₹1 కోటి</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="text-green-800 text-sm">
                      <strong>ప్రత్యేకతలు:</strong> వేగమైన ఆప్రూవల్, వాహనం హైపోథెకేషన్, ప్రీ-క్లోజర్ అవకాశం
                    </p>
                  </div>
                </div>

                {/* Personal Loan */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">పర్సనల్ లోన్</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-3">
                    వ్యక్తిగత అవసరాలకు, ఎటువంటి హామీ లేకుండా తీసుకునే లోన్.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">వడ్డీ రేట్:</strong>
                      <p className="text-gray-600">10.5% - 24%</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">వ్యవధి:</strong>
                      <p className="text-gray-600">1 - 5 సంవత్సరాలు</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">మొత్తం:</strong>
                      <p className="text-gray-600">₹50 వేలు - ₹40 లక్షలు</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-orange-50 rounded">
                    <p className="text-orange-800 text-sm">
                      <strong>ప్రత్యేకతలు:</strong> వేగమైన ప్రాసెసింగ్, కొలేట్రల్ అవసరం లేదు, ఫ్లెక్సిబుల్ వాడుక
                    </p>
                  </div>
                </div>

                {/* Other Loan Types */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">ఇతర లోన్‌ల రకాలు</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">ఎడ్యుకేషన్ లోన్</h4>
                      <p className="text-gray-700 text-sm">విద్యా అవసరాలకు, తక్కువ వడ్డీ రేట్‌తో పొందవచ్చు</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">గోల్డ్ లోన్</h4>
                      <p className="text-gray-700 text-sm">బంగారాన్ని హామీగా పెట్టి తీసుకునే లోన్</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">లోన్ అగైనిస్ట్ ప్రాపర్టీ</h4>
                      <p className="text-gray-700 text-sm">ఆస్తిని హామీగా పెట్టి తీసుకునే లోన్</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">బిజినెస్ లోన్</h4>
                      <p className="text-gray-700 text-sm">వ్యాపార అవసరాలకు తీసుకునే లోన్</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Application Process Section */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('application-process')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                లోన్ దరఖాస్తు ప్రక్రియ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* General Requirements */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">సాధారణ అవసరాలు</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">వ్యక్తిగత వివరాలు</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• ఆధార్ కార్డ్</li>
                        <li>• PAN కార్డ్</li>
                        <li>• పాస్‌పోర్ట్ సైజ్ ఫోటోలు</li>
                        <li>• చిరునామా ప్రూఫ్</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">ఆదాయ వివరాలు</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• జీతం స్లిప్‌లు</li>
                        <li>• బ్యాంక్ స్టేట్‌మెంట్‌లు</li>
                        <li>• ITR రిటర్న్‌లు</li>
                        <li>• ఉద్యోగ సర్టిఫికేట్</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Eligibility Factors */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">అర్హత నిర్ణయ కారకాలు</h3>
                  
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">CIBIL స్కోర్</h4>
                      <p className="text-gray-700 text-sm">750+ స్కోర్ ఉంటే మంచి వడ్డీ రేట్ మరియు త్వరిత ఆప్రూవల్ అవకాశం</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">ఆదాయం</h4>
                      <p className="text-gray-700 text-sm">స్థిరమైన ఆదాయం మరియు EMI-ఆదాయ నిష్పత్తి 40-50% లోపు ఉండాలి</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">వయస్సు</h4>
                      <p className="text-gray-700 text-sm">21-65 సంవత్సరాలు (లోన్ రకాన్ని బట్టి మారవచ్చు)</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">ఉద్యోగ స్థిరత్వం</h4>
                      <p className="text-gray-700 text-sm">కనీసం 1-2 సంవత్సరాల ఉద్యోగ అనుభవం</p>
                    </div>
                  </div>
                </div>

                {/* Application Steps */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">దరఖాస్తు దశలు</h3>
                  
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "దరఖాస్తు పూర్తి చేయండి", desc: "ఆన్‌లైన్ లేదా బ్రాంచ్‌లో దరఖాస్తు ఫారం పూర్తి చేయండి" },
                      { step: 2, title: "డాక్యుమెంట్‌లు సమర్పించండి", desc: "అవసరమైన పత్రాలను అప్‌లోడ్ చేయండి లేదా సమర్పించండి" },
                      { step: 3, title: "వెరిఫికేషన్", desc: "బ్యాంక్ మీ వివరాలను మరియు పత్రాలను వెరిఫై చేస్తుంది" },
                      { step: 4, title: "ఆప్రూవల్", desc: "క్రెడిట్ చెక్ తర్వాత లోన్ ఆప్రూవ్ అవుతుంది" },
                      { step: 5, title: "డిస్‌బర్స్‌మెంట్", desc: "లోన్ మొత్తం మీ ఖాతాలో జమ అవుతుంది" }
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Tools Section - Custom for Loans */}
        <section className="mb-12" onMouseEnter={() => handleContentEngagement('related-tools')}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                సంబంధిత కాలిక్యులేటర్లు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                లోన్ నిర్ణయాలు తీసుకోవడానికి ఈ కాలిక్యులేటర్లను ఉపయోగించండి:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 transition-all hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">EMI కాలిక్యులేటర్</h3>
                    <p className="text-sm text-gray-600 mb-4">మీ లోన్ EMI మొత్తాన్ని లెక్కించండి</p>
                    
                    <Link
                      href="/calculators/loan/emi"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      onClick={() => handleContentEngagement('emi-calculator')}
                    >
                      లెక్కించండి
                    </Link>
                    
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        అందుబాటులో
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 opacity-75">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">లోన్ ఎలిజిబిలిటీ</h3>
                    <p className="text-sm text-gray-600 mb-4">మీరు ఎంత లోన్ తీసుకోవచ్చో తెలుసుకోండి</p>
                    
                    <button
                      className="w-full px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
                      disabled
                    >
                      త్వరలో...
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 opacity-75">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">ప్రీ-పేమెంట్ ప్రభావం</h3>
                    <p className="text-sm text-gray-600 mb-4">అదనపు చెల్లింపుల ప్రభావం చూడండి</p>
                    
                    <button
                      className="w-full px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
                      disabled
                    >
                      త్వరలో...
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 opacity-75">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">బ్యాలెన్స్ ట్రాన్స్‌ఫర్</h3>
                    <p className="text-sm text-gray-600 mb-4">లోన్ బ్యాలెన్స్ ట్రాన్స్‌ఫర్ లాభాలు</p>
                    
                    <button
                      className="w-full px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
                      disabled
                    >
                      త్వరలో...
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>గమనిక:</strong> ఈ కాలిక్యులేటర్లు విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                  వాస్తవ లోన్ నిబంధనలు లెండర్‌ను బట్టి మారవచ్చు. లోన్ తీసుకునే ముందు ఆర్థిక సలహాదారుని సంప్రదించండి.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <LearnFAQ 
          title="లోన్‌ల గురించి తరచుగా అడిగే ప్రశ్నలు"
          faqs={[
            {
              question: "లోన్‌కు దరఖాస్తు చేయడానికి కనిష్ఠ CIBIL స్కోర్ ఎంత?",
              answer: "చాలా బ్యాంకులు 650+ CIBIL స్కోర్ అవసరం. అయితే 750+ స్కోర్ ఉంటే మంచి వడ్డీ రేట్ మరియు త్వరిత ఆప్రూవల్ అవకాశం ఉంటుంది."
            },
            {
              question: "EMI ఎలా లెక్కిస్తారు?",
              answer: "EMI = [P × R × (1+R)^N] / [(1+R)^N - 1] సూత్రంతో లెక్కిస్తారు. ఇక్కడ P = ప్రిన్సిపల్, R = నెలవారీ వడ్డీ రేట్, N = నెలల సంఖ్య."
            },
            {
              question: "లోన్‌ను ముందుగానే మూసివేయవచ్చా?",
              answer: "చాలా లోన్‌లలో ప్రీ-క్లోజర్ అవకాశం ఉంటుంది. కొన్ని బ్యాంకులు ప్రీ-క్లోజర్ ఛార్జీలు వసూలు చేస్తాయి. హోమ్ లోన్‌లలో సాధారణంగా ఛార్జీలు ఉండవు."
            },
            {
              question: "లోన్ రిజెక్ట్ అయితే ఏమి చేయాలి?",
              answer: "రిజెక్షన్ కారణం తెలుసుకుని, CIBIL స్కోర్ మెరుగుపరచుకోండి. ఆదాయం పెంచుకోండి లేదా కో-అప్లికెంట్ జోడించుకోండి. కొంత సమయం తర్వాత మళ్ళీ దరఖాస్తు చేయండి."
            },
            {
              question: "ఫిక్స్‌డ్ vs ఫ్లోటింగ్ - ఏది మంచిది?",
              answer: "మార్కెట్ వడ్డీ రేట్లు తగ్గే అవకాశం ఉంటే ఫ్లోటింగ్ మంచిది. స్థిరమైన EMI కావాలంటే ఫిక్స్‌డ్ ఎంచుకోండి. లాంగ్ టర్మ్ లోన్‌లకు ఫ్లోటింగ్ సాధారణంగా మంచిది."
            },
            {
              question: "లోన్ ఇన్‌షూరెన్స్ తీసుకోవాలా?",
              answer: "లోన్ ఇన్‌షూరెన్స్ తీసుకోవడం మీ ఎంపిక. మీ కుటుంబంపై ఆర్థిక భారం రాకుండా ఉండాలంటే తీసుకోవచ్చు. అయితే ఇన్‌షూరెన్స్ కాస్ట్ vs బెనిఫిట్ లెక్కించుకోండి."
            }
          ]}
          onFAQInteraction={(question) => handleContentEngagement(`faq-${question}`)}
        />

        {/* Cross-Links Block - Custom for Loans */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                సంబంధిత వ్యాసాలు మరియు మార్గదర్శకాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                లోన్‌లు మరియు క్రెడిట్ గురించి మరింత తెలుసుకోవడానికి ఈ వ్యాసాలను చదవండి:
              </p>

              {/* Coming Soon Links */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">పోలిక వ్యాసాలు</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">హోమ్ లోన్ vs అద్దె</h4>
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              త్వరలో
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">ఇల్లు కొనుగోలు vs అద్దె - ఏది మంచిది?</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">CIBIL స్కోర్ & క్రెడిట్ రిపోర్ట్</h4>
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              త్వరలో
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">మీ క్రెడిట్ స్కోర్‌ను ఎలా మెరుగుపరుచుకోవాలి?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">చిట్కాలు</h3>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">EMI భారం తగ్గించడం</h4>
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              త్వరలో
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">మీ లోన్ EMI భారాన్ని ఎలా తగ్గించుకోవాలి?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>గమనిక:</strong> పై వ్యాసాలన్నీ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                  ఇవి లోన్ సలహా కాదు. లోన్ నిర్ణయాలు తీసుకునే ముందు అర్హత కలిగిన ఆర్థిక సలహాదారుని సంప్రదించండి.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-lg font-semibold text-red-900 mb-3">
            ముఖ్యమైన నిరాకరణ
          </h3>
          <p className="text-red-800 text-sm leading-relaxed">
            ఈ సమాచారం విద్యాపరమైన ఉద్దేశ్యాలకే పరిమితం. ఇది లోన్ సలహా కాదు. 
            లోన్ వడ్డీ రేట్లు, నిబంధనలు మరియు అర్హత మార్కెట్ పరిస్థితులు మరియు లెండర్ విధానాలను బట్టి మారవచ్చు. 
            ఏదైనా లోన్ తీసుకునే ముందు అర్హత కలిగిన ఆర్థిక సలహాదారుని సంప్రదించండి. 
            లోన్ తీసుకోవడం ముందు అన్ని నిబంధనలు మరియు పత్రాలను జాగ్రత్తగా చదివి అర్థం చేసుకోండి.
          </p>
        </div>
      </div>
    </article>
  );
}