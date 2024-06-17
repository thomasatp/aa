"use client";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Sheet defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <SheetContent
        side={isDesktop ? "right" : "bottom"}
        className={clsx(
          " overflow-auto h-screen border-none dark:bg-neutral-900 p-0 bg-neutral-50",
          {
            "w-1/2 max-w-1/2 sm:max-w-1/2": isDesktop,
            "w-full max-w-full sm:max-w-full": !isDesktop,
          }
        )}
      >
        {/* <SheetClose asChild>
          <Button variant="outline">Olé</Button>
        </SheetClose> */}
        {children}
      </SheetContent>
    </Sheet>
  );
}
