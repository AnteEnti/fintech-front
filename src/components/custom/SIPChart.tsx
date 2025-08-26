"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
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

interface SIPChartProps {
  result: SIPResult;
}

// Brand colors as per design rules
const COLORS = {
  invested: '#4B6FFF',  // Blue for invested amount
  returns: '#E6B800',   // Gold for returns
  gradient: ['#4B6FFF', '#E6B800']
};

export default function SIPChart({ result }: SIPChartProps) {
  // Prepare data for line chart
  const lineChartData = result.yearlyData.map(item => ({
    year: `వర్షం ${item.year}`,
    yearNumber: item.year,
    'పెట్టిన మొత్తం': item.invested,
    'మొత్తం విలువ': item.value,
    'రాబడి': item.value - item.invested
  }));

  // Prepare data for pie chart
  const pieChartData = [
    {
      name: 'మీ పెట్టుబడి',
      value: result.totalInvested,
      color: COLORS.invested
    },
    {
      name: 'అంచనా రాబడి',
      value: result.expectedReturns,
      color: COLORS.returns
    }
  ];

  // Custom tooltip for line chart
  const LineChartTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for pie chart
  const PieChartTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = ((data.value / result.maturityAmount) * 100).toFixed(1);
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{data.payload.name}</p>
          <p className="text-sm text-gray-600">
            {formatCurrency(data.value)} ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom label for pie chart
  const renderCustomPieLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
    if (!cx || !cy || midAngle === undefined || !innerRadius || !outerRadius || !percent) return null;
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          పెట్టుబడి వృద్ధి విజువలైజేషన్
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="growth">వృద్ధి చార్ట్</TabsTrigger>
            <TabsTrigger value="breakdown">విభజన చార్ట్</TabsTrigger>
          </TabsList>

          {/* Growth Chart */}
          <TabsContent value="growth" className="space-y-4">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={lineChartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#666"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#666"
                    fontSize={12}
                    tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                  />
                  <Tooltip content={<LineChartTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="పెట్టిన మొత్తం"
                    stroke={COLORS.invested}
                    strokeWidth={3}
                    dot={{ fill: COLORS.invested, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="మొత్తం విలువ"
                    stroke={COLORS.returns}
                    strokeWidth={3}
                    dot={{ fill: COLORS.returns, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.invested }}></div>
                <span className="text-gray-700">పెట్టిన మొత్తం</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.returns }}></div>
                <span className="text-gray-700">మొత్తం విలువ</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">చార్ట్ విశ్లేషణ:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• నీలి రేఖ: మీరు పెట్టిన మొత్తం (సరళంగా పెరుగుతుంది)</li>
                <li>• పసుపు రేఖ: కంపౌండ్ ఇంట్రెస్ట్‌తో మొత్తం విలువ</li>
                <li>• రెండు రేఖల మధ్య వ్యత్యాసం మీ రాబడి</li>
                <li>• కాలం గడిచేకొద్దీ రాబడి వేగంగా పెరుగుతుంది</li>
              </ul>
            </div>
          </TabsContent>

          {/* Breakdown Chart */}
          <TabsContent value="breakdown" className="space-y-4">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomPieLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieChartTooltip />} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value, entry) => (
                      <span style={{ color: entry.color }}>
                        {value}: {formatCurrency(entry.payload?.value || 0)}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.invested }}></div>
                  <span className="font-semibold text-blue-900">మీ పెట్టుబడి</span>
                </div>
                <div className="text-2xl font-bold text-blue-700">
                  {formatCurrency(result.totalInvested)}
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  మొత్తంలో {((result.totalInvested / result.maturityAmount) * 100).toFixed(1)}%
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.returns }}></div>
                  <span className="font-semibold text-yellow-900">అంచనా రాబడి</span>
                </div>
                <div className="text-2xl font-bold text-yellow-700">
                  {formatCurrency(result.expectedReturns)}
                </div>
                <div className="text-sm text-yellow-600 mt-1">
                  మొత్తంలో {((result.expectedReturns / result.maturityAmount) * 100).toFixed(1)}%
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">ముఖ్యమైన అంశాలు:</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• కంపౌండ్ ఇంట్రెస్ట్ కారణంగా రాబడి మీ పెట్టుబడి కంటే ఎక్కువ</li>
                <li>• దీర్ఘకాలిక పెట్టుబడి మరింత మంచి ఫలితాలు ఇస్తుంది</li>
                <li>• SIP ద్వారా మార్కెట్ హెచ్చు తగ్గులు సరిదిద్దబడతాయి</li>
                <li>• క్రమం తప్పకుండా పెట్టుబడి చేయడం కీలకం</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}