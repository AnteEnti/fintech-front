import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import { Calculator, TrendingUp, PiggyBank } from 'lucide-react';
import { getCalculatorsByCategory, getCalculatorUrl, CALCULATOR_CATEGORIES } from '@/lib/calculator-routes';

export const metadata: Metadata = {
  title: 'ఆర్థిక కాలిక్యులేటర్లు - FinTech Telugu',
  description: 'ఉచిత ఆర్థిక కాలిక్యులేటర్లు - SIP, EMI, PPF, లోన్ కాలిక్యులేటర్లు తెలుగులో. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
  keywords: 'calculators, కాలిక్యులేటర్లు, SIP, EMI, PPF, Telugu financial calculators, ఆర్థిక గణనలు'
};

export default function CalculatorsPage() {
  // Generate calculator groups from centralized configuration
  const calculatorGroups = [
    {
      ...CALCULATOR_CATEGORIES.investment,
      title: CALCULATOR_CATEGORIES.investment.teluguName,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      calculators: getCalculatorsByCategory('investment').map(calc => ({
        name: calc.teluguName,
        slug: calc.slug,
        href: getCalculatorUrl(calc.category, calc.slug),
        implemented: calc.implemented
      }))
    },
    {
      ...CALCULATOR_CATEGORIES.loan,
      title: CALCULATOR_CATEGORIES.loan.teluguName,
      icon: Calculator,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      calculators: getCalculatorsByCategory('loan').map(calc => ({
        name: calc.teluguName,
        slug: calc.slug,
        href: getCalculatorUrl(calc.category, calc.slug),
        implemented: calc.implemented
      }))
    },
    {
      ...CALCULATOR_CATEGORIES.planning,
      title: CALCULATOR_CATEGORIES.planning.teluguName,
      icon: PiggyBank,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      calculators: getCalculatorsByCategory('planning').map(calc => ({
        name: calc.teluguName,
        slug: calc.slug,
        href: getCalculatorUrl(calc.category, calc.slug),
        implemented: calc.implemented
      }))
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <DisclaimerBanner type="calculator" />
      
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ఆర్థిక కాలిక్యులేటర్లు
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          మీ ఆర్థిక గణనలను సులభంగా చేయడానికి ఉచిత కాలిక్యులేటర్లు. 
          అన్ని కాలిక్యులేటర్లు విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.
        </p>
      </div>

      <div className="space-y-12">
        {calculatorGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title}>
              <div className="flex items-center mb-6">
                <div className={`p-3 ${group.bgColor} rounded-lg mr-4`}>
                  <Icon className={`w-8 h-8 ${group.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{group.title}</h2>
                  <p className="text-gray-600">{group.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {group.calculators.map((calc) => (
                  <Card key={calc.slug} className="hover:shadow-lg transition-shadow relative">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {calc.name}
                        {calc.implemented && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            అందుబాటులో
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        asChild 
                        className={`w-full ${calc.implemented ? 'bg-[#4B6FFF] hover:bg-blue-700' : 'bg-gray-400 hover:bg-gray-500'}`}
                        disabled={!calc.implemented}
                      >
                        <Link href={calc.href}>
                          {calc.implemented ? 'గణించండి' : 'త్వరలో...'}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}