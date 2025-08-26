"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Shield, Eye, Database, Users } from "lucide-react";

export default function PrivacyPolicyContent() {
  return (
    <div className="max-w-4xl">
      {/* Introduction */}
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              మీ గోప్యత మా ప్రాధాన్యత
            </h2>
            <p className="text-blue-800 text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>
              FinTech Telugu వేదికలో మీ వ్యక్తిగత సమాచారం మరియు గోప్యత భద్రతను మేము చాలా గంభీరంగా తీసుకుంటాము. 
              ఈ గోప్యత విధానం మేము ఎలా మీ సమాచారాన్ని సేకరిస్తామో, వాడుకుంటామో మరియు రక్షిస్తామో వివరిస్తుంది.
            </p>
          </div>
        </div>
      </div>

      {/* Information We Collect */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">సమాచార సేకరణ</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">వ్యక్తిగత సమాచారం</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>సంప్రదింపు సమాచారం:</strong> మీ పేరు, ఇమెయిల్ చిరునామా (సంప్రదింపు ఫారం నింపినప్పుడు)</li>
                <li>• <strong>వెబ్‌సైట్ వినియోగ డేటా:</strong> IP చిరునామా, బ్రౌజర్ రకం, పేజీ వ్యూలు, విజిట్ సమయం</li>
                <li>• <strong>కాలిక్యులేటర్ ఇన్‌పుట్‌లు:</strong> మీరు కాలిక్యులేటర్లలో నమోదు చేసే ఆర్థిక మొత్తాలు (స్థానికంగా మాత్రమే భద్రపరచబడతాయి)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">ఆటోమేటిక్ డేటా సేకరణ</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>కుకీస్:</strong> వెబ్‌సైట్ అనుభవాన్ని మెరుగుపరచడానికి</li>
                <li>• <strong>గూగుల్ అనలిటిక్స్:</strong> వెబ్‌సైట్ ట్రాఫిక్ మరియు వినియోగ విశ్లేషణ</li>
                <li>• <strong>పేజీ వ్యూ డేటా:</strong> వినియోగదారుల ప్రవర్తన విశ్లేషణ</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How We Use Information */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">సమాచార వినియోగం</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">ప్రధान వినియోగాలు</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• వెబ్‌సైట్ కంటెంట్ మరియు సేవలను అందించడం</li>
                <li>• వినియోగదారుల ప్రశ్నలకు మరియు మద్దతుకు ప్రత్యుత్తరం</li>
                <li>• వెబ్‌సైట్ పనితీరు మరియు వినియోగదారుల అనుభవాన్ని మెరుగుపరచడం</li>
                <li>• సాంకేతిక సమస్యలను పరిష్కరించడం</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">విశ్లేషణ మరియు అభివృద్ధి</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• వెబ్‌సైట్ ట్రాఫిక్ మరియు వినియోగ నమూనాల విశ్లేషణ</li>
                <li>• కొత్త కంటెంట్ మరియు ఫీచర్లను అభివృద్ధి చేయడం</li>
                <li>• విద్యాపరమైన కంటెంట్ ప్రభావాన్ని అంచనా వేయడం</li>
                <li>• వినియోగదారుల అవసరాలను అర్థం చేసుకోవడం</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Information Sharing */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-900">సమాచార భాగస్వామ్యం</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">మేము మీ వ్యక్తిగత సమాచారాన్ని అమ్మము లేదా అద్దెకు ఇవ్వము</h3>
              <p className="text-green-800 text-sm">
                మీ వ్యక్తిగత సమాచారం మా దగ్గరే ఉంటుంది మరియు మూడవ పార్టీలకు వాణిజ్య ప్రయోజనాల కోసం ఇవ్వము.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">పరిమిత భాగస్వామ్యం</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>గూగుల్ అనలిటిక్స్:</strong> వెబ్‌సైట్ పనితీరు విశ్లేషణ (అజ్ఞాత డేటా మాత్రమే)</li>
                <li>• <strong>చట్టపరమైన అవసరాలు:</strong> చట్టం ప్రకారం అవసరమైనప్పుడు మాత్రమే</li>
                <li>• <strong>సేవా ప్రదాతలు:</strong> హోస్టింగ్ మరియు సాంకేతిక సేవల కోసం అవసరమైన సమాచారం మాత్రమే</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Security */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">డేటా భద్రత</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">భద్రతా చర్యలు</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• SSL ఎన్‌క్రిప్షన్ ద్వారా డేటా రవాణా భద్రత</li>
                <li>• సురక్షిత హోస్టింగ్ సేవలు</li>
                <li>• నియమిత భద్రతా అప్‌డేట్‌లు</li>
                <li>• పరిమిత యాక్సెస్ నియంత్రణలు</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">డేటా నిల్వ</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• కాలిక్యులేటర్ డేటా స్థానికంగా మాత్రమే నిల్వ</li>
                <li>• సంప్రదింపు ఫారం డేటా అవసరమైనంత కాలం మాత్రమే</li>
                <li>• అనలిటిక్స్ డేటా గూగుల్ విధానాల ప్రకారం</li>
                <li>• అనవసర డేటా క్రమం తప్పకుండా తొలగింపు</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Rights */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">మీ హక్కులు</h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">డేటా హక్కులు</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• మీ వ్యక్తిగత సమాచారానికి ప్రాప్యత హక్కు</li>
                  <li>• తప్పుడు సమాచారాన్ని దిద్దుబాటు చేసే హక్కు</li>
                  <li>• మీ సమాచారాన్ని తొలగించడానికి అభ్యర్థించే హక్కు</li>
                  <li>• డేటా ప్రాసెసింగ్‌ను పరిమితం చేసే హక్కు</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">కుకీ నియంత్రణ</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• బ్రౌజర్ సెట్టింగ్‌ల ద్వారా కుకీలను నిలిపివేయడం</li>
                  <li>• ట్రాకింగ్ నుండి నైపుణ్యం పొందడం</li>
                  <li>• వ్యక్తిగతీకరించిన ప్రకటనల నుండి నైపుణ్యం</li>
                  <li>• అనలిటిక్స్ ట్రాకింగ్ నిలిపివేయడం</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">సంప్రదింపు సమాచారం</h2>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-700 mb-4" style={{ lineHeight: '1.6' }}>
              గోప్యత విధానం గురించి లేదా మీ వ్యక్తిగత సమాచారం గురించి ఏవైనా ప్రశ్నలు ఉంటే, దయచేసి మమ్మల్ని సంప్రదించండి:
            </p>
            
            <div className="space-y-2 text-gray-700">
              <p><strong>ఇమెయిల్:</strong> privacy@fintechtelugu.com</p>
              <p><strong>విషయం:</strong> గోప్యత విధానం సంబంధిత ప్రశ్న</p>
              <p><strong>ప్రతిస్పందన సమయం:</strong> 7 పనిదినాలలో</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Policy Updates */}
      <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-900 mb-2">
              విధాన అప్‌డేట్‌లు
            </h3>
            <p className="text-orange-800 text-sm mb-3" style={{ lineHeight: '1.6' }}>
              మేము ఈ గోప్యత విధానాన్ని ఎప్పటికప్పుడు అప్‌డేట్ చేయవచ్చు. ముఖ్యమైన మార్పులు వచ్చినప్పుడు మేము ఈ పేజీలో గమనిక ఇస్తాము.
            </p>
            <p className="text-orange-800 text-sm">
              <strong>ప్రస్తుత వెర్షన్:</strong> 1.0 | <strong>చివరి అప్‌డేట్:</strong> {new Date().toLocaleDateString('te-IN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}