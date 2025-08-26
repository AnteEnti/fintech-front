"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, BookOpen, Calculator, TrendingUp, Users, Info } from "lucide-react";

export default function DisclaimerContent() {
  return (
    <div className="max-w-4xl">
      {/* Primary Disclaimer */}
      <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-red-900 mb-3">
              ముఖ్యమైన డిస్క్లేమర్ - దయచేసి జాగ్రత్తగా చదవండి
            </h2>
            <div className="space-y-3 text-red-800" style={{ lineHeight: '1.6' }}>
              <p className="font-semibold text-base">
                ఈ వెబ్‌సైట్‌లోని అన్ని కంటెంట్ పూర్తిగా విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే అందించబడింది. 
                ఇది పెట్టుబడి సలహా, ఆర్థిక ప్రణాళిక, లేదా వ్యక్తిగత ఆర్థిక సిఫార్సులు కాదు.
              </p>
              <p className="font-medium">
                ఎలాంటి పెట్టుబడి లేదా ఆర్థిక నిర్ణయం తీసుకునే ముందు దయచేసి SEBI రిజిస్టర్డ్ ఆర్థిక సలహాదారుని 
                లేదా అర్హత కలిగిన వ్యవహార సలహాదారుని సంప్రదించండి.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Purpose */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">విద్యాపరమైన కంటెంట్ స్పష్టీకరణ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 text-green-600">మా విద్యాపరమైన లక్ష్యం</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• ఆర్థిక అక్షరాస్యతను ప్రోత్సహించడం</li>
                <li>• ముఖ్యమైన ఆర్థిక భావనలను సరళంగా వివరించడం</li>
                <li>• వివిధ ఆర్థిక ఉత్పత్తుల గురించి సాధారణ జ్ఞానం అందించడం</li>
                <li>• ఆర్థిక నిర్ణయాలలో అవగాహన పెంచడం</li>
                <li>• ఆర్థిక గణనలను అర్థం చేసుకోవడంలో సహాయం</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 text-red-600">మేము అందించనివి</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• వ్యక్తిగత పెట్టుబడి సలహా</li>
                <li>• నిర్దిష్ట స్టాక్ లేదా మ్యూచువల్ ఫండ్ సిఫార్సులు</li>
                <li>• పెట్టుబడి టైమింగ్ గైడెన్స్</li>
                <li>• వ్యక్తిగత ఆర్థిక ప్రణాళిక సేవలు</li>
                <li>• రాబడి హామీలు లేదా పనితీరు వాగ్దానాలు</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEBI Registration Disclaimer */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">SEBI రిజిస్ట్రేషన్ స్పష్టీకరణ</h2>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-900 mb-2">
              ముఖ్యమైన వ్యాఖ్యానం - దయచేసి గమనించండి
            </h3>
            <div className="space-y-2 text-blue-800 text-sm" style={{ lineHeight: '1.6' }}>
              <p>
                <strong>FinTech Telugu మరియు దాని సృష్టికర్తలు SEBI (Securities and Exchange Board of India) తో రిజిస్టర్ కాలేదు.</strong>
              </p>
              <p>
                మేము పెట్టుబడి సలహాదారులు, వేల్త్ మేనేజర్లు, లేదా ఆర్థిక ప్రణాళిక సలహాదారులు కాదు.
              </p>
              <p>
                మా కంటెంట్‌ను పెట్టుబడి సలహాగా పరిగణించవద్దు. దానిని సాధారణ విద్యాపరమైన సమాచారంగా మాత్రమే ఉపయోగించండి.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">SEBI రిజిస్టర్డ్ సలహాదారులను ఎలా కనుగొనాలి</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• SEBI అధికారిక వెబ్‌సైట్ (www.sebi.gov.in) ని సందర్శించండి</li>
                <li>• &quot;SEBI Registered Investment Advisors&quot; జాబితాను చూడండి</li>
                <li>• సలహాదారు యొక్క రిజిస్ట్రేషన్ స్టేటస్‌ను తనిఖీ చేయండి</li>
                <li>• వారి SEBI రిజిస్ట్రేషన్ నంబర్‌ను ధృవీకరించండి</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Risk Disclaimer */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-900">మార్కెట్ రిస్క్ హెచ్చరిక</h2>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg mb-4">
            <h3 className="font-semibold text-orange-900 mb-2">
              పెట్టుబడుల్లో ఉన్న రిస్క్‌లు
            </h3>
            <p className="text-orange-800 text-sm" style={{ lineHeight: '1.6' }}>
              <strong>అన్ని పెట్టుబడులు మార్కెట్ రిస్క్‌లకు లోబడి ఉంటాయి మరియు పెట్టుబడుల విలువ తగ్గే అవకాశం ఉంది.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">సాధారణ రిస్క్‌లు</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>మార్కెట్ రిస్క్:</strong> మార్కెట్ హెచ్చుతగ్గుల వల్ల విలువ మార్పులు</li>
                <li>• <strong>క్రెడిట్ రిస్క్:</strong> ఇష్యూయర్ డిఫాల్ట్ అవకాశం</li>
                <li>• <strong>లిక్విడిటీ రిస్క్:</strong> కావలసినప్పుడు అమ్మకం కాకపోవడం</li>
                <li>• <strong>ఇన్‌ఫ్లేషన్ రిస్క్:</strong> ద్రవ్యోల్బణం వల్ల రియల్ రిటర్న్‌లు తగ్గడం</li>
                <li>• <strong>ఇంట్రెస్ట్ రేట్ రిస్క్:</strong> వడ్డీ రేట్లు మారడం వల్ల ప్రభావం</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">రిస్క్ నిర్వహణ</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• మీ రిస్క్ టాలెరెన్స్‌ను అంచనా వేయండి</li>
                <li>• పెట్టుబడుల్ని వైవిధ్యపరచండి</li>
                <li>• దీర్ఘకాలిక దృక్పథంతో పెట్టుబడి చేయండి</li>
                <li>• మార్కెట్ పరిస్థితులను నిరంతరం పర్యవేక్షించండి</li>
                <li>• అవసరమైనప్పుడు వ్యూహాన్ని సర్దుబాటు చేయండి</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator Accuracy Disclaimer */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-900">కాలిక్యులేటర్ ఫలితాల గురించి</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">
                ముఖ్యమైన గమనిక - కాలిక్యులేటర్ ఖచ్చితత్వం
              </h3>
              <p className="text-purple-800 text-sm" style={{ lineHeight: '1.6' }}>
                మా కాలిక్యులేటర్‌లు సాధారణ గణనల ప్రయోజనాల కోసం మరియు అంచనాల కోసం మాత్రమే. 
                వాస్తవ ఫలితాలు వివిధ కారకాల కారణంగా భిన్నంగా ఉండవచ్చు.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">కాలిక్యులేటర్ పరిమితులు</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• ఫలితాలు కేవలం అంచనాలు మరియు అనుమానాలు</li>
                  <li>• వాస్తవ మార్కెట్ పరిస్థితులు భిన్నంగా ఉండవచ్చు</li>
                  <li>• పన్ను చట్టాలు మరియు రేట్లు మారవచ్చు</li>
                  <li>• మార్కెట్ అస్థిరత ఫలితాలను ప్రభావితం చేస్తుంది</li>
                  <li>• ఇన్‌ఫ్లేషన్ మరియు అసాధారణ ఖర్చుల ప్రభావం చేర్చబడలేదు</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">సరైన వినియోగం</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• ప్రాథమిक ప్రణాళిక మరియు అవగాహనకు మాత్రమే ఉపయోగించండి</li>
                  <li>• వాస్తవ పెట్టుబడులకు ముందు వృత్తిపర సలహా తీసుకోండి</li>
                  <li>• మార్కెట్ పరిస్థితులను దృష్టిలో ఉంచుకోండి</li>
                  <li>• ఫలితాలను కేవలం ఒక ప్రారంభ బిందువుగా పరిగణించండి</li>
                  <li>• నిర్దిష్ట ఉత్పత్తుల వివరాలను మరి వేరుగా తనిఖీ చేయండి</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Responsibility */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-semibold text-gray-900">వేదిక బాధ్యత పరిమితులు</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">బాధ్యత వ్యాఖ్యానం</h3>
              <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                FinTech Telugu, దాని సృష్టికర్తలు, సహకారులు, లేదా అనుబంధ సంస్థలు మీ ఆర్థిక నిర్ణయాల వల్ల 
                ఏర్పడే లాభాలు లేదా నష్టాలకు ఎలాంటి బాధ్యత వహించవు.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">మేము బాధ్యత వహించనివి</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• మా కంటెంట్ ఆధారంగా తీసుకున్న పెట్టుబడి నిర్ణయాలు</li>
                  <li>• కాలిక్యులేటర్ ఫలితాల ఖచ్చితత్వం లేదా పరిపూర్ణత</li>
                  <li>• మార్కెట్ మార్పుల వల్ల ఏర్పడే నష్టాలు</li>
                  <li>• బాహ్య వెబ్‌సైట్‌ల లింక్‌ల కంటెంట్</li>
                  <li>• సాంకేతిక లోపాలు లేదా వేదిక అందుబాటు సమస్యలు</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">మీ బాధ్యతలు</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• స్వయంగా పరిశీలన మరియు విశ్లేషణ చేయడం</li>
                  <li>• వృత్తిపర సలహా తీసుకోవడం</li>
                  <li>• మీ ఆర్థిక లక్ష్యాలు మరియు రిస్క్ టాలెరెన్స్ అంచనా</li>
                  <li>• మార్కెట్ పరిస్థితులను అనుసరించడం</li>
                  <li>• సమాచారం యొక్క చెల్లుబాటును తనిఖీ చేయడం</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Important Notice */}
      <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-900 mb-3">
              చివరి ముఖ్యమైన హెచ్చరిక
            </h3>
            <div className="space-y-3 text-red-800">
              <p className="font-semibold" style={{ lineHeight: '1.6' }}>
                ఈ వెబ్‌సైట్‌ని ఉపయోగించడం ద్వారా మీరు ఈ డిస్క్లేమర్‌లోని అన్ని నిబంధనలను అర్థం చేసుకున్నారని 
                మరియు అంగీకరిస్తున్నారని భావించబడుతుంది.
              </p>
              <p className="font-medium" style={{ lineHeight: '1.6' }}>
                ఎలాంటి పెట్టుబడి నిర్ణయం తీసుకునే ముందు దయచేసి SEBI రిజిస్టర్డ్ ఆర్థిక సలహాదారుని సంప్రదించండి. 
                మీ వ్యక్తిగత ఆర్థిక పరిస్థితి, లక్ష్యాలు, మరియు రిస్క్ టాలెరెన్స్ ప్రకారం సలహా తీసుకోండి.
              </p>
              <p className="text-sm">
                <strong>ప్రస్తుత వెర్షన్:</strong> 1.0 | <strong>చివరి అప్‌డేట్:</strong> {new Date().toLocaleDateString('te-IN')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}