import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DisclaimerBanner from '@/components/custom/DisclaimerBanner';
import { BookOpen, TrendingUp, Shield, Home, Receipt } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ఆర్థిక విద్య - FinTech Telugu',
  description: 'తెలుగులో ఆర్థిక విద్య - పెట్టుబడులు, బీమా, లోన్లు, పన్ను ప్రణాళిక గురించి తెలుసుకోండి. విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.',
  keywords: 'financial education, ఆర్థిక విద్య, Telugu, investments, insurance, loans, tax planning'
};

export default function LearnPage() {
  const learnCategories = [
    {
      title: 'డబ్బు మూలాలు',
      description: 'బడ్జెట్, పొదుపు, ఎమర్జెన్సీ ఫండ్ గురించి తెలుసుకోండి',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      category: 'money-basics',
      topics: [
        { name: 'బడ్జెట్ ఎలా చేయాలి', slug: 'budgeting' },
        { name: 'పొదుపు టిప్స్', slug: 'saving-tips' },
        { name: 'ఎమర్జెన్సీ ఫండ్', slug: 'emergency-fund' }
      ]
    },
    {
      title: 'పెట్టుబడులు',
      description: 'మ్యూచువల్ ఫండ్స్, SIP, స్టాక్స్ గురించి నేర్చుకోండి',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      category: 'investments',
      topics: [
        { name: 'మ్యూచువల్ ఫండ్స్ గైడ్', slug: 'mutual-funds' },
        { name: 'SIP గైడ్', slug: 'sip-guide' },
        { name: 'స్టాక్ మార్కెట్ ప్రాథమికాలు', slug: 'stock-basics' }
      ]
    },
    {
      title: 'బీమా',
      description: 'లైఫ్, హెల్త్, టర్మ్ ఇన్సూరెన్స్ గురించి తెలుసుకోండి',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      category: 'insurance',
      topics: [
        { name: 'లైఫ్ ఇన్సూరెన్స్ గైడ్', slug: 'life-insurance' },
        { name: 'హెల్త్ ఇన్సూరెన్స్', slug: 'health-insurance' },
        { name: 'టర్మ్ ఇన్సూరెన్స్', slug: 'term-insurance' }
      ]
    },
    {
      title: 'లోన్లు',
      description: 'హోమ్ లోన్, పర్సనల్ లోన్, క్రెడిట్ స్కోర్ గురించి',
      icon: Home,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      category: 'loans',
      topics: [
        { name: 'హోమ్ లోన్ గైడ్', slug: 'home-loan-guide' },
        { name: 'పర్సనల్ లోన్ టిప్స్', slug: 'personal-loan-tips' },
        { name: 'క్రెడిట్ స్కోర్', slug: 'credit-score' }
      ]
    },
    {
      title: 'పన్ను ప్రణాళిక',
      description: 'ఇన్కమ్ ట్యాక్స్, పన్ను ఆదా మార్గాలు',
      icon: Receipt,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      category: 'tax-planning',
      topics: [
        { name: 'ఇన్కమ్ ట్యాక్స్ గైడ్', slug: 'income-tax' },
        { name: 'పన్ను ఆదా మార్గాలు', slug: 'tax-saving' },
        { name: 'డిడక్షన్స్ గైడ్', slug: 'deductions' }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <DisclaimerBanner type="page" />
      
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ఆర్థిక విద్య
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          తెలుగులో సరళమైన ఆర్థిక విద్య. పెట్టుబడులు, బీమా, లోన్లు, పన్ను ప్రణాళిక గురించి తెలుసుకోండి. 
          అన్ని కంటెంట్ విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {learnCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`p-3 ${category.bgColor} rounded-lg w-fit mb-3`}>
                  <Icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.topics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/learn/${category.category}/${topic.slug}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-800 font-medium">{topic.name}</span>
                  </Link>
                ))}
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href={`/learn/${category.category}`}>
                    అన్ని వ్యాసాలు చూడండి
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}