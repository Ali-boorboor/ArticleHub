import { Toggle } from "@/components/ui/toggle";
import { type LucideIcon } from "lucide-react";

interface ToolbarToggleProps {
  onPressedChange: () => void;
  pressed?: boolean;
  icon: LucideIcon;
  label: string;
}

const ToolbarToggle = ({
  onPressedChange,
  icon: Icon,
  pressed,
  label,
}: ToolbarToggleProps) => {
  return (
    <Toggle
      onPressedChange={onPressedChange}
      aria-label={label}
      pressed={pressed}
      variant="primary"
      size="lg"
    >
      <Icon aria-hidden />
    </Toggle>
  );
};

export default ToolbarToggle;
