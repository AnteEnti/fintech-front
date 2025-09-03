'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Users, BookOpen, Shield, ArrowRight } from "lucide-react";
import { useTelemetry } from "./TelemetryTracker";

export default function AboutUsHero() {
  const telemetry = useTelemetry();
  
  const handleCTAClick = (cta: string) => {
    telemetry.trackLinkClick(`about-hero-${cta}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Platform Identity */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full border border-blue-200">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-blue-700 font-medium">తెలుగులో ఆర్థిక విద్యకు అంకితం</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            మా గురించి
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8 leading-tight">
            తెలుగులో ఆర్థిక విద్యను అందుబాటులోకి తేవడం{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              మా మిషన్
            </span>
          </h2>

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            FinTech Telugu అనేది తెలుగు భాషలో ఆర్థిక విద్యను అందించడానికి అంకితమైన వేదిక. 
            మేము సరళమైన భాషలో ఆర్థిక కాన్సెప్ట్‌లను వివరించి, మా కమ్యూనిటీని ఆర్థికంగా శక్తివంతం చేయడానికి కట్టుబడి ఉన్నాము.
          </p>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl border border-gray-100 shadow-sm">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <span className="font-semibold text-gray-900 text-center">సమुదాయ కేంద్రీకృత</span>
              <span className="text-sm text-gray-600 text-center mt-1">తెలుగు కమ్యూనిటీకి అంకితం</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl border border-gray-100 shadow-sm">
              <BookOpen className="w-10 h-10 text-green-600 mb-4" />
              <span className="font-semibold text-gray-900 text-center">విద్యాపరమైనది</span>
              <span className="text-sm text-gray-600 text-center mt-1">పూర్తిగా విద్యా ప్రయోజనాలకు</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl border border-gray-100 shadow-sm">
              <Shield className="w-10 h-10 text-purple-600 mb-4" />
              <span className="font-semibold text-gray-900 text-center">విశ్వసనీయం</span>
              <span className="text-sm text-gray-600 text-center mt-1">SEBI కంప్లైంట్ మరియు పారదర్శక</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl border border-gray-100 shadow-sm">
              <Heart className="w-10 h-10 text-red-600 mb-4" />
              <span className="font-semibold text-gray-900 text-center">ఉచితం</span>
              <span className="text-sm text-gray-600 text-center mt-1">అందరికీ అందుబాటులో</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#4B6FFF] hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
              onClick={() => handleCTAClick('get-started')}
            >
              <Link href="/calculators" className="flex items-center">
                ప్రారంభించండి
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-6 text-lg font-semibold"
              onClick={() => handleCTAClick('learn-more')}
            >
              <Link href="/learn" className="flex items-center">
                మరింత తెలుసుకోండి
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-gray-600 text-lg">
            50,000+ వినియోగదారుల విశ్వాసంతో • పూర్తిగా విద్యాపరమైన కంటెంట్ • SEBI కంప్లైంట్
          </p>
        </div>
      </div>
    </section>
  );
}