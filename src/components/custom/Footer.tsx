import Logo from "./Logo";
import FooterColumns from "./FooterColumns";
import SocialLinks from "./SocialLinks";
import DisclaimerBanner from "./DisclaimerBanner";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="mb-4">
                <Logo variant="dark" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                తెలుగులో ఆర్థిక విద్య మరియు ఉచిత కాలిక్యులేటర్లతో మీ ఆర్థిక లక్ష్యాలను సాధించండి.
              </p>
              <SocialLinks />
            </div>
            
            <div className="md:col-span-4">
              <FooterColumns />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="mb-4">
            <DisclaimerBanner type="global" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2024 FinTech Telugu. అన్ని హక్కులు రక్షించబడ్డాయి.
            </div>
            <div className="mt-2 md:mt-0">
              విద్యాపరమైన ఉద్దేశ్యాలకు మాత్రమే | SEBI రిజిస్టర్డ్ కాదు
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}