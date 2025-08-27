"use client";

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Calculator, TrendingUp, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  calculatePPF,
  validatePPFInputs,
  PPFInputs,
  PPFResult,
  PPF_RULES,
  getCurrentPPFRate,
  calculatePartialWithdrawal,
  calculateLoanFacility,
  calculateEffectiveReturn,
  formatIndianCurrency
} from '@/lib/computations/ppf-calculator';

import PPFResults from './PPFResults';
import PPFChart from './PPFChart';

export default function PPFCalculator() {
  const [annualContribution, setAnnualContribution] = useState<number>(150000);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(getCurrentPPFRate());
  
  const [results, setResults] = useState<PPFResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateResults = useCallback(() => {
    const inputs: PPFInputs = {
      annualContribution,
      investmentPeriod,
      interestRate
    };

    const validation = validatePPFInputs(inputs);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setResults(null);
      return;
    }

    setErrors([]);
    setIsCalculating(true);

    try {
      const calculatedResults = calculatePPF(inputs);
      setResults(calculatedResults);
      
      // Dispatch custom event for telemetry
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('telemetry-track', {
          detail: {
            event: 'ppf_calculation',
            data: {
              annual_contribution: annualContribution,
              investment_period: investmentPeriod,
              interest_rate: interestRate,
              maturity_amount: calculatedResults.maturityAmount,
              total_contributions: calculatedResults.totalContributions,
              timestamp: new Date().toISOString()
            }
          }
        }));
      }
    } catch {
      setErrors(['లెక్కింపులో లోపం జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.']);
      setResults(null);
    }

    setIsCalculating(false);
  }, [annualContribution, investmentPeriod, interestRate]);

  const handleReset = () => {
    setAnnualContribution(150000);
    setInvestmentPeriod(15);
    setInterestRate(getCurrentPPFRate());
    setResults(null);
    setErrors([]);
  };

  const useMaxContribution = () => {
    setAnnualContribution(PPF_RULES.maxAnnualContribution);
  };

  const useCurrentRate = () => {
    setInterestRate(getCurrentPPFRate());
  };

  return (
    <div className="space-y-6">
      
      {/* PPF Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            PPF లెక్కింపు
          </CardTitle>
          <p className="text-gray-600">
            మీ PPF పెట్టుబడి వృద్ధిని లెక్కించండి మరియు పన్ను ప్రయోజనాలను తెలుసుకోండి
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Input Form */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Annual Contribution */}
            <div className="space-y-2">
              <Label htmlFor="annualContribution" className="text-sm font-medium">
                వార్షిక కంట్రిబ్యూషన్ (₹)
              </Label>
              <div className="relative">
                <Input
                  id="annualContribution"
                  type="number"
                  value={annualContribution}
                  onChange={(e) => setAnnualContribution(Number(e.target.value))}
                  min={PPF_RULES.minAnnualContribution}
                  max={PPF_RULES.maxAnnualContribution}
                  className="pr-20"
                  placeholder="150000"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={useMaxContribution}
                  className="absolute right-1 top-1 h-8 px-2 text-xs"
                >
                  MAX
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                కనీసం ₹{PPF_RULES.minAnnualContribution.toLocaleString('en-IN')} - గరిష్టం ₹{PPF_RULES.maxAnnualContribution.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Investment Period */}
            <div className="space-y-2">
              <Label htmlFor="investmentPeriod" className="text-sm font-medium">
                పెట్టుబడి వ్యవధి (సంవత్సరాలు)
              </Label>
              <Input
                id="investmentPeriod"
                type="number"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                min={PPF_RULES.minInvestmentPeriod}
                max={PPF_RULES.maxInvestmentPeriod}
                placeholder="15"
              />
              <p className="text-xs text-gray-500">
                కనీసం {PPF_RULES.minInvestmentPeriod} సంవత్సరాలు (లాక్-ఇన్ పీరియడ్)
              </p>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <Label htmlFor="interestRate" className="text-sm font-medium">
                వడ్డీ రేట్ (% వార్షిక)
              </Label>
              <div className="relative">
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  min={PPF_RULES.minInterestRate}
                  max={PPF_RULES.maxInterestRate}
                  className="pr-24"
                  placeholder="7.1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={useCurrentRate}
                  className="absolute right-1 top-1 h-8 px-2 text-xs"
                >
                  CURRENT
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                ప్రస్తుత రేట్: {getCurrentPPFRate()}% (ప్రభుత్వం నిర్ణయించిన రేట్)
              </p>
            </div>
          </div>

          {/* Error Messages */}
          {errors.length > 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={calculateResults} 
              disabled={isCalculating}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isCalculating ? 'లెక్కిస్తున్నాం...' : 'లెక్కించండి'}
            </Button>
            <Button variant="outline" onClick={handleReset}>
              రీసెట్ చేయండి
            </Button>
          </div>

          {/* PPF Information */}
          <div className="grid md:grid-cols-2 gap-4 mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4" />
                PPF ముఖ్య లక్షణాలు
              </h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• కనీసం 15 సంవత్సరాల లాక్-ఇన్ పీరియడ్</li>
                <li>• సెక్షన్ 80C కింద పన్ను మినహాయింపు</li>
                <li>• వడ్డీ మరియు మెచ్యూరిటీ పన్ను రహిత</li>
                <li>• 7వ సంవత్సరం తర్వాత పార్షియల్ విత్‌డ్రాల్</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                అదనపు సౌకర్యాలు
              </h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• 3వ సంవత్సరం తర్వాత లోన్ ఫెసిలిటీ</li>
                <li>• 5 సంవత్సరాల పొడిగింపు అవకాశం</li>
                <li>• EEE (Exempt-Exempt-Exempt) స్టేటస్</li>
                <li>• ప్రభుత్వ గ్యారంటీతో సురక్షిత పెట్టుబడి</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {results && (
        <>
          {/* Calculation Disclaimer */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>గమనిక:</strong> ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పెట్టుబడి సలహా కాదు. 
              వాస్తవ PPF వడ్డీ రేట్లు ప్రభుత్వం మార్చవచ్చు.
            </AlertDescription>
          </Alert>

          {/* Results Display */}
          <PPFResults 
            results={results}
            inputs={{
              annualContribution,
              investmentPeriod,
              interestRate
            }}
          />

          {/* Chart Display */}
          <PPFChart 
            inputs={{
              annualContribution,
              investmentPeriod,
              interestRate
            }}
          />

          {/* Additional Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                PPF అదనపు సౌకర్యాలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="withdrawal" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="withdrawal">పార్షియల్ విత్‌డ్రాల్</TabsTrigger>
                  <TabsTrigger value="loan">లోన్ ఫెసిలిటీ</TabsTrigger>
                  <TabsTrigger value="extension">పొడిగింపు</TabsTrigger>
                </TabsList>
                
                <TabsContent value="withdrawal" className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">7వ సంవత్సరం తర్వాత పార్షియల్ విత్‌డ్రాల్</h4>
                    {investmentPeriod >= 7 ? (
                      <div>
                        {(() => {
                          const withdrawal = calculatePartialWithdrawal(
                            results.maturityAmount, 
                            Math.min(investmentPeriod, 7)
                          );
                          return (
                            <div>
                              <p className="text-blue-800 text-sm mb-2">{withdrawal.message}</p>
                              {withdrawal.eligible && (
                                <Badge variant="default" className="bg-blue-600">
                                  గరిష్ట విత్‌డ్రాల్: {formatIndianCurrency(withdrawal.maxWithdrawal)}
                                </Badge>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    ) : (
                      <p className="text-blue-800 text-sm">7 సంవత్సరాల తర్వాత అందుబాటులో ఉంటుంది</p>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="loan" className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">3వ సంవత్సరం తర్వాత లోన్ ఫెసిలిటీ</h4>
                    {investmentPeriod >= 3 ? (
                      <div>
                        {(() => {
                          const loan = calculateLoanFacility(
                            results.maturityAmount, 
                            Math.min(investmentPeriod, 3)
                          );
                          return (
                            <div>
                              <p className="text-green-800 text-sm mb-2">{loan.message}</p>
                              {loan.eligible && (
                                <Badge variant="default" className="bg-green-600">
                                  గరిష్ట లోన్: {formatIndianCurrency(loan.maxLoan)}
                                </Badge>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    ) : (
                      <p className="text-green-800 text-sm">3 సంవత్సరాల తర్వాత అందుబాటులో ఉంటుంది</p>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="extension" className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">15 సంవత్సరాల తర్వాత పొడిగింపు</h4>
                    <p className="text-purple-800 text-sm mb-3">
                      మెచ్యూరిటీ తర్వాత మీరు 5 సంవత్సరాల బ్లాక్‌లలో PPF ను పొడిగించవచ్చు.
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1">
                      <li>• కొత్త కంట్రిబ్యూషన్‌లు లేకుండా అకౌంట్ కంటిన్యూ చేయవచ్చు</li>
                      <li>• లేదా అదనపు కంట్రిబ్యూషన్‌లతో పొడిగించవచ్చు</li>
                      <li>• పొడిగింపు కాలంలోనూ వడ్డీ లభిస్తుంది</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Effective Return Calculation */}
          <Card>
            <CardHeader>
              <CardTitle>వాస్తవ రాబడి రేట్</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">పన్ను ప్రయోజనాలతో</h4>
                  {(() => {
                    const effectiveReturn = calculateEffectiveReturn(
                      results.maturityAmount,
                      results.totalContributions,
                      results.taxSavings,
                      investmentPeriod
                    );
                    return (
                      <div className="text-2xl font-bold text-green-600">
                        {effectiveReturn.toFixed(2)}% వార్షిక
                      </div>
                    );
                  })()}
                  <p className="text-sm text-gray-600 mt-1">
                    సెక్షన్ 80C పన్ను మినహాయింపు కలిపి లెక్కించిన రేట్
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">పన్ను ప్రయోజనాలు లేకుండా</h4>
                  <div className="text-2xl font-bold text-blue-600">
                    {interestRate.toFixed(2)}% వార్షిక
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    కేవలం వడ్డీ రేట్ (పన్ను మినహాయింపు లేకుండా)
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>గుర్తుంచుకోండి:</strong> PPF త్రిపుల్ ఎ (EEE) - కంట్రిబ్యూషన్, వడ్డీ మరియు మెచ్యూరిటీ అన్నీ పన్ను రహితం!
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Explainer Content */}
      <div className="space-y-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              PPF ఎలా పని చేస్తుంది?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              పబ్లిక్ ప్రావిడెంట్ ఫండ్ (PPF) అనేది 15 సంవత్సరాల లాక్-ఇన్ ఉన్న దీర్ఘకాలిక పొదుపు పథకం. 
              ఇది EEE (ఎక్సెంప్ట్-ఎక్సెంప్ట్-ఎక్సెంప్ట్) స్టేటస్‌తో పన్ను మినహాయింపులు అందిస్తుంది.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              PPF యొక్క ప్రధాన లక్షణలు:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>15 సంవత్సరాల కనిష్ట లాక్-ఇన్ పీరియడ్</li>
              <li>వార్షికంగా గరిష్టం ₹1.5 లక్షలు కంట్రిబ్యూషన్</li>
              <li>సెక్షన్ 80C కింద పన్ను మినహాయింపు</li>
              <li>ప్రభుత్వ గారంటీతో 100% భద్రత</li>
              <li>కంపౌండ్ వడ్డీతో దీర్ఘకాలిక సంపద సృష్టి</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="text-yellow-800 font-medium">
                గమనిక: ఈ కాలిక్యులేటర్ విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                PPF నిబంధనలు మారవచ్చు, తాజా సమాచారం కోసం ఆర్థిక సలహాదారుని సంప్రదించండి.
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
                  PPF లో కనిష్ట మరియు గరిష్ట కంట్రిబ్యూషన్ ఎంత?
                </h4>
                <p className="text-gray-700">
                  కనిష్టం వార్షికంగా ₹500, గరిష్టం ₹1.5 లక్షలు. మీరు ఏ మొత్తంలో అయినా కంట్రిబ్యూట్ చేయవచ్చు కానీ 
                  పన్ను మినహాయింపు కోసం గరిష్టం ₹1.5 లక్షలు మాత్రమే.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  PPF మెచ్యూరిటీ తర్వాత ఏమి చేయవచ్చు?
                </h4>
                <p className="text-gray-700">
                  15 సంవత్సరాల తర్వాత మీరు మొత్తం మొత్తాన్ని విత్‌డ్రా చేసుకోవచ్చు లేదా 5 సంవత్సరాల బ్లాక్‌లలో 
                  పొడిగించవచ్చు. పొడిగింపు కాలంలో కొత్త కంట్రిబ్యూషన్‌లు చేయవచ్చు లేదా చేయకపోవచ్చు.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  PPF నుండి లోన్ లేదా పార్షియల్ విత్‌డ్రాల్ చేయవచ్చా?
                </h4>
                <p className="text-gray-700">
                  3వ సంవత్సరం తర్వాత లోన్ ఫెసిలిటీ ఉంది (మొత్తంలో 25% వరకు). 7వ సంవత్సరం తర్వాత 
                  పార్షియల్ విత్‌డ్రాల్ చేయవచ్చు (మొత్తంలో 50% వరకు లేదా మునుపటి సంవత్సరం బ్యాలెన్స్‌లో 6 రెట్లు).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  PPF వడ్డీ రేటు ఎలా నిర్ణయించబడుతుంది?
                </h4>
                <p className="text-gray-700">
                  PPF వడ్డీ రేటు ప్రతి త్రైమాసికానికి ప్రభుత్వం ప్రకటిస్తుంది. ఇది 10-సంవత్సరాల G-Sec యీల్డ్‌కు లింక్ చేయబడింది. 
                  ప్రస్తుతం 7.1% వార్షిక వడ్డీ రేటు ఉంది (2024 నాటికి).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  PPF అకౌంట్ ట్రాన్స్‌ఫర్ చేయవచ్చా?
                </h4>
                <p className="text-gray-700">
                  అవును, PPF అకౌంట్‌ను ఏ బ్యాంక్ బ్రాంచ్ నుండి వేరే బ్యాంక్ బ్రాంచ్‌కి లేదా పోస్ట్ ఆఫీస్‌కి 
                  ట్రాన్స్‌ఫర్ చేయవచ్చు. ఇది ఉచితం మరియు ఆన్‌లైన్‌లోనూ చేయవచ్చు.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  PPF vs ఇతర ఇన్వెస్ట్‌మెంట్‌లు - ఎలా పోల్చాలి?
                </h4>
                <p className="text-gray-700">
                  PPF రిస్క్-ఫ్రీ ఇన్వెస్ట్‌మెంట్ కాబట్టి FD, NSC లాంటి వాటితో పోల్చవచ్చు. అయితే పన్ను ప్రయోజనాలు మరియు 
                  దీర్ఘకాలిక కంపౌండింగ్ వల్ల PPF చాలా మంచి ఆప్షన్. అధిక రిటర్న్‌కోసం ఈక్విటీ ఫండ్స్‌ను కూడా కన్సిడర్ చేయవచ్చు.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}