/**
 * PPF Calculator Functions
 * Implementation of PPF calculation logic with government rules compliance
 */

export interface PPFInputs {
  annualContribution: number; // Annual contribution amount
  investmentPeriod: number;   // In years (minimum 15)
  interestRate: number;       // Annual interest rate in percentage
}

export interface PPFResult {
  totalContributions: number;
  totalInterestEarned: number;
  maturityAmount: number;
  taxSavings: number; // Section 80C tax savings
}

export interface PPFScheduleItem {
  year: number;
  contribution: number;
  interest: number;
  yearEndBalance: number;
  cumulativeContributions: number;
  cumulativeInterest: number;
}

export interface PPFRules {
  minAnnualContribution: number;
  maxAnnualContribution: number;
  minInvestmentPeriod: number;
  maxInvestmentPeriod: number;
  minInterestRate: number;
  maxInterestRate: number;
  partialWithdrawalAfter: number; // Years after which partial withdrawal is allowed
  loanFacilityAfter: number;      // Years after which loan facility is available
}

// PPF Rules as per Government guidelines
export const PPF_RULES: PPFRules = {
  minAnnualContribution: 500,
  maxAnnualContribution: 150000,
  minInvestmentPeriod: 15,
  maxInvestmentPeriod: 50,
  minInterestRate: 6.0,
  maxInterestRate: 9.0,
  partialWithdrawalAfter: 7,
  loanFacilityAfter: 3
};

/**
 * Calculate PPF maturity using compound interest formula
 * PPF compounds annually
 */
export function calculatePPF(inputs: PPFInputs): PPFResult {
  const { annualContribution, investmentPeriod, interestRate } = inputs;

  // Validate inputs
  if (annualContribution <= 0 || investmentPeriod <= 0 || interestRate <= 0) {
    throw new Error('All input values must be positive');
  }

  let totalBalance = 0;
  let totalContributions = 0;

  // Calculate year by year with annual compounding
  for (let year = 1; year <= investmentPeriod; year++) {
    // Add annual contribution at the beginning of the year
    totalBalance += annualContribution;
    totalContributions += annualContribution;
    
    // Add interest at the end of the year (compounded annually)
    totalBalance = totalBalance * (1 + interestRate / 100);
  }

  const totalInterestEarned = totalBalance - totalContributions;
  const taxSavings = calculateTaxSavings(annualContribution, investmentPeriod);

  return {
    totalContributions: Math.round(totalContributions),
    totalInterestEarned: Math.round(totalInterestEarned),
    maturityAmount: Math.round(totalBalance),
    taxSavings: Math.round(taxSavings)
  };
}

/**
 * Generate PPF year-wise schedule
 */
export function generatePPFSchedule(inputs: PPFInputs): PPFScheduleItem[] {
  const { annualContribution, investmentPeriod, interestRate } = inputs;
  
  const schedule: PPFScheduleItem[] = [];
  let balance = 0;
  let cumulativeContributions = 0;
  let cumulativeInterest = 0;

  for (let year = 1; year <= investmentPeriod; year++) {
    // Add contribution at the beginning of the year
    balance += annualContribution;
    cumulativeContributions += annualContribution;
    
    // Calculate interest for the year
    const yearInterest = balance * (interestRate / 100);
    balance += yearInterest;
    cumulativeInterest += yearInterest;

    schedule.push({
      year,
      contribution: annualContribution,
      interest: Math.round(yearInterest),
      yearEndBalance: Math.round(balance),
      cumulativeContributions,
      cumulativeInterest: Math.round(cumulativeInterest)
    });
  }

  return schedule;
}

/**
 * Calculate Section 80C tax savings
 * Assumes 30% tax bracket for maximum benefit calculation
 */
export function calculateTaxSavings(annualContribution: number, investmentPeriod: number): number {
  // PPF contributions are eligible for deduction under Section 80C
  // Maximum deduction limit is ₹1,50,000 per year
  const maxDeductionLimit = 150000;
  const taxRate = 0.30; // 30% tax bracket assumption
  
  const deductibleAmount = Math.min(annualContribution, maxDeductionLimit);
  const annualTaxSaving = deductibleAmount * taxRate;
  
  return annualTaxSaving * investmentPeriod;
}

/**
 * Validate PPF inputs against government rules
 */
export function validatePPFInputs(inputs: PPFInputs): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const { annualContribution, investmentPeriod, interestRate } = inputs;

  // Annual contribution validation
  if (annualContribution < PPF_RULES.minAnnualContribution) {
    errors.push(`కనీస వార్షిక కంట్రిబ్యూషన్ ₹${PPF_RULES.minAnnualContribution.toLocaleString('en-IN')}`);
  }
  if (annualContribution > PPF_RULES.maxAnnualContribution) {
    errors.push(`గరిష్ఠ వార్షిక కంట్రిబ్యూషన్ ₹${PPF_RULES.maxAnnualContribution.toLocaleString('en-IN')}`);
  }

  // Investment period validation
  if (investmentPeriod < PPF_RULES.minInvestmentPeriod) {
    errors.push(`కనీస పెట్టుబడి వ్యవధి ${PPF_RULES.minInvestmentPeriod} సంవత్సరాలు`);
  }
  if (investmentPeriod > PPF_RULES.maxInvestmentPeriod) {
    errors.push(`గరిష్ఠ పెట్టుబడి వ్యవధి ${PPF_RULES.maxInvestmentPeriod} సంవత్సరాలు`);
  }

  // Interest rate validation
  if (interestRate < PPF_RULES.minInterestRate) {
    errors.push(`కనీస వడ్డీ రేట్ ${PPF_RULES.minInterestRate}%`);
  }
  if (interestRate > PPF_RULES.maxInterestRate) {
    errors.push(`గరిష్ఠ వడ్డీ రేట్ ${PPF_RULES.maxInterestRate}%`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Get current PPF interest rate (approximate)
 */
export function getCurrentPPFRate(): number {
  return 7.1; // Current PPF rate as of recent government notifications
}

/**
 * Calculate partial withdrawal eligibility
 */
export function calculatePartialWithdrawal(
  balance: number, 
  yearOfInvestment: number
): { 
  eligible: boolean; 
  maxWithdrawal: number; 
  message: string; 
} {
  if (yearOfInvestment < PPF_RULES.partialWithdrawalAfter) {
    return {
      eligible: false,
      maxWithdrawal: 0,
      message: `${PPF_RULES.partialWithdrawalAfter}వ సంవత్సరం తర్వాత పార్షియల్ విత్‌డ్రాల్ అవకాశం`
    };
  }

  const maxWithdrawal = balance * 0.5; // 50% of balance
  return {
    eligible: true,
    maxWithdrawal: Math.round(maxWithdrawal),
    message: `మీరు గరిష్టంగా ₹${maxWithdrawal.toLocaleString('en-IN')} విత్‌డ్రా చేసుకోవచ్చు`
  };
}

/**
 * Calculate loan facility against PPF
 */
export function calculateLoanFacility(
  balance: number, 
  yearOfInvestment: number
): { 
  eligible: boolean; 
  maxLoan: number; 
  message: string; 
} {
  if (yearOfInvestment < PPF_RULES.loanFacilityAfter) {
    return {
      eligible: false,
      maxLoan: 0,
      message: `${PPF_RULES.loanFacilityAfter}వ సంవత్సరం తర్వాత లోన్ ఫెసిలిటీ అవకాశం`
    };
  }

  const maxLoan = balance * 0.25; // 25% of balance
  return {
    eligible: true,
    maxLoan: Math.round(maxLoan),
    message: `మీరు గరిష్టంగా ₹${maxLoan.toLocaleString('en-IN')} లోన్ తీసుకోవచ్చు`
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
 * Calculate effective rate of return including tax benefits
 */
export function calculateEffectiveReturn(
  maturityAmount: number,
  totalContributions: number,
  taxSavings: number,
  investmentPeriod: number
): number {
  const effectiveInvestment = totalContributions - taxSavings;
  const annualizedReturn = Math.pow(maturityAmount / effectiveInvestment, 1 / investmentPeriod) - 1;
  
  return annualizedReturn * 100; // Convert to percentage
}

/**
 * Get suggested values for PPF calculator
 */
export function getSuggestedPPFValues() {
  return {
    annualContribution: 150000, // Maximum contribution
    investmentPeriod: 15,       // Minimum lock-in period
    interestRate: getCurrentPPFRate()
  };
}

/**
 * PPF vs other investment comparison helper
 */
export function comparePPFWithFD(
  ppfAmount: number,
  fdAmount: number,
  ppfTaxSavings: number
): {
  ppfAdvantage: number;
  recommendation: string;
} {
  const effectivePPF = ppfAmount + ppfTaxSavings;
  const advantage = effectivePPF - fdAmount;
  
  return {
    ppfAdvantage: Math.round(advantage),
    recommendation: advantage > 0 
      ? `PPF లో ₹${Math.abs(advantage).toLocaleString('en-IN')} అదనపు రాబడి`
      : `FD లో ₹${Math.abs(advantage).toLocaleString('en-IN')} అదనపు రాబడి`
  };
}