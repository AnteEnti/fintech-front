'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Globe, BookOpen, Award, Target, Lightbulb, CheckCircle, Star } from "lucide-react";

export default function CommunityImpact() {
  const impactMetrics = [
    {
      icon: Users,
      number: "50,000+",
      label: "యాక్టివ్ లెర్నర్స్",
      description: "నెలవారీ ఆక్టివ్ యూజర్లు",
      growth: "+150% YoY"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "ఎడ్యుకేషనల్ ఆర్టికల్స్",
      description: "వివిధ ఆర్థిక అంశాలపై",
      growth: "వీక్లీ 5+ న్యూ"
    },
    {
      icon: Target,
      number: "1M+",
      label: "కాలిక్యులేషన్లు కంప్లీట్",
      description: "వివిధ ఫైనాన్షియల్ కాలిక్యులేటర్లు",
      growth: "డైలీ 1000+"
    },
    {
      icon: Globe,
      number: "200+",
      label: "సిటీలు & టౌన్లు",
      description: "తెలంగాణ & ఆంధ్రప్రదేశ్",
      growth: "కంటిన్యూయస్ ఎక్స్‌పాన్షన్"
    }
  ];

  const socialInitiatives = [
    {
      icon: BookOpen,
      title: "ఫ్రీ ఫైనాన్షియల్ లిటరసీ వర్క్‌షాప్స్",
      description: "గ్రామీణ మరియు పట్టణ ప్రాంతాలలో ఉచిత ఆర్థిక అక్షరాస్యత కార్యక్రమాలు నిర్వహణ",
      impact: "10,000+ మంది డైరెక్ట్ బెనిఫిషియరీలు",
      activities: ["మంత్లీ కమ్యూనిటీ సెషన్లు", "స్కూల్ & కాలేజ్ వర్క్‌షాప్లు", "మహిళా SHG ట్రైనింగ్లు"]
    },
    {
      icon: Users,
      title: "తెలుగు ఫైనాన్షియల్ కమ్యూనిటీ హబ్",
      description: "ఆర్థిక విషయాలపై చర్చ మరియు సందేహ నివృత్తి కోసం ఆన్‌లైన్ కమ్యూనిటీ ప్లాట్‌ఫాం",
      impact: "25,000+ కమ్యూనిటీ మెంబర్లు",
      activities: ["డైలీ Q&A సెషన్లు", "ఎక్స్‌పర్ట్ AMA సెషన్లు", "పీర్-టు-పీర్ లెర్నింగ్"]
    },
    {
      icon: Heart,
      title: "రూరల్ ఫైనాన్షియల్ ఇంక్లూజన్ ప్రోగ్రాం",
      description: "గ్రామీణ ప్రాంతాలలో ఆర్థిక సేవలకు యాక్సెస్ పెంచడానికి ప్రత్యేక కార్యక్రమాలు",
      impact: "50+ గ్రామాలలో రీచ్",
      activities: ["మొబైల్ ఫైనాన్షియల్ సెంటర్లు", "డిజిటల్ లిటరసీ ట్రైనింగ్", "బ్యాంకింగ్ అవేర్‌నెస్ కేప్‌స్"]
    },
    {
      icon: Award,
      title: "యూత్ ఫైనాన్షియల్ ఎంపవర్మెంట్",
      description: "కాలేజ్ స్టూడెంట్లు మరియు యంగ్ ప్రొఫెషనల్స్ కోసం ప్రత్యేక ప్రోగ్రామ్లు",
      impact: "15,000+ యూత్ పార్టిసిపెంట్లు",
      activities: ["కేరియర్ ఫైనాన్షియల్ ప్లానింగ్", "ఇన్వెస్ట్మెంట్ క్లబ్లు", "ఎంటర్‌ప్రెన్యూర్‌షిప్ గైడెన్స్"]
    }
  ];

  const communityTestimonials = [
    {
      name: "రామేశ్వర్ రెడ్డి",
      location: "హైదరాబాద్",
      role: "ఇంజినీర్",
      feedback: "తెలుగులో ఫైనాన్షియల్ ప్లానింగ్ నేర్చుకోవడం వల్ల నా కుటుంబం ఆర్థికంగా మరింత స్థిరంగా మారింది. చాలా సరళంగా వివరించారు.",
      impact: "మాసిక పొదుపు 40% పెరిగింది"
    },
    {
      name: "లక్ష్మీ కుమారి",
      location: "విజయవాడ",
      role: "టీచర్",
      feedback: "SIP కాలిక్యులేటర్ వాడి నా కూతురి ఎడ్యుకేషన్ కోసం ప్లాన్ చేసాను. చాలా ఈజీగా అర్థమైంది.",
      impact: "10 ఏళ్ల ఎడ్యుకేషన్ ప్లాన్ రెడీ"
    },
    {
      name: "వెంకట్ రావు",
      location: "కరీంనగర్",
      role: "బిజినెస్‌మ్యాన్",
      feedback: "టాక్స్ ప్లానింగ్ గురించిన సమాచారం చాలా ఉపయోగకరంగా ఉంది. లక్షలు టాక్స్ సేవ్ చేయగలిగాను.",
      impact: "వార్షిక ₹50,000 టాక్స్ సేవింగ్స్"
    }
  ];

  const futureGoals = [
    {
      goal: "1 మిలియన్ తెలుగు యూజర్లు",
      timeline: "2025 నాటికి",
      description: "తెలుగు రాష్ట్రాలలోని ప్రతి జిల్లాలో మా సేవలు అందుబాటులో ఉంచడం"
    },
    {
      goal: "1000 గ్రామాలలో రీచ్",
      timeline: "2026 నాటికి", 
      description: "గ్రామీణ ప్రాంతాలలో ఫైనాన్షియల్ ఇంక్లూజన్ ప్రోగ్రామ్ విస్తరణ"
    },
    {
      goal: "100 ట్రైనింగ్ పార్ట్‌నర్లు",
      timeline: "2025 నాటికి",
      description: "స్థానిక ఎన్‌జీఒలు మరియు ఎడ్యుకేషనల్ ఇన్స్టిట్యూట్లతో పార్ట్‌నర్‌షిప్లు"
    },
    {
      goal: "మల్టీ-లింగువల్ ప్లాట్‌ఫాం",
      timeline: "2027 నాటికి",
      description: "దక్షిణ భారత భాషలకు విస్తరణ మరియు కల్చరల్ అడాప్టేషన్"
    }
  ];

  const socialResponsibilityCommitments = [
    "కమ్యూనిటీ సేవల కోసం మా వార్షిక రెవిన్యూలో 10% కేటాయింపు",
    "ఎకనామికలీ వీక్ సెక్షన్లకు ఫ్రీ ప్రీమియం ఫీచర్ల యాక్సెస్",
    "లోకల్ యూత్ ఎంప్లాయ్మెంట్ మరియు స్కిల్ డెవలప్మెంట్ సపోర్ట్",
    "ఎన్విరాన్‌మెంటల్ సస్టెయినబిలిటీ - కార్బన్ న్యూట్రల్ ఆపరేషన్లు",
    "జెండర్ ఈక్వాలిటీ మరియు వుమెన్ ఎంపవర్మెంట్ ప్రోగ్రామ్లు",
    "డిజిటల్ డివైడ్ తగ్గించడానికి టెక్నాలజీ యాక్సెస్ ఇనిషియేటివ్లు"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-green-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              కమ్యూనిటీ ఇంపాక్ట్ మరియు సామాజిక బాధ్యత
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            తెలుగు కమ్యూనిటీ యొక్క ఆర్థిక శక్తివైభవం పెంపొందించడంలో మా ప్రభావం మరియు సామాజిక బాధ్యత
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా ప్రభావం - సంఖ్యలలో
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{metric.number}</div>
                    <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                    <div className="text-sm text-gray-600 mb-2">{metric.description}</div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <span className="text-green-800 font-medium text-xs">{metric.growth}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Social Initiatives */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా సామాజిక కార్యక్రమాలు
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              తెలుగు కమ్యూనిటీ యొక్క ఆర్థిక అభివృద్ధికి మేము నడుపుతున్న ప్రత్యేక కార్యక్రమాలు
            </p>
          </div>

          <div className="space-y-8">
            {socialInitiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <Card key={index} className="bg-white border-l-4 border-l-green-500 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-3 bg-green-100 rounded-lg mr-6">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                          {initiative.title}
                        </CardTitle>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {initiative.description}
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                          <span className="text-green-800 font-semibold text-sm">
                            📊 ఇంపాక్ట్: {initiative.impact}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          {initiative.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{activity}</span>
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

        {/* Community Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              కమ్యూనిటీ వాయిసెస్
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              మా సేవలను వినియోగించుకున్న వారి అనుభవాలు మరియు విజయ కథలు
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.feedback}"
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-800 font-medium text-sm">
                        {testimonial.impact}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              భవిష్యత్ లక్ష్యాలు మరియు విజన్
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureGoals.map((goal, index) => (
              <Card key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="text-2xl font-bold text-purple-600 bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{goal.goal}</h4>
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                        {goal.timeline}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Responsibility Commitments */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా సామాజిక బాధ్యత నిబద్ధతలు
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              సమాజం మరియు పర్యావరణం పట్ల మా దీర్ఘకాలిక బాధ్యత మరియు నిబద్ధత
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialResponsibilityCommitments.map((commitment, index) => (
              <Card key={index} className="bg-white border border-green-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
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