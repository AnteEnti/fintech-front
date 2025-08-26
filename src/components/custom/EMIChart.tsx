"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
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
  Legend 
} from 'recharts';
import { EMIInputs, generateYearlyEMIData, generateEMISchedule } from "@/lib/computations/emi-calculator";

interface EMIChartProps {
  inputs: EMIInputs;
}

export default function EMIChart({ inputs }: EMIChartProps) {
  const yearlyData = generateYearlyEMIData(inputs);
  const schedule = generateEMISchedule(inputs);
  
  // Prepare data for different chart types
  const cumulativeData = yearlyData.map((year, index) => {
    const previousYears = yearlyData.slice(0, index);
    const cumulativePrincipal = previousYears.reduce((sum, y) => sum + y.principalPaid, 0) + year.principalPaid;
    const cumulativeInterest = previousYears.reduce((sum, y) => sum + y.interestPaid, 0) + year.interestPaid;
    
    return {
      year: `సంవత్సరం ${year.year}`,
      yearNumber: year.year,
      principalPaid: Math.round(year.principalPaid),
      interestPaid: Math.round(year.interestPaid),
      cumulativePrincipal: Math.round(cumulativePrincipal),
      cumulativeInterest: Math.round(cumulativeInterest),
      remainingBalance: Math.round(year.remainingBalance),
      totalPaid: Math.round(year.totalPaid)
    };
  });

  // Pie chart data for total breakdown
  const totalPrincipal = inputs.loanAmount;
  const totalInterest = yearlyData.reduce((sum, year) => sum + year.interestPaid, 0);
  
  const pieData = [
    {
      name: 'అసలు మొత్తం',
      value: Math.round(totalPrincipal),
      color: '#4B6FFF'
    },
    {
      name: 'వడ్డీ మొత్తం',
      value: Math.round(totalInterest),
      color: '#E6B800'
    }
  ];

  // Monthly data for detailed view (first 24 months)
  const monthlyData = schedule.slice(0, Math.min(24, schedule.length)).map((month) => ({
    month: `నెల ${month.month}`,
    monthNumber: month.month,
    principalPaid: Math.round(month.principalPaid),
    interestPaid: Math.round(month.interestPaid),
    remainingBalance: Math.round(month.remainingBalance),
    emi: Math.round(month.emi)
  }));

  // Custom tooltip for Indian currency formatting
  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{ name: string; value: number; color: string }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ₹{entry.value.toLocaleString('en-IN')}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          EMI విజువల్ విశ్లేషణ
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="yearly-breakdown" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="yearly-breakdown">వార్షిక విభజన</TabsTrigger>
            <TabsTrigger value="cumulative-view">సంచిత వీక్షణ</TabsTrigger>
            <TabsTrigger value="monthly-schedule">నెలవారీ షెడ్యూల్</TabsTrigger>
            <TabsTrigger value="total-breakdown">మొత్తం విభజన</TabsTrigger>
          </TabsList>

          {/* Yearly Principal vs Interest Breakdown */}
          <TabsContent value="yearly-breakdown" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                వార్షిక అసలు vs వడ్డీ చెల్లింపు
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={cumulativeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#666"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#666"
                    fontSize={12}
                    tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar 
                    dataKey="principalPaid" 
                    name="అసలు భాగం" 
                    stackId="payments"
                    fill="#4B6FFF" 
                  />
                  <Bar 
                    dataKey="interestPaid" 
                    name="వడ్డీ భాగం" 
                    stackId="payments"
                    fill="#E6B800" 
                  />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 text-center">
                ప్రతి సంవత్సరం అసలు మరియు వడ్డీ చెల్లింపుల విభజన
              </p>
            </div>
          </TabsContent>

          {/* Cumulative Payment View */}
          <TabsContent value="cumulative-view" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                సంచిత చెల్లింపు మరియు మిగిలిన బ్యాలెన్స్
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={cumulativeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#666"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#666"
                    fontSize={12}
                    tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="cumulativePrincipal"
                    name="సంచిత అసలు"
                    stackId="1"
                    stroke="#4B6FFF"
                    fill="#4B6FFF"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="cumulativeInterest"
                    name="సంచిత వడ్డీ"
                    stackId="1"
                    stroke="#E6B800"
                    fill="#E6B800"
                    fillOpacity={0.6}
                  />
                  <Line
                    type="monotone"
                    dataKey="remainingBalance"
                    name="మిగిలిన బ్యాలెన్స్"
                    stroke="#FF6B6B"
                    strokeWidth={2}
                    dot={{ fill: '#FF6B6B' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 text-center">
                కాలక్రమేణా చెల్లించిన మొత్తం మరియు మిగిలిన లోన్ బ్యాలెన్స్
              </p>
            </div>
          </TabsContent>

          {/* Monthly Schedule */}
          <TabsContent value="monthly-schedule" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                నెలవారీ EMI విభజన {schedule.length > 24 ? "(మొదటి 24 నెలలు)" : ""}
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="monthNumber" 
                    stroke="#666"
                    fontSize={12}
                    tickFormatter={(value) => `${value}`}
                  />
                  <YAxis 
                    stroke="#666"
                    fontSize={12}
                    tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="principalPaid"
                    name="అసలు భాగం"
                    stroke="#4B6FFF"
                    strokeWidth={2}
                    dot={{ fill: '#4B6FFF', r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="interestPaid"
                    name="వడ్డీ భాగం"
                    stroke="#E6B800"
                    strokeWidth={2}
                    dot={{ fill: '#E6B800', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 text-center">
                ప్రతి నెలా EMIలో అసలు మరియు వడ్డీ భాగాల మార్పు
              </p>
            </div>
          </TabsContent>

          {/* Total Breakdown Pie Chart */}
          <TabsContent value="total-breakdown" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                మొత్తం లోన్ ఖర్చు విభజన
              </h3>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2">
                  <ResponsiveContainer width="100%" height={300}>
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
                      <Tooltip 
                        formatter={(value: number) => [
                          `₹${value.toLocaleString('en-IN')}`, 
                          ''
                        ]}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="font-medium text-blue-900">అసలు మొత్తం</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-700">
                        ₹{totalPrincipal.toLocaleString('en-IN')}
                      </p>
                      <p className="text-sm text-blue-600">
                        {((totalPrincipal / (totalPrincipal + totalInterest)) * 100).toFixed(1)}% మొత్తంలో
                      </p>
                    </div>
                    
                    <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span className="font-medium text-yellow-900">వడ్డీ మొత్తం</span>
                      </div>
                      <p className="text-2xl font-bold text-yellow-700">
                        ₹{Math.round(totalInterest).toLocaleString('en-IN')}
                      </p>
                      <p className="text-sm text-yellow-600">
                        {((totalInterest / (totalPrincipal + totalInterest)) * 100).toFixed(1)}% మొత్తంలో
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <h4 className="font-medium text-gray-900 mb-2">ముఖ్యమైన గణాంకాలు</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>మొత్తం చెల్లింపు:</span>
                        <span className="font-medium">
                          ₹{Math.round(totalPrincipal + totalInterest).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>వడ్డీ రేట్:</span>
                        <span className="font-medium">{inputs.interestRate}% వార్షికం</span>
                      </div>
                      <div className="flex justify-between">
                        <span>లోన్ వ్యవధి:</span>
                        <span className="font-medium">{inputs.loanTenure} సంవత్సరాలు</span>
                      </div>
                      <div className="flex justify-between">
                        <span>మొత్తం EMIలు:</span>
                        <span className="font-medium">{inputs.loanTenure * 12} చెల్లింపులు</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}