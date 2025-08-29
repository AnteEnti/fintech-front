"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, TrendingDown, TrendingUp, Download } from "lucide-react";
import { 
  calculateIncomeTax, 
  validateIncomeTaxInputs, 
  TaxRegime, 
  MetroCity,
  IncomeTaxInputs, 
  IncomeTaxResult,
  getSuggestedValues
} from "@/lib/computations/income-tax-calculator";
import IncomeTaxResults from "./IncomeTaxResults";
import IncomeTaxChart from "./IncomeTaxChart";
import TelemetryTracker from "./TelemetryTracker";

export default function IncomeTaxCalculator() {
  const [annualIncome, setAnnualIncome] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [hraReceived, setHraReceived] = useState<string>('');
  const [rentPaid, setRentPaid] = useState<string>('');
  const [metroCity, setMetroCity] = useState<MetroCity>('metro');
  const [section80C, setSection80C] = useState<string>('');
  const [section80D, setSection80D] = useState<string>('');
  const [otherDeductions, setOtherDeductions] = useState<string>('');
  const [regime, setRegime] = useState<TaxRegime>('old');
  const [result, setResult] = useState<IncomeTaxResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  // Load suggested values
  const loadSuggestedValues = (level: 'entry' | 'mid' | 'senior') => {
    const suggested = getSuggestedValues(level);
    setAnnualIncome(suggested.annualIncome?.toString() || '');
    setAge(suggested.age?.toString() || '');
    setHraReceived(suggested.hraReceived?.toString() || '');
    setRentPaid(suggested.rentPaid?.toString() || '');
    setSection80C(suggested.section80C?.toString() || '');
    setSection80D(suggested.section80D?.toString() || '');
    setOtherDeductions(suggested.otherDeductions?.toString() || '');
    setResult(null);
    setErrors([]);
    setIsCalculated(false);
  };

  const calculateResults = useCallback(() => {
    try {
      const inputs: IncomeTaxInputs = {
        annualIncome: parseFloat(annualIncome) || 0,
        age: parseInt(age) || 0,
        hraReceived: parseFloat(hraReceived) || 0,
        rentPaid: parseFloat(rentPaid) || 0,
        metroCity,
        section80C: parseFloat(section80C) || 0,
        section80D: parseFloat(section80D) || 0,
        otherDeductions: parseFloat(otherDeductions) || 0,
        regime
      };

      const validation = validateIncomeTaxInputs(inputs);
      
      if (!validation.isValid) {
        setErrors(validation.errors);
        setResult(null);
        setIsCalculated(false);
        return;
      }

      const calculationResult = calculateIncomeTax(inputs);
      setResult(calculationResult);
      setErrors([]);
      setIsCalculated(true);

    } catch (error) {
      console.error('Income tax calculation error:', error);
      setErrors(['లెక్కింపులో లోపం. దయచేసి సరైన విలువలు నమోదు చేయండి.']);
      setResult(null);
      setIsCalculated(false);
    }
  }, [annualIncome, age, hraReceived, rentPaid, metroCity, section80C, section80D, otherDeductions, regime]);

  // Real-time calculation when inputs change
  useEffect(() => {
    if (annualIncome && age) {
      calculateResults();
    } else {
      setResult(null);
      setErrors([]);
      setIsCalculated(false);
    }
  }, [annualIncome, age, hraReceived, rentPaid, metroCity, section80C, section80D, otherDeductions, regime, calculateResults]);

  const handleCalculateClick = () => {
    calculateResults();
    
    // Track telemetry event for explicit calculation
    if (result) {
      const telemetryData = {
        annualIncome: parseFloat(annualIncome),
        age: parseInt(age),
        selectedRegime: regime,
        recommendedRegime: result.recommendedRegime,
        oldRegimeTax: result.oldRegime.totalTax,
        newRegimeTax: result.newRegime.totalTax,
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
          <CardTitle className="text-xl font-semibold text-gray-900">
            ఆదాయపు పన్ను లెక్కింపు
          </CardTitle>
          <p className="text-gray-600">
            మీ వివరాలను నమోదు చేసి పన్ను లెక్కించండి
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Quick Fill Buttons */}
          <div className="flex flex-wrap gap-2 p-4 bg-blue-50 rounded-lg">
            <span className="text-sm font-medium text-blue-900 mr-2">క్విక్ ఫిల్:</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadSuggestedValues('entry')}
              className="text-xs"
            >
              ఎంట్రీ లెవల్ (₹6L)
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadSuggestedValues('mid')}
              className="text-xs"
            >
              మిడ్ లెవల్ (₹12L)
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadSuggestedValues('senior')}
              className="text-xs"
            >
              సీనియర్ లెవల్ (₹25L)
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">ప్రాథమిక వివరాలు</h3>
              
              <div>
                <Label htmlFor="annualIncome">వార్షిక ఆదాయం (₹)</Label>
                <Input
                  id="annualIncome"
                  type="number"
                  placeholder="10,00,000"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="age">వయస్సు</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="30"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="regime">పన్ను విధానం</Label>
                <Select value={regime} onValueChange={(value: TaxRegime) => setRegime(value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="పన్ను విధానం ఎంచుకోండి" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="old">పాత విధానం (మినహాయింపులతో)</SelectItem>
                    <SelectItem value="new">కొత్త విధానం (తక్కువ రేట్లు)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* HRA Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">HRA వివరాలు</h3>
              
              <div>
                <Label htmlFor="hraReceived">HRA పొందిన మొత్తం (₹)</Label>
                <Input
                  id="hraReceived"
                  type="number"
                  placeholder="2,00,000"
                  value={hraReceived}
                  onChange={(e) => setHraReceived(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="rentPaid">చెల్లించిన అద్దె (₹)</Label>
                <Input
                  id="rentPaid"
                  type="number"
                  placeholder="3,00,000"
                  value={rentPaid}
                  onChange={(e) => setRentPaid(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="metroCity">నగర రకం</Label>
                <Select value={metroCity} onValueChange={(value: MetroCity) => setMetroCity(value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="నగర రకం ఎంచుకోండి" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metro">మెట్రో సిటీ (50% HRA)</SelectItem>
                    <SelectItem value="non-metro">నాన్-మెట్రో (40% HRA)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Deductions (for old regime) */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                మినహాయింపులు 
                {regime === 'new' && (
                  <span className="text-sm text-orange-600 ml-2">
                    (కొత్త విధానంలో లేవు)
                  </span>
                )}
              </h3>
              
              <div>
                <Label htmlFor="section80C">సెక్షన్ 80C పెట్టుబడులు (₹)</Label>
                <Input
                  id="section80C"
                  type="number"
                  placeholder="1,50,000"
                  value={section80C}
                  onChange={(e) => setSection80C(e.target.value)}
                  className="mt-1"
                  disabled={regime === 'new'}
                />
                <p className="text-xs text-gray-500 mt-1">
                  PPF, ELSS, జీవిత బీమా ప్రీమియం (గరిష్టం ₹1.5L)
                </p>
              </div>

              <div>
                <Label htmlFor="section80D">సెక్షన్ 80D హెల్త్ ప్రీమియం (₹)</Label>
                <Input
                  id="section80D"
                  type="number"
                  placeholder="25,000"
                  value={section80D}
                  onChange={(e) => setSection80D(e.target.value)}
                  className="mt-1"
                  disabled={regime === 'new'}
                />
                <p className="text-xs text-gray-500 mt-1">
                  హెల్త్ ఇన్షూరెన్స్ ప్రీమియం (గరిష్టం ₹25K)
                </p>
              </div>

              <div>
                <Label htmlFor="otherDeductions">ఇతర మినహాయింపులు (₹)</Label>
                <Input
                  id="otherDeductions"
                  type="number"
                  placeholder="50,000"
                  value={otherDeductions}
                  onChange={(e) => setOtherDeductions(e.target.value)}
                  className="mt-1"
                  disabled={regime === 'new'}
                />
                <p className="text-xs text-gray-500 mt-1">
                  80E (విద్యా రుణ వడ్డీ), 80G (దానాలు) మొదలైనవి
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex items-end">
              <Button 
                onClick={handleCalculateClick}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700"
              >
                పన్ను లెక్కించండి
              </Button>
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
        </CardContent>
      </Card>

      {/* Results Display */}
      {isCalculated && result && (
        <>
          <IncomeTaxResults result={result} />
          <IncomeTaxChart result={result} />
          
          {/* Regime Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                విధానాల పోలిక
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Old Regime */}
                <div className={`p-4 rounded-lg border-2 ${
                  result.recommendedRegime === 'old' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">పాత విధానం</h3>
                    {result.recommendedRegime === 'old' && (
                      <TrendingDown className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.oldRegime.totalTax.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {result.oldRegime.effectiveTaxRate.toFixed(1)}% effective rate
                  </p>
                </div>

                {/* New Regime */}
                <div className={`p-4 rounded-lg border-2 ${
                  result.recommendedRegime === 'new' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">కొత్త విధానం</h3>
                    {result.recommendedRegime === 'new' && (
                      <TrendingDown className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.newRegime.totalTax.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {result.newRegime.effectiveTaxRate.toFixed(1)}% effective rate
                  </p>
                </div>

                {/* Savings */}
                <div className="p-4 rounded-lg border-2 border-blue-200 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">పన్ను ఆదా</h3>
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-blue-900">
                    ₹{result.taxSavings.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-blue-600">
                    {result.comparison.percentageSaving.toFixed(1)}% saving
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tax Planning Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                పన్ను ప్లానింగ్ సలహాలు
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">సిఫారసు విధానం</h4>
                <p className="text-gray-700">
                  {result.recommendedRegime === 'old' 
                    ? 'మీకు పాత విధానం మంచిది. మినహాయింపులను పూర్తిగా వాడుకోండి.'
                    : 'మీకు కొత్త విధానం మంచిది. తక్కువ రేట్లు మీకు అనుకూలంగా ఉన్నాయి.'
                  }
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">ఆప్టిమైజేషన్ టిప్స్</h4>
                <ul className="space-y-1">
                  {result.insights.optimizationTips.map((tip, index) => (
                    <li key={index} className="text-gray-700">• {tip}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                రిపోర్ట్ ఎక్స్‌పోర్ట్ చేయండి
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
                  onClick={() => generateTaxReport(result)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="h-4 w-4" />
                  పూర్తి రిపోర్ట్
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                మీ పన్ను లెక్కింపులను CSV, PNG లేదా వివరణాత్మక రిపోర్ట్‌గా దిగుమతి చేసుకోండి
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );

  // Export to CSV function
  function exportToCSV(result: IncomeTaxResult) {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `Income-Tax-Calculation-${timestamp}.csv`;

    let csvContent = "వివరాలు,పాత విధానం,కొత్త విధానం,యూనిట్\n";
    
    // Input parameters
    csvContent += `వార్షిక ఆదాయం,${result.oldRegime.grossTaxableIncome},${result.newRegime.grossTaxableIncome},రూపాయలు\n`;
    csvContent += `మొత్తం మినహాయింపులు,${result.oldRegime.totalDeductions},${result.newRegime.totalDeductions},రూపాయలు\n`;
    csvContent += `పన్నుకు లోబడే ఆదాయం,${result.oldRegime.taxableIncome},${result.newRegime.taxableIncome},రూపాయలు\n`;
    csvContent += `మొత్తం పన్ను,${result.oldRegime.totalTax},${result.newRegime.totalTax},రూపాయలు\n`;
    csvContent += `ఎఫెక్టివ్ రేట్,${result.oldRegime.effectiveTaxRate.toFixed(2)},${result.newRegime.effectiveTaxRate.toFixed(2)},శాతం\n`;
    csvContent += `\n`;
    
    // Deductions breakdown
    csvContent += `మినహాయింపుల వివరాలు,పాత విధానం,కొత్త విధానం,యూనిట్\n`;
    csvContent += `స్టాండర్డ్ డిడక్షన్,${result.oldRegime.standardDeduction},${result.newRegime.standardDeduction},రూపాయలు\n`;
    csvContent += `HRA మినహాయింపు,${result.oldRegime.hraExemption.exemptAmount},${result.newRegime.hraExemption.exemptAmount},రూపాయలు\n`;
    csvContent += `సెక్షన్ 80C,${result.oldRegime.section80CDeduction},${result.newRegime.section80CDeduction},రూపాయలు\n`;
    csvContent += `సెక్షన్ 80D,${result.oldRegime.section80DDeduction},${result.newRegime.section80DDeduction},రూపాయలు\n`;
    csvContent += `\n`;
    
    // Recommendation
    csvContent += `సిఫారసు విధానం,${result.recommendedRegime === 'old' ? 'పాత విధానం' : 'కొత్త విధానం'},,\n`;
    csvContent += `పన్ను ఆదా,${result.taxSavings},,రూపాయలు\n`;

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
        data: { type: 'csv', calculator: 'income-tax' },
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

  // Generate comprehensive tax report
  function generateTaxReport(result: IncomeTaxResult) {
    const reportContent = `
INCOME TAX CALCULATION REPORT
Generated on: ${new Date().toLocaleDateString('te-IN')}

RECOMMENDED REGIME: ${result.recommendedRegime === 'old' ? 'పాత విధానం' : 'కొత్త విధానం'}
TAX SAVINGS: ₹${result.taxSavings.toLocaleString('en-IN')}

OLD REGIME CALCULATION:
- మొత్తం ఆదాయం: ₹${result.oldRegime.grossTaxableIncome.toLocaleString('en-IN')}
- మినహాయింపులు: ₹${result.oldRegime.totalDeductions.toLocaleString('en-IN')}
- పన్నుకు లోబడే ఆదాయం: ₹${result.oldRegime.taxableIncome.toLocaleString('en-IN')}
- మొత్తం పన్ను: ₹${result.oldRegime.totalTax.toLocaleString('en-IN')}

NEW REGIME CALCULATION:
- మొత్తం ఆదాయం: ₹${result.newRegime.grossTaxableIncome.toLocaleString('en-IN')}
- మినహాయింపులు: ₹${result.newRegime.totalDeductions.toLocaleString('en-IN')}
- పన్నుకు లోబడే ఆదాయం: ₹${result.newRegime.taxableIncome.toLocaleString('en-IN')}
- మొత్తం పన్ను: ₹${result.newRegime.totalTax.toLocaleString('en-IN')}

OPTIMIZATION TIPS:
${result.insights.optimizationTips.map(tip => `- ${tip}`).join('\n')}

Disclaimer: ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే.
`;

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Income-Tax-Report-${new Date().toISOString().slice(0, 10)}.txt`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track export event
    window.dispatchEvent(new CustomEvent('telemetry-track', {
      detail: {
        event: 'export_download',
        data: { type: 'report', calculator: 'income-tax' },
        timestamp: new Date().toISOString()
      }
    }));
  }
}