"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Home, Calculator, TrendingUp, AlertTriangle } from "lucide-react";
import { HRAResult } from "@/lib/computations/hra-calculator";

interface HRAResultsProps {
  result: HRAResult;
}

export default function HRAResults({ result }: HRAResultsProps) {
  const utilizationPercentage = result.optimalRent.currentUtilization;
  const isOptimal = utilizationPercentage >= 90;

  return (
    <div className="space-y-6">
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* HRA Exemption */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">
                  HRA మినహాయింపు
                </p>
                <p className="text-2xl font-bold text-green-900">
                  ₹{result.hraExemption.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-green-700">
                  వార్షిక మినహాయింపు
                </p>
              </div>
              <Home className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        {/* Tax Savings */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">
                  పన్ను ఆదా
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  ₹{result.taxSavings.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-blue-700">
                  వార్షిక ఆదా
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        {/* Taxable HRA */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-800">
                  పన్నుకు లోబడే HRA
                </p>
                <p className="text-2xl font-bold text-orange-900">
                  ₹{result.taxableHRA.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-orange-700">
                  వార్షిక పన్నులు
                </p>
              </div>
              <Calculator className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        {/* Utilization */}
        <Card className={`border-2 ${isOptimal ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'}`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isOptimal ? 'text-green-800' : 'text-yellow-800'}`}>
                  HRA వినియోగం
                </p>
                <p className={`text-2xl font-bold ${isOptimal ? 'text-green-900' : 'text-yellow-900'}`}>
                  {utilizationPercentage.toFixed(1)}%
                </p>
                <p className={`text-xs ${isOptimal ? 'text-green-700' : 'text-yellow-700'}`}>
                  {isOptimal ? 'ఆప్టిమల్ వాడుక' : 'మెరుగుపరచవచ్చు'}
                </p>
              </div>
              {isOptimal ? (
                <TrendingUp className="h-8 w-8 text-green-600" />
              ) : (
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Calculation Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            HRA లెక్కింపు వివరాలు
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant={result.inputs.cityType === 'metro' ? 'default' : 'secondary'}>
              {result.inputs.cityType === 'metro' ? 'మెట్రో సిటీ (50%)' : 'నాన్-మెట్రో (40%)'}
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
                    <span className="text-gray-600">వార్షిక ప్రాథమిక జీతం</span>
                    <span className="font-medium">₹{result.inputs.basicSalary.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">వార్షిక HRA పొందిన మొత్తం</span>
                    <span className="font-medium">₹{result.inputs.hraReceived.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">మాసిక అద్దె చెల్లింపు</span>
                    <span className="font-medium">₹{result.inputs.rentPaid.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">వార్షిక అద్దె చెల్లింపు</span>
                    <span className="font-medium">₹{(result.inputs.rentPaid * 12).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* HRA Exemption Formula Calculation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                HRA మినహాయింపు గణనా (కనిష్ట మూడిట)
              </h3>
              <div className="space-y-3">
                
                {/* Option 1: Actual HRA */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-blue-900">1. వాస్తవ HRA పొందిన మొత్తం</h4>
                      <p className="text-sm text-blue-700">కంపెనీ నుండి HRA గా వచ్చిన మొత్తం</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-900">
                        ₹{result.exemptionCalculation.actualHRA.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Option 2: Rent minus 10% */}
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-green-900">2. అద్దె - 10% జీతం</h4>
                      <p className="text-sm text-green-700">
                        ₹{(result.inputs.rentPaid * 12).toLocaleString('en-IN')} - ₹{(result.inputs.basicSalary * 0.1).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-900">
                        ₹{result.exemptionCalculation.rentMinus10Percent.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Option 3: City percentage */}
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-purple-900">
                        3. {result.inputs.cityType === 'metro' ? '50%' : '40%'} జీతం ({result.inputs.cityType === 'metro' ? 'మెట్రో' : 'నాన్-మెట్రో'})
                      </h4>
                      <p className="text-sm text-purple-700">
                        ₹{result.inputs.basicSalary.toLocaleString('en-IN')} × {result.inputs.cityType === 'metro' ? '50%' : '40%'}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-900">
                        ₹{result.exemptionCalculation.cityPercentage.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Result */}
                <div className="p-4 bg-gray-100 rounded-lg border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">HRA మినహాయింపు (కనిష్ట మొత్తం)</h4>
                      <p className="text-sm text-gray-700">పైన మూడింటిలో కనిష్ట మొత్తం</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        ₹{result.hraExemption.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Tax Impact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">పన్ను ప్రభావం</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">HRA మొత్తం పొందినది</span>
                    <span className="font-medium">₹{result.inputs.hraReceived.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>HRA మినహాయింపు</span>
                    <span className="font-medium">-₹{result.hraExemption.toLocaleString('en-IN')}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>పన్నుకు లోబడే HRA</span>
                    <span>₹{result.taxableHRA.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">అంచనా పన్ను రేట్</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>వార్షిక పన్ను ఆదా</span>
                    <span className="font-medium">₹{result.taxSavings.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>మాసిక పన్ను ఆదా</span>
                    <span className="font-medium">₹{(result.taxSavings / 12).toFixed(0)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Insights */}
            {!isOptimal && (
              <>
                <Separator />
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    ఆప్టిమైజేషన్ అవకాశం
                  </h4>
                  <p className="text-yellow-800 mb-2">{result.optimalRent.recommendedAction}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-sm">
                    <div>
                      <span className="text-yellow-700">ప్రస్తుత వినియోగం: </span>
                      <span className="font-medium">{utilizationPercentage.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-yellow-700">గరిష్ట అద్దె: </span>
                      <span className="font-medium">₹{result.optimalRent.maxRentForFullExemption.toFixed(0)}/నెల</span>
                    </div>
                  </div>
                  {result.optimalRent.potentialSavings > 0 && (
                    <div className="text-sm mt-2">
                      <span className="text-yellow-700">అదనపు పన్ను ఆదా అవకాశం: </span>
                      <span className="font-medium">₹{result.optimalRent.potentialSavings.toLocaleString('en-IN')}/సంవత్సరం</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}