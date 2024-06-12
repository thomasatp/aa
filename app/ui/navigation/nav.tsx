import Logo from "./logo";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import NavContainer from "./navContainer";
import { getNavigation } from "@/app/lib/getNavigation";

export default async function Nav() {
  const nav = await getNavigation();
  return (
    <NavContainer>
      <div className="flex w-full items-baseline justify-between mt-7">
        <Link href="/" aria-label="Homepage" className="flex flex-col">
          <div className="text-3xl font-bold text-neutral-950 dark:text-white flex gap-4 items-end">
            <p>Design UX/UI</p>
            <p>Développement web/mobile</p>
          </div>
          <div className="flex gap-2 items-end mt-1">
            <Logo className="transition-colors duration-300 fill-neutral-400 dark:neutral-400 size-5 mb-1"/>
          <p className="text-base font-medium text-neutral-400">
            Agence And After
          </p>
          </div>
        </Link>
        <div className="flex items-center gap-3 font-semibold lg:gap-4 text-base">
          <Link className="px-2 py-2" href={`/${nav[0].url}`}>
            {nav[0].category}
          </Link>
          <Link className="px-2 py-2" href={`/${nav[1].url}`}>
            {nav[1].category}
          </Link>
          <a className="px-2 py-2" href={`mailto:${nav[2].url}`}>
            {nav[2].category}
          </a>
          <ToggleTheme />
        </div>
      </div>
    </NavContainer>
  );
}
