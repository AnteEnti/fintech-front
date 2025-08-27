"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, type LifeInsuranceNeedsResult } from '@/lib/computations/life-insurance-needs';
import { Shield, AlertTriangle, DollarSign, TrendingUp, Users, Building, GraduationCap, Heart } from 'lucide-react';

interface LifeInsuranceNeedsResultsProps {
  result: LifeInsuranceNeedsResult;
}

export default function LifeInsuranceNeedsResults({ result }: LifeInsuranceNeedsResultsProps) {
  const {
    totalCoverageNeeded,
    existingCoverageGap,
    monthlyPremiumEstimate,
    coverageBreakdown,
    methodComparison,
    affordabilityAnalysis
  } = result;

  return (
    <div className="space-y-6">
      {/* Main Results Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Coverage Needed */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-700">మొత్తం కవర్ అవసరం</p>
                <p className="text-2xl font-bold text-blue-900">
                  {formatCurrency(totalCoverageNeeded)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coverage Gap */}
        <Card className={`border-2 ${existingCoverageGap > 0 ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 ${existingCoverageGap > 0 ? 'bg-red-600' : 'bg-green-600'} rounded-full flex items-center justify-center`}>
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-sm ${existingCoverageGap > 0 ? 'text-red-700' : 'text-green-700'}`}>
                  అదనపు కవర్ అవసరం
                </p>
                <p className={`text-2xl font-bold ${existingCoverageGap > 0 ? 'text-red-900' : 'text-green-900'}`}>
                  {existingCoverageGap > 0 ? formatCurrency(existingCoverageGap) : 'లేదు'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Premium */}
        <Card className="border-2 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-orange-700">అంచనా మాసిక ప్రీమియం</p>
                <p className="text-2xl font-bold text-orange-900">
                  {formatCurrency(monthlyPremiumEstimate)}
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
                  ప్రీమియం స్టేటస్
                </p>
                <p className={`text-lg font-bold ${affordabilityAnalysis.isAffordable ? 'text-green-900' : 'text-yellow-900'}`}>
                  {affordabilityAnalysis.isAffordable ? 'సాధ్యమైనది' : 'అధికం'}
                </p>
                <p className={`text-xs ${affordabilityAnalysis.isAffordable ? 'text-green-600' : 'text-yellow-600'}`}>
                  ఆదాయంలో {(affordabilityAnalysis.premiumAsPercentageOfIncome * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Coverage Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
            <Building className="w-6 h-6 text-blue-600" />
            కవర్ అవసరం వివరణ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">ఆదాయ రిప్లేస్‌మెంట్</h4>
              </div>
              <p className="text-2xl font-bold text-blue-800">
                {formatCurrency(coverageBreakdown.incomeReplacement)}
              </p>
              <p className="text-sm text-blue-600">కుటుంబ జీవన వ్యయాలకు</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-900">అప్పుల చెల్లింపు</h4>
              </div>
              <p className="text-2xl font-bold text-red-800">
                {formatCurrency(coverageBreakdown.debtCoverage)}
              </p>
              <p className="text-sm text-red-600">హోమ్ లోన్, కార్ లోన్, క్రెడిట్ కార్డ్</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">పిల్లల విద్య</h4>
              </div>
              <p className="text-2xl font-bold text-green-800">
                {formatCurrency(coverageBreakdown.educationCosts)}
              </p>
              <p className="text-sm text-green-600">భవిష్యత్ విద్య అవసరాలు</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">ఎమర్జెన్సీ ఫండ్</h4>
              </div>
              <p className="text-2xl font-bold text-purple-800">
                {formatCurrency(coverageBreakdown.emergencyFund)}
              </p>
              <p className="text-sm text-purple-600">అత్యవసర పరిస్థితులకు</p>
            </div>

            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-pink-600" />
                <h4 className="font-semibold text-pink-900">భార్య మద్దతు</h4>
              </div>
              <p className="text-2xl font-bold text-pink-800">
                {formatCurrency(coverageBreakdown.spouseSupport)}
              </p>
              <p className="text-sm text-pink-600">జీవితకాలం మద్దతు</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-gray-600" />
                <h4 className="font-semibold text-gray-900">అంత్య కార్యాలు</h4>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {formatCurrency(coverageBreakdown.finalExpenses)}
              </p>
              <p className="text-sm text-gray-600">చట్టపరమైన, అంత్యక్రియల ఖర్చులు</p>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Method Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            వివిధ పద్ధతుల పోలిక
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">హ్యూమన్ లైఫ్ వాల్యూ</h4>
              <p className="text-2xl font-bold text-blue-800 mb-2">
                {formatCurrency(methodComparison.humanLifeValue)}
              </p>
              <p className="text-sm text-blue-600">
                భవిష్యత్ ఆదాయాల ప్రస్తుత విలువ
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">ఇన్కమ్ మల్టిపుల్</h4>
              <p className="text-2xl font-bold text-green-800 mb-2">
                {formatCurrency(methodComparison.incomeMultiple)}
              </p>
              <p className="text-sm text-green-600">
                వార్షిక ఆదాయంలో 8-12 రెట్లు
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">అవసరాల ఆధారంగా</h4>
              <p className="text-2xl font-bold text-purple-800 mb-2">
                {formatCurrency(methodComparison.needsBased)}
              </p>
              <p className="text-sm text-purple-600">
                వాస్తవిక అవసరాల లెక్కింపు
              </p>
            </div>

          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">సిఫార్సు:</h4>
            <p className="text-yellow-800 text-sm">
              <strong>మా సిఫార్సు:</strong> మూడు పద్ధతుల్లో అత్యధిక కవర్ ({formatCurrency(totalCoverageNeeded)}) 
              తీసుకోవడం మంచిది, అది సంపూర్ణ రక్షణ అందిస్తుంది. 
              {!affordabilityAnalysis.isAffordable && (
                ` అయితే ప్రీమియం ఎక్కువైతే {formatCurrency(affordabilityAnalysis.recommendedCoverage)} తీసుకొని తర్వాత పెంచవచ్చు.`
              )}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Affordability Analysis */}
      {!affordabilityAnalysis.isAffordable && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-xl text-orange-900">
              ప్రీమియం ఆఫర్డబిలిటీ అనాలిసిస్
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-orange-100 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">స్థిति:</h4>
                <p className="text-orange-800 mb-2">
                  అంచనా వేసిన ప్రీమియం మీ ఆదాయంలో {(affordabilityAnalysis.premiumAsPercentageOfIncome * 100).toFixed(1)}% 
                  ఉంది, ఇది సిఫార్సు చేసిన 10% కంటే ఎక్కువ.
                </p>
                <p className="text-orange-800">
                  <strong>ప్రత్యామ్నాయ సిఫార్సు:</strong> మొదట {formatCurrency(affordabilityAnalysis.recommendedCoverage)} 
                  కవర్‌తో మొదలుపెట్టి, ఆదాయం పెరిగిన కొద్దీ కవర్ పెంచవచ్చు.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded border">
                  <p className="text-sm text-gray-600">ప్రస్తుత సిఫార్సు కవర్:</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(totalCoverageNeeded)}</p>
                  <p className="text-sm text-red-600">మాసిక ప్రీమియం: {formatCurrency(monthlyPremiumEstimate)}</p>
                </div>
                <div className="p-3 bg-white rounded border">
                  <p className="text-sm text-gray-600">ఆఫర్డబుల్ కవర్:</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(affordabilityAnalysis.recommendedCoverage)}</p>
                  <p className="text-sm text-green-600">మాసిక ప్రీమియం: ~₹{Math.round(monthlyPremiumEstimate * (affordabilityAnalysis.recommendedCoverage / totalCoverageNeeded)).toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Coverage Status Badge */}
      <div className="text-center">
        <Badge 
          variant={existingCoverageGap > 0 ? "destructive" : "default"}
          className="px-4 py-2 text-base"
        >
          {existingCoverageGap > 0 
            ? `${formatCurrency(existingCoverageGap)} అదనపు కవర్ అవసరం` 
            : 'మీ ప్రస్తుత కవర్ సరిపోతుంది'}
        </Badge>
      </div>
    </div>
  );
}