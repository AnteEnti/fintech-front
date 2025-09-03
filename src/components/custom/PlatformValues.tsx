'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Compass, Users, Shield, Zap, Award } from "lucide-react";

export default function PlatformValues() {
  const coreValues = [
    {
      icon: Heart,
      title: "పారదర్శకత",
      description: "మేము చేసేదంతా ఓపెన్‌గా, క్లియర్‌గా ఉంటుంది",
      principle: "అన్ని ఆపరేషన్లు పూర్తిగా ట్రాన్స్‌పేరెంట్‌గా",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Users,
      title: "యాక్సెసిబిలిటీ",
      description: "అందరికీ అందుబాటులో ఉండేలా చూస్తాము",
      principle: "ఆర్థిক విద్య అందరికీ అందుబాటులో ఉండాలి",
      color: "text-blue-600", 
      bgColor: "bg-blue-50"
    },
    {
      icon: Compass,
      title: "ఎడ్యుకేషన్ ఫర్స్ట్",
      description: "విద్యే మా ప్రధాన దృష్టి, మార్కెటింగ్ కాదు",
      principle: "లెర్నింగ్ అవర్ ప్రయారిటీ, సెల్లింగ్ కాదు",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "యూజర్ ఎంపవర్మెంట్",
      description: "వినియోగదారులను శక్తివంతం చేయడమే మా గోల్",
      principle: "స్వతంత్ర నిర్ణయాలు తీసుకునే శక్తి కల్పించడం",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "సాంస్కృతిక సెన్సిటివిటీ",
      description: "తెలుగు సంస్కృతిని గౌరవించి కంటెంట్ క్రియేట్ చేయడం",
      principle: "స్థానిక సంస్కృతి మరియు వాల్యూస్ రెస్పెక్ట్",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            మా వేదిక విలువలు మరియు సిద్ధాంతాలు
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            మా పని మరియు విధానాలను దర్శకత్వం వహించే ప్రధాన విలువలు
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className={`${value.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <div className={`${value.bgColor} rounded-lg p-3 text-center`}>
                    <p className={`${value.color} font-semibold text-sm`}>
                      {value.principle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            మా ఎథికల్ ఫ్రేమ్‌వర్క్
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">మేము చేసేవి:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">పూర్తిగా ఉచితమైన విద్యాపరమైన కంటెంట్</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">యూజర్ ప్రైవసీ మరియు డేటా ప్రొటెక్షన్</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">రెగ్యులర్ కంటెంట్ అప్‌డేట్స్ మరియు ఇంప్రూవ్మెంట్స్</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">మేము చేయనివి:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">పర్సనలైజ్డ్ ఫైనాన్షియల్ అడ్వైస్</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">ఫైనాన్షియల్ ప్రొడక్ట్స్ సెల్లింగ్</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">గ్యారంటీడ్ రిటర్న్స్ ప్రామిసెస్</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}