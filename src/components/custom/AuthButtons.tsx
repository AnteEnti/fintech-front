import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost" className="text-gray-700 hover:text-[#4B6FFF]">
        లాగిన్
      </Button>
      <Button className="bg-[#4B6FFF] hover:bg-blue-700">
        సైన్అప్
      </Button>
    </div>
  );
}