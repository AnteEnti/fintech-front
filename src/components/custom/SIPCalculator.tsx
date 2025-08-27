"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { calculateSIP } from '@/lib/computations/sip-calculator';
import SIPResults from './SIPResults';
import SIPChart from './SIPChart';
import DisclaimerBanner from './DisclaimerBanner';
import ExportButtons from './ExportButtons';
import TelemetryTracker from './TelemetryTracker';

interface SIPFormData {
  monthlyAmount: number;
  investmentPeriod: number;
  expectedReturn: number;
  calculationType: 'sip' | 'lumpsum';
}

interface SIPResult {
  totalInvested: number;
  expectedReturns: number;
  maturityAmount: number;
  yearlyData: Array<{
    year: number;
    invested: number;
    value: number;
  }>;
}

export default function SIPCalculator() {
  const [formData, setFormData] = useState<SIPFormData>({
    monthlyAmount: 5000,
    investmentPeriod: 10,
    expectedReturn: 12,
    calculationType: 'sip'
  });

  const [result, setResult] = useState<SIPResult | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateInputs = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (formData.monthlyAmount < 500 || formData.monthlyAmount > 100000) {
      newErrors.monthlyAmount = 'మాసిక మొత్తం ₹500 నుండి ₹1,00,000 మధ్య ఉండాలి';
    }

    if (formData.investmentPeriod < 1 || formData.investmentPeriod > 30) {
      newErrors.investmentPeriod = 'పెట్టుబడి కాలం 1 నుండి 30 సంవత్సరాల మధ్య ఉండాలి';
    }

    if (formData.expectedReturn < 1 || formData.expectedReturn > 30) {
      newErrors.expectedReturn = 'ఆశించిన రాబడి 1% నుండి 30% మధ్య ఉండాలి';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validateInputs()) {
      const calculationResult = calculateSIP(
        formData.monthlyAmount,
        formData.investmentPeriod,
        formData.expectedReturn
      );
      setResult(calculationResult);

      // Track calculator usage
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('telemetry-track', {
          detail: {
            event: 'calc_submit',
            data: {
              calculator: 'sip',
              monthlyAmount: formData.monthlyAmount,
              period: formData.investmentPeriod,
              expectedReturn: formData.expectedReturn,
              type: formData.calculationType,
              timestamp: new Date().toISOString()
            }
          }
        }));
      }
    }
  };

  const handleInputChange = (field: keyof SIPFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="space-y-8">
      <TelemetryTracker />
      
      {/* Tabbed Interface */}
      <Tabs 
        value={formData.calculationType} 
        onValueChange={(value) => handleInputChange('calculationType', value as 'sip' | 'lumpsum')}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sip">SIP</TabsTrigger>
          <TabsTrigger value="lumpsum">లంప్‌సమ్</TabsTrigger>
        </TabsList>

        <TabsContent value="sip" className="space-y-6">
          {/* SIP Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                SIP కాలిక్యులేటర్ ఇన్‌పుట్
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Monthly Amount */}
                <div className="space-y-2">
                  <Label htmlFor="monthlyAmount" className="text-sm font-medium text-gray-700">
                    మాసిక SIP మొత్తం (₹)
                  </Label>
                  <Input
                    id="monthlyAmount"
                    type="number"
                    value={formData.monthlyAmount}
                    onChange={(e) => handleInputChange('monthlyAmount', parseInt(e.target.value) || 0)}
                    className={errors.monthlyAmount ? "border-red-500" : ""}
                    min="500"
                    max="100000"
                    step="500"
                  />
                  {errors.monthlyAmount && (
                    <p className="text-sm text-red-600">{errors.monthlyAmount}</p>
                  )}
                  <p className="text-xs text-gray-500">కనిష్ఠ: ₹500, గరిష్ఠ: ₹1,00,000</p>
                </div>

                {/* Investment Period */}
                <div className="space-y-2">
                  <Label htmlFor="investmentPeriod" className="text-sm font-medium text-gray-700">
                    పెట్టుబడి కాలం (సంవత్సరాలు)
                  </Label>
                  <Input
                    id="investmentPeriod"
                    type="number"
                    value={formData.investmentPeriod}
                    onChange={(e) => handleInputChange('investmentPeriod', parseInt(e.target.value) || 0)}
                    className={errors.investmentPeriod ? "border-red-500" : ""}
                    min="1"
                    max="30"
                    step="1"
                  />
                  {errors.investmentPeriod && (
                    <p className="text-sm text-red-600">{errors.investmentPeriod}</p>
                  )}
                  <p className="text-xs text-gray-500">1 నుండి 30 సంవత్సరాల వరకు</p>
                </div>

                {/* Expected Return */}
                <div className="space-y-2">
                  <Label htmlFor="expectedReturn" className="text-sm font-medium text-gray-700">
                    ఆశించిన వార్షిక రాబడి (%)
                  </Label>
                  <Input
                    id="expectedReturn"
                    type="number"
                    value={formData.expectedReturn}
                    onChange={(e) => handleInputChange('expectedReturn', parseFloat(e.target.value) || 0)}
                    className={errors.expectedReturn ? "border-red-500" : ""}
                    min="1"
                    max="30"
                    step="0.5"
                  />
                  {errors.expectedReturn && (
                    <p className="text-sm text-red-600">{errors.expectedReturn}</p>
                  )}
                  <p className="text-xs text-gray-500">1% నుండి 30% వరకు</p>
                </div>

                {/* Calculate Button */}
                <div className="flex items-end">
                  <Button 
                    onClick={handleCalculate}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    లెక్కించండి
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lumpsum" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                లంప్‌సమ్ కాలిక్యులేటర్
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-green-900 font-semibold mb-2">
                    🎉 లంప్‌సమ్ కాలిక్యులేటర్ ఇప్పుడు అందుబాటులో!
                  </div>
                  <p className="text-green-800 mb-4">
                    ఒకేసారి పెట్టుబడి వృద్ధిని లెక్కించండి మరియు మీ ఆర్థిక లక్ష్యాల కోసం ప్రణాళిక చేయండి.
                  </p>
                  <Button 
                    asChild 
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Link href="/calculators/investment/lumpsum">
                      లంప్‌సమ్ కాలిక్యులేటర్‌కి వెళ్ళండి →
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">లంప్‌సమ్ ప్రత్యేకతలు:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• ఒకేసారి పెట్టుబడి</li>
                    <li>• కంపౌండ్ ఇంట్రెస్ట్ బెనిఫిట్</li>
                    <li>• టార్గెట్ బేస్డ్ ప్లానింగ్</li>
                    <li>• ట్యాక్స్ ఇంప్లికేషన్ అనాలిసిస్</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">ఎప్పుడు ఎంచుకోవాలి:</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• పెద్ద మొత్తం అందుబాటులో ఉన్నప్పుడు</li>
                    <li>• మార్కెట్ దిగువ స్థాయిలో ఉన్నప్పుడు</li>
                    <li>• ఇన్వెస్ట్‌మెంట్ ఎక్స్‌పీరియన్స్ ఉన్నప్పుడు</li>
                    <li>• దీర్ఘకాలిక గోల్స్ కోసం</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Mandatory Disclaimer before results */}
          <DisclaimerBanner type="calculator-result" />
          
          {/* Result Summary */}
          <SIPResults result={result} />
          
          {/* Chart */}
          <SIPChart result={result} />
          
          {/* Export Buttons */}
          <ExportButtons 
            data={result}
            formData={formData}
            calculatorType="sip"
          />
        </div>
      )}

      {/* Explainer Content */}
      <div className="space-y-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              SIP ఎలా పని చేస్తుంది?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              సిస్టమాటిక్ ఇన్వెస్ట్‌మెంట్ ప్లాన్ (SIP) అనేది మ్యూచువల్ ఫండ్లలో క్రమం తప్పకుండా పెట్టుబడి చేసే పద్ధతి. 
              ఇది రూపాయి కాస్ట్ యావరేజింగ్ లాభాన్ని అందిస్తుంది.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              SIP యొక్క ప్రధాన లాభాలు:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>తక్కువ మొత్తంతో పెట్టుబడి ప్రారంభం</li>
              <li>మార్కెట్ హెచ్చు తగ్గుల నుండి రక్షణ</li>
              <li>కంపౌండ్ ఇంట్రెస్ట్ యొక్క శక్తి</li>
              <li>క్రమబద్ధమైన పొదుపు అలవాటు</li>
              <li>దీర్ఘకాలిక సంపద సృష్టి</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="text-yellow-800 font-medium">
                గమనిక: ఈ కాలిక్యులేటర్ విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                పెట్టుబడి నిర్ణయాలు తీసుకునే ముందు ఆర్థిక సలహాదారుని సంప్రదించండి.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              తరచుగా అడిగే ప్రశ్నలు
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  కనిష్ఠ SIP మొత్తం ఎంత?
                </h4>
                <p className="text-gray-700">
                  చాలా మ్యూచువల్ ఫండ్లలో కనిష్ఠ SIP మొత్తం ₹500. కొన్ని ఫండ్లలో ₹100 నుండి కూడా మొదలుపెట్టవచ్చు.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  SIP ఎప్పుడు మొదలుపెట్టాలి?
                </h4>
                <p className="text-gray-700">
                  SIP మొదలుపెట్టడానికి &lsquo;సరైన&rsquo; సమయం లేదు. ముందుగా మొదలుపెట్టడం వలన టైమ్ ఇన్ ది మార్కెట్ యొక్క లాభం పొందవచ్చు.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  SIP మొత్తాన్ని మధ్యలో మార్చవచ్చా?
                </h4>
                <p className="text-gray-700">
                  అవును, చాలా ఫండ్ హౌస్‌లు SIP మొత్తాన్ని పెంచే లేదా తగ్గించే సౌకర్యం అందిస్తాయి.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}