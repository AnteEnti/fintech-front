"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LumpSumResult } from '@/lib/computations/lumpsum-calculator';
import { TrendingUp, DollarSign, Percent, Calendar, Shield, AlertTriangle } from 'lucide-react';

interface LumpSumResultsProps {
  result: LumpSumResult;
  inputs: {
    investmentAmount: number;
    expectedReturn: number;
    timePeriod: number;
    includeInflation: boolean;
    inflationRate: number;
  };
}

export default function LumpSumResults({ result, inputs }: LumpSumResultsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount).replace('₹', '₹');
  };

  const formatNumber = (num: number, decimals: number = 2) => {
    return num.toLocaleString('en-IN', { maximumFractionDigits: decimals });
  };

  const getGrowthMultiplier = () => {
    return Math.round((result.futureValue / inputs.investmentAmount) * 100) / 100;
  };

  return (
    <div className="space-y-6">
      {/* Main Results Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Investment Amount */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-blue-900 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              పెట్టుబడి మొత్తం
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {formatCurrency(inputs.investmentAmount)}
            </div>
            <p className="text-xs text-blue-700 mt-1">ఒకేసారి పెట్టుబడి</p>
          </CardContent>
        </Card>

        {/* Future Value */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-green-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              భవిష్యత్ విలువ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">
              {formatCurrency(result.futureValue)}
            </div>
            <p className="text-xs text-green-700 mt-1">
              {inputs.timePeriod} సంవత్సరాల తర్వాత
            </p>
          </CardContent>
        </Card>

        {/* Total Returns */}
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-purple-900 flex items-center gap-2">
              <Percent className="w-4 h-4" />
              మొత్తం లాభం
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">
              {formatCurrency(result.totalReturns)}
            </div>
            <p className="text-xs text-purple-700 mt-1">
              {formatNumber(result.absoluteReturnsPercent)}% పెరుగుదల
            </p>
          </CardContent>
        </Card>

        {/* Annualized Return */}
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-orange-900 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              వార్షిక రాబడి (CAGR)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">
              {formatNumber(result.annualizedReturn)}%
            </div>
            <p className="text-xs text-orange-700 mt-1">కంపౌండ్ వార్షిక వృద్ధి రేటు</p>
          </CardContent>
        </Card>
      </div>

      {/* Growth Multiplier and Key Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">పెట్టుబడి వృద్ధి వివరాలు</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Growth Multiplier */}
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {getGrowthMultiplier()}x
              </div>
              <p className="text-sm text-gray-600">వృద్ధి గుణకం</p>
              <p className="text-xs text-gray-500 mt-1">
                మీ డబ్బు {getGrowthMultiplier()} రెట్లు పెరిగింది
              </p>
            </div>

            {/* Investment Period */}
            <div className="text-center p-4 bg-gray-50 rounded-lg border">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {inputs.timePeriod}
              </div>
              <p className="text-sm text-gray-600">సంవత్సరాలు</p>
              <p className="text-xs text-gray-500 mt-1">పెట్టుబడి వ్యవధి</p>
            </div>

            {/* Expected vs Actual Return */}
            <div className="text-center p-4 bg-yellow-50 rounded-lg border">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatNumber(inputs.expectedReturn)}%
              </div>
              <p className="text-sm text-gray-600">అంచనా రాబడి</p>
              <p className="text-xs text-gray-500 mt-1">
                వార్షిక (కాలిక్యులేషన్ బేస్)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inflation Impact (if enabled) */}
      {inputs.includeInflation && result.realReturns && (
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-xl text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ద్రవ్యోల్బణం ప్రభావం
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-amber-900 mb-2">నామినల్ రిటర్న్లు</h4>
                <p className="text-2xl font-bold text-amber-900">
                  {formatCurrency(result.totalReturns)}
                </p>
                <p className="text-sm text-amber-700">ద్రవ్యోల్బణం పరিగణించకుండా</p>
              </div>
              <div>
                <h4 className="font-medium text-amber-900 mb-2">రియల్ రిటర్న్లు</h4>
                <p className="text-2xl font-bold text-amber-900">
                  {formatCurrency(result.realReturns)}
                </p>
                <p className="text-sm text-amber-700">
                  {inputs.inflationRate}% ద్రవ్యోల్బణం తర్వాత
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-100 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>గమనిక:</strong> ద్రవ్యోల్బణం వల్ల మీ డబ్బు యొక్క కొనుగోలు శక్తి తగ్గుతుంది. 
                రియల్ రిటర్న్లు అసలు విలువ పెరుగుదలను చూపుతాయి.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tax Implications */}
      {result.taxImplications && (
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-xl text-red-900 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              పన్ను చట్టాలు (ఈక్విటీ ఫండ్స్‌కు)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-red-900">మొత్తం క్యాపిటల్ గేన్స్</h4>
                  <p className="text-xl font-bold text-red-900">
                    {formatCurrency(result.taxImplications.capitalGains)}
                  </p>
                </div>
                
                {inputs.timePeriod < 1 ? (
                  <div>
                    <h4 className="font-medium text-red-900">
                      STCG ట్యాక్స్ (15%)
                      <Badge variant="outline" className="ml-2 bg-red-100 text-red-800">
                        &lt; 1 సంవత్సరం
                      </Badge>
                    </h4>
                    <p className="text-lg font-semibold text-red-900">
                      {formatCurrency(result.taxImplications.shortTermCapitalGains)}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-medium text-red-900">
                      LTCG ట్యాక్స్ (10%)
                      <Badge variant="outline" className="ml-2 bg-green-100 text-green-800">
                        &gt; 1 సంవత్సరం
                      </Badge>
                    </h4>
                    <p className="text-lg font-semibold text-red-900">
                      {formatCurrency(result.taxImplications.longTermCapitalGains)}
                    </p>
                    <p className="text-xs text-red-700 mt-1">
                      (₹1 లక్ష మించిన లాభాలపై 10%)
                    </p>
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-medium text-red-900 mb-2">ట్యాక్స్ తర్వాత నెట్ రిటర్న్లు</h4>
                <p className="text-2xl font-bold text-red-900">
                  {formatCurrency(result.taxImplications.netReturns)}
                </p>
                <div className="mt-3 p-3 bg-red-100 rounded-lg">
                  <p className="text-xs text-red-800">
                    <strong>డిస్‌క्લైమర్:</strong> పన్ను గణనలు అంచనాలు మాత్రమే. వాస్తవ పన్ను 
                    పరిస్థితులు మీ ఇతర ఆదాయం మరియు డిడక్షన్లపై ఆధారపడి ఉంటాయి.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Investment Strategy Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">లంప్‌సమ్ ఇన్వెస్ట్‌మెంట్ అంతర్దృష్టులు</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-green-900">లంప్‌సమ్ ప్రయోజనాలు:</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• మార్కెట్ దిగువ స్థాయిలో ఉంటే అధిక లాభం</li>
                <li>• తక్షణమే పూర్తి మార్కెట్ ఎక్స్‌పోజర్</li>
                <li>• బుల్ మార్కెట్‌లలో అధిక రిటర్న్ పొటెన్షియల్</li>
                <li>• SIP కంటే తక్కువ లెన్దేన్ ఖర్చులు</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-red-900">లంప్‌సమ్ రిస్క్‌లు:</h4>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• మార్కెట్ టైమింగ్ రిస్క్ అధికం</li>
                <li>• మార్కెట్ గరిష్ట స్థాయిలో పెట్టుబడి చేసే అవకాశం</li>
                <li>• పెద్ద మొత్తంలో వాలటిలిటీ ఎక్స్‌పోజర్</li>
                <li>• ఇమోషనల్ డిసిషన్ మేకింగ్ అవకాశం</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">సిఫార్సు:</h4>
            <p className="text-sm text-blue-800">
              లంప్‌సమ్ ఇన్వెస్ట్‌మెంట్ అనుభవజ్ఞులకు మరియు మార్కెట్ వాలుయేషన్లు తెలిసిన వారికి 
              అనువైనది. కొత్త ఇన్వెస్టర్లు SIP ద్వారా మొదలుపెట్టి, అనుభవం వచ్చాక లంప్‌సమ్ 
              కన్సిడర్ చేయవచ్చు.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}