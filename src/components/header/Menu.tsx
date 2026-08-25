import * as navigation from "@/components/ui/navigation-menu";
import headerLinks from "@/constants/headerlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MenuProps {
  navClassname?: string;
  menuClassname?: string;
  itemClassname?: string;
}

const Menu = ({ navClassname, menuClassname, itemClassname }: MenuProps) => {
  return (
    <navigation.NavigationMenu className={cn(navClassname)}>
      <navigation.NavigationMenuList className={cn("gap-4", menuClassname)}>
        {headerLinks.map((headerLink) => (
          <navigation.NavigationMenuItem
            className={cn(
              "text-nowrap font-semibold relative group transform-gpu will-change-transform hover:text-sidebar-primary after:absolute after:w-full after:h-0.5 after:top-12 xl:after:top-13 after:mx-auto after:transition-all hover:after:bg-sidebar-primary",
              itemClassname,
            )}
            key={headerLink.id}
          >
            <navigation.NavigationMenuLink
              className="hover:bg-transparent"
              render={
                <Link href={headerLink.link}>
                  {headerLink.icon}
                  {headerLink.title}
                </Link>
              }
            />
          </navigation.NavigationMenuItem>
        ))}
      </navigation.NavigationMenuList>
    </navigation.NavigationMenu>
  );
};

export default Menu;
