import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

interface ThemeTriggerProps {
  buttonsClassName?: string;
}

const ThemeTrigger = ({ buttonsClassName }: ThemeTriggerProps) => {
  return (
    <div className="flex gap-2">
      <Button
        className={cn(buttonsClassName)}
        aria-label="light theme"
        variant="default"
        size="icon-lg"
        type="button"
      >
        <Sun />
      </Button>

      <Button
        className={cn(buttonsClassName)}
        aria-label="dark theme"
        variant="outline"
        size="icon-lg"
        type="button"
      >
        <Moon />
      </Button>
    </div>
  );
};

export default ThemeTrigger;
