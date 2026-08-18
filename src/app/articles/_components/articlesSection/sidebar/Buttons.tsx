import { Button } from "@/components/ui/button";
import { Funnel, FunnelX } from "lucide-react";

const Buttons = () => {
  return (
    <div className="space-y-2">
      <Button className="w-full">
        <Funnel />
        Filter Results
      </Button>

      <Button className="w-full" variant="destructive">
        <FunnelX />
        Remove Filters
      </Button>
    </div>
  );
};

export default Buttons;
