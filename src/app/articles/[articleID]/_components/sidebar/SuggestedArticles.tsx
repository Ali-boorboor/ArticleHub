import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SuggestedArticles = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Related Articles</CardTitle>
          <CardDescription>Visit related Articles to this one.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion>
            {Array.from({ length: 3 }).map((_, index) => (
              <AccordionItem key={index} value={index}>
                <AccordionTrigger>What is Tailwind</AccordionTrigger>
                <AccordionContent className="grid gap-2">
                  Tailwind CSS is a utility-first CSS framework that provides
                  low-level utility classes to build custom designs without
                  leaving your HTML.
                  <Link
                    className={cn(
                      buttonVariants({ variant: "link", size: "lg" }),
                      "text-sidebar-primary",
                    )}
                    href="#"
                  >
                    Visit Article
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest Articles</CardTitle>
          <CardDescription>
            Visit our latest Articles in this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion>
            {Array.from({ length: 3 }).map((_, index) => (
              <AccordionItem key={index} value={index}>
                <AccordionTrigger>What is Tailwind</AccordionTrigger>
                <AccordionContent className="grid gap-2">
                  Tailwind CSS is a utility-first CSS framework that provides
                  low-level utility classes to build custom designs without
                  leaving your HTML.
                  <Link
                    className={cn(
                      buttonVariants({ variant: "link", size: "lg" }),
                      "text-sidebar-primary",
                    )}
                    href="#"
                  >
                    Visit Article
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};

export default SuggestedArticles;
