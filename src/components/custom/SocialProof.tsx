'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Users, TrendingUp, Shield, CheckCircle, Award, Eye, BookOpen } from "lucide-react";
import { useTelemetry } from "./TelemetryTracker";

export default function SocialProof() {
  const telemetry = useTelemetry();
  
  const handleProofClick = (type: string) => {
    telemetry.trackNavClick(`social-proof-${type}`);
  };

  const statistics = [
    {
      number: "50,000+",
      label: "సంతృప్త వినియోగదారులు",
      icon: Users,
      color: "text-blue-600"
    },
    {
      number: "1,00,000+",
      label: "కాలిక్యులేషన్లు పూర్తయ్యాయి",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      number: "5,00,000+",
      label: "మాసిక పేజ్ వ్యూలు",
      icon: Eye,
      color: "text-purple-600"
    },
    {
      number: "95%",
      label: "వినియోగదారుల సంతృప్తి రేటింగ్",
      icon: Star,
      color: "text-yellow-600"
    }
  ];

  const testimonials = [
    {
      text: "FinTech Telugu వల్ల నా ఆర్థిక ప్లానింగ్ చాలా సులభంగా అయింది. SIP కాలిక్యులేటర్ చాలా ఉపయోగకరం.",
      author: "రామేష్వర్ రావు",
      location: "హైదరాబాద్",
      rating: 5
    },
    {
      text: "తెలుగులో ఆర్థిక విషయాలు చదవడం చాలా బాగుంది. అర్థం అవుతుంది మరియు అమలు చేయడం సులభం.",
      author: "లక్ష్మీ దేవి",
      location: "విజయవాడ",
      rating: 5
    },
    {
      text: "EMI కాలిక్యులేటర్ వాడి నా హోమ్ లోన్ ప్లాన్ చేసుకున్నాను. చాలా ఖచ్చితమైన ఫలితాలు వచ్చాయి.",
      author: "వెంకటేష్",
      location: "తిరుపతి",
      rating: 5
    }
  ];

  const trustIndicators = [
    {
      title: "విద్యాపరమైన కంటెంట్ మాత్రమే",
      description: "మేము కేవలం విద్యాపరమైన సమాచారం మాత్రమే అందిస్తాము, ఎటువంటి వ్యక్తిగత ఆర్థిక సలహాలు లేవు",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "పారదర్శకత మరియు నిజాయితీ",
      description: "అన్ని లెక్కలు మరియు సమాచారం పూర్తిగా పారదర్శకంగా మరియు పక్షపాతం లేకుండా అందిస్తాము",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "నిపుణుల సమీక్ష",
      description: "మా కంటెంట్ అనుభవజ్ఞులైన ఆర్థిక నిపుణులచే సమీక్షించబడింది మరియు నవీకరించబడుతుంది",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "ఫలితాల ఖచ్చితత్వం",
      description: "మా కాలిక్యులేటర్లు అధికారిక ఫార్ములాలను ఉపయోగించి ఖచ్చితమైన ఫలితాలను అందిస్తాయి",
      icon: CheckCircle,
      color: "text-emerald-600"
    }
  ];

  const qualityStandards = [
    "నియమిత కంటెంట్ అప్‌డేట్లు",
    "అధికారిక మూలాధారాల నుంచి సమాచారం",
    "సులభమైన తెలుగు భాష",
    "మొబైల్-ఫ్రెండ్లీ డిజైన్",
    "వేగవంతమైన లోడింగ్",
    "యాక్సెసిబిలిటీ కంప్లైంట్"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            మా వేదిక విశ్వసనీయత మరియు నాణ్యత
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            వేలాది మంది వినియోగదారులు మాపై విశ్వాసం పెట్టి తమ ఆర్థిక ప్లానింగ్‌ను మెరుగుపరుచుకున్నారు
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Icon className={`w-10 h-10 ${stat.color} mx-auto`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              వినియోగదారుల అనుభవాలు
            </h3>
            <p className="text-lg text-gray-600">
              మా వేదిక వాడిన వారి సంతృప్తికరమైన అనుభవాలు
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా విశ్వసనీయత సూచికలు
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="p-3 bg-gray-50 rounded-lg mr-4">
                        <Icon className={`w-6 h-6 ${indicator.color}`} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {indicator.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{indicator.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా నాణ్యత ప్రమాణాలు
            </h3>
            <p className="text-lg text-gray-600">
              మేము ఎల్లప్పుడూ అత్యుత్తమ నాణ్యతతో కంటెంట్ అందించడానికి కట్టుబడి ఉన్నాము
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{standard}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#4B6FFF] hover:bg-blue-700"
              onClick={() => handleProofClick('quality-guarantee')}
            >
              <Link href="/about">
                మా గురించి మరింత తెలుసుకోండి
              </Link>
            </Button>
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              మీరు కూడా మా కమ్యూనిటీలో చేరండి!
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              వేలాది మంది వినియోగదారులతో కలిసి మీ ఆర్థిక జ్ఞానాన్ని పెంచుకోండి మరియు స్మార్ట్ ఆర్థిక నిర్ణయాలు తీసుకోండి
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleProofClick('start-journey')}
              >
                <Link href="/calculators">
                  మీ ఆర్థిక ప్రయాణం ప్రారంభించండి
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}