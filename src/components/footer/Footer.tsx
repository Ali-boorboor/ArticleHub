import MenuLists from "@/components/footer/MenuLists";
import Socials from "@/components/footer/Socials";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-sidebar border-t shadow">
      <div className="container mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-between p-4">
        <Socials />

        <MenuLists />
      </div>

      <Separator />

      <section className="container mx-auto p-4 flex flex-wrap-reverse sm:flex-nowrap justify-center sm:justify-between items-center gap-4 text-center text-muted-foreground text-sm sm:text-base">
        <p>
          © 2026 <strong className="text-nowrap">ArticleHub</strong>. All rights
          reserved.
        </p>

        <p>
          Made with 💙 and lot&apos;s of ☕ by{" "}
          <strong className="text-nowrap">Ali boorboor</strong>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
