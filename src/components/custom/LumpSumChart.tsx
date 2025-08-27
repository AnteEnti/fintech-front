"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LumpSumResult } from '@/lib/computations/lumpsum-calculator';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { BarChart3, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';

interface LumpSumChartProps {
  result: LumpSumResult;
}

export default function LumpSumChart({ result }: LumpSumChartProps) {
  // Prepare data for charts
  const chartData = result.yearlyBreakdown.map(item => ({
    year: `Year ${item.year}`,
    yearNum: item.year,
    principal: Math.round(item.openingValue),
    returns: Math.round(item.returns),
    total: Math.round(item.closingValue),
    cumulativeReturns: Math.round(item.cumulativeReturns)
  }));

  // Add initial data point
  const chartDataWithZero = [
    {
      year: 'Year 0',
      yearNum: 0,
      principal: result.yearlyBreakdown[0]?.openingValue || 0,
      returns: 0,
      total: result.yearlyBreakdown[0]?.openingValue || 0,
      cumulativeReturns: 0
    },
    ...chartData
  ];

  // Data for pie chart (final year breakdown)
  const finalYear = result.yearlyBreakdown[result.yearlyBreakdown.length - 1];
  const pieData = [
    {
      name: 'మూల పెట్టుబడి',
      value: finalYear?.openingValue || 0,
      color: '#4B6FFF'
    },
    {
      name: 'సంచిత లాభాలు',
      value: finalYear?.cumulativeReturns || 0,
      color: '#E6B800'
    }
  ];

  const formatCurrency = (value: number) => {
    if (value >= 10000000) { // 1 crore
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    } else if (value >= 100000) { // 1 lakh
      return `₹${(value / 100000).toFixed(1)}L`;
    } else if (value >= 1000) { // 1 thousand
      return `₹${(value / 1000).toFixed(0)}K`;
    } else {
      return `₹${value.toLocaleString('en-IN')}`;
    }
  };

  const formatFullCurrency = (value: number) => {
    return `₹${value.toLocaleString('en-IN')}`;
  };

  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{
      color: string;
      name: string;
      value: number;
    }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry, index: number) => (
              <p key={index} style={{ color: entry.color }} className="text-sm">
                {entry.name}: {formatFullCurrency(entry.value)}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }: {
    active?: boolean;
    payload?: Array<{
      payload: {
        name: string;
        value: number;
        color: string;
      };
      value?: number;
    }>;
  }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const value = item.value || item.payload.value;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{item.payload.name}</p>
          <p className="text-sm" style={{ color: item.payload.color }}>
            {formatFullCurrency(value)}
          </p>
          <p className="text-xs text-gray-600">
            {((value / result.futureValue) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="growth" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="growth" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            వృద్ధి చార్ట్
          </TabsTrigger>
          <TabsTrigger value="yearly" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            వార్షిక వివరాలు
          </TabsTrigger>
          <TabsTrigger value="breakdown" className="flex items-center gap-2">
            <PieChartIcon className="w-4 h-4" />
            విభజన చార్ట్
          </TabsTrigger>
        </TabsList>

        {/* Growth Chart */}
        <TabsContent value="growth">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center justify-between">
                <span>లంప్‌సమ్ పెట్టుబడి వృద్ధి</span>
                <Badge variant="outline" className="bg-blue-50 text-blue-800">
                  మూల పెట్టుబడి vs మొత్తం విలువ
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartDataWithZero} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4B6FFF" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#4B6FFF" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="returnsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E6B800" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#E6B800" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="year" 
                      className="text-xs"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis 
                      className="text-xs"
                      tickFormatter={formatCurrency}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="principal" 
                      stackId="1"
                      stroke="#4B6FFF" 
                      fill="url(#totalGradient)"
                      name="మూల పెట్టుబడి"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="cumulativeReturns" 
                      stackId="1"
                      stroke="#E6B800" 
                      fill="url(#returnsGradient)"
                      name="సంచిత లాభాలు"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-center mt-4 space-x-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  <span className="text-sm text-gray-600">మూల పెట్టుబడి</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                  <span className="text-sm text-gray-600">సంచిత లాభాలు</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Yearly Returns Bar Chart */}
        <TabsContent value="yearly">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center justify-between">
                <span>వార్షిక రిటర్న్లు</span>
                <Badge variant="outline" className="bg-green-50 text-green-800">
                  సంవత్సరానికి లాభాలు
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="year" 
                      className="text-xs"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis 
                      className="text-xs"
                      tickFormatter={formatCurrency}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="returns" 
                      fill="#E6B800" 
                      name="వార్షిక లాభం"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-yellow-50 rounded-lg border">
                  <div className="text-lg font-bold text-yellow-900">
                    {formatCurrency(Math.max(...chartData.map(d => d.returns)))}
                  </div>
                  <div className="text-xs text-yellow-700">గరిష్ట వార్షిక లాభం</div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border">
                  <div className="text-lg font-bold text-yellow-900">
                    {formatCurrency(Math.min(...chartData.map(d => d.returns)))}
                  </div>
                  <div className="text-xs text-yellow-700">కనిష్ట వార్షిక లాభం</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border">
                  <div className="text-lg font-bold text-blue-900">
                    {formatCurrency(chartData.reduce((sum, d) => sum + d.returns, 0) / chartData.length)}
                  </div>
                  <div className="text-xs text-blue-700">సగటు వార్షిక లాభం</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border">
                  <div className="text-lg font-bold text-green-900">
                    {formatCurrency(result.totalReturns)}
                  </div>
                  <div className="text-xs text-green-700">మొత్తం లాభాలు</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pie Chart Breakdown */}
        <TabsContent value="breakdown">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center justify-between">
                <span>చివరి సంవత్సరం విభజన</span>
                <Badge variant="outline" className="bg-purple-50 text-purple-800">
                  మూలధనం vs లాభాలు
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Pie Chart */}
                <div className="h-80 w-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<PieTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend and Stats */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div>
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            {formatFullCurrency(item.value)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {((item.value / result.futureValue) * 100).toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <div className="text-sm text-gray-600">
                      <strong>మొత్తం విలువ:</strong> {formatFullCurrency(result.futureValue)}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>లాభ శాతం:</strong> {((result.totalReturns / (result.futureValue - result.totalReturns)) * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>వృద్ధి రేట్:</strong> {result.annualizedReturn.toFixed(2)}% CAGR
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Year-wise Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">వర్షానుగ వివరాలు</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-medium text-gray-900">సంవత్సరం</th>
                  <th className="text-right py-2 font-medium text-gray-900">ప్రారంభ విలువ</th>
                  <th className="text-right py-2 font-medium text-gray-900">వార్షిక లాభం</th>
                  <th className="text-right py-2 font-medium text-gray-900">ముగింపు విలువ</th>
                  <th className="text-right py-2 font-medium text-gray-900">సంచిత లాభాలు</th>
                </tr>
              </thead>
              <tbody>
                {result.yearlyBreakdown.map((year, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-2">{year.year}</td>
                    <td className="py-2 text-right text-blue-600">
                      ₹{year.openingValue.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2 text-right text-green-600">
                      ₹{year.returns.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2 text-right font-medium">
                      ₹{year.closingValue.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2 text-right text-purple-600">
                      ₹{year.cumulativeReturns.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}