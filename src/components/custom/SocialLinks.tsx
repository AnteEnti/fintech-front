import Link from "next/link";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link 
        href="#" 
        className="text-gray-400 hover:text-[#4B6FFF] transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </Link>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-[#4B6FFF] transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </Link>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-[#4B6FFF] transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="w-5 h-5" />
      </Link>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-[#4B6FFF] transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </Link>
    </div>
  );
}