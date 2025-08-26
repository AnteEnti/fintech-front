import Link from "next/link";

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'light' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-gray-900';
  
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-[#4B6FFF] rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">₹</span>
      </div>
      <span className={`text-xl font-bold ${textColor}`}>
        FinTech Telugu
      </span>
    </Link>
  );
}