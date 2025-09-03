'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages, Heart, Users, MapPin, TrendingUp, CheckCircle } from "lucide-react";

export default function TeluguLanguageFocus() {
  const languageReasons = [
    {
      icon: Heart,
      title: "మాతృభాష కంఫర్ట్",
      description: "తెలుగు మాతృభాష కావడంవల్ల సంక్లిష్టమైన ఆర్థిక కాన్సెప్ట్‌లను సులభంగా అర్థం చేసుకోవచ్చు",
      benefit: "అర్థం చేసుకునే సామర్థ్యం 85% వరకు మెరుగుపడుతుంది"
    },
    {
      icon: Users,
      title: "సాంస్కృతిక ప్రాసంగికత",
      description: "స్థానిక సంస్కృతి, పండుగలు, మరియు జీవనశైలికి అనుగుణంగా ఆర్థిక ఉదాహరణలు మరియు సలహాలు",
      benefit: "వాస్తవ జీవితంలో అమలు చేసే అవకాశం 70% పెరుగుతుంది"
    },
    {
      icon: MapPin,
      title: "స్థానిక సందర్భం",
      description: "తెలంగాణ, ఆంధ్రప్రదేశ్ రాష్ట్రాల ఆర్థిక వాతావరణం మరియు అవకాశాలకు అనుకూలమైన కంటెంట్",
      benefit: "స్థానిక అవకాశాలను గుర్తించే సామర్థ్యం పెరుగుతుంది"
    },
    {
      icon: TrendingUp,
      title: "మెరుగైన నేర్చుకోవడం",
      description: "మాతృభాషలో నేర్చుకునేటప్పుడు మెదడు మరింత చురుకుగా పని చేస్తుంది",
      benefit: "గుర్తుంచుకోవడం మరియు అమలు చేయడంలో 90% మెరుగుదల"
    }
  ];

  const languageCommitments = [
    "అన్ని కాలిక్యులేటర్లు మరియు రిపోర్ట్లు పూర్తిగా తెలుగులో",
    "ఆర్థిక పదాలకు సరైన తెలుగు పర్యాయపదాలు వాడకం", 
    "స్థానిక ఉదాహరణలు మరియు కేస్ స్టడీలతో వివరణ",
    "తెలుగు సంస్కృతికి అనుగుణమైన ఆర్థిక ప్లానింగ్ సలహాలు",
    "పండుగలు మరియు వేడుకలకు అనుకూలమైన ఆర్థిక టిప్స్",
    "గ్రామీణ మరియు పట్టణ రెండు వాతావరణాలకు అనుకూలమైన కంటెంట్"
  ];

  const impactStats = [
    { number: "9 కోట్లు+", label: "తెలుగు మాట్లాడేవారు", description: "ప్రపంచవ్యాప్తంగా" },
    { number: "80%", label: "మెరుగైన అర్థగ్రహణ", description: "మాతృభాషలో నేర్చుకునేటప్పుడు" },
    { number: "65%", label: "ఎక్కువ ఎంగేజ్మెంట్", description: "స్థానిక భాషలో కంటెంట్‌తో" },
    { number: "90%", label: "వినియోగదారుల సంతృప్తి", description: "తెలుగు కంటెంట్‌పై" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Languages className="w-10 h-10 text-orange-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              తెలుగు భాష దృష్టి
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            మాతృభాషలో ఆర్థిక విద్య ఎందుకు ముఖ్యమైనది మరియు మేము తెలుగును ఎందుకు ఎంచుకున్నాము
          </p>
        </div>

        {/* Language Choice Rationale */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మేము తెలుగును ఎందుకు ఎంచుకున్నాము?
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              తెలుగు కేవలం ఒక భాష కాదు - ఇది మా గుర్తింపు, మా సంస్కృతి, మా ఆలోచనా విధానం. 
              ఆర్థిక విద్యను మాతృభాషలో అందించడం వల్ల మెరుగైన అర్థగ్రహణ మరియు ప్రాక్టికల్ అప్లికేషన్ సాధ్యమవుతుంది.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {languageReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="bg-white border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-orange-100 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {reason.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 font-medium text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        {reason.benefit}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              తెలుగు భాష ప్రభావం
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Language Commitments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా తెలుగు భాష నిబద్ధతలు
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              తెలుగు కమ్యూనిటీకి అత్యుత్తమ సేవ అందించడానికి మేము తీసుకున్న నిబద్ధతలు
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languageCommitments.map((commitment, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {commitment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Heritage and Pride */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            మా తెలుగు వారసత్వంపై గర్వం
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            తెలుగు భాష కేవలం కమ్యూనికేషన్ సాధనం మాత్రమే కాదు - ఇది మా సంస్కృతి, మా చరిత్ర, 
            మా ఆలోచనా విధానానికి అద్దం. ఈ గొప్ప భాషలో ఆర్థిక విద్యను అందించడంలో మేము గర్వపడుతున్నాము. 
            మా లక్ష్యం తెలుగు భాషకు ఆర్థిక విద్య రంగంలో గౌరవనీయమైన స్థానం కల్పించడం.
          </p>
          <div className="flex items-center justify-center">
            <Heart className="w-6 h-6 mr-2" />
            <span className="font-semibold">తెలుగు తల్లికి మా వందనాలు</span>
          </div>
        </div>
      </div>
    </section>
  );
}