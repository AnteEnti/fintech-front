import Logo from "./Logo";
import PrimaryNav from "./PrimaryNav";
import Search from "./Search";
import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="flex items-center">
            <PrimaryNav />
          </div>
          
          <div className="flex items-center space-x-4">
            <Search />
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
}