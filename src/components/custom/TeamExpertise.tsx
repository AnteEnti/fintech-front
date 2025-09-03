'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Code, Briefcase, Users, CheckCircle, Star } from "lucide-react";

export default function TeamExpertise() {
  const expertiseAreas = [
    {
      icon: GraduationCap,
      title: "ఫైనాన్షియల్ ఎడ్యుకేషన్ నిపుణత",
      description: "చార్టర్డ్ అకౌంటెంట్లు (CA) మరియు సర్టిఫైడ్ ఫైనాన్షియల్ ప్లానర్లు (CFP) తో కలిసి కంటెంట్ క్రియేషన్",
      highlights: ["15+ సంవత్సరాల అనుభవం", "SEBI/RBI గైడ్‌లైన్ల పరిజ్ఞానం", "ఇండస్ట్రీ బెస్ట్ ప్రాక్టీసెస్"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Code,
      title: "టెక్నాలజీ మరియు ఇన్నోవేషన్",
      description: "అధునాతన వెబ్ టెక్నాలజీలు మరియు యూజర్ ఎక్స్‌పీరియన్స్ డిజైన్‌లో నైపుణ్యం",
      highlights: ["Next.js & React నిపుణత", "రెస్పాన్సివ్ డిజైన్", "పర్ఫార్మెన్స్ ఆప్టిమైజేషన్"],
      color: "text-green-600", 
      bgColor: "bg-green-50"
    },
    {
      icon: BookOpen,
      title: "తెలుగు కంటెంట్ స్పెషలైజేషన్",
      description: "తెలుగు భాష మరియు సాంస్కృతిక సంస్కృతిలో లోతైన అవగాహనతో కంటెంట్ డెవలప్మెంట్",
      highlights: ["తెలుగు సాహిత్య నేపథ్యం", "కల్చరల్ సెన్సిటివిటీ", "లొకల్ కాన్టెక్స్ట్ అండర్‌స్టాండింగ్"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Award,
      title: "ఇండస్ట్రీ ఎక్స్‌పర్టైజ్",
      description: "బ్యాంకింగ్, ఇన్సూరెన్స్, మ్యూచువల్ ఫండ్స్ మరియు ఇన్వెస్ట్మెంట్ సెక్టర్‌లలో అనుభవం",
      highlights: ["బ్యాంకింగ్ సెక్టర్ అనుభవం", "రెగ్యులేటరీ కంప్లైంట్", "మార్కెట్ డైనమిక్స్ అవగాహన"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const teamValues = [
    {
      title: "కంటిన్యూయస్ లెర్నింగ్",
      description: "ఆర్థిక మార్కెట్లలో జరుగుతున్న మార్పులను అనుసరించి మా జ్ఞానాన్ని ఎల్లప్పుడూ అప్‌డేట్ చేసుకుంటూ ఉంటాము",
      icon: GraduationCap
    },
    {
      title: "కాలబరేటివ్ అప్రోచ్",
      description: "వివిధ రంగాల నిపుణులతో కలిసి పని చేసి అత్యుత్తమ కంటెంట్ మరియు సొల్యూషన్లను రూపొందిస్తాము",
      icon: Users
    },
    {
      title: "క్వాలిటీ అష్యూరెన్స్",
      description: "ప్రతి కంటెంట్ పీస్ ముల్టిపుల్ రివ్యూ ప్రాసెస్‌ను దాటి పబ్లిష్ చేయబడుతుంది",
      icon: CheckCircle
    },
    {
      title: "ఇన్నోవేటివ్ థింకింగ్",
      description: "సంప్రదాయ ఆర్థిక విద్య పద్ధతుల్లో ఇన్నోవేషన్ తీసుకొచ్చి మరింత ఎఫెక్టివ్ లెర్నింగ్ ఎక్స్‌పీరియన్స్ అందిస్తాము",
      icon: Star
    }
  ];

  const professionalCommitments = [
    "ప్రతి వ్రాసిన కంటెంట్ ఇండస్ట్రీ ఎక్స్‌పర్ట్స్ చే రివ్యూ చేయబడుతుంది",
    "రెగ్యులర్ స్కిల్ డెవలప్మెంట్ మరియు సర్టిఫికేషన్ ప్రోగ్రామ్స్ పార్టిసిపేషన్",
    "యూజర్ ఫీడ్‌బ్యాక్ ప్రకారం కంటెంట్ మరియు టూల్స్ ఇంప్రూవ్మెంట్",
    "ఎథికల్ స్టాండర్డ్స్ మరియు ప్రొఫెషనల్ కాండక్ట్ కట్టుబాటుగా పాటించడం",
    "ట్రాన్స్‌పేరెంట్ కమ్యూనికేషన్ మరియు అకౌంటబిలిటీ మైంటెయిన్ చేయడం",
    "కంటిన్యూయస్ రిసర్చ్ మరియు డేటా-డ్రివెన్ ఇంప్రూవ్మెంట్స్"
  ];

  const developmentPhilosophy = [
    {
      phase: "రిసర్చ్ & అనాలిసిస్",
      description: "ప్రతి టాపిక్‌కు గాను వ్యాపకమైన రిసర్చ్ చేసి, అప్‌టు-డేట్ ఇన్ఫర్మేషన్ సేకరించడం",
      activities: ["మార్కెట్ ట్రెండ్స్ అనాలిసిస్", "రెగ్యులేటరీ అప్‌డేట్స్ ట్రాకింగ్", "యూజర్ నీడ్స్ అసెస్మెంట్"]
    },
    {
      phase: "కంటెంట్ క్రియేషన్",
      description: "సరళమైన తెలుగు భాషలో, కల్చరల్లీ రెలెవెంట్ అయిన కంటెంట్ రూపొందించడం",
      activities: ["తెలుగు టెక్నికల్ టర్మినాలజీ", "లొకల్ ఎగ్జాంపుల్స్ & కేస్ స్టడీలు", "ప్రాక్టికల్ అప్లికేషన్ గైడెన్స్"]
    },
    {
      phase: "రివ్యూ & వాలిడేషన్",
      description: "ముల్టిపుల్ లెవెల్ రివ్యూ ప్రాసెస్ దాటి అక్యురేట్ మరియు కంప్లైంట్ కంటెంట్ ఎన్సూర్ చేయడం",
      activities: ["ఎక్స్‌పర్ట్ రివ్యూ", "లీగల్ కంప్లైంస్ చెక్", "యూజబిలిటీ టెస్టింగ్"]
    },
    {
      phase: "పబ్లికేషన్ & మానిటరింగ్",
      description: "కంటెంట్ పబ్లిష్ చేసిన తర్వాత కంటిన్యూయస్ మానిటరింగ్ మరియు ఇంప్రూవ్మెంట్",
      activities: ["యూజర్ ఎంగేజ్మెంట్ ట్రాకింగ్", "ఫీడ్‌బ్యాక్ కలెక్షన్", "రెగ్యులర్ అప్‌డేట్స్"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              మా టీమ్ నైపుణ్యం మరియు అనుభవం
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            విశ్వసనీయ ఆర్థిక విద్యను అందించడానికి మా టీమ్ యొక్క వైవిధ్యమైన నైపుణ్యం మరియు లోతైన అనుభవం
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా ప్రధాన నైపుణ్య రంగాలు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`${area.bgColor} rounded-lg p-3 mr-4`}>
                        <Icon className={`w-6 h-6 ${area.color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {area.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {area.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా టీమ్ విలువలు మరియు దృష్టికోణం
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Development Philosophy */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా డెవలప్మెంట్ ఫిలాసఫీ
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              నాణ్యమైన కంటెంట్ క్రియేషన్ కోసం మేము అనుసరించే క్రమబద్ధమైన ప్రాసెస్
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPhilosophy.map((phase, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-center">{phase.phase}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Commitments */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా ప్రొఫెషనల్ నిబద్ధతలు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalCommitments.map((commitment, index) => (
              <Card key={index} className="bg-blue-50 border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {commitment}
                    </p>
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