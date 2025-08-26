"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";
import { 
  calculateEMI, 
  validateEMIInputs, 
  LoanType, 
  EMIInputs, 
  EMIResult,
  LOAN_TYPE_CONFIGS,
  getSuggestedInterestRate,
  getSuggestedLoanAmount,
  getSuggestedTenure
} from "@/lib/computations/emi-calculator";
import EMIResults from "./EMIResults";
import EMIChart from "./EMIChart";
import TelemetryTracker from "./TelemetryTracker";

export default function EMICalculator() {
  const [loanType, setLoanType] = useState<LoanType>('home');
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTenure, setLoanTenure] = useState<string>('');
  const [result, setResult] = useState<EMIResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  // Initialize with suggested values when loan type changes
  useEffect(() => {
    const suggestedAmount = getSuggestedLoanAmount(loanType);
    const suggestedRate = getSuggestedInterestRate(loanType);
    const suggestedTenure = getSuggestedTenure(loanType);
    
    setLoanAmount(suggestedAmount.toString());
    setInterestRate(suggestedRate.toString());
    setLoanTenure(suggestedTenure.toString());
    setResult(null);
    setErrors([]);
    setIsCalculated(false);
  }, [loanType]);

  const calculateResults = useCallback(() => {
    try {
      const inputs: EMIInputs = {
        loanAmount: parseFloat(loanAmount) || 0,
        interestRate: parseFloat(interestRate) || 0,
        loanTenure: parseFloat(loanTenure) || 0,
        loanType
      };

      const validation = validateEMIInputs(inputs);
      
      if (!validation.isValid) {
        setErrors(validation.errors);
        setResult(null);
        setIsCalculated(false);
        return;
      }

      const calculationResult = calculateEMI(inputs);
      setResult(calculationResult);
      setErrors([]);
      setIsCalculated(true);

    } catch (error) {
      console.error('EMI calculation error:', error);
      setErrors(['లెక్కింపులో లోపం. దయచేసి సరైన విలువలు నమోదు చేయండి.']);
      setResult(null);
      setIsCalculated(false);
    }
  }, [loanAmount, interestRate, loanTenure, loanType]);

  // Real-time calculation when inputs change
  useEffect(() => {
    if (loanAmount && interestRate && loanTenure) {
      calculateResults();
    } else {
      setResult(null);
      setErrors([]);
      setIsCalculated(false);
    }
  }, [loanAmount, interestRate, loanTenure, loanType, calculateResults]);

  const handleCalculateClick = () => {
    calculateResults();
    
    // Track telemetry event for explicit calculation
    if (result) {
      const telemetryData = {
        loanType,
        loanAmount: parseFloat(loanAmount),
        interestRate: parseFloat(interestRate),
        loanTenure: parseFloat(loanTenure),
        monthlyEMI: result.monthlyEMI,
        totalAmountPayable: result.totalAmountPayable
      };

      // Track calculation event
      console.log('Tracking EMI calculation:', telemetryData);
    }
  };

  const handleLoanTypeChange = (newLoanType: LoanType) => {
    setLoanType(newLoanType);
    
    // Track loan type switch
    console.log('Tracking loan type switch:', { from: loanType, to: newLoanType });
  };

  const handleExport = (type: 'csv' | 'png') => {
    if (!result) return;

    // Track export event
    console.log('Tracking EMI export:', { type, loanType, hasResults: !!result });
  };

  const config = LOAN_TYPE_CONFIGS[loanType];

  return (
    <div className="space-y-6">
      <TelemetryTracker trackPageView={false} />

      {/* Loan Type Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            లోన్ రకం ఎంచుకోండి
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={loanType} onValueChange={(value) => handleLoanTypeChange(value as LoanType)}>
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="home" className="text-sm">
                {LOAN_TYPE_CONFIGS.home.teluguName}
              </TabsTrigger>
              <TabsTrigger value="car" className="text-sm">
                {LOAN_TYPE_CONFIGS.car.teluguName}
              </TabsTrigger>
              <TabsTrigger value="personal" className="text-sm">
                {LOAN_TYPE_CONFIGS.personal.teluguName}
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>{config.teluguName}:</strong> {config.description}
              </p>
              <p className="text-xs text-blue-600 mt-1">
                వడ్డీ రేట్: {config.minInterestRate}% - {config.maxInterestRate}% | 
                వ్యవధి: {config.minTenure} - {config.maxTenure} సంవత్సరాలు
              </p>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            లోన్ వివరాలు
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Loan Amount */}
            <div className="space-y-2">
              <Label htmlFor="loanAmount" className="text-sm font-medium text-gray-700">
                లోన్ మొత్తం (₹)
              </Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="ఉదా: 5000000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="text-lg"
                min={config.minAmount}
                max={config.maxAmount}
              />
              <p className="text-xs text-gray-500">
                పరిధి: ₹{config.minAmount.toLocaleString('en-IN')} - ₹{config.maxAmount.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <Label htmlFor="interestRate" className="text-sm font-medium text-gray-700">
                వార్షిక వడ్డీ రేట్ (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                placeholder="ఉదా: 8.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="text-lg"
                min={config.minInterestRate}
                max={config.maxInterestRate}
              />
              <p className="text-xs text-gray-500">
                పరిధి: {config.minInterestRate}% - {config.maxInterestRate}%
              </p>
            </div>

            {/* Loan Tenure */}
            <div className="space-y-2">
              <Label htmlFor="loanTenure" className="text-sm font-medium text-gray-700">
                లోన్ వ్యవధి (సంవత్సరాలు)
              </Label>
              <Input
                id="loanTenure"
                type="number"
                placeholder="ఉదా: 20"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                className="text-lg"
                min={config.minTenure}
                max={config.maxTenure}
              />
              <p className="text-xs text-gray-500">
                పరిధి: {config.minTenure} - {config.maxTenure} సంవత్సరాలు
              </p>
            </div>
          </div>

          {/* Error Display */}
          {errors.length > 0 && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-red-900 mb-1">
                    దయచేసి క్రింది లోపాలను సరిచేయండి:
                  </h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Calculate Button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleCalculateClick}
              size="lg"
              className="px-8 py-3 text-lg font-medium"
              disabled={!loanAmount || !interestRate || !loanTenure || errors.length > 0}
            >
              EMI లెక్కించండి
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && isCalculated && (
        <>
          <EMIResults 
            result={result}
            inputs={{
              loanAmount: parseFloat(loanAmount),
              interestRate: parseFloat(interestRate),
              loanTenure: parseFloat(loanTenure),
              loanType
            }}
          />

          <EMIChart 
            inputs={{
              loanAmount: parseFloat(loanAmount),
              interestRate: parseFloat(interestRate),
              loanTenure: parseFloat(loanTenure),
              loanType
            }}
          />

          {/* Export functionality placeholder */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  రిపోర్ట్ డౌన్లోడ్ చేయండి
                </h3>
                <div className="space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => handleExport('csv')}
                    className="px-6"
                  >
                    CSV డౌన్లోడ్
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleExport('png')}
                    className="px-6"
                  >
                    PNG డౌన్లోడ్
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  EMI షెడ్యూల్ మరియు చార్ట్లను సేవ్ చేయండి
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* How EMI Works Explainer */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            EMI ఎలా పని చేస్తుంది?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none text-gray-700" style={{ lineHeight: '1.6' }}>
            <p>
              <strong>EMI (Equated Monthly Installment)</strong> అంటే మీరు లోన్ కోసం ప్రతి నెలా చెల్లించాల్సిన స్థిర మొత్తం. 
              ఈ మొత్తంలో ప్రిన్సిపల్ (అసలు లోన్ మొత్తం) మరియు వడ్డీ రెండూ ఉంటాయి.
            </p>
            
            <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">EMI లెక్కింపు ఫార్ములా:</h4>
            <p className="bg-gray-50 p-3 rounded font-mono text-sm">
              EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
            </p>
            
            <div className="mt-4">
              <h5 className="font-medium text-gray-900 mb-2">ఇక్కడ:</h5>
              <ul className="space-y-1 text-sm">
                <li><strong>P</strong> = ప్రిన్సిపల్ లోన్ మొత్తం</li>
                <li><strong>R</strong> = మాసిక వడ్డీ రేట్ (వార్షిక రేట్ ÷ 12 ÷ 100)</li>
                <li><strong>N</strong> = మొత్తం నెలల సంఖ్య</li>
              </ul>
            </div>

            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">ముఖ్యమైన విషయాలు:</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>ప్రారంభంలో వడ్డీ ఎక్కువ:</strong> EMIలో మొదట వడ్డీ భాగం ఎక్కువ ఉంటుంది, కాలక్రమేణా ప్రిన్సిపల్ భాగం పెరుగుతుంది</li>
              <li>• <strong>వడ్డీ రేట్ ప్రభావం:</strong> వడ్డీ రేట్ 1% తగ్గితే EMI గణనీయంగా తక్కువ అవుతుంది</li>
              <li>• <strong>వ్యవధి ప్రభావం:</strong> లోన్ వ్యవధి పెంచితే EMI తక్కువ అవుతుంది కానీ మొత్తం వడ్డీ ఎక్కువ అవుతుంది</li>
              <li>• <strong>ప్రీపేమెంట్:</strong> అదనపు చెల్లింపులు చేసి లోన్ వ్యవధి మరియు వడ్డీని తగ్గించవచ్చు</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            తరచుగా అడిగే ప్రశ్నలు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <h4 className="font-medium text-gray-900 mb-2">EMI ఎలా లెక్కించబడుతుంది?</h4>
              <p className="text-sm text-gray-700">
                EMI లెక్కింపులో లోన్ మొత్తం, వడ్డీ రేట్, మరియు లోన్ వ్యవధిని ఉపయోగిస్తారు. 
                మేము పైన చూపిన ఫార్ములాను ఉపయోగించి ప్రతి నెల చెల్లించాల్సిన స్థిర మొత్తాన్ని లెక్కిస్తాం.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <h4 className="font-medium text-gray-900 mb-2">వడ్డీ రేట్ తగ్గితే EMI ఎంత తక్కువ అవుతుంది?</h4>
              <p className="text-sm text-gray-700">
                వడ్డీ రేట్ 1% తగ్గితే, లోన్ మొత్తం మరియు వ్యవధిని బట్టి EMI 5-15% వరకు తక్కువ అవుతుంది. 
                దీర్ఘకాలిక లోన్లలో ఈ తేడా మరింత ఎక్కువగా కనిపిస్తుంది.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <h4 className="font-medium text-gray-900 mb-2">లోన్ వ్యవధి పెంచితే ఏమవుతుంది?</h4>
              <p className="text-sm text-gray-700">
                లోన్ వ్యవధి పెంచితే మాసిక EMI తక్కువ అవుతుంది కానీ మొత్తంగా చెల్లించే వడ్డీ ఎక్కువ అవుతుంది. 
                కాబట్టి మీ ఆర్థిక పరిస్థితిని బట్టి సరైన వ్యవధిని ఎంచుకోండి.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">ప్రీపేమెంట్ చేయడం మంచిదా?</h4>
              <p className="text-sm text-gray-700">
                మీ వద్ద అదనపు డబ్బు ఉంటే, లోన్ ప్రీపేమెంట్ చేయడం మంచిది. దీని వల్ల మొత్తం వడ్డీ తగ్గుతుంది 
                మరియు లోన్ వ్యవధి కూడా తక్కువ అవుతుంది. కానీ ప్రీపేమెంట్ ఛార్జీలను తనిఖీ చేసుకోండి.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}