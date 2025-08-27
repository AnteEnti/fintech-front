/**
 * Calculator Routes Configuration
 * Centralized configuration for all calculator routes and redirects
 */

export interface Calculator {
  slug: string;
  name: string;
  teluguName: string;
  description: string;
  category: 'investment' | 'loan' | 'planning' | 'insurance';
  implemented: boolean;
  legacyUrls?: string[]; // For redirect mapping
}

export const CALCULATOR_CATEGORIES = {
  investment: {
    name: 'Investment Calculators',
    teluguName: 'పెట్టుబడి కాలిక్యులేటర్లు',
    description: 'మ్యూచువల్ ఫండ్, SIP, మరియు ఇతర పెట్టుబడులకు'
  },
  loan: {
    name: 'Loan Calculators', 
    teluguName: 'లోన్ కాలిక్యులేటర్లు',
    description: 'EMI, హోమ్ లోన్, పర్సనల్ లోన్ గణనలకు'
  },
  planning: {
    name: 'Planning Calculators',
    teluguName: 'ప్రణాళిక కాలిక్యులేటర్లు', 
    description: 'బడ్జెట్, రిటైర్‌మెంట్, గోల్ ప్లానింగ్'
  },
  insurance: {
    name: 'Insurance Calculators',
    teluguName: 'బీమా కాలిక్యులేటర్లు',
    description: 'జీవిత బీమా, హెల్త్ ఇన్షూరెన్స్ అవసరాల లెక్కింపు'
  }
} as const;

export const CALCULATORS: Calculator[] = [
  // Investment Calculators
  {
    slug: 'sip',
    name: 'SIP Calculator',
    teluguName: 'SIP కాలిక్యులేటర్',
    description: 'మీ SIP పెట్టుబడులు ఎంత పెరుగుతాయో లెక్కించండి',
    category: 'investment',
    implemented: true,
    legacyUrls: ['/calculators/sip']
  },
  {
    slug: 'lumpsum',
    name: 'Lump Sum Calculator',
    teluguName: 'లంప్‌సమ్ కాలిక్యులేటర్',
    description: 'ఒకేసారి పెట్టుబడి వృద్ధిని లెక్కించండి',
    category: 'investment',
    implemented: true,
    legacyUrls: ['/calculators/lumpsum']
  },
  {
    slug: 'ppf',
    name: 'PPF Calculator',
    teluguName: 'PPF కాలిక్యులేటర్',
    description: 'పబ్లిక్ ప్రావిడెంట్ ఫండ్ మెచ్యూరిటీ లెక్కించండి',
    category: 'investment',
    implemented: true,
    legacyUrls: ['/calculators/ppf']
  },
  {
    slug: 'fd',
    name: 'FD Calculator',
    teluguName: 'FD కాలిక్యులేటర్',
    description: 'ఫిక్స్‌డ్ డిపాజిట్ మెచ్యూరిటీ మరియు వడ్డీ లెక్కించండి',
    category: 'investment',
    implemented: true,
    legacyUrls: ['/calculators/fd']
  },

  // Loan Calculators
  {
    slug: 'emi',
    name: 'EMI Calculator',
    teluguName: 'EMI కాలిక్యులేటర్',
    description: 'లోన్ EMI మరియు వడ్డీని లెక్కించండి',
    category: 'loan',
    implemented: true,
    legacyUrls: ['/calculators/emi']
  },
  {
    slug: 'home-loan',
    name: 'Home Loan Calculator',
    teluguName: 'హోమ్ లోన్ కాలిక్యులేటర్',
    description: 'గృహ లోన్ EMI మరియు వడ్డీ లెక్కింపు',
    category: 'loan',
    implemented: false,
    legacyUrls: ['/calculators/home-loan']
  },
  {
    slug: 'personal-loan',
    name: 'Personal Loan Calculator',
    teluguName: 'పర్సనల్ లోన్ కాలిక్యులేటర్',
    description: 'వ్యక్తిగత లోన్ EMI మరియు వడ్డీ లెక్కింపు',
    category: 'loan',
    implemented: false,
    legacyUrls: ['/calculators/personal-loan']
  },

  // Planning Calculators
  {
    slug: 'budget-planner',
    name: 'Budget Planner',
    teluguName: 'బడ్జెట్ ప్లానర్',
    description: 'మాసిక బడ్జెట్ ప్రణాళిక మరియు ట్రాకింగ్',
    category: 'planning',
    implemented: false,
    legacyUrls: ['/calculators/budget-planner']
  },
  {
    slug: 'retirement',
    name: 'Retirement Planner',
    teluguName: 'రిటైర్‌మెంట్ ప్లానర్',
    description: 'పిల్లల విద్య మరియు రిటైర్‌మెంట్ ప్రణాళిక',
    category: 'planning',
    implemented: false,
    legacyUrls: ['/calculators/retirement']
  },
  {
    slug: 'goal-planning',
    name: 'Goal Planning Calculator',
    teluguName: 'గోల్ ప్లానింగ్',
    description: 'ఆర్థిక లక్ష్యాల కోసం పెట్టుబడి ప్రణాళిక',
    category: 'planning',
    implemented: false,
    legacyUrls: ['/calculators/goal-planning']
  },

  // Insurance Calculators
  {
    slug: 'life-insurance-needs',
    name: 'Life Insurance Needs Calculator',
    teluguName: 'లైఫ్ ఇన్షూరెన్స్ నీడ్స్ కాలిక్యులేటర్',
    description: 'మీకు ఎంత జీవిత బీమా కవర్ అవసరమో లెక్కించండి',
    category: 'insurance',
    implemented: true,
    legacyUrls: ['/calculators/life-insurance-needs']
  },
  {
    slug: 'term-plan',
    name: 'Term Plan Calculator',
    teluguName: 'టర్మ్ ప్లాన్ కాలిక్యులేటర్',
    description: 'వివిధ టర్మ్ ప్లాన్ ప్రీమియంలను పోల్చండి',
    category: 'insurance',
    implemented: true,
    legacyUrls: ['/calculators/term-plan']
  },
  {
    slug: 'health-insurance',
    name: 'Health Insurance Calculator',
    teluguName: 'హెల్త్ ఇన్షూరెన్స్ కాలిక్యులేటర్',
    description: 'హెల్త్ ఇన్షూరెన్స్ కవర్ అవసరాలు లెక్కించండి',
    category: 'insurance',
    implemented: false,
    legacyUrls: ['/calculators/health-insurance']
  }
];

/**
 * Get calculator by slug and category
 */
export function getCalculator(category: string, slug: string): Calculator | null {
  return CALCULATORS.find(calc => 
    calc.category === category && calc.slug === slug
  ) || null;
}

/**
 * Get all calculators by category
 */
export function getCalculatorsByCategory(category: keyof typeof CALCULATOR_CATEGORIES): Calculator[] {
  return CALCULATORS.filter(calc => calc.category === category);
}

/**
 * Get all implemented calculators
 */
export function getImplementedCalculators(): Calculator[] {
  return CALCULATORS.filter(calc => calc.implemented);
}

/**
 * Get the full URL for a calculator
 */
export function getCalculatorUrl(category: string, slug: string): string {
  return `/calculators/${category}/${slug}`;
}

/**
 * Generate redirect mappings for Next.js config
 */
export function generateRedirectMappings() {
  const redirects: Array<{source: string, destination: string, permanent: boolean}> = [];
  
  CALCULATORS.forEach(calc => {
    if (calc.legacyUrls) {
      calc.legacyUrls.forEach(legacyUrl => {
        redirects.push({
          source: legacyUrl,
          destination: getCalculatorUrl(calc.category, calc.slug),
          permanent: true
        });
      });
    }
  });
  
  return redirects;
}

/**
 * Get navigation breadcrumb data
 */
export function getCalculatorBreadcrumb(category: string, slug: string) {
  const calculator = getCalculator(category, slug);
  if (!calculator) return null;
  
  return {
    category: CALCULATOR_CATEGORIES[calculator.category as keyof typeof CALCULATOR_CATEGORIES],
    calculator
  };
}

/**
 * Validate if a calculator route exists
 */
export function isValidCalculatorRoute(category: string, slug: string): boolean {
  return CALCULATORS.some(calc => 
    calc.category === category && calc.slug === slug
  );
}