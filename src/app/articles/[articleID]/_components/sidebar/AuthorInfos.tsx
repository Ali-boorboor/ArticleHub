import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AuthorInfos = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Author</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap items-center gap-2">
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="author avatar"
          />
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>

        <div>
          <Link
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 h-fit capitalize font-medium text-foreground hover:text-sidebar-primary",
            )}
            href="#"
          >
            John doe
          </Link>
          <p className="text-muted-foreground">Writer of 25 Articles</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorInfos;
