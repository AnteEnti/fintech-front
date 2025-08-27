/**
 * Term Plan Calculator
 * Implements industry-standard actuarial calculations for term insurance premiums
 */

export interface TermPlanInputs {
  age: number;
  coverageAmount: number;
  policyTerm: number;
  gender: 'male' | 'female';
  smokingStatus: 'smoker' | 'non-smoker';
  annualIncome?: number;
}

export interface TermPlanResult {
  annualPremium: number;
  monthlyPremium: number;
  totalPremiumsPaid: number;
  costPerLakh: number;
  premiumToIncomeRatio: number;
  premiumBreakdown: {
    basePremium: number;
    smokingSurcharge: number;
    gst: number;
    totalPremium: number;
  };
  comparison: {
    ageWisePremiums: Array<{
      age: number;
      premium: number;
      monthlyPremium: number;
    }>;
    termWisePremiums: Array<{
      term: number;
      premium: number;
      totalCost: number;
    }>;
  };
  affordabilityAnalysis: {
    isAffordable: boolean;
    recommendedCoverage: number;
    budgetUtilization: number;
  };
}

/**
 * Core calculation function (without comparison data to avoid recursion)
 */
function calculateTermPlanCore(
  age: number,
  coverageAmount: number,
  policyTerm: number,
  gender: 'male' | 'female',
  smokingStatus: 'smoker' | 'non-smoker',
  annualIncome: number = 600000
) {
  // Base rate per 1000 coverage (industry standard ranges)
  const baseRate = getBaseRate(age, gender);
  
  // Calculate base premium
  const basePremium = (coverageAmount / 1000) * baseRate;
  
  // Apply smoking surcharge (30-50% increase for smokers)
  const smokingSurcharge = smokingStatus === 'smoker' ? basePremium * 0.4 : 0;
  
  // Calculate premium before tax
  const premiumBeforeTax = basePremium + smokingSurcharge;
  
  // Apply GST (18% on insurance premiums)
  const gst = premiumBeforeTax * 0.18;
  
  // Final annual premium
  const annualPremium = premiumBeforeTax + gst;
  const monthlyPremium = annualPremium / 12;
  const totalPremiumsPaid = annualPremium * policyTerm;
  const costPerLakh = (annualPremium / (coverageAmount / 100000));
  
  // Affordability analysis (premium should be 5-10% of income max)
  const premiumToIncomeRatio = (annualPremium / annualIncome) * 100;
  const isAffordable = premiumToIncomeRatio <= 10;
  const affordablePremium = annualIncome * 0.10;
  const recommendedCoverage = isAffordable ? coverageAmount : Math.floor((affordablePremium / annualPremium) * coverageAmount);

  return {
    annualPremium: Math.round(annualPremium),
    monthlyPremium: Math.round(monthlyPremium),
    totalPremiumsPaid: Math.round(totalPremiumsPaid),
    costPerLakh: Math.round(costPerLakh),
    premiumToIncomeRatio: Math.round(premiumToIncomeRatio * 100) / 100,
    premiumBreakdown: {
      basePremium: Math.round(basePremium),
      smokingSurcharge: Math.round(smokingSurcharge),
      gst: Math.round(gst),
      totalPremium: Math.round(annualPremium)
    },
    affordabilityAnalysis: {
      isAffordable,
      recommendedCoverage: Math.round(recommendedCoverage),
      budgetUtilization: Math.round((annualPremium / annualIncome) * 10000) / 100
    }
  };
}

/**
 * Calculate term plan premium based on actuarial factors
 */
export function calculateTermPlanPremium(inputs: TermPlanInputs): TermPlanResult {
  const {
    age,
    coverageAmount,
    policyTerm,
    gender,
    smokingStatus,
    annualIncome = 600000 // Default assumption
  } = inputs;

  // Get core calculations
  const coreResult = calculateTermPlanCore(age, coverageAmount, policyTerm, gender, smokingStatus, annualIncome);

  // Generate comparison data
  const ageWisePremiums = generateAgeWiseComparison(coverageAmount, policyTerm, gender, smokingStatus);
  const termWisePremiums = generateTermWiseComparison(age, coverageAmount, gender, smokingStatus);

  return {
    ...coreResult,
    comparison: {
      ageWisePremiums,
      termWisePremiums
    }
  };
}

/**
 * Get base rate per 1000 coverage based on age and gender
 * Based on industry mortality tables
 */
function getBaseRate(age: number, gender: 'male' | 'female'): number {
  // Base rates per 1000 coverage amount
  const maleRates: { [key: string]: number } = {
    '18-25': 1.2,
    '26-30': 1.4,
    '31-35': 1.8,
    '36-40': 2.5,
    '41-45': 3.8,
    '46-50': 5.5,
    '51-55': 8.2,
    '56-60': 12.5,
    '61-65': 18.0
  };

  const femaleRates: { [key: string]: number } = {
    '18-25': 1.0,
    '26-30': 1.2,
    '31-35': 1.5,
    '36-40': 2.1,
    '41-45': 3.2,
    '46-50': 4.8,
    '51-55': 7.0,
    '56-60': 10.5,
    '61-65': 15.0
  };

  const rates = gender === 'male' ? maleRates : femaleRates;

  // Determine age bracket
  let ageBracket: string;
  if (age >= 18 && age <= 25) ageBracket = '18-25';
  else if (age >= 26 && age <= 30) ageBracket = '26-30';
  else if (age >= 31 && age <= 35) ageBracket = '31-35';
  else if (age >= 36 && age <= 40) ageBracket = '36-40';
  else if (age >= 41 && age <= 45) ageBracket = '41-45';
  else if (age >= 46 && age <= 50) ageBracket = '46-50';
  else if (age >= 51 && age <= 55) ageBracket = '51-55';
  else if (age >= 56 && age <= 60) ageBracket = '56-60';
  else ageBracket = '61-65';

  return rates[ageBracket];
}

/**
 * Generate age-wise premium comparison
 */
function generateAgeWiseComparison(
  coverageAmount: number,
  policyTerm: number,
  gender: 'male' | 'female',
  smokingStatus: 'smoker' | 'non-smoker'
): Array<{ age: number; premium: number; monthlyPremium: number }> {
  const ages = [25, 30, 35, 40, 45, 50, 55, 60];
  
  return ages.map(age => {
    const result = calculateTermPlanCore(age, coverageAmount, policyTerm, gender, smokingStatus);
    
    return {
      age,
      premium: result.annualPremium,
      monthlyPremium: result.monthlyPremium
    };
  });
}

/**
 * Generate term-wise premium comparison
 */
function generateTermWiseComparison(
  age: number,
  coverageAmount: number,
  gender: 'male' | 'female',
  smokingStatus: 'smoker' | 'non-smoker'
): Array<{ term: number; premium: number; totalCost: number }> {
  const terms = [10, 15, 20, 25, 30];
  
  return terms.map(term => {
    const result = calculateTermPlanCore(age, coverageAmount, term, gender, smokingStatus);
    
    return {
      term,
      premium: result.annualPremium,
      totalCost: result.totalPremiumsPaid
    };
  });
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  if (amount >= 10000000) { // 1 crore
    return `₹${(amount / 10000000).toFixed(2)} కోట్లు`;
  } else if (amount >= 100000) { // 1 lakh
    return `₹${(amount / 100000).toFixed(2)} లక్షలు`;
  } else if (amount >= 1000) { // 1 thousand
    return `₹${(amount / 1000).toFixed(2)} వేలు`;
  } else {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}

/**
 * Validate term plan inputs
 */
export function validateTermPlanInputs(inputs: Partial<TermPlanInputs>): Record<string, string> {
  const errors: Record<string, string> = {};
  
  if (!inputs.age || inputs.age < 18 || inputs.age > 65) {
    errors.age = 'వయస్సు 18 నుండి 65 సంవత్సరాల మధ్య ఉండాలి';
  }
  
  if (!inputs.coverageAmount || inputs.coverageAmount < 500000 || inputs.coverageAmount > 50000000) {
    errors.coverageAmount = 'కవర్ మొత్తం ₹5 లక్షల నుండి ₹5 కోట్ల మధ్య ఉండాలి';
  }
  
  if (!inputs.policyTerm || inputs.policyTerm < 5 || inputs.policyTerm > 30) {
    errors.policyTerm = 'పాలసీ టర్మ్ 5 నుండి 30 సంవత్సరాల మధ్య ఉండాలి';
  }
  
  if (!inputs.gender || !['male', 'female'].includes(inputs.gender)) {
    errors.gender = 'దయచేసి వైలిడ్ లింగాన్ని ఎంచుకోండి';
  }
  
  if (!inputs.smokingStatus || !['smoker', 'non-smoker'].includes(inputs.smokingStatus)) {
    errors.smokingStatus = 'దయచేసి స్మోకింగ్ స్టేటస్‌ని ఎంచుకోండి';
  }
  
  if (inputs.annualIncome !== undefined && (inputs.annualIncome < 100000 || inputs.annualIncome > 100000000)) {
    errors.annualIncome = 'వార్షిక ఆదాయం ₹1 లక్ష నుండి ₹10 కోట్ల మధ్య ఉండాలి';
  }
  
  return errors;
}