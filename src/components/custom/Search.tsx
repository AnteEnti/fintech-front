import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative hidden md:block w-64">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        type="text"
        placeholder="కాలిక్యులేటర్లు, వ్యాసాలు వెతకండి..."
        className="pl-10 pr-4 py-2 border-gray-200 focus:border-[#4B6FFF] focus:ring-[#4B6FFF]"
      />
    </div>
  );
}