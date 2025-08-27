"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { BarChart3, PieChartIcon, TrendingUp } from "lucide-react";

import { 
  generatePPFSchedule, 
  PPFInputs, 
  formatIndianCurrency 
} from '@/lib/computations/ppf-calculator';

interface PPFChartProps {
  inputs: PPFInputs;
}

export default function PPFChart({ inputs }: PPFChartProps) {
  const schedule = generatePPFSchedule(inputs);
  
  // Prepare chart data
  const chartData = schedule.map(item => ({
    year: item.year,
    principal: item.cumulativeContributions,
    interest: item.cumulativeInterest,
    total: item.yearEndBalance,
    yearlyContribution: item.contribution,
    yearlyInterest: item.interest
  }));

  // Final values for pie chart
  const finalData = schedule[schedule.length - 1];
  const pieData = [
    { 
      name: 'ప్రిన్సిపల్', 
      value: finalData.cumulativeContributions, 
      color: '#4B6FFF' 
    },
    { 
      name: 'వడ్డీ', 
      value: finalData.cumulativeInterest, 
      color: '#E6B800' 
    }
  ];

  // Custom tooltip for area chart
  const AreaTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{ name: string; value: number; color: string }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <h4 className="font-semibold text-gray-900 mb-2">సంవత్సరం {label}</h4>
          {payload.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-sm text-gray-700">
                {entry.name}: {formatIndianCurrency(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for pie chart
  const PieTooltip = ({ active, payload }: {
    active?: boolean;
    payload?: Array<{ name: string; value: number }>;
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = ((data.value / finalData.yearEndBalance) * 100).toFixed(1);
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-700">
            {formatIndianCurrency(data.value)} ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          PPF గ్రోత్ విజువలైజేషన్
        </CardTitle>
        <p className="text-gray-600">
          మీ PPF పెట్టుబడి సంవత్సరాలవారీ వృద్ధిని గ్రాఫ్‌లలో చూడండి
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="growth" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              వృద్ధి చార్ట్
            </TabsTrigger>
            <TabsTrigger value="composition" className="flex items-center gap-2">
              <PieChartIcon className="w-4 h-4" />
              కంపోజిషన్
            </TabsTrigger>
            <TabsTrigger value="yearly" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              వార్షిక వివరాలు
            </TabsTrigger>
          </TabsList>

          {/* Growth Chart */}
          <TabsContent value="growth" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="principalGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4B6FFF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4B6FFF" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="interestGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E6B800" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#E6B800" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${value}వ సం.`}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`}
                  />
                  <Tooltip content={<AreaTooltip />} />
                  <Legend />
                  
                  <Area
                    type="monotone"
                    dataKey="principal"
                    stackId="1"
                    stroke="#4B6FFF"
                    fill="url(#principalGradient)"
                    name="ప్రిన్సిపల్"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="interest"
                    stackId="1"
                    stroke="#E6B800"
                    fill="url(#interestGradient)"
                    name="వడ్డీ"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            {/* Growth Insights */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">ప్రారంభ దశ</h4>
                <p className="text-blue-800 text-sm">
                  మొదటి 5 సంవత్సరాల్లో ప్రిన్సిపల్ ఎక్కువగా కనిపిస్తుంది
                </p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">కంపౌండింగ్ ఎఫెక్ట్</h4>
                <p className="text-yellow-800 text-sm">
                  10 సంవత్సరాల తర్వాత వడ్డీ వేగంగా పెరుగుతుంది
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">మెచ్యూరిటీ దశ</h4>
                <p className="text-green-800 text-sm">
                  చివరి దశలో వడ్డీ ప్రిన్సిపల్‌కు దాదాపు సమానం
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Composition Chart */}
          <TabsContent value="composition" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Composition Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">కంపోజిషన్ వివరాలు</h4>
                {pieData.map((item, index) => {
                  const percentage = ((item.value / finalData.yearEndBalance) * 100).toFixed(1);
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{formatIndianCurrency(item.value)}</div>
                        <div className="text-sm text-gray-600">{percentage}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">కంపౌండింగ్ శక్తి</h4>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
                  <div className="text-center mb-3">
                    <div className="text-2xl font-bold text-green-700">
                      {((finalData.cumulativeInterest / finalData.cumulativeContributions) * 100).toFixed(1)}%
                    </div>
                    <p className="text-sm text-gray-600">ప్రిన్సిపల్‌పై వడ్డీ నిష్పత్తి</p>
                  </div>
                  <p className="text-xs text-gray-700 text-center">
                    మీ కంట్రిబ్యూషన్‌పై {((finalData.cumulativeInterest / finalData.cumulativeContributions) * 100).toFixed(1)}% అదనపు వడ్డీ లభిస్తుంది
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Yearly Details */}
          <TabsContent value="yearly" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData.slice(-10)} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${value}వ సం.`}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`}
                  />
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      formatIndianCurrency(value), 
                      name === 'yearlyContribution' ? 'వార్షిక కంట్రిబ్యూషన్' : 'వార్షిక వడ్డీ'
                    ]}
                    labelFormatter={(label) => `సంవత్సరం ${label}`}
                  />
                  <Legend />
                  
                  <Bar 
                    dataKey="yearlyContribution" 
                    fill="#4B6FFF" 
                    name="వార్షిక కంట్రిబ్యూషన్"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="yearlyInterest" 
                    fill="#E6B800" 
                    name="వార్షిక వడ్డీ"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Yearly Insights */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">చివరి 5 సంవత్సరాల వడ్డీ వృద్ధి</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {schedule.slice(-5).map((item, index) => (
                  <div key={index} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
                    <div className="font-semibold text-yellow-900">{item.year}వ సం.</div>
                    <div className="text-lg font-bold text-yellow-700 mt-1">
                      ₹{(item.interest/1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-yellow-600">వార్షిక వడ్డీ</div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">వడ్డీ వేగవృద్ధి ఇన్సైట్</h5>
                <p className="text-green-800 text-sm">
                  చివరి సంవత్సరంలో మాత్రమే వడ్డీ ₹{(schedule[schedule.length-1].interest/1000).toFixed(0)}K వస్తుంది - 
                  ఇది మొదటి సంవత్సరం వడ్డీకి {(schedule[schedule.length-1].interest / schedule[0].interest).toFixed(1)}x ఎక్కువ!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Chart Summary */}
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <h4 className="font-semibold text-indigo-900">చార్ట్ సారాంశం</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-indigo-900">ప్రారంభ వృద్ధి:</span>
              <p className="text-indigo-800">మొదటి 5 సంవత్సరాల్లో నెమ్మదిగా పెరుగుతుంది</p>
            </div>
            <div>
              <span className="font-medium text-indigo-900">మధ్య దశ:</span>
              <p className="text-indigo-800">కంపౌండింగ్ ఎఫెక్ట్ కనిపించడం మొదలవుతుంది</p>
            </div>
            <div>
              <span className="font-medium text-indigo-900">చివరి దశ:</span>
              <p className="text-indigo-800">వడ్డీ వేగంగా పెరిగి గొప్ప రాబడిని ఇస్తుంది</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}