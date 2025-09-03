'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Smartphone, Globe, Shield, Zap, Layers, Code, Palette, CheckCircle, TrendingUp } from "lucide-react";

export default function PlatformDevelopment() {
  const technicalFeatures = [
    {
      icon: Cpu,
      title: "అధునాతన టెక్నాలజీ స్టాక్",
      description: "లేటెస్ట్ వెబ్ టెక్నాలజీలు మరియు ఫ్రేమ్‌వర్క్‌లతో రూపొందించబడిన ప్లాట్‌ఫాం",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Smartphone,
      title: "రెస్పాన్సివ్ డిజైన్",
      description: "అన్ని డివైస్‌లలో (మొబైల్, ట్యాబ్లెట్, డెస్క్‌టాప్) పర్ఫెక్ట్ ఎక్స్‌పీరియన్స్",
      technologies: ["మొబైల్ ఫర్స్ట్ అప్రోచ్", "టచ్ ఫ్రెండ్లీ UI", "క్రాస్-బ్రౌజర్ సపోర్ట్", "PWA రెడీ"],
      color: "text-green-600", 
      bgColor: "bg-green-50"
    },
    {
      icon: Globe,
      title: "గ్లోబల్ అక్సెసిబిలిటీ",
      description: "అంతర్జాతీయ వెబ్ స్టాండర్డ్స్ మరియు అక్సెసిబిలిటీ గైడ్‌లైన్స్ పాటించడం",
      technologies: ["WCAG 2.1 కంప్లైంట్", "Screen Reader సపోర్ట్", "కీబోర్డ్ నావిగేషన్", "సెమాంటిక్ HTML"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "సెక్యూరిటీ మరియు ప్రైవసీ",
      description: "యూజర్ డేటా ప్రొటెక్షన్ మరియు సెక్యూరిటీకు అత్యధిక ప్రాధాన్యత",
      technologies: ["HTTPS ఎన్‌ఫోర్స్మెంట్", "CSP హెడర్లు", "డేటా ఎన్‌క్రిప్షన్", "GDPR కంప్లైంట్"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  const userExperienceFeatures = [
    {
      title: "ఇంటరాక్టివ్ కాలిక్యులేటర్లు",
      description: "రియల్-టైమ్ కాలిక్యులేషన్‌లతో యూజర్ ఫ్రెండ్లీ ఇంటర్‌ఫేస్",
      benefits: ["ఇన్‌స్టంట్ రిజల్ట్స్", "స్టెప్-బై-స్టెప్ గైడెన్స్", "సేవ్ & షేర్ ఆప్షన్స్"]
    },
    {
      title: "పర్సనలైజ్డ్ లెర్నింగ్ పాత్",
      description: "ఇండివిడువల్ లెర్నింగ్ ప్రోగ్రెస్ ట్రాకింగ్ మరియు రికమెండేషన్లు",
      benefits: ["ప్రోగ్రెస్ ట్రాకింగ్", "టెయిలర్డ్ కంటెంట్", "లెర్నింగ్ రిమైండర్లు"]
    },
    {
      title: "మల్టీ-మీడియా కంటెంట్",
      description: "వీడియోలు, ఇన్‌ఫోగ్రాఫిక్స్, మరియు ఇంటరాక్టివ్ కంటెంట్‌తో ఎంగేజింగ్ లెర్నింగ్",
      benefits: ["వైజువల్ లెర్నింగ్", "ఆడియో సపోర్ట్", "ఇంటరాక్టివ్ ఎలిమెంట్లు"]
    },
    {
      title: "కమ్యూనిటీ ఫీచర్లు",
      description: "యూజర్లు మధ్య నాలెడ్జ్ షేరింగ్ మరియు డిస్కషన్ ప్లాట్‌ఫాం",
      benefits: ["Q&A సెక్షన్లు", "కమ్యూనిటీ గైడెన్స్", "ఎక్స్‌పర్ట్ సపోర్ట్"]
    }
  ];

  const developmentPrinciples = [
    {
      principle: "యూజర్-సెంట్రిక్ డిజైన్",
      description: "యూజర్ ఎక్స్‌పీరియన్స్‌ను మొట్టమొదటి ప్రాధాన్యతగా పెట్టి డెవలప్మెంట్",
      implementation: "యూజర్ ఫీడ్‌బ్యాక్ రెగ్యులర్‌గా కలెక్ట్ చేసి ఇంప్రూవ్మెంట్లు"
    },
    {
      principle: "పర్ఫార్మెన్స్ ఆప్టిమైజేషన్",
      description: "ఫాస్ట్ లోడింగ్ టైమ్స్ మరియు స్మూత్ ఇంటరాక్షన్లకు ఫోకస్",
      implementation: "కోడ్ స్ప్లిటింగ్, లేజీ లోడింగ్, మరియు కాషింగ్ స్ట్రాటజీలు"
    },
    {
      principle: "అక్సెసిబిలిటీ ఫర్స్ట్",
      description: "అందరికీ అందుబాటులో ఉండేలా డిజైన్ మరియు డెవలప్మెంట్",
      implementation: "స్క్రీన్ రీడర్ సపోర్ట్, కీబోర్డ్ నావిగేషన్, మరియు కలర్ కాంట్రాస్ట్"
    },
    {
      principle: "స్కేలేబిలిటీ & మైంటెనెబిలిటీ",
      description: "భవిష్యత్ గ్రోత్ కోసం మరియు సులభ మైంటెనెన్స్ కోసం ఆర్కిటెక్చర్",
      implementation: "మాడ్యూలర్ కాంపోనెంట్లు, క్లీన్ కోడ్, మరియు వెర్షన్ కంట్రోల్"
    }
  ];

  const innovationAreas = [
    {
      icon: Zap,
      title: "AI-పవర్డ్ రికమెండేషన్లు",
      description: "మషీన్ లెర్నింగ్ ఆధారంగా పర్సనలైజ్డ్ లెర్నింగ్ సూచనలు",
      status: "డెవలప్మెంట్‌లో"
    },
    {
      icon: Layers,
      title: "మైక్రో-లెర్నింగ్ మాడ్యూల్స్",
      description: "చిన్న, డైజెస్టబుల్ లెర్నింగ్ యూనిట్లు రోజువారీ వినియోగం కోసం",
      status: "ప్లానింగ్ దశలో"
    },
    {
      icon: Globe,
      title: "ఆఫ్‌లైన్ యాక్సెస్",
      description: "ఇంటర్నెట్ లేకుండా కూడా కంటెంట్ యాక్సెస్ చేసే PWA ఫీచర్లు",
      status: "రోడ్‌మ్యాప్‌లో"
    },
    {
      title: "వాయిస్ ఇంటర్‌ఫేస్",
      description: "వాయిస్ కమాండ్లతో కాలిక్యులేటర్లు మరియు కంటెంట్ యాక్సెస్",
      status: "రిసర్చ్ దశలో"
    }
  ];

  const qualityAssurance = [
    "క్రాస్-బ్రౌజర్ టెస్టింగ్ మరియు కంపాటిబిలిటీ",
    "అటోమేటెడ్ టెస్టింగ్ మరియు CI/CD పైప్‌లైన్లు",
    "లోడ్ టెస్టింગ్ మరియు పర్ఫార్మెన్స్ మానిటరింగ్",
    "సెక్యూరిటీ ఆడిట్లు మరియు వల్నరబిలిటీ స్కానింగ్",
    "యూజబిలిటీ టెస్టింగ్ మరియు A/B టెస్టింగ్",
    "రెగ్యులర్ కోడ్ రివ్యూ మరియు కోడ్ క్వాలిటీ చెక్స్"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-10 h-10 text-indigo-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ప్లాట్‌ఫాం డెవలప్మెంట్ మరియు ఇన్నోవేషన్
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            అధునాతన టెక్నాలజీ మరియు యూజర్-సెంట్రిక్ డిజైన్‌తో రూపొందించబడిన మా ప్లాట్‌ఫాం
          </p>
        </div>

        {/* Technical Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              టెక్నికల్ ఎక్సలెన్స్
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              లేటెస్ట్ టెక్నాలజీలు మరియు బెస్ట్ ప్రాక్టీసెస్‌తో రూపొందించబడిన రోబస్ట్ ప్లాట్‌ఫాం
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white border-l-4 border-l-indigo-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`${feature.bgColor} rounded-lg p-3 mr-4`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* User Experience Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              యూజర్ ఎక్స్‌పీరియన్స్ ఫీచర్లు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userExperienceFeatures.map((feature, index) => (
              <Card key={index} className="text-center bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full">
                      <Palette className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Principles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా డెవలప్మెంట్ సిద్ధాంతాలు
            </h3>
          </div>

          <div className="space-y-6">
            {developmentPrinciples.map((item, index) => (
              <Card key={index} className="bg-indigo-50 border border-indigo-200 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="text-2xl font-bold text-indigo-600 bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{item.principle}</h4>
                      <p className="text-gray-700 leading-relaxed mb-3">{item.description}</p>
                      <div className="bg-white border border-indigo-300 rounded-lg p-3">
                        <span className="text-indigo-800 font-medium text-sm">
                          ఇంప్లిమెంటేషన్: {item.implementation}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              భవిష్యత్ ఇన్నోవేషన్లు
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              కొత్త టెక్నాలజీలు మరియు ఇన్నోవేటివ్ ఫీచర్లతో ప్లాట్‌ఫాం ఎన్‌హాన్స్మెంట్
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((innovation, index) => {
              const Icon = innovation.icon || TrendingUp;
              return (
                <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{innovation.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{innovation.description}</p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-2">
                      <span className="text-purple-800 font-medium text-xs">
                        {innovation.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quality Assurance */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              క్వాలిటీ అష్యూరెన్స్ మరియు టెస్టింగ్
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              అత్యుత్తమ క్వాలిటీ మరియు రెలయబిలిటీ ఎన్సూర్ చేయడానికి మా కంప్రిహెన్సివ్ టెస్టింగ్ ప్రాసెస్
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityAssurance.map((qa, index) => (
              <Card key={index} className="bg-green-50 border border-green-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {qa}
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