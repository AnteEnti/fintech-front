"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// Progress component implemented inline
import { TrendingUp, Calculator, PiggyBank, AlertTriangle, CheckCircle } from "lucide-react";
import { Section80CResult } from "@/lib/computations/section-80c-calculator";

interface Section80CResultsProps {
  result: Section80CResult;
}

export default function Section80CResults({ result }: Section80CResultsProps) {
  const utilizationPercentage = result.insights.utilizationPercentage;
  const isOptimal = utilizationPercentage >= 90;

  return (
    <div className="space-y-6">
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Total Investments */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">
                  మొత్తం 80C పెట్టుబడులు
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  ₹{result.totalInvestments.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-blue-700">
                  వార్షిక పెట్టుబడి మొత్తం
                </p>
              </div>
              <PiggyBank className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        {/* Tax Savings */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">
                  పన్ను ఆదా
                </p>
                <p className="text-2xl font-bold text-green-900">
                  ₹{result.taxSavings.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-green-700">
                  వార్షిక ఆదా
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        {/* Eligible Deduction */}
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-800">
                  అర్హత డిడక్షన్
                </p>
                <p className="text-2xl font-bold text-purple-900">
                  ₹{result.eligibleDeduction.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-purple-700">
                  గరిష్టం ₹1.5L వరకు
                </p>
              </div>
              <Calculator className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        {/* Remaining Capacity */}
        <Card className={`border-2 ${result.remaining80CCapacity > 0 ? 'border-yellow-200 bg-yellow-50' : 'border-green-200 bg-green-50'}`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${result.remaining80CCapacity > 0 ? 'text-yellow-800' : 'text-green-800'}`}>
                  మిగిలిన 80C కెపాసిటీ
                </p>
                <p className={`text-2xl font-bold ${result.remaining80CCapacity > 0 ? 'text-yellow-900' : 'text-green-900'}`}>
                  ₹{result.remaining80CCapacity.toLocaleString('en-IN')}
                </p>
                <p className={`text-xs ${result.remaining80CCapacity > 0 ? 'text-yellow-700' : 'text-green-700'}`}>
                  {result.remaining80CCapacity > 0 ? 'అదనపు పెట్టుబడి చేయవచ్చు' : 'పూర్తిగా వినియోగించారు'}
                </p>
              </div>
              {result.remaining80CCapacity > 0 ? (
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              ) : (
                <CheckCircle className="h-8 w-8 text-green-600" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Calculation Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Section 80C లెక్కింపు వివరాలు
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="default">
              {result.taxBracket}
            </Badge>
            <Badge variant={utilizationPercentage >= 90 ? 'default' : 'secondary'}>
              {utilizationPercentage.toFixed(1)}% వినియోగం
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            
            {/* Input Summary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">మీ వివరాలు</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">వార్షిక ఆదాయం</span>
                    <span className="font-medium">₹{result.inputs.annualIncome.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">మార్జినల్ టాక్స్ రేట్</span>
                    <span className="font-medium">{result.marginalTaxRate}%</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">మొత్తం పెట్టుబడులు</span>
                    <span className="font-medium">₹{result.totalInvestments.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Section 80C లిమిట్</span>
                    <span className="font-medium">₹1,50,000</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Investment Breakdown */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                పెట్టుబడి వర్గాలు విభజన
              </h3>
              <div className="space-y-3">
                {result.investmentBreakdown.map((investment, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{investment.teluguName}</h4>
                        <p className="text-sm text-gray-600 mt-1">{investment.characteristics}</p>
                        {investment.lockInPeriod && (
                          <p className="text-xs text-gray-500 mt-1">లాక్-ఇన్: {investment.lockInPeriod}</p>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-lg font-bold text-gray-900">
                          ₹{investment.amount.toLocaleString('en-IN')}
                        </div>
                        <div className="text-sm text-gray-600">
                          {investment.percentage.toFixed(1)}% of total
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {result.investmentBreakdown.length === 0 && (
                  <p className="text-gray-600 text-center py-4">
                    ఇంకా ఎలాంటి 80C పెట్టుబడులు లేవు
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {/* Tax Calculation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">పన్ను గణనా</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">మొత్తం పెట్టుబడులు</span>
                    <span className="font-medium">₹{result.totalInvestments.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>అర్హత డిడక్షన్</span>
                    <span className="font-medium">₹{result.eligibleDeduction.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">మార్జినల్ టాక్స్ రేట్</span>
                    <span className="font-medium">{result.marginalTaxRate}%</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-blue-600">
                    <span>వార్షిక పన్ను ఆదా</span>
                    <span className="font-medium">₹{result.taxSavings.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>మాసిక పన్ను ఆదా</span>
                    <span className="font-medium">₹{(result.taxSavings / 12).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">వినియోగ శాతం</span>
                    <span className="font-medium">{utilizationPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Utilization Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">Section 80C వినియోగం</span>
                <span className="text-sm text-gray-600">{utilizationPercentage.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${Math.min(utilizationPercentage, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>₹1,50,000</span>
              </div>
            </div>

            {/* Optimization Suggestions */}
            {result.optimizationSuggestions.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    అదనపు పెట్టుబడి సూచనలు
                  </h4>
                  <div className="space-y-3">
                    {result.optimizationSuggestions.map((suggestion, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${
                        suggestion.priority === 'high' ? 'border-green-200 bg-green-50' :
                        suggestion.priority === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                        'border-gray-200 bg-gray-50'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-gray-900">{suggestion.category}</span>
                              <Badge variant={
                                suggestion.priority === 'high' ? 'default' :
                                suggestion.priority === 'medium' ? 'secondary' : 'outline'
                              } className="text-xs">
                                {suggestion.priority === 'high' ? 'అధిక ప్రాధాన్యత' :
                                 suggestion.priority === 'medium' ? 'మధ్యస్థ ప్రాధాన్యత' : 'తక్కువ ప్రాధాన్యత'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-700">{suggestion.reason}</p>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-sm font-bold text-gray-900">
                              ₹{suggestion.suggestedAmount.toLocaleString('en-IN')}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Insights */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                విశ్లేషణ మరియు సూచనలు
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-blue-800">
                  <strong>వినియోగం:</strong> {result.insights.recommendedAction}
                </p>
                <p className="text-blue-800">
                  <strong>పన్ను సామర్థ్యం:</strong> {result.insights.taxEfficiency}
                </p>
                <p className="text-blue-800">
                  <strong>పెట్టుబడి మిశ్రమం:</strong> {result.insights.investmentMix}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}