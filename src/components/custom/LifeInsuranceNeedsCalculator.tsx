"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  calculateLifeInsuranceNeeds, 
  validateLifeInsuranceInputs,
  type LifeInsuranceNeedsInputs,
  type LifeInsuranceNeedsResult 
} from '@/lib/computations/life-insurance-needs';
import LifeInsuranceNeedsResults from './LifeInsuranceNeedsResults';
import LifeInsuranceNeedsChart from './LifeInsuranceNeedsChart';
import DisclaimerBanner from './DisclaimerBanner';
import TelemetryTracker from './TelemetryTracker';

type LifeInsuranceNeedsFormData = LifeInsuranceNeedsInputs;

export default function LifeInsuranceNeedsCalculator() {
  const [formData, setFormData] = useState<LifeInsuranceNeedsFormData>({
    annualIncome: 800000,
    monthlyExpenses: 30000,
    outstandingDebts: 2000000,
    numberOfDependents: 2,
    existingCoverage: 500000,
    age: 30,
    yearsToRetirement: 30,
    childrenEducationCost: 2000000,
    finalExpenses: 500000
  });

  const [result, setResult] = useState<LifeInsuranceNeedsResult | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleCalculate = () => {
    const validationErrors = validateLifeInsuranceInputs(formData);
    
    if (Object.keys(validationErrors).length === 0) {
      const calculationResult = calculateLifeInsuranceNeeds(formData);
      setResult(calculationResult);
      setErrors({});

      // Track calculator usage
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('telemetry-track', {
          detail: {
            event: 'calc_submit',
            data: {
              calculator: 'life_insurance_needs',
              annualIncome: formData.annualIncome,
              monthlyExpenses: formData.monthlyExpenses,
              outstandingDebts: formData.outstandingDebts,
              numberOfDependents: formData.numberOfDependents,
              existingCoverage: formData.existingCoverage,
              age: formData.age,
              totalCoverageNeeded: calculationResult.totalCoverageNeeded,
              coverageGap: calculationResult.existingCoverageGap,
              timestamp: new Date().toISOString()
            }
          }
        }));
      }
    } else {
      setErrors(validationErrors);
      setResult(null);
    }
  };

  const handleInputChange = (field: keyof LifeInsuranceNeedsFormData, value: string | number) => {
    const numericValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    
    setFormData(prev => ({
      ...prev,
      [field]: numericValue
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="space-y-8">
      <TelemetryTracker />
      
      {/* Main Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            లైఫ్ ఇన్షూరెన్స్ నీడ్స్ కాలిక్యులేటర్
          </CardTitle>
          <p className="text-gray-600">
            మీ కుటుంబ ఆర్థిక పరిస్థితి ఆధారంగా అవసరమైన జీవిత బీమా కవర్ లెక్కించండి
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Annual Income */}
            <div className="space-y-2">
              <Label htmlFor="annualIncome" className="text-sm font-medium text-gray-700">
                వార్షిక ఆదాయం (₹)
              </Label>
              <Input
                id="annualIncome"
                type="number"
                value={formData.annualIncome}
                onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                className={errors.annualIncome ? "border-red-500" : ""}
                min="100000"
                max="100000000"
                step="50000"
              />
              {errors.annualIncome && (
                <p className="text-sm text-red-600">{errors.annualIncome}</p>
              )}
              <p className="text-xs text-gray-500">₹1 లక్ష నుండి ₹10 కోట్ల వరకు</p>
            </div>

            {/* Monthly Expenses */}
            <div className="space-y-2">
              <Label htmlFor="monthlyExpenses" className="text-sm font-medium text-gray-700">
                మాసిక ఖర్చులు (₹)
              </Label>
              <Input
                id="monthlyExpenses"
                type="number"
                value={formData.monthlyExpenses}
                onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                className={errors.monthlyExpenses ? "border-red-500" : ""}
                min="5000"
                max="1000000"
                step="5000"
              />
              {errors.monthlyExpenses && (
                <p className="text-sm text-red-600">{errors.monthlyExpenses}</p>
              )}
              <p className="text-xs text-gray-500">₹5,000 నుండి ₹10 లక్షల వరకు</p>
            </div>

            {/* Outstanding Debts */}
            <div className="space-y-2">
              <Label htmlFor="outstandingDebts" className="text-sm font-medium text-gray-700">
                బాకీ అప్పులు (₹)
              </Label>
              <Input
                id="outstandingDebts"
                type="number"
                value={formData.outstandingDebts}
                onChange={(e) => handleInputChange('outstandingDebts', e.target.value)}
                className={errors.outstandingDebts ? "border-red-500" : ""}
                min="0"
                max="50000000"
                step="100000"
              />
              {errors.outstandingDebts && (
                <p className="text-sm text-red-600">{errors.outstandingDebts}</p>
              )}
              <p className="text-xs text-gray-500">హోమ్ లోన్, కార్ లోన్, క్రెడిట్ కార్డ్</p>
            </div>

            {/* Number of Dependents */}
            <div className="space-y-2">
              <Label htmlFor="numberOfDependents" className="text-sm font-medium text-gray-700">
                ఆధారపడే వారి సంఖ్య
              </Label>
              <Input
                id="numberOfDependents"
                type="number"
                value={formData.numberOfDependents}
                onChange={(e) => handleInputChange('numberOfDependents', e.target.value)}
                className={errors.numberOfDependents ? "border-red-500" : ""}
                min="0"
                max="10"
                step="1"
              />
              {errors.numberOfDependents && (
                <p className="text-sm text-red-600">{errors.numberOfDependents}</p>
              )}
              <p className="text-xs text-gray-500">భార్య, పిల్లలు, తల్లిదండ్రులు</p>
            </div>

            {/* Existing Coverage */}
            <div className="space-y-2">
              <Label htmlFor="existingCoverage" className="text-sm font-medium text-gray-700">
                ప్రస్తుత బీమా కవర్ (₹)
              </Label>
              <Input
                id="existingCoverage"
                type="number"
                value={formData.existingCoverage}
                onChange={(e) => handleInputChange('existingCoverage', e.target.value)}
                className={errors.existingCoverage ? "border-red-500" : ""}
                min="0"
                max="100000000"
                step="100000"
              />
              {errors.existingCoverage && (
                <p className="text-sm text-red-600">{errors.existingCoverage}</p>
              )}
              <p className="text-xs text-gray-500">ప్రస్తుతం ఉన్న జీవిత బీమా</p>
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                వయస్సు (సంవత్సరాలు)
              </Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className={errors.age ? "border-red-500" : ""}
                min="18"
                max="65"
                step="1"
              />
              {errors.age && (
                <p className="text-sm text-red-600">{errors.age}</p>
              )}
              <p className="text-xs text-gray-500">18 నుండి 65 సంవత్సరాల వరకు</p>
            </div>

            {/* Children Education Cost (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="childrenEducationCost" className="text-sm font-medium text-gray-700">
                పిల్లల విద్య ఖర్చు (₹)
              </Label>
              <Input
                id="childrenEducationCost"
                type="number"
                value={formData.childrenEducationCost || 0}
                onChange={(e) => handleInputChange('childrenEducationCost', e.target.value)}
                min="0"
                max="50000000"
                step="100000"
              />
              <p className="text-xs text-gray-500">అంచనా భవిష్యత్ విద్య ఖర్చులు</p>
            </div>

            {/* Years to Retirement (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="yearsToRetirement" className="text-sm font-medium text-gray-700">
                రిటైర్మెంట్ వరకు సంవత్సరాలు
              </Label>
              <Input
                id="yearsToRetirement"
                type="number"
                value={formData.yearsToRetirement || 0}
                onChange={(e) => handleInputChange('yearsToRetirement', e.target.value)}
                min="5"
                max="45"
                step="1"
              />
              <p className="text-xs text-gray-500">ఆటోమేటిక్‌గా లెక్కించబడుతుంది</p>
            </div>

            {/* Final Expenses (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="finalExpenses" className="text-sm font-medium text-gray-700">
                అంత్యక్రియల ఖర్చులు (₹)
              </Label>
              <Input
                id="finalExpenses"
                type="number"
                value={formData.finalExpenses || 500000}
                onChange={(e) => handleInputChange('finalExpenses', e.target.value)}
                min="100000"
                max="2000000"
                step="50000"
              />
              <p className="text-xs text-gray-500">అంత్యక్రియలు, చట్టపరమైన ఖర్చులు</p>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center pt-6">
            <Button 
              onClick={handleCalculate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg"
              size="lg"
            >
              జీవిత బీమా అవసరం లెక్కించండి
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Mandatory Disclaimer before results */}
          <DisclaimerBanner type="calculator-result" />
          
          {/* Result Summary */}
          <LifeInsuranceNeedsResults result={result} />
          
          {/* Chart */}
          <LifeInsuranceNeedsChart result={result} />
          
          {/* Export Buttons - Coming Soon */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>గమనిక:</strong> ఎక్స్‌పోర్ట్ ఫీచర్ త్వరలో అందుబాటులోకి వస్తుంది
            </p>
          </div>
        </div>
      )}

      {/* Educational Content */}
      <div className="space-y-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              జీవిత బీమా అవసరం ఎలా లెక్కించాలి?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              జీవిత బీమా అవసరాన్ని లెక్కించడానికి మూడు ప్రధాన పద్ధతులు ఉపయోగిస్తాం:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">హ్యూమన్ లైఫ్ వాల్యూ</h4>
                <p className="text-sm text-blue-800">
                  మీ భవిష్యత్ ఆదాయాల ప్రస్తుత విలువను లెక్కిస్తుంది. 
                  (ఆదాయం - ఖర్చులు) × సంవత్సరాలు ÷ డిస్కౌంట్ రేట్
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">ఇన్కమ్ మల్టిపుల్</h4>
                <p className="text-sm text-green-800">
                  వార్షిక ఆదాయం × 8-12 రెట్లు. వయస్సు మరియు ఆధారపడే వారి సంఖ్య ఆధారంగా 
                  మార్చబడుతుంది.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">అవసరాల ఆధారంగా</h4>
                <p className="text-sm text-purple-800">
                  అప్పులు + విద్య ఖర్చులు + ఆదాయ రిప్లేస్‌మెంట్ + 
                  ఎమర్జెన్సీ ఫండ్ + అంత్య కార్యాలు
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="text-yellow-800 font-medium">
                గమనిక: ఈ కాలిక్యులేటర్ విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
                వాస్తవ బీమా అవసరాలు మీ వ్యక్తిగత పరిస్థితుల మీద ఆధారపడతాయి. 
                లైసెన్స్ పొందిన ఇన్షూరెన్స్ అడ్వైజర్‌ని సంప్రదించండి.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              తరచుగా అడిగే ప్రశ్నలు
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ఎంత జీవిత బీమా కవర్ తీసుకోవాలి?
                </h4>
                <p className="text-gray-700">
                  సాధారణంగా మీ వార్షిక ఆదాయంలో 10-15 రెట్లు జీవిత బీమా కవర్ తీసుకోవాలి. 
                  అయితే మీ అప్పులు, పిల్లల విద్య, భవిష్యత్ అవసరాలను బట్టి ఇది మారవచ్చు.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ఇప్పటికే ఇన్షూరెన్స్ ఉంటే కూడా అదనపు కవర్ అవసరమా?
                </h4>
                <p className="text-gray-700">
                  మీ ప్రస్తుత కవర్ మీ కుటుంబ అవసరాలకు సరిపోతుందో చూడాలి. 
                  ఆదాయం పెరుగుతున్న కొద్దీ, కొత్త బాధ్యతలు వచ్చిన కొద్దీ అదనపు కవర్ అవసరం అవుతుంది.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  వయస్సు పెరిగిన కొద్దీ కవర్ తగ్గించవచ్చా?
                </h4>
                <p className="text-gray-700">
                  అవును, పిల్లలు స్వతంత్రంగా అయిన తర్వాత, అప్పులు చెల్లించిన తర్వాత కవర్ అవసరం తగ్గుతుంది. 
                  కానీ స్పౌస్ సపోర్ట్, హెల్త్ కేర్ కాస్ట్స్ పరిగణించాలి.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  టర్మ్ ఇన్షూరెన్స్ తీసుకోవాలా లేకా ఎండౌమెంట్?
                </h4>
                <p className="text-gray-700">
                  అధిక కవర్ కోసం టర్మ్ ఇన్షూరెన్స్ మంచిది - తక్కువ ప్రీమియంలకు అధిక రక్షణ. 
                  పెట్టుబడి మరియు రక్షణను వేరు వేరుగా చేయడం మంచిది.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}