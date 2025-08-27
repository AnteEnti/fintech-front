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
import { formatCurrency, type LifeInsuranceNeedsResult } from '@/lib/computations/life-insurance-needs';

interface LifeInsuranceNeedsChartProps {
  result: LifeInsuranceNeedsResult;
}

export default function LifeInsuranceNeedsChart({ result }: LifeInsuranceNeedsChartProps) {
  const { coverageBreakdown, methodComparison, yearlyBreakdown } = result;

  // Prepare data for coverage breakdown chart
  const coverageData = [
    {
      name: 'ఆదాయ రిప్లేస్‌మెంట్',
      value: coverageBreakdown.incomeReplacement,
      percentage: ((coverageBreakdown.incomeReplacement / result.totalCoverageNeeded) * 100).toFixed(1)
    },
    {
      name: 'అప్పుల చెల్లింపు',
      value: coverageBreakdown.debtCoverage,
      percentage: ((coverageBreakdown.debtCoverage / result.totalCoverageNeeded) * 100).toFixed(1)
    },
    {
      name: 'విద్య ఖర్చులు',
      value: coverageBreakdown.educationCosts,
      percentage: ((coverageBreakdown.educationCosts / result.totalCoverageNeeded) * 100).toFixed(1)
    },
    {
      name: 'ఎమర్జెన్సీ ఫండ్',
      value: coverageBreakdown.emergencyFund,
      percentage: ((coverageBreakdown.emergencyFund / result.totalCoverageNeeded) * 100).toFixed(1)
    },
    {
      name: 'భార్య మద్దతు',
      value: coverageBreakdown.spouseSupport,
      percentage: ((coverageBreakdown.spouseSupport / result.totalCoverageNeeded) * 100).toFixed(1)
    },
    {
      name: 'అంత్య కార్యాలు',
      value: coverageBreakdown.finalExpenses,
      percentage: ((coverageBreakdown.finalExpenses / result.totalCoverageNeeded) * 100).toFixed(1)
    }
  ];

  // Method comparison data
  const methodData = [
    {
      method: 'హ్యూమన్ లైఫ్ వాల్యూ',
      value: methodComparison.humanLifeValue,
      shortName: 'HLV'
    },
    {
      method: 'ఇన్కమ్ మల్టిపుల్',
      value: methodComparison.incomeMultiple,
      shortName: 'Income Multiple'
    },
    {
      method: 'అవసరాల ఆధారంగా',
      value: methodComparison.needsBased,
      shortName: 'Needs Based'
    }
  ];

  // Colors for charts
  const COLORS = {
    incomeReplacement: '#4B6FFF', // Blue
    debtCoverage: '#E6B800', // Gold
    educationCosts: '#28A745', // Green
    emergencyFund: '#17A2B8', // Cyan
    spouseSupport: '#FD7E14', // Orange
    finalExpenses: '#6C757D' // Gray
  };

  const PIE_COLORS = [
    COLORS.incomeReplacement,
    COLORS.debtCoverage,
    COLORS.educationCosts,
    COLORS.emergencyFund,
    COLORS.spouseSupport,
    COLORS.finalExpenses
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
              {`${entry.dataKey}: ${formatCurrency(entry.value)}`}
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
          కవర్ అవసరాల విజువలైజేషన్
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakdown" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breakdown">కవర్ విభజన</TabsTrigger>
            <TabsTrigger value="methods">పద్ధతుల పోలిక</TabsTrigger>
            <TabsTrigger value="timeline">సంవత్సరాల వారీ</TabsTrigger>
          </TabsList>

          {/* Coverage Breakdown Charts */}
          <TabsContent value="breakdown" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Bar Chart */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">కవర్ అవసరాల విభజన</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={coverageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                        fill={COLORS.incomeReplacement}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">కవర్ పంపిణీ</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={coverageData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        fontSize={10}
                      >
                        {coverageData.map((entry, index) => (
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
                    <th className="border border-gray-300 p-3 text-left font-semibold">కవర్ వర్గం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">మొత్తం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">శాతం</th>
                  </tr>
                </thead>
                <tbody>
                  {coverageData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 p-3 font-medium">{item.name}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(item.value)}</td>
                      <td className="border border-gray-300 p-3 text-right">{item.percentage}%</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-100 font-bold">
                    <td className="border border-gray-300 p-3">మొత్తం కవర్ అవసరం</td>
                    <td className="border border-gray-300 p-3 text-right">{formatCurrency(result.totalCoverageNeeded)}</td>
                    <td className="border border-gray-300 p-3 text-right">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Method Comparison */}
          <TabsContent value="methods" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">వివిధ లెక్కింపు పద్ధతుల పోలిక</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={methodData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="method"
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
                      fill={COLORS.debtCoverage}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">పద్ధతుల వివరణ:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-blue-800">హ్యూమన్ లైఫ్ వాల్యూ:</p>
                  <p className="text-blue-700">భవిష్యత్ ఆదాయాల ప్రస్తుత విలువ (డిస్కౌంట్ రేట్ 6%)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">ఇన్కమ్ మల్టిపుల్:</p>
                  <p className="text-blue-700">వార్షిక ఆదాయం × 8-12 (వయస్సు, ఆధారపడేవారి ఆధారంగా)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">అవసరాల ఆధారంగా:</p>
                  <p className="text-blue-700">అప్పులు + విద్య + ఆదాయ మార్పిడి + ఎమర్జెన్సీ ఫండ్</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Timeline View */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">సంవత్సరాల వారీ కవర్ అవసరం మరియు ప్రీమియం</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearlyBreakdown.slice(0, 20)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year"
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
                      dataKey="coverageNeeded" 
                      stroke={COLORS.incomeReplacement}
                      strokeWidth={3}
                      name="కవర్ అవసరం"
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="cumulativePremium" 
                      stroke={COLORS.debtCoverage}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="కలిసిన ప్రీమియం"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Yearly breakdown table (first 10 years) */}
            <div className="overflow-x-auto">
              <h4 className="font-semibold text-gray-900 mb-3">మొదటి 10 సంవత్సరాల వివరాలు</h4>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-center font-semibold">సంవత్సరం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">కవర్ అవసరం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">వార్షిక ప్రీమియం</th>
                    <th className="border border-gray-300 p-3 text-right font-semibold">కలిసిన ప్రీమియం</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyBreakdown.slice(0, 10).map((year, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 p-3 text-center font-medium">{year.year}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(year.coverageNeeded)}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(year.premiumPaid)}</td>
                      <td className="border border-gray-300 p-3 text-right">{formatCurrency(year.cumulativePremium)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">గమనిక:</h4>
              <p className="text-yellow-800 text-sm">
                కవర్ అవసరం కాలక్రమేణా తగ్గవచ్చు - పిల్లలు స్వతంత్రులైన తర్వాత, అప్పులు చెల్లించిన తర్వాత. 
                అయితే ప్రీమియంలు వయస్సు పెరిగిన కొద్దీ పెరుగుతాయి, కాబట్టి తొందరగా తీసుకోవడం మంచిది.
              </p>
            </div>
          </TabsContent>

        </Tabs>
      </CardContent>
    </Card>
  );
}