'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, MapPin, Clock, Users, Send, Heart, Globe, CheckCircle } from "lucide-react";
import { useTelemetry } from '@/hooks/useTelemetry';

export default function ContactEngagement() {
  const { trackEvent } = useTelemetry();

  const contactMethods = [
    {
      icon: Mail,
      title: "ఈమెయిల్ సపోర్ట్",
      description: "సందేహాలు మరియు సూచనల కోసం",
      contact: "support@fintechtelugu.com",
      timing: "24 గంటల్లో రెస్పాన్స్",
      action: "ఈమెయిల్ పంపండి",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: MessageCircle,
      title: "లైవ్ చాట్ సపోర్ట్",
      description: "తక్షణ సహాయం కోసం",
      contact: "వెబ్‌సైట్‌లో చాట్ బటన్",
      timing: "సోమ-శుక్ర 9AM-6PM",
      action: "చాట్ ప్రారంభించండి",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Phone,
      title: "వాట్సాప్ సపోర్ట్",
      description: "త్వరిత సందేహ నివృత్తికి",
      contact: "+91 9876543210",
      timing: "సోమ-శుక్ర 10AM-5PM",
      action: "వాట్సాప్ మెసేజ్",
      color: "text-purple-600", 
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "కమ్యూనిటీ ఫోరమ్",
      description: "పీర్-టు-పీర్ సపోర్ట్",
      contact: "community.fintechtelugu.com",
      timing: "24/7 అందుబాటులో",
      action: "కమ్యూనిటీ జాయిన్",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const engagementChannels = [
    {
      channel: "న్యూస్‌లెటర్ సబ్‌స్క్రిప్షన్",
      description: "వారంవారీ ఆర్థిక టిప్స్ మరియు అప్‌డేట్లు",
      benefits: ["ఎక్స్‌క్లూజివ్ కంటెంట్", "ఎర్లీ యాక్సెス్", "పర్సనలైజ్డ్ టిప్స్"],
      cta: "న్యూస్‌లెటర్ సబ్‌స్క్రైబ్"
    },
    {
      channel: "సోషల్ మీడియా కమ్యూనిటీ",
      description: "డైలీ ఇంటరాక్షన్ మరియు లైవ్ సెషన్లు",
      benefits: ["డైలీ టిప్స్", "లైవ్ Q&A", "కమ్యూనిటీ డిస్కషన్లు"],
      cta: "ఫాలో చేయండి"
    },
    {
      channel: "వర్క్‌షాప్ రిజిస్ట్రేషన్",
      description: "నెలవారీ ఫ్రీ ఆన్‌లైన్ వర్క్‌షాప్లు",
      benefits: ["ఇంటరాక్టివ్ సెషన్లు", "ఎక్స్‌పర్ట్ గైడెన్స్", "నెట్‌వర్కింగ్"],
      cta: "వర్క్‌షాప్‌కు రిజిస్టర్"
    },
    {
      channel: "ఫీడ్‌బ్యాక్ & సూచనలు",
      description: "మా సేవలను మెరుగుపరచడానికి మీ అభిప్రాయాలు",
      benefits: ["ప్లాట్‌ఫాం ఇంప్రూవ్మెంట్", "న్యూ ఫీచర్ రిక్వెస్ట్", "కంటెంట్ సూచనలు"],
      cta: "ఫీడ్‌బ్యాక్ ఇవ్వండి"
    }
  ];

  const responseCommitments = [
    {
      type: "జనరల్ ఇన్క్వైరీలు",
      time: "12 గంటల్లో",
      description: "సాధారణ ప్రశ్నలు మరియు సమాచార అభ్యర్థనలు"
    },
    {
      type: "టెక్నికల్ సపోర్ట్",
      time: "4 గంటల్లో",
      description: "వెబ్‌సైట్ లేదా కాలిక్యులేటర్ సమస్యలు"
    },
    {
      type: "కంటెంట్ కరెక్షన్లు",
      time: "24 గంటల్లో",
      description: "కంటెంట్ ఎర్రర్లు లేదా అప్‌డేట్ రిక్వెస్ట్లు"
    },
    {
      type: "పార్ట్‌నర్‌షిప్ ఇన్క్వైరీలు",
      time: "48 గంటల్లో",
      description: "వ్యాపార సహకారం మరియు కలాబరేషన్లు"
    }
  ];

  const handleContactClick = (method: string) => {
    trackEvent('contact_method_clicked', {
      method: method,
      page: 'about_us_contact'
    });
  };

  const handleEngagementClick = (channel: string) => {
    trackEvent('engagement_channel_clicked', {
      channel: channel,
      page: 'about_us_engagement'
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              కాంటాక్ట్ మరియు ఎంగేజ్మెంట్
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            మీ సందేహాలు, సూచనలు మరియు ఫీడ్‌బ్యాక్ కోసం మేము ఎల్లప్పుడూ అందుబాటులో ఉంటాము
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మాతో ఎలా సంప్రదించాలి
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className={`${method.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto`}>
                        <Icon className={`w-8 h-8 ${method.color}`} />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{method.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-gray-700 font-medium text-sm">{method.contact}</p>
                      <p className="text-gray-500 text-xs">{method.timing}</p>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleContactClick(method.title)}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Response Time Commitments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              మా రెస్పాన్స్ టైమ్ నిబద్ధతలు
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              వివిధ రకాల ఇన్క్వైరీలకు మా గ్యారంటీడ్ రెస్పాన్స్ టైమ్‌లు
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseCommitments.map((commitment, index) => (
              <Card key={index} className="bg-blue-50 border border-blue-200 shadow-md">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{commitment.time}</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-center mb-2">{commitment.type}</h4>
                  <p className="text-gray-600 text-sm text-center">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Engagement Channels */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              కమ్యూనిటీ ఎంగేజ్మెంట్ ఛానెల్స్
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              మాతో జాయిన్ అవ్వండి మరియు కంటిన్యూయస్ లెర్నింగ్ జర్నీలో భాగం కండి
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagementChannels.map((channel, index) => (
              <Card key={index} className="bg-white border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Heart className="w-6 h-6 text-green-600 mr-3" />
                    {channel.channel}
                  </CardTitle>
                  <p className="text-gray-700 leading-relaxed">
                    {channel.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {channel.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => handleEngagementClick(channel.channel)}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {channel.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location & Availability */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              లొకేషన్ మరియు అందుబాటు
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">హెడ్‌క్వార్టర్లు</h4>
                <p className="text-gray-600">
                  హైదరాబాద్, తెలంగాణ<br />
                  భారతదేశం
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">బిజినెస్ అవర్స్</h4>
                <p className="text-gray-600">
                  సోమవారం - శుక్రవారం<br />
                  9:00 AM - 6:00 PM IST
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">సర్వీస్ ఏరియా</h4>
                <p className="text-gray-600">
                  తెలంగాణ & ఆంధ్రప్రదేశ్<br />
                  ఆన్‌లైన్ ప్లాట్‌ఫాం
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            మీకు ఏదైనా ప్రశ్నలు ఉన్నాయా?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            మేము మీ ఆర్థిక విద్య జర్నీలో సహాయం చేయడానికి ఎల్లప్పుడూ సిద్ధంగా ఉన్నాము. 
            సందేహించకండి, ఈరోజే మాతో సంప్రదించండి!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-w-[200px]">
              <Mail className="w-5 h-5 mr-2" />
              ఇమెయిల్ పంపండి
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              <MessageCircle className="w-5 h-5 mr-2" />
              లైవ్ చాట్
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}