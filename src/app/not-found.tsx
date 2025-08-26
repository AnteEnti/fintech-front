import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Calculator, BookOpen, AlertCircle } from 'lucide-react';

export default function NotFound() {
  const quickLinks = [
    {
      title: 'కాలిక్యులేటర్లు',
      description: 'SIP, EMI, PPF కాలిక్యులేటర్లు',
      href: '/calculators',
      icon: Calculator,
      color: 'text-blue-600'
    },
    {
      title: 'విద్యా కంటెంట్',
      description: 'పెట్టుబడులు, బీమా, లోన్లు గురించి నేర్చుకోండి',
      href: '/learn',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'మా గురించి',
      description: 'FinTech Telugu గురించి తెలుసుకోండి',
      href: '/about',
      icon: Home,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Error Icon and Code */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 mb-4">404</h1>
        </div>

        {/* Error Message in Telugu */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            పేజీ దొరకలేదు
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            క్షమించండి, మీరు వెతుకుతున్న పేజీ దొరకలేదు. దయచేసి URL సరిగా ఉందో తనిఖీ చేయండి 
            లేదా క్రింద ఉన్న లింక్‌లను ఉపయోగించండి.
          </p>
          
          {/* Disclaimer */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-8">
            <p className="text-blue-800 text-sm">
              <strong>గమనిక:</strong> ఈ వెబ్‌సైట్‌లోని కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              ఇది పెట్టుబడి సలహా కాదు.
            </p>
          </div>
          
          <Button asChild size="lg" className="bg-[#4B6FFF] hover:bg-blue-700 mb-12">
            <Link href="/" className="inline-flex items-center">
              <Home className="w-5 h-5 mr-2" />
              హోమ్ పేజీకి వెళ్ళండి
            </Link>
          </Button>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            ప్రధాన విభాగాలు
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Card key={link.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3">
                      <Icon className={`w-6 h-6 ${link.color}`} />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={link.href}>వెళ్ళండి</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            ఇంకా సహాయం కావాలా? మా 
            <Link href="/about" className="text-[#4B6FFF] hover:underline mx-1">
              మా గురించి
            </Link> 
            పేజీని చూడండి లేదా హోమ్ పేజీ నుంచి ప్రారంభించండి.
          </p>
        </div>
      </div>
    </div>
  );
}