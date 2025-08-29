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
import { IncomeTaxResult } from "@/lib/computations/income-tax-calculator";

interface IncomeTaxChartProps {
  result: IncomeTaxResult;
}

export default function IncomeTaxChart({ result }: IncomeTaxChartProps) {
  
  // Regime comparison data
  const regimeComparisonData = [
    {
      regime: 'పాత విధానం',
      totalTax: result.oldRegime.totalTax,
      effectiveRate: result.oldRegime.effectiveTaxRate,
      takeHome: result.oldRegime.grossTaxableIncome - result.oldRegime.totalTax,
    },
    {
      regime: 'కొత్త విధానం', 
      totalTax: result.newRegime.totalTax,
      effectiveRate: result.newRegime.effectiveTaxRate,
      takeHome: result.newRegime.grossTaxableIncome - result.newRegime.totalTax,
    }
  ];

  // Tax breakdown pie chart data for recommended regime
  const recommended = result.recommendedRegime === 'old' ? result.oldRegime : result.newRegime;
  
  const taxBreakdownData = [
    { 
      name: 'టేక్ హోమ్', 
      value: recommended.grossTaxableIncome - recommended.totalTax,
      color: '#28A745' 
    },
    { 
      name: 'పన్ను', 
      value: recommended.totalTax,
      color: '#DC3545' 
    }
  ];

  // Slab-wise tax distribution
  const slabData = recommended.taxSlabs.map(slab => ({
    slab: slab.slab.label,
    rate: slab.slab.rate,
    tax: slab.tax,
    income: slab.applicableIncome
  })).filter(item => item.income > 0);

  // Deduction breakdown for old regime
  const deductionData = [
    { name: 'స్టాండర్డ్ డిడక్షన్', value: result.oldRegime.standardDeduction, color: '#4B6FFF' },
    { name: 'HRA మినహాయింపు', value: result.oldRegime.hraExemption.exemptAmount, color: '#E6B800' },
    { name: 'సెక్షన్ 80C', value: result.oldRegime.section80CDeduction, color: '#28A745' },
    { name: 'సెక్షన్ 80D', value: result.oldRegime.section80DDeduction, color: '#17A2B8' },
    { name: 'ఇతర మినహాయింపులు', value: result.oldRegime.otherDeductions, color: '#6F42C1' },
  ].filter(item => item.value > 0);

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
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">
            ₹{data.value?.toLocaleString('en-IN')} ({((data.value / recommended.grossTaxableIncome) * 100).toFixed(1)}%)
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
          పన్ను విశ్లేషణ చార్ట్‌లు
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="comparison" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="comparison">విధానాల పోలిక</TabsTrigger>
            <TabsTrigger value="breakdown">పన్ను విభజన</TabsTrigger>
            <TabsTrigger value="slabs">స్లాబ్ విశ్లేషణ</TabsTrigger>
            <TabsTrigger value="deductions">మినహాయింపులు</TabsTrigger>
          </TabsList>

          {/* Regime Comparison Chart */}
          <TabsContent value="comparison" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">పాత vs కొత్త విధానం పోలిక</h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={regimeComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="regime" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="totalTax" name="మొత్తం పన్ను" fill="#DC3545" />
                  <Bar dataKey="takeHome" name="టేక్ హోమ్" fill="#28A745" />
                </ComposedChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">
                    {result.recommendedRegime === 'old' ? 'పాత విధానం' : 'కొత్త విధానం'} (సిఫారసు)
                  </h4>
                  <p className="text-2xl font-bold text-green-800">
                    ₹{(result.recommendedRegime === 'old' ? result.oldRegime.totalTax : result.newRegime.totalTax).toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-green-700">
                    ఎఫెక్టివ్ రేట్: {(result.recommendedRegime === 'old' ? result.oldRegime.effectiveTaxRate : result.newRegime.effectiveTaxRate).toFixed(1)}%
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">పన్ను ఆదా</h4>
                  <p className="text-2xl font-bold text-blue-800">
                    ₹{result.taxSavings.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-blue-700">
                    {result.comparison.percentageSaving.toFixed(1)}% ఆదా అవుతుంది
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tax Breakdown Pie Chart */}
          <TabsContent value="breakdown" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                ఆదాయం vs పన్ను విభజన ({result.recommendedRegime === 'old' ? 'పాత విధానం' : 'కొత్త విధానం'})
              </h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={taxBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={160}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {taxBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 mb-1">మీ వద్దకు వచ్చే మొత్తం</p>
                  <p className="text-xl font-bold text-green-800">
                    ₹{(recommended.grossTaxableIncome - recommended.totalTax).toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-green-600">
                    {(((recommended.grossTaxableIncome - recommended.totalTax) / recommended.grossTaxableIncome) * 100).toFixed(1)}% మొత్తం ఆదాయంలో
                  </p>
                </div>
                
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-600 mb-1">చెల్లించే పన్ను</p>
                  <p className="text-xl font-bold text-red-800">
                    ₹{recommended.totalTax.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-red-600">
                    {recommended.effectiveTaxRate.toFixed(1)}% ఎఫెక్టివ్ రేట్
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Slab-wise Analysis */}
          <TabsContent value="slabs" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                స్లాబ్‌ల వారీగా పన్ను విశ్లేషణ ({result.recommendedRegime === 'old' ? 'పాత విధానం' : 'కొత్త విధానం'})
              </h3>
              
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={slabData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="slab" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="income" name="ఆదాయం" fill="#4B6FFF" />
                  <Bar dataKey="tax" name="పన్ను" fill="#DC3545" />
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-3">స్లాబ్ రేట్లు</h4>
                  <div className="space-y-2">
                    {slabData.map((slab, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{slab.slab}</span>
                        <span className="font-medium">{slab.rate}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">మార్జినల్ రేట్</h4>
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    {recommended.marginalTaxRate}%
                  </p>
                  <p className="text-sm text-gray-600">
                    మీ అదనపు ఆదాయంపై వర్తించే పన్ను రేటు
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Deductions Chart */}
          <TabsContent value="deductions" className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">మినహాయింపుల విభజన (పాత విధానం)</h3>
              
              {deductionData.length > 0 ? (
                <>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={deductionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={160}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {deductionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<PieTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">మినహాయింపుల వివరాలు</h4>
                      {deductionData.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded mr-2" 
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <span className="text-sm font-medium">
                            ₹{item.value.toLocaleString('en-IN')}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">మొత్తం మినహాయింపులు</h4>
                      <p className="text-2xl font-bold text-green-800">
                        ₹{result.oldRegime.totalDeductions.toLocaleString('en-IN')}
                      </p>
                      <p className="text-sm text-green-700 mt-2">
                        పన్ను ఆదా: ₹{(result.oldRegime.totalDeductions * (result.oldRegime.marginalTaxRate / 100)).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">కొత్త విధానంలో మినహాయింపులు లేవు</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}