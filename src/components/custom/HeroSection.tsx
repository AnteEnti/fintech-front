'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calculator, BookOpen, TrendingUp, BarChart3, Users, Shield, ArrowRight } from "lucide-react";
import { useTelemetry } from "./TelemetryTracker";

export default function HeroSection() {
  const telemetry = useTelemetry();
  
  const handleCTAClick = (cta: string) => {
    telemetry.trackNavClick(`hero-cta-${cta}`);
  };

  const platformFeatures = [
    { icon: Calculator, text: "15+ ఉచిత కాలిక్యులేటర్లు", color: "text-blue-600" },
    { icon: BookOpen, text: "100+ విద్యాపరమైన వ్యాసాలు", color: "text-green-600" },
    { icon: BarChart3, text: "పోలిక సాధనాలు", color: "text-purple-600" },
    { icon: TrendingUp, text: "ట్రెండింగ్ టిప్స్", color: "text-orange-600" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-28">
        {/* Main Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Platform Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 text-blue-700 border border-blue-200">
              <Users className="w-4 h-4 mr-2" />
              50,000+ వినియోగదారుల విశ్వాసం
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            తెలుగులో{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ఆర్థిక విద్య
            </span>
            {" "}మరియు కాలిక్యులేటర్‌ల వేదిక
          </h1>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            మీ ఆర్థిక లక్ష్యాలను సాధించడంలో మీకు సహాయం చేయడానికి{" "}
            <span className="text-blue-600 font-semibold">ఉచిత కాలిక్యులేటర్లు</span>,{" "}
            <span className="text-green-600 font-semibold">విద్యాపరమైన కంటెంట్</span>,{" "}
            <span className="text-purple-600 font-semibold">పోలిక సాధనాలు</span>{" "}
            మరియు{" "}
            <span className="text-orange-600 font-semibold">ప్రాక్టికల్ టిప్స్</span>
          </p>

          {/* Platform Differentiators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4 bg-white/80 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className={`w-8 h-8 ${feature.color} mb-2`} />
                  <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#4B6FFF] hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => handleCTAClick('calculators')}
            >
              <Link href="/calculators" className="flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                కాలిక్యులేటర్లు చూడండి
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
              onClick={() => handleCTAClick('learn')}
            >
              <Link href="/learn" className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                నేర్చుకోవడం ప్రారంభించండి
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Platform Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/60 rounded-xl border border-blue-100">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                పూర్తిగా విద్యాపరమైనది
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ఎటువంటి పక్షపాతం లేకుండా కేవలం విద్యా ప్రయోజనాల కోసం మాత్రమే
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/60 rounded-xl border border-green-100">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                తెలుగు భాష దృష్టి
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                మీ మాతృభాషలో సులభంగా అర్థమయ్యే ఆర్థిక విద్య మరియు మార్గదర్శకత్వం
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/60 rounded-xl border border-purple-100">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                సమగ్ర కవరేజ్
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                పెట్టుబడులు నుండి లోన్లు వరకు అన్ని ఆర్థిక అంశాలపై కంటెంట్
              </p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 text-center">
            <Button 
              asChild 
              variant="ghost" 
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => handleCTAClick('explore-all')}
            >
              <Link href="/compare" className="flex items-center">
                మరిన్ని సాధనాలు అన్వేషించండి
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}