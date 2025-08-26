"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/computations/sip-calculator";

interface SIPResult {
  totalInvested: number;
  expectedReturns: number;
  maturityAmount: number;
  yearlyData: Array<{
    year: number;
    invested: number;
    value: number;
  }>;
}

interface SIPResultsProps {
  result: SIPResult;
}

export default function SIPResults({ result }: SIPResultsProps) {
  const returnPercentage = (result.expectedReturns / result.totalInvested) * 100;

  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">₹</span>
          </div>
          SIP లెక్కింపు ఫలితాలు
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Invested */}
          <div className="text-center p-6 bg-white rounded-lg border border-blue-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              మీ పెట్టుబడి
            </h3>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(result.totalInvested)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              మీరు పెట్టిన మొత్తం
            </p>
          </div>

          {/* Expected Returns */}
          <div className="text-center p-6 bg-white rounded-lg border border-green-200 shadow-sm">
            <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              అంచనా రాబడి
            </h3>
            <p className="text-2xl font-bold text-green-600">
              {formatCurrency(result.expectedReturns)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              ({returnPercentage.toFixed(1)}% వృద్ధి)
            </p>
          </div>

          {/* Maturity Amount */}
          <div className="text-center p-6 bg-white rounded-lg border border-yellow-200 shadow-sm">
            <div className="w-12 h-12 bg-yellow-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              మొత్తం మొత్తం
            </h3>
            <p className="text-2xl font-bold text-yellow-600">
              {formatCurrency(result.maturityAmount)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              పరిపక్వత వద్ద మీ మొత్తం
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span>పెట్టుబడి: {formatCurrency(result.totalInvested)}</span>
            </div>
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <div className="w-3 h-3 bg-yellow-600 rounded"></div>
              <span>రాబడి: {formatCurrency(result.expectedReturns)}</span>
            </div>
            <div className="font-medium text-gray-900">
              మొత్తం వృద్ధి: {returnPercentage.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="font-medium text-blue-900">సంపద గుణకం</div>
            <div className="text-blue-700">
              {(result.maturityAmount / result.totalInvested).toFixed(2)}x
            </div>
            <div className="text-xs text-blue-600 mt-1">
              మీ పెట్టుబడి {(result.maturityAmount / result.totalInvested).toFixed(2)} రెట్లు పెరిగింది
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="font-medium text-green-900">వార్షిక వృద్ధి</div>
            <div className="text-green-700">
              {(Math.pow(result.maturityAmount / result.totalInvested, 1 / (result.yearlyData.length)) - 1).toFixed(1)}%
            </div>
            <div className="text-xs text-green-600 mt-1">
              సగటు వార్షిక రాబడి
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}