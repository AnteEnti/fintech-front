"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, BookOpen, Shield, Scale, Users, FileText } from "lucide-react";

export default function TermsOfUseContent() {
  return (
    <div className="max-w-4xl">
      {/* Introduction */}
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Scale className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              వేదిక వినియోగ నియమాలు
            </h2>
            <p className="text-blue-800 text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
              FinTech Telugu వేదికను ఉపయోగించడం ద్వారా మీరు ఈ నియమాలు మరియు షరతులను అంగీకరిస్తున్నారు. 
              దయచేసి వేదికను ఉపయోగించే ముందు ఈ నియమాలను జాగ్రత్తగా చదవండి.
            </p>
          </div>
        </div>
      </div>

      {/* Educational Purpose */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">విద్యాపరమైన ఉద్దేశ్యం</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">వేదిక ప్రాథమిక లక్ష్యం</h3>
              <p className="text-green-800 text-sm" style={{ lineHeight: '1.6' }}>
                FinTech Telugu పూర్తిగా విద్యాపరమైన వేదిక. మేము ఆర్థిక అక్షరాస్యత మరియు అవగాహనను ప్రోత్సహించడం మా లక్ష్యం.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">మేము అందిస్తాము:</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>ఆర్థిక కాలిక్యులేటర్లు:</strong> SIP, EMI, PPF మరియు ఇతర లెక్కలు</li>
                <li>• <strong>విద్యాపరమైన వ్యాసాలు:</strong> పెట్టుబడులు, బీమా, పన్నులు గురించి సమాచారం</li>
                <li>• <strong>పోలిక గైడ్‌లు:</strong> వివిధ ఆర్థిక ఉత్పత్తుల మధ్య తేడాలు</li>
                <li>• <strong>ప్రాక్టికల్ టిప్స్:</strong> రోజువారీ ఆర్థిక నిర్వహణ సలహాలు</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What We Don't Provide */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-semibold text-gray-900">మేము అందించనివి</h2>
          </div>

          <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
            <h3 className="font-semibold text-red-900 mb-2">ముఖ్యమైన నిషేధాలు</h3>
            <ul className="space-y-2 text-red-800 text-sm" style={{ lineHeight: '1.6' }}>
              <li>• <strong>పెట్టుబడి సలహా లేదు:</strong> మేము వ్యక్తిగత పెట్టుబడి సిఫార్సులు చేయము</li>
              <li>• <strong>SEBI రిజిస్ట్రేషన్ లేదు:</strong> మేము SEBI రిజిస్టర్డ్ సలహాదారులు కాదు</li>
              <li>• <strong>రిటర్న్ గ్యారంటీ లేదు:</strong> మేము ఎలాంటి రాబడి హామీలు ఇవ్వము</li>
              <li>• <strong>వ్యక్తిగత ఆర్థిక ప్రణాళిక లేదు:</strong> వ్యక్తిగత ఆర్థిక సేవలు అందించము</li>
            </ul>
          </div>

          <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
            మా కంటెంట్ కేవలం సాధారణ విద్యాపరమైన సమాచారం మాత్రమే. ఏదైనా ఆర్థిక నిర్ణయం తీసుకునే ముందు 
            అర్హత కలిగిన ఆర్థిక సలహాదారుని లేదా SEBI రిజిస్టర్డ్ వ్యవహార సలహాదారుని సంప్రదించండి.
          </p>
        </CardContent>
      </Card>

      {/* Acceptable Use */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">ఆమోదయోగ్య వినియోగం</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 text-green-600">అనుమతి ఉన్న వినియోగం</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• విద్యాపరమైన ఉద్దేశ్యాల కోసం కంటెంట్ చదవడం</li>
                <li>• వ్యక్తిగత ఆర్థిక అవగాహన కోసం కాలిక్యులేటర్లు వాడుకోవడం</li>
                <li>• కుటుంబం మరియు స్నేహితులతో విద్యాపరమైన కంటెంట్ పంచుకోవడం</li>
                <li>• సంప్రదింపు ఫారం ద్వారా సంప్రదించడం</li>
                <li>• వేదికను చట్టబద్ధమైన మార్గాల్లో ఉపయోగించడం</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 text-red-600">నిషేధిత వినియోగం</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• వాణిజ్య లేదా లాభాపేక్షతో కంటెంట్ కాపీ చేయడం</li>
                <li>• వేదిక భద్రతను భంగపరచే ప్రయత్నం</li>
                <li>• తప్పుడు లేదా దుర్వినియోగ సమాచారం పంచుకోవడం</li>
                <li>• స్పామ్ లేదా అవాంఛిత సందేశాలు పంపడం</li>
                <li>• ఇతర వినియోగదారులను హేయంగా చూడడం లేదా వేధించడం</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Intellectual Property */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-900">మేధస్సు సంపత్తి హక్కులు</h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">మా కంటెంట్</h3>
              <p className="text-gray-700 mb-3" style={{ lineHeight: '1.6' }}>
                FinTech Telugu వేదికలోని అన్ని కంటెంట్, లేఔట్, డిజైన్, గ్రాఫిక్స్, మరియు కాలిక్యులేటర్లు మా మేధస్సు సంపత్తి.
              </p>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>కాపీరైట్:</strong> అన్ని వ్యాసాలు మరియు కంటెంట్ కాపీరైట్ రక్షణలో</li>
                <li>• <strong>ట్రేడ్‌మార్క్:</strong> &quot;FinTech Telugu&quot; పేరు మరియు లోగో మా ట్రేడ్‌మార్క్</li>
                <li>• <strong>సాఫ్ట్‌వేర్:</strong> కాలిక్యులేటర్ కోడ్ మరియు అల్గోరిదంలు మా స్వాధీనం</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">వినియోగదారుల హక్కులు</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• వ్యక్తిగత, విద్యాపరమైన ఉపయోగం కోసం కంటెంట్ చదవడం</li>
                <li>• విద్యాపరమైన ప్రయోజనాల కోసం లింక్‌లు పంచుకోవడం</li>
                <li>• కంటెంట్‌ని సరైన క్రెడిట్‌తో ఉదహరించడం (వాణిజ్య రహిత వినియోగం మాత్రమే)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Limitation of Liability */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-900">బాధ్యత పరిమితులు</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">ముఖ్యమైన వ్యాఖ్యానం</h3>
              <p className="text-orange-800 text-sm" style={{ lineHeight: '1.6' }}>
                మా వేదిక మరియు దాని కంటెంట్ &quot;యథావిధిగా&quot; అందించబడుతుంది. మేము ఎలాంటి హామీలు లేదా వారంటీలు ఇవ్వము.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">కంటెంట్ నిష్పత్తి</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• కంటెంట్ సమయానుసారం మరియు ప్రాధాన్య ప్రకారం అప్‌డేట్</li>
                  <li>• కాలిక్యులేటర్ ఫలితాల ఖచ్చితత్వానికి గ్యారంటీ లేదు</li>
                  <li>• మార్కెట్ డేటా మరియు రేట్లు అంచనాలు మాత్రమే</li>
                  <li>• బాహ్య వెబ్‌సైట్ లింక్‌లకు మేము బాధ్యత వహించము</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">ఆర్థిక నిర్ణయాలు</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• మా కంటెంట్ ఆధారంగా తీసుకున్న ఆర్థిక నిర్ణయాలకు మేము బాధ్యత వహించము</li>
                  <li>• పెట్టుబడి నష్టాలకు మేము జవాబుదారీ కాదు</li>
                  <li>• వ్యక్తిగత ఆర్థిక పరిస్థితుల అంచనాకు మేము బాధ్యత వహించము</li>
                  <li>• మార్కెట్ రిస్క్ మరియు అనిశ్చితుల బాధ్యత వినియోగదారుదే</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Termination */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">ఖాతా ముగింపు</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
              మేము ఎలాంటి హెచ్చరిక లేకుండా ఈ నియమాలను ఉల్లంఘించే వినియోగదారుల యాక్సెస్‌ను నిలిపివేయవచ్చు లేదా నిషేధించవచ్చు.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">ముగింపు కారణాలు</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• నియమాల ఉల్లంఘన</li>
                  <li>• వేదిక దుర్వినియోగం</li>
                  <li>• అనధికృత గ్రహణ ప్రయత్నం</li>
                  <li>• హానికర కార్యకలాపాలు</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">ముగింపు తర్వాత</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• వేదిక యాక్సెస్ నిలిపివేత</li>
                  <li>• వ్యక్తిగత డేటా తొలగింపు</li>
                  <li>• ఇంటెలెక్చువల్ ప్రాపర్టీ రైట్స్ కొనసాగింపు</li>
                  <li>• పూర్వ బాధ్యతల కొనసాగింపు</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Governing Law */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">న్యాయ పరిధి</h2>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="space-y-3">
              <p className="text-blue-800" style={{ lineHeight: '1.6' }}>
                <strong>భారతీయ చట్టం:</strong> ఈ నియమాలు భారత దేశంలోని చట్టాల ప్రకారం నిర్వహించబడతాయి.
              </p>
              <p className="text-blue-800" style={{ lineHeight: '1.6' }}>
                <strong>న్యాయస్థాన పరిధి:</strong> ఈ నియమాలకు సంబంధించిన ఏవైనా వివాదాలు హైదరాబాదు న్యాయస్థానాల పరిధిలో పరిష్కరించబడతాయి.
              </p>
              <p className="text-blue-800" style={{ lineHeight: '1.6' }}>
                <strong>వర్తించే నిబంధనలు:</strong> ఇండియన్ కాంట్రాక్ట్ యాక్ట్, ఇన్ఫర్మేషన్ టెక్నాలజీ యాక్ట్, మరియు SEBI నిబంధనలు.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Changes to Terms */}
      <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-900 mb-2">
              నియమాల మార్పులు
            </h3>
            <div className="space-y-2 text-orange-800 text-sm">
              <p style={{ lineHeight: '1.6' }}>
                మేము ఈ నియమాలు మరియు షరతులను ఎప్పటికప్పుడు సవరించవచ్చు. ముఖ్యమైన మార్పులను మేము వేదికలో గమనిక ద్వారా తెలియజేస్తాము.
              </p>
              <p style={{ lineHeight: '1.6' }}>
                మార్పులు అమలులోకి వచ్చిన తర్వాత వేదికను ఉపయోగించడం కొత్త నియమాలను అంగీకరించినట్టు భావించబడుతుంది.
              </p>
              <p>
                <strong>ప్రస్తుత వెర్షన్:</strong> 1.0 | <strong>చివరి అప్‌డేట్:</strong> {new Date().toLocaleDateString('te-IN')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}