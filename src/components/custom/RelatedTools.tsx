"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, TrendingUp, BarChart3 } from "lucide-react";

interface RelatedToolsProps {
  onToolClick?: (toolName: string) => void;
}

export default function RelatedTools({ onToolClick }: RelatedToolsProps) {
  const tools = [
    {
      title: "SIP కాలిక్యులేటర్",
      description: "మీ SIP పెట్టుబడుల వృద్ధిని లెక్కించండి",
      href: "/calculators/investment/sip",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      available: true
    },
    {
      title: "లంప్‌సమ్ కాలిక్యులేటర్",
      description: "ఒకేసారి పెట్టుబడి రాబడిని లెక్కించండి",
      href: "/calculators/investment/lumpsum",
      icon: Calculator,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      available: false
    },
    {
      title: "మ్యూచువల్ ఫండ్ రిటర్న్స్",
      description: "మ్యూచువల్ ఫండ్ రాబడిని ట్రాక్ చేయండి",
      href: "/calculators/investment/mf-returns",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      available: false
    }
  ];

  const handleToolClick = (toolName: string) => {
    if (onToolClick) {
      onToolClick(toolName);
    }
  };

  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            సంబంధిత కాలిక్యులేటర్లు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            మ్యూచువల్ ఫండ్ పెట్టుబడులను బట్టి మీ రాబడిని లెక్కించడానికి ఈ కాలిక్యులేటర్లను ఉపయోగించండి:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={tool.title}
                  className={`${tool.bgColor} ${tool.borderColor} border-2 rounded-lg p-6 transition-all hover:shadow-lg ${tool.available ? '' : 'opacity-75'}`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 ${tool.bgColor.replace('50', '100')} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${tool.color}`} />
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                    
                    <Button 
                      asChild={tool.available}
                      variant={tool.available ? "default" : "secondary"}
                      size="sm"
                      className={`w-full ${tool.available ? '' : 'cursor-not-allowed'}`}
                      disabled={!tool.available}
                      onClick={() => handleToolClick(tool.title)}
                    >
                      {tool.available ? (
                        <Link href={tool.href}>
                          లెక్కించండి
                        </Link>
                      ) : (
                        <span>త్వరలో...</span>
                      )}
                    </Button>
                    
                    {tool.available && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          అందుబాటులో
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>గమనిక:</strong> ఈ కాలిక్యులేటర్లు విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              వాస్తవ రాబడులు మార్కెట్ పరిస్థితులను బట్టి మారవచ్చు. పెట్టుబడి నిర్ణయాలకు ఆర్థిక సలహాదారుని సంప్రదించండి.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}