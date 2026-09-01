import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonsProps {
  buttonsClassname?: string;
}

const Buttons = ({ buttonsClassname }: ButtonsProps) => {
  return (
    <div className="flex gap-2">
      <Link
        href="/sign-in"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "lg",
          }),
          buttonsClassname,
        )}
      >
        Sign in
      </Link>

      <Link
        href="/sign-up"
        className={cn(
          buttonVariants({
            size: "lg",
          }),
          buttonsClassname,
        )}
      >
        Sign up
      </Link>

      <Link
        href="/dashboard"
        className={cn(
          buttonVariants({
            size: "lg",
          }),
          buttonsClassname,
        )}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default Buttons;
