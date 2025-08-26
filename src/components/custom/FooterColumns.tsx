import Link from "next/link";

export default function FooterColumns() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">కంపెనీ</h3>
        <div className="space-y-2">
          <Link href="/about" className="block text-gray-600 hover:text-[#4B6FFF]">
            మా గురించి
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:text-[#4B6FFF]">
            సంప్రదించండి
          </Link>
          <Link href="/careers" className="block text-gray-600 hover:text-[#4B6FFF]">
            కెరీర్స్
          </Link>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-4">కాలిక్యులేటర్లు</h3>
        <div className="space-y-2">
          <Link href="/calculators/investment/sip" className="block text-gray-600 hover:text-[#4B6FFF]">
            SIP కాలిక్యులేటర్
          </Link>
          <Link href="/calculators/loan/emi" className="block text-gray-600 hover:text-[#4B6FFF]">
            EMI కాలిక్యులేటర్
          </Link>
          <Link href="/calculators/investment/ppf" className="block text-gray-600 hover:text-[#4B6FFF]">
            PPF కాలిక్యులేటర్
          </Link>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-4">నేర్చుకోండి</h3>
        <div className="space-y-2">
          <Link href="/learn/investments" className="block text-gray-600 hover:text-[#4B6FFF]">
            పెట్టుబడులు
          </Link>
          <Link href="/learn/savings" className="block text-gray-600 hover:text-[#4B6FFF]">
            పొదుపులు
          </Link>
          <Link href="/learn/insurance" className="block text-gray-600 hover:text-[#4B6FFF]">
            బీమా
          </Link>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-4">చట్టపరమైనవి</h3>
        <div className="space-y-2">
          <Link href="/legal/privacy" className="block text-gray-600 hover:text-[#4B6FFF]">
            ప్రైవసీ పాలసీ
          </Link>
          <Link href="/legal/terms" className="block text-gray-600 hover:text-[#4B6FFF]">
            నియమాలు మరియు షరతులు
          </Link>
          <Link href="/legal/disclaimer" className="block text-gray-600 hover:text-[#4B6FFF]">
            డిస్క్లేమర్
          </Link>
          <Link href="/legal/affiliate" className="block text-gray-600 hover:text-[#4B6FFF]">
            అఫిలియేట్ డిస్క్లోజర్
          </Link>
        </div>
      </div>
    </div>
  );
}