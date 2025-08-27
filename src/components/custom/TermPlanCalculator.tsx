"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  calculateTermPlanPremium, 
  validateTermPlanInputs,
  type TermPlanInputs,
  type TermPlanResult 
} from '@/lib/computations/term-plan-calculator';
import TermPlanResults from './TermPlanResults';
import TermPlanChart from './TermPlanChart';
import TelemetryTracker from './TelemetryTracker';

type TermPlanFormData = TermPlanInputs & {
  annualIncome: number;
};

export default function TermPlanCalculator() {
  const [formData, setFormData] = useState<TermPlanFormData>({
    age: 30,
    coverageAmount: 1000000,
    policyTerm: 20,
    gender: 'male',
    smokingStatus: 'non-smoker',
    annualIncome: 800000
  });
  
  const [result, setResult] = useState<TermPlanResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof TermPlanFormData, value: string | number) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    
    // Clear previous errors for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
    
    // Auto-calculate if all required fields are filled
    if (updatedData.age && updatedData.coverageAmount && updatedData.policyTerm && 
        updatedData.gender && updatedData.smokingStatus) {
      calculatePremium(updatedData);
    }
  };

  const calculatePremium = (data: TermPlanFormData) => {
    const validationErrors = validateTermPlanInputs(data);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const calculationResult = calculateTermPlanPremium(data);
      setResult(calculationResult);
      setErrors({});
      
      // Track calculation event
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (action: string, name: string, params: Record<string, unknown>) => void }).gtag;
        gtag('event', 'calc_submit', {
          event_category: 'Term Plan Calculator',
          event_label: 'Premium Calculated',
          value: Math.round(calculationResult.annualPremium)
        });
      }
    } catch (error) {
      console.error('Term plan calculation error:', error);
      setErrors({ general: 'గణన లోపం. దయచేసి మళ్ళీ ప్రయత్నించండి.' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculatePremium(formData);
  };

  return (
    <>
      <TelemetryTracker trackPageView={true} />
      
      <div className="space-y-8">

        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              టర్మ్ ప్లాన్ వివరాలు
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Age and Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-base font-medium text-gray-700">
                    వయస్సు (సంవత్సరాలు)
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min={18}
                    max={65}
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                    className="text-base"
                    placeholder="ఉదా: 30"
                  />
                  {errors.age && (
                    <p className="text-sm text-red-600">{errors.age}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-base font-medium text-gray-700">
                    లింగం
                  </Label>
                  <Select value={formData.gender} onValueChange={(value: 'male' | 'female') => handleInputChange('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="లింగాన్ని ఎంచుకోండి" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">పురుషుడు</SelectItem>
                      <SelectItem value="female">మహిళ</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <p className="text-sm text-red-600">{errors.gender}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Coverage Amount and Policy Term */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="coverageAmount" className="text-base font-medium text-gray-700">
                    కవర్ మొత్తం (₹)
                  </Label>
                  <Input
                    id="coverageAmount"
                    type="number"
                    min={500000}
                    max={50000000}
                    step={100000}
                    value={formData.coverageAmount}
                    onChange={(e) => handleInputChange('coverageAmount', parseInt(e.target.value) || 0)}
                    className="text-base"
                    placeholder="ఉదా: 1000000"
                  />
                  {errors.coverageAmount && (
                    <p className="text-sm text-red-600">{errors.coverageAmount}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    కనీసం ₹5 లక్షలు, గరిష్టంగా ₹5 కోట్లు
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="policyTerm" className="text-base font-medium text-gray-700">
                    పాలసీ టర్మ్ (సంవత్సరాలు)
                  </Label>
                  <Select value={formData.policyTerm.toString()} onValueChange={(value) => handleInputChange('policyTerm', parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="పాలసీ టర్మ్ ఎంచుకోండి" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 సంవత్సరాలు</SelectItem>
                      <SelectItem value="15">15 సంవత్సరాలు</SelectItem>
                      <SelectItem value="20">20 సంవత్సరాలు</SelectItem>
                      <SelectItem value="25">25 సంవత్సరాలు</SelectItem>
                      <SelectItem value="30">30 సంవత్సరాలు</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.policyTerm && (
                    <p className="text-sm text-red-600">{errors.policyTerm}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Smoking Status and Annual Income */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smokingStatus" className="text-base font-medium text-gray-700">
                    స్మోకింగ్ స్టేటస్
                  </Label>
                  <Select value={formData.smokingStatus} onValueChange={(value: 'smoker' | 'non-smoker') => handleInputChange('smokingStatus', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="స్మోకింగ్ స్టేటస్ ఎంచుకోండి" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="non-smoker">నాన్-స్మోకర్</SelectItem>
                      <SelectItem value="smoker">స్మోకర్</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.smokingStatus && (
                    <p className="text-sm text-red-600">{errors.smokingStatus}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    స్మోకర్లకు ప్రీమియం ఎక్కువ ఉంటుంది
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annualIncome" className="text-base font-medium text-gray-700">
                    వార్షిక ఆదాయం (₹) - ఐచ్ఛికం
                  </Label>
                  <Input
                    id="annualIncome"
                    type="number"
                    min={100000}
                    max={100000000}
                    step={50000}
                    value={formData.annualIncome}
                    onChange={(e) => handleInputChange('annualIncome', parseInt(e.target.value) || 0)}
                    className="text-base"
                    placeholder="ఉదా: 800000"
                  />
                  {errors.annualIncome && (
                    <p className="text-sm text-red-600">{errors.annualIncome}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    ఆఫర్డబిలిటీ అనాలిసిస్ కోసం
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto px-8 py-3 text-lg">
                  ప్రీమియం లెక్కించండి
                </Button>
              </div>

              {errors.general && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{errors.general}</p>
                </div>
              )}
              
            </form>
          </CardContent>
        </Card>

        {/* Results and Chart */}
        {result && (
          <div className="space-y-8">
            {/* Results Display */}
            <TermPlanResults result={result} />
            
            {/* Chart */}
            <TermPlanChart result={result} />
            
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
                టర్మ్ ఇన్షూరెన్స్ ప్రీమియం ఎలా లెక్కించబడుతుంది?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                టర్మ్ ఇన్షూరెన్స్ ప్రీమియం లెక్కింపు వివిధ రిస్క్ కారకాల ఆధారంగా జరుగుతుంది:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">మొత్ కారకాలు</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>వయస్సు:</strong> ప్రధాన కారకం - వయస్సు ఎక్కువైతే ప్రీమియం కూడా ఎక్కువ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>లింగం:</strong> మహిళలకు సాధారణంగా తక్కువ ప్రీమియం</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>స్మోకింగ్:</strong> స్మోకర్లకు 30-50% ఎక్కువ ప్రీమియం</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>కవర్ మొత్తం:</strong> ఎక్కువ కవర్ = ఎక్కువ ప్రీమియం</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">ప్రీమియం కాంపోనెంట్స్</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>బేస్ ప్రీమియం:</strong> మార్టాలిటీ రేట్ × కవర్ అమౌంట్</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>స్మోకింగ్ సర్చార్జ్:</strong> స్మోకర్లకు అదనపు చార్జ్</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>GST:</strong> ప్రీమియంపై 18% జిఎస్టీ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>టోటల్ ప్రీమియం:</strong> అన్ని కాంపోనెంట్స్ కలిపి</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">ముఖ్య పాయింట్లు:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-blue-800 text-sm">
                  <div>
                    <p className="font-medium">✓ తొందరగా కొనుగోలు చేయండి</p>
                    <p>వయస్సు తక్కువగా ఉన్నప్పుడే తీసుకుంటే ప్రీమియం తక్కువ</p>
                  </div>
                  <div>
                    <p className="font-medium">✓ సుదీర్ఘ టర్మ్ ఎంచుకోండి</p>
                    <p>ఎక్కువ కాలం పాటు కవర్ ఉంటే మంచిది</p>
                  </div>
                  <div>
                    <p className="font-medium">✓ హెల్తీ లైఫ్‌స్టైల్</p>
                    <p>స్మోకింగ్ మానేస్తే ప్రీమియం తగ్గుతుంది</p>
                  </div>
                  <div>
                    <p className="font-medium">✓ పర్యాప్త కవర్</p>
                    <p>ఆదాయంలో 10-15 రెట్లు కవర్ తీసుకోండి</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                తరచుగా అడిగే ప్రశ్నలు (FAQ)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">టర్మ్ ఇన్షూరెన్స్ అంటే ఏమిటి?</h4>
                  <p className="text-gray-700 text-sm">
                    టర్మ్ ఇన్షూరెన్స్ అనేది ప్యూర్ లైఫ్ ఇన్షూరెన్స్. ఇందులో మేచూరిటీ బెనిఫిట్ ఉండదు, కేవలం డెత్ బెనిఫిట్ మాత్రమే. అందుకే ప్రీమియం చాలా తక్కువ ఉంటుంది.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">ఎంత కవర్ తీసుకోవాలి?</h4>
                  <p className="text-gray-700 text-sm">
                    సాధారణంగా వార్షిక ఆదాయంలో 10-15 రెట్లు కవర్ తీసుకోవాలి. ఉదాహరణకు వార్షిక ఆదాయం ₹8 లక్షలైతే ₹80 లక్షల నుండి ₹1.2 కోట్ల వరకు కవర్ తీసుకోవచ్చు.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">స్మోకర్ అయితే ప్రీమియం ఎంత ఎక్కువ అవుతుంది?</h4>
                  <p className="text-gray-700 text-sm">
                    స్మోకర్లకు నాన్-స్మోకర్ల కంటే 30-50% ఎక్కువ ప్రీమియం కట్టాల్సి వస్తుంది. ఎందుకంటే స్మోకింగ్ వల్ల హెల్త్ రిస్క్ ఎక్కువ ఉంటుంది.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">ప్రీమియం పేమెంట్ ఆపివేస్తే ఏమవుతుంది?</h4>
                  <p className="text-gray-700 text-sm">
                    టర్మ్ ఇన్షూరెన్స్‌లో ప్రీమియం పేమెంట్ ఆపివేస్తే పాలసీ లాప్స్ అయిపోతుంది. దానికి ఎలాంటి వేల్యూ రాదు. అందుకే రెగ్యులర్‌గా ప్రీమియం కట్టాలి.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </>
  );
}