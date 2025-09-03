'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Zap, Shield, Award, CheckCircle, AlertTriangle } from "lucide-react";

export default function EducationalPurpose() {
  const educationalCommitments = [
    {
      icon: BookOpen,
      title: "పక్షపాతం లేని కంటెంట్",
      description: "మేము ఎటువంటి ఫైనాన్షియల్ ప్రొడక్ట్‌లను ప్రొమోట్ చేయము. పూర్తిగా తటస్థంగా విద్యాపరమైన సమాచారం మాత్రమే అందిస్తాము.",
      commitment: "100% నిష్పక్షపాత విద్యా కంటెంట్"
    },
    {
      icon: Users,
      title: "సమగ్ర కవరేజ్",
      description: "ప్రాథమిక పొదుపుల నుండి అధునాతన పెట్టుబడుల వరకు అన్ని ఆర్థిక అంశాలను కవర్ చేస్తాము.",
      commitment: "ఆర్థిక విద్య యొక్క అన్ని అంశాలు"
    },
    {
      icon: Zap,
      title: "ప్రాక్టికల్ లెర్నింగ్",
      description: "కేవలం థియరీ కాకుండా, వాస్తవ జీవితంలో అమలు చేయగల ప్రాక్టికల్ నాలెడ్జ్ అందిస్తాము.",
      commitment: "అమలు చేయగల విద్యా విధానం"
    },
    {
      icon: Award,
      title: "స్కిల్ బిల్డింగ్",
      description: "ఆర్థిక నిర్ణయాలు తీసుకునే, ప్లానింగ్ చేసే, మరియు రిస్క్ అసెస్మెంట్ స్కిల్స్ అభివృద్ధి చేస్తాము.",
      commitment: "జీవితకాల స్కిల్స్ అభివృద్ధి"
    }
  ];

  const educationalApproach = [
    {
      step: "01",
      title: "ఎవిడెన్స్-బేస్డ్ కంటెంట్",
      description: "అన్ని సమాచారం విశ్వసనీయ మూలాధారాల నుండి, పరిశోధనలపై ఆధారపడి తయారు చేయబడుతుంది",
      features: ["అధికారిక డేటా సోర్స్", "పీర్-రివ్యూడ్ రిసర్చ్", "గవర్న్మెంట్ గైడ్‌లైన్స్"]
    },
    {
      step: "02", 
      title: "ఎక్స్‌పర్ట్ రివ్యూ",
      description: "మా కంటెంట్ అనుభవజ్ఞులైన ఆర్థిక నిపుణులచే సమీక్షించబడుతుంది",
      features: ["CA/CFA నిపుణుల సమీక్ష", "ఇండస్ట్రీ వాలిడేషన్", "క్రమిత నవీకరణలు"]
    },
    {
      step: "03",
      title: "కంటిన్యూయస్ అప్‌డేట్స్",
      description: "ఆర్థిక నియమాలు, మార్కెట్ మార్పులకు అనుగుణంగా కంటెంట్ రెగ్యులర్‌గా అప్‌డేట్ చేస్తాము",
      features: ["వీక్లీ మార్కెట్ అప్‌డేట్స్", "పాలసీ చేంజెస్", "న్యూ ప్రొడక్ట్ ఇన్‌ఫో"]
    },
    {
      step: "04",
      title: "యూజర్-సెంట్రిక్ డిజైన్",
      description: "వినియోగదారుల అవసరాలు మరియు ఫీడ్‌బ్యాక్ ప్రకారం కంటెంట్ మరియు టూల్స్ డిజైన్ చేస్తాము",
      features: ["యూజర్ ఫీడ్‌బ్యాక్ ఇంటిగ్రేషన్", "పర్సనలైజ్డ్ లెర్నింగ్", "యూజబిలిటీ టెస్టింగ్"]
    }
  ];

  const educationalStandards = [
    "ఎటువంటి పర్సనలైజ్డ్ ఫైనాన్షియల్ అడ్వైస్ అందించము",
    "అన్ని కాలిక్యులేటర్లు ఎడ్యుకేషనల్ పర్పస్ మాత్రమే",
    "SEBI గైడ్‌లైన్స్ ప్రకారం కంప్లైంట్ కంటెంట్",
    "ట్రాన్స్‌పేరెంట్ డిస్‌క్లైమర్లు అన్ని పేజీల్లో",
    "నో హిడెన్ ఆజెండా - పూర్తిగా ఎడ్యుకేషనల్",
    "రెగ్యులర్ కంటెంట్ ఆడిట్స్ మరియు క్వాలిటీ చెక్స్"
  ];

  const learningOutcomes = [
    { skill: "బడ్జెట్ ప్లానింగ్", improvement: "90%", description: "వ్యక్తిగత బడ్జెట్ చేయగల సామర్థ్యం" },
    { skill: "ఇన్వెస్ట్మెంట్ అవగాహన", improvement: "85%", description: "పెట్టుబడుల రిస్క్-రిటర్న్ అర్థం" },
    { skill: "ఇన్సూరెన్స్ ప్లానింగ్", improvement: "80%", description: "సరైన ఇన్సూరెన్స్ ఎంపిక" },
    { skill: "టాక్స్ ప్లానింగ్", improvement: "75%", description: "టాక్స్ సేవింగ్ అవగాహన" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              విద్యాపరమైన ఉద్దేశ్య ప్రకటన
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            మేము పూర్తిగా విద్యాపరమైన ఉద్దేశ్యంతో ఆర్థిక జ్ఞానాన్ని అందిస్తున్నాము
          </p>
        </div>

        {/* Educational Philosophy */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              మా విద్యా తత్వశాస్త్రం
            </h3>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-4xl mx-auto">
                <p className="text-red-800 text-lg font-semibold mb-4">
                  ⚠️ ముఖ్యమైన గమనిక ⚠️
                </p>
                <p className="text-red-700 leading-relaxed">
                  మేము <strong>SEBI రిజిస్టర్డ్ ఇన్వెస్ట్మెంట్ అడ్వైజర్స్ కాదు</strong>. 
                  మా కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. మేము ఎటువంటి 
                  పర్సనలైజ్డ్ ఫైనాన్షియల్ అడ్వైస్ అందించము. పెట్టుబడి నిర్ణయాలు తీసుకునే ముందు 
                  దయచేసి క్వాలిఫైడ్ ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationalCommitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <Card key={index} className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {commitment.title}
                        </CardTitle>
                        <p className="text-blue-600 font-medium text-sm">{commitment.commitment}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {commitment.description}
                    </p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Educational Approach */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా విద్యా విధానం
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              నాణ్యమైన విద్యాపరమైన కంటెంట్ అందించడానికి మేము అనుసరించే క్రమబద్ధమైన విధానం
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationalApproach.map((approach, index) => (
              <Card key={index} className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="text-2xl font-bold text-blue-600 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {approach.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{approach.title}</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">{approach.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {approach.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Standards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా విద్యా ప్రమాణాలు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalStandards.map((standard, index) => (
              <Card key={index} className="bg-green-50 border border-green-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {standard}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              విద్యా ఫలితాలు
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              మా వేదిక ద్వారా వినియోగదారులు పొందుతున్న ప్రాక్టికల్ స్కిల్స్ మరియు మెరుగుదలలు
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{outcome.improvement}</div>
                  <div className="font-semibold text-gray-900 mb-2">{outcome.skill}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{outcome.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}