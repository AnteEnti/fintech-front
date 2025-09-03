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
      description: "SIP పెట్టుబడుల ప్రక్రియ, ప్రయోజనాలు మరియు మీ ఆర్థిక లక్ష్యాలను సాధించే మార్గాలను తెలుసుకోండి",
      href: "/learn/investments/sip-basics",
      category: "పెట్టుబడులు",
      readTime: "5 నిమిషాలు",
      highlight: "కొత్తవారికి అనుకూలం",
      benefits: ["రూపాలర్ ఆధార్ అవరేజింగ్", "కంపౌండింగ్ పవర్", "వ్రాట్లైన్ పెట్టుబడులు"]
    },
    {
      title: "ఎమర్జెన్సీ ఫండ్: ఎంత మరియు ఎలా?",
      description: "అత్యవసర పరిస్థితుల కోసం డబ్బను సేవ్ చేసే స్మార్ట్ మార్గాలు మరియు సరైన అమౌంట్ లెక్కింపు",
      href: "/learn/savings/emergency-fund",
      category: "పొదుపులు", 
      readTime: "7 నిమిషాలు",
      highlight: "జీవనానికి అవసరం",
      benefits: ["6-12 నెలల ఖర్చులు", "లిక్విడ్ ఆప్షన్లు", "ఫైనాన్షియల్ సెక్యూరిటీ"]
    },
    {
      title: "హోమ్ లోన్ EMI తగ్గించే 7 మార్గాలు",
      description: "మీ హోమ్ లోన్ EMI తగ్గించే ప్రాక్టికల్ మరియు చట్టబద్దమైన మార్గాలను వివరంగా తెలుసుకోండి",
      href: "/learn/loans/home-loan-tips",
      category: "లోన్లు",
      readTime: "8 నిమిషాలు", 
      highlight: "డబ్బు ఆదాయం",
      benefits: ["ప్రిపేమెంట్ స్ట్రాటజీ", "రేట్ న్యాగోషియేషన్", "లోన్ ట్రాన్స్‌ఫర్ టిప్స్"]
    },
    {
      title: "ఇన్సూరెన్స్ ఎంత కవరేజ్ అవసరం?",
      description: "లైఫ్ ఇన్సూరెన్స్ మరియు హెల్త్ ఇన్సూరెన్స్ కోసం సరైన కవరేజ్ లెక్కింపు మరియు ఎంపిక",
      href: "/learn/insurance/coverage-calculation",
      category: "ఇన్సూరెన్స్",
      readTime: "6 నిమిషాలు",
      highlight: "రిస్క్ మేనేజ్మెంట్",
      benefits: ["కవరేజ్ కాలిక్యులేషన్", "ప్రీమియం ఆప్టిమైజేషన్", "రైట్ పాలసీ చాయ్స్"]
    },
    {
      title: "రిటైర్మెంట్ ప్లానింగ్: 30లలో ప్రారంభించండి",
      description: "30 ఏళ్ల వయసులోనే రిటైర్మెంట్ ప్లానింగ్ మొదలుపెట్టి కంఫర్టబుల్ రిటైర్మెంట్ కోసం సిద్ధం అవ్వండి",
      href: "/learn/retirement/early-planning",
      category: "రిటైర్మెంట్",
      readTime: "9 నిమిషాలు",
      highlight: "దీర్ఘకాలిక దృష్టి",
      benefits: ["కంపౌండింగ్ అడ్వాంటేజ్", "రిటైర్మెంట్ కార్పస్", "ఇన్‌ఫ్లేషన్ బీట్"]
    },
    {
      title: "టాక్స్ సేవింగ్: 80C vs ఇతర ఆప్షన్లు",
      description: "సెక్షన్ 80C మరియు ఇతర టాక్స్ సేవింగ్ ఆప్షన్లను పోల్చి మీకు బెస్ట్ ఆప్షన్ ఎంచుకోండి",
      href: "/learn/tax-planning/80c-vs-others",
      category: "టాక్స్ ప్లానింగ్",
      readTime: "7 నిమిషాలు",
      highlight: "టాక్స్ ఆప్టిమైజేషన్",
      benefits: ["1.5 లక్ష డిడక్షన్", "ఇన్వెస్ట్మెంట్ + సేవింగ్", "రిటర్న్ కంపేరిజన్"]
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
          {articles.slice(0, 3).map((article) => (
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
                <div className="mb-3">
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {article.highlight}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3 mb-3">
                  {article.description}
                </CardDescription>
                <ul className="text-xs space-y-1 text-gray-600 mb-2">
                  {article.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
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