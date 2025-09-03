'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, BookOpen, Lightbulb, BarChart3, Search, User, ArrowRight } from "lucide-react";
import { useTelemetry } from "./TelemetryTracker";

export default function PlatformNavigation() {
  const telemetry = useTelemetry();
  
  const handleNavigationClick = (section: string) => {
    telemetry.trackNavClick(`platform-nav-${section}`);
  };

  const platformSections = [
    {
      title: "కాలిక్యులేటర్లు",
      description: "SIP, EMI, FD, PPF, టాక్స్ మరియు మరిన్ని కాలిక్యులేటర్లు",
      href: "/calculators",
      icon: Calculator,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      features: ["15+ కాలిక్యులేటర్లు", "రియల్-టైమ్ ఫలితాలు", "ఎక్స్‌పోర్ట్ ఆప్షన్లు"],
      cta: "లెక్కించడం ప్రారంభించండి"
    },
    {
      title: "నేర్చుకోండి",
      description: "పెట్టుబడులు, లోన్లు, ఇన్సూరెన్స్, టాక్స్ గురించి తెలుసుకోండి",
      href: "/learn",
      icon: BookOpen,
      color: "text-green-600", 
      bgColor: "bg-green-50",
      features: ["100+ వ్యాసాలు", "స్టెప్-బై-స్టెప్ గైడ్లు", "ప్రాక్టికల్ ఉదాహరణలు"],
      cta: "నేర్చుకోవడం ప్రారంభించండి"
    },
    {
      title: "టిప్స్ & గైడ్లు",
      description: "రోజువారీ ఆర్థిక టిప్స్ మరియు ప్రాక్టికల్ సలహాలు",
      href: "/tips",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50", 
      features: ["డైలీ టిప్స్", "సీజనల్ గైడ్లు", "ఎక్స్‌పర్ట్ సలహాలు"],
      cta: "టిప్స్ చూడండి"
    },
    {
      title: "పోలిక సాధనాలు",
      description: "విభిన్న ఆర్థిక ఉత్పాదాలను పోల్చి నిర్ణయించుకోండి",
      href: "/compare",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      features: ["సైడ్-బై-సైడ్ పోలిక", "డెసిషన్ మేట్రిక్స్", "ప్రోస్ & కాన్స్"],
      cta: "పోల్చడం ప్రారంభించండి"
    }
  ];

  const userJourneys = [
    {
      title: "కొత్త వినియోగదారుల కోసం",
      description: "ఆర్థిక ప్లానింగ్ ప్రారంభ దశలు",
      steps: ["ప్రాథమిక జ్ఞానం", "బడ్జెట్ ప్లానింగ్", "ఎమర్జెన్సీ ఫండ్", "పెట్టుబడుల ప్రారంభం"],
      startLink: "/learn/basics"
    },
    {
      title: "అడ్వాన్స్డ్ వినియోగదారుల కోసం",
      description: "సంక్లిష్టమైన ఆర్థిక నిర్ణయాలు",
      steps: ["పోర్ట్‌ఫోలియో రీబ్యాలెన్సింగ్", "టాక్స్ ఆప్టిమైజేషన్", "రిటైర్మెంట్ ప్లానింగ్", "వెల్త్ మేనేజ్మెంట్"],
      startLink: "/learn/advanced"
    },
    {
      title: "లక్ష్య-ఆధారిత ప్లానింగ్",
      description: "నిర్దిష్ట ఆర్థిక లక్ష్యాల కోసం",
      steps: ["హోమ్ బయింగ్", "చైల్డ్ ఎడ్యుకేషన్", "రిటైర్మెంట్ ప్లానింగ్", "వెడ్డింగ్ ప్లానింగ్"],
      startLink: "/calculators"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            వేదిక అన్వేషణ మరియు నావిగేషన్
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            మీ ఆర్థిక అవసరాలకు అనుగుణంగా సరైన సాధనాలు మరియు కంటెంట్‌ను కనుగొనండి
          </p>
        </div>

        {/* Platform Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.href} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 ${section.bgColor} rounded-xl w-fit`}>
                    <Icon className={`w-8 h-8 ${section.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{section.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm">
                    {section.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full bg-[#4B6FFF] hover:bg-blue-700"
                    onClick={() => handleNavigationClick(section.title)}
                  >
                    <Link href={section.href} className="flex items-center justify-center">
                      {section.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* User Journeys */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మీ ఆర్థిక ప్రయాణం ఎంచుకోండి
            </h3>
            <p className="text-lg text-gray-600">
              మీ అనుభవం మరియు లక్ష్యాలకు అనుకూలంగా మీ మార్గాన్ని ఎంచుకోండి
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userJourneys.map((journey, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {journey.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {journey.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 mb-6">
                    {journey.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-5 h-5 bg-[#4B6FFF] text-white text-xs rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <Button asChild variant="outline" className="w-full">
                    <Link 
                      href={journey.startLink}
                      onClick={() => handleNavigationClick(`journey-${journey.title}`)}
                    >
                      ప్రారంభించండి
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <div className="flex items-center">
                <Search className="w-6 h-6 text-green-600 mr-3" />
                <CardTitle className="text-xl font-bold text-gray-900">
                  త్వరిత శోధన మరియు యాక్సెస్
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700">
                మీకు కావాలసిన కంటెంట్‌ను త్వరగా కనుగొనండి
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SIP", "EMI", "టాక్స్ సేవింగ్", "ఇన్సూరెన్స్", "రిటైర్మెంట్"].map((tag) => (
                  <Button key={tag} variant="outline" size="sm" className="text-xs">
                    {tag}
                  </Button>
                ))}
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/search">
                  అన్ని టాపిక్స్ శోధించండి
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
            <CardHeader>
              <div className="flex items-center">
                <User className="w-6 h-6 text-purple-600 mr-3" />
                <CardTitle className="text-xl font-bold text-gray-900">
                  వ్యక్తిగతీకరణ మరియు ప్రాధాన్యతలు
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700">
                మీ అవసరాలకు అనుగుణంగా కంటెంట్‌ను అనుకూలీకరించుకోండి
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• సేవ్ చేసిన కాలిక్యులేటర్లు</li>
                <li>• రీడింగ్ హిస్టరీ</li>
                <li>• వ్యక్తిగత సిఫార్సులు</li>
              </ul>
              <Button asChild variant="outline" className="border-purple-300 hover:bg-purple-50">
                <Link href="/preferences">
                  ప్రాధాన్యతలు సెట్ చేయండి
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}