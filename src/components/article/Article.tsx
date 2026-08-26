import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as card from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Article = () => {
  return (
    <Link href="/">
      <card.Card className="mx-auto group">
        <card.CardHeader>
          <Image
            className="z-20 aspect-video border max-h-40 rounded-xl w-full object-cover brightness-80 transition-all group-hover:brightness-95"
            src="/test-img.jpg"
            alt="article cover"
            height={160}
            width={384}
          />
        </card.CardHeader>

        <card.CardContent>
          <Badge>Featured</Badge>

          <card.CardTitle className="mt-3 mb-1">
            <h4 className="capitalize line-clamp-1">Design systems meetup</h4>
          </card.CardTitle>

          <card.CardDescription className="line-clamp-2">
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </card.CardDescription>
        </card.CardContent>

        <card.CardFooter className="justify-between">
          <div className="flex items-center gap-2">
            <Avatar size="lg">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="author avatar"
              />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>

            <div>
              <p className="capitalize font-medium">John doe</p>
              <p className="text-muted-foreground">May 8, 2025</p>
            </div>
          </div>

          <Button aria-label="bookmark" variant="ghost" size="icon">
            <Bookmark className="size-6 stroke-muted-foreground" aria-hidden />
          </Button>
        </card.CardFooter>
      </card.Card>
    </Link>
  );
};

export default Article;
