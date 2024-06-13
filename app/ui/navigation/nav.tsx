import Logo from "./logo";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import NavContainer from "./navContainer";
import { getNavigation } from "@/app/lib/getNavigation";
import InnerNav from "./innerNav";

export default async function Nav() {
  const nav = await getNavigation();
  return (
    <NavContainer>
      <div className="flex justify-between items-start mt-7 w-full lg:items-baseline">
        <Link href="/" aria-label="Homepage" className="flex z-40 flex-col">
          <div className="flex flex-col gap-x-4 text-xl font-bold lg:text-3xl lg:flex-row text-neutral-950 dark:text-white">
            <p>Design UX/UI</p>
            <p>Développement web/mobile</p>
          </div>
          <div className="flex gap-2 items-end mt-2">
            <Logo className="mb-1 transition-colors duration-300 fill-neutral-400 dark:neutral-400 size-5" />
            <p className="text-base font-medium text-neutral-400">
              Agence And After
            </p>
          </div>
        </Link>
        
        <InnerNav nav={nav} />
      </div>
    </NavContainer>
  );
}
