import Logo from "./logo";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import NavContainer from "./navContainer";
import { getNavigation } from "@/app/lib/getNavigation";
import InnerNav from "./innerNav";
import Baseline from "./baseline";

export default async function Nav() {
  const nav = await getNavigation();
  return (
    <NavContainer>
      <div className="flex justify-between items-center w-full max-w-full">
        <Link
          href="/"
          aria-label="Homepage"
          className="flex relative z-40 flex-col"
        >
          <div className="flex gap-2 items-end">
            <Logo className="mb-1 transition-colors duration-300 fill-neutral-950 dark:fill-white size-6 lg:size-8" />
            <p className="text-2xl font-bold lg:text-3xl text-neutral-950 dark:text-white">
              Agence And After
            </p>
          </div>
          <Baseline />
        </Link>

        <InnerNav nav={nav} />
      </div>
    </NavContainer>
  );
}
