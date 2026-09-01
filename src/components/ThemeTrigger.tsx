"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeTriggerProps {
  buttonsClassName?: string;
}

const ThemeTrigger = ({ buttonsClassName }: ThemeTriggerProps) => {
  const { theme, setTheme } = useTheme();

  const triggerThemeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      className={cn(buttonsClassName)}
      onClick={triggerThemeHandler}
      variant="outline"
      size="icon-lg"
      type="button"
    >
      <Sun className="absolute size-4 scale-0 dark:scale-100" />
      <Moon className="size-4 scale-100 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeTrigger;
