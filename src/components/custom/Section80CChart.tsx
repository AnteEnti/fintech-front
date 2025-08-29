"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PieChart, 
  Pie, 
  Cell,
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ComposedChart,
  Line,
  ResponsiveContainer 
} from 'recharts';
import { Section80CResult } from "@/lib/computations/section-80c-calculator";

interface Section80CChartProps {
  result: Section80CResult;
}

export default function Section80CChart({ result }: Section80CChartProps) {
  
  // Investment distribution pie chart data
  const investmentDistributionData = result.investmentBreakdown.map(item => ({
    name: item.teluguName,
    value: item.amount,
    percentage: item.percentage,
    color: getColorForCategory(item.category)
  }));

  // Tax savings breakdown
  const taxSavingsData = [
    {
      category: 'పన్ను ఆదా',
      amount: result.taxSavings,
      color: '#28A745'
    },
    {
      category: 'మిగిలిన పన్ను',
      amount: Math.max(0, result.inputs.annualIncome * (result.marginalTaxRate / 100) - result.taxSavings),
      color: '#E6B800'
    }
  ];

  // Utilization comparison
  const utilizationData = [
    {
      category: 'వినియోగించిన 80C',
      amount: result.eligibleDeduction,
      percentage: (result.eligibleDeduction / 150000) * 100
    },
    {
      category: 'మిగిలిన 80C కెపాసిటీ',
      amount: result.remaining80CCapacity,
      percentage: (result.remaining80CCapacity / 150000) * 100
    }
  ];

  // Investment optimization data
  const optimizationData = [
    {
      scenario: 'ప్రస్తుత పెట్టుబడులు',
      totalInvestment: result.totalInvestments,
      taxSavings: result.taxSavings,
      eligibleDeduction: result.eligibleDeduction
    },
    {
      scenario: 'పూర్తి వినియోగం (₹1.5L)',
      totalInvestment: 150000,
      taxSavings: 150000 * (result.marginalTaxRate / 100),
      eligibleDeduction: 150000
    }
  ];

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`${label}`}</p>
          {payload.map((entry, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ₹${entry.value?.toLocaleString('en-IN')}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload?: { percentage: number } }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = data.payload?.percentage || 0;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">
            ₹{data.value?.toLocaleString('en-IN')} ({percentage.toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          Section 80C విశ్లేషణ చార్ట్‌లు
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="distribution" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="distribution">పెట్టుబడి విభజన</TabsTrigger>
            <TabsTrigger value="utilization">వినియోగ విశ్లేషణ</TabsTrigger>
            <TabsTrigger value="savings">పన్ను ఆదా</TabsTrigger>
            <TabsTrigger value="optimization">ఆప్టిమైజేషన్</TabsTrigger>
          </TabsList>

          {/* Investment Distribution Pie Chart */}
          <TabsContent value="distribution" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Section 80C పెట్టుబడుల విభజన</h3>
              
              {investmentDistributionData.length > 0 ? (
                <>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={investmentDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={160}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {investmentDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<PieTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {result.investmentBreakdown.map((investment, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div 
                          className="w-4 h-4 rounded-full mx-auto mb-2"
                          style={{ backgroundColor: getColorForCategory(investment.category) }}
                        ></div>
                        <p className="text-sm font-medium text-gray-900">{investment.teluguName}</p>
                        <p className="text-lg font-bold text-gray-800">
                          ₹{investment.amount.toLocaleString('en-IN')}
                        </p>
                        <p className="text-xs text-gray-600">
                          {investment.percentage.toFixed(1)}% of total
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <PieChart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>ఇంకా ఎలాంటి పెట్టుబడులు లేవు</p>
                  <p className="text-sm">పెట్టుబడి వివరాలను నమోదు చేసిన తర్వాత చార్ట్ కనిపిస్తుంది</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Utilization Analysis */}
          <TabsContent value="utilization" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Section 80C లిమిట్ వినియోగం (₹1,50,000 లో)
              </h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={utilizationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="amount" name="మొత్తం">
                    <Cell fill="#4B6FFF" />
                    <Cell fill="#E6B800" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">వినియోగించిన మొత్తం</h4>
                  <p className="text-2xl font-bold text-blue-800">
                    ₹{result.eligibleDeduction.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-blue-600">
                    {((result.eligibleDeduction / 150000) * 100).toFixed(1)}% లిమిట్ లో
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-900 mb-2">మిగిలిన అవకాశం</h4>
                  <p className="text-2xl font-bold text-yellow-800">
                    ₹{result.remaining80CCapacity.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-yellow-600">
                    అదనపు పెట్టుబడి చేయవచ్చు
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tax Savings Analysis */}
          <TabsContent value="savings" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">పన్ను ఆదా విశ్లేషణ</h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={taxSavingsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={180}
                    paddingAngle={2}
                    dataKey="amount"
                  >
                    {taxSavingsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-600 mb-1">వార్షిక పన్ను ఆదా</p>
                  <p className="text-2xl font-bold text-green-800">
                    ₹{result.taxSavings.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-green-600">
                    {result.marginalTaxRate}% టాక్స్ రేట్‌లో
                  </p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-600 mb-1">మాసిక ఆదా</p>
                  <p className="text-2xl font-bold text-blue-800">
                    ₹{(result.taxSavings / 12).toFixed(0)}
                  </p>
                  <p className="text-xs text-blue-600">
                    ప్రతి నెలా ఆదా
                  </p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-purple-600 mb-1">ఆదా శాతం</p>
                  <p className="text-2xl font-bold text-purple-800">
                    {result.marginalTaxRate}%
                  </p>
                  <p className="text-xs text-purple-600">
                    పెట్టుబడిపై ఆదా
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Optimization Scenario */}
          <TabsContent value="optimization" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                ప్రస్తుత vs ఆప్టిమల్ పెట్టుబడి పోలిక
              </h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={optimizationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="scenario" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="totalInvestment" name="మొత్తం పెట్టుబడి" fill="#4B6FFF" />
                  <Bar dataKey="taxSavings" name="పన్ను ఆదా" fill="#28A745" />
                </ComposedChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-3">ప్రస్తుత పరిస్థితి</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">మొత్తం పెట్టుబడి:</span>
                      <span className="font-medium">₹{result.totalInvestments.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">పన్ను ఆదా:</span>
                      <span className="font-medium">₹{result.taxSavings.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">వినియోగం:</span>
                      <span className="font-medium">{result.insights.utilizationPercentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-900 mb-3">పూర్తి వినియోగం (₹1.5L)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700">మొత్తం పెట్టుబడి:</span>
                      <span className="font-medium">₹1,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">పన్ను ఆదా:</span>
                      <span className="font-medium">₹{(150000 * result.marginalTaxRate / 100).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">అదనపు ఆదా:</span>
                      <span className="font-medium text-green-800">₹{((150000 * result.marginalTaxRate / 100) - result.taxSavings).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              {result.optimizationSuggestions.length > 0 && (
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-medium text-indigo-900 mb-3">అదనపు పెట్టుబడి సూచనలు</h4>
                  <div className="space-y-2">
                    {result.optimizationSuggestions.slice(0, 3).map((suggestion, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-indigo-800">
                          {suggestion.category}: ₹{suggestion.suggestedAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                          {suggestion.priority === 'high' ? 'అధిక ప్రాధాన్యత' :
                           suggestion.priority === 'medium' ? 'మధ్యస్థ' : 'తక్కువ ప్రాధాన్యత'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

// Helper function to get colors for different investment categories
function getColorForCategory(category: string): string {
  const colorMap: { [key: string]: string } = {
    'PPF': '#4B6FFF',      // Blue
    'ELSS': '#E6B800',     // Gold
    'Life Insurance': '#28A745', // Green  
    'NSC': '#FF6B6B',      // Red
    'Tax Saver FD': '#9C27B0', // Purple
    'Home Loan Principal': '#FF9800', // Orange
    'Tuition Fees': '#607D8B' // Blue Grey
  };
  
  return colorMap[category] || '#6B7280'; // Default gray
}