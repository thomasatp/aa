import Link from "next/link";
import Arrow from "./arrow";

export default function Footer() {
  return (
    <footer className="grid items-end grid-cols-12 px-6 pt-48 pb-6 lg:px-20">
      <p className="xl:col-span-4 col-span-12 mb-12 xl:mb-0 font-semibold text-[28vw] lg:text-[20vw] xl:text-[13vw] leading-[0.8] select-none">
        and after
      </p>
      <div className="grid grid-cols-8 col-span-12 col-start-1 gap-6 xl:col-start-6 xl:col-span-7">
        <div className="flex flex-col col-span-8 mb-8 md:mb-0 sm:col-span-4 md:col-span-2">
          <div className="mb-6 text-lg font-normal leading-normal text-neutral-600">
            menu
          </div>
          <div className="flex flex-col gap-1 text-base font-normal leading-snug uppercase">
            <Link
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="/work"
            >
              work
            </Link>
            <Link
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="/about"
            >
              about
            </Link>
             <Link
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="/legal-notices"
            >
              legal notices
            </Link>
            
          </div>
        </div>
        <div className="flex flex-col col-span-8 mb-8 md:mb-0 sm:col-span-4 md:col-span-2">
          <div className="mb-6 text-lg font-normal leading-normal text-neutral-600">
            address
          </div>
          <div className="flex flex-col gap-1 text-base font-normal leading-snug uppercase">
            <p>5 bis rue Fays</p>
            <p>94160 Saint-Mandé</p>
            <p>France</p>
          </div>
        </div>
        <div className="flex flex-col col-span-8 mb-8 md:mb-0 sm:col-span-4 md:col-span-2">
          <div className="mb-6 text-lg font-normal leading-normal text-neutral-600">
            contact
          </div>
          <div className="flex flex-col gap-1 text-base font-normal leading-snug uppercase">
            <a
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="mailto:hello@andafter.fr"
            >
              hello@andafter.fr
            </a>
            <a
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="tel:0143652021"
            >
              01 43 65 20 21
            </a>
            <a
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="https://www.instagram.com/andafter_agency/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="https://www.instagram.com/andafter_agency/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end col-span-8 mb-8 md:mb-0 sm:col-span-4 md:col-span-2">
          <Arrow />
        </div>
      </div>
    </footer>
  );
}
