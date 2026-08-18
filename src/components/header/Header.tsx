import Buttons from "@/components/header/Buttons";
import Menu from "@/components/header/Menu";
import MobileMenu from "@/components/header/MobileMenu";
import SearchInput from "@/components/header/SearchInput";
import ThemeTrigger from "@/components/header/ThemeTrigger";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/logo.png";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 bg-sidebar border-b flex justify-between items-center gap-4 px-4 py-1 shadow">
      <div className="flex-1">
        <Link className="flex gap-2 items-center w-fit" href="/">
          <Image
            className="w-14 xl:w-16 h-14 xl:h-16 object-cover"
            src={LOGO_SRC}
            height={64}
            width={64}
            alt="logo"
            priority
          />

          <h1 className="text-2xl xl:text-4xl font-bold">
            Article<span className="text-primary">Hub</span>
          </h1>
        </Link>
      </div>

      <Menu navClassname="hidden md:flex" />

      <form className="hidden lg:flex gap-4 flex-1 justify-end">
        <SearchInput />

        <ThemeTrigger />

        <Buttons />
      </form>

      <MobileMenu />
    </header>
  );
};

export default Header;
