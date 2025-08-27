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
  Bar,
  LineChart,
  Line
} from 'recharts';
import { BarChart3, PieChartIcon, TrendingUp, Calendar } from "lucide-react";

import { 
  generateFDSchedule, 
  FDInputs, 
  formatIndianCurrency,
  calculateFD
} from '@/lib/computations/fd-calculator';

interface FDChartProps {
  inputs: FDInputs;
}

export default function FDChart({ inputs }: FDChartProps) {
  const schedule = generateFDSchedule(inputs);
  const fdResult = calculateFD(inputs);
  
  // Prepare chart data based on compounding frequency
  const chartData = schedule.map(item => ({
    period: item.period,
    periodLabel: item.periodLabel,
    principal: item.openingBalance,
    interest: item.cumulativeInterest,
    total: item.closingBalance,
    periodInterest: item.interestEarned
  }));

  // Final values for pie chart
  const pieData = [
    { 
      name: 'ప్రిన్సిపల్', 
      value: fdResult.principal, 
      color: '#4B6FFF' 
    },
    { 
      name: 'వడ్డీ', 
      value: fdResult.totalInterest, 
      color: '#E6B800' 
    }
  ];

  // Tax breakdown data
  const taxData = [
    {
      name: 'మొత్తం వడ్డీ',
      value: fdResult.totalInterest,
      color: '#E6B800'
    },
    {
      name: 'TDS మొత్తం',
      value: fdResult.tdsAmount,
      color: '#FF6B6B'
    },
    {
      name: 'నెట్ వడ్డీ',
      value: fdResult.totalInterest - fdResult.tdsAmount,
      color: '#51CF66'
    }
  ];

  // Custom tooltip for area chart
  const AreaTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{ name: string; value: number; color: string }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      const periodData = chartData.find(item => item.period.toString() === label);
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <h4 className="font-semibold text-gray-900 mb-2">
            {periodData?.periodLabel || `కాలం ${label}`}
          </h4>
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
      const percentage = ((data.value / fdResult.maturityAmount) * 100).toFixed(1);
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

  // Get compounding frequency display
  const getFrequencyDisplay = () => {
    switch (inputs.compoundingFrequency) {
      case 'monthly': return 'మాసిక';
      case 'quarterly': return 'త్రైమాసిక';
      case 'yearly': return 'వార్షిక';
      default: return 'త్రైమాసిక';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          FD గ్రోత్ విజువలైజేషన్
        </CardTitle>
        <p className="text-gray-600">
          మీ ఫిక్స్‌డ్ డిపాజిట్ {getFrequencyDisplay()} వృద్ధిని గ్రాఫ్‌లలో చూడండి
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="growth" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              వృద్ధి చార్ట్
            </TabsTrigger>
            <TabsTrigger value="composition" className="flex items-center gap-2">
              <PieChartIcon className="w-4 h-4" />
              కంపోజిషన్
            </TabsTrigger>
            <TabsTrigger value="interest" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              వడ్డీ వివరాలు
            </TabsTrigger>
            <TabsTrigger value="tax" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              టాక్స్ వివరాలు
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
                    dataKey="period" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${value}`}
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
                    name="సంచిత వడ్డీ"
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
                  మొదటి కొన్ని కాలాల్లో ప్రిన్సిపల్ మొత్తం స్థిరంగా ఉంటుంది
                </p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">కంపౌండింగ్ ఎఫెక్ట్</h4>
                <p className="text-yellow-800 text-sm">
                  {getFrequencyDisplay()} కంపౌండింగ్‌తో వడ్డీ వేగంగా పెరుగుతుంది
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">మెచ్యూరిటీ దశ</h4>
                <p className="text-green-800 text-sm">
                  చివరికి వడ్డీ ప్రిన్సిపల్‌కు {((fdResult.totalInterest / fdResult.principal) * 100).toFixed(1)}% అవుతుంది
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
                  const percentage = ((item.value / fdResult.maturityAmount) * 100).toFixed(1);
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
                      {fdResult.effectiveAnnualRate}%
                    </div>
                    <p className="text-sm text-gray-600">ఎఫెక్టివ్ వార్షిక రేట్</p>
                  </div>
                  <p className="text-xs text-gray-700 text-center">
                    {getFrequencyDisplay()} కంపౌండింగ్ వల్ల {inputs.interestRate}% కంటే {(fdResult.effectiveAnnualRate - inputs.interestRate).toFixed(2)}% అదనపు రిటర్న్
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Interest Details */}
          <TabsContent value="interest" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="period" 
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      formatIndianCurrency(value), 
                      name === 'periodInterest' ? `${getFrequencyDisplay()} వడ్డీ` : 'సంచిత వడ్డీ'
                    ]}
                    labelFormatter={(label) => `కాలం ${label}`}
                  />
                  <Legend />
                  
                  <Line 
                    type="monotone" 
                    dataKey="periodInterest" 
                    stroke="#E6B800" 
                    strokeWidth={3}
                    name={`${getFrequencyDisplay()} వడ్డీ`}
                    dot={{ fill: '#E6B800', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="interest" 
                    stroke="#4B6FFF" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="సంచిత వడ్డీ"
                    dot={{ fill: '#4B6FFF', strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Interest Growth Pattern */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">వడ్డీ వృద్ధి నమూనా</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-900 mb-2">మొదటి వడ్డీ</h5>
                  <div className="text-xl font-bold text-yellow-700">
                    {formatIndianCurrency(schedule[0]?.interestEarned || 0)}
                  </div>
                  <p className="text-xs text-yellow-600 mt-1">మొదటి {getFrequencyDisplay()} వడ్డీ</p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-900 mb-2">మధ్య దశ వడ్డీ</h5>
                  <div className="text-xl font-bold text-orange-700">
                    {formatIndianCurrency(schedule[Math.floor(schedule.length/2)]?.interestEarned || 0)}
                  </div>
                  <p className="text-xs text-orange-600 mt-1">మధ్యలో {getFrequencyDisplay()} వడ్డీ</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-900 mb-2">చివరి వడ్డీ</h5>
                  <div className="text-xl font-bold text-green-700">
                    {formatIndianCurrency(schedule[schedule.length-1]?.interestEarned || 0)}
                  </div>
                  <p className="text-xs text-green-600 mt-1">చివరి {getFrequencyDisplay()} వడ్డీ</p>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">వడ్డీ వేగవృద్ధి ఇన్సైట్</h5>
                <p className="text-blue-800 text-sm">
                  చివరి కాలంలో వడ్డీ మొదటి కాలం కంటే {
                    schedule.length > 1 ? 
                    (schedule[schedule.length-1].interestEarned / schedule[0].interestEarned).toFixed(1) : 
                    '1'
                  }x ఎక్కువ! 
                  ఇది కంపౌండింగ్ ప్రభావం వల్ల.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Tax Details */}
          <TabsContent value="tax" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taxData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatIndianCurrency(value), '']}
                  />
                  
                  <Bar 
                    dataKey="value" 
                    fill="#4B6FFF"
                    radius={[4, 4, 0, 0]}
                  >
                    {taxData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Tax Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">TDS వివరాలు</h4>
                
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-900 mb-2">TDS మొత్తం</h5>
                  <div className="text-2xl font-bold text-red-700">
                    {formatIndianCurrency(fdResult.tdsAmount)}
                  </div>
                  <p className="text-xs text-red-600 mt-1">
                    వార్షిక వడ్డీ ₹40,000 మించినట్లయితే 10% TDS
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-900 mb-2">టాక్స్ అనంతర మెచ్యూరిటీ</h5>
                  <div className="text-2xl font-bold text-green-700">
                    {formatIndianCurrency(fdResult.postTaxMaturityAmount)}
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    TDS కట్టిన తర్వాత మిగిలే మొత్తం
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">టాక్స్ సేవింగ్ చిట్కాలు</h4>
                
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h6 className="font-medium text-blue-900">కుటుంబ సభ్యుల పేర్లలో FDs</h6>
                    <p className="text-blue-800 text-xs mt-1">
                      ప్రతి సభ్యుడికి ₹40,000 వరకు టాక్స్ లేకుండా వడ్డీ
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h6 className="font-medium text-green-900">సీనియర్ సిటిజన్ లాభం</h6>
                    <p className="text-green-800 text-xs mt-1">
                      60+ వయస్సువారికి ₹50,000 వరకు టాక్స్ లేకుండా
                    </p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h6 className="font-medium text-yellow-900">కాలవధి ప్రణాళిక</h6>
                    <p className="text-yellow-800 text-xs mt-1">
                      పెద్ద మొత్తాలను వేర్వేరు సంవత్సరాల్లో మెచ్యూర్ అయేలా
                    </p>
                  </div>
                </div>
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
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium text-indigo-900">కంపౌండింగ్ ఫ్రీక్వెన్సీ:</span>
              <p className="text-indigo-800">{getFrequencyDisplay()} - {
                inputs.compoundingFrequency === 'monthly' ? 12 :
                inputs.compoundingFrequency === 'quarterly' ? 4 : 1
              } సార్లు/సంవత్సరం</p>
            </div>
            <div>
              <span className="font-medium text-indigo-900">ఎఫెక్టివ్ రేట్:</span>
              <p className="text-indigo-800">{fdResult.effectiveAnnualRate}% వార్షిక</p>
            </div>
            <div>
              <span className="font-medium text-indigo-900">వడ్డీ/ప్రిన్సిపల్ నిష్పత్తి:</span>
              <p className="text-indigo-800">{((fdResult.totalInterest / fdResult.principal) * 100).toFixed(1)}%</p>
            </div>
            <div>
              <span className="font-medium text-indigo-900">టాక్స్ ఇంపాక్ట్:</span>
              <p className="text-indigo-800">
                {fdResult.tdsAmount > 0 ? 
                  `${((fdResult.tdsAmount / fdResult.totalInterest) * 100).toFixed(1)}% TDS` : 
                  'టాక్స్ లేదు'
                }
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}