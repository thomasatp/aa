import Hero from "../ui/homepage/hero";
import Contact from "./contact";

export default function Home() {
  return (
    <main>
      <Hero title="contact" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <div className='flex flex-col items-center mt-12'>
        <Contact/>
      </div>
    </main>
  );
}