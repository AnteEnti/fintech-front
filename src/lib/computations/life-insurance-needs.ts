/**
 * Life Insurance Needs Calculator
 * Implements multiple industry-standard methods for calculating life insurance coverage needs
 */

export interface LifeInsuranceNeedsInputs {
  annualIncome: number;
  monthlyExpenses: number;
  outstandingDebts: number;
  numberOfDependents: number;
  existingCoverage: number;
  age: number;
  yearsToRetirement?: number;
  childrenEducationCost?: number;
  spouseAge?: number;
  finalExpenses?: number;
}

export interface LifeInsuranceNeedsResult {
  totalCoverageNeeded: number;
  existingCoverageGap: number;
  monthlyPremiumEstimate: number;
  coverageBreakdown: {
    incomeReplacement: number;
    debtCoverage: number;
    educationCosts: number;
    emergencyFund: number;
    finalExpenses: number;
    spouseSupport: number;
  };
  methodComparison: {
    humanLifeValue: number;
    incomeMultiple: number;
    needsBased: number;
  };
  affordabilityAnalysis: {
    premiumAsPercentageOfIncome: number;
    isAffordable: boolean;
    recommendedCoverage: number;
  };
  yearlyBreakdown: Array<{
    year: number;
    coverageNeeded: number;
    premiumPaid: number;
    cumulativePremium: number;
  }>;
}

/**
 * Calculate life insurance needs using multiple methodologies
 */
export function calculateLifeInsuranceNeeds(inputs: LifeInsuranceNeedsInputs): LifeInsuranceNeedsResult {
  const {
    annualIncome,
    monthlyExpenses,
    outstandingDebts,
    numberOfDependents,
    existingCoverage,
    age,
    yearsToRetirement = 60 - age,
    childrenEducationCost = numberOfDependents * 1000000, // ₹10L per child assumption
    spouseAge = age - 2, // Assumption
    finalExpenses = 500000 // ₹5L assumption
  } = inputs;

  const annualExpenses = monthlyExpenses * 12;
  const netAnnualIncome = annualIncome - annualExpenses;

  // Method 1: Human Life Value (HLV) Method
  const discountRate = 0.06; // 6% discount rate
  const humanLifeValue = netAnnualIncome * ((1 - Math.pow(1 + discountRate, -yearsToRetirement)) / discountRate);

  // Method 2: Income Multiple Method
  const incomeMultiplier = getIncomeMultiplier(age, numberOfDependents);
  const incomeMultiple = annualIncome * incomeMultiplier;

  // Method 3: Needs-Based Method
  const incomeReplacement = netAnnualIncome * Math.min(yearsToRetirement, 20); // 20 years max
  const debtCoverage = outstandingDebts;
  const educationCosts = childrenEducationCost;
  const emergencyFund = annualExpenses * 1; // 1 year emergency fund
  const spouseSupport = calculateSpouseSupport(spouseAge, annualExpenses);
  
  const needsBased = incomeReplacement + debtCoverage + educationCosts + emergencyFund + finalExpenses + spouseSupport;

  // Take the maximum of the three methods for comprehensive coverage
  const totalCoverageNeeded = Math.max(humanLifeValue, incomeMultiple, needsBased);
  const existingCoverageGap = Math.max(0, totalCoverageNeeded - existingCoverage);

  // Premium estimation (rough estimate)
  const premiumRate = getPremiumRate(age, totalCoverageNeeded);
  const monthlyPremiumEstimate = (totalCoverageNeeded * premiumRate) / 12;

  // Affordability analysis
  const premiumAsPercentageOfIncome = (monthlyPremiumEstimate * 12) / annualIncome;
  const isAffordable = premiumAsPercentageOfIncome <= 0.10; // 10% of income is considered affordable
  const recommendedCoverage = isAffordable ? totalCoverageNeeded : getAffordableCoverage(annualIncome, age);

  // Coverage breakdown
  const coverageBreakdown = {
    incomeReplacement,
    debtCoverage,
    educationCosts,
    emergencyFund,
    finalExpenses,
    spouseSupport
  };

  // Method comparison
  const methodComparison = {
    humanLifeValue,
    incomeMultiple,
    needsBased
  };

  // Affordability analysis
  const affordabilityAnalysis = {
    premiumAsPercentageOfIncome,
    isAffordable,
    recommendedCoverage
  };

  // Yearly breakdown
  const yearlyBreakdown = generateYearlyBreakdown(totalCoverageNeeded, monthlyPremiumEstimate, yearsToRetirement);

  return {
    totalCoverageNeeded,
    existingCoverageGap,
    monthlyPremiumEstimate,
    coverageBreakdown,
    methodComparison,
    affordabilityAnalysis,
    yearlyBreakdown
  };
}

/**
 * Get income multiplier based on age and dependents
 */
function getIncomeMultiplier(age: number, dependents: number): number {
  let baseMultiplier = 10;
  
  // Age adjustments
  if (age <= 30) baseMultiplier = 12;
  else if (age <= 40) baseMultiplier = 10;
  else if (age <= 50) baseMultiplier = 8;
  else baseMultiplier = 6;

  // Dependents adjustment
  const dependentsMultiplier = Math.min(dependents * 0.5, 2); // Max 2x adjustment
  
  return baseMultiplier + dependentsMultiplier;
}

/**
 * Calculate spouse support requirements
 */
function calculateSpouseSupport(spouseAge: number, annualExpenses: number): number {
  const spouseLifeExpectancy = 75; // Assumption
  const yearsOfSupport = Math.max(0, spouseLifeExpectancy - spouseAge);
  const spouseExpenseRatio = 0.6; // 60% of current expenses
  
  return yearsOfSupport * annualExpenses * spouseExpenseRatio;
}

/**
 * Get premium rate based on age and coverage
 */
function getPremiumRate(age: number, coverage: number): number {
  // Base rate per lakh (₹100,000)
  let baseRate = 0.003; // 0.3% for young adults
  
  // Age-based adjustments
  if (age <= 25) baseRate = 0.002;
  else if (age <= 35) baseRate = 0.003;
  else if (age <= 45) baseRate = 0.005;
  else if (age <= 55) baseRate = 0.008;
  else baseRate = 0.012;

  // Coverage-based discount (economies of scale)
  const coverageInLakhs = coverage / 100000;
  if (coverageInLakhs >= 100) baseRate *= 0.9; // 10% discount for high coverage
  else if (coverageInLakhs >= 50) baseRate *= 0.95; // 5% discount

  return baseRate;
}

/**
 * Get affordable coverage based on income
 */
function getAffordableCoverage(annualIncome: number, age: number): number {
  const affordablePremium = annualIncome * 0.10; // 10% of income
  const premiumRate = getPremiumRate(age, annualIncome * 10); // Estimate based on 10x income
  
  return affordablePremium / premiumRate;
}

/**
 * Generate yearly breakdown
 */
function generateYearlyBreakdown(coverage: number, monthlyPremium: number, years: number): Array<{
  year: number;
  coverageNeeded: number;
  premiumPaid: number;
  cumulativePremium: number;
}> {
  const breakdown = [];
  let cumulativePremium = 0;
  const annualPremium = monthlyPremium * 12;
  
  for (let year = 1; year <= Math.min(years, 30); year++) {
    cumulativePremium += annualPremium;
    
    // Coverage need might decrease over time as dependents become independent
    let coverageNeeded = coverage;
    if (year > 20) {
      const reductionFactor = Math.max(0.5, 1 - ((year - 20) * 0.05));
      coverageNeeded *= reductionFactor;
    }
    
    breakdown.push({
      year,
      coverageNeeded: Math.round(coverageNeeded),
      premiumPaid: Math.round(annualPremium),
      cumulativePremium: Math.round(cumulativePremium)
    });
  }
  
  return breakdown;
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
 * Validate inputs
 */
export function validateLifeInsuranceInputs(inputs: Partial<LifeInsuranceNeedsInputs>): Record<string, string> {
  const errors: Record<string, string> = {};
  
  if (!inputs.annualIncome || inputs.annualIncome < 100000 || inputs.annualIncome > 100000000) {
    errors.annualIncome = 'వార్షిక ఆదాయం ₹1 లక్ష నుండి ₹10 కోట్ల మధ్య ఉండాలి';
  }
  
  if (!inputs.monthlyExpenses || inputs.monthlyExpenses < 5000 || inputs.monthlyExpenses > 1000000) {
    errors.monthlyExpenses = 'మాసిక ఖర్చులు ₹5,000 నుండి ₹10 లక్షల మధ్య ఉండాలి';
  }
  
  if (inputs.monthlyExpenses && inputs.annualIncome && (inputs.monthlyExpenses * 12) >= inputs.annualIncome) {
    errors.monthlyExpenses = 'మాసిక ఖర్చులు వార్షిక ఆదాయం కంటే తక్కువగా ఉండాలి';
  }
  
  if (inputs.outstandingDebts !== undefined && (inputs.outstandingDebts < 0 || inputs.outstandingDebts > 50000000)) {
    errors.outstandingDebts = 'బాకీ అప్పులు ₹0 నుండి ₹5 కోట్ల మధ్య ఉండాలి';
  }
  
  if (!inputs.numberOfDependents || inputs.numberOfDependents < 0 || inputs.numberOfDependents > 10) {
    errors.numberOfDependents = 'ఆధారపడే వారి సంఖ్య 0 నుండి 10 మధ్య ఉండాలి';
  }
  
  if (inputs.existingCoverage !== undefined && (inputs.existingCoverage < 0 || inputs.existingCoverage > 100000000)) {
    errors.existingCoverage = 'ప్రస్తుత కవర్ ₹0 నుండి ₹10 కోట్ల మధ్య ఉండాలి';
  }
  
  if (!inputs.age || inputs.age < 18 || inputs.age > 65) {
    errors.age = 'వయస్సు 18 నుండి 65 సంవత్సరాల మధ్య ఉండాలి';
  }
  
  return errors;
}