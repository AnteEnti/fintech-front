'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, ArrowUpRight, Eye } from "lucide-react";
import { useTelemetry } from "./TelemetryTracker";

export default function TrendingTopics() {
  const telemetry = useTelemetry();
  
  const handleTopicClick = (topic: string) => {
    telemetry.trackNavClick(`trending-topic-${topic}`);
  };

  const trendingTopics = [
    {
      title: "2025 ఆర్థిక సంవత్సర టాక్స్ ప్లానింగ్",
      description: "కొత్త ఆర్థిక సంవత్సరం కోసం అత్యుత్తమ టాక్స్ సేవింగ్ వ్యూహాలు",
      href: "/learn/tax-planning/fy-2025-planning",
      category: "టాక్స్ ప్లానింగ్",
      trending: true,
      views: "15K వీక్షణలు"
    },
    {
      title: "SIP vs లంప్‌సమ్: ఏది మంచిది?",
      description: "SIP మరియు లంప్‌సమ్ పెట్టుబడుల మధ్య వివరణాత్మక పోలిక",
      href: "/compare/sip-vs-lumpsum",
      category: "పెట్టుబడుల పోలిక",
      trending: true,
      views: "12K వీక్షణలు"
    },
    {
      title: "ఇంట్రెస్ట్ రేట్‌లు పెరుగుతున్నప్పుడు EMI ప్లానింగ్",
      description: "వడ్డీ రేట్లు పెరిగినప్పుడు లోన్ EMI ని ఎలా మేనేజ్ చేయాలి",
      href: "/tips/loan-planning/rising-interest-rates",
      category: "లోన్ టిప్స్",
      trending: false,
      views: "8K వీక్షణలు"
    },
    {
      title: "గోల్డ్ vs రియల్ ఎస్టేట్: 2025 ఔట్‌లుక్",
      description: "గోల్డ్ మరియు రియల్ ఎస్టేట్ పెట్టుబడులపై 2025 అంచనాలు",
      href: "/compare/gold-vs-real-estate",
      category: "పెట్టుబడుల పోలిక",
      trending: true,
      views: "10K వీక్షణలు"
    },
    {
      title: "ఎమర్జెన్సీ ఫండ్: కొత్త వ్యూహాలు",
      description: "అత్యవసర పరిస్థితుల కోసం డబ్బు కూడబెట్టే ఆధునిక మార్గాలు",
      href: "/tips/savings/emergency-fund-strategies",
      category: "పొదుపు టిప్స్",
      trending: false,
      views: "9K వీక్షణలు"
    },
    {
      title: "హెల్త్ ఇన్సూరెన్స్ vs టర్మ్ ఇన్సూరెన్స్",
      description: "హెల్త్ మరియు టర్మ్ ఇన్సూరెన్స్ మధ్య తేడాలు మరియు అవసరాలు",
      href: "/compare/health-vs-term-insurance",
      category: "ఇన్సూరెన్స్ పోలిక",
      trending: true,
      views: "11K వీక్షణలు"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ట్రెండింగ్ ఆర్థిక విషయాలు
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ఇప్పుడు చర్చలో ఉన్న అత్యంత ముఖ్యమైన ఆర్థిక విషయాలు మరియు పోలికలు
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {trendingTopics.map((topic) => (
            <Card 
              key={topic.href} 
              className={`hover:shadow-lg transition-all duration-300 bg-white border-l-4 ${
                topic.trending ? 'border-l-green-500 hover:border-l-green-600' : 'border-l-blue-500 hover:border-l-blue-600'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    topic.trending 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-blue-700 bg-blue-50'
                  }`}>
                    {topic.category}
                  </span>
                  {topic.trending && (
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      <span className="text-xs font-medium">ట్రెండింగ్</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 text-gray-900">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {topic.description}
                </CardDescription>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <Eye className="w-3 h-3 mr-1" />
                  {topic.views}
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full group">
                  <Link 
                    href={topic.href}
                    onClick={() => handleTopicClick(topic.title)}
                    className="flex items-center justify-between"
                  >
                    <span>చదవండి</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-50">
            <Link href="/compare" className="flex items-center">
              అన్ని ట్రెండింగ్ విషయాలు చూడండి
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}