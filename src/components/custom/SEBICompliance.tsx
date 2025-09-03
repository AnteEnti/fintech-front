'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Scale, FileText, AlertTriangle, CheckCircle, Gavel } from "lucide-react";

export default function SEBICompliance() {
  const complianceCommitments = [
    {
      icon: Scale,
      title: "SEBI గైడ్‌లైన్స్ పాలన",
      description: "మేము SEBI (సెక్యూరిటీస్ అండ్ ఎక్స్‌చేంజ్ బోర్డ్ ఆఫ్ ఇండియా) నిర్దేశించిన అన్ని గైడ్‌లైన్స్‌ను కట్టుబాటుగా అనుసరిస్తాము",
      measures: ["ఇన్వెస్ట్మెంట్ అడ్వైస్ అందించము", "రెగ్యులేటెడ్ ఎంటిటీ కాదు", "ఎడ్యుకేషనల్ కంటెంట్ మాత్రమే"]
    },
    {
      icon: FileText,
      title: "రెగ్యులేటరీ ఫ్రేమ్‌వర్క్ గౌరవం",
      description: "భారతీయ ఆర్థిక వ్యవస్థ యొక్క రెగ్యులేటరీ ఫ్రేమ్‌వర్క్‌ను పూర్తిగా గౌరవించి పని చేస్తాము",
      measures: ["RBI గైడ్‌లైన్స్", "IRDAI నిబంధనలు", "Income Tax రూల్స్"]
    },
    {
      icon: AlertTriangle,
      title: "ఎడ్యుకేషనల్-ఓన్లీ అప్రోచ్",
      description: "మేము కేవలం విద్యాపరమైన సమాచారం మాత్రమే అందిస్తాము, ఎటువంటి ఇన్వెస్ట్మెంట్ అడ్వైస్ లేదా రికమెండేషన్లు ఇవ్వము",
      measures: ["నో పర్సనలైజ్డ్ అడ్వైస్", "నో స్పెసిఫిక్ రికమెండేషన్స్", "నో గ్యారంటీడ్ రిటర్న్స్ క్లెయిమ్స్"]
    }
  ];

  const complianceMonitoring = [
    {
      area: "కంటెంట్ రివ్యూ ప్రాసెస్",
      description: "అన్ని కంటెంట్ పబ్లిష్ చేసే ముందు కంప్లైంట్ అంశాలను కట్టుబాటుగా చెక్ చేస్తాము",
      frequency: "ప్రతి కంటెంట్ పీస్‌కు"
    },
    {
      area: "డిస్‌క్లైమర్ ఇంప్లిమెంటేషన్",
      description: "అన్ని పేజీలు, కాలిక్యులేటర్లు మరియు కంటెంట్‌లో తగిన డిస్‌క్లైమర్లను ప్రదర్శిస్తాము",
      frequency: "అన్ని పేజీల్లో"
    },
    {
      area: "అడ్వైజరీ డిస్టింక్షన్ క్లారిటీ",
      description: "మా విద్యా కంటెంట్ మరియు లైసెన్స్డ్ అడ్వైజర్ల సేవలు మధ్య స్పష్టమైన తేడాను తెలియజేస్తాము",
      frequency: "అన్ని కమ్యూనికేషన్లలో"
    },
    {
      area: "రెగ్యులేటరీ అప్‌డేట్స్ ట్రాకింగ్",
      description: "SEBI, RBI మరియు ఇతర రెగ్యులేటర్ల నిర్ణయాలను రెగ్యులర్‌గా మానిటర్ చేసి అవసరమైన మార్పులు చేస్తాము",
      frequency: "వీక్లీ మానిటరింగ్"
    }
  ];

  const trustMeasures = [
    "అన్ని కాలిక్యులేటర్లలో స్పష్టమైన డిస్‌క్లైమర్లు",
    "ఎటువంటి హిడెన్ కమిషన్లు లేవు",
    "మార్కెట్ పెర్ఫార్మెన్స్ గ్యారంటీలు ఇవ్వము",
    "ట్రాన్స్‌పేరెంట్ సోర్స్ ఇన్ఫర్మేషన్",
    "రెగ్యులర్ లీగల్ రివ్యూ ప్రాసెస్",
    "యూజర్ ప్రైవసీ ప్రొటెక్షన్"
  ];

  const complianceUpdates = [
    {
      date: "జనవరి 2024",
      update: "SEBI కొత్త ఇన్వెస్టర్ ప్రొటెక్షన్ గైడ్‌లైన్స్ అనుసరించడం",
      action: "అన్ని డిస్‌క్లైమర్లు అప్‌డేట్ చేయబడ్డాయి"
    },
    {
      date: "మార్చి 2024", 
      update: "RBI డిజిటల్ లెండింగ్ గైడ్‌లైన్స్ కంప్లైంట్",
      action: "లోన్ కాలిక్యులేటర్ డిస్‌క్లైమర్లు మెరుగుపరచబడ్డాయి"
    },
    {
      date: "జూన్ 2024",
      update: "IRDAI ఇన్సూరెన్స్ ప్రొడక్ట్ ఇన్ఫర్మేషన్ గైడ్‌లైన్స్",
      action: "ఇన్సూరెన్స్ కంటెంట్ కంప్లైంట్ చేయబడింది"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-10 h-10 text-green-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              SEBI కంప్లైంస్ మరియు రెగ్యులేటరీ ఫ్రేమ్‌వర్క్
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            మేము భారతీయ రెగ్యులేటరీ ఫ్రేమ్‌వర్క్‌ను కట్టుబాటుగా అనుసరించి, పూర్తిగా కంప్లైంట్ విధానంలో పని చేస్తున్నాము
          </p>
        </div>

        {/* Compliance Warning */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              ముఖ్యమైన రెగ్యులేటరీ డిస్‌క్లైమర్
            </h3>
            <div className="bg-white border border-red-300 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-red-800 text-lg font-semibold mb-4">
                🚨 కంప్లైంస్ నోటిస్ 🚨
              </p>
              <div className="text-left space-y-4 text-red-700">
                <p>• <strong>మేము SEBI రిజిస్టర్డ్ ఇన్వెస్ట్మెంట్ అడ్వైజర్స్ కాదు</strong></p>
                <p>• <strong>మేము AMFI రిజిస్టర్డ్ మ్యూచువల్ ఫండ్ డిస్ట్రిబ్యూటర్స్ కాదు</strong></p>
                <p>• <strong>మేము IRDAI లైసెన్స్డ్ ఇన్సూరెన్స్ ఏజెంట్లు కాదు</strong></p>
                <p>• <strong>మా కంటెంట్ పూర్తిగా ఎడ్యుకేషనల్ పర్పస్ మాత్రమే</strong></p>
                <p>• <strong>ఎటువంటి గ్యారంటీడ్ రిటర్న్లు లేదా పర్ఫార్మెన్స్ క్లెయిమ్లు చేయము</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Commitments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా కంప్లైంస్ కమిట్మెంట్స్
            </h3>
          </div>

          <div className="space-y-8">
            {complianceCommitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <Card key={index} className="bg-white shadow-lg border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-4 bg-green-100 rounded-lg mr-6">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                          {commitment.title}
                        </CardTitle>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {commitment.description}
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          {commitment.measures.map((measure, idx) => (
                            <div key={idx} className="flex items-center bg-green-50 p-3 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-green-800 font-medium text-sm">{measure}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Compliance Monitoring */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              కంప్లైంస్ మానిటరింగ్ ప్రాసెస్
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceMonitoring.map((monitor, index) => (
              <Card key={index} className="bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Gavel className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-bold text-gray-900">{monitor.area}</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">{monitor.description}</p>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <span className="text-blue-800 font-semibold text-sm">
                      ఫ్రీక్వెన్సీ: {monitor.frequency}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Measures */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              విశ్వసనీయత చర్యలు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustMeasures.map((measure, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{measure}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Compliance Updates */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              రీసెంట్ కంప్లైంస్ అప్‌డేట్స్
            </h3>
            <p className="text-lg text-gray-600">
              రెగ్యులేటరీ మార్పులకు అనుగుణంగా మా తాజా అప్‌డేట్స్
            </p>
          </div>

          <div className="space-y-6">
            {complianceUpdates.map((update, index) => (
              <Card key={index} className="bg-white shadow-md border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {update.date}
                        </span>
                        <h4 className="font-semibold text-gray-900">{update.update}</h4>
                      </div>
                      <p className="text-gray-600">{update.action}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}