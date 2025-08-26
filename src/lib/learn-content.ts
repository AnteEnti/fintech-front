/**
 * Learn Content Management System
 * Centralized configuration for all learn articles
 */

export interface LearnArticle {
  category: string;
  topic: string;
  title: string;
  teluguTitle: string;
  description: string;
  implemented: boolean;
  tags: string[];
  readingTime: number; // in minutes
  seoKeywords: string[];
}

export const LEARN_CATEGORIES = {
  'money-basics': {
    name: 'Money Basics',
    teluguName: 'డబ్బు మూలాలు',
    description: 'Basic financial literacy concepts'
  },
  'investments': {
    name: 'Investments', 
    teluguName: 'పెట్టుబడులు',
    description: 'Investment concepts and strategies'
  },
  'insurance': {
    name: 'Insurance',
    teluguName: 'బీమా',
    description: 'Insurance products and planning'
  },
  'loans': {
    name: 'Loans',
    teluguName: 'రుణాలు', 
    description: 'Loan products and management'
  },
  'tax-planning': {
    name: 'Tax Planning',
    teluguName: 'పన్ను ప్రణాళిక',
    description: 'Tax saving and planning strategies'
  }
} as const;

export const LEARN_ARTICLES: LearnArticle[] = [
  // Money Basics
  {
    category: 'money-basics',
    topic: 'budgeting',
    title: 'Personal Budgeting Guide',
    teluguTitle: 'వ్యక్తిగత బడ్జెట్ గైడ్',
    description: 'Learn how to create and manage a personal budget effectively',
    implemented: false,
    tags: ['budgeting', 'financial planning', 'money management'],
    readingTime: 7,
    seoKeywords: ['budgeting', 'బడ్జెట్', 'financial planning', 'money management']
  },
  {
    category: 'money-basics',
    topic: 'saving-tips',
    title: 'Smart Saving Tips',
    teluguTitle: 'తెలివైన పొదుపు చిట్కాలు',
    description: 'Practical tips for saving money in daily life',
    implemented: false,
    tags: ['savings', 'money tips', 'financial habits'],
    readingTime: 5,
    seoKeywords: ['saving tips', 'పొదుపు', 'money saving', 'financial tips']
  },
  {
    category: 'money-basics',
    topic: 'emergency-fund',
    title: 'Building Emergency Fund',
    teluguTitle: 'అత్యవసర నిధిని నిర్మించడం',
    description: 'How to build and maintain an emergency fund',
    implemented: false,
    tags: ['emergency fund', 'financial security', 'savings'],
    readingTime: 6,
    seoKeywords: ['emergency fund', 'అత్యవసర నిధి', 'financial security']
  },

  // Investments
  {
    category: 'investments',
    topic: 'mutual-funds',
    title: 'Understanding Mutual Funds',
    teluguTitle: 'మ్యూచువల్ ఫండ్స్ అర్థం చేసుకోండి',
    description: 'Complete guide to mutual funds in Telugu',
    implemented: true, // This is now implemented
    tags: ['mutual funds', 'SIP', 'lump sum', 'investment'],
    readingTime: 5,
    seoKeywords: ['mutual funds', 'మ్యూచువల్ ఫండ్స్', 'SIP', 'investment', 'పెట్టుబడి']
  },
  {
    category: 'investments',
    topic: 'sip-guide',
    title: 'SIP Investment Guide',
    teluguTitle: 'SIP పెట్టుబడి గైడ్',
    description: 'Detailed guide to Systematic Investment Plans',
    implemented: false,
    tags: ['SIP', 'systematic investment', 'mutual funds'],
    readingTime: 8,
    seoKeywords: ['SIP guide', 'systematic investment', 'SIP గైడ్', 'mutual fund SIP']
  },
  {
    category: 'investments',
    topic: 'stock-basics',
    title: 'Stock Market Basics',
    teluguTitle: 'స్టాక్ మార్కెట్ మూలాలు',
    description: 'Introduction to stock market investing',
    implemented: false,
    tags: ['stocks', 'stock market', 'equity investing'],
    readingTime: 10,
    seoKeywords: ['stock market', 'stocks', 'equity', 'స్టాక్ మార్కెట్']
  },

  // Insurance
  {
    category: 'insurance',
    topic: 'life-insurance',
    title: 'Life Insurance Guide',
    teluguTitle: 'జీవిత బీమా గైడ్',
    description: 'Understanding life insurance options',
    implemented: false,
    tags: ['life insurance', 'term insurance', 'insurance planning'],
    readingTime: 8,
    seoKeywords: ['life insurance', 'జీవిత బీమా', 'term insurance', 'insurance planning']
  },
  {
    category: 'insurance',
    topic: 'health-insurance',
    title: 'Health Insurance Guide',
    teluguTitle: 'ఆరోగ్య బీమా గైడ్',
    description: 'Choosing the right health insurance',
    implemented: false,
    tags: ['health insurance', 'medical insurance', 'healthcare'],
    readingTime: 7,
    seoKeywords: ['health insurance', 'ఆరోగ్య బీమా', 'medical insurance']
  },
  {
    category: 'insurance',
    topic: 'term-insurance',
    title: 'Term Insurance Explained',
    teluguTitle: 'టర్మ్ ఇన్షురెన్స్ వివరణ',
    description: 'Benefits and features of term insurance',
    implemented: false,
    tags: ['term insurance', 'pure protection', 'life cover'],
    readingTime: 6,
    seoKeywords: ['term insurance', 'టర్మ్ ఇన్షురెన్స్', 'life insurance', 'protection']
  },

  // Loans
  {
    category: 'loans',
    topic: 'home-loan-guide',
    title: 'Home Loan Guide',
    teluguTitle: 'హోమ్ లోన్ గైడ్',
    description: 'Everything about home loans',
    implemented: false,
    tags: ['home loan', 'property loan', 'EMI'],
    readingTime: 9,
    seoKeywords: ['home loan', 'హోమ్ లోన్', 'property loan', 'EMI']
  },
  {
    category: 'loans',
    topic: 'personal-loan-tips',
    title: 'Personal Loan Tips',
    teluguTitle: 'పర్సనల్ లోన్ చిట్కాలు',
    description: 'Smart tips for personal loans',
    implemented: false,
    tags: ['personal loan', 'loan tips', 'credit'],
    readingTime: 6,
    seoKeywords: ['personal loan', 'పర్సనల్ లోన్', 'loan tips', 'credit']
  },
  {
    category: 'loans',
    topic: 'credit-score',
    title: 'Credit Score Guide',
    teluguTitle: 'క్రెడిట్ స్కోర్ గైడ్',
    description: 'Understanding and improving credit score',
    implemented: false,
    tags: ['credit score', 'CIBIL', 'credit history'],
    readingTime: 7,
    seoKeywords: ['credit score', 'క్రెడిట్ స్కోర్', 'CIBIL score', 'credit report']
  },

  // Tax Planning
  {
    category: 'tax-planning',
    topic: 'income-tax',
    title: 'Income Tax Guide',
    teluguTitle: 'ఆదాయపు పన్ను గైడ్',
    description: 'Understanding income tax basics',
    implemented: false,
    tags: ['income tax', 'tax planning', 'tax saving'],
    readingTime: 8,
    seoKeywords: ['income tax', 'ఆదాయపు పన్ను', 'tax planning', 'tax saving']
  },
  {
    category: 'tax-planning',
    topic: 'tax-saving',
    title: 'Tax Saving Strategies',
    teluguTitle: 'పన్ను ఆదా వ్యూహాలు',
    description: 'Legal ways to save on taxes',
    implemented: false,
    tags: ['tax saving', 'tax deductions', '80C'],
    readingTime: 9,
    seoKeywords: ['tax saving', 'పన్ను ఆదా', 'tax deductions', 'section 80C']
  },
  {
    category: 'tax-planning',
    topic: 'deductions',
    title: 'Tax Deductions Guide',
    teluguTitle: 'పన్ను మినహాయింపుల గైడ్',
    description: 'Available tax deductions and exemptions',
    implemented: false,
    tags: ['tax deductions', 'exemptions', 'tax benefits'],
    readingTime: 10,
    seoKeywords: ['tax deductions', 'పన్ను మినహాయింపులు', 'tax exemptions', 'tax benefits']
  }
];

/**
 * Get article by category and topic
 */
export function getLearnArticle(category: string, topic: string): LearnArticle | null {
  return LEARN_ARTICLES.find(article => 
    article.category === category && article.topic === topic
  ) || null;
}

/**
 * Get all articles by category
 */
export function getArticlesByCategory(category: keyof typeof LEARN_CATEGORIES): LearnArticle[] {
  return LEARN_ARTICLES.filter(article => article.category === category);
}

/**
 * Get all implemented articles
 */
export function getImplementedArticles(): LearnArticle[] {
  return LEARN_ARTICLES.filter(article => article.implemented);
}

/**
 * Get article URL
 */
export function getArticleUrl(category: string, topic: string): string {
  return `/learn/${category}/${topic}`;
}

/**
 * Validate article content for Telugu financial rules
 */
export function validateArticleContent(content: string): {
  isCompliant: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];
  
  // Check for advisory language
  const advisoryWords = ['should invest', 'recommended', 'best investment', 'guaranteed returns'];
  advisoryWords.forEach(word => {
    if (content.toLowerCase().includes(word)) {
      warnings.push(`Advisory language detected: "${word}"`);
    }
  });
  
  // Check for recent market data references
  const currentYear = new Date().getFullYear();
  const recentYears = [currentYear, currentYear - 1];
  recentYears.forEach(year => {
    if (content.includes(year.toString())) {
      warnings.push(`Recent market data reference detected: ${year}`);
    }
  });
  
  // Check for mandatory disclaimer
  if (!content.includes('విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే')) {
    warnings.push('Missing mandatory Telugu disclaimer');
  }
  
  return {
    isCompliant: warnings.length === 0,
    warnings
  };
}

/**
 * Get related articles for a given article
 */
export function getRelatedArticles(category: string, topic: string, limit: number = 3): LearnArticle[] {
  const currentArticle = getLearnArticle(category, topic);
  if (!currentArticle) return [];
  
  // Get articles from same category first
  let related = LEARN_ARTICLES.filter(article => 
    article.category === category && 
    article.topic !== topic &&
    article.implemented
  );
  
  // If not enough, add from other categories with similar tags
  if (related.length < limit) {
    const otherCategoryArticles = LEARN_ARTICLES.filter(article =>
      article.category !== category &&
      article.implemented &&
      article.tags.some(tag => currentArticle.tags.includes(tag))
    );
    related = [...related, ...otherCategoryArticles];
  }
  
  return related.slice(0, limit);
}