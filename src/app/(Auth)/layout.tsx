import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In / Sign Up Page",
  description: "SignIn/Signup to your Account in ArticleHub",
};

const IMAGE_SRC = "/pages-image/auth-cover-img.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="row-span-full flex justify-center items-center">
      <section className="relative aspect-square flex-1 hidden md:block">
        <Image
          className="object-cover drop-shadow-2xl drop-shadow-primary/30"
          alt="Auth Page Cover"
          src={IMAGE_SRC}
          sizes="1249px"
          priority
          fill
        />
      </section>

      <Separator className="hidden md:block" orientation="vertical" />

      <section className="p-4 size-full flex-1 flex items-center justify-center bg-linear-to-br from-primary/10 via-accent/5 to-secondary/10">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
