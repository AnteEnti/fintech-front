'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Star, TrendingUp, Users, Lightbulb } from "lucide-react";

export default function MissionVision() {
  const missionPoints = [
    {
      icon: Users,
      title: "సముదాయ శక్తిని పెంపొందించడం",
      description: "తెలుగు కమ్యూనిటీకి వారి మాతృభాషలో ఆర్థిక విద్యను అందించి, వారిని ఆర్థికంగా శక్తివంతం చేయడం"
    },
    {
      icon: Lightbulb,
      title: "జ్ఞానాన్ని అందుబాటులోకి తేవడం",
      description: "సంక్లిష్టమైన ఆర్థిక కాన్సెప్ట్‌లను సరళమైన తెలుగు భాషలో వివరించి, అందరికీ అర్థమయ్యేలా చేయడం"
    },
    {
      icon: Star,
      title: "నాణ్యమైన విద్యను అందించడం",
      description: "నిపుణుల ద్వారా ధృవీకరించబడిన, ఖచ్చితమైన మరియు అప్‌టు-డేట్ ఆర్థిక సమాచారాన్ని అందించడం"
    }
  ];

  const visionPoints = [
    {
      icon: TrendingUp,
      title: "తెలుగు ఆర్థిక విద్యలో లీడర్",
      description: "తెలుగు భాషలో ఆర్థిక విద్యకు అగ్రగామి వేదికగా మారడం మరియు ప్రామాణికమైన రిసోర్స్‌గా నిలవడం"
    },
    {
      icon: Users,
      title: "కోట్ల మంది జీవితాలను తాకడం",
      description: "వేలల్లో కాకుండా కోట్ల మంది తెలుగువారికి ఆర్థిక అక్షరాస్యతను అందించి వారి జీవితాల్లో సానుకూల మార్పు తేవడం"
    },
    {
      icon: Star,
      title: "ఆర్థిక అక్షరాస్యతలో విప్లవం",
      description: "భారతదేశంలో ప్రాంతీయ భాషల్లో ఆర్థిక విద్యకు మార్గదర్శకంగా నిలచి, ఇతర రాష్ట్రాలకు ఉదాహరణ కావడం"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            మా మిషన్ మరియు విజన్
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            తెలుగులో ఆర్థిక విద్యను అందించడంలో మా దృష్టి మరియు లక్ష్యాలను తెలుసుకోండి
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">మా మిషన్</h3>
                <p className="text-blue-600 font-medium">అందరికీ అందుబాటులో, అర్థమయ్యేలా</p>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-blue-600">
                  "తెలుగు కమ్యూనిటీకి వారి మాతృభాషలో ఆర్థిక విద్యను అందించి, 
                  వారిని ఆర్థికంగా శక్తివంతం చేయడం మా మిషన్."
                </strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                మేము భావిస్తున్నది ప్రతి వ్యక్తికి తమ మాతృభాషలో ఆర్థిక జ్ఞానం పొందే హక్కు ఉందని. 
                సంక్లిష్టమైన ఆర్థిక కాన్సెప్ట్‌లను సరళంగా వివరించి, ప్రతి ఒక్కరూ తెలిసిన భాషలో 
                ఆర్థిక నిర్ణయాలు తీసుకునే వేలలో ఉండాలని మేము కోరుకుంటున్నాం.
              </p>
            </div>

            <div className="space-y-4">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="p-2 bg-blue-50 rounded-lg mr-4 mt-1">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Vision Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">మా విజన్</h3>
                <p className="text-purple-600 font-medium">భవిష్యత్ కోసం మా కల</p>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-purple-600">
                  "తెలుగు ఆర్థిక విద్యలో అగ్రగామిగా నిలచి, కోట్ల మంది జీవితాల్లో 
                  సానుకూల మార్పు తేవడం మా విజన్."
                </strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                మేము కేవలం ఒక వెబ్‌సైట్‌గా కాకుండా, తెలుగు కమ్యూనిటీ కోసం ఆర్థిక విద్యలో 
                విప్లవాత్మక మార్పుకు కారణమవుతూ, భారతదేశంలోని ఇతర రాష్ట్రాలకు మార్గదర్శకంగా 
                నిలవాలని అనుకుంటున్నాం. ప్రతి తెలుగువారు ఆర్థికంగా అక్షరాస్యులై, 
                జ్ఞానంతో కూడిన నిర్ణయాలు తీసుకునే సమాజాన్ని రూపొందించాలని కోరుకుంటున్నాం.
              </p>
            </div>

            <div className="space-y-4">
              {visionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="p-2 bg-purple-50 rounded-lg mr-4 mt-1">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            మా ప్రభావం
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            ఈ మిషన్ మరియు విజన్‌తో, మేము కేవలం ఆర్థిక విద్యను అందించడమే కాకుండా, 
            తెలుగు కమ్యూనిటీలో ఆర్థిక అవగాహన, ఆత్మవిశ్వాసం, మరియు ఆర్థిక స్వతంత్రత 
            కల్పిస్తున్నాం. ప్రతి వ్యక్తి తమ ఆర్థిక లక్ష్యాలను సాధించగల శక్తి కల్పించడంలో 
            మేము గర్వపడుతున్నాం.
          </p>
        </div>
      </div>
    </section>
  );
}