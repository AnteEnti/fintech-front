'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, TrendingUp, Users, ArrowRight, Play, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useTelemetry } from '@/hooks/useTelemetry';

export default function PlatformExplorationCTA() {
  const { trackEvent } = useTelemetry();

  const platformFeatures = [
    {
      icon: Calculator,
      title: "ఫైనాన్షియల్ కాలిక్యులేటర్లు",
      description: "SIP, EMI, PPF, మరియు ఇతర కాలిక్యులేటర్లతో మీ ఫైనాన్షియల్ ప్లానింగ్ చేసుకోండి",
      link: "/calculators",
      cta: "కాలిక్యులేటర్లు ట్రై చేయండి",
      popular: true,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BookOpen,
      title: "ఎడ్యుకేషనల్ ఆర్టికల్స్",
      description: "ఇన్వెస్ట్మెంట్, ఇన్సూరెన్స్, టాక్స్ ప్లానింగ్ పై వివరమైన గైడ్లు",
      link: "/learn",
      cta: "లెర్నింగ్ ప్రారంభించండి",
      popular: false,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      title: "ఇన్వెస్ట్మెంట్ గైడ్స్",
      description: "స్టాక్స్, మ్యూచువల్ ఫండ్స్, బాండ్స్ గురించిన కంప్రిహెన్సివ్ గైడ్లు",
      link: "/investment-guides",
      cta: "ఇన్వెస్ట్మెంట్ గైడ్స్",
      popular: true,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "కమ్యూనిటీ",
      description: "ఇతర ఇన్వెస్టర్లతో కనెక్ట్ అవ్వండి మరియు అనుభవాలు షేర్ చేసుకోండి",
      link: "/community",
      cta: "కమ్యూనిటీ జాయిన్",
      popular: false,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const quickActions = [
    {
      title: "SIP కాలిక్యులేటర్",
      description: "మీ SIP లక్ష్యాలు ప్లాన్ చేయండి",
      link: "/calculators/sip",
      icon: TrendingUp
    },
    {
      title: "EMI కాలిక్యులేటర్",
      description: "లోన్ EMI లెక్కలు వేయండి",
      link: "/calculators/emi",
      icon: Calculator
    },
    {
      title: "టాక్స్ సేవర్ గైడ్",
      description: "టాక్స్ సేవింగ్ టిప్స్",
      link: "/learn/tax-saving",
      icon: BookOpen
    },
    {
      title: "ఇన్వెస్ట్మెంట్ బేసిక్స్",
      description: "ఇన్వెస్ట్మెంట్ ప్రారంభించండి",
      link: "/learn/investment-basics",
      icon: Play
    }
  ];

  const learningPaths = [
    {
      path: "ఫైనాన్షియల్ ప్లానింగ్ మాస్టరీ",
      duration: "4 వారాలు",
      modules: 12,
      level: "ప్రారంభకులు",
      description: "మీ ఫైనాన్షియల్ గోల్స్ సెట్ చేయడం నుండి అచీవ్ చేయడం వరకు కంప్లీట్ గైడ్",
      link: "/courses/financial-planning"
    },
    {
      path: "ఇన్వెస్ట్మెంట్ స్ట్రాటజీ",
      duration: "6 వారాలు",
      modules: 18,
      level: "ఇంటర్మీడియట్",
      description: "వివిధ ఇన్వెస్ట్మెంట్ ఆప్షన్లు మరియు పోర్ట్‌ఫోలియో డైవర్సిఫికేషన్",
      link: "/courses/investment-strategy"
    },
    {
      path: "రిటైర్మెంట్ ప్లానింగ్",
      duration: "3 వారాలు",
      modules: 9,
      level: "అడ్వాన్స్డ్",
      description: "సెక్యూర్డ్ రిటైర్మెంట్ కోసం కంప్రిహెన్సివ్ ప్లానింగ్ గైడ్",
      link: "/courses/retirement-planning"
    }
  ];

  const testimonialHighlights = [
    {
      quote: "తెలుగులో ఇంత డిటైల్డ్ ఫైనాన్షియల్ ఎడ్యుకేషన్ మరెక్కడా దొరకదు!",
      user: "రాజేశ్ కుమార్",
      rating: 5
    },
    {
      quote: "కాలిక్యులేటర్లు చాలా అక్యూరేట్. మా ఫైనాన్షియల్ ప్లానింగ్‌లో చాలా సహాయపడ్డాయి.",
      user: "ప్రియా శర్మ",
      rating: 5
    },
    {
      quote: "సింపుల్ తెలుగులో కంప్లెక్స్ కాన్సెప్ట్స్ చాలా బాగా వివరించారు.",
      user: "వెంకట్ రెడ్డి",
      rating: 5
    }
  ];

  const handleFeatureClick = (feature: string) => {
    trackEvent('platform_feature_clicked', {
      feature: feature,
      page: 'about_us_cta'
    });
  };

  const handleQuickActionClick = (action: string) => {
    trackEvent('quick_action_clicked', {
      action: action,
      page: 'about_us_cta'
    });
  };

  const handleLearningPathClick = (path: string) => {
    trackEvent('learning_path_clicked', {
      path: path,
      page: 'about_us_cta'
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            మా ప్లాట్‌ఫాం ఎక్స్‌ప్లోర్ చేయండి
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ఫైనాన్షియల్ ఎడ్యుకేషన్ మరియు ప్లానింగ్ టూల్స్‌తో మీ ఆర్థిక లక్ష్యాలను సాధించండి
          </p>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా ప్రధాన ఫీచర్లు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    {feature.popular && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          పాపులర్
                        </div>
                      </div>
                    )}
                    <div className="mb-4">
                      <div className={`${feature.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto`}>
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                    <Link href={feature.link}>
                      <Button 
                        className="w-full"
                        onClick={() => handleFeatureClick(feature.title)}
                      >
                        {feature.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              క్విక్ యాక్షన్లు
            </h3>
            <p className="text-lg text-gray-600">మీరు వెంటనే ప్రారంభించగల టూల్స్ మరియు గైడ్లు</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} href={action.link}>
                  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                          <Icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{action.title}</h4>
                          <p className="text-xs text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              స్ట్రక్చర్డ్ లెర్నింగ్ పాత్స్
            </h3>
            <p className="text-lg text-gray-600">మీ ఫైనాన్షియల్ నాలెడ్జ్‌ను వ్యవస్థీకృతంగా పెంపొందించుకోండి</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {path.level}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{path.path}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{path.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>⏱️ {path.duration}</span>
                    <span>📚 {path.modules} మాడ్యూల్స్</span>
                  </div>
                  <Link href={path.link}>
                    <Button 
                      className="w-full"
                      onClick={() => handleLearningPathClick(path.path)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      కోర్స్ ప్రారంభించండి
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              యూజర్ ఎక్స్‌పీరియన్సెస్
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonialHighlights.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                  <p className="text-gray-600 font-medium text-sm">- {testimonial.user}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
          <Zap className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            ఈరోజే మీ ఫైనాన్షియల్ జర్నీ ప్రారంభించండి!
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            50,000+ మంది వినియోగదారులు ఇప్పటికే మాతో జాయిన్ అయ్యారు. మీరు కూడా మీ ఫైనాన్షియల్ గోల్స్ అచీవ్ చేయండి!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-50 min-w-[200px]">
                <Calculator className="w-5 h-5 mr-2" />
                కాలిక్యులేటర్లు ట్రై చేయండి
              </Button>
            </Link>
            <Link href="/learn">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 min-w-[200px]">
                <BookOpen className="w-5 h-5 mr-2" />
                లెర్నింగ్ ప్రారంభించండి
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}