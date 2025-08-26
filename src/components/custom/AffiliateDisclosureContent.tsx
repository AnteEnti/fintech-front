"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Handshake, DollarSign, Eye, Shield, Users, AlertCircle } from "lucide-react";

export default function AffiliateDisclosureContent() {
  return (
    <div className="max-w-4xl">
      {/* Transparency Notice */}
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Handshake className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-3">
              పారదర్శకత మా ప్రాధాన్యత
            </h2>
            <p className="text-blue-800" style={{ lineHeight: '1.6' }}>
              FinTech Telugu వేదికలో మేము పూర్తి పారదర్శకతతో పనిచేస్తాము. 
              ఈ అఫిలియేట్ డిస్క్లోజర్ మా వాణిజ్య సంబంధాలు మరియు కమీషన్ నిర్మాణం గురించి వివరిస్తుంది.
            </p>
          </div>
        </div>
      </div>

      {/* What is Affiliate Marketing */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">అఫిలియేట్ మార్కెటింగ్ అంటే ఏమిటి?</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
              అఫిలియేట్ మార్కెటింగ్ అనేది మేము విద్యాపరమైన కంటెంట్‌లో పేర్కొనే కొన్ని ఆర్థిక ఉత్పత్తులు లేదా సేవలకు 
              సంబంధించిన కంపెనీల నుండి కమీషన్ పొందే ప్రక్రియ.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 text-green-600">ఎలా పనిచేస్తుంది</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• మేము విద్యాపరమైన కంటెంట్‌లో ఉత్పత్తులను పేర్కొంటాము</li>
                  <li>• మీరు మా లింక్ ద్వారా ఆ ఉత్పత్తులను కొనుగోలు చేస్తే</li>
                  <li>• కంపెనీ మాకు చిన్న కమీషన్ చెల్లిస్తుంది</li>
                  <li>• మీకు అదనపు ఖర్చు ఏమీ రాదు</li>
                  <li>• కంటెంట్ నాణ్యతపై ఎలాంటి ప్రభావం లేదు</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 text-blue-600">మా ప్రతిబద్ధత</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• అన్ని అఫిలియేట్ సంబంధాలను స్పష్టంగా వెల్లడిస్తాము</li>
                  <li>• కేవలం నమ్మకమైన మరియు ఉపయోగకరమైన ఉత్పత్తులను మాత్రమే సిఫార్సు చేస్తాము</li>
                  <li>• విద్యాపరమైన విలువను ఎల్లప్పుడూ ప్రధానంగా ఉంచుతాము</li>
                  <li>• మీ ప్రయోజనాలను మా ప్రయోజనాలకు మించి ప్రాధాన్యత ఇస్తాము</li>
                  <li>• ఎలాంటి పక్షపాత సిఫార్సులు చేయము</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Affiliate Relationships */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-900">ప్రస్తుత అఫిలియేట్ సంబంధాలు</h2>
          </div>

          <div className="space-y-6">
            {/* Current Status */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">ప్రస్తుత స్థితి</h3>
              <p className="text-green-800 text-sm" style={{ lineHeight: '1.6' }}>
                ప్రస్తుతం FinTech Telugu వేదిక అభివృద్ధి దశలో ఉంది మరియు మేము ఎలాంటి అఫిలియేట్ సంబంధాలు లేవు. 
                భవిష్యత్తులో ఏవైనా అఫిలియేట్ భాగస్వామ్యాలు ఏర్పడితే వాటిని ఈ పేజీలో అప్‌డేట్ చేస్తాము.
              </p>
            </div>

            {/* Future Partnerships Categories */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">భవిష్యత్ భాగస్వామ్య రకాలు</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">ఆర్థిక సేవలు</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• మ్యూచువల్ ఫండ్ ప్లాట్‌ఫామ్‌లు</li>
                    <li>• స్టాక్ బ్రోకరేజ్ సేవలు</li>
                    <li>• డిజిటల్ గోల్డ్ ప్లాట్‌ఫామ్‌లు</li>
                    <li>• పెన్షన్ ప్లాన్‌లు (NPS)</li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">లోన్ & బీమా</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• పర్సనల్ లోన్ ప్లాట్‌ఫామ్‌లు</li>
                    <li>• హోమ్ లోన్ సేవలు</li>
                    <li>• టర్మ్ ఇన్సూరెన్స్</li>
                    <li>• హెల్త్ ఇన్సూరెన్స్</li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">ఆర్థిక టూల్స్</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• పెర్సనల్ ఫైనాన్స్ యాప్‌లు</li>
                    <li>• ట్రాకింగ్ టూల్స్</li>
                    <li>• బడ్జెట్ ప్లానింగ్ సాఫ్ట్‌వేర్</li>
                    <li>• ఎడ్యుకేషనల్ కోర్సెస్</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Editorial Independence */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-900">సంపాదకీయ స్వాతంత్య్రం</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">మా సంపాదకీయ విధానం</h3>
              <p className="text-orange-800 text-sm" style={{ lineHeight: '1.6' }}>
                అఫిలియేట్ కమీషన్‌లు మా కంటెంట్, సిఫార్సులు, లేదా సంపాదకీయ నిర్ణయాలను ప్రభావితం చేయవు. 
                మా ప్రధాన లక్ష్యం విద్యాపరమైన విలువ అందించడమే.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">మా కట్టుబాట్లు</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• <strong>నిజాయితీతో:</strong> కేవలం నామకమైన ఉత్పత్తులను మాత్రమే పేర్కొంటాము</li>
                  <li>• <strong>పారదర్శకతతో:</strong> అన్ని అఫిలియేట్ లింక్‌లను స్పష్టంగా గుర్తిస్తాము</li>
                  <li>• <strong>విద్యాపరంగా:</strong> వినియోగదారుల విద్యను ప్రధాన లక్ష్యంగా ఉంచుతాము</li>
                  <li>• <strong>వస్తునిష్ఠంగా:</strong> ప్రయోజనాలు మరియు పరిమితులను సమానంగా వివరిస్తాము</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">మేము చేయనివి</h3>
                <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <li>• <strong>పక్షపాతం:</strong> ఎక్కువ కమీషన్ కోసం ఉత్పత్తులను ప్రాధాన్యత ఇవ్వము</li>
                  <li>• <strong>దాచిపెట్టడం:</strong> అఫిలియేట్ సంబంధాలను దాచము</li>
                  <li>• <strong>తప్పుడు సిఫార్సులు:</strong> అనవసర ఉత్పత్తులను సిఫార్సు చేయము</li>
                  <li>• <strong>అధిక ప్రచారం:</strong> అధిక విక్రయ భాష ఉపయోగించము</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Affiliates Are Disclosed */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">అఫిలియేట్‌లను ఎలా వెల్లడిస్తాము</h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">గుర్తింపు పద్ధతులు</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-blue-600">వ్యాసాలలో</h4>
                  <ul className="space-y-2 text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    <li>• వ్యాసం ప్రారంభంలో అఫిలియేట్ నోటీస్</li>
                    <li>• లింక్‌ల దగ్గర &quot;*అఫిలియేట్ లింక్&quot; అని గుర్తింపు</li>
                    <li>• సంబంధిత ఉత్పత్తుల విభాగంలో స్పష్టీకరణ</li>
                    <li>• కంటెంట్ చివరిలో పూర్తి డిస్క్లోజర్</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-green-600">కాలిక్యులేటర్‌లలో</h4>
                  <ul className="space-y-2 text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    <li>• రిలేటెడ్ టూల్స్ సెక్షన్‌లో డిస్క్లోజర్</li>
                    <li>• సైడ్‌బార్ సిఫార్సులలో గుర్తింపు</li>
                    <li>• లింక్ క్లిక్ చేసే ముందు హెచ్చరిక</li>
                    <li>• &quot;పార్టనర్ లింక్&quot; లేబుల్ వాడకం</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">ఉదాహరణ డిస్క్లోజర్ టెక్స్ట్</h4>
              <p className="text-blue-800 text-sm italic" style={{ lineHeight: '1.6' }}>
                &quot;ఈ వ్యాసంలో అఫిలియేట్ లింక్‌లు ఉండవచ్చు. మీరు ఈ లింక్‌ల ద్వారా ఉత్పత్తులను కొనుగోలు చేస్తే 
                మాకు చిన్న కమీషన్ వచ్చవచ్చు, కానీ మీకు అదనపు ఖర్చు ఏమీ రాదు. ఇది మా కంటెంట్‌ని ప్రభావితం చేయదు.&quot;
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Your Benefits */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">మీకు కలిగే ప్రయోజనాలు</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 text-green-600">ప్రత్యక్ష ప్రయోజనాలు</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>ఉచిత విద్యాపరమైన కంటెంట్:</strong> అన్ని వ్యాసాలు మరియు కాలిక్యులేటర్‌లు ఉచితం</li>
                <li>• <strong>నాణ్యమైన సిఫార్సులు:</strong> జాగ్రత్తగా ఎంచుకున్న ఉత్పత్తుల సమాచారం</li>
                <li>• <strong>సమయం ఆదా:</strong> రిసెర్చ్ మరియు పోలిక సమయం ఆదా</li>
                <li>• <strong>అదనపు ఖర్చు లేదు:</strong> అఫిలియేట్ లింక్‌ల వల్ల మీకు అదనపు ఖర్చు ఏమీ లేదు</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 text-blue-600">పరోక్ష ప్రయోజనాలు</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• <strong>వేదిక నిర్వహణ:</strong> మీ మద్దతు వల్ల వేదిక ఉచితంగా నడుస్తుంది</li>
                <li>• <strong>కొత్త కంటెంట్:</strong> కమీషన్‌లు కొత్త వ్యాసాలు మరియు టూల్స్ అభివృద్ధికి సహాయం</li>
                <li>• <strong>మెరుగైన సేవలు:</strong> వనరులు మెరుగైన యూజర్ ఎక్స్‌పీరియన్స్‌కు దోహదం</li>
                <li>• <strong>స్వతంత్రత:</strong> ఆర్థిక స్వాతంత్య్రం వల్ల నిష్పక్షపాత కంటెంట్</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FTC Compliance */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FTC గైడ్‌లైన్స్ అనుసరణ</h2>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-4">
            <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
              మేము FTC (Federal Trade Commission) మరియు భారత ప్రభుత్వ డిజిటల్ ప్రకటనల గైడ్‌లైన్స్ ప్రకారం 
              అన్ని అఫిలియేట్ సంబంధాలను పూర్తిగా వెల్లడిస్తాము.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">మా కట్టుబాట్లు</h3>
              <ul className="space-y-2 text-gray-700" style={{ lineHeight: '1.6' }}>
                <li>• అన్ని వాణిజ్య సంబంధాలను స్పష్టంగా వెల్లడించడం</li>
                <li>• అఫిలియేట్ లింక్‌లను స్పష్టంగా లేబుల్ చేయడం</li>
                <li>• వినియోగదారుల ప్రయోజనాలను ప్రాధాన్యత ఇవ్వడం</li>
                <li>• నిజాయితీపూర్వక మరియు ఖచ్చితమైన సమాచారం అందించడం</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              ప్రశ్నలు లేదా సందేహాలు?
            </h3>
            <div className="space-y-2 text-green-800 text-sm">
              <p style={{ lineHeight: '1.6' }}>
                అఫిలియేట్ డిస్క్లోజర్ గురించి లేదా మా వాణిజ్య సంబంధాల గురించి ఏవైనా ప్రశ్నలు ఉంటే దయచేసి మమ్మల్ని సంప్రదించండి:
              </p>
              <p><strong>ఇమెయిల్:</strong> affiliate@fintechtelugu.com</p>
              <p><strong>విషయం:</strong> అఫిలియేట్ డిస్క్లోజర్ సంబంధిత ప్రశ్న</p>
              <p><strong>ప్రతిస్పందన సమయం:</strong> 5 పనిదినాలలో</p>
              <p style={{ lineHeight: '1.6' }}>
                మేము పూర్తి పారదర్శకతతో మరియు నిజాయితీతో మీ అన్ని ప్రశ్నలకు సమాధానం ఇస్తాము.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}