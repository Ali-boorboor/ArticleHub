import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/logo.png";

const Socials = () => {
  return (
    <section className="space-y-4">
      <div className="text-center">
        <Link className="flex gap-2 items-center w-fit" href="/">
          <Image
            className="w-14 h-14 object-cover"
            src={LOGO_SRC}
            height={64}
            width={64}
            alt="logo"
            priority
          />

          <h6 className="text-2xl font-bold">
            Article<span className="text-primary">Hub</span>
          </h6>
        </Link>

        <p className="text-muted-foreground">Write better. Share further.</p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link
          className={cn(
            buttonVariants({ variant: "outline", size: "icon-lg" }),
          )}
          href="https://github.com/Ali-boorboor"
          aria-label="github link"
          target="_blank"
        >
          <svg className="size-6 fill-sidebar-foreground">
            <use href="/footer-icons/github.svg" />
          </svg>
        </Link>

        <Link
          className={cn(
            buttonVariants({ variant: "outline", size: "icon-lg" }),
            "font-bold text-base text-sidebar-primary/80 hover:text-sidebar-primary",
          )}
          aria-label="github link"
          href="https://www.linkedin.com/in/ali-boorboor"
        >
          in
        </Link>

        <Link
          className={cn(
            buttonVariants({ variant: "outline", size: "icon-lg" }),
          )}
          href="https://portfolio-three-chi-l541bxyevl.vercel.app"
          aria-label="site link"
          target="_blank"
        >
          <Globe className="size-6" aria-hidden />
        </Link>
      </div>
    </section>
  );
};

export default Socials;
