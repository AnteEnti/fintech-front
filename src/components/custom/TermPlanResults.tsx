"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, type TermPlanResult } from '@/lib/computations/term-plan-calculator';
import { Shield, DollarSign, TrendingUp, AlertTriangle, Calculator, PiggyBank } from 'lucide-react';

interface TermPlanResultsProps {
  result: TermPlanResult;
}

export default function TermPlanResults({ result }: TermPlanResultsProps) {
  const {
    annualPremium,
    monthlyPremium,
    totalPremiumsPaid,
    costPerLakh,
    premiumToIncomeRatio,
    premiumBreakdown,
    affordabilityAnalysis
  } = result;

  return (
    <div className="space-y-6">
      {/* Main Results Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Annual Premium */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-700">వార్షిక ప్రీమియం</p>
                <p className="text-2xl font-bold text-blue-900">
                  {formatCurrency(annualPremium)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Premium */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-green-700">మాసిక ప్రీమియం</p>
                <p className="text-2xl font-bold text-green-900">
                  {formatCurrency(monthlyPremium)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Premiums Paid */}
        <Card className="border-2 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <PiggyBank className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-orange-700">మొత్తం ప్రీమియంలు</p>
                <p className="text-2xl font-bold text-orange-900">
                  {formatCurrency(totalPremiumsPaid)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Affordability Status */}
        <Card className={`border-2 ${affordabilityAnalysis.isAffordable ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'}`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 ${affordabilityAnalysis.isAffordable ? 'bg-green-600' : 'bg-yellow-600'} rounded-full flex items-center justify-center`}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-sm ${affordabilityAnalysis.isAffordable ? 'text-green-700' : 'text-yellow-700'}`}>
                  ఆఫర్డబిలిటీ
                </p>
                <p className={`text-lg font-bold ${affordabilityAnalysis.isAffordable ? 'text-green-900' : 'text-yellow-900'}`}>
                  {affordabilityAnalysis.isAffordable ? 'సాధ్యమైనది' : 'అధికం'}
                </p>
                <p className={`text-xs ${affordabilityAnalysis.isAffordable ? 'text-green-600' : 'text-yellow-600'}`}>
                  ఆదాయంలో {premiumToIncomeRatio}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Premium Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            ప్రీమియం వివరణ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">బేస్ ప్రీమియం</h4>
              </div>
              <p className="text-2xl font-bold text-blue-800">
                {formatCurrency(premiumBreakdown.basePremium)}
              </p>
              <p className="text-sm text-blue-600">మూల ప్రీమియం</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <h4 className="font-semibold text-yellow-900">స్మోకింగ్ సర్చార్జ్</h4>
              </div>
              <p className="text-2xl font-bold text-yellow-800">
                {formatCurrency(premiumBreakdown.smokingSurcharge)}
              </p>
              <p className="text-sm text-yellow-600">అదనపు చార్జ్</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">GST (18%)</h4>
              </div>
              <p className="text-2xl font-bold text-purple-800">
                {formatCurrency(premiumBreakdown.gst)}
              </p>
              <p className="text-sm text-purple-600">ప్రభుత్వ పన్ను</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">మొత్తం ప్రీమియం</h4>
              </div>
              <p className="text-2xl font-bold text-green-800">
                {formatCurrency(premiumBreakdown.totalPremium)}
              </p>
              <p className="text-sm text-green-600">చివరి మొత్తం</p>
            </div>

          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">కాస్ట్ ఎఫిషియంసీ</h4>
              <p className="text-lg font-bold text-gray-800">{formatCurrency(costPerLakh)}</p>
              <p className="text-sm text-gray-600">పర్ లక్ష కవర్ కాస్ట్</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">బడ్జెట్ ఇంపాక్ట్</h4>
              <p className="text-lg font-bold text-gray-800">{affordabilityAnalysis.budgetUtilization}%</p>
              <p className="text-sm text-gray-600">వార్షిక ఆదాయంలో వాటా</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Affordability Analysis */}
      {!affordabilityAnalysis.isAffordable && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-xl text-orange-900">
              ఆఫర్డబిలిటీ అనాలిసిస్
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-orange-100 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">సిఫార్సు:</h4>
                <p className="text-orange-800 mb-2">
                  ప్రీమియం మీ వార్షిక ఆదాయంలో {premiumToIncomeRatio}% ఉంది, 
                  ఇది సిఫార్సు చేసిన 10% కంటే ఎక్కువ.
                </p>
                <p className="text-orange-800">
                  <strong>ప్రత్యామ్నాయ ఎంపిక:</strong> కవర్ మొత్తాన్ని తగ్గించి {formatCurrency(affordabilityAnalysis.recommendedCoverage)} 
                  తీసుకోవచ్చు, లేదా పాలసీ టర్మ్ పెంచవచ్చు.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded border">
                  <p className="text-sm text-gray-600">ప్రస్తుత ప్రీమియం:</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(annualPremium)} (వార్షిక)</p>
                  <p className="text-sm text-red-600">ఆదాయంలో {premiumToIncomeRatio}%</p>
                </div>
                <div className="p-3 bg-white rounded border">
                  <p className="text-sm text-gray-600">సిఫార్సు కవర్:</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(affordabilityAnalysis.recommendedCoverage)}</p>
                  <p className="text-sm text-green-600">ఆదాయంలో ~10%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Coverage Status Badge */}
      <div className="text-center">
        <Badge 
          variant={affordabilityAnalysis.isAffordable ? "default" : "destructive"}
          className="px-4 py-2 text-base"
        >
          {affordabilityAnalysis.isAffordable 
            ? `మాసికం ${formatCurrency(monthlyPremium)} ప్రీమియం సాధ్యమైనది` 
            : `మాసికం ${formatCurrency(monthlyPremium)} ప్రీమియం కొంచెం ఎక్కువ`}
        </Badge>
      </div>
    </div>
  );
}