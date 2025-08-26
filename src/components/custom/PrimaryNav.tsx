'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useTelemetry } from "./TelemetryTracker";

export default function PrimaryNav() {
  const pathname = usePathname();
  const telemetry = useTelemetry();

  const handleNavClick = (destination: string) => {
    telemetry.trackNavClick(destination);
  };

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = "font-medium transition-colors relative";
    const activeClasses = isActive(path) 
      ? "text-[#4B6FFF] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[#4B6FFF]" 
      : "text-gray-700 hover:text-[#4B6FFF]";
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        href="/calculators" 
        className={getLinkClassName('/calculators')}
        onClick={() => handleNavClick('/calculators')}
      >
        కాలిక్యులేటర్లు
      </Link>
      <Link 
        href="/learn" 
        className={getLinkClassName('/learn')}
        onClick={() => handleNavClick('/learn')}
      >
        నేర్చుకోండి
      </Link>
      <Link 
        href="/about" 
        className={getLinkClassName('/about')}
        onClick={() => handleNavClick('/about')}
      >
        మా గురించి
      </Link>
    </nav>
  );
}