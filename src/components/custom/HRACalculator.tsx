"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, Home, Calculator, TrendingUp, Download } from "lucide-react";
import { 
  calculateHRA, 
  validateHRAInputs, 
  CityType,
  HRAInputs, 
  HRAResult,
  getHRASuggestedValues,
  getMonthlyBreakdown
} from "@/lib/computations/hra-calculator";
import HRAResults from "./HRAResults";
import HRAChart from "./HRAChart";
import TelemetryTracker from "./TelemetryTracker";

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState<string>('');
  const [hraReceived, setHraReceived] = useState<string>('');
  const [rentPaid, setRentPaid] = useState<string>('');
  const [cityType, setCityType] = useState<CityType>('metro');
  const [result, setResult] = useState<HRAResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  // Load suggested values
  const loadSuggestedValues = (scenario: 'entry' | 'mid' | 'senior') => {
    const suggested = getHRASuggestedValues(scenario);
    setBasicSalary(suggested.basicSalary?.toString() || '');
    setHraReceived(suggested.hraReceived?.toString() || '');
    setRentPaid(suggested.rentPaid?.toString() || '');
    setCityType(suggested.cityType || 'metro');
    setResult(null);
    setErrors([]);
    setIsCalculated(false);
  };

  const calculateResults = useCallback(() => {
    try {
      const inputs: HRAInputs = {
        basicSalary: parseFloat(basicSalary) || 0,
        hraReceived: parseFloat(hraReceived) || 0,
        rentPaid: parseFloat(rentPaid) || 0,
        cityType
      };

      const validation = validateHRAInputs(inputs);
      
      if (!validation.isValid) {
        setErrors(validation.errors);
        setResult(null);
        setIsCalculated(false);
        return;
      }

      const calculationResult = calculateHRA(inputs);
      setResult(calculationResult);
      setErrors([]);
      setIsCalculated(true);

    } catch (error) {
      console.error('HRA calculation error:', error);
      setErrors(['లెక్కింపులో లోపం. దయచేసి సరైన విలువలు నమోదు చేయండి.']);
      setResult(null);
      setIsCalculated(false);
    }
  }, [basicSalary, hraReceived, rentPaid, cityType]);

  // Real-time calculation when inputs change
  useEffect(() => {
    if (basicSalary && hraReceived) {
      calculateResults();
    } else {
      setResult(null);
      setErrors([]);
      setIsCalculated(false);
    }
  }, [basicSalary, hraReceived, rentPaid, cityType, calculateResults]);

  const handleCalculateClick = () => {
    calculateResults();
    
    // Track telemetry event for explicit calculation
    if (result) {
      const telemetryData = {
        basicSalary: parseFloat(basicSalary),
        hraReceived: parseFloat(hraReceived),
        rentPaid: parseFloat(rentPaid),
        cityType,
        hraExemption: result.hraExemption,
        taxSavings: result.taxSavings
      };

      // Track the calculation event
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'calc_submit',
          data: telemetryData,
          timestamp: new Date().toISOString()
        }
      }));
    }
  };

  return (
    <div className="space-y-6">
      <TelemetryTracker trackPageView={false} />
      
      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Home className="h-5 w-5 text-blue-600" />
            HRA మినహాయింపు లెక్కింపు
          </CardTitle>
          <p className="text-gray-600">
            మీ HRA వివరాలను నమోదు చేసి పన్ను మినహాయింపు లెక్కించండి
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Quick Fill Buttons */}
          <div className="flex flex-wrap gap-2 p-4 bg-green-50 rounded-lg">
            <span className="text-sm font-medium text-green-900 mr-2">క్విక్ ఫిల్:</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadSuggestedValues('entry')}
              className="text-xs"
            >
              ఎంట్రీ లెవల్ (₹4L)
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadSuggestedValues('mid')}
              className="text-xs"
            >
              మిడ్ లెవల్ (₹8L)
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadSuggestedValues('senior')}
              className="text-xs"
            >
              సీనియర్ లెవల్ (₹15L)
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Salary Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">జీతం వివరాలు</h3>
              
              <div>
                <Label htmlFor="basicSalary">వార్షిక ప్రాథమిక జీతం (₹)</Label>
                <Input
                  id="basicSalary"
                  type="number"
                  placeholder="8,00,000"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  DA, ప్రత్యేక అలవెన్స్‌లు కలపకుండా ప్రాథమిక జీతం మాత్రమే
                </p>
              </div>

              <div>
                <Label htmlFor="hraReceived">వార్షిక HRA పొందిన మొత్తం (₹)</Label>
                <Input
                  id="hraReceived"
                  type="number"
                  placeholder="2,40,000"
                  value={hraReceived}
                  onChange={(e) => setHraReceived(e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  కంపెనీ నుండి HRA గా వచ్చిన మొత్తం సంవత్సరం
                </p>
              </div>
            </div>

            {/* Rent Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">అద్దె వివరాలు</h3>
              
              <div>
                <Label htmlFor="rentPaid">మాసిక అద్దె చెల్లింపు (₹)</Label>
                <Input
                  id="rentPaid"
                  type="number"
                  placeholder="25,000"
                  value={rentPaid}
                  onChange={(e) => setRentPaid(e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  ప్రతి నెల చెల్లించే అద్దె మొత్తం
                </p>
              </div>

              <div>
                <Label htmlFor="cityType">నగర రకం</Label>
                <Select value={cityType} onValueChange={(value: CityType) => setCityType(value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="నగర రకం ఎంచుకోండి" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metro">మెట్రో సిటీ (50% లిమిట్)</SelectItem>
                    <SelectItem value="non-metro">నాన్-మెట్రో (40% లిమిట్)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500 mt-1">
                  ముంబయి, దిల్లీ, కోల్‌కతా, చెన్నై = మెట్రో
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button 
                  onClick={handleCalculateClick}
                  className="w-full h-12 bg-green-600 hover:bg-green-700"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  HRA మినహాయింపు లెక్కించండి
                </Button>
              </div>
            </div>
          </div>

          {/* Display Errors */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-red-800 mb-2">దయచేసి ఈ లోపాలను సరిదిద్దండి:</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Quick Summary for Preview */}
          {isCalculated && result && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">
                  ₹{result.hraExemption.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-blue-600">HRA మినహాయింపు</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-900">
                  ₹{result.taxSavings.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-green-600">వార్షిక పన్ను ఆదా</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-900">
                  ₹{result.taxableHRA.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-orange-600">పన్నుకు లోబడే HRA</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Display */}
      {isCalculated && result && (
        <>
          <HRAResults result={result} />
          <HRAChart result={result} />
          
          {/* Monthly Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                మాసిక వివరణ
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const monthly = getMonthlyBreakdown(result);
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">మాసిక జీతం</h4>
                      <p className="text-xl font-bold text-blue-800">
                        ₹{monthly.monthlySalary.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">మాసిక HRA</h4>
                      <p className="text-xl font-bold text-green-800">
                        ₹{monthly.monthlyHRA.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-medium text-orange-900 mb-2">మాసిక అద్దె</h4>
                      <p className="text-xl font-bold text-orange-800">
                        ₹{monthly.monthlyRent.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">మాసిక మినహాయింపు</h4>
                      <p className="text-xl font-bold text-purple-800">
                        ₹{monthly.monthlyExemption.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-medium text-red-900 mb-2">మాసిక పన్నుకు లోబడే HRA</h4>
                      <p className="text-xl font-bold text-red-800">
                        ₹{monthly.monthlyTaxableHRA.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-medium text-indigo-900 mb-2">మాసిక పన్ను ఆదా</h4>
                      <p className="text-xl font-bold text-indigo-800">
                        ₹{monthly.monthlyTaxSavings.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Optimization Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                HRA ఆప్టిమైజేషన్ సలహాలు
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">నగర ప్రయోజనం</h4>
                <p className="text-gray-700">{result.insights.cityBenefit}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">వాడుక టిప్స్</h4>
                <ul className="space-y-1">
                  {result.insights.utilizationTips.map((tip, index) => (
                    <li key={index} className="text-gray-700">• {tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">కాంప్లయన్స్ నోట్స్</h4>
                <ul className="space-y-1">
                  {result.insights.complianceNotes.map((note, index) => (
                    <li key={index} className="text-gray-700">• {note}</li>
                  ))}
                </ul>
              </div>

              {result.optimalRent.currentUtilization < 90 && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2">ఆప్టిమైజేషన్ అవకాశం</h4>
                  <p className="text-yellow-800 mb-2">{result.optimalRent.recommendedAction}</p>
                  <p className="text-sm text-yellow-700">
                    గరిష్ట అద్దె పూర్తి మినహాయింపుకు: ₹{result.optimalRent.maxRentForFullExemption.toLocaleString('en-IN')}/నెల
                  </p>
                  {result.optimalRent.potentialSavings > 0 && (
                    <p className="text-sm text-yellow-700">
                      అదనపు పన్ను ఆదా అవకాశం: ₹{result.optimalRent.potentialSavings.toLocaleString('en-IN')}/సంవత్సరం
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                HRA రిపోర్ట్ ఎక్స్‌పోర్ట్ చేయండి
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => exportToCSV(result)}
                  variant="outline" 
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  CSV డౌన్‌లోడ్
                </Button>
                <Button 
                  onClick={() => exportToPNG()}
                  variant="outline" 
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  చార్ట్ PNG
                </Button>
                <Button 
                  onClick={() => generateHRAReport(result)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <Download className="h-4 w-4" />
                  పూర్తి HRA రిపోర్ట్
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                మీ HRA లెక్కింపులను CSV, PNG లేదా వివరణాత్మక రిపోర్ట్‌గా దిగుమతి చేసుకోండి
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );

  // Export to CSV function
  function exportToCSV(result: HRAResult) {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `HRA-Calculation-${timestamp}.csv`;

    let csvContent = "వివరాలు,మొత్తం,యూనిట్\n";
    
    // Input parameters
    csvContent += `వార్షిక ప్రాథమిక జీతం,${result.inputs.basicSalary},రూపాయలు\n`;
    csvContent += `వార్షిక HRA పొందింది,${result.inputs.hraReceived},రూపాయలు\n`;
    csvContent += `మాసిక అద్దె చెల్లింపు,${result.inputs.rentPaid},రూపాయలు\n`;
    csvContent += `నగర రకం,${result.inputs.cityType === 'metro' ? 'మెట్రో' : 'నాన్-మెట్రో'},\n`;
    csvContent += `\n`;
    
    // Calculation breakdown
    csvContent += `HRA మినహాయింపు లెక్కింపు,,\n`;
    csvContent += `వాస్తవ HRA,${result.exemptionCalculation.actualHRA},రూపాయలు\n`;
    csvContent += `అద్దె - 10% జీతం,${result.exemptionCalculation.rentMinus10Percent},రూపాయలు\n`;
    csvContent += `${result.inputs.cityType === 'metro' ? '50%' : '40%'} జీతం,${result.exemptionCalculation.cityPercentage},రూపాయలు\n`;
    csvContent += `\n`;
    
    // Results
    csvContent += `ఫలితాలు,,\n`;
    csvContent += `HRA మినహాయింపు,${result.hraExemption},రూపాయలు\n`;
    csvContent += `పన్నుకు లోబడే HRA,${result.taxableHRA},రూపాయలు\n`;
    csvContent += `వార్షిక పన్ను ఆదా,${result.taxSavings},రూపాయలు\n`;
    csvContent += `HRA వినియోగం,${result.optimalRent.currentUtilization.toFixed(1)},శాతం\n`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track export event
    window.dispatchEvent(new CustomEvent('telemetry-track', {
      detail: {
        event: 'export_download',
        data: { type: 'csv', calculator: 'hra' },
        timestamp: new Date().toISOString()
      }
    }));
  }

  // Export chart as PNG
  function exportToPNG() {
    const charts = document.querySelectorAll('.recharts-wrapper');
    if (charts.length > 0) {
      // This is a simplified version - in production, you'd use a library like html2canvas
      alert('చార్ట్ PNG ఎక్స్‌పోర్ట్ ఫీచర్ అభివృద్ధి దశలో ఉంది');
    }
  }

  // Generate comprehensive HRA report
  function generateHRAReport(result: HRAResult) {
    const reportContent = `
HRA CALCULATION REPORT
Generated on: ${new Date().toLocaleDateString('te-IN')}

INPUT DETAILS:
- వార్షిక ప్రాథమిక జీతం: ₹${result.inputs.basicSalary.toLocaleString('en-IN')}
- వార్షిక HRA పొందింది: ₹${result.inputs.hraReceived.toLocaleString('en-IN')}
- మాసిక అద్దె: ₹${result.inputs.rentPaid.toLocaleString('en-IN')}
- నగర రకం: ${result.inputs.cityType === 'metro' ? 'మెట్రో (50%)' : 'నాన్-మెట్రో (40%)'}

HRA EXEMPTION CALCULATION (కనిష్ట మూడింటిలో):
1. వాస్తవ HRA: ₹${result.exemptionCalculation.actualHRA.toLocaleString('en-IN')}
2. అద్దె - 10% జీతం: ₹${result.exemptionCalculation.rentMinus10Percent.toLocaleString('en-IN')}
3. ${result.inputs.cityType === 'metro' ? '50%' : '40%'} జీతం: ₹${result.exemptionCalculation.cityPercentage.toLocaleString('en-IN')}

RESULTS:
- HRA మినహాయింపు: ₹${result.hraExemption.toLocaleString('en-IN')}
- పన్నుకు లోబడే HRA: ₹${result.taxableHRA.toLocaleString('en-IN')}
- వార్షిక పన్ను ఆదా: ₹${result.taxSavings.toLocaleString('en-IN')}
- HRA వినియోగం: ${result.optimalRent.currentUtilization.toFixed(1)}%

OPTIMIZATION INSIGHTS:
${result.insights.cityBenefit}

UTILIZATION TIPS:
${result.insights.utilizationTips.map(tip => `- ${tip}`).join('\n')}

COMPLIANCE NOTES:
${result.insights.complianceNotes.map(note => `- ${note}`).join('\n')}

Disclaimer: ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే.
`;

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `HRA-Report-${new Date().toISOString().slice(0, 10)}.txt`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track export event
    window.dispatchEvent(new CustomEvent('telemetry-track', {
      detail: {
        event: 'export_download',
        data: { type: 'report', calculator: 'hra' },
        timestamp: new Date().toISOString()
      }
    }));
  }
}