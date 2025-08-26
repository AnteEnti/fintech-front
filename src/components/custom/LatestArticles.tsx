'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Clock } from "lucide-react";
import { useTelemetry } from "./TelemetryTracker";

export default function LatestArticles() {
  const telemetry = useTelemetry();
  
  const handleArticleClick = (article: string) => {
    telemetry.trackArticleClick(article);
  };

  const articles = [
    {
      title: "SIP పెట్టుబడులు ఎలా పని చేస్తాయి?",
      description: "SIP పెట్టుబడుల ప్రక్రియ మరియు దాని ప్రయోజనాలను తెలుసుకోండి",
      href: "/learn/investments/sip-basics",
      category: "పెట్టుబడులు",
      readTime: "5 నిమిషాలు"
    },
    {
      title: "ఎమర్జెన్సీ ఫండ్ ఎలా కూడ్చాలి?",
      description: "అత్యవసర పరిస్థితుల కోసం డబ్బును సేవ్ చేసే మార్గాలు",
      href: "/learn/savings/emergency-fund",
      category: "పొదుపులు",
      readTime: "7 నిమిషాలు"
    },
    {
      title: "హోమ్ లోన్ EMI తగ్గించడానికి టిప్స్",
      description: "మీ హోమ్ లోన్ EMI తగ్గించే ప్రాక్టికల్ మార్గాలు",
      href: "/learn/loans/home-loan-tips",
      category: "లోన్లు",
      readTime: "6 నిమిషాలు"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            తాజా ఆర్థిక వ్యాసాలు
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            మీ ఆర్థిక జ్ఞానాన్ని పెంచుకోవడానికి విలువైన కంటెంట్
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {articles.map((article) => (
            <Card key={article.href} className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#4B6FFF] bg-blue-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link 
                    href={article.href} 
                    className="flex items-center"
                    onClick={() => handleArticleClick(article.title)}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    చదవండి
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/learn">అన్ని వ్యాసాలు చూడండి</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}