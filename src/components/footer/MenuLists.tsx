import { buttonVariants } from "@/components/ui/button";
import footerUsedTechs from "@/constants/footer";
import headerLinks from "@/constants/headerlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MenuLists = () => {
  return (
    <section className="flex gap-8">
      <ul className="space-y-1 text-center">
        <li>
          <h6 className="font-medium">Navigate</h6>
        </li>

        {headerLinks.map((menuLink) => (
          <li key={menuLink.id}>
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-sidebar-foreground",
              )}
              href={menuLink.link}
            >
              {menuLink.title}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="space-y-1 text-center">
        <li>
          <h6 className="font-medium">Built with 💙</h6>
        </li>

        {footerUsedTechs.map((usedTech) => (
          <li key={usedTech.id}>
            <p className="text-sm text-sidebar-foreground font-medium whitespace-nowrap h-8 inline-flex items-center justify-center">
              {usedTech.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuLists;
