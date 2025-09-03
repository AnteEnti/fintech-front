'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, FileText, Gavel, CheckCircle, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MandatoryCompliance() {
  const criticalDisclaimers = [
    {
      title: "ఇన్వెస్ట్మెంట్ అడ్వైజరీ డిస్‌క్లైమర్",
      content: "మేము SEBI రిజిస్టర్డ్ ఇన్వెస్ట్మెంట్ అడ్వైజర్స్ కాదు. మా కంటెంట్ మరియు కాలిక్యులేటర్లు పూర్తిగా ఎడ్యుకేషనల్ పర్పస్ కోసం మాత్రమే. ఏదైనా ఇన్వెస్ట్మెంట్ నిర్ణయం తీసుకునే ముందు లైసెన్స్డ్ ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి.",
      priority: "అత్యధిక"
    },
    {
      title: "రిస్క్ వార్నింగ్",
      content: "అన్ని ఇన్వెస్ట్మెంట్లలో రిస్క్ ఉంది. గతంలో జరిగిన పర్ఫార్మెన్స్ భవిష్యత్ రిజల్ట్లకు గ్యారంటీ కాదు. మార్కెట్ పరిస్థితులను బట్టి మీ పెట్టుబడుల విలువ తగ్గవచ్చు లేదా పెరుగవచ్చు.",
      priority: "అధిక"
    },
    {
      title: "కాలిక్యులేటర్ లిమిటేషన్లు",
      content: "మా కాలిక్యులేటర్లు అంచనాలు మరియు అసంప్షన్ల ఆధారంగా రిజల్ట్లు చూపుతాయి. వాస్తవ రిజల్ట్లు టాక్స్, ఫీస్, మరియు మార్కెట్ మార్పుల కారణంగా భిన్నంగా ఉండవచ్చు.",
      priority: "అధిక"
    },
    {
      title: "రెగ్యులేటరీ కంప్లైంట్",
      content: "మేము SEBI, RBI, మరియు IRDAI గైడ్‌లైన్స్ ప్రకారం మా కంటెంట్‌ను క్రియేట్ చేస్తాము. అయితే, రెగ్యులేటరీ మార్పులు రెగ్యులర్‌గా అప్‌డేట్ అవుతాయి కాబట్టి లేటెస్ట్ ఇన్ఫర్మేషన్ కోసం ఆఫీషియల్ సోర్స్‌లను చెక్ చేయండి.",
      priority: "మధ్యమ"
    }
  ];

  const legalNotices = [
    {
      category: "కాపీరైట్ & ఇంటెలెక్చువల్ ప్రాపర్టీ",
      notice: "ఈ వెబ్‌సైట్‌లోని అన్ని కంటెంట్, డిజైన్, కాలిక్యులేటర్లు మరియు సాఫ్ట్‌వేర్ FinTech Telugu యొక్క ఇంటెలెక్చువల్ ప్రాపర్టీ. అనుమతి లేకుండా కాపీ, రిప్రొడక్షన్ లేదా డిస్ట్రిబ్యూషన్ చేయకూడదు.",
      laws: "కాపీరైట్ యాక్ట్ 1957, ట్రేడ్‌మార్క్ యాక్ట్ 1999"
    },
    {
      category: "డేటా ప్రైవసీ & ప్రొటెక్షన్",
      notice: "మేము యూజర్ ప్రైవసీని గౌరవిస్తాము మరియు డిజిటల్ ప్రైవసీ లాస్ 2023 ప్రకారం మా డేటా కలెక్షన్ మరియు ప్రాసెసింగ్ చేస్తాము. మా ప్రైవసీ పాలసీ వివరమైన సమాచారం కోసం చూడండి.",
      laws: "IT యాక్ట్ 2000, డిజిటల్ ప్రైవసీ లా 2023"
    },
    {
      category: "లయబిలిటీ లిమిటేషన్",
      notice: "మా ఎడ్యుకేషనల్ కంటెంట్ వాడకంలో ఏదైనా నష్టం లేదా హాని జరిగితే మేము బాధ్యత వహించము. యూజర్లు తమ సొంత రిస్క్‌పై ఇన్ఫర్మేషన్ వాడుకోవాలి.",
      laws: "ఇండియన్ కాంట్రాక్ట్ యాక్ట్ 1872, కన్జ్యూమర్ ప్రొటెక్షన్ యాక్ట్ 2019"
    },
    {
      category: "జూరిస్డిక్షన్ & గవర్నింగ్ లా",
      notice: "ఈ వెబ్‌సైట్ మరియు సర్వీస్‌లకు సంబంధించిన అన్ని లీగల్ మామలేలు హైదరాబాద్, తెలంగాణ కోర్ట్‌ల జూరిస్డిక్షన్‌లో మాత్రమే వస్తాయి మరియు ఇండియన్ లాస్ ప్రకారం పరిష్కరిస్తాము.",
      laws: "సివిల్ ప్రొసీజర్ కోడ్ 1908, ఇండియన్ జూడిషియరీ సిస్టమ్"
    }
  ];

  const mandatoryPages = [
    {
      page: "ప్రైవసీ పాలసీ",
      description: "యూజర్ డేటా కలెక్షన్, యూసేజ్, మరియు ప్రొటెక్షన్ గురించిన వివరాలు",
      required: "GDPR & డిజిటల్ ప్రైవసీ లా కంప్లైంట్",
      link: "/privacy-policy"
    },
    {
      page: "టర్మ్స్ & కండిషన్లు",
      description: "వెబ్‌సైట్ వాడకంకు సంబంధించిన నియమాలు మరియు షరతులు",
      required: "లీగల్ కంప్లైంట్ మరియు యూజర్ అగ్రీమెంట్",
      link: "/terms-conditions"
    },
    {
      page: "డిస్‌క్లైమర్ పేజీ",
      description: "ఇన్వెస్ట్మెంట్ అడ్వైజ్ మరియు రిస్క్ వార్నింగ్ డిస్‌క్లైమర్లు",
      required: "SEBI గైడ్‌లైన్స్ కంప్లైంట్",
      link: "/disclaimer"
    },
    {
      page: "రిఫండ్ & కాన్సెలేషన్",
      description: "పేయిడ్ సర్వీసెస్‌కు రిఫండ్ పాలసీ (భవిష్యత్‌కు)",
      required: "కన్జ్యూమర్ ప్రొటెక్షన్ లా కంప్లైంట్",
      link: "/refund-policy"
    }
  ];

  const complianceUpdates = [
    {
      date: "జనవరి 2025",
      update: "డిజిటల్ ప్రైవసీ లా 2023 అనుగుణంగా ప్రైవసీ పాలసీ అప్‌డేట్",
      status: "కంప్లీట్"
    },
    {
      date: "మార్చి 2025",
      update: "SEBI కొత్త ఇన్వెస్టర్ ప్రొటెక్షన్ గైడ్‌లైన్స్ ఇంప్లిమెంటేషన్",
      status: "ప్రోగ్రెస్‌లో"
    },
    {
      date: "జూన్ 2025",
      update: "కన్జ్యూమర్ ప్రొటెక్షన్ లా అప్‌డేట్స్ కంప్లైంట్",
      status: "ప్లాన్డ్"
    }
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Gavel className="w-10 h-10 text-red-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              తప్పనిసరి కంప్లైంట్ మరియు లీగల్ నోటీసులు
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            భారతీయ చట్టాలు మరియు రెగ్యులేటరీ గైడ్‌లైన్స్ ప్రకారం తప్పనిసరి సమాచారం
          </p>
        </div>

        {/* Critical Warning Section */}
        <div className="mb-16">
          <Card className="bg-red-100 border-2 border-red-300">
            <CardHeader>
              <div className="flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mr-4" />
                <div className="text-center">
                  <CardTitle className="text-2xl text-red-800 mb-2">
                    🚨 అత్యంత ముఖ్యమైన హెచ్చరిక 🚨
                  </CardTitle>
                  <p className="text-red-700 font-semibold">
                    దయచేసి ఈ డిస్‌క్లైమర్‌లను జాగ్రత్తగా చదవండి
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-white border-2 border-red-300 rounded-lg p-6">
                <div className="text-center text-red-800 font-bold text-lg mb-4">
                  మేము ఫైనాన్షియల్ అడ్వైజర్స్ కాదు - కేవలం ఎడ్యుకేషనల్ ప్లాట్‌ఫాం
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-red-700">
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">SEBI రిజిస్టర్డ్ కాదు</p>
                  </div>
                  <div className="text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">ఇన్వెస్ట్మెంట్ అడ్వైస్ లేదు</p>
                  </div>
                  <div className="text-center">
                    <Info className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">ఎడ్యుకేషనల్ మాత్రమే</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Disclaimers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              క్రిటికల్ డిస్‌క్లైమర్లు
            </h3>
          </div>

          <div className="space-y-6">
            {criticalDisclaimers.map((disclaimer, index) => (
              <Card key={index} className="bg-white border-l-4 border-l-red-500 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        disclaimer.priority === 'అত్యధిక' ? 'bg-red-100 text-red-800' :
                        disclaimer.priority === 'అధిక' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {disclaimer.priority} ప్రాధాన్యత
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-3">{disclaimer.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{disclaimer.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Notices */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              లీగల్ నోటీసులు మరియు కంప్లైంట్
            </h3>
          </div>

          <div className="space-y-8">
            {legalNotices.map((legal, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Gavel className="w-6 h-6 text-blue-600 mr-3" />
                    {legal.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{legal.notice}</p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-800 font-semibold text-sm">
                      సంబంధిత చట్టాలు: {legal.laws}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mandatory Pages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              తప్పనిసరి పాలసీ పేజీలు
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              లీగల్ కంప్లైంట్ కోసం అవసరమైన పాలసీ పేజీలు
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mandatoryPages.map((page, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">{page.page}</h4>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">{page.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-800 font-medium text-sm">{page.required}</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    పేజీ చూడండి
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Timeline */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              కంప్లైంట్ అప్‌డేట్ టైమ్‌లైన్
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              లీగల్ మరియు రెగ్యులేటరీ మార్పులకు అనుగుణంగా మా అప్‌డేట్లు
            </p>
          </div>

          <div className="space-y-4">
            {complianceUpdates.map((update, index) => (
              <Card key={index} className="bg-white border-l-4 border-l-blue-500 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {update.date}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          update.status === 'కంప్లీట్' ? 'bg-green-100 text-green-800' :
                          update.status === 'ప్రోగ్రెస్‌లో' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {update.status}
                        </span>
                      </div>
                      <p className="text-gray-700">{update.update}</p>
                    </div>
                    <CheckCircle className={`w-6 h-6 ml-4 ${
                      update.status === 'కంప్లీట్' ? 'text-green-500' :
                      update.status === 'ప్రోగ్రెస్‌లో' ? 'text-yellow-500' :
                      'text-gray-400'
                    }`} />
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