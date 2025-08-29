/**
 * Income Tax Calculator - Indian Tax System (FY 2024-25)
 * Implements both Old and New Tax Regime calculations
 * Includes HRA exemption, Section 80C deductions, and comprehensive tax planning
 */

export type TaxRegime = 'old' | 'new';
export type MetroCity = 'metro' | 'non-metro';

export interface IncomeTaxInputs {
  annualIncome: number;
  age: number;
  hraReceived: number;
  rentPaid: number;
  metroCity: MetroCity;
  section80C: number;
  section80D: number;
  otherDeductions: number;
  regime: TaxRegime;
}

export interface TaxSlabRate {
  min: number;
  max: number;
  rate: number;
  label: string;
}

export interface HRAExemption {
  received: number;
  exemptAmount: number;
  taxableHRA: number;
  calculation: {
    hraReceived: number;
    rentMinusTenPercent: number;
    fiftyOrFortyPercent: number;
    exemption: number;
  };
}

export interface RegimeCalculation {
  grossTaxableIncome: number;
  standardDeduction: number;
  hraExemption: HRAExemption;
  section80CDeduction: number;
  section80DDeduction: number;
  otherDeductions: number;
  totalDeductions: number;
  taxableIncome: number;
  taxBeforeRebate: number;
  rebateUs87A: number;
  taxAfterRebate: number;
  surcharge: number;
  healthEducationCess: number;
  totalTax: number;
  taxSlabs: TaxSlabCalculation[];
  effectiveTaxRate: number;
  marginalTaxRate: number;
}

export interface TaxSlabCalculation {
  slab: TaxSlabRate;
  applicableIncome: number;
  tax: number;
}

export interface IncomeTaxResult {
  oldRegime: RegimeCalculation;
  newRegime: RegimeCalculation;
  recommendedRegime: TaxRegime;
  taxSavings: number;
  comparison: {
    netTaxOld: number;
    netTaxNew: number;
    difference: number;
    percentageSaving: number;
  };
  insights: {
    effectiveTaxRateComparison: string;
    marginalTaxBracket: string;
    optimizationTips: string[];
  };
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Tax Slabs for FY 2024-25
export const OLD_REGIME_SLABS: TaxSlabRate[] = [
  { min: 0, max: 250000, rate: 0, label: 'Up to ₹2.5L' },
  { min: 250000, max: 500000, rate: 5, label: '₹2.5L - ₹5L' },
  { min: 500000, max: 1000000, rate: 20, label: '₹5L - ₹10L' },
  { min: 1000000, max: Infinity, rate: 30, label: 'Above ₹10L' }
];

export const NEW_REGIME_SLABS: TaxSlabRate[] = [
  { min: 0, max: 300000, rate: 0, label: 'Up to ₹3L' },
  { min: 300000, max: 600000, rate: 5, label: '₹3L - ₹6L' },
  { min: 600000, max: 900000, rate: 10, label: '₹6L - ₹9L' },
  { min: 900000, max: 1200000, rate: 15, label: '₹9L - ₹12L' },
  { min: 1200000, max: 1500000, rate: 20, label: '₹12L - ₹15L' },
  { min: 1500000, max: Infinity, rate: 30, label: 'Above ₹15L' }
];

export const STANDARD_DEDUCTION = 50000; // ₹50,000 for both regimes
export const SECTION_80C_LIMIT = 150000; // ₹1.5L
export const SECTION_80D_LIMIT = 25000; // ₹25K for below 60 years
export const SECTION_80D_LIMIT_SENIOR = 50000; // ₹50K for 60+ years
export const REBATE_87A_LIMIT = 500000; // Rebate available up to ₹5L income
export const REBATE_87A_AMOUNT = 12500; // Max rebate amount ₹12,500

/**
 * Validate income tax calculator inputs
 */
export function validateIncomeTaxInputs(inputs: IncomeTaxInputs): ValidationResult {
  const errors: string[] = [];

  // Annual income validation
  if (!inputs.annualIncome || inputs.annualIncome < 100000) {
    errors.push('వార్షిక ఆదాయం కనీసం ₹1,00,000 ఉండాలి');
  }
  if (inputs.annualIncome > 50000000) {
    errors.push('వార్షిక ఆదాయం గరిష్టంగా ₹5 కోట్లు వరకు లెక్కిస్తాము');
  }

  // Age validation
  if (!inputs.age || inputs.age < 18 || inputs.age > 100) {
    errors.push('వయస్సు 18-100 సంవత్సరాల మధ్య ఉండాలి');
  }

  // HRA validation
  if (inputs.hraReceived < 0) {
    errors.push('HRA మొత్తం ప్రతికూలంగా ఉండకూడదు');
  }
  if (inputs.rentPaid < 0) {
    errors.push('అద్దె మొత్తం ప్రతికూలంగా ఉండకూడదు');
  }
  if (inputs.hraReceived > inputs.annualIncome) {
    errors.push('HRA మొత్తం వార్షిక ఆదాయం కంటే ఎక్కువ ఉండకూడదు');
  }

  // Section 80C validation
  if (inputs.section80C < 0) {
    errors.push('సెక్షన్ 80C పెట్టుబడులు ప్రతికూలంగా ఉండకూడదు');
  }
  if (inputs.section80C > SECTION_80C_LIMIT) {
    errors.push(`సెక్షన్ 80C గరిష్ట పరిమితి ₹${SECTION_80C_LIMIT.toLocaleString('en-IN')}`);
  }

  // Section 80D validation
  if (inputs.section80D < 0) {
    errors.push('సెక్షన్ 80D ప్రీమియం ప్రతికూలంగా ఉండకూడదు');
  }
  const maxSection80D = inputs.age >= 60 ? SECTION_80D_LIMIT_SENIOR : SECTION_80D_LIMIT;
  if (inputs.section80D > maxSection80D) {
    errors.push(`సెక్షన్ 80D గరిష్ట పరిమితి ₹${maxSection80D.toLocaleString('en-IN')}`);
  }

  // Other deductions validation
  if (inputs.otherDeductions < 0) {
    errors.push('ఇతర మినహాయింపులు ప్రతికూలంగా ఉండకూడవు');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Calculate HRA exemption
 */
export function calculateHRAExemption(
  annualIncome: number,
  hraReceived: number,
  rentPaid: number,
  metroCity: MetroCity
): HRAExemption {
  if (hraReceived === 0 || rentPaid === 0) {
    return {
      received: hraReceived,
      exemptAmount: 0,
      taxableHRA: hraReceived,
      calculation: {
        hraReceived,
        rentMinusTenPercent: Math.max(0, rentPaid - (annualIncome * 0.1)),
        fiftyOrFortyPercent: annualIncome * (metroCity === 'metro' ? 0.5 : 0.4),
        exemption: 0
      }
    };
  }

  const rentMinusTenPercent = Math.max(0, rentPaid - (annualIncome * 0.1));
  const fiftyOrFortyPercent = annualIncome * (metroCity === 'metro' ? 0.5 : 0.4);
  
  const exemption = Math.min(
    hraReceived,
    rentMinusTenPercent,
    fiftyOrFortyPercent
  );

  return {
    received: hraReceived,
    exemptAmount: exemption,
    taxableHRA: Math.max(0, hraReceived - exemption),
    calculation: {
      hraReceived,
      rentMinusTenPercent,
      fiftyOrFortyPercent,
      exemption
    }
  };
}

/**
 * Calculate tax based on slabs
 */
export function calculateTaxBySlabs(income: number, slabs: TaxSlabRate[]): TaxSlabCalculation[] {
  const calculations: TaxSlabCalculation[] = [];
  let remainingIncome = income;

  for (const slab of slabs) {
    if (remainingIncome <= 0) break;

    const slabWidth = slab.max === Infinity ? remainingIncome : Math.min(slab.max - slab.min, remainingIncome);
    const applicableIncome = Math.min(slabWidth, remainingIncome);
    const tax = (applicableIncome * slab.rate) / 100;

    calculations.push({
      slab,
      applicableIncome,
      tax
    });

    remainingIncome -= applicableIncome;
  }

  return calculations;
}

/**
 * Calculate tax for a specific regime
 */
export function calculateRegimeTax(inputs: IncomeTaxInputs, regime: TaxRegime): RegimeCalculation {
  const grossTaxableIncome = inputs.annualIncome;
  
  // Standard deduction (same for both regimes)
  const standardDeduction = STANDARD_DEDUCTION;
  
  // HRA exemption calculation
  const hraExemption = calculateHRAExemption(
    inputs.annualIncome,
    inputs.hraReceived,
    inputs.rentPaid,
    inputs.metroCity
  );

  // Deductions based on regime
  let section80CDeduction = 0;
  let section80DDeduction = 0;
  let otherDeductions = 0;

  if (regime === 'old') {
    section80CDeduction = Math.min(inputs.section80C, SECTION_80C_LIMIT);
    const maxSection80D = inputs.age >= 60 ? SECTION_80D_LIMIT_SENIOR : SECTION_80D_LIMIT;
    section80DDeduction = Math.min(inputs.section80D, maxSection80D);
    otherDeductions = inputs.otherDeductions;
  }
  // New regime: No 80C, 80D or other deductions allowed

  const totalDeductions = standardDeduction + hraExemption.exemptAmount + 
                         section80CDeduction + section80DDeduction + otherDeductions;

  const taxableIncome = Math.max(0, grossTaxableIncome - totalDeductions);

  // Calculate tax using appropriate slabs
  const slabs = regime === 'old' ? OLD_REGIME_SLABS : NEW_REGIME_SLABS;
  const taxSlabs = calculateTaxBySlabs(taxableIncome, slabs);
  const taxBeforeRebate = taxSlabs.reduce((sum, calc) => sum + calc.tax, 0);

  // Rebate u/s 87A (available for both regimes if taxable income <= 5L)
  const rebateUs87A = taxableIncome <= REBATE_87A_LIMIT ? 
    Math.min(taxBeforeRebate, REBATE_87A_AMOUNT) : 0;

  const taxAfterRebate = Math.max(0, taxBeforeRebate - rebateUs87A);

  // Surcharge calculation
  let surcharge = 0;
  if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
    surcharge = taxAfterRebate * 0.10; // 10% surcharge
  } else if (taxableIncome > 10000000) {
    surcharge = taxAfterRebate * 0.15; // 15% surcharge
  }

  // Health and Education Cess (4%)
  const healthEducationCess = (taxAfterRebate + surcharge) * 0.04;

  const totalTax = taxAfterRebate + surcharge + healthEducationCess;

  // Calculate effective and marginal tax rates
  const effectiveTaxRate = grossTaxableIncome > 0 ? (totalTax / grossTaxableIncome) * 100 : 0;
  
  // Find marginal tax rate
  let marginalTaxRate = 0;
  for (const slab of slabs) {
    if (taxableIncome > slab.min) {
      marginalTaxRate = slab.rate;
    }
  }

  return {
    grossTaxableIncome,
    standardDeduction,
    hraExemption,
    section80CDeduction,
    section80DDeduction,
    otherDeductions,
    totalDeductions,
    taxableIncome,
    taxBeforeRebate,
    rebateUs87A,
    taxAfterRebate,
    surcharge,
    healthEducationCess,
    totalTax,
    taxSlabs,
    effectiveTaxRate,
    marginalTaxRate
  };
}

/**
 * Calculate comprehensive income tax with both regimes
 */
export function calculateIncomeTax(inputs: IncomeTaxInputs): IncomeTaxResult {
  // Calculate both regimes
  const oldRegime = calculateRegimeTax(inputs, 'old');
  const newRegime = calculateRegimeTax(inputs, 'new');

  // Determine recommended regime
  const recommendedRegime: TaxRegime = oldRegime.totalTax <= newRegime.totalTax ? 'old' : 'new';
  const taxSavings = Math.abs(oldRegime.totalTax - newRegime.totalTax);

  // Comparison metrics
  const comparison = {
    netTaxOld: oldRegime.totalTax,
    netTaxNew: newRegime.totalTax,
    difference: oldRegime.totalTax - newRegime.totalTax,
    percentageSaving: oldRegime.totalTax > 0 ? 
      (Math.abs(oldRegime.totalTax - newRegime.totalTax) / Math.max(oldRegime.totalTax, newRegime.totalTax)) * 100 : 0
  };

  // Generate insights and tips
  const optimizationTips: string[] = [];
  
  if (inputs.section80C < SECTION_80C_LIMIT && oldRegime.totalTax < newRegime.totalTax) {
    optimizationTips.push(`సెక్షన్ 80C కింద మరో ₹${(SECTION_80C_LIMIT - inputs.section80C).toLocaleString('en-IN')} పెట్టుబడి చేయవచ్చు`);
  }

  const maxSection80D = inputs.age >= 60 ? SECTION_80D_LIMIT_SENIOR : SECTION_80D_LIMIT;
  if (inputs.section80D < maxSection80D && oldRegime.totalTax < newRegime.totalTax) {
    optimizationTips.push(`హెల్త్ ఇన్షూరెన్స్ ప్రీమియం మరో ₹${(maxSection80D - inputs.section80D).toLocaleString('en-IN')} వరకు చెల్లించవచ్చు`);
  }

  if (inputs.hraReceived === 0 && inputs.rentPaid > 0) {
    optimizationTips.push('మీరు అద్దె చెల్లిస్తుంటే HRA క్లెయిమ్ చేయవచ్చు');
  }

  if (optimizationTips.length === 0) {
    optimizationTips.push('మీ ప్రస్తుత పన్ను ప్లానింగ్ బాగుంది');
  }

  const insights = {
    effectiveTaxRateComparison: `పాత విధానం: ${oldRegime.effectiveTaxRate.toFixed(1)}%, కొత్త విధానం: ${newRegime.effectiveTaxRate.toFixed(1)}%`,
    marginalTaxBracket: `మీ ప్రస్తుత మార్జినల్ టాక్స్ రేట్: ${recommendedRegime === 'old' ? oldRegime.marginalTaxRate : newRegime.marginalTaxRate}%`,
    optimizationTips
  };

  return {
    oldRegime,
    newRegime,
    recommendedRegime,
    taxSavings,
    comparison,
    insights
  };
}

/**
 * Get suggested input values for different income levels
 */
export function getSuggestedValues(incomeLevel: 'entry' | 'mid' | 'senior'): Partial<IncomeTaxInputs> {
  switch (incomeLevel) {
    case 'entry':
      return {
        annualIncome: 600000,
        age: 25,
        hraReceived: 120000,
        rentPaid: 180000,
        section80C: 50000,
        section80D: 15000,
        otherDeductions: 0
      };
    case 'mid':
      return {
        annualIncome: 1200000,
        age: 35,
        hraReceived: 240000,
        rentPaid: 360000,
        section80C: 150000,
        section80D: 25000,
        otherDeductions: 25000
      };
    case 'senior':
      return {
        annualIncome: 2500000,
        age: 45,
        hraReceived: 500000,
        rentPaid: 600000,
        section80C: 150000,
        section80D: 25000,
        otherDeductions: 50000
      };
  }
}