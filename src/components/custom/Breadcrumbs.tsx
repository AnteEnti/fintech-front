'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  const getBreadcrumbName = (segment: string) => {
    // For dynamic routes, provide meaningful names
    const pathMap: { [key: string]: string } = {
      // Main sections
      'calculators': 'కాలిక్యులేటర్లు',
      'learn': 'నేర్చుకోండి',
      'compare': 'పోలికలు',
      'tips': 'టిప్స్',
      'legal': 'చట్టపరమైనవి',
      'about': 'మా గురించి',
      
      // Calculator groups
      'investment': 'పెట్టుబడి',
      'loan': 'లోన్',
      'planning': 'ప్రణాళిక',
      
      // Calculator tools
      'sip': 'SIP కాలిక్యులేటర్',
      'emi': 'EMI కాలిక్యులేటర్',
      'ppf': 'PPF కాలిక్యులేటర్',
      'lumpsum': 'లంప్‌సమ్ కాలిక్యులేటర్',
      'home-loan': 'హోమ్ లోన్ కాలిక్యులేటర్',
      'personal-loan': 'పర్సనల్ లోన్ కాలిక్యులేటర్',
      'budget-planner': 'బడ్జెట్ ప్లానర్',
      'retirement': 'రిటైర్‌మెంట్ ప్లానర్',
      'goal-planning': 'గోల్ ప్లానింగ్',
      
      // Learn categories
      'money-basics': 'డబ్బు మూలాలు',
      'investments': 'పెట్టుబడులు',
      'insurance': 'బీమా',
      'loans': 'లోన్లు',
      'tax-planning': 'పన్ను ప్రణాళిక',
      
      // Learn topics
      'budgeting': 'బడ్జెట్ ప్లానింగ్',
      'saving-tips': 'పొదుపు టిప్స్',
      'emergency-fund': 'ఎమర్జెన్సీ ఫండ్',
      'mutual-funds': 'మ్యూచువల్ ఫండ్స్',
      'sip-guide': 'SIP గైడ్',
      'stock-basics': 'స్టాక్ ప్రాథమికాలు',
      'life-insurance': 'లైఫ్ ఇన్సూరెన్స్',
      'health-insurance': 'హెల్త్ ఇన్సూరెన్స్',
      'term-insurance': 'టర్మ్ ఇన్సూరెన్స్',
      'home-loan-guide': 'హోమ్ లోన్ గైడ్',
      'personal-loan-tips': 'పర్సనల్ లోన్ టిప్స్',
      'credit-score': 'క్రెడిట్ స్కోర్',
      'income-tax': 'ఇన్కమ్ ట్యాక్స్',
      'tax-saving': 'పన్ను ఆదా',
      'deductions': 'డిడక్షన్స్',
      
      // Comparisons
      'mf-vs-fd': 'మ్యూచువల్ ఫండ్ vs ఫిక్స్‌డ్ డిపాజిట్',
      'sip-vs-lumpsum': 'SIP vs లంప్‌సమ్',
      'term-vs-endowment': 'టర్మ్ vs ఎండౌమెంట్',
      'savings-vs-investment': 'పొదుపు vs పెట్టుబడి',
      'home-loan-vs-rent': 'హోమ్ లోన్ vs అద్దె',
      
      // Tips
      'daily-saving-tips': 'రోజువారీ పొదుపు టిప్స్',
      'reduce-emi': 'EMI తగ్గించే టిప్స్',
      'improve-cibil': 'CIBIL స్కోర్ మెరుగుపరచే టిప్స్',
      'tax-saving-tips': 'పన్ను ఆదా టిప్స్',
      'investment-basics': 'పెట్టుబడి ప్రాథమికాలు',
      'budget-planning': 'బడ్జెట్ ప్లానింగ్ టిప్స్',
      'emergency-fund-tips': 'ఎమర్జెన్సీ ఫండ్ టిప్స్',
      'avoid-mistakes': 'సాధారణ ఆర్థిక తప్పిదాలను ఎలా నివారించాలి',
      'digital-fraud-awareness': 'డిజిటల్ మోసాల గురించి తెలుసుకోండి',
      'credit-card-usage': 'క్రెడిట్ కార్డ్ వినియోగంలో తెలివైన పద్ధతులు',
      
      // Legal
      'privacy': 'ప్రైవసీ పాలసీ',
      'terms': 'నియమాలు మరియు షరతులు',
      'disclaimer': 'డిస్క్లేమర్'
    };

    return pathMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const buildHref = (index: number) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center hover:text-[#4B6FFF] transition-colors"
        aria-label="హోమ్ పేజీకి వెళ్ళండి"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const href = buildHref(index);
        const name = getBreadcrumbName(segment);

        return (
          <div key={segment} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {name}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-[#4B6FFF] transition-colors"
              >
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}