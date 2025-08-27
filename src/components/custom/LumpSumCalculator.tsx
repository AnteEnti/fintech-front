"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { calculateLumpSum, calculateRequiredLumpSum, LumpSumInputs, LumpSumResult } from '@/lib/computations/lumpsum-calculator';
import LumpSumResults from './LumpSumResults';
import LumpSumChart from './LumpSumChart';
import DisclaimerBanner from './DisclaimerBanner';
import TelemetryTracker from './TelemetryTracker';
import { Calculator, TrendingUp, Target, AlertCircle } from 'lucide-react';

interface LumpSumFormData {
  investmentAmount: number;
  expectedReturn: number;
  timePeriod: number;
  inflationRate: number;
  includeInflation: boolean;
  calculationType: 'forward' | 'reverse'; // Forward: Calculate FV, Reverse: Calculate required investment
  targetAmount: number; // For reverse calculation
}

export default function LumpSumCalculator() {
  const [formData, setFormData] = useState<LumpSumFormData>({
    investmentAmount: 100000,
    expectedReturn: 12,
    timePeriod: 10,
    inflationRate: 6,
    includeInflation: false,
    calculationType: 'forward',
    targetAmount: 1000000
  });

  const [result, setResult] = useState<LumpSumResult | null>(null);
  const [reverseResult, setReverseResult] = useState<number | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateInputs = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (formData.calculationType === 'forward') {
      if (formData.investmentAmount < 1000 || formData.investmentAmount > 10000000) {
        newErrors.investmentAmount = 'పెట్టుబడి మొత్తం ₹1,000 నుండి ₹1,00,00,000 మధ్య ఉండాలి';
      }
    } else {
      if (formData.targetAmount < 10000 || formData.targetAmount > 100000000) {
        newErrors.targetAmount = 'లక్ష్య మొత్తం ₹10,000 నుండి ₹10,00,00,000 మధ్య ఉండాలి';
      }
    }

    if (formData.expectedReturn < 1 || formData.expectedReturn > 30) {
      newErrors.expectedReturn = 'ఆశించిన రాబడి 1% నుండి 30% మధ్య ఉండాలి';
    }

    if (formData.timePeriod < 1 || formData.timePeriod > 50) {
      newErrors.timePeriod = 'పెట్టుబడి కాలం 1 నుండి 50 సంవత్సరాల మధ్య ఉండాలి';
    }

    if (formData.includeInflation && (formData.inflationRate < 0 || formData.inflationRate > 20)) {
      newErrors.inflationRate = 'ద్రవ్యోల్బణం రేటు 0% నుండి 20% మధ్య ఉండాలి';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validateInputs()) {
      if (formData.calculationType === 'forward') {
        const inputs: LumpSumInputs = {
          investmentAmount: formData.investmentAmount,
          expectedReturn: formData.expectedReturn,
          timePeriod: formData.timePeriod,
          inflationRate: formData.includeInflation ? formData.inflationRate : undefined
        };

        const calculationResult = calculateLumpSum(inputs);
        setResult(calculationResult);
        setReverseResult(null);
      } else {
        const requiredInvestment = calculateRequiredLumpSum(
          formData.targetAmount,
          formData.expectedReturn,
          formData.timePeriod
        );
        setReverseResult(requiredInvestment);
        setResult(null);
      }

      // Track calculator usage
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('telemetry-track', {
          detail: {
            event: 'calc_submit',
            data: {
              calculator: 'lumpsum',
              type: formData.calculationType,
              investmentAmount: formData.investmentAmount,
              expectedReturn: formData.expectedReturn,
              timePeriod: formData.timePeriod,
              includeInflation: formData.includeInflation,
              timestamp: new Date().toISOString()
            }
          }
        }));
      }
    }
  };

  const handleInputChange = (field: keyof LumpSumFormData, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const getRiskLevel = (returnRate: number) => {
    if (returnRate <= 8) return { level: 'తక్కువ', color: 'bg-green-100 text-green-800', description: 'డెట్ ఫండ్స్, FDs' };
    if (returnRate <= 12) return { level: 'మధ్యమ', color: 'bg-yellow-100 text-yellow-800', description: 'హైబ్రిడ్ ఫండ్స్' };
    return { level: 'అధిక', color: 'bg-red-100 text-red-800', description: 'ఈక్విటీ ఫండ్స్' };
  };

  const riskInfo = getRiskLevel(formData.expectedReturn);

  return (
    <div className="space-y-8">
      <TelemetryTracker />
      
      {/* Calculator Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            లంప్‌సమ్ కాలిక్యులేటర్ రకం
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs 
            value={formData.calculationType} 
            onValueChange={(value) => handleInputChange('calculationType', value)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="forward" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                భవిష్యత్ విలువ లెక్కింపు
              </TabsTrigger>
              <TabsTrigger value="reverse" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                అవసరమైన పెట్టుబడి లెక్కింపు
              </TabsTrigger>
            </TabsList>

            <TabsContent value="forward" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Investment Amount */}
                <div className="space-y-2">
                  <Label htmlFor="investmentAmount" className="text-base font-medium">
                    పెట్టుబడి మొత్తం (₹)
                  </Label>
                  <Input
                    id="investmentAmount"
                    type="number"
                    value={formData.investmentAmount}
                    onChange={(e) => handleInputChange('investmentAmount', parseInt(e.target.value) || 0)}
                    min="1000"
                    max="10000000"
                    step="1000"
                    className={`text-lg ${errors.investmentAmount ? 'border-red-500' : ''}`}
                    placeholder="ఉదా: 1,00,000"
                  />
                  {errors.investmentAmount && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.investmentAmount}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">కనిష్టం: ₹1,000, గరిష్టం: ₹1,00,00,000</p>
                </div>

                {/* Expected Return */}
                <div className="space-y-2">
                  <Label htmlFor="expectedReturn" className="text-base font-medium">
                    ఆశించిన వార్షిక రాబడి (%)
                  </Label>
                  <Input
                    id="expectedReturn"
                    type="number"
                    value={formData.expectedReturn}
                    onChange={(e) => handleInputChange('expectedReturn', parseFloat(e.target.value) || 0)}
                    min="1"
                    max="30"
                    step="0.5"
                    className={`text-lg ${errors.expectedReturn ? 'border-red-500' : ''}`}
                    placeholder="ఉదా: 12"
                  />
                  {errors.expectedReturn && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.expectedReturn}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">1% నుండి 30% వరకు</p>
                    <Badge variant="outline" className={riskInfo.color}>
                      {riskInfo.level} రిస్క్ - {riskInfo.description}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Time Period */}
              <div className="space-y-2">
                <Label htmlFor="timePeriod" className="text-base font-medium">
                  పెట్టుబడి కాలం (సంవత్సరాలు)
                </Label>
                <Input
                  id="timePeriod"
                  type="number"
                  value={formData.timePeriod}
                  onChange={(e) => handleInputChange('timePeriod', parseInt(e.target.value) || 0)}
                  min="1"
                  max="50"
                  className={`text-lg ${errors.timePeriod ? 'border-red-500' : ''}`}
                  placeholder="ఉదా: 10"
                />
                {errors.timePeriod && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.timePeriod}
                  </p>
                )}
                <p className="text-xs text-gray-500">1 నుండి 50 సంవత్సరాల వరకు</p>
              </div>

              {/* Inflation Adjustment */}
              <div className="space-y-4 p-4 bg-blue-50 rounded-lg border">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="includeInflation" className="text-base font-medium">
                      ద్రవ్యోల్బణం సర్దుబాటు
                    </Label>
                    <p className="text-sm text-gray-600">రియల్ రిటర్న్లను చూడడానికి ద్రవ్యోల్బణాన్ని పరిగణించండి</p>
                  </div>
                  <input
                    type="checkbox"
                    id="includeInflation"
                    checked={formData.includeInflation}
                    onChange={(e) => handleInputChange('includeInflation', e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </div>

                {formData.includeInflation && (
                  <div className="space-y-2">
                    <Label htmlFor="inflationRate" className="text-sm font-medium">
                      ద్రవ్యోల్బణం రేటు (%)
                    </Label>
                    <Input
                      id="inflationRate"
                      type="number"
                      value={formData.inflationRate}
                      onChange={(e) => handleInputChange('inflationRate', parseFloat(e.target.value) || 0)}
                      min="0"
                      max="20"
                      step="0.5"
                      className={`${errors.inflationRate ? 'border-red-500' : ''}`}
                      placeholder="ఉదా: 6"
                    />
                    {errors.inflationRate && (
                      <p className="text-xs text-red-600">{errors.inflationRate}</p>
                    )}
                    <p className="text-xs text-gray-500">సాధారణంగా 4-8% మధ్య ఉంటుంది</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="reverse" className="space-y-6 mt-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-green-900 mb-2">రివర్స్ కాలిక్యులేషన్</h3>
                <p className="text-sm text-green-800">
                  మీ లక్ష్య మొత్తాన్ని చేరుకోవడానికి ఇప్పుడు ఎంత పెట్టుబడి చేయాలో తెలుసుకోండి
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Target Amount */}
                <div className="space-y-2">
                  <Label htmlFor="targetAmount" className="text-base font-medium">
                    లక్ష్య మొత్తం (₹)
                  </Label>
                  <Input
                    id="targetAmount"
                    type="number"
                    value={formData.targetAmount}
                    onChange={(e) => handleInputChange('targetAmount', parseInt(e.target.value) || 0)}
                    min="10000"
                    max="100000000"
                    step="10000"
                    className={`text-lg ${errors.targetAmount ? 'border-red-500' : ''}`}
                    placeholder="ఉదా: 10,00,000"
                  />
                  {errors.targetAmount && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.targetAmount}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">కనిష్టం: ₹10,000, గరిష్టం: ₹10,00,00,000</p>
                </div>

                {/* Expected Return */}
                <div className="space-y-2">
                  <Label htmlFor="expectedReturn" className="text-base font-medium">
                    ఆశించిన వార్షిక రాబడి (%)
                  </Label>
                  <Input
                    id="expectedReturn"
                    type="number"
                    value={formData.expectedReturn}
                    onChange={(e) => handleInputChange('expectedReturn', parseFloat(e.target.value) || 0)}
                    min="1"
                    max="30"
                    step="0.5"
                    className={`text-lg ${errors.expectedReturn ? 'border-red-500' : ''}`}
                    placeholder="ఉదా: 12"
                  />
                  {errors.expectedReturn && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.expectedReturn}
                    </p>
                  )}
                  <Badge variant="outline" className={riskInfo.color}>
                    {riskInfo.level} రిస్క్ - {riskInfo.description}
                  </Badge>
                </div>
              </div>

              {/* Time Period */}
              <div className="space-y-2">
                <Label htmlFor="timePeriod" className="text-base font-medium">
                  పెట్టుబడి కాలం (సంవత్సరాలు)
                </Label>
                <Input
                  id="timePeriod"
                  type="number"
                  value={formData.timePeriod}
                  onChange={(e) => handleInputChange('timePeriod', parseInt(e.target.value) || 0)}
                  min="1"
                  max="50"
                  className={`text-lg ${errors.timePeriod ? 'border-red-500' : ''}`}
                  placeholder="ఉదా: 10"
                />
                {errors.timePeriod && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.timePeriod}
                  </p>
                )}
                <p className="text-xs text-gray-500">1 నుండి 50 సంవత్సరాల వరకు</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Calculate Button */}
      <div className="flex justify-center">
        <Button 
          onClick={handleCalculate} 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
        >
          లెక్కించండి
        </Button>
      </div>

      {/* Results Section */}
      {result && formData.calculationType === 'forward' && (
        <div className="space-y-6">
          <LumpSumResults result={result} inputs={formData} />
          <LumpSumChart result={result} />
        </div>
      )}

      {/* Reverse Calculation Results */}
      {reverseResult !== null && formData.calculationType === 'reverse' && (
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-xl text-green-900 flex items-center gap-2">
              <Target className="w-6 h-6" />
              అవసరమైన పెట్టుబడి
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div>
                <p className="text-sm text-green-700 mb-2">
                  {formData.timePeriod} సంవత్సరాలలో ₹{formData.targetAmount.toLocaleString('en-IN')} చేరుకోవాలంటే:
                </p>
                <p className="text-4xl font-bold text-green-900">
                  ₹{reverseResult.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-green-700 mt-2">
                  ఇప్పుడు పెట్టుబడి చేయాలి ({formData.expectedReturn}% వార్షిక రాబడితో)
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-medium text-gray-900 mb-2">వివరణ:</h4>
                <p className="text-sm text-gray-700">
                  మీరు ఇప్పుడు ₹{reverseResult.toLocaleString('en-IN')} పెట్టుబడి చేస్తే, 
                  {formData.expectedReturn}% వార్షిక రాబడితో {formData.timePeriod} సంవత్సరాలలో 
                  ₹{formData.targetAmount.toLocaleString('en-IN')} అవుతుంది.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* How Lump Sum Works */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            లంప్‌సమ్ ఇన్వెస్ట్‌మెంట్ ఎలా పని చేస్తుంది?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">లంప్‌సమ్ అంటే ఏమిటి?</h4>
              <p className="text-sm text-blue-800">
                లంప్‌సమ్ అంటే ఒకేసారి పెద్ద మొత్తంలో పెట్టుబడి చేయడం. SIP లాగా నెలవారీ చెల్లింపులు కాకుండా, 
                మొత్తం డబ్బును ఒకేసారి ఇన్వెస్ట్ చేస్తారు.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-purple-900 mb-2">లంప్‌సమ్ ఎప్పుడు చేయాలి?</h4>
              <p className="text-sm text-purple-800">
                మార్కెట్ దిగువ స్థాయిలో ఉన్నప్పుడు, పెద్ద మొత్తం అందుబాటులో ఉన్నప్పుడు, 
                మరియు మార్కెట్ టైమింగ్ గురించి అవగాహన ఉన్నప్పుడు లంప్‌సమ్ చేయవచ్చు.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h4 className="font-medium text-gray-900 mb-2">కంపౌండ్ ఇంట్రెస్ట్ ఫార్ములా:</h4>
            <div className="text-center bg-gray-50 p-3 rounded font-mono text-sm">
              FV = PV × (1 + r)^n
            </div>
            <div className="text-xs text-gray-600 mt-2">
              <strong>FV</strong> = భవిష్యత్ విలువ, <strong>PV</strong> = ప్రస్తుత విలువ (పెట్టుబడి), 
              <strong>r</strong> = వార్షిక రాబడి రేటు, <strong>n</strong> = సంవత్సరాలు
            </div>
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
                లంప్‌సమ్ vs SIP - ఏది మంచిది?
              </h4>
              <p className="text-gray-700">
                రెండూ వేర్వేరు పరిస్థితులకు అనువైనవి. లంప్‌సమ్ మార్కెట్ దిగువ స్థాయిలో ఉన్నప్పుడు మంచిది. 
                SIP మార్కెట్ టైమింగ్ రిస్క్ తగ్గిస్తుంది. కొత్త ఇన్వెస్టర్లు SIP తో మొదలుపెట్టడం మంచిది.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                లంప్‌సమ్‌కు కనిష్ట మొత్తం ఎంత?
              </h4>
              <p className="text-gray-700">
                చాలా మ్యూచువల్ ఫండ్‌లలో లంప్‌సమ్ కోసం కనిష్ట మొత్తం ₹5,000 నుండి ₹10,000 వరకు ఉంటుంది. 
                కొన్ని ఫండ్‌లలో ₹1,000 నుండి మొదలుపెట్టవచ్చు.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                లంప్‌సమ్ ఇన్వెస్ట్‌మెంట్‌లో ఎంత రిస్క్ ఉంది?
              </h4>
              <p className="text-gray-700">
                లంప్‌సమ్‌లో మార్కెట్ టైమింగ్ రిస్క్ అధికం. మార్కెట్ గరిష్ట స్థాయిలో పెట్టుబడి చేస్తే నష్టం వాలుతుంది. 
                అయితే దీర్ఘకాలికంగా మంచి రిటర్న్లు రావచ్చు.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                లంప్‌సమ్‌పై ఎంత ట్యాక్స్ కట్టాలి?
              </h4>
              <p className="text-gray-700">
                ఈక్విటీ ఫండ్‌లలో 1 సంవత్సరం కంటే తక్కువ హోల్డ్ చేస్తే STCG ట్యాక్స్ 15%. 
                1+ సంవత్సరం హోల్డ్ చేస్తే LTCG ట్యాక్స్ - ₹1 లక్ష మించిన లాభాలపై 10%.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                లంప్‌సమ్ ఎప్పుడు విత్‌డ్రా చేయవచ్చు?
              </h4>
              <p className="text-gray-700">
                లంప్‌సమ్ ఇన్వెస్ట్‌మెంట్‌ను ఎప్పుడైనా విత్‌డ్రా చేయవచ్చు. అయితే ELSS ఫండ్‌లలో 3 సంవత్సరాల లాక్-ఇన్ ఉంది. 
                కొన్ని ఫండ్‌లలో ఎగ్జిట్ లోడ్ ఉండవచ్చు.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                లంప్‌సమ్ రిటర్న్లు ఎలా ట్రాక్ చేయాలి?
              </h4>
              <p className="text-gray-700">
                AMC వెబ్‌సైట్, మొబైల్ యాప్‌లు, లేదా MF యూటిలిటీ ద్వారా రిటర్న్లను ట్రాక్ చేయవచ్చు. 
                XIRR రేట్‌ని చూసి అసలు రిటర్న్ రేట్ తెలుసుకోవచ్చు.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <DisclaimerBanner type="calculator" />
    </div>
  );
}