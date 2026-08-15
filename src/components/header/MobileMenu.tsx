import Buttons from "@/components/header/Buttons";
import Menu from "@/components/header/Menu";
import SearchInput from "@/components/header/SearchInput";
import ThemeTrigger from "@/components/header/ThemeTrigger";
import { Button } from "@/components/ui/button";
import * as sheet from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const MobileMenu = () => {
  return (
    <sheet.Sheet>
      <sheet.SheetTrigger
        className="lg:hidden"
        render={
          <Button variant="outline" size="icon-lg">
            <MenuIcon />
          </Button>
        }
      />
      <sheet.SheetContent>
        <sheet.SheetHeader>
          <sheet.SheetTitle>Menu</sheet.SheetTitle>
        </sheet.SheetHeader>

        <form className="grid gap-4 px-4">
          <SearchInput />

          <Buttons buttonsClassname="flex-1" />
        </form>

        <Menu
          navClassname="max-w-full items-start flex md:hidden"
          menuClassname="flex-col items-start px-4"
          itemClassname="w-full hover:translate-x-2 duration-150 after:w-0.5 after:h-full after:left-0 after:top-0 after:bottom-0 after:my-auto [&_a]:rounded-l-none [&_a]:focus:rounded-lg"
        />

        <sheet.SheetFooter>
          <ThemeTrigger buttonsClassName="flex-1" />
        </sheet.SheetFooter>
      </sheet.SheetContent>
    </sheet.Sheet>
  );
};

export default MobileMenu;
