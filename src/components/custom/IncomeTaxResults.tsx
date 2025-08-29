"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingDown, TrendingUp, Calculator, Receipt } from "lucide-react";
import { IncomeTaxResult } from "@/lib/computations/income-tax-calculator";

interface IncomeTaxResultsProps {
  result: IncomeTaxResult;
}

export default function IncomeTaxResults({ result }: IncomeTaxResultsProps) {
  const recommended = result.recommendedRegime === 'old' ? result.oldRegime : result.newRegime;
  const alternative = result.recommendedRegime === 'old' ? result.newRegime : result.oldRegime;

  return (
    <div className="space-y-6">
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Recommended Regime Tax */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">
                  సిఫారసు విధానం
                </p>
                <p className="text-2xl font-bold text-green-900">
                  ₹{recommended.totalTax.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-green-700">
                  {result.recommendedRegime === 'old' ? 'పాత విధానం' : 'కొత్త విధానం'}
                </p>
              </div>
              <TrendingDown className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        {/* Alternative Regime Tax */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-800">
                  ప్రత్యామనాయ విధానం
                </p>
                <p className="text-2xl font-bold text-orange-900">
                  ₹{alternative.totalTax.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-orange-700">
                  {result.recommendedRegime === 'old' ? 'కొత్త విధానం' : 'పాత విధానం'}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
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
                  {result.comparison.percentageSaving.toFixed(1)}% ఆదా
                </p>
              </div>
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        {/* Effective Tax Rate */}
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-800">
                  ఎఫెక్టివ్ రేట్
                </p>
                <p className="text-2xl font-bold text-purple-900">
                  {recommended.effectiveTaxRate.toFixed(1)}%
                </p>
                <p className="text-xs text-purple-700">
                  మార్జినల్: {recommended.marginalTaxRate}%
                </p>
              </div>
              <Receipt className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            వివరణాత్మక పన్ను లెక్కింపు
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant={result.recommendedRegime === 'old' ? 'default' : 'secondary'}>
              పాత విధానం
            </Badge>
            <Badge variant={result.recommendedRegime === 'new' ? 'default' : 'secondary'}>
              కొత్త విధానం
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Old Regime Breakdown */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                పాత విధానం లెక్కింపు
                {result.recommendedRegime === 'old' && (
                  <Badge className="ml-2 bg-green-100 text-green-800">సిఫారసు</Badge>
                )}
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">మొత్తం ఆదాయం</span>
                  <span className="font-medium">₹{result.oldRegime.grossTaxableIncome.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between text-blue-600">
                  <span>స్టాండర్డ్ డిడక్షన్</span>
                  <span>-₹{result.oldRegime.standardDeduction.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between text-blue-600">
                  <span>HRA మినహాయింపు</span>
                  <span>-₹{result.oldRegime.hraExemption.exemptAmount.toLocaleString('en-IN')}</span>
                </div>
                
                {result.oldRegime.section80CDeduction > 0 && (
                  <div className="flex justify-between text-blue-600">
                    <span>సెక్షన్ 80C</span>
                    <span>-₹{result.oldRegime.section80CDeduction.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                {result.oldRegime.section80DDeduction > 0 && (
                  <div className="flex justify-between text-blue-600">
                    <span>సెక్షన్ 80D</span>
                    <span>-₹{result.oldRegime.section80DDeduction.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                {result.oldRegime.otherDeductions > 0 && (
                  <div className="flex justify-between text-blue-600">
                    <span>ఇతర మినహాయింపులు</span>
                    <span>-₹{result.oldRegime.otherDeductions.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between font-medium">
                  <span>పన్నుకు లోబడే ఆదాయం</span>
                  <span>₹{result.oldRegime.taxableIncome.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>పన్ను (రేట్లు అనుసారం)</span>
                  <span>₹{result.oldRegime.taxBeforeRebate.toLocaleString('en-IN')}</span>
                </div>
                
                {result.oldRegime.rebateUs87A > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>రీబేట్ u/s 87A</span>
                    <span>-₹{result.oldRegime.rebateUs87A.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                {result.oldRegime.surcharge > 0 && (
                  <div className="flex justify-between text-red-600">
                    <span>సర్చార్జ్</span>
                    <span>+₹{result.oldRegime.surcharge.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-red-600">
                  <span>హెల్త్ & ఎడ్యుకేషన్ సెస్ (4%)</span>
                  <span>+₹{result.oldRegime.healthEducationCess.toLocaleString('en-IN')}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>మొత్తం పన్ను</span>
                  <span>₹{result.oldRegime.totalTax.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* New Regime Breakdown */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                కొత్త విధానం లెక్కింపు
                {result.recommendedRegime === 'new' && (
                  <Badge className="ml-2 bg-green-100 text-green-800">సిఫారసు</Badge>
                )}
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">మొత్తం ఆదాయం</span>
                  <span className="font-medium">₹{result.newRegime.grossTaxableIncome.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between text-blue-600">
                  <span>స్టాండర్డ్ డిడక్షన్</span>
                  <span>-₹{result.newRegime.standardDeduction.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between text-blue-600">
                  <span>HRA మినహాయింపు</span>
                  <span>-₹{result.newRegime.hraExemption.exemptAmount.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="text-orange-600 text-xs bg-orange-50 p-2 rounded">
                  కొత్త విధానంలో 80C, 80D మినహాయింపులు లేవు
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-medium">
                  <span>పన్నుకు లోబడే ఆదాయం</span>
                  <span>₹{result.newRegime.taxableIncome.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>పన్ను (కొత్త రేట్లు)</span>
                  <span>₹{result.newRegime.taxBeforeRebate.toLocaleString('en-IN')}</span>
                </div>
                
                {result.newRegime.rebateUs87A > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>రీబేట్ u/s 87A</span>
                    <span>-₹{result.newRegime.rebateUs87A.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                {result.newRegime.surcharge > 0 && (
                  <div className="flex justify-between text-red-600">
                    <span>సర్చార్జ్</span>
                    <span>+₹{result.newRegime.surcharge.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-red-600">
                  <span>హెల్త్ & ఎడ్యుకేషన్ సెస్ (4%)</span>
                  <span>+₹{result.newRegime.healthEducationCess.toLocaleString('en-IN')}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>మొత్తం పన్ను</span>
                  <span>₹{result.newRegime.totalTax.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Slab Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            పన్ను స్లాబ్ వివరణ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Old Regime Slabs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">పాత విధానం స్లాబ్‌లు</h3>
              <div className="space-y-2">
                {result.oldRegime.taxSlabs.map((slab, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">{slab.slab.label}</span>
                      <span className="text-sm text-gray-600 ml-2">({slab.slab.rate}%)</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹{slab.tax.toLocaleString('en-IN')}</div>
                      <div className="text-sm text-gray-600">
                        ₹{slab.applicableIncome.toLocaleString('en-IN')} మీద
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Regime Slabs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">కొత్త విధానం స్లాబ్‌లు</h3>
              <div className="space-y-2">
                {result.newRegime.taxSlabs.map((slab, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">{slab.slab.label}</span>
                      <span className="text-sm text-gray-600 ml-2">({slab.slab.rate}%)</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹{slab.tax.toLocaleString('en-IN')}</div>
                      <div className="text-sm text-gray-600">
                        ₹{slab.applicableIncome.toLocaleString('en-IN')} మీద
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* HRA Breakdown */}
      {(result.oldRegime.hraExemption.received > 0 || result.newRegime.hraExemption.received > 0) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">
              HRA మినహాయింపు వివరణ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600 mb-1">HRA పొందిన మొత్తం</p>
                  <p className="text-xl font-bold text-blue-900">
                    ₹{recommended.hraExemption.calculation.hraReceived.toLocaleString('en-IN')}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 mb-1">మినహాయింపు మొత్తం</p>
                  <p className="text-xl font-bold text-green-900">
                    ₹{recommended.hraExemption.exemptAmount.toLocaleString('en-IN')}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-600 mb-1">పన్నుకు లోబడే HRA</p>
                  <p className="text-xl font-bold text-orange-900">
                    ₹{recommended.hraExemption.taxableHRA.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">HRA మినహాయింపు గణన:</h4>
                <p>మూడవాటిలో కనిష్ట మొత్తం:</p>
                <ul className="mt-2 space-y-1">
                  <li>• HRA పొందిన మొత్తం: ₹{recommended.hraExemption.calculation.hraReceived.toLocaleString('en-IN')}</li>
                  <li>• అద్దె - 10% జీతం: ₹{recommended.hraExemption.calculation.rentMinusTenPercent.toLocaleString('en-IN')}</li>
                  <li>• జీతంలో 50%/40%: ₹{recommended.hraExemption.calculation.fiftyOrFortyPercent.toLocaleString('en-IN')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}