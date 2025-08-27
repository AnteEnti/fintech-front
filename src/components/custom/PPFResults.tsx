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
  Shield
} from "lucide-react";
import { PPFResult, PPFInputs, formatIndianCurrency } from '@/lib/computations/ppf-calculator';

interface PPFResultsProps {
  results: PPFResult;
  inputs: PPFInputs;
}

export default function PPFResults({ results, inputs }: PPFResultsProps) {
  const { totalContributions, totalInterestEarned, maturityAmount, taxSavings } = results;
  
  // Calculate percentages for visual representation
  const interestPercentage = (totalInterestEarned / maturityAmount) * 100;
  const principalPercentage = (totalContributions / maturityAmount) * 100;
  
  // Calculate returns multiple
  const returnsMultiple = maturityAmount / totalContributions;
  
  // Calculate effective investment after tax savings
  const effectiveInvestment = totalContributions - taxSavings;
  
  return (
    <div className="space-y-6">
      
      {/* Main Results Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            PPF మెచ్యూరిటీ వివరాలు
          </CardTitle>
          <p className="text-gray-600">
            {inputs.investmentPeriod} సంవత్సరాల తర్వాత మీ PPF ఖాతాలో ఉండే మొత్తం
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
                {returnsMultiple.toFixed(1)}x రిటర్న్
              </Badge>
            </div>

            {/* Total Contributions */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">
                {formatIndianCurrency(totalContributions)}
              </div>
              <p className="text-blue-600 text-sm font-medium">మొత్తం కంట్రిబ్యూషన్</p>
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
                {formatIndianCurrency(totalInterestEarned)}
              </div>
              <p className="text-yellow-600 text-sm font-medium">మొత్తం వడ్డీ</p>
              <Badge variant="outline" className="mt-2">
                {interestPercentage.toFixed(1)}% వడ్డీ
              </Badge>
            </div>

            {/* Tax Savings */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-purple-700 mb-1">
                {formatIndianCurrency(taxSavings)}
              </div>
              <p className="text-purple-600 text-sm font-medium">పన్ను ఆదా</p>
              <Badge variant="outline" className="mt-2">
                సెక్షన్ 80C
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
                  <span className="text-gray-600">వార్షిక కంట్రిబ్యూషన్:</span>
                  <span className="font-semibold">{formatIndianCurrency(inputs.annualContribution)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">పెట్టుబడి వ్యవధి:</span>
                  <span className="font-semibold">{inputs.investmentPeriod} సంవత్సరాలు</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">వడ్డీ రేట్:</span>
                  <span className="font-semibold">{inputs.interestRate}% వార్షిక</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-gray-900">మొత్తం కంట్రిబ్యూషన్:</span>
                  <span className="text-blue-700">{formatIndianCurrency(totalContributions)}</span>
                </div>
              </div>
            </div>

            {/* Returns Analysis */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-gray-600" />
                రాబడి విశ్లేషణ
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">వాస్తవ పెట్టుబడి:</span>
                  <span className="font-semibold">{formatIndianCurrency(effectiveInvestment)}</span>
                  <span className="text-xs text-purple-600">(పన్ను ఆదా తర్వాత)</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">వడ్డీ రాబడి:</span>
                  <span className="font-semibold text-yellow-700">{formatIndianCurrency(totalInterestEarned)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">పన్ను మినహాయింపు:</span>
                  <span className="font-semibold text-purple-700">{formatIndianCurrency(taxSavings)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-gray-900">మొత్తం లాభం:</span>
                  <span className="text-green-700">{formatIndianCurrency(totalInterestEarned + taxSavings)}</span>
                </div>
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
                <span>ప్రిన్సిపల్ ({principalPercentage.toFixed(1)}%)</span>
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
              <h4 className="font-semibold text-green-900 mb-2">కంపౌండ్ గ్రోత్</h4>
              <p className="text-green-800 text-sm">
                మీ డబ్బు {returnsMultiple.toFixed(1)} రెట్లు పెరిగింది వార్షిక కంపౌండింగ్ వల్ల
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">పన్ను ప్రయోజనం</h4>
              <p className="text-purple-800 text-sm">
                {inputs.investmentPeriod} సంవత్సరాల్లో ₹{taxSavings.toLocaleString('en-IN')} పన్ను ఆదా
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">రిస్క్ ఫ్రీ</h4>
              <p className="text-blue-800 text-sm">
                ప్రభుత్వ గ్యారంటీతో 100% సురక్షితమైన పెట్టుబడి
              </p>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Monthly Breakdown Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">నెలవారీ కంట్రిబ్యూషన్ ప్లానింగ్</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {formatIndianCurrency(inputs.annualContribution / 12)}
              </div>
              <p className="text-blue-600 text-sm">నెలవారీ కంట్రిబ్యూషన్</p>
              <p className="text-xs text-gray-600 mt-1">(వార్షిక మొత్తాన్ని 12 భాగాలుగా)</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700 mb-1">
                {formatIndianCurrency((inputs.annualContribution / 12) * 0.30)}
              </div>
              <p className="text-green-600 text-sm">నెలవారీ పన్ను ఆదా</p>
              <p className="text-xs text-gray-600 mt-1">(30% పన్ను స్లాబ్ అనుకుంటే)</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700 mb-1">
                {formatIndianCurrency((inputs.annualContribution / 12) * 0.70)}
              </div>
              <p className="text-yellow-600 text-sm">వాస్తవ నెలవారీ ఖర్చు</p>
              <p className="text-xs text-gray-600 mt-1">(పన్ను ఆదా తర్వాత)</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}