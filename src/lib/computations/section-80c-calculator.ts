/**
 * Section 80C Deduction Calculator
 * Comprehensive calculation engine for Section 80C tax-saving investments
 * Following Income Tax Act provisions and deduction limits
 */

export interface Section80CInputs {
  // Annual income for tax bracket calculation
  annualIncome: number;
  
  // Individual 80C investment categories
  ppfInvestment: number;
  elssInvestment: number;
  lifeInsurancePremium: number;
  nscInvestment: number;
  taxSaverFD: number;
  homeLoanPrincipal: number;
  tuitionFees: number;
}

export interface Section80CResult {
  inputs: Section80CInputs;
  
  // Core calculation results
  totalInvestments: number;
  eligibleDeduction: number;
  remaining80CCapacity: number;
  taxSavings: number;
  
  // Investment breakdown
  investmentBreakdown: InvestmentCategoryBreakdown[];
  
  // Tax analysis
  marginalTaxRate: number;
  taxBracket: string;
  
  // Optimization recommendations
  optimizationSuggestions: OptimizationRecommendation[];
  
  // Educational insights
  insights: Section80CInsights;
}

export interface InvestmentCategoryBreakdown {
  category: string;
  teluguName: string;
  amount: number;
  percentage: number;
  characteristics: string;
  lockInPeriod?: string;
}

export interface OptimizationRecommendation {
  category: string;
  suggestedAmount: number;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}

export interface Section80CInsights {
  utilizationPercentage: number;
  recommendedAction: string;
  taxEfficiency: string;
  investmentMix: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Section 80C Constants
const SECTION_80C_LIMIT = 150000; // ₹1.5L maximum deduction
const TAX_BRACKETS = [
  { min: 0, max: 250000, rate: 0 },
  { min: 250001, max: 500000, rate: 5 },
  { min: 500001, max: 750000, rate: 10 },
  { min: 750001, max: 1000000, rate: 15 },
  { min: 1000001, max: 1250000, rate: 20 },
  { min: 1250001, max: 1500000, rate: 25 },
  { min: 1500001, max: Infinity, rate: 30 }
];

/**
 * Main Section 80C calculation function
 * Computes deductions, tax savings, and optimization recommendations
 */
export function calculateSection80C(inputs: Section80CInputs): Section80CResult {
  // Calculate total investments across all categories
  const totalInvestments = 
    inputs.ppfInvestment + 
    inputs.elssInvestment + 
    inputs.lifeInsurancePremium + 
    inputs.nscInvestment + 
    inputs.taxSaverFD + 
    inputs.homeLoanPrincipal + 
    inputs.tuitionFees;

  // Eligible deduction is capped at Section 80C limit
  const eligibleDeduction = Math.min(totalInvestments, SECTION_80C_LIMIT);
  
  // Remaining capacity for additional investments
  const remaining80CCapacity = Math.max(0, SECTION_80C_LIMIT - totalInvestments);
  
  // Determine marginal tax rate based on income
  const marginalTaxRate = getMarginalTaxRate(inputs.annualIncome);
  const taxBracket = getTaxBracket(inputs.annualIncome);
  
  // Calculate tax savings
  const taxSavings = eligibleDeduction * (marginalTaxRate / 100);
  
  // Generate investment breakdown
  const investmentBreakdown = generateInvestmentBreakdown(inputs, totalInvestments);
  
  // Generate optimization suggestions
  const optimizationSuggestions = generateOptimizationSuggestions(inputs, remaining80CCapacity, marginalTaxRate);
  
  // Generate insights
  const insights = generateSection80CInsights(inputs, totalInvestments, remaining80CCapacity);
  
  return {
    inputs,
    totalInvestments,
    eligibleDeduction,
    remaining80CCapacity,
    taxSavings,
    investmentBreakdown,
    marginalTaxRate,
    taxBracket,
    optimizationSuggestions,
    insights
  };
}

/**
 * Validate Section 80C inputs for correctness and limits
 */
export function validateSection80CInputs(inputs: Section80CInputs): ValidationResult {
  const errors: string[] = [];
  
  // Annual income validation
  if (inputs.annualIncome < 0 || inputs.annualIncome > 50000000) {
    errors.push('వార్షిక ఆదాయం 0 మరియు 5 కోట్ల మధ్య ఉండాలి');
  }
  
  // Individual investment validations
  const investmentFields = [
    { value: inputs.ppfInvestment, name: 'PPF పెట్టుబడి' },
    { value: inputs.elssInvestment, name: 'ELSS పెట్టుబడి' },
    { value: inputs.lifeInsurancePremium, name: 'జీవిత బీమా ప్రీమియం' },
    { value: inputs.nscInvestment, name: 'NSC పెట్టుబడి' },
    { value: inputs.taxSaverFD, name: 'టాక్స్ సేవర్ FD' },
    { value: inputs.homeLoanPrincipal, name: 'హోమ్ లోన్ ప్రిన్సిపల్' },
    { value: inputs.tuitionFees, name: 'ట్యూషన్ ఫీజు' }
  ];
  
  investmentFields.forEach(field => {
    if (field.value < 0) {
      errors.push(`${field.name} ప్రతికూల సంఖ్య కాకూడదు`);
    }
    if (field.value > SECTION_80C_LIMIT) {
      errors.push(`${field.name} గరిష్టంగా ₹${SECTION_80C_LIMIT.toLocaleString('en-IN')} వరకు ఉండాలి`);
    }
  });
  
  // Total investment check
  const totalInvestments = 
    inputs.ppfInvestment + 
    inputs.elssInvestment + 
    inputs.lifeInsurancePremium + 
    inputs.nscInvestment + 
    inputs.taxSaverFD + 
    inputs.homeLoanPrincipal + 
    inputs.tuitionFees;
    
  if (totalInvestments > SECTION_80C_LIMIT * 2) {
    errors.push(`మొత్తం పెట్టుబడులు చాలా ఎక్కువ. సెక్షన్ 80C పరిమితి ₹${SECTION_80C_LIMIT.toLocaleString('en-IN')}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Get marginal tax rate based on annual income
 */
function getMarginalTaxRate(annualIncome: number): number {
  for (const bracket of TAX_BRACKETS) {
    if (annualIncome >= bracket.min && annualIncome <= bracket.max) {
      return bracket.rate;
    }
  }
  return 30; // Default to highest bracket
}

/**
 * Get tax bracket description
 */
function getTaxBracket(annualIncome: number): string {
  if (annualIncome <= 250000) return '0% టాక్స్ బ్రాకెట్';
  if (annualIncome <= 500000) return '5% టాక్స్ బ్రాకెట్';
  if (annualIncome <= 750000) return '10% టాక్స్ బ్రాకెట్';
  if (annualIncome <= 1000000) return '15% టాక్స్ బ్రాకెట్';
  if (annualIncome <= 1250000) return '20% టాక్స్ బ్రాకెట్';
  if (annualIncome <= 1500000) return '25% టాక్స్ బ్రాకెట్';
  return '30% టాక్స్ బ్రాకెట్';
}

/**
 * Generate investment breakdown with percentages and characteristics
 */
function generateInvestmentBreakdown(inputs: Section80CInputs, totalInvestments: number): InvestmentCategoryBreakdown[] {
  if (totalInvestments === 0) return [];
  
  const categories = [
    {
      category: 'PPF',
      teluguName: 'పబ్లిక్ ప్రావిడెంట్ ఫండ్',
      amount: inputs.ppfInvestment,
      characteristics: '15 సంవత్సరాల లాక్-ఇన్, పన్ను రహిత వడ్డీ',
      lockInPeriod: '15 సంవత్సరాలు'
    },
    {
      category: 'ELSS',
      teluguName: 'ఈక్విటీ లింక్డ్ సేవింగ్స్ స్కీమ్',
      amount: inputs.elssInvestment,
      characteristics: '3 సంవత్సరాల లాక్-ఇన్, మార్కెట్ రిస్క్',
      lockInPeriod: '3 సంవత్సరాలు'
    },
    {
      category: 'Life Insurance',
      teluguName: 'జీవిత బీమా ప్రీమియం',
      amount: inputs.lifeInsurancePremium,
      characteristics: 'బీమా కవర్ + పన్ను ప్రయోజనం',
      lockInPeriod: 'పాలసీ వ్యవధి'
    },
    {
      category: 'NSC',
      teluguName: 'నేషనల్ సేవింగ్స్ సర్టిఫికేట్',
      amount: inputs.nscInvestment,
      characteristics: '5 సంవత్సరాల లాక్-ఇన్, స్థిర వడ్డీ',
      lockInPeriod: '5 సంవత్సరాలు'
    },
    {
      category: 'Tax Saver FD',
      teluguName: 'టాక్స్ సేవర్ ఫిక్స్‌డ్ డిపాజిట్',
      amount: inputs.taxSaverFD,
      characteristics: '5 సంవత్సరాల లాక్-ఇన్, స్థిర వడ్డీ',
      lockInPeriod: '5 సంవత్సరాలు'
    },
    {
      category: 'Home Loan Principal',
      teluguName: 'హోమ్ లోన్ ప్రిన్సిపల్',
      amount: inputs.homeLoanPrincipal,
      characteristics: 'గృహ రుణ ప్రధాన చెల్లింపు',
      lockInPeriod: 'రుణ వ్యవధి'
    },
    {
      category: 'Tuition Fees',
      teluguName: 'పిల్లల విద్య ఫీజు',
      amount: inputs.tuitionFees,
      characteristics: 'పిల్లల ఉన్నత విద్య ఖర్చులు',
      lockInPeriod: 'వార్షిక'
    }
  ];
  
  return categories
    .filter(cat => cat.amount > 0)
    .map(cat => ({
      ...cat,
      percentage: (cat.amount / totalInvestments) * 100
    }));
}

/**
 * Generate optimization suggestions for remaining 80C capacity
 */
function generateOptimizationSuggestions(
  inputs: Section80CInputs, 
  remaining80CCapacity: number, 
  marginalTaxRate: number
): OptimizationRecommendation[] {
  if (remaining80CCapacity <= 0) return [];
  
  const suggestions: OptimizationRecommendation[] = [];
  
  // High priority - PPF (if age < 50 and long-term planning)
  if (inputs.ppfInvestment < 150000 && remaining80CCapacity >= 10000) {
    suggestions.push({
      category: 'PPF',
      suggestedAmount: Math.min(remaining80CCapacity, 150000 - inputs.ppfInvestment),
      reason: 'దీర్ఘకాలిక పొదుపు మరియు పూర్తిగా పన్ను రహిత రిటర్న్లకు',
      priority: 'high'
    });
  }
  
  // Medium priority - ELSS (market-linked with shorter lock-in)
  if (inputs.elssInvestment < 50000 && remaining80CCapacity >= 10000) {
    suggestions.push({
      category: 'ELSS',
      suggestedAmount: Math.min(remaining80CCapacity, 50000),
      reason: 'కేవలం 3 సంవత్సరాల లాక్-ఇన్ మరియు ఈక్విటీ రిటర్న్ల అవకాశం',
      priority: 'medium'
    });
  }
  
  // Low priority - NSC (safe but lower returns)
  if (inputs.nscInvestment < 50000 && remaining80CCapacity >= 5000) {
    suggestions.push({
      category: 'NSC',
      suggestedAmount: Math.min(remaining80CCapacity, 50000),
      reason: 'రిస్క్ లేని స్థిర వడ్డీ పెట్టుబడి',
      priority: 'low'
    });
  }
  
  return suggestions;
}

/**
 * Generate insights and tips for Section 80C optimization
 */
function generateSection80CInsights(
  inputs: Section80CInputs, 
  totalInvestments: number, 
  remaining80CCapacity: number
): Section80CInsights {
  const utilizationPercentage = (totalInvestments / SECTION_80C_LIMIT) * 100;
  
  let recommendedAction: string;
  let taxEfficiency: string;
  let investmentMix: string;
  
  if (utilizationPercentage < 50) {
    recommendedAction = `మీరు సెక్షన్ 80C యొక్క ${(100 - utilizationPercentage).toFixed(1)}% వినియోగించలేదు. అదనపు ₹${remaining80CCapacity.toLocaleString('en-IN')} పెట్టుబడి చేయవచ్చు.`;
    taxEfficiency = 'మెరుగుపరచవచ్చు';
  } else if (utilizationPercentage < 90) {
    recommendedAction = `మంచి వినియోగం! మిగిలిన ₹${remaining80CCapacity.toLocaleString('en-IN')} కూడా పెట్టుబడి చేయండి.`;
    taxEfficiency = 'చాలా బాగుంది';
  } else {
    recommendedAction = 'అద్భుతం! మీరు సెక్షన్ 80C లిమిట్‌ను దాదాపు పూర్తిగా వినియోగించుకున్నారు.';
    taxEfficiency = 'అత్యుత్తమం';
  }
  
  // Investment mix analysis
  const hasEquity = inputs.elssInvestment > 0;
  const hasDebt = inputs.ppfInvestment + inputs.nscInvestment + inputs.taxSaverFD > 0;
  
  if (hasEquity && hasDebt) {
    investmentMix = 'సమతుల్య పెట్టుబడి మిశ్రమం - ఈక్విటీ మరియు డెట్ రెండూ ఉన్నాయి';
  } else if (hasEquity) {
    investmentMix = 'ఈక్విటీ కేంద్రీకృత - ఎక్కువ రిస్క్, ఎక్కువ రిటర్న్ అవకాశం';
  } else if (hasDebt) {
    investmentMix = 'డెట్ కేంద్రీకృత - తక్కువ రిస్క్, స్థిర రిటర్న్లు';
  } else {
    investmentMix = 'పెట్టుబడి మిశ్రమం లేదు';
  }
  
  return {
    utilizationPercentage,
    recommendedAction,
    taxEfficiency,
    investmentMix
  };
}

/**
 * Get Section 80C investment categories with details
 */
export function getSection80CCategories() {
  return [
    {
      id: 'ppf',
      name: 'PPF',
      teluguName: 'పబ్లిక్ ప్రావిడెంట్ ఫండ్',
      description: '15 సంవత్సరాల లాక్-ఇన్, పూర్తిగా పన్ను రహిత',
      maxAmount: 150000,
      lockIn: '15 years',
      riskLevel: 'తక్కువ'
    },
    {
      id: 'elss',
      name: 'ELSS',
      teluguName: 'ఈక్విటీ లింక్డ్ సేవింగ్స్ స్కీమ్',
      description: '3 సంవత్సరాల లాక్-ఇన్, మార్కెట్ లింక్డ్ రిటర్న్లు',
      maxAmount: 150000,
      lockIn: '3 years',
      riskLevel: 'ఎక్కువ'
    },
    {
      id: 'insurance',
      name: 'Life Insurance',
      teluguName: 'జీవిత బీమా ప్రీమియం',
      description: 'బీమా కవర్ + పన్ను ప్రయోజనం',
      maxAmount: 150000,
      lockIn: 'Policy term',
      riskLevel: 'తక్కువ'
    },
    {
      id: 'nsc',
      name: 'NSC',
      teluguName: 'నేషనల్ సేవింగ్స్ సర్టిఫికేట్',
      description: '5 సంవత్సరాల లాక్-ఇన్, స్థిర వడ్డీ',
      maxAmount: 150000,
      lockIn: '5 years',
      riskLevel: 'తక్కువ'
    },
    {
      id: 'taxSaverFD',
      name: 'Tax Saver FD',
      teluguName: 'టాక్స్ సేవర్ ఫిక్స్‌డ్ డిపాజిట్',
      description: '5 సంవత్సరాల లాక్-ఇన్, బ్యాంక్ వడ్డీ',
      maxAmount: 150000,
      lockIn: '5 years',
      riskLevel: 'తక్కువ'
    },
    {
      id: 'homeLoan',
      name: 'Home Loan Principal',
      teluguName: 'హోమ్ లోన్ ప్రిన్సిపల్',
      description: 'గృహ రుణ ప్రధాన చెల్లింపు',
      maxAmount: 150000,
      lockIn: 'Loan tenure',
      riskLevel: 'తక్కువ'
    },
    {
      id: 'tuition',
      name: 'Tuition Fees',
      teluguName: 'పిల్లల విద్య ఫీజు',
      description: 'పిల్లల ఉన్నత విద్య ఖర్చులు',
      maxAmount: 150000,
      lockIn: 'Annual',
      riskLevel: 'తక్కువ'
    }
  ];
}