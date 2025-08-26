import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          తెలుగులో ఆర్థిక విద్య
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          మీ ఆర్థిక లక్ష్యాలను సాధించడంలో మీకు సహాయం చేయడానికి ఉచిత కాలిక్యులేటర్లు, 
          విద్యాపరమైన కంటెంట్ మరియు ఆర్థిక మార్గదర్శకత్వం.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#4B6FFF] hover:bg-blue-700">
            <Link href="/calculators">కాలిక్యులేటర్లు చూడండి</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/learn">నేర్చుకోవడం ప్రారంభించండి</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}