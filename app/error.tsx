"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Hero from "./_components/hero";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error.message);
  }, [error]);

  return (
    <main className="h-screen">
      <Hero title="Oups" description={error.message} />
      <div className="relative flex justify-center px-6 mt-20 lg:px-20">
        <Link href="/">
          <button className="flex items-center h-16 px-8 text-lg transition-all duration-300 border rounded-full cursor-pointer dark:border-neutral-600 dark:hover:border-white dark:hover:bg-white dark:hover:text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white dark:text-white border-neutral-400 text-neutral-950">
            Accueil
          </button>
        </Link>
      </div>
    </main>
  );
}
