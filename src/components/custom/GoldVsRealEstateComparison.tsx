"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calculator, BookOpen, ArrowRight, CheckCircle, AlertCircle, Coins, Building } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GoldVsRealEstateComparison() {
  // Telemetry tracking will be handled by parent TelemetryTracker
  const handleInteraction = (action: string, detail?: string) => {
    // Simple console log for development - production telemetry handled by TelemetryTracker
    console.log('Investment comparison interaction:', action, detail);
  };

  const comparisonData = [
    {
      aspect: "ప్రారంభ పెట్టుబడి",
      gold: "తక్కువ మొత్తంతో ప్రారంభించవచ్చు (₹1000 నుండి)",
      realEstate: "అధిక మొత్తం అవసరం (₹10 లక్షలు+)",
      goldIcon: "💰",
      realEstateIcon: "🏢"
    },
    {
      aspect: "లిక్విడిటీ (అమ్మకం సౌలభ్యం)",
      gold: "వెంటనే అమ్మవచ్చు, ఎక్కడైనా కొనుగోలుదారులు ఉంటారు",
      realEstate: "అమ్మడానికి నెలలు/సంవత్సరాలు పట్టవచ్చు",
      goldIcon: "⚡",
      realEstateIcon: "⏳"
    },
    {
      aspect: "రిటర్న్ పొటెన్షియల్",
      gold: "ద్రవ్యోల్బణంతో పాటు వృద్ధి, సాధారణంగా 8-12% వార్షిక",
      realEstate: "అప్రిసియేషన్ + రెంటల్ రాబడి, 10-15% వార్షిక అవకాశం",
      goldIcon: "📈",
      realEstateIcon: "🏗️"
    },
    {
      aspect: "నిల్వ మరియు భద్రత",
      gold: "లాకర్ లేదా బ్యాంక్‌లో నిల్వ, దొంగతనం రిస్క్",
      realEstate: "భౌతిక ఆస్తి, లీగల్ సమస్యలు/ఎన్‌క్రోచ్‌మెంట్ రిస్క్",
      goldIcon: "🔐",
      realEstateIcon: "🏛️"
    },
    {
      aspect: "నిర్వహణ ఖర్చులు",
      gold: "లాకర్ అద్దె, బీమా ఖర్చులు తక్కువ",
      realEstate: "మెయింటెనెన్స్, ప్రాపర్టీ ట్యాక్స్, సొసైటీ ఛార్జీలు",
      goldIcon: "💳",
      realEstateIcon: "🔧"
    },
    {
      aspect: "పన్ను చికిత్స",
      gold: "LTCG/STCG, 3 సంవత్సరాల హోల్డింగ్ పీరియడ్",
      realEstate: "LTCG బెనిఫిట్, ఇండెక్సేషన్, సెక్షన్ 54 ఎగ్జెంప్షన్",
      goldIcon: "📊",
      realEstateIcon: "📋"
    },
    {
      aspect: "మార్కెట్ రిస్క్",
      gold: "గ్లోబల్ కమోడిటీ ప్రైస్‌లపై ఆధారం, అస్థిరత ఎక్కువ",
      realEstate: "లొకేషన్, డెవలప్మెంట్‌పై ఆధారం, స్టేబుల్ గ్రోత్",
      goldIcon: "🌍",
      realEstateIcon: "🏙️"
    },
    {
      aspect: "ద్రవ్యోల్బణ రక్షణ",
      gold: "సంప్రదాయ ఇన్‌ఫ్లేషన్ హెడ్జ్, చారిత్రక ట్రాక్ రికార్డ్",
      realEstate: "రెంటల్ ఇన్కమ్ + అప్రిసియేషన్ ద్వారా రక్షణ",
      goldIcon: "🛡️",
      realEstateIcon: "💹"
    }
  ];

  const goldAdvantages = [
    "తక్కువ పెట్టుబడితో ప్రారంభించవచ్చు",
    "అధిక లిక్విడిటీ - వెంటనే అమ్మవచ్చు",
    "గ్లోబల్‌గా ఎక్కడైనా ఆమోదయోగ్యం",
    "ఇన్‌ఫ్లేషన్ హెడ్జ్ - ధరల పెరుగుదల రక్షణ",
    "కరెన్సీ డివాల్యూయేషన్ రక్షణ",
    "డైవర్సిఫికేషన్ సౌలభ్యం - వివిధ రూపాల్లో"
  ];

  const goldDisadvantages = [
    "ఆదాయం ఉత్పత్తి చేయదు (రెంటల్ లేదు)",
    "మేకింగ్ ఛార్జీలు మరియు వేస్టేజ్",
    "నిల్వ ఖర్చులు మరియు బీమా",
    "దొంగతనం/నష్టపోయే రిస్క్",
    "ప్రైస్ వోలటిలిటీ ఎక్కువ",
    "కొనుగోలు-అమ్మకం స్ప్రెడ్"
  ];

  const realEstateAdvantages = [
    "రెంటల్ ఇన్కమ్ - నిర్దిష్ట ఆదాయం",
    "దీర్ఘకాలిక అప్రిసియేషన్ పొటెన్షియల్",
    "లీవరేజ్ సదుపాయం - లోన్ తీసుకోవచ్చు",
    "టాక్స్ బెనిఫిట్స్ - సెక్షన్ 54, ఇండెక్సేషన్",
    "భౌతిక ఆస్తి - కనిపించే పెట్టుబడి",
    "పోర్ట్‌ఫోలియో డైవర్సిఫికేషన్"
  ];

  const realEstateDisadvantages = [
    "అధిక ప్రారంభ పెట్టుబడి అవసరం",
    "తక్కువ లిక్విడిటీ - అమ్మడం కష్టం",
    "అధిక ట్రాన్సాక్షన్ కాస్ట్స్",
    "నిర్వహణ హెడేచ్ - మెయింటెనెన్స్, టెన్యంట్లు",
    "లొకేషన్ రిస్క్ - ప్రాంత అభివృద్ధిపై ఆధారం",
    "రెగ్యులేటరీ రిస్క్స్ - RERA, లీగల్ సమస్యలు"
  ];

  const scenarios = [
    {
      title: "చిన్న పెట్టుబడిదారులు (₹50,000 - ₹5 లక్షలు)",
      goldSuit: "SGB లేదా గోల్డ్ ETF ద్వారా చిన్న మొత్తాలతో ప్రారంభించవచ్చు",
      realEstateSuit: "REIT లేదా రియల్ ఎస్టేట్ మ్యూచువల్ ఫండ్స్ పరిగణించవచ్చు",
      icon: "🔰"
    },
    {
      title: "మధ్యతరగతి పెట్టుబడిదారులు (₹5 - ₹50 లక్షలు)",
      goldSuit: "పోర్ట్‌ఫోలియోలో 5-10% అలోకేషన్, వివిధ గోల్డ్ ఇన్వెస్ట్‌మెంట్ మిక్స్",
      realEstateSuit: "సెకండ్ హోమ్ లేదా కమర్షియల్ ప్రాపర్టీ కొనుగోలు",
      icon: "🏠"
    },
    {
      title: "అధిక నెట్‌వర్త్ ఇండివిజువల్స్ (₹50 లక్షలు+)",
      goldSuit: "ఫిజికల్ గోల్డ్ + SGB + గోల్డ్ ETF కాంబినేషన్",
      realEstateSuit: "మల్టిపుల్ ప్రాపర్టీలు, కమర్షియల్ రియల్ ఎస్టేట్, REITs",
      icon: "💎"
    }
  ];

  const investmentForms = [
    {
      category: "బంగారం పెట్టుబడి రూపాలు",
      options: [
        { form: "ఫిజికల్ గోల్డ్", pros: "టచ్ అండ్ ఫీల్", cons: "మేకింగ్ ఛార్జీలు, నిల్వ సమస్య" },
        { form: "సవరన్ గోల్డ్ బాండ్స్", pros: "2.5% వడ్డీ, నో మేకింగ్ ఛార్జ్", cons: "8 సంవత్సరాల లాక్-ఇన్" },
        { form: "గోల్డ్ ETF", pros: "లిక్విడ్, ట్రేడబుల్", cons: "ఎక్స్‌పెన్స్ రేషియో" },
        { form: "డిజిటల్ గోల్డ్", pros: "చిన్న మొత్తాలు, సేఫ్", cons: "3rd పార్టీ రిస్క్" }
      ]
    },
    {
      category: "రియల్ ఎస్టేట్ పెట్టుబడి రూపాలు",
      options: [
        { form: "రెసిడెన్షియల్ ప్రాపర్టీ", pros: "రెంటల్ ఇన్కమ్, అప్రిసియేషన్", cons: "అధిక పెట్టుబడి, మెయింటెనెన్స్" },
        { form: "కమర్షియల్ ప్రాపర్టీ", pros: "అధిక రెంటల్ యీల్డ్", cons: "బిజినెస్ రిస్క్, వేకన్సీ రిస్క్" },
        { form: "REITs", pros: "లిక్విడ్, తక్కువ పెట్టుబడి", cons: "మార్కెట్ రిస్క్, REIT మేనేజ్మెంట్ రిస్క్" },
        { form: "ప్లాట్స్/ల్యాండ్", pros: "అప్రిసియేషన్ పొటెన్షియల్", cons: "ఆదాయం లేదు, లిక్విడిటీ తక్కువ" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            బంగారం vs రియల్ ఎస్టేట్: పెట్టుబడి పోలిక
          </CardTitle>
          <p className="text-lg text-gray-600 text-center mt-4" style={{ lineHeight: '1.6' }}>
            సంప్రదాయ పెట్టుబడి ఎంపికల మధ్య వ్యత్యాసాలను అర్థం చేసుకోండి
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Coins className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">బంగారం పెట్టుబడి</h3>
              <p className="text-yellow-800 text-sm">
                సంప్రదాయ ఇన్‌ఫ్లేషన్ హెడ్జ్ - లిక్విడ్ మరియు గ్లోబల్
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">రియల్ ఎస్టేట్ పెట్టుబడి</h3>
              <p className="text-blue-800 text-sm">
                ఆదాయం + అప్రిసియేషన్ - దీర్ఘకాలిక సంపద నిర్మాణం
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            వివరమైన పోలిక
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Mobile-friendly stacked layout */}
          <div className="block md:hidden space-y-6">
            {comparisonData.map((item, index) => (
              <Card key={index} className="border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{item.aspect}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.goldIcon}</span>
                      <h4 className="font-semibold text-yellow-900">బంగారం</h4>
                    </div>
                    <p className="text-yellow-800 text-sm">{item.gold}</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.realEstateIcon}</span>
                      <h4 className="font-semibold text-blue-900">రియల్ ఎస్టేట్</h4>
                    </div>
                    <p className="text-blue-800 text-sm">{item.realEstate}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop table layout */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold text-gray-900">పోలిక అంశం</TableHead>
                  <TableHead className="text-center font-bold text-yellow-900">
                    <div className="flex items-center justify-center gap-2">
                      <Coins className="w-5 h-5" />
                      బంగారం
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-bold text-blue-900">
                    <div className="flex items-center justify-center gap-2">
                      <Building className="w-5 h-5" />
                      రియల్ ఎస్టేట్
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-semibold text-gray-900 text-center">
                      {item.aspect}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xl">{item.goldIcon}</span>
                      </div>
                      <p className="text-yellow-800 text-sm">{item.gold}</p>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xl">{item.realEstateIcon}</span>
                      </div>
                      <p className="text-blue-800 text-sm">{item.realEstate}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Advantages and Disadvantages */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Gold Pros & Cons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-yellow-900 flex items-center gap-2">
              <Coins className="w-6 h-6" />
              బంగారం - ప్రయోజనాలు & పరిమితులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {goldAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-1">•</span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                పరిమితులు
              </h4>
              <ul className="space-y-2">
                {goldDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Real Estate Pros & Cons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-900 flex items-center gap-2">
              <Building className="w-6 h-6" />
              రియల్ ఎస్టేట్ - ప్రయోజనాలు & పరిమితులు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ప్రయోజనాలు
              </h4>
              <ul className="space-y-2">
                {realEstateAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-1">•</span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                పరిమితులు
              </h4>
              <ul className="space-y-2">
                {realEstateDisadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Investment Forms and Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            పెట్టుబడి రూపాలు మరియు ఎంపికలు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {investmentForms.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.options.map((option, optionIndex) => (
                    <Card key={optionIndex} className="border">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{option.form}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="p-2 bg-green-50 rounded">
                            <span className="text-green-800"><strong>లాభాలు:</strong> {option.pros}</span>
                          </div>
                          <div className="p-2 bg-red-50 rounded">
                            <span className="text-red-800"><strong>నష్టాలు:</strong> {option.cons}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario-based Guidance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            వివిధ పెట్టుబడిదారుల కోసం మార్గదర్శనం
          </CardTitle>
          <p className="text-gray-600 mt-2" style={{ lineHeight: '1.6' }}>
            మీ పెట్టుబడి కెపాసిటీ మరియు రిస్క్ టాలెరెన్స్ బట్టి ఏది మంచిదో అర్థం చేసుకోండి
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{scenario.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{scenario.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                        <Coins className="w-4 h-4" />
                        బంగారం సూత్రాలు
                      </h4>
                      <p className="text-yellow-800 text-sm">{scenario.goldSuit}</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        రియల్ ఎస్టేట్ సూత్రాలు
                      </h4>
                      <p className="text-blue-800 text-sm">{scenario.realEstateSuit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Related Tools & Resources */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-indigo-900 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              సంబంధిత కాలిక్యులేటర్లు
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">కాపిటల్ గెయిన్స్ కాలిక్యులేటర్</h4>
                  <p className="text-gray-500 text-sm">పన్ను ప్రభావం లెక్కించండి</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>
            
            <Link 
              href="/calculators/planning/goal"
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              onClick={() => handleInteraction('goal-planner-click')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-purple-900">గోల్ ప్లానర్</h4>
                  <p className="text-purple-700 text-sm">పోర్ట్‌ఫోలియో అలోకేషన్ ప్లానింగ్</p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-600" />
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-purple-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              మరింత తెలుసుకోండి
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">బంగారం పెట్టుబడులు</h4>
                  <p className="text-gray-500 text-sm">SGB, ETF, ఫిజికల్ గోల్డ్</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-600">రియల్ ఎస్టేట్ & REITs</h4>
                  <p className="text-gray-500 text-sm">ప్రాపర్టీ పెట్టుబడులు, REITs బేసిక్స్</p>
                </div>
                <Badge variant="secondary">త్వరలో</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            తరచుగా అడిగే ప్రశ్నలు
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left">
                బంగారంలో పెట్టుబడి చేయాలా లేక రియల్ ఎస్టేట్‌లో చేయాలా?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  మీ పెట్టుబడి లక్ష్యాలు, కాలవ్యవధి, రిస్క్ టాలెరెన్స్ పరిగణించండి. చిన్న మొత్తాలకు బంగారం మంచిది, 
                  అధిక మొత్తాలు మరియు రెగ్యులర్ ఇన్కమ్ కావాలంటే రియల్ ఎస్టేట్ పరిగణించండి. 
                  ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left">
                పోర్ట్‌ఫోలియోలో బంగారం ఎంత శాతం ఉంచాలి?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  సాధారణంగా 5-10% బంగారం అలోకేషన్ సిఫార్సు చేస్తారు. యువకులు తక్కువ (5%), సీనియర్ సిటిజెన్లు ఎక్కువ (10%) 
                  ఉంచవచ్చు. మార్కెట్ అస్థిరత సమయాల్లో దీన్ని పెంచవచ్చు. రియల్ ఎస్టేట్ 20-30% వరకు ఉంచవచ్చు.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left">
                ఫిజికల్ గోల్డ్ vs గోల్డ్ ETF - ఏది మంచిది?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  ఫిజికల్ గోల్డ్ - భావోద్వేగ విలువ, అత్యవసర సమయాల్లో ఉపయోగం, కానీ మేకింగ్ ఛార్జీలు ఎక్కువ. 
                  గోల్డ్ ETF - లిక్విడ్, తక్కువ కాస్ట్, కానీ డీమాట్ అకౌంట్ అవసరం. మిక్స్డ్ అప్రోచ్ మంచిది.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left">
                రియల్ ఎస్టేట్‌లో REITs vs డైరెక్ట్ ప్రాపర్టీ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  REITs - తక్కువ పెట్టుబడి, లిక్విడ్, ప్రొఫెషనల్ మేనేజ్మెంట్, కానీ మార్కెట్ రిస్క్. 
                  డైరెక్ట్ ప్రాపర్టీ - కంట్రోల్, అప్రిసియేషన పొటెన్షియల్, కానీ అధిక పెట్టుబడి మరియు మేనేజ్మెంట్ హెడేచ్.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger className="text-left">
                ఇన్‌ఫ్లేషన్ హెడ్జింగ్ కోసం ఏది మంచిది?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  చారిత్రకంగా బంగారం మంచి ఇన్‌ఫ్లేషన్ హెడ్జ్. రియల్ ఎస్టేట్ కూడా రెంటల్ ఇన్కమ్ పెరుగుదల ద్వారా రక్షణ ఇస్తుంది. 
                  రెండూ కలిపి ఉంచడం మంచిది. దీర్ఘకాలికంగా రియల్ ఎస్టేట్ బెటర్ ప్రదర్శన చూపించవచ్చు.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Key Decision Factors Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            నిర్णయ కారకాలు - సారాంశం
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <Coins className="w-5 h-5" />
                బంగారం ఎంచుకోండి - ఒకవేళ
              </h3>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li>• తక్కువ పెట్టుబడి బడ్జెట్ ఉంటే</li>
                <li>• అధిక లిక్విడిటీ అవసరం ఉంటే</li>
                <li>• ఇన్‌ఫ్లేషన్ హెడ్జింగ్ కావాలంటే</li>
                <li>• పోర్ట్‌ఫోలియో డైవర్సిఫికేషన్ కోసం</li>
                <li>• కరెన్సీ డివాల్యూయేషన్ రిస్క్ ఉంటే</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                రియల్ ఎస్టేట్ ఎంచుకోండి - ఒకవేళ
              </h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• అధిక పెట్టుబడి కెపాసిటీ ఉంటే</li>
                <li>• రెగ్యులర్ ఇన్కమ్ కావాలంటే</li>
                <li>• దీర్ఘకాలిక వెల్త్ బిల్డింగ్ కోసం</li>
                <li>• టాక్స్ బెనిఫిట్స్ అవసరం ఉంటే</li>
                <li>• లీవరేజ్ ఉపయోగించాలని అనిపిస్తే</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm text-center" style={{ lineHeight: '1.6' }}>
              <strong>ముఖ్యమైన గమనిక:</strong> ఈ పోలిక విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే. 
              వ్యక్తిగత పెట్టుబడి నిర్ణయానికి ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Final Disclaimer */}
      <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-lg font-semibold text-red-900 mb-3">
          ముఖ్యమైన నిరాకరణ
        </h3>
        <p className="text-red-800 text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
          ఈ సమాచారం పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే అందించబడింది. ఇది పెట్టుబడి సలహా కాదు. 
          బంగారం మరియు రియల్ ఎస్టేట్ మార్కెట్లు రిస్క్‌లకు లోబడి ఉంటాయి మరియు మార్కెట్ పరిస్థితులకు అనుగుణంగా మారవచ్చు. 
          గత పనితీరు భవిష్యత్ ఫలితాలకు గ్యారెంటీ కాదు. ఏదైనా పెట్టుబడి నిర్ణయం తీసుకునే ముందు 
          అర్హత కలిగిన ఫైనాన్షియల్ అడ్వైజర్‌ని సంప్రదించండి. పెట్టుబడులకు మార్కెట్ రిస్క్ ఉంటుంది.
        </p>
      </div>
    </div>
  );
}