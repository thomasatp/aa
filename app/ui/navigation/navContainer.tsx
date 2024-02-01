"use client";
import { motion, } from "framer-motion";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import clsx from "clsx";
export default function NavContainer({
  children,
}: {
  children: React.ReactNode;
}) {
    const [isVisible, currentScroll] = useScrollDirection()

  return (
    <motion.nav
      className={clsx(
        "fixed top-0 left-0 z-50 grid w-full grid-cols-3 gap-6 px-6 py-8 lg:py-12 lg:px-20 transition-transform duration-300",
        {
          "translate-y-0": isVisible,
          "-translate-y-full": !isVisible,
          "bg-white dark:bg-neutral-950": scrollY > 120
        }
      )}
    >
      {children}
    </motion.nav>
  );
}
