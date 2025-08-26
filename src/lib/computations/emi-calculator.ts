/**
 * EMI Calculator Functions
 * Implementation of EMI calculation logic with loan type validation
 */

export type LoanType = 'home' | 'car' | 'personal';

export interface EMIInputs {
  loanAmount: number;
  interestRate: number; // Annual interest rate in percentage
  loanTenure: number;   // In years
  loanType: LoanType;
}

export interface EMIResult {
  monthlyEMI: number;
  totalAmountPayable: number;
  totalInterestPayable: number;
  principalAmount: number;
}

export interface EMIScheduleItem {
  month: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

export interface LoanTypeConfig {
  name: string;
  teluguName: string;
  minInterestRate: number;
  maxInterestRate: number;
  minTenure: number; // in years
  maxTenure: number; // in years
  minAmount: number;
  maxAmount: number;
  description: string;
}

// Loan type configurations with realistic Indian market ranges
export const LOAN_TYPE_CONFIGS: Record<LoanType, LoanTypeConfig> = {
  home: {
    name: 'Home Loan',
    teluguName: 'హోమ్ లోన్',
    minInterestRate: 6.5,
    maxInterestRate: 12.0,
    minTenure: 5,
    maxTenure: 30,
    minAmount: 500000, // 5 Lakhs
    maxAmount: 100000000, // 10 Crores
    description: 'గృహ కొనుగోలు కోసం దీర్ఘకాలిక లోన్'
  },
  car: {
    name: 'Car Loan',
    teluguName: 'కార్ లోన్',
    minInterestRate: 8.0,
    maxInterestRate: 15.0,
    minTenure: 1,
    maxTenure: 7,
    minAmount: 200000, // 2 Lakhs
    maxAmount: 10000000, // 1 Crore
    description: 'వాహన కొనుగోలు కోసం మధ్యకాలిక లోన్'
  },
  personal: {
    name: 'Personal Loan',
    teluguName: 'పర్సనల్ లోన్',
    minInterestRate: 10.5,
    maxInterestRate: 24.0,
    minTenure: 1,
    maxTenure: 5,
    minAmount: 50000, // 50 Thousand
    maxAmount: 4000000, // 40 Lakhs
    description: 'వ్యక్తిగత అవసరాల కోసం స్వల్పకాలిక లోన్'
  }
};

/**
 * Calculate EMI using the standard formula
 * EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
 */
export function calculateEMI(inputs: EMIInputs): EMIResult {
  const { loanAmount, interestRate, loanTenure } = inputs;

  // Validate inputs
  if (loanAmount <= 0 || interestRate <= 0 || loanTenure <= 0) {
    throw new Error('All input values must be positive');
  }

  // Convert annual interest rate to monthly and percentage to decimal
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = loanTenure * 12;

  // Handle edge case where interest rate is 0
  let monthlyEMI: number;
  if (interestRate === 0) {
    monthlyEMI = loanAmount / totalMonths;
  } else {
    // EMI formula: [P × R × (1+R)^N] / [(1+R)^N - 1]
    const numerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
    const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
    monthlyEMI = numerator / denominator;
  }

  const totalAmountPayable = monthlyEMI * totalMonths;
  const totalInterestPayable = totalAmountPayable - loanAmount;

  return {
    monthlyEMI: Math.round(monthlyEMI * 100) / 100,
    totalAmountPayable: Math.round(totalAmountPayable * 100) / 100,
    totalInterestPayable: Math.round(totalInterestPayable * 100) / 100,
    principalAmount: loanAmount
  };
}

/**
 * Generate complete EMI amortization schedule
 */
export function generateEMISchedule(inputs: EMIInputs): EMIScheduleItem[] {
  const { loanAmount, interestRate, loanTenure } = inputs;
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = loanTenure * 12;
  const result = calculateEMI(inputs);
  const { monthlyEMI } = result;

  const schedule: EMIScheduleItem[] = [];
  let remainingBalance = loanAmount;

  for (let month = 1; month <= totalMonths; month++) {
    let interestPaid: number;
    let principalPaid: number;

    if (interestRate === 0) {
      interestPaid = 0;
      principalPaid = monthlyEMI;
    } else {
      interestPaid = remainingBalance * monthlyRate;
      principalPaid = monthlyEMI - interestPaid;
    }

    remainingBalance = remainingBalance - principalPaid;

    // Handle rounding for final payment
    if (month === totalMonths) {
      principalPaid += remainingBalance;
      remainingBalance = 0;
    }

    schedule.push({
      month,
      emi: Math.round(monthlyEMI * 100) / 100,
      principalPaid: Math.round(principalPaid * 100) / 100,
      interestPaid: Math.round(interestPaid * 100) / 100,
      remainingBalance: Math.round(Math.max(0, remainingBalance) * 100) / 100
    });
  }

  return schedule;
}

/**
 * Generate yearly summary for chart display
 */
export function generateYearlyEMIData(inputs: EMIInputs) {
  const schedule = generateEMISchedule(inputs);
  const yearlyData: Array<{
    year: number;
    principalPaid: number;
    interestPaid: number;
    totalPaid: number;
    remainingBalance: number;
  }> = [];

  const monthsPerYear = 12;
  const totalYears = Math.ceil(schedule.length / monthsPerYear);

  for (let year = 1; year <= totalYears; year++) {
    const startMonth = (year - 1) * monthsPerYear;
    const endMonth = Math.min(year * monthsPerYear, schedule.length);
    
    const yearData = schedule.slice(startMonth, endMonth);
    const principalPaid = yearData.reduce((sum, item) => sum + item.principalPaid, 0);
    const interestPaid = yearData.reduce((sum, item) => sum + item.interestPaid, 0);
    const totalPaid = principalPaid + interestPaid;
    const remainingBalance = yearData[yearData.length - 1]?.remainingBalance || 0;

    yearlyData.push({
      year,
      principalPaid: Math.round(principalPaid * 100) / 100,
      interestPaid: Math.round(interestPaid * 100) / 100,
      totalPaid: Math.round(totalPaid * 100) / 100,
      remainingBalance: Math.round(remainingBalance * 100) / 100
    });
  }

  return yearlyData;
}

/**
 * Validate inputs against loan type constraints
 */
export function validateEMIInputs(inputs: EMIInputs): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const { loanAmount, interestRate, loanTenure, loanType } = inputs;
  const config = LOAN_TYPE_CONFIGS[loanType];

  // Basic validations
  if (loanAmount <= 0) {
    errors.push('లోన్ మొత్తం సున్నా కంటే ఎక్కువ ఉండాలి');
  }
  if (interestRate < 0) {
    errors.push('వడ్డీ రేట్ ప్రతికూలంగా ఉండకూడదు');
  }
  if (loanTenure <= 0) {
    errors.push('లోన్ వ్యవధి సున్నా కంటే ఎక్కువ ఉండాలి');
  }

  // Loan type specific validations
  if (loanAmount < config.minAmount) {
    errors.push(`${config.teluguName} కోసం కనీస మొత్తం ₹${config.minAmount.toLocaleString('en-IN')}`);
  }
  if (loanAmount > config.maxAmount) {
    errors.push(`${config.teluguName} కోసం గరిష్ఠ మొత్తం ₹${config.maxAmount.toLocaleString('en-IN')}`);
  }
  if (interestRate < config.minInterestRate) {
    errors.push(`${config.teluguName} కోసం కనీస వడ్డీ రేట్ ${config.minInterestRate}%`);
  }
  if (interestRate > config.maxInterestRate) {
    errors.push(`${config.teluguName} కోసం గరిష్ఠ వడ్డీ రేట్ ${config.maxInterestRate}%`);
  }
  if (loanTenure < config.minTenure) {
    errors.push(`${config.teluguName} కోసం కనీస వ్యవధి ${config.minTenure} సంవత్సరాలు`);
  }
  if (loanTenure > config.maxTenure) {
    errors.push(`${config.teluguName} కోసం గరిష్ఠ వ్యవధి ${config.maxTenure} సంవత్సరాలు`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
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
 * Get suggested interest rate for loan type
 */
export function getSuggestedInterestRate(loanType: LoanType): number {
  const config = LOAN_TYPE_CONFIGS[loanType];
  // Return average of min and max rates
  return Math.round(((config.minInterestRate + config.maxInterestRate) / 2) * 10) / 10;
}

/**
 * Get suggested loan amount for loan type
 */
export function getSuggestedLoanAmount(loanType: LoanType): number {
  // Return a reasonable default based on loan type
  switch (loanType) {
    case 'home':
      return 5000000; // 50 Lakhs
    case 'car':
      return 1000000; // 10 Lakhs
    case 'personal':
      return 300000; // 3 Lakhs
  }
}

/**
 * Get suggested tenure for loan type
 */
export function getSuggestedTenure(loanType: LoanType): number {
  switch (loanType) {
    case 'home':
      return 20; // 20 years
    case 'car':
      return 5; // 5 years
    case 'personal':
      return 3; // 3 years
  }
}