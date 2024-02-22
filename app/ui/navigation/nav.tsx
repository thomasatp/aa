import Logo from "../logo";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import NavContainer from "./navContainer";

export default function Nav() {
  return (
    <NavContainer>
      <Link href="/" aria-label="Homepage" className="flex items-center col-span-1 ">
        <Logo />
      </Link>
      <div className="flex justify-center col-span-1 gap-4 font-semibold text-md ">
        <Link className="px-2 py-2" href="/work">
          <p>work</p>
        </Link>
        <Link className="px-2 py-2" href="/about">
          <p>about</p>
        </Link>
        <a className="px-2 py-2" href="mailto:hello@andafter.fr">
          contact
        </a>
      </div>
      <div className="flex items-center justify-end col-span-1 gap-4 cursor-pointer">
        <ToggleTheme />
      </div>
    </NavContainer>
  );
}
