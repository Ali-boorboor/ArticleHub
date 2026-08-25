import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleArticlePage = () => {
  return (
    <main className="container min-w-0 mx-auto px-4 flex md:items-start flex-col-reverse md:flex-row justify-between gap-4">
      <article
        className="flex-1 bg-sidebar p-4 rounded-lg border shadow space-y-4 font-persian"
        dir="rtl"
      >
        <header>
          <h2 className="text-4xl text-center font-semibold">تیلویند چیست؟</h2>

          <Separator className="my-4" />

          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2 group">
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="author avatar"
                />
                <AvatarFallback>AH</AvatarFallback>
              </Avatar>

              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "capitalize p-0 h-fit text-base font-medium text-foreground hover:text-sidebar-primary",
                )}
                href="#"
              >
                John doe
              </Link>
            </div>

            <time className="text-muted-foreground inline-flex gap-2 items-center">
              <CalendarClock aria-hidden />
              May 8, 2025
            </time>
          </div>
        </header>

        <section className="leading-8 space-y-4">
          <Image
            className="my-4 aspect-video border shadow max-h-110 rounded-xl w-full object-cover"
            src="/test-img.jpg"
            alt="Article cover"
            width={1134}
            height={440}
          />

          <p>
            تیلویند (Tailwind CSS) یکی از ابزارهای مدرن برای طراحی رابط کاربری
            است که امکان ساخت سریع و انعطاف‌پذیر صفحات ریسپانسیو (واکنش گرا) را
            فراهم می‌کند. برخلاف روش سنتی &quot;CSS&quot;، در تیلویند می‌توانید
            با استفاده از کلاس‌های کوچک و کاربردی، استایل عناصر را به‌صورت
            مستقیم در &quot;HTML&quot; ایجاد کنید. اما برای این‌که بدانید دلایل
            محبوبیت Tailwind CSS چیست و چه تفاوتی با Bootstrap دارد، در ادامه
            این مقاله از مجله سبزلرن با ما همراه شوید.
          </p>

          <h4 className="text-2xl font-medium">
            دلایل محبوبیت Tailwind CSS چیست؟
          </h4>

          <p>
            در CSS سنتی برای طراحی یک دکمه ابتدا باید یک کلاس اختصاصی ایجاد کنید
            و سپس تمام ویژگی‌های ظاهری آن را در فایل CSS بنویسید، ولی در
            Tailwind می‌توانید همین استایل‌ها را با ترکیب چند کلاس Utility ایجاد
            کنید. Tailwind CSS در سال ۲۰۱۷ توسط آدام واتان توسعه یافت و با هدف
            افزایش سرعت توسعه، کاهش نیاز به نوشتن CSS اضافی و حفظ انعطاف‌پذیری
            در طراحی ایجاد شد.در پاسخ به این سوال که دلایل مهم‌ترین دلایل
            Tailwind CSS چیست نیز باید به‌موارد زیر اشاره کرد:
          </p>

          <ul className="list-disc px-4 marker:text-sidebar-primary">
            <li>توسعه سریع‌تر پروژه‌ها</li>
            <li>سادگی در مدیریت کدهای ظاهری</li>
            <li>سازگاری با اکوسیستم مدرن Front-End</li>
            <li>جامعه کاربری و منابع آموزشی گسترده</li>
          </ul>

          <pre
            className="mx-auto my-4 bg-secondary text-secondary-foreground px-2 py-1 rounded-lg border shadow max-w-full max-h-96 [&_code]:text-nowrap overflow-auto scrollbar-thin scrollbar-track-sidebar-accent scrollbar-thumb-sidebar-primary scroll-fade-t"
            dir="ltr"
          >
            <code>
              &lt;h2 class=&quot;text-2xl font-bold&quot;&gt; آموزش Tailwind CSS
              &lt;/h2&gt;
            </code>
          </pre>

          <a
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              "text-sidebar-primary",
            )}
            href="#"
          >
            دوره Tailwind Css
          </a>
        </section>
      </article>

      <aside className="md:sticky top-22 z-40 bg-sidebar max-w-full md:max-w-xs w-full flex flex-col gap-4 justify-between p-4 rounded-lg border shadow">
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

        <Card>
          <CardHeader>
            <CardTitle>Related Articles</CardTitle>
            <CardDescription>
              Visit related Articles to this one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion>
              <AccordionItem value={1}>
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

              <AccordionItem value={2}>
                <AccordionTrigger>What is React</AccordionTrigger>
                <AccordionContent className="grid gap-2">
                  React lets you build user interfaces out of individual pieces
                  called components. Create your own React components like
                  Thumbnail , LikeButton , and Video . Then combine them into
                  entire screens, pages, and apps.
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

              <AccordionItem value={3}>
                <AccordionTrigger>What is Next</AccordionTrigger>
                <AccordionContent className="grid gap-2">
                  Next. js is a React framework that enables several extra
                  features, including server-side rendering and static
                  rendering. React is a JavaScript library that is traditionally
                  used to build web applications rendered in the client&apos;s
                  browser with JavaScript.
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
              <AccordionItem value={1}>
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

              <AccordionItem value={2}>
                <AccordionTrigger>What is React</AccordionTrigger>
                <AccordionContent className="grid gap-2">
                  React lets you build user interfaces out of individual pieces
                  called components. Create your own React components like
                  Thumbnail , LikeButton , and Video . Then combine them into
                  entire screens, pages, and apps.
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

              <AccordionItem value={3}>
                <AccordionTrigger>What is Next</AccordionTrigger>
                <AccordionContent className="grid gap-2">
                  Next. js is a React framework that enables several extra
                  features, including server-side rendering and static
                  rendering. React is a JavaScript library that is traditionally
                  used to build web applications rendered in the client&apos;s
                  browser with JavaScript.
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
            </Accordion>
          </CardContent>
        </Card>
      </aside>
    </main>
  );
};

export default SingleArticlePage;
