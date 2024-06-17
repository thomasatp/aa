import { Modal } from "../modal";
import Hero from "@/app/ui/homepage/hero";
import Contact from "@/app/contact/contact";

export default function Home() {
  return (
    <Modal>
      <main className="my-24">
        <div className="container flex flex-col max-w-screen-md max-lg:px-6">
          <h1 className="leading-[0.8] font-semibold text-neutral-950 dark:text-white text-3xl mb-6">contact</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex flex-col items-center mt-12">
          <Contact />
        </div>
      </main>
    </Modal>
  );
}
