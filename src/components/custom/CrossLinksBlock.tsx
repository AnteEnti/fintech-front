"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, BarChart3, MessageCircle } from "lucide-react";

interface CrossLinksBlockProps {
  onLinkClick?: (linkName: string) => void;
}

export default function CrossLinksBlock({ onLinkClick }: CrossLinksBlockProps) {
  const handleLinkClick = (linkName: string) => {
    if (onLinkClick) {
      onLinkClick(linkName);
    }
  };

  const learnLinks = [
    {
      title: "రిస్క్ vs రిటర్న్",
      description: "పెట్టుబడులలో రిస్క్ మరియు రాబడి మధ్య సంబంధం అర్థం చేసుకోండి",
      href: "/learn/investments/risk-vs-return",
      icon: BarChart3,
      category: "తెలుసుకోండి",
      available: false
    },
    {
      title: "అసెట్ అలోకేషన్",
      description: "వివిధ రకాల పెట్టుబడులలో మీ డబ్బును ఎలా పంచుకోవాలో తెలుసుకోండి",
      href: "/learn/investments/asset-allocation",
      icon: BookOpen,
      category: "తెలుసుకోండి",
      available: false
    }
  ];

  const compareLinks = [
    {
      title: "మ్యూచువల్ ఫండ్ vs FD",
      description: "మ్యూచువల్ ఫండ్ మరియు ఫిక్స్‌డ్ డిపాజిట్ మధ్య తేడాలు",
      href: "/compare/mf-vs-fd",
      icon: BarChart3,
      category: "పోల్చండి",
      available: false
    },
    {
      title: "SIP vs లంప్‌సమ్",
      description: "SIP మరియు లంప్‌సమ్ పెట్టుబడుల మధ్య వ్యత్యాసాలు",
      href: "/compare/sip-vs-lumpsum",
      icon: BarChart3,
      category: "పోల్చండి",
      available: false
    }
  ];

  const tipsLinks = [
    {
      title: "సాధారణ పొరపాట్లను నివారించండి",
      description: "మ్యూచువల్ ఫండ్ పెట్టుబడులలో జరిగే సాధారణ తప్పిదాలు",
      href: "/tips/avoid-mistakes",
      icon: MessageCircle,
      category: "చిట్కాలు",
      available: false
    }
  ];


  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            సంబంధిత వ్యాసాలు మరియు మార్గదర్శకాలు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            మ్యూచువల్ ఫండ్స్ గురించి మరింత తెలుసుకోవడానికి ఈ వ్యాసాలను చదవండి:
          </p>

          {/* Learn Articles */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              తెలుసుకోండి
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {learnLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div 
                    key={link.title}
                    className={`border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all ${link.available ? '' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">{link.title}</h4>
                          {link.available ? (
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          ) : (
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              త్వరలో
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                        {link.available ? (
                          <Link 
                            href={link.href}
                            className="text-blue-600 text-sm font-medium hover:text-blue-800 mt-2 inline-block"
                            onClick={() => handleLinkClick(link.title)}
                          >
                            చదవండి →
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comparison Articles */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
              పోల్చండి
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {compareLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div 
                    key={link.title}
                    className={`border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all ${link.available ? '' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">{link.title}</h4>
                          {link.available ? (
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          ) : (
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              త్వరలో
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                        {link.available ? (
                          <Link 
                            href={link.href}
                            className="text-green-600 text-sm font-medium hover:text-green-800 mt-2 inline-block"
                            onClick={() => handleLinkClick(link.title)}
                          >
                            పోల్చండి →
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              చిట్కాలు
            </h3>
            <div className="grid md:grid-cols-1 gap-4">
              {tipsLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div 
                    key={link.title}
                    className={`border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all ${link.available ? '' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">{link.title}</h4>
                          {link.available ? (
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          ) : (
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              త్వరలో
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                        {link.available ? (
                          <Link 
                            href={link.href}
                            className="text-purple-600 text-sm font-medium hover:text-purple-800 mt-2 inline-block"
                            onClick={() => handleLinkClick(link.title)}
                          >
                            చదవండి →
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>గమనిక:</strong> పై వ్యాసాలన్నీ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              ఇవి ఆర్థిక సలహా కాదు. పెట్టుబడి నిర్ణయాలు తీసుకునే ముందు అర్హత కలిగిన ఆర్థిక సలహాదారుని సంప్రదించండి.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}