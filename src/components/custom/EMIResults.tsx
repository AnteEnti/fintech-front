"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EMIResult, EMIInputs, formatIndianCurrency, LOAN_TYPE_CONFIGS } from "@/lib/computations/emi-calculator";
import { TrendingUp, DollarSign, PiggyBank, Calendar } from "lucide-react";

interface EMIResultsProps {
  result: EMIResult;
  inputs: EMIInputs;
}

export default function EMIResults({ result, inputs }: EMIResultsProps) {
  const { monthlyEMI, totalAmountPayable, totalInterestPayable, principalAmount } = result;
  const { loanType, loanTenure } = inputs;
  
  const config = LOAN_TYPE_CONFIGS[loanType];
  const interestPercentage = (totalInterestPayable / totalAmountPayable) * 100;
  const principalPercentage = (principalAmount / totalAmountPayable) * 100;

  const resultCards = [
    {
      title: "మాసిక EMI",
      value: formatIndianCurrency(monthlyEMI),
      description: "ప్రతి నెలా చెల్లించాల్సిన మొత్తం",
      icon: Calendar,
      colorClass: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "మొత్తం చెల్లింపు",
      value: formatIndianCurrency(totalAmountPayable),
      description: "లోన్ వ్యవధిలో మొత్తంగా చెల్లించే మొత్తం",
      icon: DollarSign,
      colorClass: "text-green-600 bg-green-50 border-green-200"
    },
    {
      title: "మొత్తం వడ్డీ",
      value: formatIndianCurrency(totalInterestPayable),
      description: "లోన్ వ్యవధిలో చెల్లించే మొత్తం వడ్డీ",
      icon: TrendingUp,
      colorClass: "text-orange-600 bg-orange-50 border-orange-200"
    },
    {
      title: "అసలు మొత్తం",
      value: formatIndianCurrency(principalAmount),
      description: "మీరు తీసుకున్న లోన్ మొత్తం",
      icon: PiggyBank,
      colorClass: "text-purple-600 bg-purple-50 border-purple-200"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resultCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className={`border-2 ${card.colorClass}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <div className="mb-2">
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
                <p className="text-sm opacity-75">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {config.teluguName} వివరాలు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Key Metrics */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">ముఖ్యమైన విషయాలు</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">వార్షిక వడ్డీ రేట్:</span>
                    <span className="text-lg font-semibold text-blue-700">{inputs.interestRate}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">లోన్ వ్యవధి:</span>
                    <span className="text-lg font-semibold text-green-700">
                      {loanTenure} సంవత్సరాలు ({loanTenure * 12} నెలలు)
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">వడ్డీ శాతం:</span>
                    <span className="text-lg font-semibold text-orange-700">
                      {interestPercentage.toFixed(1)}% (మొత్తంలో)
                    </span>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">ఖర్చుల విభజన</h4>
                <div className="space-y-3">
                  <div className="relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">అసలు మొత్తం</span>
                      <span className="text-sm font-medium text-gray-900">
                        {principalPercentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-500 h-3 rounded-full" 
                        style={{ width: `${principalPercentage}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">వడ్డీ మొత్తం</span>
                      <span className="text-sm font-medium text-gray-900">
                        {interestPercentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-orange-500 h-3 rounded-full" 
                        style={{ width: `${interestPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Comparisons and Tips */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">ఆర్థిక ప్రభావం</h4>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-700">దిరువ్యవధిలో మొత్తం వడ్డీ:</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">
                      {formatIndianCurrency(totalInterestPayable)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      ఇది మీ అసలు లోన్ మొత్తంలో {(totalInterestPayable/principalAmount*100).toFixed(0)}% వడ్డీ
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-700">వార్షిక చెల్లింపు:</span>
                    </div>
                    <p className="text-xl font-bold text-green-600">
                      {formatIndianCurrency(monthlyEMI * 12)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      సంవత్సరానికి {12} EMI చెల్లింపులు
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h5 className="text-sm font-semibold text-yellow-900 mb-3">
                  💡 EMI తగ్గించడానికి మార్గాలు
                </h5>
                <ul className="space-y-2 text-xs text-yellow-800">
                  <li>• <strong>వ్యవధి పెంచండి:</strong> లోన్ వ్యవధి పెంచితే EMI తక్కువ అవుతుంది</li>
                  <li>• <strong>డౌన్ పేమెంట్ పెంచండి:</strong> ఎక్కువ అడ్వాన్స్ ఇస్తే లోన్ మొత్తం తక్కువ అవుతుంది</li>
                  <li>• <strong>వడ్డీ రేట్ తనిఖీ:</strong> వివిధ బ్యాంకుల రేట్లను పోల్చి చూడండి</li>
                  <li>• <strong>ప్రీపేమెంట్:</strong> అదనపు డబ్బు ఉంటే ముందుగానే చెల్లించండి</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* EMI Breakdown Table Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            మొదటి సంవత్సర EMI విభజన
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 font-medium text-gray-700">నెల</th>
                  <th className="text-right py-2 px-3 font-medium text-gray-700">EMI</th>
                  <th className="text-right py-2 px-3 font-medium text-gray-700">అసలు భాగం</th>
                  <th className="text-right py-2 px-3 font-medium text-gray-700">వడ్డీ భాగం</th>
                  <th className="text-right py-2 px-3 font-medium text-gray-700">మిగిలిన బ్యాలెన్స్</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.min(6, loanTenure * 12) }, (_, index) => {
                  const monthNumber = index + 1;
                  const monthlyRate = inputs.interestRate / (12 * 100);
                  const remainingBalance = principalAmount - (monthNumber - 1) * (monthlyEMI - principalAmount * monthlyRate);
                  const interestPaid = remainingBalance * monthlyRate;
                  const principalPaid = monthlyEMI - interestPaid;
                  const newBalance = remainingBalance - principalPaid;

                  return (
                    <tr key={monthNumber} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 px-3 font-medium text-gray-900">{monthNumber}</td>
                      <td className="py-2 px-3 text-right font-medium">
                        ₹{Math.round(monthlyEMI).toLocaleString('en-IN')}
                      </td>
                      <td className="py-2 px-3 text-right text-blue-600">
                        ₹{Math.round(principalPaid).toLocaleString('en-IN')}
                      </td>
                      <td className="py-2 px-3 text-right text-orange-600">
                        ₹{Math.round(interestPaid).toLocaleString('en-IN')}
                      </td>
                      <td className="py-2 px-3 text-right text-gray-700">
                        ₹{Math.round(Math.max(0, newBalance)).toLocaleString('en-IN')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {loanTenure * 12 > 6 && (
            <p className="text-xs text-gray-500 mt-3 text-center">
              మొదటి 6 నెలల వివరాలు మాత్రమే చూపబడ్డాయి. పూర్తి షెడ్యూల్ కోసం చార్ట్ చూడండి.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}