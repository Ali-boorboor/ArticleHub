import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/logo.png";

const AdCard = () => {
  return (
    <Card className="bg-primary/30 shadow-md shadow-primary/30">
      <CardContent className="flex flex-wrap sm:flex-nowrap gap-4 items-center justify-center sm:justify-between">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
          <Image
            className="w-14 h-14 object-cover drop-shadow-sm drop-shadow-primary"
            src={LOGO_SRC}
            height={56}
            width={56}
            alt="logo"
          />

          <div className="text-center sm:text-left">
            <h5 className="font-semibold text-base">
              Ready to share your story?
            </h5>

            <p className="text-muted-foreground">
              Join thousands of writers who are already publishing on
              ArticleHub.
            </p>
          </div>
        </div>

        <Link className={cn(buttonVariants({ size: "lg" }))} href="/">
          Get started for free <MoveRight />
        </Link>
      </CardContent>
    </Card>
  );
};

export default AdCard;
