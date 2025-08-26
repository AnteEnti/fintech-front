/**
 * SIP Calculator - Pure calculation functions
 * Formula: M = P × [{(1 + i)^n - 1} / i] × (1 + i)
 * Where:
 * M = Maturity Amount
 * P = Monthly SIP Amount  
 * i = Monthly Interest Rate (Annual Rate / 12 / 100)
 * n = Total number of months
 */

interface SIPResult {
  totalInvested: number;
  expectedReturns: number;
  maturityAmount: number;
  yearlyData: Array<{
    year: number;
    invested: number;
    value: number;
  }>;
}

interface LumpSumResult {
  totalInvested: number;
  expectedReturns: number;
  maturityAmount: number;
  yearlyData: Array<{
    year: number;
    invested: number;
    value: number;
  }>;
}

/**
 * Calculate SIP maturity amount and returns
 */
export function calculateSIP(
  monthlyAmount: number,
  investmentPeriod: number,
  expectedReturn: number
): SIPResult {
  // Input validation
  if (monthlyAmount <= 0 || investmentPeriod <= 0 || expectedReturn <= 0) {
    throw new Error('All input values must be positive numbers');
  }

  if (monthlyAmount < 500 || monthlyAmount > 100000) {
    throw new Error('Monthly SIP amount must be between ₹500 and ₹1,00,000');
  }

  if (investmentPeriod < 1 || investmentPeriod > 30) {
    throw new Error('Investment period must be between 1 and 30 years');
  }

  if (expectedReturn < 1 || expectedReturn > 30) {
    throw new Error('Expected return must be between 1% and 30%');
  }

  const totalMonths = investmentPeriod * 12;
  const monthlyRate = expectedReturn / 12 / 100;
  
  // SIP Formula: M = P × [{(1 + i)^n - 1} / i] × (1 + i)
  const maturityAmount = monthlyAmount * 
    (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * 
    (1 + monthlyRate));
  
  const totalInvested = monthlyAmount * totalMonths;
  const expectedReturns = maturityAmount - totalInvested;

  // Generate yearly data for charts
  const yearlyData = generateYearlyData(
    monthlyAmount,
    investmentPeriod,
    expectedReturn,
    'sip'
  );

  return {
    totalInvested: Math.round(totalInvested),
    expectedReturns: Math.round(expectedReturns),
    maturityAmount: Math.round(maturityAmount),
    yearlyData
  };
}

/**
 * Calculate Lump Sum investment returns
 */
export function calculateLumpSum(
  lumpSumAmount: number,
  investmentPeriod: number,
  expectedReturn: number
): LumpSumResult {
  // Input validation
  if (lumpSumAmount <= 0 || investmentPeriod <= 0 || expectedReturn <= 0) {
    throw new Error('All input values must be positive numbers');
  }

  if (lumpSumAmount < 1000 || lumpSumAmount > 1000000) {
    throw new Error('Lump sum amount must be between ₹1,000 and ₹10,00,000');
  }

  if (investmentPeriod < 1 || investmentPeriod > 30) {
    throw new Error('Investment period must be between 1 and 30 years');
  }

  if (expectedReturn < 1 || expectedReturn > 30) {
    throw new Error('Expected return must be between 1% and 30%');
  }

  // Compound Interest Formula: A = P(1 + r/n)^(nt)
  // For annual compounding: A = P(1 + r)^t
  const maturityAmount = lumpSumAmount * Math.pow(1 + expectedReturn / 100, investmentPeriod);
  const totalInvested = lumpSumAmount;
  const expectedReturns = maturityAmount - totalInvested;

  // Generate yearly data for charts
  const yearlyData = generateYearlyData(
    lumpSumAmount,
    investmentPeriod,
    expectedReturn,
    'lumpsum'
  );

  return {
    totalInvested: Math.round(totalInvested),
    expectedReturns: Math.round(expectedReturns),
    maturityAmount: Math.round(maturityAmount),
    yearlyData
  };
}

/**
 * Generate yearly data points for chart visualization
 */
function generateYearlyData(
  amount: number,
  investmentPeriod: number,
  expectedReturn: number,
  type: 'sip' | 'lumpsum'
): Array<{ year: number; invested: number; value: number }> {
  const yearlyData = [];
  const monthlyRate = expectedReturn / 12 / 100;

  for (let year = 1; year <= investmentPeriod; year++) {
    let invested: number;
    let value: number;

    if (type === 'sip') {
      const months = year * 12;
      invested = amount * months;
      
      // SIP value at this point
      value = amount * 
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
        (1 + monthlyRate));
    } else {
      // Lump sum
      invested = amount;
      value = amount * Math.pow(1 + expectedReturn / 100, year);
    }

    yearlyData.push({
      year,
      invested: Math.round(invested),
      value: Math.round(value)
    });
  }

  return yearlyData;
}

/**
 * Calculate monthly SIP amount needed to reach a target
 */
export function calculateTargetSIP(
  targetAmount: number,
  investmentPeriod: number,
  expectedReturn: number
): number {
  if (targetAmount <= 0 || investmentPeriod <= 0 || expectedReturn <= 0) {
    throw new Error('All input values must be positive numbers');
  }

  const totalMonths = investmentPeriod * 12;
  const monthlyRate = expectedReturn / 12 / 100;

  // Reverse SIP formula to find required monthly amount
  const monthlySIP = targetAmount / 
    (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * 
    (1 + monthlyRate));

  return Math.round(monthlySIP);
}

/**
 * Compare SIP vs Lump Sum for same monthly investment
 */
export function compareSIPvsLumpSum(
  monthlyAmount: number,
  investmentPeriod: number,
  expectedReturn: number
): {
  sip: SIPResult;
  lumpsum: LumpSumResult;
  difference: number;
} {
  const sipResult = calculateSIP(monthlyAmount, investmentPeriod, expectedReturn);
  
  // For lump sum comparison, use total SIP investment as lump sum amount
  const lumpSumAmount = monthlyAmount * investmentPeriod * 12;
  const lumpSumResult = calculateLumpSum(lumpSumAmount, investmentPeriod, expectedReturn);

  return {
    sip: sipResult,
    lumpsum: lumpSumResult,
    difference: sipResult.maturityAmount - lumpSumResult.maturityAmount
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, includeCurrency: boolean = true): string {
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(amount);

  return includeCurrency ? `₹${formatted}` : formatted;
}

/**
 * Calculate CAGR (Compound Annual Growth Rate)
 */
export function calculateCAGR(
  initialValue: number,
  finalValue: number,
  years: number
): number {
  if (initialValue <= 0 || finalValue <= 0 || years <= 0) {
    return 0;
  }

  const cagr = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
  return Math.round(cagr * 100) / 100; // Round to 2 decimal places
}

/**
 * Validate SIP input parameters
 */
export function validateSIPInputs(
  monthlyAmount: number,
  investmentPeriod: number,
  expectedReturn: number
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (monthlyAmount < 500) {
    errors.push('కనిష్ఠ మాసిక SIP మొత్తం ₹500');
  }
  if (monthlyAmount > 100000) {
    errors.push('గరిష్ఠ మాసిక SIP మొత్తం ₹1,00,000');
  }
  
  if (investmentPeriod < 1) {
    errors.push('కనిష్ఠ పెట్టుబడి కాలం 1 సంవత్సరం');
  }
  if (investmentPeriod > 30) {
    errors.push('గరిష్ఠ పెట్టుబడి కాలం 30 సంవత్సరాలు');
  }
  
  if (expectedReturn < 1) {
    errors.push('కనిష్ఠ ఆశించిన రాబడి 1%');
  }
  if (expectedReturn > 30) {
    errors.push('గరిష్ఠ ఆశించిన రాబడి 30%');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}