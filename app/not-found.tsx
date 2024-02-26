import { Metadata } from "next";
import Hero from "./ui/homepage/hero";
import Link from "next/link";
import { getError } from "./lib/getError";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  
  const error = await getError();

  return {
    title: `And After | ${error.metatitle}`,
    description: error.metadescription,
  };
}

export default async function NotFoundPage() {
    const error = await getError()
  return (
    <main className="h-screen">
      <Hero
        title={error.title}
        description={error.description}
      />
      <div className="relative flex justify-center px-6 mt-20 lg:px-20">
        <Link className="flex items-center h-16 px-8 text-lg transition-all duration-300 border rounded-full cursor-pointer dark:border-neutral-600 dark:hover:border-white dark:hover:bg-white dark:hover:text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white dark:text-white border-neutral-400 text-neutral-950" href="/">{error.button}</Link>
      </div>
    </main>
  );
}
