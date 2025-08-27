"use client";

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, Calculator, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  calculateFD,
  validateFDInputs,
  FDInputs,
  FDResult,
  FD_RULES,
  getSuggestedFDValues,
  getTypicalFDRates
} from '@/lib/computations/fd-calculator';

import FDResults from './FDResults';
import FDChart from './FDChart';

export default function FDCalculator() {
  const [principal, setPrincipal] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [tenure, setTenure] = useState<number>(12);
  const [compoundingFrequency, setCompoundingFrequency] = useState<'monthly' | 'quarterly' | 'yearly'>('quarterly');
  
  const [results, setResults] = useState<FDResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateResults = useCallback(() => {
    const inputs: FDInputs = {
      principal,
      interestRate,
      tenure,
      compoundingFrequency
    };

    const validation = validateFDInputs(inputs);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setResults(null);
      return;
    }

    setErrors([]);
    setIsCalculating(true);

    try {
      const calculatedResults = calculateFD(inputs);
      setResults(calculatedResults);
      
      // Dispatch custom event for telemetry
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('telemetry-track', {
          detail: {
            event: 'fd_calculation',
            data: {
              principal: principal,
              interest_rate: interestRate,
              tenure_months: tenure,
              compounding_frequency: compoundingFrequency,
              maturity_amount: calculatedResults.maturityAmount,
              total_interest: calculatedResults.totalInterest,
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
  }, [principal, interestRate, tenure, compoundingFrequency]);

  const handleReset = () => {
    const suggested = getSuggestedFDValues();
    setPrincipal(suggested.principal);
    setInterestRate(suggested.interestRate);
    setTenure(suggested.tenure);
    setCompoundingFrequency(suggested.compoundingFrequency);
    setResults(null);
    setErrors([]);
  };

  const useSuggestedValues = () => {
    const suggested = getSuggestedFDValues();
    setPrincipal(suggested.principal);
    setInterestRate(suggested.interestRate);
    setTenure(suggested.tenure);
    setCompoundingFrequency(suggested.compoundingFrequency);
  };

  return (
    <div className="space-y-6">
      
      {/* FD Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            FD లెక్కింపు
          </CardTitle>
          <p className="text-gray-600">
            మీ ఫిక్స్‌డ్ డిపాజిట్ మెచ్యూరిటీ మరియు వడ్డీని లెక్కించండి
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Input Form */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Principal Amount */}
            <div className="space-y-2">
              <Label htmlFor="principal" className="text-sm font-medium">
                ప్రిన్సిపల్ అమౌంట్ (₹)
              </Label>
              <div className="relative">
                <Input
                  id="principal"
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  min={FD_RULES.minPrincipal}
                  max={FD_RULES.maxPrincipal}
                  className="pr-20"
                  placeholder="100000"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={useSuggestedValues}
                  className="absolute right-1 top-1 h-8 px-2 text-xs"
                >
                  సూచన
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                కనీసం ₹{FD_RULES.minPrincipal.toLocaleString('en-IN')} - గరిష్టం ₹{FD_RULES.maxPrincipal.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <Label htmlFor="interestRate" className="text-sm font-medium">
                వార్షిక వడ్డీ రేట్ (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                min={FD_RULES.minInterestRate}
                max={FD_RULES.maxInterestRate}
                placeholder="6.5"
              />
              <p className="text-xs text-gray-500">
                సాధారణంగా {FD_RULES.minInterestRate}% నుండి {FD_RULES.maxInterestRate}% వరకు
              </p>
            </div>

            {/* Tenure */}
            <div className="space-y-2">
              <Label htmlFor="tenure" className="text-sm font-medium">
                కాలవధి (నెలలు)
              </Label>
              <Input
                id="tenure"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                min={FD_RULES.minTenureMonths}
                max={FD_RULES.maxTenureMonths}
                placeholder="12"
              />
              <p className="text-xs text-gray-500">
                {FD_RULES.minTenureMonths} నెల నుండి {FD_RULES.maxTenureMonths} నెలల ({Math.floor(FD_RULES.maxTenureMonths/12)} సంవత్సరాలు) వరకు
              </p>
            </div>

            {/* Compounding Frequency */}
            <div className="space-y-2">
              <Label htmlFor="compoundingFrequency" className="text-sm font-medium">
                కంపౌండింగ్ ఫ్రీక్వెన్సీ
              </Label>
              <Select value={compoundingFrequency} onValueChange={(value: 'monthly' | 'quarterly' | 'yearly') => setCompoundingFrequency(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="కంపౌండింగ్ ఎంచుకోండి" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">మాసిక (Monthly)</SelectItem>
                  <SelectItem value="quarterly">త్రైమాసిక (Quarterly)</SelectItem>
                  <SelectItem value="yearly">వార్షిక (Yearly)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                ఎక్కువ కంపౌండింగ్ = ఎక్కువ రిటర్న్
              </p>
            </div>
          </div>

          {/* Error Display */}
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
              className="bg-blue-600 hover:bg-blue-700"
              disabled={isCalculating}
            >
              {isCalculating ? 'లెక్కిస్తోంది...' : 'లెక్కించండి'}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
            >
              రీసెట్
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Typical FD Rates Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            సాధారణ FD రేట్లు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {getTypicalFDRates().slice(0, 6).map((rate, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-900">{rate.teluguTenure}</div>
                <div className="text-lg font-bold text-blue-600">{rate.rate}%</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * రేట్లు బ్యాంక్ మరియు కాలవధిని బట్టి మారవచ్చు
          </p>
        </CardContent>
      </Card>

      {/* Results */}
      {results && (
        <FDResults 
          inputs={{
            principal,
            interestRate,
            tenure,
            compoundingFrequency
          }} 
          results={results} 
        />
      )}

      {/* Chart */}
      {results && (
        <FDChart 
          inputs={{
            principal,
            interestRate,
            tenure,
            compoundingFrequency
          }} 
        />
      )}

      {/* Explainer Content */}
      <div className="space-y-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              FD ఎలా పని చేస్తుంది?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              ఫిక్స్‌డ్ డిపాజిట్ (FD) అనేది బ్యాంకులు మరియు ఆర్థిక సంస్థలు అందించే సురక్షితమైన పెట్టుబడి పద్ధతి. 
              ఇది నిర్ణీత వడ్డీ రేట్‌తో గ్యారంటీడ్ రిటర్న్లను అందిస్తుంది.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              FD యొక్క ప్రధాన లాభాలు:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>100% గ్యారంటీడ్ రిటర్న్లు</li>
              <li>DICGC ఇన్షురెన్స్ కవరేజ్ (₹5 లక్షల వరకు)</li>
              <li>కంపౌండింగ్ ప్రభావంతో వడ్డీ వృద్ధి</li>
              <li>ప్రిమెచ్యూర్ విత్‌డ్రాల్ సౌకర్యం</li>
              <li>రిస్క్ లేకుండా స్థిరమైన ఆదాయం</li>
              <li>వేర్వేరు కాలవధుల ఎంపిక</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="text-yellow-800 font-medium">
                గమనిక: ఈ కాలిక్యులేటర్ విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                వడ్డీ రేట్లు మరియు నియమాలు బ్యాంక్‌ను బట్టి మారవచ్చు.
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
                  కనిష్ఠ FD మొత్తం ఎంత?
                </h4>
                <p className="text-gray-700">
                  చాలా బ్యాంకులలో కనిష్ఠ FD మొత్తం ₹1,000. కొన్ని బ్యాంకులలో ₹500 నుండి కూడా FD చేయవచ్చు.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  FD కాలవధి ఎంత ఉండవచ్చు?
                </h4>
                <p className="text-gray-700">
                  FD కాలవధి 7 రోజుల నుండి 10 సంవత్సరాల వరకు ఉండవచ్చు. ఎక్కువ కాలవధి అంటే సాధారణంగా ఎక్కువ వడ్డీ రేట్.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  TDS ఎప్పుడు కట్టబడుతుంది?
                </h4>
                <p className="text-gray-700">
                  వార్షిక వడ్డీ ₹40,000 మించినట్లయితే 10% TDS కట్టబడుతుంది. సీనియర్ సిటిజన్లకు ₹50,000 వరకు ఎక్సెంప్షన్.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ప్రిమెచ్యూర్ విత్‌డ్రాల్ చేయవచ్చా?
                </h4>
                <p className="text-gray-700">
                  అవును, అత్యవసర పరిస్థితుల్లో ప్రిమెచ్యూర్ విత్‌డ్రాల్ చేయవచ్చు. కానీ పెనాల్టీ (సాధారణంగా 0.5-1%) ఉంటుంది.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  FD మరియు RD మధ్య తేడా ఏమిటి?
                </h4>
                <p className="text-gray-700">
                  FD లో ఒకేసారి మొత్తం డబ్బు జమ చేస్తారు. RD లో మాసిక వాళ్లు చేస్తారు. FD లో సాధారణంగా ఎక్కువ వడ్డీ రేట్ ఉంటుంది.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}