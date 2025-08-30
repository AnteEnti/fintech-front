import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Calculator,
  BookOpen,
  Target,
  Shield,
  TrendingDown,
  CreditCard,
  Building2,
  Smartphone,
  Globe,
  Users,
  Key,
  TrendingUp,
  Banknote,
  Gift,
  TrendingUp as ChartUp,
  ShieldCheck,
  Receipt,
  DollarSign,
  PieChart,
  Clock,
  Search,
  Zap
} from "lucide-react";
import Link from "next/link";

interface TipSection {
  id: string;
  title: string;
  problem: string;
  whyItHappens: string[];
  consequences: string[];
  solutions: string[];
  ctaText: string;
  ctaLink: string;
  ctaType: 'calculator' | 'learn';
  examples?: string[];
}

interface TipsArticleProps {
  title: string;
  subtitle: string;
  sections: TipSection[];
}

export default function TipsArticle({ 
  title, 
  subtitle, 
  sections 
}: TipsArticleProps) {

  const getIconForSection = (sectionId: string) => {
    const iconMap = {
      'overspending': TrendingDown,
      'emergency-fund': Shield,
      'investment': Target,
      'insurance': Building2,
      'credit': CreditCard,
      'upi-fraud': Smartphone,
      'phishing-fake-apps': Globe,
      'sim-swap': Users,
      'otp-password': Key,
      'investment-crypto': TrendingUp,
      'payment-strategies': Banknote,
      'reward-optimization': Gift,
      'credit-score-improvement': ChartUp,
      'debt-management': TrendingDown,
      'security-safety': ShieldCheck,
      'tax-optimization': Receipt,
      // CIBIL improvement specific icons
      'payment-history': DollarSign,
      'credit-utilization': PieChart,
      'credit-mix': Target,
      'credit-age': Clock,
      'new-inquiries': Search,
      'monitoring-disputes': Shield,
      'quick-improvement': Zap,
    };
    return iconMap[sectionId as keyof typeof iconMap] || AlertTriangle;
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <div className="mb-8">
        <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
          {sections.some(s => s.id.includes('fraud') || s.id.includes('phishing') || s.id.includes('sim') || s.id.includes('otp')) ? 'భద్రతా టిప్స్' : 'ఆర్థిక టిప్స్'}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Tips Sections */}
      <div className="space-y-8">
        {sections.map((section) => {
          const IconComponent = getIconForSection(section.id);
          return (
            <section 
              key={section.id} 
              className="mb-12"
            >
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Problem Description */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-red-900 mb-2">సమస్య</h3>
                        <p className="text-red-800 text-sm leading-relaxed">
                          {section.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Why It Happens */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">?</span>
                      </div>
                      ఎందుకు జరుగుతుంది?
                    </h3>
                    <ul className="text-orange-800 text-sm space-y-2">
                      {section.whyItHappens.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Consequences */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                      <TrendingDown className="w-5 h-5 text-yellow-600" />
                      పరిణామాలు
                    </h3>
                    <ul className="text-yellow-800 text-sm space-y-2">
                      {section.consequences.map((consequence, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-yellow-600 mt-1">•</span>
                          <span>{consequence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      పరిష్కారాలు
                    </h3>
                    <ul className="text-green-800 text-sm space-y-2">
                      {section.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples (if provided) */}
                  {section.examples && section.examples.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        ఉదాహరణలు
                      </h3>
                      <ul className="text-blue-800 text-sm space-y-2">
                        {section.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">→</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <Link href={section.ctaLink}>
                      <Button 
                        className="bg-[#4B6FFF] hover:bg-[#3B5FEF] text-white flex items-center gap-2"
                      >
                        {section.ctaType === 'calculator' ? (
                          <Calculator className="w-4 h-4" />
                        ) : (
                          <BookOpen className="w-4 h-4" />
                        )}
                        {section.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          );
        })}
      </div>

      {/* Summary CTA Section */}
      <section className="mt-12">
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              మీ ఆర్థిక లక్ష్యాలను సాధించండి
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              ఈ తప్పిదాలను నివారించడం ద్వారా మీ ఆర్థిక భవిష్యత్తును మెరుగుపర్చుకోండి. 
              మా కాలిక్యులేటర్లు మరియు ఎడ్యుకేషనల్ కంటెంట్‌తో మీ ఆర్థిక ప్రయాణాన్ని మొదలుపెట్టండి.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators">
                <Button 
                  size="lg" 
                  className="bg-[#4B6FFF] hover:bg-[#3B5FEF] text-white"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  కాలిక్యులేటర్లు చూడండి
                </Button>
              </Link>
              <Link href="/learn">
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  మరిన్ని వ్యాసాలు
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  );
}