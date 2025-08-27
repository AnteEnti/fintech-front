/**
 * Lump Sum Calculator Computation Logic
 * Implements compound interest calculations for one-time investments
 */

export interface LumpSumInputs {
  investmentAmount: number;
  expectedReturn: number; // Annual return percentage
  timePeriod: number; // Investment period in years
  inflationRate?: number; // Optional inflation adjustment
}

export interface LumpSumResult {
  futureValue: number;
  totalReturns: number;
  absoluteReturnsPercent: number;
  annualizedReturn: number;
  realReturns?: number; // Inflation adjusted returns
  yearlyBreakdown: YearlyData[];
  taxImplications?: TaxImplication;
}

export interface YearlyData {
  year: number;
  openingValue: number;
  returns: number;
  closingValue: number;
  cumulativeReturns: number;
}

export interface TaxImplication {
  capitalGains: number;
  shortTermCapitalGains: number; // < 1 year: 15%
  longTermCapitalGains: number;   // > 1 year: 10% on gains > 1L
  netReturns: number;
}

/**
 * Calculate lump sum investment growth using compound interest
 * Formula: FV = PV × (1 + r)^n
 */
export function calculateLumpSum(inputs: LumpSumInputs): LumpSumResult {
  const { investmentAmount, expectedReturn, timePeriod, inflationRate } = inputs;

  // Validate inputs
  if (investmentAmount <= 0 || expectedReturn <= 0 || timePeriod <= 0) {
    throw new Error('All input values must be positive');
  }

  if (investmentAmount < 1000 || investmentAmount > 10000000) {
    throw new Error('Investment amount should be between ₹1,000 and ₹1,00,00,000');
  }

  if (expectedReturn < 1 || expectedReturn > 30) {
    throw new Error('Expected return should be between 1% and 30%');
  }

  if (timePeriod < 1 || timePeriod > 50) {
    throw new Error('Time period should be between 1 and 50 years');
  }

  const annualRate = expectedReturn / 100;
  
  // Calculate future value using compound interest formula
  const futureValue = investmentAmount * Math.pow(1 + annualRate, timePeriod);
  const totalReturns = futureValue - investmentAmount;
  const absoluteReturnsPercent = (totalReturns / investmentAmount) * 100;
  
  // Calculate annualized return (CAGR)
  const annualizedReturn = (Math.pow(futureValue / investmentAmount, 1 / timePeriod) - 1) * 100;

  // Generate yearly breakdown
  const yearlyBreakdown: YearlyData[] = [];
  let currentValue = investmentAmount;

  for (let year = 1; year <= timePeriod; year++) {
    const openingValue = currentValue;
    const returns = openingValue * annualRate;
    const closingValue = openingValue + returns;
    const cumulativeReturns = closingValue - investmentAmount;

    yearlyBreakdown.push({
      year,
      openingValue: Math.round(openingValue),
      returns: Math.round(returns),
      closingValue: Math.round(closingValue),
      cumulativeReturns: Math.round(cumulativeReturns)
    });

    currentValue = closingValue;
  }

  // Calculate inflation-adjusted returns if provided
  let realReturns: number | undefined;
  if (inflationRate && inflationRate > 0) {
    const realRate = ((1 + annualRate) / (1 + inflationRate / 100)) - 1;
    realReturns = investmentAmount * Math.pow(1 + realRate, timePeriod) - investmentAmount;
  }

  // Calculate tax implications for equity investments
  const taxImplications = calculateTaxImplications(investmentAmount, totalReturns, timePeriod);

  return {
    futureValue: Math.round(futureValue),
    totalReturns: Math.round(totalReturns),
    absoluteReturnsPercent: Math.round(absoluteReturnsPercent * 100) / 100,
    annualizedReturn: Math.round(annualizedReturn * 100) / 100,
    realReturns: realReturns ? Math.round(realReturns) : undefined,
    yearlyBreakdown,
    taxImplications
  };
}

/**
 * Calculate tax implications for lump sum investments
 * Based on Indian capital gains tax rules
 */
function calculateTaxImplications(principal: number, totalGains: number, years: number): TaxImplication {
  let shortTermCapitalGains = 0;
  let longTermCapitalGains = 0;

  if (years < 1) {
    // Short-term capital gains: 15%
    shortTermCapitalGains = totalGains * 0.15;
  } else {
    // Long-term capital gains: 10% on gains > ₹1 lakh
    const exemptAmount = 100000; // ₹1 lakh exemption
    const taxableGains = Math.max(0, totalGains - exemptAmount);
    longTermCapitalGains = taxableGains * 0.10;
  }

  const totalTax = shortTermCapitalGains + longTermCapitalGains;
  const netReturns = totalGains - totalTax;

  return {
    capitalGains: Math.round(totalGains),
    shortTermCapitalGains: Math.round(shortTermCapitalGains),
    longTermCapitalGains: Math.round(longTermCapitalGains),
    netReturns: Math.round(netReturns)
  };
}

/**
 * Calculate required lump sum for target amount (reverse calculation)
 */
export function calculateRequiredLumpSum(
  targetAmount: number, 
  expectedReturn: number, 
  timePeriod: number
): number {
  const annualRate = expectedReturn / 100;
  const requiredInvestment = targetAmount / Math.pow(1 + annualRate, timePeriod);
  return Math.round(requiredInvestment);
}

/**
 * Compare lump sum vs SIP returns for same total investment
 */
export function compareLumpSumVsSIP(
  monthlyAmount: number,
  expectedReturn: number,
  timePeriod: number
): {
  lumpSumResult: LumpSumResult;
  sipFutureValue: number;
  difference: number;
  betterOption: 'lumpsum' | 'sip';
} {
  const totalSIPInvestment = monthlyAmount * timePeriod * 12;
  
  // Calculate lump sum with same total investment
  const lumpSumResult = calculateLumpSum({
    investmentAmount: totalSIPInvestment,
    expectedReturn,
    timePeriod
  });

  // Simple SIP calculation for comparison
  const monthlyRate = expectedReturn / 100 / 12;
  const totalMonths = timePeriod * 12;
  const sipFutureValue = monthlyAmount * 
    (Math.pow(1 + monthlyRate, totalMonths) - 1) * 
    (1 + monthlyRate) / monthlyRate;

  const difference = Math.abs(lumpSumResult.futureValue - sipFutureValue);
  const betterOption = lumpSumResult.futureValue > sipFutureValue ? 'lumpsum' : 'sip';

  return {
    lumpSumResult,
    sipFutureValue: Math.round(sipFutureValue),
    difference: Math.round(difference),
    betterOption
  };
}

/**
 * Get investment suitability assessment based on inputs
 */
export function getLumpSumSuitabilityAssessment(inputs: LumpSumInputs): {
  suitabilityScore: number; // 1-10
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
} {
  const { investmentAmount, expectedReturn, timePeriod } = inputs;
  
  let score = 5; // Base score
  const recommendations: string[] = [];
  let riskLevel: 'low' | 'medium' | 'high' = 'medium';

  // Assess based on expected returns
  if (expectedReturn <= 8) {
    score += 1;
    riskLevel = 'low';
    recommendations.push('తక్కువ రిస్క్, స్థిరమైన రాబడులు');
  } else if (expectedReturn <= 12) {
    riskLevel = 'medium';
    recommendations.push('మధ్యమ రిస్క్, సమతుల్యమైన రాబడులు');
  } else {
    score -= 1;
    riskLevel = 'high';
    recommendations.push('అధిక రిస్క్, అధిక రాబడి అవకాశం');
  }

  // Assess based on time period
  if (timePeriod >= 10) {
    score += 2;
    recommendations.push('దీర్ఘకాలిక లక్ష్యాలకు అనువైనది');
  } else if (timePeriod >= 5) {
    score += 1;
    recommendations.push('మధ్యమకాలిక లక్ష్యాలకు అనువైనది');
  } else {
    score -= 1;
    recommendations.push('స్వల్పకాలిక లక్ష్యాలకు మార్కెట్ రిస్క్ ఎక్కువ');
  }

  // Assess based on investment amount
  if (investmentAmount >= 500000) {
    recommendations.push('డైవర్సిఫికేషన్ గురించి ఆలోచించండి');
  }

  return {
    suitabilityScore: Math.max(1, Math.min(10, score)),
    recommendations,
    riskLevel
  };
}