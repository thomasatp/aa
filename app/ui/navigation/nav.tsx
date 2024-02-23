import Logo from "../logo";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import NavContainer from "./navContainer";
import { getNavigation } from "@/app/lib/getNavigation";

export default async function Nav() {

  const nav = await getNavigation()
  return (
    <NavContainer>
      <Link href="/" aria-label="Homepage" className="flex items-center col-span-1 ">
        <Logo />
      </Link>
      <div className="flex justify-center col-span-1 gap-3 font-semibold lg:gap-4 text-md ">
        <Link className="px-2 py-2 lowercase" href={`/${nav[0].url}`}>
          {nav[0].category}
        </Link>
        <Link className="px-2 py-2 lowercase" href={`/${nav[1].url}`}>
          {nav[1].category}
        </Link>
        <a className="px-2 py-2 lowercase" href={`mailto:${nav[2].url}`}>
          {nav[2].category}
        </a>
      </div>
      <div className="flex items-center justify-end col-span-1 gap-4 cursor-pointer">
        <ToggleTheme />
      </div>
    </NavContainer>
  );
}
