"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, FileSpreadsheet, AlertCircle } from "lucide-react";
import {
  Section80CInputs,
  Section80CResult,
  calculateSection80C,
  validateSection80CInputs
} from "@/lib/computations/section-80c-calculator";
import Section80CResults from "./Section80CResults";
import Section80CChart from "./Section80CChart";

const PRESET_SCENARIOS = [
  {
    name: "కొత్త పెట్టుబడిదారు",
    teluguName: "కొత్త పెట్టుబడిదారు",
    description: "మొదటిసారి 80C పెట్టుబడులు చేస్తున్నవారికి",
    data: {
      annualIncome: 800000,
      ppfInvestment: 50000,
      elssInvestment: 25000,
      lifeInsurancePremium: 15000,
      nscInvestment: 0,
      taxSaverFD: 0,
      homeLoanPrincipal: 0,
      tuitionFees: 0
    }
  },
  {
    name: "మధ్యస్థ పెట్టుబడిదారు",
    teluguName: "మధ్యస్థ పెట్టుబడిదారు", 
    description: "సమతుల్య పెట్టుబడి పోర్ట్‌ఫోలియో కోసం",
    data: {
      annualIncome: 1200000,
      ppfInvestment: 80000,
      elssInvestment: 40000,
      lifeInsurancePremium: 20000,
      nscInvestment: 10000,
      taxSaverFD: 0,
      homeLoanPrincipal: 0,
      tuitionFees: 0
    }
  },
  {
    name: "గృహయజమాని",
    teluguName: "గృహయజమాని",
    description: "హోమ్ లోన్ ఉన్నవారికి అనుకూలమైన ప్లాన్",
    data: {
      annualIncome: 1500000,
      ppfInvestment: 50000,
      elssInvestment: 25000,
      lifeInsurancePremium: 25000,
      nscInvestment: 0,
      taxSaverFD: 0,
      homeLoanPrincipal: 50000,
      tuitionFees: 0
    }
  }
];

export default function Section80CCalculator() {
  const [inputs, setInputs] = useState<Section80CInputs>({
    annualIncome: 800000,
    ppfInvestment: 0,
    elssInvestment: 0,
    lifeInsurancePremium: 0,
    nscInvestment: 0,
    taxSaverFD: 0,
    homeLoanPrincipal: 0,
    tuitionFees: 0
  });

  const [result, setResult] = useState<Section80CResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  // Real-time calculation whenever inputs change
  useEffect(() => {
    if (isCalculated) {
      const validation = validateSection80CInputs(inputs);
      if (validation.isValid) {
        const calculationResult = calculateSection80C(inputs);
        setResult(calculationResult);
        setErrors([]);
        
        // Telemetry tracking would go here in production
      } else {
        setErrors(validation.errors);
        setResult(null);
      }
    }
  }, [inputs, isCalculated]);

  const handleInputChange = (field: keyof Section80CInputs, value: string) => {
    const numericValue = value === '' ? 0 : parseInt(value) || 0;
    setInputs(prev => ({
      ...prev,
      [field]: numericValue
    }));
  };

  const handleCalculate = () => {
    const validation = validateSection80CInputs(inputs);
    if (validation.isValid) {
      const calculationResult = calculateSection80C(inputs);
      setResult(calculationResult);
      setErrors([]);
      setIsCalculated(true);
      
      // Telemetry tracking for calculation submission would go here
    } else {
      setErrors(validation.errors);
      setResult(null);
    }
  };

  const handlePresetLoad = (presetData: Section80CInputs) => {
    setInputs(presetData);
    setIsCalculated(false);
    setResult(null);
    setErrors([]);
  };

  const handleReset = () => {
    setInputs({
      annualIncome: 800000,
      ppfInvestment: 0,
      elssInvestment: 0,
      lifeInsurancePremium: 0,
      nscInvestment: 0,
      taxSaverFD: 0,
      homeLoanPrincipal: 0,
      tuitionFees: 0
    });
    setResult(null);
    setErrors([]);
    setIsCalculated(false);
  };

  const handleExportCSV = () => {
    if (!result) return;
    
    const csvData = [
      ['Section 80C Tax Savings Calculation Report', ''],
      ['Generated on', new Date().toLocaleDateString('en-IN')],
      ['', ''],
      ['Input Details', ''],
      ['వార్షిక ఆదాయం', `₹${result.inputs.annualIncome.toLocaleString('en-IN')}`],
      ['', ''],
      ['Section 80C Investments', ''],
      ['PPF పెట్టుబడి', `₹${result.inputs.ppfInvestment.toLocaleString('en-IN')}`],
      ['ELSS పెట్టుబడి', `₹${result.inputs.elssInvestment.toLocaleString('en-IN')}`],
      ['జీవిత బీమా ప్రీమియం', `₹${result.inputs.lifeInsurancePremium.toLocaleString('en-IN')}`],
      ['NSC పెట్టుబడి', `₹${result.inputs.nscInvestment.toLocaleString('en-IN')}`],
      ['Tax Saver FD', `₹${result.inputs.taxSaverFD.toLocaleString('en-IN')}`],
      ['హోమ్ లోన్ ప్రిన్సిపల్', `₹${result.inputs.homeLoanPrincipal.toLocaleString('en-IN')}`],
      ['పిల్లల విద్య ఫీజు', `₹${result.inputs.tuitionFees.toLocaleString('en-IN')}`],
      ['', ''],
      ['Calculation Results', ''],
      ['మొత్తం 80C పెట్టుబడులు', `₹${result.totalInvestments.toLocaleString('en-IN')}`],
      ['అర్హత డిడక్షన్', `₹${result.eligibleDeduction.toLocaleString('en-IN')}`],
      ['మిగిలిన 80C కెపాసిటీ', `₹${result.remaining80CCapacity.toLocaleString('en-IN')}`],
      ['పన్ను ఆదా', `₹${result.taxSavings.toLocaleString('en-IN')}`],
      ['మార్జినల్ టాక్స్ రేట్', `${result.marginalTaxRate}%`],
      ['టాక్స్ బ్రాకెట్', result.taxBracket],
      ['వినియోగ శాతం', `${result.insights.utilizationPercentage.toFixed(1)}%`],
      ['', ''],
      ['Investment Breakdown', ''],
      ...result.investmentBreakdown.map(item => [
        item.teluguName,
        `₹${item.amount.toLocaleString('en-IN')} (${item.percentage.toFixed(1)}%)`
      ]),
      ['', ''],
      ['Recommendations', ''],
      [result.insights.recommendedAction, ''],
      [result.insights.investmentMix, ''],
      ['', ''],
      ['Disclaimer', ''],
      ['ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే.', ''],
      ['ఫలితాలు అంచనాలు మాత్రమే, పన్ను సలహా కాదు.', ''],
      ['పెట్టుబడి నిర్ణయాలకు ఆర్థిక సలహాదారుని సంప్రదించండి.', '']
    ];

    const csvContent = csvData.map(row => 
      row.map(cell => `"${cell}"`).join(',')
    ).join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { 
      type: 'text/csv;charset=utf-8;' 
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `section-80c-tax-plan-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    // Export tracking would go here
  };

// Category definitions available from getSection80CCategories() if needed

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
            <Calculator className="h-5 w-5 text-blue-600" />
            Section 80C డిడక్షన్ కాలిక్యులేటర్
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">పన్ను ఆదా పెట్టుబడులు</Badge>
            <Badge variant="outline">గరిష్టం ₹1.5L డిడక్షన్</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            
            {/* Quick Fill Options */}
            <div>
              <Label className="text-base font-medium text-gray-900 mb-3 block">
                త్వరిత నమూనా ప్లాన్లు
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PRESET_SCENARIOS.map((preset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-3 text-left justify-start"
                    onClick={() => handlePresetLoad(preset.data)}
                  >
                    <div>
                      <div className="font-medium text-sm">{preset.teluguName}</div>
                      <div className="text-xs text-gray-600 mt-1">{preset.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Annual Income */}
            <div>
              <Label htmlFor="annualIncome" className="text-base font-medium text-gray-900 mb-3 block">
                వార్షిక ఆదాయం
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">₹</span>
                <Input
                  id="annualIncome"
                  type="number"
                  placeholder="8,00,000"
                  value={inputs.annualIncome || ''}
                  onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                  className="pl-8 text-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">
                మీ వార్షిక గ్రాస్ సాలరీ లేదా మొత్తం ఆదాయం
              </p>
            </div>

            <Separator />

            {/* Investment Categories */}
            <div>
              <Label className="text-base font-medium text-gray-900 mb-4 block">
                Section 80C పెట్టుబడి వర్గాలు
              </Label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* PPF Investment */}
                <div>
                  <Label htmlFor="ppfInvestment" className="text-sm font-medium text-gray-800 mb-2 block">
                    PPF (పబ్లిక్ ప్రావిడెంట్ ఫండ్)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <Input
                      id="ppfInvestment"
                      type="number"
                      placeholder="1,50,000"
                      value={inputs.ppfInvestment || ''}
                      onChange={(e) => handleInputChange('ppfInvestment', e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">15 సంవత్సరాల లాక్-ఇన్, పన్ను రహిత రిటర్న్</p>
                </div>

                {/* ELSS Investment */}
                <div>
                  <Label htmlFor="elssInvestment" className="text-sm font-medium text-gray-800 mb-2 block">
                    ELSS (ఈక్విటీ లింక్డ్ సేవింగ్స్)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <Input
                      id="elssInvestment"
                      type="number"
                      placeholder="50,000"
                      value={inputs.elssInvestment || ''}
                      onChange={(e) => handleInputChange('elssInvestment', e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">3 సంవత్సరాల లాక్-ఇన్, మార్కెట్ రిస్క్ ఉంది</p>
                </div>

                {/* Life Insurance Premium */}
                <div>
                  <Label htmlFor="lifeInsurancePremium" className="text-sm font-medium text-gray-800 mb-2 block">
                    జీవిత బీమా ప్రీమియం
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <Input
                      id="lifeInsurancePremium"
                      type="number"
                      placeholder="25,000"
                      value={inputs.lifeInsurancePremium || ''}
                      onChange={(e) => handleInputChange('lifeInsurancePremium', e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">బీమా కవర్ + పన్ను ప్రయోజనం</p>
                </div>

                {/* NSC Investment */}
                <div>
                  <Label htmlFor="nscInvestment" className="text-sm font-medium text-gray-800 mb-2 block">
                    NSC (నేషనల్ సేవింగ్స్ సర్టిఫికేట్)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <Input
                      id="nscInvestment"
                      type="number"
                      placeholder="10,000"
                      value={inputs.nscInvestment || ''}
                      onChange={(e) => handleInputChange('nscInvestment', e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">5 సంవత్సరాల లాక్-ఇన్, స్థిర వడ్డీ</p>
                </div>

                {/* Tax Saver FD */}
                <div>
                  <Label htmlFor="taxSaverFD" className="text-sm font-medium text-gray-800 mb-2 block">
                    Tax Saver FD
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <Input
                      id="taxSaverFD"
                      type="number"
                      placeholder="10,000"
                      value={inputs.taxSaverFD || ''}
                      onChange={(e) => handleInputChange('taxSaverFD', e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">5 సంవత్సరాల లాక్-ఇన్, బ్యాంక్ వడ్డీ రేటు</p>
                </div>

                {/* Home Loan Principal */}
                <div>
                  <Label htmlFor="homeLoanPrincipal" className="text-sm font-medium text-gray-800 mb-2 block">
                    హోమ్ లోన్ ప్రిన్సిపల్
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <Input
                      id="homeLoanPrincipal"
                      type="number"
                      placeholder="75,000"
                      value={inputs.homeLoanPrincipal || ''}
                      onChange={(e) => handleInputChange('homeLoanPrincipal', e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">గృహ రుణ ప్రధాన మొత్తం చెల్లింపు</p>
                </div>

                {/* Tuition Fees */}
                <div>
                  <Label htmlFor="tuitionFees" className="text-sm font-medium text-gray-800 mb-2 block">
                    పిల్లల విద్య ఫీజు
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <Input
                      id="tuitionFees"
                      type="number"
                      placeholder="20,000"
                      value={inputs.tuitionFees || ''}
                      onChange={(e) => handleInputChange('tuitionFees', e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">పిల్లల ఉన్నత విద్య ట్యూషన్ ఖర్చులు</p>
                </div>
              </div>
            </div>

            {/* Error Display */}
            {errors.length > 0 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">దయచేసి ఈ లోపాలను సరిచేయండి:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                onClick={handleCalculate}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Section 80C లెక్కించండి
              </Button>
              
              <Button 
                onClick={handleReset}
                variant="outline"
                size="lg"
              >
                రీసెట్ చేయండి
              </Button>
              
              {result && (
                <Button 
                  onClick={handleExportCSV}
                  variant="outline"
                  size="lg"
                  className="text-green-600 border-green-200 hover:bg-green-50"
                >
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  CSV ఎక్స్‌పోర్ట్
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results and Charts */}
      {result && (
        <>
          <Section80CResults result={result} />
          <Section80CChart result={result} />
        </>
      )}
    </div>
  );
}