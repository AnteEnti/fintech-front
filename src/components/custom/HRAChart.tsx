"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell,
  ComposedChart,
  ResponsiveContainer 
} from 'recharts';
import { HRAResult } from "@/lib/computations/hra-calculator";

interface HRAChartProps {
  result: HRAResult;
}

export default function HRAChart({ result }: HRAChartProps) {
  
  // HRA breakdown pie chart data
  const hraBreakdownData = [
    { 
      name: 'HRA మినహాయింపు', 
      value: result.hraExemption,
      color: '#28A745' // Green
    },
    { 
      name: 'పన్నుకు లోబడే HRA', 
      value: result.taxableHRA,
      color: '#E6B800' // Gold
    }
  ];

  // HRA exemption calculation comparison
  const exemptionComparisonData = [
    {
      component: 'వాస్తవ HRA',
      amount: result.exemptionCalculation.actualHRA,
      isSelected: result.exemptionCalculation.actualHRA === result.hraExemption
    },
    {
      component: 'అద్దె - 10% జీతం',
      amount: result.exemptionCalculation.rentMinus10Percent,
      isSelected: result.exemptionCalculation.rentMinus10Percent === result.hraExemption
    },
    {
      component: result.inputs.cityType === 'metro' ? '50% జీతం' : '40% జీతం',
      amount: result.exemptionCalculation.cityPercentage,
      isSelected: result.exemptionCalculation.cityPercentage === result.hraExemption
    }
  ];

  // Monthly comparison data
  const monthlyComparisonData = [
    {
      month: 'జనవరి',
      hraReceived: result.inputs.hraReceived / 12,
      rentPaid: result.inputs.rentPaid,
      exemption: result.hraExemption / 12,
      taxable: result.taxableHRA / 12
    }
  ];

  // City comparison (hypothetical)
  const cityComparisonData = [
    {
      cityType: 'మెట్రో (50%)',
      exemption: result.inputs.basicSalary * 0.50,
      current: result.inputs.cityType === 'metro' ? result.hraExemption : 0
    },
    {
      cityType: 'నాన్-మెట్రో (40%)',
      exemption: result.inputs.basicSalary * 0.40,
      current: result.inputs.cityType === 'non-metro' ? result.hraExemption : 0
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

  const PieTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const total = result.inputs.hraReceived;
      const percentage = total > 0 ? ((data.value / total) * 100).toFixed(1) : 0;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">
            ₹{data.value?.toLocaleString('en-IN')} ({percentage}%)
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
          HRA విశ్లేషణ చార్ట్‌లు
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakdown" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="breakdown">HRA విభజన</TabsTrigger>
            <TabsTrigger value="calculation">లెక్కింపు పోలిక</TabsTrigger>
            <TabsTrigger value="monthly">మాసిక వివరాలు</TabsTrigger>
            <TabsTrigger value="city">నగర పోలిక</TabsTrigger>
          </TabsList>

          {/* HRA Breakdown Pie Chart */}
          <TabsContent value="breakdown" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">HRA విభజన</h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={hraBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={160}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {hraBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 mb-1">HRA మినహాయింపు</p>
                  <p className="text-xl font-bold text-green-800">
                    ₹{result.hraExemption.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-green-600">
                    {result.inputs.hraReceived > 0 ? 
                      `${((result.hraExemption / result.inputs.hraReceived) * 100).toFixed(1)}% మొత్తం HRA లో` 
                      : '0%'
                    }
                  </p>
                </div>
                
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-600 mb-1">పన్నుకు లోబడే HRA</p>
                  <p className="text-xl font-bold text-yellow-800">
                    ₹{result.taxableHRA.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-yellow-600">
                    {result.inputs.hraReceived > 0 ? 
                      `${((result.taxableHRA / result.inputs.hraReceived) * 100).toFixed(1)}% మొత్తం HRA లో` 
                      : '0%'
                    }
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Exemption Calculation Comparison */}
          <TabsContent value="calculation" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                HRA మినహాయింపు గణనా (మూడు మార్గాల పోలిక)
              </h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={exemptionComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="component" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar 
                    dataKey="amount" 
                    name="మొత్తం"
                  >
                    {exemptionComparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.isSelected ? '#28A745' : '#4B6FFF'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">గణనా వివరణ</h4>
                <p className="text-sm text-gray-700 mb-2">
                  HRA మినహాయింపు = కనిష్ట మొత్తం (పైన మూడింటిలో)
                </p>
                <div className="space-y-1 text-sm">
                  {exemptionComparisonData.map((item, index) => (
                    <div key={index} className={`flex justify-between ${item.isSelected ? 'font-bold text-green-700' : 'text-gray-600'}`}>
                      <span>{item.component}:</span>
                      <span>₹{item.amount.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Monthly Breakdown */}
          <TabsContent value="monthly" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">మాసిక HRA విభజన</h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={monthlyComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="hraReceived" name="HRA పొందినది" fill="#4B6FFF" />
                  <Bar dataKey="rentPaid" name="అద్దె చెల్లింపు" fill="#E6B800" />
                  <Bar dataKey="exemption" name="మినహాయింపు" fill="#28A745" />
                  <Bar dataKey="taxable" name="పన్నుకు లోబడేది" fill="#DC3545" />
                </ComposedChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-blue-50 p-3 rounded text-center">
                  <p className="text-sm text-blue-600">మాసిక HRA</p>
                  <p className="font-bold text-blue-800">
                    ₹{(result.inputs.hraReceived / 12).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded text-center">
                  <p className="text-sm text-yellow-600">మాసిక అద్దె</p>
                  <p className="font-bold text-yellow-800">
                    ₹{result.inputs.rentPaid.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded text-center">
                  <p className="text-sm text-green-600">మాసిక మినహాయింపు</p>
                  <p className="font-bold text-green-800">
                    ₹{(result.hraExemption / 12).toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded text-center">
                  <p className="text-sm text-red-600">మాసిక పన్నులకు</p>
                  <p className="font-bold text-red-800">
                    ₹{(result.taxableHRA / 12).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* City Comparison */}
          <TabsContent value="city" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                మెట్రో vs నాన్-మెట్రో HRA లిమిట్‌ల పోలిక
              </h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={cityComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="cityType" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="exemption" name="గరిష్ట లిమిట్" fill="#4B6FFF" />
                  <Bar dataKey="current" name="మీ ప్రస్తుత మినహాయింపు" fill="#28A745" />
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className={`p-4 rounded-lg border-2 ${result.inputs.cityType === 'metro' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                  <h4 className="font-medium text-gray-900 mb-2">మెట్రో సిటీ (50%)</h4>
                  <p className="text-2xl font-bold text-blue-800 mb-1">
                    ₹{(result.inputs.basicSalary * 0.50).toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-600">
                    ముంబయి, దిల్లీ, కోల్‌కతా, చెన్నై
                  </p>
                  {result.inputs.cityType === 'metro' && (
                    <p className="text-xs text-blue-600 mt-2">✓ మీ ప్రస్తుత నగర వర్గం</p>
                  )}
                </div>
                
                <div className={`p-4 rounded-lg border-2 ${result.inputs.cityType === 'non-metro' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <h4 className="font-medium text-gray-900 mb-2">నాన్-మెట్రో (40%)</h4>
                  <p className="text-2xl font-bold text-green-800 mb-1">
                    ₹{(result.inputs.basicSalary * 0.40).toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-600">
                    ఇతర అన్ని నగరాలు
                  </p>
                  {result.inputs.cityType === 'non-metro' && (
                    <p className="text-xs text-green-600 mt-2">✓ మీ ప్రస్తుత నగర వర్గం</p>
                  )}
                </div>
              </div>

              {/* City benefit analysis */}
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">నగర వర్గం ప్రభావం</h4>
                <p className="text-sm text-indigo-800 mb-2">{result.insights.cityBenefit}</p>
                {result.inputs.cityType === 'non-metro' && (
                  <p className="text-xs text-indigo-600">
                    మెట్రో సిటీలో మీరు అదనపు ₹{((result.inputs.basicSalary * 0.50) - (result.inputs.basicSalary * 0.40)).toLocaleString('en-IN')} వరకు మినహాయింపు పొందవచ్చు
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}