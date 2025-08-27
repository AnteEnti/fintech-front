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
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { formatCurrency, type TermPlanResult } from '@/lib/computations/term-plan-calculator';

interface TermPlanChartProps {
  result: TermPlanResult;
}

export default function TermPlanChart({ result }: TermPlanChartProps) {
  const { premiumBreakdown, comparison } = result;

  // Prepare data for premium breakdown chart
  const breakdownData = [
    {
      name: 'బేస్ ప్రీమియం',
      value: premiumBreakdown.basePremium,
      percentage: ((premiumBreakdown.basePremium / premiumBreakdown.totalPremium) * 100).toFixed(1)
    },
    {
      name: 'స్మోకింగ్ సర్చార్జ్',
      value: premiumBreakdown.smokingSurcharge,
      percentage: ((premiumBreakdown.smokingSurcharge / premiumBreakdown.totalPremium) * 100).toFixed(1)
    },
    {
      name: 'GST (18%)',
      value: premiumBreakdown.gst,
      percentage: ((premiumBreakdown.gst / premiumBreakdown.totalPremium) * 100).toFixed(1)
    }
  ].filter(item => item.value > 0); // Only show non-zero components

  // Age-wise premium data
  const ageWiseData = comparison.ageWisePremiums.map(item => ({
    age: `${item.age} సంవత్సరాలు`,
    annual: item.premium,
    monthly: item.monthlyPremium
  }));

  // Term-wise premium data
  const termWiseData = comparison.termWisePremiums.map(item => ({
    term: `${item.term} సంవత్సరాలు`,
    annual: item.premium,
    totalCost: item.totalCost
  }));

  // Colors for charts
  const COLORS = {
    basePremium: '#4B6FFF', // Blue
    smokingSurcharge: '#E6B800', // Gold
    gst: '#28A745', // Green
    annual: '#4B6FFF', // Blue
    monthly: '#17A2B8', // Cyan
    totalCost: '#FD7E14' // Orange
  };

  const PIE_COLORS = [
    COLORS.basePremium,
    COLORS.smokingSurcharge,
    COLORS.gst
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: { 
    active?: boolean; 
    payload?: Array<{ color: string; dataKey: string; value: number }>; 
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`${label}`}</p>
          {payload.map((entry, index: number) => (
            <p key={index} className="text-gray-700" style={{ color: entry.color }}>
              {`${entry.dataKey === 'annual' ? 'వార్షిక ప్రీమియం' : 
                 entry.dataKey === 'monthly' ? 'మాసిక ప్రీమియం' : 
                 entry.dataKey === 'totalCost' ? 'మొత్తం కాస్ట్' : entry.dataKey}: ${formatCurrency(entry.value)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }: { 
    active?: boolean; 
    payload?: Array<{ payload: { name: string; value: number; percentage: string } }>; 
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-gray-700">{formatCurrency(data.value)}</p>
          <p className="text-gray-600 text-sm">{data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">
          ప్రీమియం అనాలిసిస్ & పోలిక
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakdown" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breakdown">ప్రీమియం భాగాలు</TabsTrigger>
            <TabsTrigger value="age-wise">వయస్సు వారీ</TabsTrigger>
            <TabsTrigger value="term-wise">టర్మ్ వారీ</TabsTrigger>
          </TabsList>

          {/* Premium Breakdown Charts */}
          <TabsContent value="breakdown" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Bar Chart */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">ప్రీమియం కాంపోనెంట్స్</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={breakdownData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="name" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        fontSize={12}
                      />
                      <YAxis 
                        tickFormatter={(value) => formatCurrency(value)}
                        fontSize={12}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar 
                        dataKey="value" 
                        fill={COLORS.basePremium}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">ప్రీమియం డిస్ట్రిబ్యూషన్</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={breakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        fontSize={10}
                      >
                        {breakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<PieTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* Breakdown Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">కాంపోనెంట్</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">మొత్తం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">శాతం</th>
                  </tr>
                </thead>
                <tbody>
                  {breakdownData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 p-3 font-medium">{item.name}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(item.value)}</td>
                      <td className="border border-gray-300 p-3 text-right">{item.percentage}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-100 font-bold">
                    <td className="border border-gray-300 p-3">మొత్తం ప్రీమియం</td>
                    <td className="border border-gray-300 p-3 text-right">{formatCurrency(premiumBreakdown.totalPremium)}</td>
                    <td className="border border-gray-300 p-3 text-right">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Age-wise Comparison */}
          <TabsContent value="age-wise" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">వయస్సు ఆధారంగా ప్రీమియం పోలిక</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageWiseData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="age"
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      fontSize={12}
                    />
                    <YAxis 
                      tickFormatter={(value) => formatCurrency(value)}
                      fontSize={12}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar 
                      dataKey="annual" 
                      fill={COLORS.annual}
                      name="వార్షిక ప్రీమియం"
                      radius={[2, 2, 0, 0]}
                    />
                    <Bar 
                      dataKey="monthly" 
                      fill={COLORS.monthly}
                      name="మాసిక ప్రీమియం"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">గమనిక:</h4>
              <p className="text-yellow-800 text-sm">
                వయస్సు పెరిగే కొద్దీ ప్రీమియం కూడా పెరుగుతుంది. కాబట్టి తొందరగా టర్మ్ ఇన్షూరెన్స్ తీసుకోవడం మంచిది.
                25 సంవత్సరాల వయస్సులో తీసుకుంటే 45 సంవత్సరాల వయస్సులో తీసుకోవడం కంటే చాలా తక్కువ ప్రీమియం.
              </p>
            </div>
          </TabsContent>

          {/* Term-wise Comparison */}
          <TabsContent value="term-wise" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">పాలసీ టర్మ్ ఆధారంగా ప్రీమియం పోలిక</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={termWiseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="term"
                      fontSize={12}
                    />
                    <YAxis 
                      yAxisId="left"
                      orientation="left"
                      tickFormatter={(value) => formatCurrency(value)}
                      fontSize={12}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tickFormatter={(value) => formatCurrency(value)}
                      fontSize={12}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="annual" 
                      stroke={COLORS.annual}
                      strokeWidth={3}
                      name="వార్షిక ప్రీమియం"
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="totalCost" 
                      stroke={COLORS.totalCost}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="మొత్తం కాస్ట్"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Term-wise breakdown table */}
            <div className="overflow-x-auto">
              <h4 className="font-semibold text-gray-900 mb-3">టర్మ్ వారీ వివరాలు</h4>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-center font-semibold">పాలసీ టర్మ్</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">వార్షిక ప్రీమియం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">మాసిక ప్రీమియం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">మొత్తం కాస్ట్</th>
                  </tr>
                </thead>
                <tbody>
                  {termWiseData.map((term, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 p-3 text-center font-medium">{term.term}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(term.annual)}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(term.annual / 12)}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(term.totalCost)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">టర్మ్ ఎంపిక గైడ్:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-blue-800 text-sm">
                <div>
                  <p className="font-medium">✓ పొట్టి టర్మ్ (10-15 సంవత్సరాలు)</p>
                  <p>తక్కువ మొత్తం కాస్ట్, అధిక వార్షిక ప్రీమియం</p>
                </div>
                <div>
                  <p className="font-medium">✓ దీర్ఘ టర్మ్ (20-30 సంవత్సరాలు)</p>
                  <p>తక్కువ వార్షిక ప్రీమియం, అధిక మొత్తం కాస్ట్</p>
                </div>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </CardContent>
    </Card>
  );
}