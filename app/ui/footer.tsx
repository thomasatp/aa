import Link from "next/link";
import Arrow from "./arrow";

export default function Footer() {
  return (
    <footer className="grid items-end grid-cols-12 pt-48 pb-6 lg:px-20">
      <p className="col-span-4 font-semibold text-[28vw] lg:text-[20vw] xl:text-[13vw] leading-[0.8] select-none">
        and after
      </p>
      <div className="flex col-span-6 col-start-6 gap-6">
        <div className="flex flex-col w-full">
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
              href="/contact"
            >
              contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="mb-6 text-lg font-normal leading-normal text-neutral-600">
            address
          </div>
          <div className="flex flex-col gap-1 text-base font-normal leading-snug uppercase">
            <p>5 bis rue Fays</p>
            <p>94160 Saint-Mandé</p>
            <p>France</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
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
            <Link
              className="transition-all duration-300 hover:underline underline-offset-2"
              href="/contact"
            >
              contact
            </Link>
          </div>
        </div>

      <Arrow/>
      </div>
    </footer>
  );
}
