import Logo from "./logo";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import NavContainer from "./navContainer";

export default function Nav() {

  return (
    <NavContainer>
      <Link href="/" className="col-span-1">
        <Logo />
      </Link>
      <div className="flex justify-center col-span-1 gap-4 font-semibold text-md ">
        <Link href="/work">
          <p>work</p>
        </Link>
        <p>about</p>
        <p>contact</p>
      </div>
      <div className="flex justify-end col-span-1 gap-4 cursor-pointer">
        <ToggleTheme />
      </div>
    </NavContainer>
  );
}
