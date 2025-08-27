"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingUp, 
  DollarSign, 
  PiggyBank, 
  Receipt, 
  Calculator,
  ArrowUpRight,
  Shield,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { FDResult, FDInputs, formatIndianCurrency, formatPercentage } from '@/lib/computations/fd-calculator';

interface FDResultsProps {
  results: FDResult;
  inputs: FDInputs;
}

export default function FDResults({ results, inputs }: FDResultsProps) {
  const { principal, maturityAmount, totalInterest, effectiveAnnualRate, taxableInterest, tdsAmount, postTaxMaturityAmount } = results;
  
  // Calculate percentages for visual representation
  const interestPercentage = (totalInterest / maturityAmount) * 100;
  const principalPercentage = (principal / maturityAmount) * 100;
  
  // Calculate returns multiple
  const returnsMultiple = maturityAmount / principal;
  
  // Calculate tenure details
  const tenureYears = inputs.tenure / 12;
  const tenureDisplay = inputs.tenure >= 12 
    ? `${Math.floor(tenureYears)} సంవత్సరం${tenureYears > 1 ? 'లు' : ''} ${inputs.tenure % 12 > 0 ? `${inputs.tenure % 12} నెల${inputs.tenure % 12 > 1 ? 'లు' : ''}` : ''}`
    : `${inputs.tenure} నెల${inputs.tenure > 1 ? 'లు' : ''}`;

  // Calculate monthly interest (for non-cumulative FDs)
  const monthlyInterest = Math.round((principal * inputs.interestRate) / (12 * 100));
  
  return (
    <div className="space-y-6">
      
      {/* Main Results Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            FD మెచ్యూరిటీ వివరాలు
          </CardTitle>
          <p className="text-gray-600">
            {tenureDisplay} తర్వాత మీ FD లో ఉండే మొత్తం
          </p>
        </CardHeader>
        <CardContent>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Maturity Amount */}
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-700 mb-1">
                {formatIndianCurrency(maturityAmount)}
              </div>
              <p className="text-green-600 text-sm font-medium">మెచ్యూరిటీ అమౌంట్</p>
              <Badge variant="default" className="mt-2 bg-green-600">
                {returnsMultiple.toFixed(2)}x రిటర్న్
              </Badge>
            </div>

            {/* Principal Amount */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">
                {formatIndianCurrency(principal)}
              </div>
              <p className="text-blue-600 text-sm font-medium">డిపాజిట్ మొత్తం</p>
              <Badge variant="outline" className="mt-2">
                {principalPercentage.toFixed(1)}% ప్రిన్సిపల్
              </Badge>
            </div>

            {/* Interest Earned */}
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">
                {formatIndianCurrency(totalInterest)}
              </div>
              <p className="text-yellow-600 text-sm font-medium">మొత్తం వడ్డీ</p>
              <Badge variant="outline" className="mt-2">
                {interestPercentage.toFixed(1)}% వడ్డీ
              </Badge>
            </div>

            {/* Effective Rate */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-purple-700 mb-1">
                {formatPercentage(effectiveAnnualRate)}
              </div>
              <p className="text-purple-600 text-sm font-medium">ఎఫెక్టివ్ రేట్</p>
              <Badge variant="outline" className="mt-2">
                వార్షిక
              </Badge>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Detailed Breakdown */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Investment Summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gray-600" />
                పెట్టుబడి సారాంశం
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">డిపాజిట్ మొత్తం:</span>
                  <span className="font-semibold">{formatIndianCurrency(inputs.principal)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">వడ్డీ రేట్:</span>
                  <span className="font-semibold">{formatPercentage(inputs.interestRate)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">వ్యవధి:</span>
                  <span className="font-semibold">{tenureDisplay}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">కంపౌండింగ్:</span>
                  <span className="font-semibold">
                    {inputs.compoundingFrequency === 'monthly' ? 'నెలవారీ' : 
                     inputs.compoundingFrequency === 'quarterly' ? 'త్రైమాసిక' : 'వార్షిక'}
                  </span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-gray-900">మెచ్యూరిటీ అమౌంట్:</span>
                  <span className="text-green-700">{formatIndianCurrency(maturityAmount)}</span>
                </div>
              </div>
            </div>

            {/* Tax Analysis */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-gray-600" />
                పన్ను విశ్లేషణ
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">మొత్తం వడ్డీ:</span>
                  <span className="font-semibold">{formatIndianCurrency(totalInterest)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">టాక్సబుల్ వడ్డీ:</span>
                  <span className="font-semibold text-orange-700">{formatIndianCurrency(taxableInterest)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">TDS అమౌంట్:</span>
                  <span className="font-semibold text-red-700">{formatIndianCurrency(tdsAmount)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-gray-900">పోస్ట్-టాక్స్ అమౌంట్:</span>
                  <span className="text-green-700">{formatIndianCurrency(postTaxMaturityAmount)}</span>
                </div>
                
                {taxableInterest > 0 && (
                  <div className="mt-2 text-xs text-orange-600">
                    * వార్షిక వడ్డీ ₹40,000+ ఉంటే TDS వర్తిస్తుంది
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">మెచ్యూరిటీ అమౌంట్ కంపోజిషన్</h4>
            <div className="w-full bg-gray-200 rounded-full h-8 flex overflow-hidden">
              <div 
                className="bg-blue-600 flex items-center justify-center text-white text-xs font-semibold"
                style={{ width: `${principalPercentage}%` }}
              >
                {principalPercentage > 25 && `${principalPercentage.toFixed(0)}%`}
              </div>
              <div 
                className="bg-yellow-500 flex items-center justify-center text-white text-xs font-semibold"
                style={{ width: `${interestPercentage}%` }}
              >
                {interestPercentage > 25 && `${interestPercentage.toFixed(0)}%`}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span>డిపాజిట్ ({principalPercentage.toFixed(1)}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>వడ్డీ ({interestPercentage.toFixed(1)}%)</span>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">గ్యారంటీడ్ రిటర్న్స్</h4>
              <p className="text-green-800 text-sm">
                మీ డబ్బు {returnsMultiple.toFixed(2)} రెట్లు పెరిగింది {inputs.compoundingFrequency === 'monthly' ? 'నెలవారీ' : inputs.compoundingFrequency === 'quarterly' ? 'త్రైమాసిక' : 'వార్షిక'} కంపౌండింగ్ వల్ల
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">బ్యాంకు రక్షణ</h4>
              <p className="text-blue-800 text-sm">
                DICGC ఇన్సూరెన్స్ ప్రకారం ₹5 లక్షల వరకు డిపాజిట్ గ్యారంటీ
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">కంపౌండ్ ఇంట్రెస్ట్</h4>
              <p className="text-purple-800 text-sm">
                {inputs.compoundingFrequency === 'monthly' ? 'నెలవారీ' : inputs.compoundingFrequency === 'quarterly' ? 'త్రైమాసిక' : 'వార్షిక'} కంపౌండింగ్‌తో {formatPercentage(effectiveAnnualRate)} ఎఫెక్టివ్ రేట్
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Interest Payout (for Non-Cumulative FD) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">నెలవారీ వడ్డీ పేఅవుట్ ప్లాన్</CardTitle>
          <p className="text-gray-600 text-sm">నాన్-కమల్యటివ్ FD కోసం నెలవారీ వడ్డీ ఆదాయం</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700 mb-1">
                {formatIndianCurrency(monthlyInterest)}
              </div>
              <p className="text-yellow-600 text-sm">నెలవారీ వడ్డీ</p>
              <p className="text-xs text-gray-600 mt-1">(సింపుల్ ఇంట్రెస్ట్ బేస్‌డ్)</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {formatIndianCurrency(monthlyInterest * inputs.tenure)}
              </div>
              <p className="text-blue-600 text-sm">మొత్తం వడ్డీ ఆదాయం</p>
              <p className="text-xs text-gray-600 mt-1">({inputs.tenure} నెలల వ్యవధిలో)</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700 mb-1">
                {formatIndianCurrency(principal + (monthlyInterest * inputs.tenure))}
              </div>
              <p className="text-green-600 text-sm">మెచ్యూరిటీలో మొత్తం</p>
              <p className="text-xs text-gray-600 mt-1">(ప్రిన్సిపల్ + వడ్డీ)</p>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
              <p className="text-blue-800 text-sm">
                <strong>గమనిక:</strong> కమల్యటివ్ FD లో వడ్డీ రీ-ఇన్వెస్ట్ అవుతుంది, కాబట్టి కంపౌండింగ్ బెనిఫిట్ ఎక్కువ. 
                నాన్-కమల్యటివ్ FD లో వడ్డీ ఆదాయం పెరియాడిక్‌గా లభిస్తుంది.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      {(taxableInterest > 0 || tdsAmount > 0) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              పన్ను గురించి ముఖ్యమైన సమాచారం
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {taxableInterest > 0 && (
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-1">TDS వర్తించబడుతుంది</h4>
                  <p className="text-orange-800 text-sm">
                    మీ వార్షిక వడ్డీ ₹40,000 కంటే ఎక్కువ ఉన్నందున, బ్యాంకు 10% TDS కట్ చేస్తుంది. 
                    మొత్తం TDS: {formatIndianCurrency(tdsAmount)}
                  </p>
                </div>
              )}
              
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-1">ఇంకం టాక్స్ రిటర్న్లో</h4>
                <p className="text-blue-800 text-sm">
                  FD వడ్డీ మీ ఇంకం టాక్స్ స్లాబ్ ప్రకారం టాక్స్ చెల్లించాల్సి ఉంటుంది. 
                  TDS కట్ చేసిన మొత్తం ITR లో అడ్జస్ట్ అవుతుంది.
                </p>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-1">టాక్స్ సేవింగ్ FD</h4>
                <p className="text-green-800 text-sm">
                  5 సంవత్సరాల టాక్స్ సేవర్ FD లో పెట్టుబడి చేస్తే సెక్షన్ 80C కింద ₹1.5 లక్షల వరకు టాక్స్ డిడక్షన్ పొందవచ್చు.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

    </div>
  );
}