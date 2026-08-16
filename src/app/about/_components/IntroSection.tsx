import aboutCards from "@/app/about/_constants/aboutCards";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

const IMAGE_SRC = "/about-intro-img.png";

const IntroSection = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4 min-h-[80svh]">
      <hgroup className="text-center lg:text-left grid gap-4 justify-items-center lg:justify-items-start">
        <Badge
          variant="outline"
          className="h-auto text-sm pr-3 [&>svg]:size-6 [&>svg]:scale-200"
        >
          <Dot className="stroke-primary" />
          About <strong className="text-nowrap">ArticleHub</strong>
        </Badge>

        <h2 className="max-w-130 text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-sm text-shadow-primary/30">
          <p>Knowledge shared.</p>
          Ideas <span className="text-primary">Discovered.</span>
        </h2>

        <p className="max-w-130 leading-8 text-muted-foreground">
          <strong className="text-nowrap">ArticleHub</strong> is a modern
          publishing platform for writers to share their ideas, insights, and
          stories - and for readers to discover knowledge that matters.
        </p>

        <p className="max-w-130 leading-8 text-muted-foreground">
          Our mission is to make knowledge accessible and beautifully organized
          for everyone.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {aboutCards.map((card) => (
            <Fragment key={card.id}>
              <div className="flex items-center gap-4">
                <span className="size-6 text-primary drop-shadow-xs drop-shadow-primary">
                  {card.icon}
                </span>
                <div>
                  <h3 className="font-medium">{card.title}</h3>
                  <p className="text-muted-foreground">{card.text}</p>
                </div>
              </div>

              <Separator
                className="bg-foreground/30 hidden xl:block last:hidden"
                orientation="vertical"
              />
            </Fragment>
          ))}
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
