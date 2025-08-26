'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface CalculatorsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CalculatorsError({ error, reset }: CalculatorsErrorProps) {
  useEffect(() => {
    console.error('Calculators section error:', error);
  }, [error]);

  const alternativeCalculators = [
    {
      name: 'SIP కాలిక్యులేటర్',
      href: '/calculators/investment/sip',
      description: 'SIP పెట్టుబడుల గణన'
    },
    {
      name: 'EMI కాలిక్యులేటర్',
      href: '/calculators/loan/emi',
      description: 'లోన్ EMI గణన'
    },
    {
      name: 'PPF కాలిక్యులేటర్',
      href: '/calculators/investment/ppf',
      description: 'PPF పెట్టుబడుల గణన'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            కాలిక్యులేటర్ లోడ్ కాలేదు
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            క్షమించండి, కాలిక్యులేటర్ లోడ్ చేయడంలో సమస్య వచ్చింది. 
            దయచేసి మళ్లీ ప్రయత్నించండి లేదా ఇతర కాలిక్యులేటర్లను ఉపయోగించండి.
          </p>

          {/* Disclaimer */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-8">
            <p className="text-blue-800 text-sm">
              <strong>గమనిక:</strong> అన్ని కాలిక్యులేటర్లు విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              ఇవి పెట్టుబడి సలహా కాదు.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => reset()} 
              size="lg" 
              className="bg-[#4B6FFF] hover:bg-blue-700 inline-flex items-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              మళ్లీ ప్రయత్నించండి
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/calculators" className="inline-flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                అన్ని కాలిక్యులేటర్లు
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/" className="inline-flex items-center">
                <Home className="w-5 h-5 mr-2" />
                హోమ్ పేజీ
              </Link>
            </Button>
          </div>
        </div>

        {/* Alternative Calculators */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            ఇతర కాలిక్యులేటర్లు ప్రయత్నించండి
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {alternativeCalculators.map((calc) => (
              <Card key={calc.href} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{calc.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-4">{calc.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={calc.href}>గణించండి</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}