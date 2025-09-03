/**
 * HRA Calculator - Indian Tax System HRA Exemption
 * Implements HRA exemption calculation as per Income Tax Act
 * Includes metro vs non-metro differentiation and optimal rent planning
 */

export type CityType = 'metro' | 'non-metro';

export interface HRAInputs {
  basicSalary: number;
  hraReceived: number;
  rentPaid: number;
  cityType: CityType;
}

export interface HRAExemptionCalculation {
  actualHRA: number;
  rentMinus10Percent: number;
  cityPercentage: number;
  exemption: number;
}

export interface OptimalRentRecommendation {
  maxRentForFullExemption: number;
  currentUtilization: number;
  potentialSavings: number;
  recommendedAction: string;
}

export interface HRAResult {
  inputs: HRAInputs;
  exemptionCalculation: HRAExemptionCalculation;
  hraExemption: number;
  taxableHRA: number;
  taxSavings: number; // Based on 30% tax bracket assumption
  optimalRent: OptimalRentRecommendation;
  insights: {
    cityBenefit: string;
    utilizationTips: string[];
    complianceNotes: string[];
  };
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Metro cities as per Income Tax Act
export const METRO_CITIES = ['mumbai', 'delhi', 'kolkata', 'chennai', 'hyderabad', 'bangalore', 'pune', 'ahmedabad'];

// HRA exemption percentages
export const HRA_EXEMPTION_RATES = {
  metro: 0.50, // 50% of basic salary for metro cities
  'non-metro': 0.40 // 40% of basic salary for non-metro cities
} as const;

// Validation limits
export const VALIDATION_LIMITS = {
  basicSalary: { min: 100000, max: 10000000 },
  hraReceived: { min: 0, max: 500000 },
  rentPaid: { min: 0, max: 100000 }
};

/**
 * Validate HRA calculator inputs
 */
export function validateHRAInputs(inputs: HRAInputs): ValidationResult {
  const errors: string[] = [];

  // Basic salary validation
  if (!inputs.basicSalary || inputs.basicSalary < VALIDATION_LIMITS.basicSalary.min) {
    errors.push(`ప్రాథమిక జీతం కనీసం ₹${VALIDATION_LIMITS.basicSalary.min.toLocaleString('en-IN')} ఉండాలి`);
  }
  if (inputs.basicSalary > VALIDATION_LIMITS.basicSalary.max) {
    errors.push(`ప్రాథమిక జీతం గరిష్టంగా ₹${VALIDATION_LIMITS.basicSalary.max.toLocaleString('en-IN')} వరకు లెక్కిస్తాము`);
  }

  // HRA received validation
  if (inputs.hraReceived < 0) {
    errors.push('HRA మొత్తం ప్రతికూలంగా ఉండకూడదు');
  }
  if (inputs.hraReceived > VALIDATION_LIMITS.hraReceived.max) {
    errors.push(`HRA మొత్తం గరిష్టంగా ₹${VALIDATION_LIMITS.hraReceived.max.toLocaleString('en-IN')} వరకు లెక్కిస్తాము`);
  }

  // Rent paid validation
  if (inputs.rentPaid < 0) {
    errors.push('అద్దె మొత్తం ప్రతికూలంగా ఉండకూడదు');
  }
  if (inputs.rentPaid > VALIDATION_LIMITS.rentPaid.max) {
    errors.push(`మాసిక అద్దె గరిష్టంగా ₹${VALIDATION_LIMITS.rentPaid.max.toLocaleString('en-IN')} వరకు లెక్కిస్తాము`);
  }

  // Logical validations
  if (inputs.hraReceived > inputs.basicSalary) {
    errors.push('HRA మొత్తం ప్రాథమిక జీతం కంటే ఎక్కువ ఉండకూడదు');
  }

  if (inputs.rentPaid > 0 && inputs.hraReceived === 0) {
    errors.push('అద్దె చెల్లిస్తుంటే HRA కూడా పొందుతున్నట్లు నమోదు చేయండి');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Calculate HRA exemption as per Income Tax Act
 * Formula: Minimum of 3 amounts:
 * 1. Actual HRA received
 * 2. Actual rent paid - 10% of basic salary
 * 3. 50% of basic salary (metro) or 40% of basic salary (non-metro)
 */
export function calculateHRAExemption(inputs: HRAInputs): HRAExemptionCalculation {
  const { basicSalary, hraReceived, rentPaid, cityType } = inputs;

  // Calculate the three components
  const actualHRA = hraReceived;
  const rentMinus10Percent = Math.max(0, (rentPaid * 12) - (basicSalary * 0.10)); // Annual calculation
  const cityPercentage = basicSalary * HRA_EXEMPTION_RATES[cityType];

  // HRA exemption is minimum of the three
  const exemption = Math.min(actualHRA, rentMinus10Percent, cityPercentage);

  return {
    actualHRA,
    rentMinus10Percent,
    cityPercentage,
    exemption: Math.max(0, exemption)
  };
}

/**
 * Calculate optimal rent recommendations
 */
export function calculateOptimalRent(inputs: HRAInputs): OptimalRentRecommendation {
  const { basicSalary, hraReceived, cityType } = inputs;

  // Maximum rent for full HRA exemption
  // Based on: rent - 10% of salary = HRA received (or city percentage, whichever is lower)
  const cityPercentage = basicSalary * HRA_EXEMPTION_RATES[cityType];
  const effectiveLimit = Math.min(hraReceived, cityPercentage);
  
  const maxRentForFullExemption = (effectiveLimit + (basicSalary * 0.10)) / 12; // Monthly rent

  // Current utilization
  const currentExemption = calculateHRAExemption(inputs).exemption;
  const maxPossibleExemption = Math.min(hraReceived, cityPercentage);
  const currentUtilization = maxPossibleExemption > 0 ? (currentExemption / maxPossibleExemption) * 100 : 0;

  // Potential savings if rent is optimized
  const potentialAdditionalExemption = maxPossibleExemption - currentExemption;
  const potentialSavings = potentialAdditionalExemption * 0.30; // Assuming 30% tax bracket

  // Recommendation
  let recommendedAction = '';
  if (currentUtilization < 80) {
    recommendedAction = 'అద్దె పెంచడం ద్వారా మరిన్ని పన్ను ప్రయోజనాలు పొందవచ్చు';
  } else if (currentUtilization >= 95) {
    recommendedAction = 'మీరు HRA యొక్క పూర్తి ప్రయోజనాన్ని పొందుతున్నారు';
  } else {
    recommendedAction = 'మీ HRA వాడుక దాదాపు మంచిగా ఉంది';
  }

  return {
    maxRentForFullExemption,
    currentUtilization,
    potentialSavings,
    recommendedAction
  };
}

/**
 * Generate insights and tips for HRA optimization
 */
export function generateHRAInsights(inputs: HRAInputs): HRAResult['insights'] {
  const { cityType, basicSalary } = inputs;
  
  const cityBenefit = cityType === 'metro' 
    ? `మెట్రో సిటీలో మీరు జీతంలో 50% వరకు HRA మినహాయింపు పొందవచ్చు (₹${(basicSalary * 0.50).toLocaleString('en-IN')})`
    : `నాన్-మెట్రో సిటీలో మీరు జీతంలో 40% వరకు HRA మినహాయింపు పొందవచ్చు (₹${(basicSalary * 0.40).toLocaleString('en-IN')})`;

  const utilizationTips = [
    'అద్దె రశీదులు తప్పనిసరిగా సంరక్షించండి',
    'ఇంటి యజమాని PAN కార్డ్ వివరాలు పొందండి',
    'వార్షిక అద్దె ₹1 లక్ష మించితే అద్దె ఒప్పందం తయారు చేయండి',
    'HRA మినహాయింపు కోసం Form 12BB లేదా హాజరు కండిషన్లు పూర్తి చేయండి'
  ];

  const complianceNotes = [
    'అద్దె రశీదులలో తప్పనిసరిగా రివెన్యూ స్టాంప్ ఉండాలి',
    'అద్దె ₹8,000/నెలకు మించితే యజమాని PAN తప్పనిసరి',
    'కుటుంబ సభ్యుల నుండి అద్దె తీసుకుంటే HRA మినహాయింపు రాదు',
    'HRA క్లెయిమ్ చేసే అదే పీరియడ్‌లో హోమ్ లోన్ వడ్డీ క్లెయిమ్ చేయవచ్చు'
  ];

  return {
    cityBenefit,
    utilizationTips,
    complianceNotes
  };
}

/**
 * Calculate comprehensive HRA analysis
 */
export function calculateHRA(inputs: HRAInputs): HRAResult {
  // Calculate exemption
  const exemptionCalculation = calculateHRAExemption(inputs);
  const hraExemption = exemptionCalculation.exemption;
  
  // Calculate taxable HRA
  const taxableHRA = Math.max(0, inputs.hraReceived - hraExemption);
  
  // Calculate tax savings (assuming 30% tax bracket for simplicity)
  const taxSavings = hraExemption * 0.30;
  
  // Calculate optimal rent recommendations
  const optimalRent = calculateOptimalRent(inputs);
  
  // Generate insights
  const insights = generateHRAInsights(inputs);

  return {
    inputs,
    exemptionCalculation,
    hraExemption,
    taxableHRA,
    taxSavings,
    optimalRent,
    insights
  };
}

/**
 * Get suggested input values for different scenarios
 */
export function getHRASuggestedValues(scenario: 'entry' | 'mid' | 'senior'): Partial<HRAInputs> {
  switch (scenario) {
    case 'entry':
      return {
        basicSalary: 400000,
        hraReceived: 120000,
        rentPaid: 15000,
        cityType: 'metro'
      };
    case 'mid':
      return {
        basicSalary: 800000,
        hraReceived: 240000,
        rentPaid: 25000,
        cityType: 'metro'
      };
    case 'senior':
      return {
        basicSalary: 1500000,
        hraReceived: 450000,
        rentPaid: 45000,
        cityType: 'metro'
      };
  }
}

/**
 * Check if a city is classified as metro for HRA purposes
 */
export function isMetroCity(cityName: string): boolean {
  return METRO_CITIES.includes(cityName.toLowerCase().trim());
}

/**
 * Calculate monthly breakdown for better understanding
 */
export interface HRAMonthlyBreakdown {
  monthlySalary: number;
  monthlyHRA: number;
  monthlyRent: number;
  monthlyExemption: number;
  monthlyTaxableHRA: number;
  monthlyTaxSavings: number;
}

export function getMonthlyBreakdown(result: HRAResult): HRAMonthlyBreakdown {
  const { inputs, hraExemption, taxableHRA, taxSavings } = result;
  
  return {
    monthlySalary: inputs.basicSalary / 12,
    monthlyHRA: inputs.hraReceived / 12,
    monthlyRent: inputs.rentPaid,
    monthlyExemption: hraExemption / 12,
    monthlyTaxableHRA: taxableHRA / 12,
    monthlyTaxSavings: taxSavings / 12
  };
}