import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, MoveRight, Pencil } from "lucide-react";
import Image from "next/image";

const IMAGE_SRC = "/home-intro-img.png";

const IntroSection = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4 min-h-[80svh]">
      <hgroup className="max-w-114 space-y-4 text-center sm:text-left">
        <Badge className="bg-primary/30 text-foreground font-semibold h-auto text-sm gap-2 py-1 px-3 shadow-md shadow-primary/30">
          <Flame />
          Knowledge Grows When It&apos;s Shared
        </Badge>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-sm text-shadow-primary/30">
          <p>Read. Write.</p>
          Make an <span className="text-primary">Impact.</span>
        </h2>

        <p className="leading-8 text-muted-foreground">
          ArticleHub is a modern publishing platform for writers to share their
          ideas, insights, and stories - and for readers to discover knowledge
          that matters.
        </p>

        <div className="flex gap-4 flex-wrap *:flex-1 lg:*:flex-none">
          <Button size="lg">
            Explore Articles <MoveRight />
          </Button>

          <Button variant="outline" size="lg">
            Start Writing <Pencil />
          </Button>
        </div>
      </hgroup>

      <Image
        className="max-w-2xl w-full object-cover drop-shadow-2xl drop-shadow-primary/30"
        alt="editor image"
        src={IMAGE_SRC}
        height={448}
        width={672}
        priority
      />
    </section>
  );
};

export default IntroSection;
