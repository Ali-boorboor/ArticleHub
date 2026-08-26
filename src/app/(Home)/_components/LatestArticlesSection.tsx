import Article from "@/components/article";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const LatestArticlesSection = () => {
  return (
    <section className="space-y-4">
      <div className="flex gap-2 justify-between items-center">
        <hgroup>
          <h3 className="text-xl font-semibold">Latest Articles</h3>
          <p className="text-muted-foreground line-clamp-2 sm:line-clamp-none">
            Discover fresh ideas, insights and stories from our community.
          </p>
        </hgroup>

        <Link
          className={cn(buttonVariants({ variant: "link", size: "lg" }))}
          href="/"
        >
          View all articles <MoveRight />
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
        {Array.from({ length: 4 })
          .fill(0)
          .map((_, index) => (
            <Article key={index} />
          ))}
      </div>
    </section>
  );
};

export default LatestArticlesSection;
