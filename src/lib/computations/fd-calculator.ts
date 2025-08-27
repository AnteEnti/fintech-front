/**
 * FD Calculator Functions
 * Implementation of Fixed Deposit calculation logic with banking standards compliance
 */

export interface FDInputs {
  principal: number;           // Principal deposit amount
  interestRate: number;       // Annual interest rate in percentage
  tenure: number;             // Tenure in months
  compoundingFrequency: 'monthly' | 'quarterly' | 'yearly'; // Compounding frequency
}

export interface FDResult {
  principal: number;
  maturityAmount: number;
  totalInterest: number;
  effectiveAnnualRate: number;
  taxableInterest: number;
  tdsAmount: number;
  postTaxMaturityAmount: number;
}

export interface FDScheduleItem {
  period: number;              // Period number (month/quarter/year based on compounding)
  periodLabel: string;         // Display label for the period
  openingBalance: number;
  interestEarned: number;
  closingBalance: number;
  cumulativeInterest: number;
}

export interface FDRules {
  minPrincipal: number;
  maxPrincipal: number;
  minInterestRate: number;
  maxInterestRate: number;
  minTenureMonths: number;
  maxTenureMonths: number;
  tdsThreshold: number;        // Annual interest threshold for TDS
  tdsRate: number;            // TDS rate in percentage
  prematureWithdrawalPenalty: number; // Penalty percentage
}

// FD Rules as per banking standards
export const FD_RULES: FDRules = {
  minPrincipal: 1000,
  maxPrincipal: 50000000,
  minInterestRate: 1.0,
  maxInterestRate: 15.0,
  minTenureMonths: 1,
  maxTenureMonths: 120, // 10 years
  tdsThreshold: 40000,
  tdsRate: 10.0,
  prematureWithdrawalPenalty: 1.0
};

/**
 * Calculate FD maturity using compound interest formula
 * A = P(1 + r/n)^(nt)
 */
export function calculateFD(inputs: FDInputs): FDResult {
  const { principal, interestRate, tenure, compoundingFrequency } = inputs;

  // Validate inputs
  if (principal <= 0 || interestRate <= 0 || tenure <= 0) {
    throw new Error('All input values must be positive');
  }

  // Convert annual rate to decimal
  const annualRate = interestRate / 100;
  
  // Determine compounding frequency per year
  const compoundingPerYear = getCompoundingPerYear(compoundingFrequency);
  
  // Convert tenure from months to years
  const tenureYears = tenure / 12;
  
  // Calculate compound interest: A = P(1 + r/n)^(nt)
  const maturityAmount = principal * Math.pow(
    (1 + annualRate / compoundingPerYear), 
    compoundingPerYear * tenureYears
  );
  
  const totalInterest = maturityAmount - principal;
  
  // Calculate effective annual rate
  const effectiveAnnualRate = (Math.pow(maturityAmount / principal, 1 / tenureYears) - 1) * 100;
  
  // Calculate tax implications
  const annualInterest = totalInterest / tenureYears;
  const taxableInterest = Math.max(0, annualInterest - FD_RULES.tdsThreshold / tenureYears);
  const tdsAmount = taxableInterest * (FD_RULES.tdsRate / 100) * tenureYears;
  const postTaxMaturityAmount = maturityAmount - tdsAmount;

  return {
    principal: Math.round(principal),
    maturityAmount: Math.round(maturityAmount),
    totalInterest: Math.round(totalInterest),
    effectiveAnnualRate: Math.round(effectiveAnnualRate * 100) / 100,
    taxableInterest: Math.round(taxableInterest * tenureYears),
    tdsAmount: Math.round(tdsAmount),
    postTaxMaturityAmount: Math.round(postTaxMaturityAmount)
  };
}

/**
 * Generate FD period-wise schedule
 */
export function generateFDSchedule(inputs: FDInputs): FDScheduleItem[] {
  const { principal, interestRate, tenure, compoundingFrequency } = inputs;
  
  const schedule: FDScheduleItem[] = [];
  const annualRate = interestRate / 100;
  const compoundingPerYear = getCompoundingPerYear(compoundingFrequency);
  const ratePerPeriod = annualRate / compoundingPerYear;
  
  // Calculate number of compounding periods
  const tenureYears = tenure / 12;
  const totalPeriods = Math.ceil(compoundingPerYear * tenureYears);
  
  let balance = principal;
  let cumulativeInterest = 0;

  for (let period = 1; period <= totalPeriods; period++) {
    const openingBalance = balance;
    const interestEarned = balance * ratePerPeriod;
    balance += interestEarned;
    cumulativeInterest += interestEarned;

    const periodLabel = getPeriodLabel(period, compoundingFrequency);

    schedule.push({
      period,
      periodLabel,
      openingBalance: Math.round(openingBalance),
      interestEarned: Math.round(interestEarned),
      closingBalance: Math.round(balance),
      cumulativeInterest: Math.round(cumulativeInterest)
    });
  }

  return schedule;
}

/**
 * Calculate premature withdrawal amount
 */
export function calculatePrematureWithdrawal(
  inputs: FDInputs, 
  withdrawalMonths: number
): {
  maturityAmount: number;
  penaltyAmount: number;
  netAmount: number;
  penaltyRate: number;
} {
  if (withdrawalMonths >= inputs.tenure) {
    throw new Error('Withdrawal months cannot be greater than or equal to tenure');
  }

  // Calculate reduced interest rate
  const penaltyRate = FD_RULES.prematureWithdrawalPenalty;
  const reducedRate = Math.max(0, inputs.interestRate - penaltyRate);
  
  // Calculate maturity with reduced rate and reduced tenure
  const prematureInputs: FDInputs = {
    ...inputs,
    interestRate: reducedRate,
    tenure: withdrawalMonths
  };
  
  const result = calculateFD(prematureInputs);
  const normalResult = calculateFD({
    ...inputs,
    tenure: withdrawalMonths
  });
  
  const penaltyAmount = normalResult.maturityAmount - result.maturityAmount;

  return {
    maturityAmount: result.maturityAmount,
    penaltyAmount: Math.round(penaltyAmount),
    netAmount: result.maturityAmount,
    penaltyRate
  };
}

/**
 * Validate FD inputs against banking rules
 */
export function validateFDInputs(inputs: FDInputs): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const { principal, interestRate, tenure } = inputs;

  // Principal validation
  if (principal < FD_RULES.minPrincipal) {
    errors.push(`కనీస డిపాజిట్ మొత్తం ₹${FD_RULES.minPrincipal.toLocaleString('en-IN')}`);
  }
  if (principal > FD_RULES.maxPrincipal) {
    errors.push(`గరిష్ఠ డిపాజిట్ మొత్తం ₹${FD_RULES.maxPrincipal.toLocaleString('en-IN')}`);
  }

  // Interest rate validation
  if (interestRate < FD_RULES.minInterestRate) {
    errors.push(`కనీస వడ్డీ రేట్ ${FD_RULES.minInterestRate}%`);
  }
  if (interestRate > FD_RULES.maxInterestRate) {
    errors.push(`గరిష్ఠ వడ్డీ రేట్ ${FD_RULES.maxInterestRate}%`);
  }

  // Tenure validation
  if (tenure < FD_RULES.minTenureMonths) {
    errors.push(`కనీస వ్యవధి ${FD_RULES.minTenureMonths} నెలలు`);
  }
  if (tenure > FD_RULES.maxTenureMonths) {
    errors.push(`గరిష్ఠ వ్యవధి ${FD_RULES.maxTenureMonths} నెలలు`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Get current typical FD rates
 */
export function getTypicalFDRates(): { 
  tenure: string; 
  rate: number; 
  teluguTenure: string;
}[] {
  return [
    { tenure: '7 days - 45 days', rate: 3.0, teluguTenure: '7 రోజులు - 45 రోజులు' },
    { tenure: '46 days - 90 days', rate: 3.5, teluguTenure: '46 రోజులు - 90 రోజులు' },
    { tenure: '91 days - 180 days', rate: 4.0, teluguTenure: '91 రోజులు - 180 రోజులు' },
    { tenure: '181 days - 270 days', rate: 4.5, teluguTenure: '181 రోజులు - 270 రోజులు' },
    { tenure: '271 days - 1 year', rate: 5.0, teluguTenure: '271 రోజులు - 1 సంవత్సరం' },
    { tenure: '1 - 2 years', rate: 5.5, teluguTenure: '1 - 2 సంవత్సరాలు' },
    { tenure: '2 - 3 years', rate: 6.0, teluguTenure: '2 - 3 సంవత్సరాలు' },
    { tenure: '3 - 5 years', rate: 6.5, teluguTenure: '3 - 5 సంవత్సరాలు' },
    { tenure: '5+ years', rate: 7.0, teluguTenure: '5+ సంవత్సరాలు' }
  ];
}

/**
 * Helper function to get compounding frequency per year
 */
function getCompoundingPerYear(frequency: FDInputs['compoundingFrequency']): number {
  switch (frequency) {
    case 'monthly':
      return 12;
    case 'quarterly':
      return 4;
    case 'yearly':
      return 1;
    default:
      return 4; // Default to quarterly
  }
}

/**
 * Helper function to generate period labels
 */
function getPeriodLabel(period: number, frequency: FDInputs['compoundingFrequency']): string {
  switch (frequency) {
    case 'monthly':
      return `${period}వ నెల`;
    case 'quarterly':
      return `${period}వ త్రైమాసికం`;
    case 'yearly':
      return `${period}వ సంవత్సరం`;
    default:
      return `${period}వ కాలం`;
  }
}

/**
 * Format currency for Indian numbering system
 */
export function formatIndianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format percentage with Indian locale
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`;
}

/**
 * Calculate monthly interest for regular payout FDs
 */
export function calculateMonthlyInterest(principal: number, annualRate: number): number {
  return Math.round((principal * annualRate) / (12 * 100));
}

/**
 * Compare FD vs other investment options
 */
export function compareFDWithInvestments(
  fdAmount: number,
  fdRate: number,
  tenure: number
): {
  fd: { amount: number; postTax: number };
  savings: { amount: number; postTax: number };
  inflation: { realValue: number };
} {
  const tenureYears = tenure / 12;
  
  // FD calculation
  const fdMaturity = fdAmount * Math.pow((1 + fdRate / 100), tenureYears);
  const fdInterest = fdMaturity - fdAmount;
  const fdTax = Math.max(0, fdInterest - FD_RULES.tdsThreshold) * 0.3; // Assuming 30% tax
  const fdPostTax = fdMaturity - fdTax;
  
  // Savings account (assumed 3% annual)
  const savingsRate = 3.0;
  const savingsMaturity = fdAmount * Math.pow((1 + savingsRate / 100), tenureYears);
  const savingsInterest = savingsMaturity - fdAmount;
  const savingsTax = Math.max(0, savingsInterest - FD_RULES.tdsThreshold) * 0.3;
  const savingsPostTax = savingsMaturity - savingsTax;
  
  // Inflation impact (assumed 6% annual)
  const inflationRate = 6.0;
  const realValue = fdAmount / Math.pow((1 + inflationRate / 100), tenureYears);

  return {
    fd: {
      amount: Math.round(fdMaturity),
      postTax: Math.round(fdPostTax)
    },
    savings: {
      amount: Math.round(savingsMaturity),
      postTax: Math.round(savingsPostTax)
    },
    inflation: {
      realValue: Math.round(realValue)
    }
  };
}

/**
 * Get suggested values for FD calculator
 */
export function getSuggestedFDValues() {
  return {
    principal: 100000,
    interestRate: 6.5,
    tenure: 12, // 1 year
    compoundingFrequency: 'quarterly' as const
  };
}