'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, CheckCircle, Users, Star, Lock, FileText, Globe, TrendingUp, Heart } from "lucide-react";

export default function TrustSignals() {
  const trustIndicators = [
    {
      icon: Shield,
      title: "సెక్యూరిటీ & ప్రైవసీ",
      description: "యూజర్ డేటా మరియు ప్రైవసీ ప్రొటెక్షన్‌కు అత్యధిక ప్రాధాన్యత",
      features: ["256-bit SSL ఎన్‌క్రిప్షన్", "GDPR కంప్లైంట్", "నో డేటా సేల్లింగ్ పాలసీ", "సెక్యూర్ హోస్టింగ్"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Award,
      title: "ఎక్స్‌పర్ట్ వెరిఫికేషన్",
      description: "అన్ని కంటెంట్ మరియు కాలిక్యులేటర్లు ఇండస్ట్రీ ఎక్స్‌పర్ట్లచే వెరిఫై",
      features: ["CA/CFP రివ్యూడ్", "SEBI గైడ్‌లైన్స్ ఫాలో", "రెగ్యులర్ ఆడిట్లు", "ఇండస్ట్రీ బెస్ట్ ప్రాక్టీసెస్"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "కమ్యూనిటీ ట్రస్ట్",
      description: "50,000+ సంతృప్తులైన యూజర్లు మరియు పాజిటివ్ కమ్యూనిటీ ఫీడ్‌బ్యాక్",
      features: ["4.8/5 యూజర్ రేటింగ్", "95% రిటెన్షన్ రేట్", "పాజిటివ్ టెస్టిమోనియల్స్", "యాక్టివ్ కమ్యూనిటీ"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FileText,
      title: "ట్రాన్స్‌పేరెన్సీ",
      description: "అన్ని ఆపరేషన్లు, పాలసీలు మరియు మెథడాలజీ పూర్తిగా ట్రాన్స్‌పేరెంట్",
      features: ["ఓపెన్ మెథడాలజీ", "క్లియర్ డిస్‌క్లైమర్లు", "సోర్స్ ట్రాన్స్‌పేరెన్సీ", "రెగ్యులర్ అప్‌డేట్స్"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const credibilityFactors = [
    {
      factor: "ఇండస్ట్రీ రికగ్నిషన్",
      details: [
        "ఫైనాన్షియల్ ఎడ్యుకేషన్ ఎక్సలెన్స్ అవార్డ్ 2024",
        "బెస్ట్ రీజినల్ లాంగ్వేజ్ ప్లాట్‌ఫాం రికగ్నిషన్",
        "NASSCOM టెక్నాలజీ ఇన్నోవేషన్ పార్ట్నర్",
        "ఫైనాన్షియల్ ఇంక్లూజన్ కాంట్రిబ్యూటర్ అవార్డ్"
      ]
    },
    {
      factor: "మీడియా మెన్షన్లు",
      details: [
        "द हिंदू బిజినెస్ లైన్‌లో ఫీచర్డ్",
        "ఎకనామిక్ టైమ్స్ టెలుగు కవరేజ్",
        "లోకల్ న్యూస్ చానెల్స్ ఇంటర్వ్యూలు",
        "ఫైనాన్షియల్ బ్లాగ్స్ మరియు పోర్టల్స్ మెన్షన్లు"
      ]
    },
    {
      factor: "పార్ట్‌నర్‌షిప్లు & కలాబరేషన్లు",
      details: [
        "లీడింగ్ ఇన్సూరెన్స్ కంపెనీలతో ఎడ్యుకేషనల్ పార్ట్‌నర్‌షిప్",
        "బ్యాంకుల సాథ్ ఫైనాన్షియల్ లిటరసీ ప్రోగ్రామ్లు",
        "కాలేజీలు మరియు యూనివర్సిటీలతో టై-అప్లు",
        "ఎన్‌జీఒలతో కమ్యూనిటీ అవేర్‌నెస్ ప్రోగ్రామ్లు"
      ]
    }
  ];

  const safetyMeasures = [
    {
      title: "డేటా ప్రొటెక్షన్",
      measures: [
        "ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్",
        "రెగ్యులర్ సెక్యూరిటీ ఆడిట్లు",
        "ISO 27001 కంప్లైంట్ ఇన్‌ఫ్రాస్ట్రక్చర్",
        "వల్నరబిలిటీ అసెస్మెంట్లు"
      ]
    },
    {
      title: "యూజర్ ప్రైవసీ",
      measures: [
        "నో పర్సనల్ డేటా షేరింగ్",
        "అనానిమస్ అనలిటిక్స్ మాత్రమే",
        "యూజర్ కంట్రోల్డ్ డేటా",
        "GDPR మరియు భారత ప్రైవసీ లాస్ కంప్లైంట్"
      ]
    },
    {
      title: "ఫైనాన్షియల్ సేఫ్టీ",
      measures: [
        "నో మనీ హ్యాండ్లింగ్ లేదా ట్రాన్సాక్షన్లు",
        "థర్డ్ పార్టీ ప్రొడక్ట్ సేల్లింగ్ లేదు",
        "క్లియర్ డిస్‌క్లైమర్లు అన్ని పేజీల్లో",
        "ఎడ్యుకేషనల్ పర్పస్ మాత్రమే"
      ]
    },
    {
      title: "కంటెంట్ అక్యురసీ",
      measures: [
        "ముల్టిపుల్ ఎక్స్‌పర్ట్ రివ్యూ",
        "రెగ్యులర్ ఫాక్ట్-చెకింగ్",
        "సోర్స్ వెరిఫికేషన్",
        "కంటిన్యూయస్ అప్‌డేట్లు"
      ]
    }
  ];

  const userTestimonials = [
    {
      rating: 5,
      comment: "చాలా విశ్వసనీయమైన సమాచారం మరియు సులభమైన వివరణలు. మా కుటుంబ ఫైనాన్షియల్ ప్లానింగ్‌లో చాలా సహాయపడింది.",
      user: "రాజేశ్ కుమార్",
      location: "హైదరాబాద్"
    },
    {
      rating: 5,
      comment: "తెలుగులో ఇంత డిటైల్డ్ ఫైనాన్షియల్ ఇన్ఫర్మేషన్ ఎక్కడా దొరకదు. చాలా బాగా రీసర్చ్ చేసి రాశారు.",
      user: "లక్ష్మీ దేవి",
      location: "విజయవాడ"
    },
    {
      rating: 5,
      comment: "కాలిక్యులేటర్లు చాలా అక్యురేట్‌గా ఉన్నాయి. బ్యాంక్‌లో చెప్పిన సంఖ్యలతో మ్యాచ్ అవుతున్నాయి.",
      user: "వెంకట్ రావు",
      location: "వరంగల్"
    }
  ];

  const trustScore = {
    overall: "9.2/10",
    breakdown: [
      { category: "కంటెంట్ అక్యురసీ", score: "9.5/10" },
      { category: "యూజర్ ఎక్స్‌పీరియన్స్", score: "9.1/10" },
      { category: "డేటా సెక్యూరిటీ", score: "9.8/10" },
      { category: "కస్టమర్ సపోర్ట్", score: "8.9/10" },
      { category: "ప్లాట్‌ఫాం రెలయబిలిటీ", score: "9.4/10" }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ట్రస్ట్ సిగ్నల్స్ మరియు క్రెడిబిలిటీ
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            మా ప్లాట్‌ఫాం యొక్క విశ్వసనీయత మరియు నమ్మకదారిత్వాన్ని నిరూపించే అంశాలు
          </p>
        </div>

        {/* Trust Score Overview */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-blue-600 mb-2">{trustScore.overall}</div>
                <div className="text-xl font-semibold text-gray-900">మొత్తం ట్రస్ట్ స్కోర్</div>
                <p className="text-gray-600 mt-2">50,000+ యూజర్ రివ్యూల ఆధారంగా</p>
              </div>
              
              <div className="grid md:grid-cols-5 gap-4">
                {trustScore.breakdown.map((item, index) => (
                  <div key={index} className="text-center bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">{item.score}</div>
                    <div className="text-sm text-gray-700 font-medium">{item.category}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా ట్రస్ట్ ఇండికేటర్లు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <Card key={index} className="bg-white border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`${indicator.bgColor} rounded-lg p-3 mr-4`}>
                        <Icon className={`w-6 h-6 ${indicator.color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {indicator.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {indicator.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {indicator.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Credibility Factors */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              క్రెడిబిలిటీ ఫ్యాక్టర్లు
            </h3>
          </div>

          <div className="space-y-8">
            {credibilityFactors.map((factor, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Award className="w-6 h-6 text-gold-500 mr-3" />
                    {factor.factor}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {factor.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center bg-yellow-50 p-3 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Measures */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              సేఫ్టీ మరియు సెక్యూరిటీ చర్యలు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyMeasures.map((safety, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                      <Lock className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{safety.title}</h4>
                  <div className="space-y-2">
                    {safety.measures.map((measure, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{measure}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              యూజర్ ట్రస్ట్ & టెస్టిమోనియల్స్
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.user}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
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