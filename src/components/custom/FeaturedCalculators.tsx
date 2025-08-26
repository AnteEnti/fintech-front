'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, TrendingUp, PiggyBank } from "lucide-react";
import { useTelemetry } from "./TelemetryTracker";

export default function FeaturedCalculators() {
  const telemetry = useTelemetry();
  
  const handleCalculatorClick = (calculator: string) => {
    telemetry.trackCalculatorClick(calculator);
  };

  const calculators = [
    {
      title: "SIP కాలిక్యులేటర్",
      description: "మీ SIP పెట్టుబడులు ఎంత పెరుగుతాయో లెక్కించండి",
      href: "/calculators/investment/sip",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "EMI కాలిక్యులేటర్",
      description: "లోన్ EMI మరియు వడ్డీని లెక్కించండి",
      href: "/calculators/loan/emi",
      icon: Calculator,
      color: "text-blue-600"
    },
    {
      title: "PPF కాలిక్యులేటర్",
      description: "పబ్లిక్ ప్రావిడెంట్ ఫండ్ మెచ్యూరిటీ లెక్కించండి",
      href: "/calculators/investment/ppf",
      icon: PiggyBank,
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            జనాదరణ పొందిన కాలిక్యులేటర్లు
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            మీ ఆర్థిక ప్లానింగ్‌కు సహాయపడే ఉచిత కాలిక్యులేటర్లు
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <Card key={calc.href} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-lg w-fit">
                    <Icon className={`w-8 h-8 ${calc.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{calc.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {calc.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="w-full bg-[#4B6FFF] hover:bg-blue-700">
                    <Link 
                      href={calc.href}
                      onClick={() => handleCalculatorClick(calc.title)}
                    >
                      లెక్కించండి
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/calculators">అన్ని కాలిక్యులేటర్లు చూడండి</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}